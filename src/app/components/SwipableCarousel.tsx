import { useCallback, useEffect, useState } from "react";

export default function SwipableCarousel({
  slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  index,
  onIndexChange,
}: {
  yposition?: string;
  sizeOfIndicator?: string;
  enableIndicator?: boolean;
  gapbetweenindicator?: string;
  indicatorBorderWidth?: string;
  autoSlide?: boolean;
  slides: React.ReactElement[];
  autoSlideInterval?: number;
  index: number;
  onIndexChange: (index: number) => void;
}) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 20;

  // Update parent state and internal state when specific index is selected
  const specificIndex = (index: number) => {
    onIndexChange(index);
  };

  const prev = () => {
    const newIndex = index === 0 ? slides.length - 1 : index - 1;
    onIndexChange(newIndex);
  };

  const next = useCallback(() => {
    const newIndex = index === slides.length - 1 ? 0 : index + 1;
    onIndexChange(newIndex);
  }, [index, slides.length, onIndexChange]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) =>
    setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe || isRightSwipe) {
      if (isLeftSwipe) {
        next();
      } else {
        prev();
      }
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  return (
    <div
      //   onTouchStart={onTouchStart}
      //   onTouchMove={onTouchMove}
      //   onTouchEnd={onTouchEnd}
      className="relative flex h-full w-full items-center justify-start overflow-x-hidden  "
    >
      <div
        aria-label={`slide-transparent`}
        role="tabpanel"
        className="h-full w-full min-w-[11%] lg:min-w-[33.33%]  transition-transform duration-500 ease-in-out bg-transparent  flex justify-end "
        style={{
          transform: `translateX(-${index * 100}%)`,
          // minWidth: `${100 / slides.length}%`,
        }}
      ></div>
      {slides.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          aria-label={`slide-${slideIndex}`}
          role="tabpanel"
          className="h-full w-full min-w-[80%] lg:min-w-[33.33%]  transition-transform duration-500 ease-in-out flex items-center justify-center"
          style={{
            transform: `translateX(-${index * 100}%)`,
            // minWidth: `${100 / slides.length}%`,
          }}
        >
          {slide}
        </div>
      ))}{" "}
      <div
        aria-label={`slide-transparent`}
        role="tabpanel"
        className="h-full w-full min-w-[11%] lg:min-w-[33.33%]  transition-transform duration-500 ease-in-out  bg-transparent justify-start"
        style={{
          transform: `translateX(-${index * 100}%)`,
          // minWidth: `${100 / slides.length}%`,
        }}
      ></div>
    </div>
  );
}

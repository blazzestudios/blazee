/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
"use client";
import ForwardArrow from "@/assets/icons/forwardArrow.svg";
import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SeamlessScrollGallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let iteration = 0; // Keeps track of the iteration

    const spacing = 0.08, // Spacing between cards
      snap = gsap.utils.snap(spacing), // Snap function for smooth snapping
      cards = gsap.utils.toArray(".cards li") as HTMLElement[],
      seamlessLoop = buildSeamlessLoop(cards, spacing),
      scrub = gsap.to(seamlessLoop, {
        // Scrub smoothly through the loop
        totalTime: 0,
        duration: 0.5,
        ease: "power3",
        paused: true,
      });

    const trigger = ScrollTrigger.create({
      start: 0,
      onUpdate(self) {
        if (
          self.progress === 1 &&
          self.direction > 0
          // && !self.wrapping
        ) {
          wrapForward(self);
        } else if (
          self.progress < 1e-5 &&
          self.direction < 0
          // && !self.wrapping
        ) {
          wrapBackward(self);
        } else {
          scrub.vars.totalTime = snap(
            (iteration + self.progress) * seamlessLoop.duration()
          );
          scrub.invalidate().restart(); // Improve performance by reusing the same tween
          // self.wrapping = false;
        }
      },
      end: "+=3000",
      pin: ".gallery",
    });

    function wrapForward(trigger: any) {
      iteration++;
      trigger.wrapping = true;
      trigger.scroll(trigger.start + 1);
    }

    function wrapBackward(trigger: any) {
      iteration--;
      if (iteration < 0) {
        iteration = 9;
        seamlessLoop.totalTime(
          seamlessLoop.totalTime() + seamlessLoop.duration() * 10
        );
        scrub.pause();
      }
      trigger.wrapping = true;
      trigger.scroll(trigger.end - 1);
    }

    function scrubTo(totalTime: number) {
      const progress =
        (totalTime - seamlessLoop.duration() * iteration) /
        seamlessLoop.duration();
      if (progress > 1) {
        wrapForward(trigger);
      } else if (progress < 0) {
        wrapBackward(trigger);
      } else {
        trigger.scroll(
          trigger.start + progress * (trigger.end - trigger.start)
        );
      }
    }

    document
      .querySelector(".next")
      ?.addEventListener("click", () =>
        scrubTo(scrub.vars.totalTime + spacing)
      );
    document
      .querySelector(".prev")
      ?.addEventListener("click", () =>
        scrubTo(scrub.vars.totalTime - spacing)
      );

    function buildSeamlessLoop(items: HTMLElement[], spacing: number) {
      let overlap = Math.ceil(1 / spacing),
        startTime = items.length * spacing + 0.5,
        loopTime = (items.length + overlap) * spacing + 1,
        rawSequence = gsap.timeline({ paused: true }),
        // eslint-disable-next-line prefer-const
        seamlessLoop = gsap.timeline({
          paused: true,
          repeat: -1,
          onRepeat() {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            this._time === this._dur && (this._tTime += this._dur - 0.01);
          },
        }),
        l = items.length + overlap * 2,
        time = 0;

      // Set initial state
      gsap.set(items, { xPercent: 400, opacity: 0, scale: 0 });

      // Create the staggered animation
      for (let i = 0; i < l; i++) {
        const index = i % items.length;
        const item = items[index];
        time = i * spacing;
        rawSequence
          .fromTo(
            item,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              zIndex: 100,
              duration: 0.5,
              yoyo: true,
              repeat: 1,
              ease: "power1.in",
              immediateRender: false,
            },
            time
          )
          .fromTo(
            item,
            { xPercent: 400 },
            {
              xPercent: -400,
              duration: 1,
              ease: "none",
              immediateRender: false,
            },
            time
          );
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        i <= items.length && seamlessLoop.add("label" + i, time);
      }

      rawSequence.time(startTime);
      seamlessLoop
        .to(rawSequence, {
          time: loopTime,
          duration: loopTime - startTime,
          ease: "none",
        })
        .fromTo(
          rawSequence,
          { time: overlap * spacing + 1 },
          {
            time: startTime,
            duration: startTime - (overlap * spacing + 1),
            immediateRender: false,
            ease: "none",
          }
        );

      return seamlessLoop;
    }

    return () => {
      // Cleanup ScrollTrigger on component unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="max-w-[1300px] h-full mx-auto relative  px-5 py-16 w-full  ">
      <div
        ref={galleryRef}
        className=" w-full h-full relative  flex flex-col overflow-hidden "
      >
        <ul className="cards  relative lg:w-[450px] w-[80vw]   aspect-[450/512] top-1/2 left-2/4 transform -translate-x-1/2 -translate-y-1/2 ">
          {Array.from({ length: 20 }, (_, i) => (
            <li
              key={i}
              className=" list-none lg:w-[450px]  w-[80vw]   aspect-[450/512]  bg-[#171717] rounded-lg text-center leading-72 text-2xl absolute top-0 left-0"
            >
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="actions mx-auto w-full flex justify-center gap-[26px]">
        <button className="prev  flex justify-center items-center border-[2px] border-[#1D1D1D] aspect-square lg:w-16 w-11 p-2 lg:p-3 rounded-full">
          <Image
            className="rotate-180 w-full"
            alt="prev"
            src={ForwardArrow}
          ></Image>
        </button>
        <button className="next  flex justify-center items-center border-[2px] border-[#1D1D1D] aspect-square lg:w-16 w-11 p-2 lg:p-3 rounded-full">
          <Image alt="prev" className="w-full" src={ForwardArrow}></Image>
        </button>
      </div>
    </div>
  );
};

export default SeamlessScrollGallery;

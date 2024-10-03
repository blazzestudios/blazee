import HeroSection from "./_HeroSection";
import SeamlessScrollGallery from "./_Testimonials";

import WhatWeOffer from "./_WhatWeOffer";

import Footer from "./components/Footer";
import InfiniteScrollInfoBar from "./components/InfiniteScrollInfoBar";

export default function Home() {
  return (
    <div className="flex flex-col h-full   items-start  lg:gap-11 gap-[26px] overflow-y-auto">
      <div className="min-h-16 w-full lg:block hidden" />
      <HeroSection />
      <InfiniteScrollInfoBar />
      <WhatWeOffer />
      <SeamlessScrollGallery />

      <Footer />
    </div>
  );
}

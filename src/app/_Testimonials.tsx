"use client";
import React, { useState } from "react";
import ForwardArrow from "@/assets/icons/forwardArrow.svg";
import SwipableCarousel from "./components/SwipableCarousel";
import Image from "next/image";
import RatingIndicator from "./components/RatingIndicator";

export default function SeamlessScrollGallery() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const slide = [
    "#1a1a1a",
    "6c6c6c",
    "#7f6f7f",
    "#1a1a1a",
    "6c6c6c",
    "#7f6f7f",
  ];
  return (
    <div className="relative flex flex-col h-full w-full max-w-[1300px]  mx-auto gap-[26px] py-16">
      <SwipableCarousel
        index={currentIndex}
        onIndexChange={setCurrentIndex}
        sizeOfIndicator="1.2vh "
        yposition="4"
        autoSlide={false}
        gapbetweenindicator="5"
        slides={slide.map((slide, i) => {
          return (
            <div
              style={{
                transition: "opacity 0.5s ease, transform 0.5s ease", // Smooth transition for opacity and transform
              }}
              key={i}
              className={`h-full w-full max-w-full lg:max-w-[450px]  lg:aspect-[450/512] aspect-[270/307]   flex justify-center items-center text-white  ${
                currentIndex === i ? "opacity-100" : "opacity-45"
              }`}
            >
              <div
                style={{
                  transition: " transform 0.5s ease", // Smooth transition for opacity and transform
                }}
                className={`min-h-full min-w-full bg-[#171717] flex flex-col  justify-between items-start lg:p-11 p-6 ${
                  currentIndex === i ? "scale-[100%]" : "scale-[70%]"
                }`}
              >
                <div className="flex flex-col lg:gap-6 gap-3 items-start">
                  <RatingIndicator rating={4} />
                  <p className="lg:text-2xl text-sm font-medium text-white/80  overflow-hidden text-ellipsis leading-[14px] line-clamp-[15] lg:line-clamp-[10]">
                    <span className="lg:text-4xl  lg:leading-[28px]">{`"`}</span>
                    {
                      "their team took our wellness brand and elevated it to new heights with their thoughtful design and strategic branding. our wellness brand and elevated it to new heights with their thoughtful design and strategic."
                    }
                    <span className="lg:text-4xl lg:leading-[28px]">{`"`}</span>
                  </p>
                </div>
                <div className="flex gap-6 items-center">
                  <div className="lg:min-w-[50px] min-w-[30px] aspect-square h-full bg-white rounded-full" />
                  <div className=" flex flex-col items-start justify-start lg:gap-1">
                    <p className="text-sm lg:text-2xl font-normal text-white ">
                      shagirul hassan
                    </p>
                    <p className="text-xs lg:text-xl font-medium text-white/60 text-ellipsis line-clamp-1">
                      {"Software Developer at Blazze but not welajojs"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      />
      <div className=" mx-auto w-full flex justify-center gap-[26px] ">
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex((i) => --i);
          }}
          className={` flex justify-center items-center border-[2px] border-[#1D1D1D] aspect-square lg:w-16 w-11 p-2 lg:p-3 rounded-full  ${
            currentIndex === 0 && "opacity-40"
          }`}
        >
          <Image
            className="rotate-180 w-full h-full"
            alt="prev"
            src={ForwardArrow}
          />
        </button>
        <button
          onClick={() => {
            setCurrentIndex((i) => ++i);
          }}
          disabled={currentIndex === slide.length - 1}
          className={` flex justify-center items-center border-[2px] border-[#1D1D1D] aspect-square lg:w-16 w-11 p-2 lg:p-3 rounded-full   ${
            currentIndex === slide.length - 1 && "opacity-40"
          }`}
        >
          <Image alt="next" className="w-full h-full" src={ForwardArrow} />
        </button>
      </div>
    </div>
  );
}

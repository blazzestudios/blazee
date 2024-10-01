"use client";

import React, { useEffect, useRef } from "react";

const InfiniteScrollInfoBar = () => {
  const logosRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && logosRef.current) {
      const ul = logosRef.current as HTMLUListElement; // Assert that it is an HTMLUListElement
      ul.insertAdjacentHTML("afterend", ul.outerHTML);
      const nextSibling = ul.nextSibling as HTMLElement; // Assert nextSibling as HTMLElement
      if (nextSibling) {
        nextSibling.setAttribute("aria-hidden", "true");
      }
    }
  }, []);

  // animate-infinite-scroll from tailwind config
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden min-h-[66px]  border-y-[2px] border-[#1D1D1D]">
      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-[12px] [&_img]:max-w-none animate-infinite-scroll"
      >
        {[
          "Tailored Solutions",
          "Innovative Design",
          "Cross-Platform Compatibility",
          "Agile Development",
          "Client-Centric Approach",
          "Scalability",
          "Robust Security Measures",
          "Transparent Communication",
          "Timely Delivery",
          "Continuous Improvement",
          "Dedicated Support",
          "Competitive Pricing",
        ].map((text, index) => {
          return (
            <li className="flex  lg:gap-5 items-center gap-3 " key={index}>
              <p className=" text-center  text-white text-2xl font-bold whitespace-nowrap">
                {text}
              </p>
              <svg
                className="min-w-4 aspect-square"
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_416_122)">
                  <path
                    d="M11.0938 0.796143L11.2113 1.46805C12.1323 6.73342 16.2745 10.725 21.5769 11.4569L21.783 11.4854C16.558 11.7481 12.2206 15.924 11.7518 21.143L11.5917 22.9256C11.36 16.6606 6.28037 11.8411 -0.000271402 11.8902L0.872692 11.7234C6.25697 10.6948 10.4392 6.22359 11.0938 0.796143Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_416_122">
                    <rect
                      width="16"
                      height="15.6893"
                      fill="white"
                      transform="translate(11.0938 0.796143) rotate(45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default InfiniteScrollInfoBar;

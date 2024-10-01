"use client";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function MouseFollower() {
  useEffect(() => {
    const mouseFollower = document.getElementById("mouseFollower");

    const moveMouseFollower = (e: MouseEvent) => {
      gsap.to(mouseFollower, {
        x: e.clientX - 24, // Center the follower based on the mouse position
        y: e.clientY - 24,
        ease: "power3.out",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveMouseFollower);

    return () => {
      window.removeEventListener("mousemove", moveMouseFollower);
    };
  }, []);
  return (
    <div
      id="mouseFollower"
      className="absolute min-w-[24px] min-h-[24px] top-[12px] left-[12px] h-fit w-fit  bg-white  rounded-full   z-[1000]"
    ></div>
  );
}
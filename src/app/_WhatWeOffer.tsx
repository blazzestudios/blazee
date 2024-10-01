"use client";
import Image from "next/image";
import FlipIcon from "@/assets/icons/flip.svg";
import { useState } from "react";

export const CardShineEffect = ({
  index,
  topic,
  title,
  subtitle,
  offers,
}: {
  index: number;
  topic: string;
  title: string;
  subtitle: string;
  offers?: string[];
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onClick={() => setIsHovered((prev) => !prev)}
      className=" aspect-[390/460] w-full h-full "
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(.5turn)" : "rotateY(0deg)",
        }}
        className=" text-center relative p-20 transition-transform duration-1000 text-white font-bold h-full "
      >
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="card__front absolute top-0 bottom-0 right-0 left-0 "
        >
          <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] aspect-[390/460] w-full h-full bg-[#080808] relative max-w-md overflow-hidden  border-[#1D1D1D] border-[2px] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-[26px] flex flex-col justify-between items-start shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
            <p className="text-white/60 font-medium text-base">
              {index}. {topic}
            </p>
            <div className="flex flex-col w-full gap-4">
              <div className="flex justify-between w-full items-end">
                <p className="font-extrabold text-2xl capitalize">{title}</p>
                <Image alt="" src={FlipIcon}></Image>
              </div>
              <p className="text-nowrap w-full overflow-hidden text-ellipsis text-base font-medium text-white/80">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(.5turn)" }}
          className="card_back absolute top-0 bottom-0 right-0 left-0 "
        >
          <div className=" aspect-[390/460] w-full h-full bg-white shadow-[3px_9px_100px_39px_#f7fafc32] relative max-w-md overflow-hidden  border-[#ffffff] border-[2px]  p-[26px] flex flex-col justify-between items-start   ">
            <p className="text-black/60 font-medium text-base">
              {index}. {topic}
            </p>
            <div className="flex flex-col w-full ">
              {offers!.map((li, i) => {
                return (
                  <div
                    className="min-h-11 py-[10px] tracking-tighter text-start w-full border-b-[1px] border-black/20 my-auto flex items-center justify-start text-2xl font-extrabold text-black"
                    key={i}
                  >
                    {li}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] aspect-[390/460] w-full h-full bg-[#080808] relative max-w-md overflow-hidden  border-[#1D1D1D] border-[2px] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-[26px] flex flex-col justify-between items-start shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
    //   <p className="text-white/60 font-medium text-base">
    //     {index}. {topic}
    //   </p>
    //   <div className="flex flex-col w-full gap-4">
    //     <div className="flex justify-between w-full items-end">
    //       <p className="font-extrabold text-2xl capitalize">{title}</p>
    //       <Image alt="" src={FlipIcon}></Image>
    //     </div>
    //     <p className="text-nowrap w-full overflow-hidden text-ellipsis text-base font-medium text-white/80">
    //       {subtitle}
    //     </p>
    //   </div>
    // </div>
  );
};

export default function WhatWeOffer() {
  return (
    <div className="max-w-[1300px] px-5 py-24 flex-col flex mx-auto items-start w-full gap-24">
      <div className="flex flex-col gap-[10px]">
        <p className="uppercase text-base font-normal text-white/60 ">
          What We Offer
        </p>
        <h2 className="text-5xl font-semibold leading-[90%] tracking-tighter max-w-[713px]">
          Crafting Innovative Product Design & Development
        </h2>
      </div>
      <div className="flex gap-9 w-full">
        {[
          {
            topic: "STRATEGY",
            title: "Brand Strategy",
            subtitle: "Research & Insight, Brand Architecture and more...",
            offer: [
              "Research & Insights",
              "Branding",
              "Branding Strategies",
              "Marketing Creatives",
              "Visual & Verbal Identity",
              "Illustrations",
            ],
          },
          {
            topic: "DESIGN",
            title: "Design Service",
            subtitle: "Wireframe & Prototype, UI/UX Design, and more...",
            offer: [
              "Art Direction and strategy",
              "UX Design and Wireframing",
              "User Research",
              "UX Audit",
              "Enterprise Design System",
            ],
          },
          {
            topic: "DEVELOPMENT",
            title: "Digital Experiences",
            subtitle: "Full Stack Development, Performance and more...",
            offer: [
              "Research & Analysis",
              "Full Stack Development",
              "Web App/ Mobile App/ PWAs",
              "3D Interactive Development",
              "Personalized CMS Integration",
              "AI/ML Integration",
              "SEO Strategies",
            ],
          },
        ].map((card, i) => {
          return (
            <CardShineEffect
              offers={card.offer}
              index={i + 1}
              subtitle={card.subtitle}
              title={card.title}
              topic={card.topic}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

"use client";

import BlazzeTextIcon from "@/assets/icons/blazzeText.svg";
import BlazzeFullIcon from "@/assets/icons/blazzeFullIcon.svg";
import HamBurgerIcon from "@/assets/icons/hamburger.svg";
import CloseIcon from "@/assets/icons/close.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  const [open, SetOpen] = useState(false);
  return (
    <div className="absolute top-0 w-full px-4 lg:px-5 py-5 lg:py-0 z-[999] lg:border-b-[2px] border-[#1D1D1D] lg:bg-[#080808]  ">
      <div
        className={`w-full  backdrop-blur-3xl lg:backdrop-blur-none bg-[#35353560] lg:bg-transparent  py-5 px-6 lg:px-5 lg:py-0 flex flex-col gap-6 justify-between lg:max-w-[1300px] mx-auto  ${
          open ? "rounded-[20px] " : " rounded-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <Image className="lg:hidden block" alt="Logo" src={BlazzeTextIcon} />
          <div className=" gap-[26px] items-center hidden lg:flex">
            <Image
              className=" mb-[23px] mt-[3px]"
              alt="Logo"
              src={BlazzeFullIcon}
            />
            {["work", "about", "service"].map((link) => {
              return (
                <Link href={link} key={link} className=" text-base font-normal">
                  {link}
                </Link>
              );
            })}
          </div>

          <Image
            className="lg:hidden block"
            onClick={() => {
              SetOpen((prev) => !prev);
            }}
            alt="HamBurger"
            src={open ? CloseIcon : HamBurgerIcon}
          />
          <div className=" gap-[26px] items-center hidden lg:flex">
            <Link
              href={"/pricing"}
              key={"pricing"}
              className=" text-base font-normal capitalize"
            >
              {"pricing"}
            </Link>
            <Link
              href={"/Contact"}
              className="px-5 py-[10px] bg-white rounded-full  text-black text-[15px] font-semibold"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        {open && (
          <div className="flex lg:hidden flex-col gap-3">
            {["work", "about", "service", "contact us"].map((link) => {
              return (
                <Link href={link} key={link} className=" text-xl font-medium">
                  {link}
                </Link>
              );
            })}
          </div>
        )}{" "}
        {open && (
          <div className="lg:hidden w-full flex justify-center items-center bg-[#FCFCFC] text-black/90 text-sm font-semibold px-5 py-3 rounded-full">
            {` Let's Connect`}
          </div>
        )}
      </div>
    </div>
  );
}

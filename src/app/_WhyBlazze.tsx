"use client";

import ThunderboltIcon from "@/assets/icons/thunderbolt.svg";
import NetworkIcon from "@/assets/icons/network.svg";
import InvestIcon from "@/assets/icons/invest.svg";
import FrameIcon from "@/assets/icons/frame.svg";
import LockIcon from "@/assets/icons/lock.svg";
import Image from "next/image";
import ContactCard from "./components/ConnectCard";
import { useEffect, useState, useRef } from "react";

export default function WhyBlazze() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const items = [
    {
      title: "Delivering Fast, Reliable Solutions",
      subtitle:
        "Our cutting-edge technologies ensure quick load times and optimal performance, keeping your business ahead with efficient, high-speed solutions.",
      logo: ThunderboltIcon,
    },
    {
      title: "Collaborative Approach for Your Success",
      subtitle:
        "We work closely with you, fostering a strong partnership to ensure our solutions align perfectly with your goals and vision.",
      logo: NetworkIcon,
    },
    {
      title: "Invest in Excellence",
      subtitle:
        "We focus on superior craftsmanship and attention to detail, providing high-quality solutions that offer lasting value and reduced future costs.",
      logo: InvestIcon,
    },
    {
      title: "Simple, Intuitive Control",
      subtitle:
        "Our user-friendly content management systems make updating and managing your content easy, saving you time and simplifying maintenance.",
      logo: FrameIcon,
    },
    {
      title: "Protecting Your Digital Assets",
      subtitle:
        "We implement robust security measures to safeguard your data, giving you peace of mind with comprehensive protection against potential threats.",
      logo: LockIcon,
    },
  ];

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setSelectedIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : (prevIndex ?? -1) + 1
      );
    }, 7000);
  };

  useEffect(() => {
    resetInterval();

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items.length]);

  const handleSelect = (index: number) => {
    // Set selectedIndex to the clicked index
    setSelectedIndex(index);
    resetInterval();
  };

  return (
    <div className="flex shrink-0 flex-col lg:flex-row py-16 px-5 w-full max-w-[1300px] mx-auto gap-10 overflow-y-auto">
      <ContactCard />
      <div className="w-full h-full flex flex-col gap-4">
        {items.map((li, i) => (
          <div className="flex-col" key={i} onClick={() => handleSelect(i)}>
            <div
              className={`flex w-full p-6 h-full item-start justify-start gap-4 cursor-pointer lg:border-none 
                ${
                  selectedIndex === i
                    ? "bg-[#171717]"
                    : "border-[1px] border-white/20"
                }
              `}
            >
              <Image className="h-fit" alt="icon" src={li.logo} />
              <div className="flex flex-col w-full justify-between items-start leading-[26px] tracking-tighter gap-4">
                <p className="text-2xl font-extrabold">{li.title}</p>
                {selectedIndex === i && (
                  <p className="text-base text-white/80">{li.subtitle}</p>
                )}
              </div>
            </div>

            {/* Animated bar */}
            <div
              className={`relative h-[2px] w-full bg-[#444444] ${
                selectedIndex === i
                  ? "bg-[#444444] visible"
                  : "bg-transparent opacity-0"
              }`}
            >
              <div
                className={`absolute h-full w-full bg-gradient-to-r from-[#0a0a0a] to-white flex justify-end items-center ${
                  selectedIndex === i ? "transition-all duration-[7s]" : ""
                }`}
                style={{
                  width: selectedIndex === i ? "100%" : "0%",
                }}
              >
                <div className="min-w-[6px] min-h-[2px]  rounded-full bg-white shadow-[-2px_0px_6px_2px_#f7fafc]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

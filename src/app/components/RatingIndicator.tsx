import Image from "next/image";
import React from "react";
import StarIcon from "@/assets/icons/star.svg";

export default function RatingIndicator({ rating }: { rating: number }) {
  const totalStars = 5;
  const starsArray = Array(totalStars).fill(0); // Create an array of length 5

  return (
    <div className="flex items-center lg:gap-3 gap-2">
      {starsArray.map((_, index) => (
        <span key={index} className="text-yellow-500 text-2xl">
          {index < rating ? (
            <Image className=" lg:w-full w-[9px]" alt="★" src={StarIcon} />
          ) : (
            <Image
              className="opacity-20 h-full lg:w-full w-[9px]"
              alt="☆"
              src={StarIcon}
            />
          )}
        </span>
      ))}
    </div>
  );
}

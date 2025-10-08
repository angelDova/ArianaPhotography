"use client";

import React from "react";
import { marqueeItems } from "@/data/data";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
    <div className="border-t border-neutral-900 flex gap-10 justify-center">
      <Marquee pauseOnHover={true}>
        {marqueeItems.map((item, index) => (
          <div className="flex items-center p-5" key={index}>
            <Image
              src="/images/star-shape.svg"
              alt="shape"
              width={30}
              height={30}
            />
            <p className="text-lg text-neutral-400">{item.label}</p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};
export default MarqueeSection;

"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/Button";
import MarqueeSection from "@/components/MarqueeSection";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animation";

const HeroSections = () => {
  return (
    <section>
      <MarqueeSection />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Content */}
        <div className="container max-lg:my-10 grid lg:grid-cols-3 lg:items-center lg:justify-between">
          {/* Title */}

          <div className="">
            <motion.p variants={fadeInUp} className="subtitle">
              Stunning Photography by
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-[40px] sm:text-5xl md:text-6xl font-semibold"
            >
              Ariana Cordova
            </motion.h1>
          </div>

          {/* Shape */}
          <div className="max-lg:hidden">
            <Image
              src="/images/shape-1.svg"
              alt="shape"
              width={346}
              height={346}
              className="opacity-5"
            />
          </div>

          {/* Title 2 */}
          <motion.div variants={fadeInUp}>
            <Button label="Let's" />
            <h2>Collaborate</h2>
          </motion.div>
        </div>
        {/* Marquee */}
        {/* <MarqueeSection />
        Banner */}
        <motion.figure variants={fadeInUp} className="container">
          <Image
            src="/images/hero-banner.png"
            alt="hero"
            width={1280}
            height={424}
            priority
            className="w-full h-full object-cover"
          />
        </motion.figure>
      </motion.div>
    </section>
  );
};

export default HeroSections;

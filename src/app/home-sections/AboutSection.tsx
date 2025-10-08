"use client";

import Divider from "@/components/Divider";
import SocialIcons from "@/components/Socials";
import Title from "@/components/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { motion } from "motion/react";
import { fadeIn, fadeInUp, staggerContainer } from "@/motion/animation";

const AboutSection = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title  */}
        <Title subtitle="About" title="I am Ariana" link="Know More" />
        {/* Divider */}
        <Divider />
        {/* Wrapper  */}
        <div className="grid gap-4 lg:grid-cols-2 lg:items-center">
          {/* Banner  */}
          <motion.figure variants={fadeInUp}>
            <Image
              src={"/images/about-section-banner.png"}
              alt="banner"
              width={783}
              height={710}
            />
          </motion.figure>
          {/* content  */}
          <motion.div
            variants={fadeInUp}
            className="border border-neutral-900 p-6 rounded-2xl mt-5"
          >
            {/* wrapper  */}
            <div className="">
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src={"/images/shape-2.svg"}
                  alt="shape"
                  width={30}
                  height={30}
                />
                Introduction
              </h3>
              <p className="">
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            {/* wrapper  */}
            <div className="grid gap-5 mt-6">
              {" "}
              <h3 className="flex items-center gap-2 text-xl font-semibold lg:text-3xl my-3">
                <Image
                  src={"/images/shape-2.svg"}
                  alt="shape"
                  width={30}
                  height={30}
                />
                Contact Information
              </h3>
              {/* links wrapper  */}
              <div className="flex gap-3 flex-col lg:flex-row lg:gap-10">
                {/* email address  */}
                <div className="">
                  <p className="">Email</p>
                  <a
                    href="mailto:arianacordova@gmail.com"
                    className="hover:underline"
                  >
                    arianacordova@gmail.com
                  </a>
                </div>
                {/* Phone Number  */}
                <div className="">
                  <p className="">Phone Number</p>
                  <a href="tel:5622222222" className="hover:underline">
                    562-222-2222
                  </a>
                </div>
              </div>
              {/* buttons wrapper */}
              <div className="flex gap-3 justify-between lg:items-center lg:flex-row flex-col flex-wrap">
                {/* Social Icons */}
                <SocialIcons />
                <Link href={"#"} className="primary-btn">
                  Let's Work
                </Link>
                <Link href={"#"} className="primary-btn">
                  Download Resume
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;

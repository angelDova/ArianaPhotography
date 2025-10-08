"use client";

import Divider from "@/components/Divider";
import ServicesCard from "@/components/ServicesCard";
import Title from "@/components/Title";
import { servicesHighlights } from "@/data/data";
import Image from "next/image";
import React from "react";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/motion/animation";

const ServicesSection = () => {
  return (
    <section className="section">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="container"
      >
        {/* Title */}
        <Title
          subtitle="Services"
          title="My Photography Services"
          link="View All Services"
        />
        {/* Divider  */}
        <Divider />
        {/* Wrapper */}
        <div className="grid gap-[50px] lg:grid-cols-2">
          {/* Banner */}
          <motion.figure variants={fadeInUp} className="lg:order-1">
            <Image
              src={"/images/services-section-banner.png"}
              alt="banner"
              width={773}
              height={625}
              className="rounded-t-xl rounded-b-4xl"
            />
          </motion.figure>
          {/* Content  */}
          <div className="grid gap-14">
            <div className="">
              <motion.h2 variants={fadeInUp} className="">
                Events
              </motion.h2>
              <motion.p variants={fadeInUp} className="my-5 max-w-[570px]">
                Our event photography service is dedicated to capturing the
                magic of your special occasions. Whether it's a wedding,
                corporate event, or milestone celebration, we're there to
                document every heartfelt moment. We blend into the background,
                ensuring natural and candid shots that reflect the emotions of
                the day.
              </motion.p>
            </div>

            <div className="">
              <motion.p
                variants={fadeInUp}
                className="font-medium text-white mb-5 text-xl"
              >
                Service Highlights
              </motion.p>
              {/* Card Wrapper  */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid gap-2"
              >
                {servicesHighlights.map((item) => (
                  // card
                  <ServicesCard key={item.id} label={item.label} />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ServicesSection;

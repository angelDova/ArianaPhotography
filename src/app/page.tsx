import React from "react";
import HeroSections from "./home-sections/HeroSections";
import AboutSection from "./home-sections/AboutSection";
import ServicesSection from "./home-sections/ServicesSection";
import PortfolioSection from "./home-sections/PortfolioSection";
import FaqSec from "@/components/FaqSec";
import TestimonialCard from "@/components/TestimonialCard";

export default function Home() {
  return (
    <>
      <HeroSections />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      {/* FAQ Section  */}
      <section className="section">
        <FaqSec />
      </section>

      {/* Testimonial Section  */}
      <section className="section">
        <TestimonialCard />
      </section>
    </>
  );
}

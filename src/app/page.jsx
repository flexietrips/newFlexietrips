import React from "react";
import HeroSection from "./hero-section";
import WhyChoose from "./why-choose";
import Itinerary from "./itenary";
import Testimonials from "./testimonials";
import Blogs from "./blogs";
import PlanYourTrip from "./plan-your-trip";

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />

      {/* Wrapper for responsive sections */}
      <div
        className="
          container
          mx-auto
          px-4 sm:px-6 lg:px-8 
          flex flex-col 
          gap-16 
          w-full
        "
      >
        <WhyChoose />
        <Itinerary />
        <Testimonials />
        <Blogs />
        <PlanYourTrip />
      </div>
    </main>
  );
}

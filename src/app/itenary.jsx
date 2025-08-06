"use client";

import DestinationCarousel from "@/components/DestinationCarousel";
import React from "react";

export default function Itinerary() {
  return (
    <section id="tours">
      <h2 className="text-2xl lg:text-4xl flex items-center justify-center mb-4 font-semibold">
        Our
        <span className="text-[#00ADB5] ml-2">Handpicked</span>
        &nbsp;Destinations
      </h2>
      <p className="text-center text-lg mb-8 text-gray-600  mx-auto">
       <span className="text-[#00ADB5] font-semibold">
          Explore our carefully
          </span>
        {" "}
         handpicked destinations, each chosen for its
        beauty, culture, and unforgettable experiences. Whether you seek
        adventure, relaxation, or cultural discovery, our curated itineraries
        promise memorable journeys. Let us guide you to breathtaking landscapes
        and unique experiences tailored for every traveler’s dream adventure.
      </p>

      <DestinationCarousel />
    </section>
  );
}

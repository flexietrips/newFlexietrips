"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import { DESTINATIONS } from "@/data";

export default function DestinationCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const selectedDestination = DESTINATIONS[selectedIndex];

  const handleDestinationChange = (index) => {
    if (index === selectedIndex || isTransitioning) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleDestinationChange((selectedIndex + 1) % DESTINATIONS.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [selectedIndex]);

  return (
    <div className="relative min-h-[500px] sm:min-h-[600px] md:min-h-[720px] w-full overflow-hidden rounded-xl">
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out ${
          isTransitioning ? "scale-110 blur-sm" : "scale-105"
        }`}
        style={{ backgroundImage: `url(${selectedDestination.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />

      {/* Main Content */}
      <div className="relative h-full flex flex-col md:flex-row">
        {/* Sidebar - Hidden on mobile */}
        <div className="hidden md:flex w-80 flex-shrink-0 flex-col justify-center p-8 backdrop-blur-sm bg-black/30 overflow-x-auto">
          <div className="flex-1 flex flex-col justify-center space-y-4">
            {DESTINATIONS.map((destination, index) => (
              <div
                key={destination.id}
                onClick={() => handleDestinationChange(index)}
                className={`cursor-pointer transition-all duration-500 ease-out transform ${
                  index === selectedIndex
                    ? "scale-110 translate-x-4"
                    : "hover:scale-105 hover:translate-x-2"
                }`}
              >
                <div
                  className={`p-4 rounded-xl backdrop-blur-sm border transition-all duration-500 ${
                    index === selectedIndex
                      ? "bg-white/20 border-white/40 shadow-2xl"
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <MapPin
                      className={`w-5 h-5 transition-all duration-300 ${
                        index === selectedIndex
                          ? "text-white scale-110"
                          : "text-white/70"
                      }`}
                    />
                    <h3
                      className={`font-semibold transition-all duration-300 ${
                        index === selectedIndex
                          ? "text-white text-lg"
                          : "text-white/80 text-base hover:text-white"
                      }`}
                    >
                      {destination.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-8 md:px-12 py-6 md:py-0">
          <div className="max-w-3xl text-center">
            <div
              className={`transition-all duration-700 ease-out ${
                isTransitioning
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                {selectedDestination.title}
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed">
                {selectedDestination.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                {selectedDestination.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-xs sm:text-sm font-medium hover:bg-white/20 transition-all duration-300"
                  >
                    {highlight}
                  </span>
                ))}
              </div>

              <button className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-2xl text-sm sm:text-base">
                Explore Destination
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2 rotate-[-90deg]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 flex flex-col space-y-1 sm:space-y-2">
        {DESTINATIONS.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDestinationChange(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

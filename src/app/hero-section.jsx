"use client";
import { HERO_MAIN_CONTENT } from "@/data";
import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/assets/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Video Only */}
      <div className="absolute inset-0 bg-black/45 z-0"></div>

      {/* Text & CTA */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-left z-10 px-6 sm:px-12 md:px-20 gap-3 sm:gap-4">
        <div className="container mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Your{" "}
            <span className="bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,173,181,0.8)]">
              Journey,
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Your{" "}
            <span className="bg-gradient-to-r from-[#00FFF5] to-[#00ADB5] bg-clip-text text-transparent drop-shadow-[0_4px_10px_rgba(0,173,181,0.8)]">
              Way
            </span>
          </h1>
          <Link
  href="#plan-your-trip"
  className="mt-4 sm:mt-6 inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
  style={{
    background:
      "linear-gradient(to right, #00ADB5 0%, #004C4F 50%, #007C82 100%)",
    boxShadow: "0 4px 15px rgba(0, 173, 181, 0.5)",
  }}
>
  Start Travelling
</Link>
        </div>
      </div>

      {/* Bottom Black Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-black/70 py-3 sm:py-4 text-center z-20">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {HERO_MAIN_CONTENT.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-white text-sm sm:text-base font-medium"
            >
              <img src={item.icon} alt="icon" className="w-5 h-5 sm:w-6 sm:h-6" />

              <span className="flex items-center">
                {item.label}
                {item.reactIcon && (
                  <img
                    src={item.reactIcon}
                    alt="star"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1 inline-block"
                  />
                )}
                {item.suffix && <span>{item.suffix}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

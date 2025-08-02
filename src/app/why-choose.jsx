"use client";

import { CardCarousel } from "@/components/ui/card-carousel";
import { CAROUSEL_IMAGES, WHY_CHOOSE_CONTENT } from "@/data";
import React from "react";
import { useState, useEffect } from "react";


export default function WhyChoose() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const delay = 2000; // 2 seconds

  useEffect(() => {
    const checkSize = () => {
      setIsMobileOrTablet(window.innerWidth < 1024); // <1024px = tablet/mobile
    };
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Auto-slide only on mobile/tablet
  useEffect(() => {
    if (!isMobileOrTablet) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= WHY_CHOOSE_CONTENT.length ? 0 : prev + 1
      );
    }, delay);
    return () => clearInterval(interval);
  }, [isMobileOrTablet]);

  const translateX = `-${currentIndex * 100}%`;
  return (
    <section className=" py-16">
       <h2 className="text-2xl lg:text-4xl flex items-center justify-center mb-4 font-semibold">
        Why to choose <span className="text-[#00ADB5] ml-2">us</span>?
      </h2>
      <div className="flex justify-center mt-8">
        <p className="text-lg text-gray-600 ¸ text-center">
         <span className="text-[#00ADB5] font-semibold">
          Your Journey, Your Way
          </span> — 
          We make group travel seamless with
          customizable itineraries, transparent pricing, and 24/7 expert
          support. With 100+ tours, 97% 5-star ratings, and women-led treks
          offering 100% safety, enjoy flexible, secure, and unforgettable
          experiences—whether it’s a friends’ trip, family reunion, or corporate
          retreat.
        </p>
      </div>

  {isMobileOrTablet ? (
        <div className="overflow-hidden mt-12 mb-12">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(${translateX})` }}
          >
            {WHY_CHOOSE_CONTENT.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center min-w-full px-4"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-14 h-14 mb-4 object-contain"
                />
                <h2 className="text-base font-medium">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Desktop View → Static Grid
        <div className="flex flex-wrap justify-center gap-10 mt-12 mb-12">
        {WHY_CHOOSE_CONTENT.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-50 text-center"
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 mb-4 object-contain"
            />
            <h2 className="text-base font-medium">{item.title}</h2>
          </div>
        ))}
      </div>
      )}

      <CardCarousel
        images={CAROUSEL_IMAGES}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </section>
  );
}




  
   
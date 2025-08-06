"use client";

import CircularCard from "@/components/CircularCard";
import { Marquee } from "@/components/magicui/marquee";
import { destinations } from "@/data/travelDestinations";
import TravelForm from "@/components/TravelForm";
import Modal from "@/components/Modal";
import React, { useState } from "react";

export default function OurDestinations() {
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (destination) => {
    setSelectedDestination(destination);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedDestination(null);
  };

  return (
    <section>
      <h2 className="text-2xl lg:text-4xl flex items-center justify-center mb-4 font-semibold">
        Local <span className="text-[#00ADB5] ml-2">Journeys</span> , Global{" "}
        <span className="text-[#00ADB5] ml-2">Vibes</span>
      </h2>
      <p className="text-center text-lg mb-8 text-gray-600 mx-auto">
        <span className="text-[#00ADB5] font-semibold">
          From Kashmir's serene
        </span>{" "}
         lakes to Kerala's tranquil backwaters, join us in
        discovering India's diverse beauty. Trek Himalayan trails, ride camels
        in Rajasthan, dive in Andaman, or sip tea in Sikkim. Every journey is
        shared, every memory made together — because travel is better when
        experienced with each other.
      </p>

      <div className="destination-bg overflow-hidden relative flex items-center">
        <div className="absolute inset-0 bg-[url(/bg-image.png)] opacity-30"></div>
        <Marquee pauseOnHover className="[--duration:30s]">
          {[...destinations, ...destinations].map((destination, index) => (
            <CircularCard
              key={`scroll-${destination.id}-${index}`}
              destination={destination}
              onClick={() => handleCardClick(destination)}
            />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} size="default">
        {selectedDestination && (
          <TravelForm 
            destination={selectedDestination}
            showMap={false}
            onClose={handleCloseModal}
          />
        )}
      </Modal>

      <style jsx>{`
        @keyframes slide-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes slide-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-slide-left {
          animation: slide-left 30s linear infinite;
        }
        .animate-slide-right {
          animation: slide-right 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
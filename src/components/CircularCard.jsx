import Image from "next/image";
import React from "react";

export default function CircularCard({ destination, onClick }) {
  return (
    <div
      className="relative group cursor-pointer flex-shrink-0"
      onClick={onClick}
    >
      <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden  transform transition-all duration-300  group-hover:shadow-3xl border-2 border-black/20">
        <Image
          src={destination.image}
          alt={destination.name}
          height={100}
          width={100}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
          <h3 className="text-white font-bold text-sm md:text-sm mb-1 text-shadow-2xs">
            {destination.name}
          </h3>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300  flex flex-col justify-center items-center text-center w-full">
          <div className="space-y-2 w-full">
            <div className="text-lg font-bold text-[#00ADB5] mt-1.5 bg-white w-full  text-center">
              {destination.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

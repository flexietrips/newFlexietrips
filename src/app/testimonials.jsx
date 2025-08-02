import React from "react";
import { REVIEWS } from "@/data";
import { Marquee } from "@/components/magicui/marquee";
import ReviewCard from "@/components/ReviewCard";

const firstRow = REVIEWS.slice(0, REVIEWS.length / 2);
const secondRow = REVIEWS.slice(REVIEWS.length / 2);
export default function Testimonials() {
  return (
    <section>
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-center">
        We Care About Our
        <span className="text-[#00ADB5] ml-2">Customers</span>
        <br />
        Experience too
      </h2>
      <p className="text-lg text-gray-600 text-center  mb-12">
        <span className="text-[#00ADB5] font-semibold">
          Your Journey, Our Passion
        </span>
        {" "}
        — We prioritize your experience with personalized service, expert
        guidance, and a commitment to making every trip unforgettable. Join our
        community of satisfied travelers who trust us for their adventures.
      </p>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
}

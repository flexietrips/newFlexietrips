import BlogsCard from "@/components/BlogsCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
// import { BLOGS } from '@/data'
import React from "react";

const data = await fetch(
  "https://lovable-growth-4951fded8b.strapiapp.com/api/blogs?populate=* ",
  { cache: "no-store" }
);
const response = await data.json();

export default function Blogs() {
  const blogs = response.data;

  return (
    <section id="blog">
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-center">
        Read Latest
        <span className=" text-[#00ADB5] ml-2">News And Blogs</span>
      </h2>
      <p className=" text-lg text-gray-600 text-center mb-12">
        <span className=" text-[#00ADB5] font-semibold">
          Your Journey, Our Insights
        </span>{" "}
        — Stay informed with our latest travel news, tips, and stories. From
        destination highlights to travel advice, we share insights to inspire
        your next adventure.
      </p>
      <Carousel>
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem className="md:basis-1/3 lg:basis-1/3" key={index}>
              <BlogsCard
                title={blog.title}
                date={blog.publishedAt}
                image={blog.image.url}
                description={blog.shortDescription}
                onclick={`/blogs/${blog.documentId}`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

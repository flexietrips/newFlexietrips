import BlogsCard from '@/components/BlogsCard'
import { BLOGS } from '@/data'
import React from 'react'

export default function Blogs() {
  return (
    <section id='blog'>
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-center">
        Read Latest
        <span className=' text-[#00ADB5] ml-2'>
        News And Blogs
        </span>
        </h2>
      <p className=' text-lg text-gray-600 text-center mb-12'>
        <span className=' text-[#00ADB5] font-semibold'>
          Your Journey, Our Insights
        </span>
        {" "}
        — Stay informed with our latest travel news, tips, and stories. From destination highlights to travel advice, we share insights to inspire your next adventure.
      </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {BLOGS.map((blog, index) => (
        <BlogsCard
          key={index}
          title={blog.title}
          date={blog.date}
          image={blog.image}
          onClick={blog.onClick}
        />
      ))}
    </div>
    </section>
  )
}

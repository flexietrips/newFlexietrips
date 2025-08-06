import React from 'react'

export default function About() {
  return (
    <section id='about'>

       <h2 className="text-2xl lg:text-4xl flex items-center justify-center mb-4 font-semibold">
        About
        <span className="text-[#00ADB5] ml-2">Us</span>
       
      </h2>
 <p className=' text-lg text-gray-600 text-center mb-12'>
        <span className=' text-[#00ADB5] font-semibold'>
         We’re a travel expert and a tech geek
        </span>
        {" "}
       who faced a disappointing trip to Rajasthan. That experience inspired us to create a platform focused on transparency, flexible payments, and 24/7 support — everything we wished we had. Our mission: to make travel simpler, safer, and truly customer-first.
      </p>
    </section>
  )
}

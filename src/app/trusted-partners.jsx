import { Marquee } from '@/components/magicui/marquee'
import React from 'react'

export default function TrustedPartners() {
  return (
    <section className='mb-16'>
        <h2 className="text-4xl font-semibold text-center mb-8">Our <span className="text-[#00ADB5]">Trusted Partners</span></h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          <span className="text-[#00ADB5] font-semibold">Your Journey, Our Network</span>
          {" "}
          - We collaborate with top-tier partners to ensure your travel experience is seamless and enriching. From luxury accommodations to local guides, our trusted network enhances every aspect of your journey.
        </p>

<Marquee></Marquee>

        <p className="text-center text-gray-500 mt-6">
          Join us in exploring the world with confidence, backed by our trusted partners.
        </p>
    </section>
  )
}

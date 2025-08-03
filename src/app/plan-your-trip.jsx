import TravelForm from '@/components/TravelForm'
import React from 'react'

export default function PlanYourTrip() {
  return (
    <section className=' mb-16 ' id='plan-your-trip'>
         <h2 className="text-2xl lg:text-4xl flex items-center justify-center mb-4 font-semibold">Plan Your <span className="text-[#00ADB5] ml-2">Dream</span> &nbsp; Trip</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          <span className="text-[#00ADB5] font-semibold">Your Journey, Our Commitment</span>
          {" "}
          - At <span className="font-semibold text-[#00ADB5]">FlexiEtrips</span>, we skip the boring and craft trips that scream you. From compact stays to epic experiences—every plan is tailored, not templated. With 24x7 expert support and zero stress, your next getaway isn’t just a trip… it’s a total vibe.
Start planning now →
        </p>
        <TravelForm/>
      </section>

  )
}

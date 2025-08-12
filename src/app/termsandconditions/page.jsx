"use client"

import React from "react"

export default function TermsConditionsPage() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00ADB5] mb-2">
          Terms and Conditions
        </h1>
       
        <p className="mb-6 text-lg text-gray-700">
          Welcome to <span className="font-semibold">FlexiEtrips.com</span>! These Terms and Conditions ("T&C") govern your relationship with us when you access, browse, or book travel services through our website, app, or any affiliated digital channels ("Platform"). By continuing to use our Platform or confirming any travel arrangement, you agree to be legally bound by these T&C.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <Section
            number="1"
            title="User Eligibility & Agreement"
            content={[
              "Users must be at least 18 years old to create an account or make bookings.",
              "If you're booking on someone else's behalf, you are responsible for their understanding and compliance with these T&C.",
              "Once a booking is paid for (either partially or fully), the agreed itinerary/quotation becomes binding. Any past verbal or informal communication will not be considered part of the agreement."
            ]}
          />

          <Section
            number="2"
            title="Types of Bookings Covered"
            text="These T&C apply to all services booked via FlexiEtrips.com, including:"
            content={[
              "Individual Experiences (e.g., one-time activity, entry ticket, or excursion).",
              "Complete Travel Packages (e.g., multi-day itineraries with hotels, flights, transfers, activities, or visa support)."
            ]}
          />

          <Section
            number="3"
            title="Role of FlexiEtrips"
            content={[
              "FlexiEtrips is an intermediary. We collaborate with independent third-party service providers (hotels, airlines, operators, visa agents, etc.).",
              "Your primary service contract is with the service provider (Supplier), but these T&C govern how you interact with FlexiEtrips and use our platform."
            ]}
          />

          <Section
            number="4"
            title="Booking Process & Confirmation"
            content={[
              "You may choose your travel services, participants, and dates directly through our platform or via a shared quotation.",
              "After payment, you will receive a Booking Confirmation which finalizes your reservation.",
              "Please double-check inclusions/exclusions, pickup points, and health eligibility requirements."
            ]}
          />

          <Section
            number="5"
            title="Cancellation, Refunds & Changes"
            content={[
              "All cancellation fees and refund timelines are dictated by the original Supplier and detailed in your Quotation.",
              "Delayed payments can lead to auto-cancellation and applicable penalties.",
              "Changes to participant count, travel dates, or services may incur additional charges and are subject to availability.",
              "Emergency-based cancellation waivers (medical/family) require proof and may be considered case-by-case."
            ]}
          />

          <Section
            number="6"
            title="Flights & Air Travel"
            content={[
              "FlexiEtrips does not operate flights. All tickets issued follow the airline's fare rules (e.g., no-show, baggage, cancellations).",
              "Delays, rescheduling, or cancellations by airlines are beyond our control. Refunds (if applicable) follow airline timelines.",
              "Users are responsible for transit visas, web check-ins, and complying with airport policies."
            ]}
          />

          <Section
            number="7"
            title="Hotels & Accommodations"
            content={[
              "Hotel policies like check-in requirements, ID rules, deposits, or couple restrictions vary by property.",
              "Local surcharges (e.g., city tax, festive meals, tourism fee) must be paid directly at the hotel.",
              "Any issues like overbooking will be addressed with alternative accommodations of equal category."
            ]}
          />

          <Section
            number="8"
            title="Transfers & Local Transport"
            content={[
              "Transfer types (private/shared) are clearly mentioned in your Quotation.",
              "Standard baggage allowance includes one suitcase + one cabin bag per person.",
              "Be present at pickup points at least 10 minutes early. No refunds for missed transfers without documented proof."
            ]}
          />

          <Section
            number="9"
            title="Visa Assistance"
            content={[
              "FlexiEtrips helps with visa processes but cannot guarantee approvals.",
              "Any visa rejection or delay does not entitle a refund unless stated otherwise in the final Quotation.",
              "Required documents, embassy interviews, and logistics (including passport delivery) are the user's responsibility."
            ]}
          />

          <Section
            number="10"
            title="User Responsibilities"
            content={[
              "Users must provide accurate information (e.g., names, passport details) at the time of booking.",
              "Local regulations, customs, and laws must be followed during travel.",
              "FlexiEtrips is not responsible for denied services resulting from incorrect data or non-compliance."
            ]}
          />

          <Section
            number="11"
            title="Travel Risks & Disclaimers"
            content={[
              "Some travel services (e.g., adventure sports, safaris) involve inherent risks. Participation is at your own risk.",
              "We are not responsible for injury, loss, or damages caused by third parties or unforeseen events."
            ]}
          />

          <Section
            number="12"
            title="Force Majeure & Supplier Issues"
            content={[
              "Events like natural disasters, political unrest, strikes, or pandemics may impact travel.",
              "In such cases, FlexiEtrips and its Suppliers may cancel or modify bookings. Refunds, if any, are subject to Supplier approval and refund release."
            ]}
          />

          <Section
            number="13"
            title="User Content & Reviews"
            content={[
              "By submitting reviews or photos, you grant FlexiEtrips a license to use them for marketing or service improvement.",
              "Content deemed inappropriate or harmful may be removed at our discretion."
            ]}
          />

          <Section
            number="14"
            title="Communication Consent"
            content={[
              "By using our services, you agree to receive service-related and promotional messages via SMS, email, or WhatsApp.",
              "You can opt-out anytime via unsubscribe links or by contacting our support."
            ]}
          />

          <Section
            number="15"
            title="Data Privacy & Security"
            content={[
              "Your personal information is used only for service facilitation and is shared only with verified partners.",
              "We do not store or handle payment data directly. All transactions are processed securely via third-party gateways.",
              "Data may be shared with law enforcement if required by applicable law."
            ]}
          />

          <Section
            number="16"
            title="Payment Terms & Invoicing"
            content={[
              "Payments are accepted via verified online channels only. Cash deposits are not allowed and will not be honored.",
              "TCS certificates are issued quarterly, 45 days post each quarter's close.",
              "GST invoices are issued on request after trip completion."
            ]}
          />

          <Section
            number="17"
            title="Disputes & Legal Jurisdiction"
            text="These Terms are governed under the laws of Himachal Pradesh, India. Any disputes arising from these Terms or your use of FlexiEtrips.com shall fall under the exclusive jurisdiction of the courts located in Himachal Pradesh."
          />

          <Section
            number="18"
            title="Indemnity & Limitation of Liability"
            content={[
              "You agree to hold FlexiEtrips harmless against any claims, damages, or losses arising from misuse, errors in information, or third-party failures.",
              "Our total liability is capped at the value of your booking with us."
            ]}
          />

          <Section
            number="19"
            title="Policy Updates"
            content={[
              "These Terms may be updated from time to time. Continued use of the platform constitutes acceptance of the updated T&C.",
              "Users are advised to revisit this page periodically for the latest terms."
            ]}
          />

          <Section
            number="20"
            title="Complaints & Claims"
            content={[
              "All refund requests and complaints must be submitted within 5 days of trip completion, along with proof (emails, screenshots, receipts).",
              "Claims submitted after this window will not be entertained."
            ]}
          />

          <Section
            number="21"
            title="Acknowledgment"
            text="By accessing our platform, making a booking, or using any of our services, you confirm that you have read, understood, and agreed to these Terms and Conditions."
          />

          <Section
            number="22"
            title="Contact Us"
            text={
              <>
                📧 Email:{" "}
                <a href="mailto:info@flexietrips.com" className="text-[#00ADB5] underline">
                  info@flexietrips.com
                </a>
                <br />
                📞 Phone: <span className="font-medium">9805722642</span>
                <br />
                🏢 Office Address: Solan, Himachal Pradesh
              </>
            }
          />
        </div>
      </div>
    </section>
  )
}

function Section({ number, title, content, text, note }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#00ADB5] mb-3">
        {number}. {title}
      </h2>
      {text && <p className="text-gray-700 mb-2">{text}</p>}
      {content && (
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {note && <p className="mt-2 text-gray-700">{note}</p>}
    </div>
  )
}
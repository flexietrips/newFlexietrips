"use client"

import React from "react"

export default function CancellationPolicyPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="container mx-auto ">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00ADB5] mb-2">
          Payment & Cancellation Policy
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          At <span className="font-semibold">FlexiEtrips</span>, we strive to provide transparency in our payment collection and cancellation policies. Please review the terms below for <span className="font-semibold">Short Haul Packages</span> including Domestic Trips, Bhutan, Andaman & Nicobar Islands.
        </p>

        {/* Payment Collection main */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#00ADB5] mb-4 flex items-center">
            💰 Payment Collection Plan 
          </h2>
          <p className="text-gray-700 mb-6">
            <span className="font-semibold">Domestic Trips, Bhutan, Andaman & Nicobar Islands.</span><br/>
            To confirm and secure your travel arrangements, payments are to be made in phases as follows:
          </p>
          
          <div className="space-y-6">
            <PaymentPhase 
              phase="1"
              title="At the Time of Booking"
              amount="25% of the total package cost"
              purpose="To initiate bookings — accommodation, internal transfers, permits, and basic arrangements"
              note="Non-refundable in case of cancellation, but can be converted into a credit note if cancelled before 31 days (see cancellation policy)"
            />
            
            <PaymentPhase 
              phase="2"
              title="30 Days Before Departure"
              amount="50% of the total package cost"
              purpose="To confirm hotels, transport, sightseeing slots, and finalize vendor payments"
              note="This payment is essential to proceed with core service bookings"
            />
            
            <PaymentPhase 
              phase="3"
              title="15 Days Before Departure"
              amount="Remaining 25% of the package cost"
              purpose="Final confirmations, e-vouchers, tickets, and itinerary will only be issued after this payment is cleared"
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          <Section
            icon="⚠️"
            title="Late Payment Terms & Liabilities"
            text="If payments are not made as per the above timelines:"
            content={[
              "FlexiEtrips will not be held responsible for: Change in pricing (such as increased hotel/transport/activity costs)",
              "Unavailability of previously confirmed services",
              "Last-minute replacements or quality variations in bookings",
              "Any cost escalation or difference due to the delay will be borne entirely by the customer",
              "FlexiEtrips also reserves the right to cancel the booking or re-quote the package based on current availability"
            ]}
          />

          <Section
            icon="💡"
            title="Other Payment Terms"
            content={[
              "Payments can be made via UPI, NEFT/RTGS, or secure payment links shared officially by FlexiEtrips",
              "Invoices will be shared after each installment",
              "5% GST is applicable on the total invoice value (non-refundable under any circumstance)",
              "For corporate or GST-invoiced bookings, please notify us at the time of initial payment"
            ]}
          />

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#00ADB5] mb-4 flex items-center">
              ✅ Cancellation Policy – Short Haul Packages
            </h2>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Domestic Trips, Bhutan, Andaman & Nicobar Islands.</span><br/>
              We understand that travel plans may change. This cancellation policy is designed to provide fairness to our travelers while accounting for the operational costs and advance commitments we make to our service partners.
            </p>
            
            <h3 className="text-lg font-semibold text-[#00ADB5] mb-4">📅 Cancellation Timeline & Refund Terms</h3>
            
            <div className="space-y-4">
              <CancellationTier
                timeline="31 days or more before departure"
                refund="After deducting ₹4,000 admin fee per person + any applicable vendor costs"
                creditNote="100% credit note (valid for 12 months) with no admin charges"
                bgColor="bg-green-50 border-green-200"
                textColor="text-green-800"
              />
              
              <CancellationTier
                timeline="15 to 30 days before departure"
                refund="50% of tour cost refundable after deducting actual vendor cancellation charges + ₹4,000 admin fee"
                creditNote="70% credit note (valid for 12 months) (terms and conditions apply)"
                bgColor="bg-yellow-50 border-yellow-200"
                textColor="text-yellow-800"
              />
              
              <CancellationTier
                timeline="7 to 15 days before departure"
                refund="25% refund after deducting actual vendor costs + admin charges"
                creditNote="25% credit note (valid for 12 months) (terms and conditions apply)"
                bgColor="bg-orange-50 border-orange-200"
                textColor="text-orange-800"
              />
              
              <CancellationTier
                timeline="7 days or less before departure"
                refund="No refund or credit note (due to confirmed arrangements and full vendor payments)"
                creditNote=""
                bgColor="bg-red-50 border-red-200"
                textColor="text-red-800"
              />
            </div>
          </div>

          <Section
            icon="⚠️"
            title="Important Notes"
            content={[
              "Admin Charges: ₹4,000 per person is applicable on all cancellations.",
              "Actual Deductions: Any non-recoverable amounts paid to partners/vendors (e.g., hotels, permits, transport, tickets, activities) will be deducted based on the actual booking scenario at the time of cancellation.",
              "Airfare: Flight cancellation charges will be as per airline policy, regardless of the timeline.",
              "Non-Refundable Services: Charges for services marked non-refundable at the time of booking will not be refunded or credited.",
              "GST: 5% GST is applicable on the total cancellation amount and is non-refundable as per law.",
              "Peak Season/Events: For trips during peak season or special events, vendor charges may be higher. Please confirm exact terms with your FlexiEtrips consultant."
            ]}
          />

          <Section
            icon="🔄"
            title="Rescheduling Policy"
            content={[
              "Any requests for rescheduling should be communicated at least 10 days before the departure date. This allows us to check availability and offer the best possible options within the given time frame.",
              "Rescheduling is subject to availability and vendor terms.",
              "Note: These policies do not apply during long weekends or festive seasons due to non-refundable vendor arrangements and high demand during those periods."
            ]}
          />

          <Section
            icon="💳"
            title="Credit Note Terms"
            content={[
              "Valid for up to 12 months from the date of issue, if not redeemed in 12 months that will be automatically expired.",
              "Fully transferable to family or friends.",
              "Can be used toward any destination/package booked with FlexiEtrips.",
              "Cannot be converted to cash or split across multiple bookings."
            ]}
          />

          <Section
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
    </main>
  )
}

function PaymentPhase({ phase, title, amount, purpose, note }) {
  return (
    <div className="border-l-4 border-[#00ADB5] pl-4 py-2">
      <h3 className="text-lg font-semibold text-[#00ADB5] mb-2">
        🔹 {phase}. {title}
      </h3>
      <p className="text-gray-700 mb-1">
        <span className="font-semibold">Booking Amount:</span> {amount}
      </p>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Purpose:</span> {purpose}
      </p>
      {note && (
        <p className="text-gray-600 text-sm italic">{note}</p>
      )}
    </div>
  )
}

function CancellationTier({ timeline, refund, creditNote, bgColor, textColor }) {
  return (
    <div className={`border rounded-lg p-4 ${bgColor} border`}>
      <h4 className={`font-semibold mb-2 ${textColor}`}>{timeline}:</h4>
      <div className="space-y-1">
        <p className="text-gray-700">
          <span className="font-semibold">Refund:</span> {refund}
        </p>
        {creditNote && (
          <p className="text-gray-700">
            <span className="font-semibold">Credit Note:</span> {creditNote}
          </p>
        )}
      </div>
    </div>
  )
}

function Section({ icon, title, content, text, note }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-[#00ADB5] mb-3 flex items-center gap-2">
        {icon && <span>{icon}</span>}
        {title}
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
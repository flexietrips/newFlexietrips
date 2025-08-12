"use client"

import React from "react"

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto ">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#00ADB5] mb-2">
          Privacy Policy
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          At <span className="font-semibold">FlexiEtrips</span>, we design personalized vacations —
          not data mining tools. Your privacy is essential to us. We’re committed to protecting
          your information, using it responsibly, and never spamming your inbox, calls, or
          messages.
        </p>
        <p className="mb-8 text-gray-700">
          By using our website{" "}
          <a
            href="https://www.flexietrips.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00ADB5] underline"
          >
            www.flexietrips.com
          </a>{" "}
          or mobile app, you agree to the terms laid out in this policy. We recommend reviewing
          this policy from time to time as it may change with updates.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <Section
            number="1"
            title="What Information We Collect"
            content={[
              "Name, email, phone number, and address",
              "Travel preferences and details of fellow travelers",
              "Payment information (processed securely)",
              "Device and browsing data (IP address, OS, browser, etc.)",
              "GPS location (if permission is granted)",
              "User content such as reviews, photos, or testimonials",
              "Information from third-party social platforms if you connect with us through them",
            ]}
          />

          <Section
            number="2"
            title="When and Why We Collect It"
            content={[
              "Make a booking",
              "Contact customer support",
              "Register an account or sign up for newsletters",
              "Use location-based features",
              "Submit content (photos, videos, testimonials)",
              "Participate in promotions or surveys",
            ]}
            note="We collect this data to complete and manage your bookings, provide customer support, personalize your trip planning, improve our services, notify you about offers (if you opt in), and meet legal requirements."
          />

          <Section
            number="3"
            title="Use of Cookies and Session Data"
            text="We use cookies to remember preferences, analyze performance, and show relevant offers. Session data like browser type, IP address, and time spent is collected anonymously. You can manage cookies in browser settings, but blocking them may affect functionality."
          />

          <Section
            number="4"
            title="Data Sharing and Third Parties"
            text="We do not sell or rent your personal data. We may share it with travel service providers, payment gateways, support vendors (under confidentiality), legal bodies, and advertising platforms (anonymized). All partners follow strict data protection practices."
          />

          <Section
            number="5"
            title="Marketing Communications & Opt-Out Policy"
            text="You may occasionally receive promotions, tips, or price alerts. Opt out anytime via 'Unsubscribe', account preferences, or by emailing us. No spam — we honor your choices."
          />

          <Section
            number="6"
            title="Security of Your Information"
            text="All data is transmitted securely using SSL encryption. Our infrastructure follows best practices to prevent unauthorized access. However, no system is 100% secure, so please maintain strong passwords and log out after use."
          />

          <Section
            number="7"
            title="Children’s Privacy"
            text="Services are not for individuals under 18. We do not knowingly collect data from minors, and will delete it immediately if found."
          />

          <Section
            number="8"
            title="Your Rights and Controls"
            text="You have the right to view, update, correct, or delete your data; withdraw consent; request a copy; or lodge complaints. Contact info@flexietrips.com to exercise these rights."
          />

          <Section
            number="9"
            title="Location and Device Permissions"
            text="With consent, we may use location services to suggest attractions and improve functionality. Camera/mic permissions are only used for support interactions."
          />

          <Section
            number="10"
            title="User-Submitted Content"
            text="By sharing content, you grant us a worldwide, royalty-free license for marketing unless you opt out. We will remove content upon request."
          />

          <Section
            number="11"
            title="Changes to This Policy"
            text="We may update this policy periodically. Significant changes will be communicated via email or website notice."
          />

          <Section
            number="12"
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
      {content && (
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {content.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
      {text && <p className="text-gray-700">{text}</p>}
      {note && <p className="mt-2 text-gray-700">{note}</p>}
    </div>
  )
}

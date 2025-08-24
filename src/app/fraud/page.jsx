"use client"

import React from "react"
import Link from "next/link"

export default function FraudAlertPage() {
  return (
    <main className="bg-gray-50 py-12">
      <div className="container mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
          Stay Alert: Beware of Fraud and Scams
        </h1>

        <p className="mb-6 text-lg text-gray-700">
          At <span className="font-semibold">FlexiEtrips.com</span>, your safety is our top
          priority. We want to make sure you're aware of fraudulent activities that could put
          your personal and financial information at risk. Please read the following carefully to
          stay protected:
        </p>

        {/* Common Fraud Techniques */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">⚠️ Common Fraud Techniques</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-700">
            <li>
              <strong>Fake Websites:</strong> Some scammers are creating lookalike websites such as{" "}
              <code className="bg-gray-200 px-1 rounded">flexietrips-payment.com</code> or{" "}
              <code className="bg-gray-200 px-1 rounded">flexietrips-booking.net</code> that closely
              resemble our official site to trick you into sharing sensitive information.
            </li>
            <li>
              <strong>Impersonated Social Media Accounts:</strong> Fraudsters may create fake
              Telegram channels or social media profiles offering misleading discounts or offers in
              our name.
            </li>
            <li>
              <strong>Unauthorized Referral & Commission Schemes:</strong> Be cautious of
              individuals promoting commission or affiliate programs claiming to be from{" "}
              FlexiEtrips.com. These are not legitimate.
            </li>
          </ol>
        </div>

        {/* What You Can Do */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            💡 What You Can Do to Protect Yourself
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              ✅ <strong>Use Only Official Payment Channels:</strong> Always make payments through
              our official website:{" "}
              <Link
                href="https://www.flexietrips.com"
                className="text-blue-600 underline"
                target="_blank"
              >
                www.flexietrips.com
              </Link>{" "}
              or via verified bank transfers to accounts under the beneficiary name{" "}
              <strong>Flexietrips.com</strong> (ending in 0215). Do not send payments via UPI or to
              any other bank accounts.
            </li>
            <li>
              🔒 <strong>Always Verify the Website URL:</strong> The only official website is{" "}
              <Link
                href="https://www.flexietrips.com"
                className="text-blue-600 underline"
                target="_blank"
              >
                https://www.flexietrips.com
              </Link>
              .
            </li>
            <li>
              🚫 <strong>Avoid Clicking on Suspicious Links:</strong> Don’t engage with unfamiliar
              or suspicious websites, especially those offering extraordinary deals.
            </li>
            <li>
              🎁 <strong>Confirm Offers with Us:</strong> If someone contacts you with a special
              offer or booking opportunity, verify its legitimacy on our website or by contacting
              us directly.
            </li>
            <li>
              📩 <strong>Report Anything Suspicious:</strong> Email{" "}
              <a href="mailto:info@flexietrips.com" className="text-blue-600 underline">
                info@flexietrips.com
              </a>{" "}
              immediately if you encounter fraudulent activity.
            </li>
            <li>
              🔐 <strong>Strengthen Your Security:</strong>
              <ul className="list-disc list-inside ml-4">
                <li>Change your passwords regularly</li>
                <li>Avoid reusing passwords across platforms</li>
                <li>Enable two-factor authentication wherever available</li>
              </ul>
            </li>
            <li>
              💳 <strong>Keep an Eye on Your Transactions:</strong> Review your bank and card
              statements regularly and report unfamiliar activity right away.
            </li>
          </ul>
        </div>

        {/* Encountered a Scam */}
        <div className="bg-red-50 p-6 rounded-lg shadow-md border border-red-200 mb-8">
          <h2 className="text-2xl font-semibold text-red-700 mb-4">⚠️ Encountered a Scam?</h2>
          <p className="text-gray-700 mb-4">
            Unfortunately, <strong>FlexiEtrips.com</strong> cannot take responsibility for losses
            resulting from fraudulent activities. We urge you to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Notify your bank immediately</li>
            <li>Report the incident to cybercrime authorities</li>
            <li>
              Inform us at{" "}
              <a href="mailto:info@flexietrips.com" className="text-blue-600 underline">
                info@flexietrips.com
              </a>
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 font-medium">
          Your vigilance is your first line of defense. Thank you for helping us build a safer
          travel experience for everyone.
        </p>

        <p className="mt-4 font-semibold text-gray-900">– Team FlexiEtrips.com</p>
      </div>
    </main>
  )
}

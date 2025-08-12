import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-16 py-16 ">
      <div className="flex flex-col md:flex-row justify-between gap-12 text-center md:text-left container mx-auto">
        
        {/* Left: Logo & Social Links */}
        <div className="md:w-1/3">
          <Image
            src="/assets/images/logo.png"
            alt="FlexieTrips Logo"
            className="mx-auto md:mx-0 mb-4"
            height={100}
            width={100}
          />
          <div className="flex justify-center md:justify-start space-x-4 text-xl text-gray-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors duration-300">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors duration-300">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ADB5] transition-colors duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="md:w-1/3 grid grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#tours" className="hover:text-[#00ADB5]">Tours</Link></li>
              <li><Link href="#blog" className="hover:text-[#00ADB5]">Blog</Link></li>
              <li><Link href="#about" className="hover:text-[#00ADB5]">About Us</Link></li>
              <li><Link href="#itinerary" className="hover:text-[#00ADB5]">Itinerary</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">More</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/privacypolicy" className="hover:text-[#00ADB5]">Privacy Policy</Link></li>
              <li><Link href="/termsandconditions" className="hover:text-[#00ADB5]">Terms & Conditions</Link></li>
              <li><Link href="/paymentandcancellation" className="hover:text-[#00ADB5]">Payments and Cancellation</Link></li>
              <li><Link href="/fraud" className="hover:text-[#00ADB5]">Fraud</Link></li>
            </ul>
          </div>
        </div>

        {/* Right: Contact & Bank Details */}
        <div className="md:w-1/3 md:text-right">
          <h4 className="text-lg font-semibold mb-3">Contact Info</h4>
          <p className="text-gray-300">📍 Solan, India</p>
          <p>
            📞{" "}
            <a href="tel:+919805722642" className="text-gray-300 hover:text-[#00ADB5]">
              +91 9805722642
            </a>
          </p>
          <p>
            📧{" "}
            <a href="mailto:info@flexietrips.com" className="text-gray-300 hover:text-[#00ADB5]">
              info@flexietrips.com
            </a>
          </p>
          <p className="text-gray-300">GST: 02ADWPG5598A1ZG</p>
          <h4 className="text-lg font-semibold mt-4 mb-2">Bank Details</h4>
          <p className="text-gray-300">Account Number: 44027450215</p>
          <p className="text-gray-300">IFSC: SBIN0050127</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} FlexieTrips. All rights reserved.
      </div>
    </footer>
  );
}

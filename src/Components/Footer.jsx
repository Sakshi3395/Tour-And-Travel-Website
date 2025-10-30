import React from 'react'
import footer from '../assets/footer-pattern.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white py-24 mt-16"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <h1 className="font-bold text-5xl mb-6">
              <span className="text-red-500">Trip</span>Buddy
            </h1>
            <p className="text-sm leading-6">
              We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col lg:items-center">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Tours</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>123 Travel Street, City, Country</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@tripbuddy.com</li>
            </ul>
          </div>

          {/* Social Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-5 text-2xl">
              <FaFacebook className="hover:text-red-500 cursor-pointer" />
              <FaInstagram className="hover:text-red-500 cursor-pointer" />
              <FaTwitter className="hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-10 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TripBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

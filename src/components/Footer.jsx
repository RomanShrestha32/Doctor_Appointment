import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-6 sm:px-14">
      <hr className="border-gray-600 mb-8" /> {/* Top line with bottom margin */}
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Logo and Description */}
        <div className="flex-1">
          <img className="w-32 mb-4" src={assets.logo} alt="Logo" />
          <p className="text-sm text-gray-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-primary transition-all cursor-pointer">Home</li>
            <li className="hover:text-primary transition-all cursor-pointer">About Us</li>
            <li className="hover:text-primary transition-all cursor-pointer">Contact Us</li>
            <li className="hover:text-primary transition-all cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="text-sm ">Phone: 9843645661</li>
            <li className="text-sm ">Email: romannshresthaa999@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10">
        <hr className="border-gray-600 mb-8" /> {/* Bottom line with margin */}
        <p className="text-center text-sm text-gray-400 mt-4">
          &copy; 2024 Prescripto - All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;

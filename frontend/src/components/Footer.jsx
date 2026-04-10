import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="self-stretch bg-slate-900 px-4 pb-8 pt-12 sm:px-6 lg:px-10 xl:px-16">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8">
        {/* Top Section: Logo + All Link Columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Logo and About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <img
                src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ffSyZzeazd/8khssezv_expires_30_days.png"}
                className="mr-3 h-10 w-10 object-fill sm:h-12 sm:w-12"
                alt="Logo"
              />
              <span className="text-2xl font-bold text-white sm:text-[32px]">EduMart</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              EduMart is a comprehensive digital learning platform offering Live Classes, E-Library, and Online Test Series to help students learn, practice, and succeed in a competitive environment.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-white/80 transition-colors hover:text-white">About Us</Link></li>
              <li><Link to="/features" className="text-sm text-white/80 transition-colors hover:text-white">Our Features</Link></li>
              <li><Link to="/contact" className="text-sm text-white/80 transition-colors hover:text-white">Contact Us</Link></li>
              <li><Link to="/careers" className="text-sm text-white/80 transition-colors hover:text-white">Careers</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Online Classes</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Practical Labs</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">E-Library</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Weekly Tests</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Tutors Marketplace</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">School Events</span></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-sm text-white/80 transition-colors hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions" className="text-sm text-white/80 transition-colors hover:text-white">Terms & Conditions</Link></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Refund Policy</span></li>
              <li><span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">FAQs</span></li>
            </ul>
          </div>

          {/* Contact Info & Follow Us Combined Column */}
          <div>
            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>📍 Scheme No 54, Vijay Nagar, Indore, Madhya Pradesh, India</p>
                <p>📞 +91 78987 81533</p>
                <p>📧 karominfo@kacpl.in</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
              <div className="flex flex-wrap gap-4">
                <span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Facebook</span>
                <span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">Instagram</span>
                <span className="cursor-pointer text-sm text-white/80 transition-colors hover:text-white">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="border-t border-white/15 pt-4 text-center">
          <span className="text-sm text-white/90">Developed by Alphanexis Tech Pvt. Ltd.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
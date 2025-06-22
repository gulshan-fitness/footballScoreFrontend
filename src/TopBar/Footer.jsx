import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-purple-500 mb-2">FootyLive</h2>
            <p className="text-sm sm:text-base text-white/80">
              Live football scores, stats, and match analysis from leagues around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-purple-500 mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li><Link to="" className="hover:text-purple-500 transition">Home</Link></li>
              <li><Link to="" className="hover:text-purple-500 transition">Live Matches</Link></li>
              <li><Link to="" className="hover:text-purple-500 transition">Standings</Link></li>
              <li><Link to="" className="hover:text-purple-500 transition">Teams</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-purple-500 mb-2">Contact</h3>
            <p className="text-sm sm:text-base text-white/80">gulshankumarjangid.com</p>
            <p className="text-sm sm:text-base text-white/80">+918058949490</p>
          </div>

          {/* Social Media (Using Link) */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-purple-500 mb-2">Follow Us</h3>
            <div className="flex space-x-4 mt-2 text-white text-lg sm:text-xl">
              <Link to="" className="hover:text-purple-500 transition"><FaFacebookF /></Link>
              <Link to="" className="hover:text-purple-500 transition"><FaTwitter /></Link>
              <Link to="" className="hover:text-purple-500 transition"><FaInstagram /></Link>
              <Link to="" className="hover:text-purple-500 transition"><FaYoutube /></Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="border-t border-white/10 mt-8 pt-4 text-center text-xs sm:text-sm text-white/60">
          © {new Date().getFullYear()} FootyLive. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

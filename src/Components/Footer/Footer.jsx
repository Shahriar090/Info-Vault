import React from 'react';

const Footer = () => {
  return (
      <footer className="w-full bg-gray-900 text-gray-300 py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Logo or site name */}
        <div className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Info Vault. All rights reserved.
        </div>

        {/* Center: Links (optional) */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right: Socials (optional) */}
        <div className="flex gap-4">
          <a href="#" aria-label="Twitter" className="hover:text-blue-400 transition">Twitter</a>
          <a href="#" aria-label="GitHub" className="hover:text-white transition">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
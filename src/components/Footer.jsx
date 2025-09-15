// Footer.jsx - React Component
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Divider Line */}
        <div className="w-full h-px bg-gray-200 mb-6"></div>
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-[#6c757d] text-sm">
              © {currentYear} Luna. All rights reserved.
            </p>
          </div>

          {/* Right Side - Contact/Social Links (Optional) */}
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:majahav@africau.edu" 
              className="text-[#6c757d] hover:text-[#0A3044] text-sm transition-colors duration-200"
            >
              Designed and built by Vimbai Luna
            </a>
            {/* Add social links here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
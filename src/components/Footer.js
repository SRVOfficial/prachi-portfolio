




import React, { useState } from 'react';
import { FaLinkedin, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Tooltip from './Tooltip.js';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <footer className="bg-[#8B4513] text-[#F1E3D3] py-12"> {/* Dark chocolate background, light chocolate text */}
      <div className="container mx-auto flex flex-col items-center">
        <div className="relative flex space-x-6 mb-6">
          <div
            onMouseEnter={() => setHoveredIcon('linkedin')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="cursor-pointer relative"
          >
            <a href="https://www.linkedin.com/in/prachi-sharan-2878b1213" className="text-2xl hover:text-[#D2691E] transition-colors">
              <FaLinkedin />
            </a>
            {hoveredIcon === 'linkedin' && <Tooltip message="Visit LinkedIn" />}
          </div>
          <div
            onMouseEnter={() => setHoveredIcon('twitter')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="cursor-pointer relative"
          >
            <a href="https://x.com/Prachiii29?t=Po6SBDCtcDiOo2-nuNwF6A&s=08" className="text-2xl hover:text-[#D2691E] transition-colors">
              <FaTwitter />
            </a>
            {hoveredIcon === 'twitter' && <Tooltip message="Visit Twitter" />}
          </div>
          <div
            onMouseEnter={() => setHoveredIcon('facebook')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="cursor-pointer relative"
          >
            <a href="#" className="text-2xl hover:text-[#D2691E] transition-colors">
              <FaFacebookF />
            </a>
            {hoveredIcon === 'facebook' && <Tooltip message="Currently unavailable" />}
          </div>
          <div
            onMouseEnter={() => setHoveredIcon('instagram')}
            onMouseLeave={() => setHoveredIcon(null)}
            className="cursor-pointer relative"
          >
            <a href="https://www.instagram.com/_.praaachii._?igsh=MXZyaHloazFrNzljNg==" className="text-2xl hover:text-[#D2691E] transition-colors">
              <FaInstagram />
            </a>
            {hoveredIcon === 'instagram' && <Tooltip message="Visit Instagram" />}
          </div>
        </div>
        <p className="text-center">
          © {new Date().getFullYear()} Prachi Sharan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

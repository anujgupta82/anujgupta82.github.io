import React from 'react';
import AnujGupta from '../assets/images/anuj_gupta_pro.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiSubstack } from 'react-icons/si';

function Sidebar() {
  return (
    <aside className="w-full md:w-1/5 bg-white p-6 rounded-lg shadow-lg">
      <div className="author__avatar mb-6">
        <img
          src={AnujGupta}
          className="w-40 h-40 mx-auto rounded-full border-4 border-blue-100 shadow-lg"
          alt="Anuj Gupta"
        />
      </div>
      
      <div className="author__content">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">Anuj Gupta</h3>
        
        {/* Professional title with subtle divider */}
        <div className="mb-4 text-center">
          <p className="text-md font-medium text-blue-700 tracking-tight">
            Executive Advisor on AI | Fractional Head of AI
          </p>
          <div className="w-16 h-0.5 bg-blue-100 mx-auto mt-2"></div>
        </div>
        
        {/* Enhanced bio section with better spacing */}
        <div className="text-sm text-gray-700 space-y-3">
          <p className="leading-snug">
            <span className="font-medium text-gray-800">Helping businesses</span> unlock the full potential of AI through strategic advisory.
          </p>
          <p className="leading-snug">
            <span className="font-medium text-gray-800">Coaching leadership teams</span> on AI transformation and organizational development.
          </p>
          <p className="leading-snug">
            <span className="font-medium text-gray-800">Author</span> of major AI books | <span className="font-medium text-gray-800">Angel Investor</span> | <span className="font-medium text-gray-800">Board Member</span>
          </p>
        </div>
      </div>

      <div className="author__urls-wrapper mt-8">
        {/* Follow button with subtle enhancements */}
        <button className="w-full bg-blue-800 hover:bg-blue-900 text-white py-2.5 px-4 rounded-md transition-all duration-300 mb-6 font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Follow
        </button>
        
        <div className="flex flex-col items-center space-y-4">
          {/* First row - Professional networks */}
          <div className="flex space-x-5">
            <a href="https://www.linkedin.com/in/anujgupta-82/"
               className="text-[#0077B5] hover:text-[#005582] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
                <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/anujgupta82"
               className="text-black hover:text-gray-800 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="X (Twitter)"
            >
                <FaXTwitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/anujgupta82"
               className="text-[#333] hover:text-black transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="GitHub"
            >
                <FaGithub className="w-5 h-5" />
            </a>
          </div>
          
          {/* Second row - Publications/Company */}
          <div className="flex space-x-5">
            <a href="https://gradient-advisors.ai/"
               className="text-[#6e45e2] hover:text-[#4d2bb8] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Gradient Advisors"
            >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7L12 2zm0 2.5L18 8v8l-6 3.5-6-3.5V8l6-3.5z"/>
                </svg>
            </a>
            <a href="https://substack.com/@gradientadvisors"
               className="text-[#FF6719] hover:text-[#e05a14] transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Substack"
            >
                <SiSubstack className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
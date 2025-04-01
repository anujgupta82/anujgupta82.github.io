import React from 'react';
import AnujGupta from '../assets/images/anuj_gupta_pro.jpg';
import { FaLinkedin, FaTwitter, FaGlobe, FaEnvelope, FaGithub } from 'react-icons/fa';

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
               className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="LinkedIn"
            >
                <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/anujgupta82"
               className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Twitter"
            >
                <FaTwitter className="w-5 h-5" />
            </a>
            <a href="https://github.com/anujgupta82"
               className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
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
               className="text-gray-600 hover:text-purple-600 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Gradient Advisors"
            >
                <FaGlobe className="w-5 h-5" />
            </a>
            <a href="https://substack.com/@gradientadvisors"
               className="text-gray-600 hover:text-orange-600 transition-colors duration-300"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Substack"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 7.535V16.12c0 .63-.2 1.2-.55 1.65-.35.45-.85.75-1.4.8-1.9.2-4.45.43-7.3.43-2.85 0-5.4-.23-7.3-.43-.55-.05-1.05-.35-1.4-.8-.35-.45-.55-1.02-.55-1.65V7.535c0-.45.15-.85.4-1.15.25-.3.6-.45 1-.45.05 0 .1 0 .15.01 2.1.25 4.8.39 7.7.39 2.9 0 5.6-.14 7.7-.39.05-.01.1-.01.15-.01.4 0 .75.15 1 .45.25.3.4.7.4 1.15zM12 15.39l6.2-3.84-6.2-3.84-6.2 3.84 6.2 3.84z"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
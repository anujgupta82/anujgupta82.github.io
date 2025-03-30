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
        <h3 className="text-xl font-bold text-gray-800 mb-2">Anuj Gupta</h3>
        <p className="text-sm font-semibold text-blue-800 mb-2">
          Executive Advisor on AI | Fractional Head of AI
        </p>
        <p className="text-sm text-gray-600 mb-6">
          Helping businesses unlock the full potential of AI | Coaching leadership teams | Author of major AI books | Angel Investor | Board Member
        </p>
      </div>

      <div className="author__urls-wrapper">
        <button className="w-full bg-blue-800 text-white py-2.5 px-4 rounded-md hover:bg-blue-900 transition-colors duration-300 mb-6 font-medium shadow-md hover:shadow-lg">
          Follow
        </button>
        
        <ul className="space-y-4">
          <li>
            <a 
              href="https://www.linkedin.com/in/anujgupta-82/" 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-800 transition-colors duration-300 py-2 hover:bg-gray-50 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              href="https://twitter.com/anujgupta82" 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-800 transition-colors duration-300 py-2 hover:bg-gray-50 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a 
              href="https://gradient-advisors.ai/" 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-800 transition-colors duration-300 py-2 hover:bg-gray-50 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGlobe className="w-5 h-5" />
              <span>Gradient Advisors</span>
            </a>
          </li>
          <li>
            <a 
              href="mailto:contact@example.com" 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-800 transition-colors duration-300 py-2 hover:bg-gray-50 rounded-md"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>Email</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/yourusername" 
              className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-800 transition-colors duration-300 py-2 hover:bg-gray-50 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
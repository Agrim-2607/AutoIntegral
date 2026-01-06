import React from 'react';
import { FaTimes, FaPhoneAlt, FaCommentDots, FaCheckCircle, FaTools } from 'react-icons/fa';

const MechanicProfileModal = ({ mechanic, onClose }) => {
  if (!mechanic) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
      <div className="bg-dark-card w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden relative border border-gray-700">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
          <FaTimes size={24} />
        </button>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-2 flex items-center">
                {mechanic.name}
                {mechanic.verified && <FaCheckCircle className="ml-2 text-blue-500 text-xl" title="Verified Profile [cite: 30]" />}
              </h2>
              <div className="flex items-center text-gray-300 mb-2">
                <span className="text-yellow-400 font-bold mr-1">★ {mechanic.rating}</span>
                <span className="text-sm">({mechanic.reviews} reviews)</span>
                 {/* Transparency: Ratings and reviews [cite: 15] */}
              </div>
              <p className="text-gray-400">{mechanic.location} • {mechanic.distance} away</p>
            </div>
            {/* Direct Communication [cite: 27] */}
            <div className="flex space-x-3 mt-4 md:mt-0">
              <button className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
                <FaPhoneAlt className="mr-2" /> Call
              </button>
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
                <FaCommentDots className="mr-2" /> Chat
              </button>
            </div>
          </div>

          {/* Profile Customization: Specific tools  */}
          {mechanic.tools && mechanic.tools.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-200">
                <FaTools className="mr-2" /> Specialized Tools Available
              </h3>
              <div className="flex flex-wrap gap-2">
                {mechanic.tools.map((tool, index) => (
                  <span key={index} className="bg-dark-lighter px-3 py-1 rounded-full text-sm text-gray-300 border border-gray-600">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-700">Available Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
              {/* Lists services taken from the images */}
              {mechanic.services.map((service, index) => (
                <li key={index} className="flex items-center text-gray-300">
                 <span className="text-primary mr-2">✓</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicProfileModal;
import React, { useState } from 'react';
import { FaMotorcycle, FaCar, FaSearch } from 'react-icons/fa';

const HeroSection = ({ onVehicleTypeChange }) => {
  const [activeType, setActiveType] = useState('4w');

  const handleToggle = (type) => {
    setActiveType(type);
    onVehicleTypeChange(type);
  };

  return (
    <section id="home" className="pt-24 pb-12 bg-gradient-to-b from-dark-bg to-dark-card px-6">
      <div className="container mx-auto flex flex-col items-center text-center">
        {/* Subtitle problem statement [cite: 2] */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Bridging the gap between <span className="text-primary">stranded drivers</span> and local expertise.
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl">
          Instantly discover and book nearby local mechanics. No complex registration required. [cite: 11, 31]
        </p>

        {/* Vehicle Type Toggle [cite: 13, 18] */}
        <div className="flex bg-dark-lighter p-1 rounded-lg mb-8">
          <button
            className={`flex items-center px-6 py-3 rounded-md transition ${activeType === '4w' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleToggle('4w')}
          >
            <FaCar className="mr-2" /> 4-Wheeler
          </button>
          <button
            className={`flex items-center px-6 py-3 rounded-md transition ${activeType === '2w' ? 'bg-primary text-white' : 'text-gray-400 hover:text-white'}`}
            onClick={() => handleToggle('2w')}
          >
            <FaMotorcycle className="mr-2" /> 2-Wheeler
          </button>
        </div>

        {/* Search Bar & Filters  */}
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden w-full max-w-3xl p-2">
          <input 
            type="text" 
            placeholder="Enter location..." 
            className="flex-grow px-4 py-3 text-gray-800 focus:outline-none" 
          />
           <input 
            type="text" 
            placeholder="Service Type (e.g., Engine, Tyre)..." 
            className="flex-grow px-4 py-3 text-gray-800 border-l border-gray-200 focus:outline-none hidden md:block" 
          />
          <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 font-bold flex items-center justify-center mt-2 md:mt-0 rounded md:rounded-none">
            <FaSearch className="mr-2" /> Find
          </button>
        </div>

         {/* SOS Button  */}
        <button className="mt-8 bg-red-700 hover:bg-red-800 text-white text-xl px-10 py-4 rounded-full font-bold shadow-lg shadow-red-900/50 animate-pulse">
            SOS - EMERGENCY RSA
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
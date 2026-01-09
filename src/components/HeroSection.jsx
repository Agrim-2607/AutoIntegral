import React, { useState } from 'react';
// This is the first thing users see. It helps them pick their vehicle type
const HeroSection = ({ onVehicleTypeChange }) => {
  const [city, setCity] = useState('');
  const [vehicle, setVehicle] = useState('');  {/* This state remembers if the user is looking for a bike,car or scooty*/}

  return (
    <div className="w-full py-6">
      <div className="flex flex-col lg:flex-row items-stretch gap-6">
        
        <div className="lg:w-1/3 flex">
          <button 
            onClick={() => (city && vehicle) ? onVehicleTypeChange(vehicle) : alert("Select City & Vehicle")} 
            className="w-full bg-black text-white py-10 rounded-[30px] font-[900] uppercase italic text-2xl shadow-xl hover:bg-red-600 transition-all border-b-8 border-gray-900 active:translate-y-2 active:border-b-0"
          >
            FIND NEAREST MECHANIC →
          </button>
        </div>

        <div className="lg:w-2/3 flex flex-row gap-4">
          <div className="flex-1 bg-white border-4 border-black p-5 rounded-[30px] shadow-lg flex items-center">
            <select 
              className="w-full bg-transparent font-black uppercase italic outline-none cursor-pointer text-xl"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">SELECT CITY</option>
              <option value="Bhimtal">Bhimtal</option>
              <option value="Nainital">Nainital</option>
              <option value="Bhowali">Bhowali</option>
              <option value="Haldwani">Haldwani</option>
            </select>
          </div>

          <div className="flex-1 bg-white border-4 border-black p-5 rounded-[30px] shadow-lg flex items-center">
            <select 
              className="w-full bg-transparent font-black uppercase italic outline-none cursor-pointer text-xl"
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
            >
              <option value="">CHOOSE VEHICLE</option>
              <option value="car">Car / SUV</option>
              <option value="bike">Bike</option>
              <option value="scooty">Scooty</option>
              <option value="auto">Auto Rikshaw</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
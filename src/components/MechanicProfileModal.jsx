// src/components/MechanicProfileModal.jsx
import React from "react";

// This component is a popup that shows more details about a specific mechanic
const MechanicProfileModal = ({ mechanic, onClose }) => {
  if (!mechanic) return null;

  return (
    <div className="bg-gray-50 border-t-2 border-black p-6 rounded-b-[20px] -mx-6 -mb-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center mb-4">
        <h4 className="font-black uppercase italic text-sm text-gray-700 underline">Available Services & Rates</h4>
        <button onClick={onClose} className="text-xs font-bold uppercase text-red-600">Close ✕</button>
      </div>
      
      <div className="grid grid-cols-1 gap-3">
        {mechanic.services.map((service, index) => (
          <div key={index} className="flex justify-between items-center bg-white p-4 border border-gray-200 rounded-xl shadow-sm">
            <div>
              <p className="font-black text-sm uppercase">{service.name}</p>
              <p className="text-[10px] text-gray-400 font-bold">⏱ {service.time}</p>
            </div>
            <div className="text-right">
              <p className="font-black text-lg text-black">{service.cost}</p>
              <button className="text-[10px] bg-black text-white px-3 py-1 rounded-md font-bold uppercase mt-1">Book</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MechanicProfileModal;
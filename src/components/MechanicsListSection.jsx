// src/components/MechanicsListSection.jsx
import React, { useState } from "react";
import mockMechanics from "../data/mockMechanics";
import MechanicProfileModal from "./MechanicProfileModal";

// This part shows the list of mechanics available in the database
const MechanicsListSection = ({ selectedVehicleType }) => {
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  const filteredMechanics = mockMechanics.filter((mech) =>
    mech.vehicleTypes.includes(selectedVehicleType)  // only get mechanics for this specific vehicle
  );

  return (
    <section className="py-10">
      <div className="flex flex-col gap-6">  {/* we loop through the mechanics list and show each one in a card */}
        {filteredMechanics.map((mech) => (
          <div key={mech.id} className="relative bg-white border-2 border-black p-6 rounded-[20px] shadow-sm">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-black italic uppercase leading-none">{mech.name}</h3>
                <p className="text-gray-600 font-bold mt-2">📍 {mech.location}</p>
                <p className="text-sm mt-1">⭐ {mech.rating}</p>
              </div>
              <button 
                onClick={() => setSelectedMechanic(selectedMechanic?.id === mech.id ? null : mech)}
                className="bg-black text-white px-6 py-2 rounded-full font-bold uppercase text-xs hover:bg-gray-800"
              >
                {selectedMechanic?.id === mech.id ? "Close Details" : "View Services"}
              </button>
            </div>

            {selectedMechanic?.id === mech.id && (
              <div className="mt-4 animate-slide-down">
                <MechanicProfileModal 
                  mechanic={selectedMechanic} 
                  onClose={() => setSelectedMechanic(null)} 
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MechanicsListSection;
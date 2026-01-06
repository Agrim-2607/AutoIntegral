import React, { useState } from 'react';
import { mockMechanics } from '../data/mockData';
import MechanicProfileModal from './MechanicProfileModal';
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const MechanicsListSection = ({ selectedVehicleType }) => {
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  // Filter mechanics based on the toggle selection
  const filteredMechanics = mockMechanics.filter(mech => 
    mech.vehicleTypes.includes(selectedVehicleType)
  );

  return (
    <section id="mechanics" className="py-16 px-6 bg-dark-bg">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center uppercase">
          Available <span className="text-primary">{selectedVehicleType === '4w' ? '4-Wheeler' : '2-Wheeler'}</span> Mechanics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMechanics.map((mech) => (
            <div key={mech.id} className="bg-dark-card rounded-xl overflow-hidden shadow-lg hover:shadow-red-900/20 transition border border-gray-800">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white truncate">{mech.name}</h3>
                  <div className="flex items-center bg-dark-lighter px-2 py-1 rounded text-sm">
                    <FaStar className="text-yellow-400 mr-1" />
                    <span>{mech.rating}</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <FaMapMarkerAlt className="mr-2 flex-shrink-0" />
                  {/* Geo-Location location details [cite: 14] */}
                  <p className="text-sm truncate">{mech.location} • {mech.distance}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                   {/* Smart filter tags  */}
                  {mech.specialization.map((tag, idx) => (
                     <span key={idx} className="text-xs bg-dark-bg text-gray-400 px-2 py-1 rounded">{tag}</span>
                  ))}
                </div>

                {/* View nearby mechanics list and open profile [cite: 19, 20] */}
                <button 
                  onClick={() => setSelectedMechanic(mech)}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 rounded transition"
                >
                  View Profile & Services
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MechanicProfileModal 
        mechanic={selectedMechanic} 
        onClose={() => setSelectedMechanic(null)} 
      />
    </section>
  );
};

export default MechanicsListSection;
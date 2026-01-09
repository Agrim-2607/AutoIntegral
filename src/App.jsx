// This is the main file where all our website parts come together
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MechanicsListSection from './components/MechanicsListSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {   //we use this to remember if the user wants a car mechanic or bike mechanic
  const [selectedVehicleType, setSelectedVehicleType] = useState("");

  return (     //this div sets the main look:white background and black text
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-10 flex-grow">
        {!selectedVehicleType ? (  /* The first section where users pick their vehicle type*/
          <div className="py-16">
            <AboutSection />  {/* A section that explains what our company does*/}
            <div className="mt-20">
              <HeroSection onVehicleTypeChange={setSelectedVehicleType} />
            </div>
          </div>
        ) : (
          <div className="py-16">
            <div className="flex justify-between items-center mb-10 border-b-4 border-black pb-8">
              <h2 className="text-4xl font-black uppercase italic">Available Services</h2>
              <button 
                onClick={() => setSelectedVehicleType("")}
                className="bg-red-600 text-white px-8 py-3 rounded-full font-black uppercase text-xs shadow-lg hover:bg-black transition-all"
              >
                ← Change Search
              </button>
            </div>
            <MechanicsListSection selectedVehicleType={selectedVehicleType} />
          </div>
        )}
      </main>
      {/* the very bottom part of the website*/}

      <Footer />
    </div>
  );
}

export default App;
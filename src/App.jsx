import React, { useEffect, useState } from 'react';
import { healthCheck } from "./api/backend";
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MechanicsListSection from './components/MechanicsListSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
    const [vehicleType, setVehicleType] = useState("4w");

    useEffect(() => {
    fetch("http://localhost:4000/api/health")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);


  return (
    <div className="antialiased font-sans bg-dark-bg min-h-screen text-white">
      <Header />
      <main className="mx-auto max-w-6xl px-4 pt-24">
        {/* Pass state handler to Hero to update selection */}
        <HeroSection onVehicleTypeChange={setVehicleType} />
        
        {/* Pass current state to list section to filter mechanics */}
        <MechanicsListSection selectedVehicleType={vehicleType} />
        
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { FaGlobeAmericas, FaHandshake, FaLightbulb } from 'react-icons/fa';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-dark-card">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-12 uppercase">About <span className="text-primary">Us</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-dark-bg p-6 rounded-lg border border-gray-800">
            <FaGlobeAmericas className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Who We Are</h3>
            <p className="text-gray-400 text-sm">
              We solve the "Nowhere" factor. We are the bridge for drivers facing breakdowns in unfamiliar locations where manual searching is slow and unsafe. [cite: 5, 8]
            </p>
          </div>

          <div className="bg-dark-bg p-6 rounded-lg border border-gray-800">
             <FaHandshake className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">What We Do</h3>
            <p className="text-gray-400 text-sm">
              We provide a centralized digital platform to discover and book local mechanics instantly, categorizing specialists for both two-wheelers and four-wheelers. [cite: 11, 13]
            </p>
          </div>

          <div className="bg-dark-bg p-6 rounded-lg border border-gray-800">
            <FaLightbulb className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">How We Do It</h3>
            <p className="text-gray-400 text-sm">
              We use geo-location to find nearby help and bridge the trust gap by providing transparency through ratings, reviews, and estimated costs. [cite: 6, 14, 15]
            </p>
          </div>
        </div>

        <div className="bg-dark-bg p-8 rounded-lg border-t-4 border-primary">
          <h3 className="text-2xl font-bold mb-4">Our Vision for Future</h3>
          <p className="text-gray-300">
            We aim to expand beyond connections. Our future vision includes a spare parts marketplace for direct ordering and AI Diagnostics where users can upload photos or sounds for potential issue suggestions. [cite: 37, 38, 39]
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
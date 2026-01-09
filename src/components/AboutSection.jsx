import React from 'react';
// This component shows the "about us" details
const AboutSection = () => {
  return (
    <section className="w-full mb-12">   {/*Title of the section, styled with red underline to match the theme*/}
      <h2 className="text-4xl font-black uppercase italic text-center mb-12 underline decoration-red-600 decoration-4 underline-offset-8">
        About Us
      </h2>
      
      <div className="flex flex-col gap-10 max-w-5xl mx-auto px-4">
        <div className="border-l-4 border-black pl-6 text-left w-full">
          <h3 className="text-xl font-black uppercase text-red-600 mb-2">Who We Are</h3>
          <p className="text-lg font-bold leading-relaxed">
            We solve the "Nowhere" factor. We are the bridge for drivers facing breakdowns in unfamiliar locations where manual searching is slow and unsafe.
          </p>
        </div> 
        {/* We use 'text-left' here so the information lookd balanced on the screen*/}

        <div className="border-l-4 border-black pl-6 text-left w-full">
          <h3 className="text-xl font-black uppercase text-red-600 mb-2">What We Do</h3>
          <p className="text-lg font-bold leading-relaxed">
            We provide a centralized digital platform to discover and book local mechanics instantly, categorizing specialists for both two-wheelers and four-wheelers.
          </p>
        </div>

        <div className="border-l-4 border-black pl-6 text-left w-full">
          <h3 className="text-xl font-black uppercase text-red-600 mb-2">How We Do It</h3>
          <p className="text-lg font-bold leading-relaxed">
            We use geo-location to find nearby help and bridge the trust gap by providing transparency through ratings, reviews, and estimated costs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
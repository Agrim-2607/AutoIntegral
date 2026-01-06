import React, { useState } from 'react';
import { FaQuestionCircle, FaHeadset } from 'react-icons/fa';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function submitFeedback(e) {
    e.preventDefault();
    if (!message.trim()) return;
    const stored = JSON.parse(localStorage.getItem('ai_feedback') || '[]');
    stored.push({ date: Date.now(), name, email, text: message });
    localStorage.setItem('ai_feedback', JSON.stringify(stored));
    setName(''); setEmail(''); setMessage(''); setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <footer className="bg-dark-bg pt-16 border-t border-gray-800">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        
        {/* Support/Feedback Section */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <FaHeadset className="mr-3 text-primary" /> Support & Feedback
          </h3>
          <p className="text-gray-400 mb-4">
            Give feedback regarding our service as well as mechanics service.
          </p>
          <form onSubmit={submitFeedback} className="space-y-4">
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" className="w-full p-3 bg-dark-lighter rounded border border-gray-700 focus:border-primary outline-none" />
             <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your Email" className="w-full p-3 bg-dark-lighter rounded border border-gray-700 focus:border-primary outline-none" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Feedback..." rows="4" className="w-full p-3 bg-dark-lighter rounded border border-gray-700 focus:border-primary outline-none"></textarea>
            <div className="flex items-center gap-4">
              <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded font-semibold transition">
                Submit Feedback
              </button>
              {submitted && <span className="text-primary">Thanks — feedback saved</span>}
            </div>
          </form>
        </div>

        {/* FAQ's Section based on potential feedback */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <FaQuestionCircle className="mr-3 text-primary" /> Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <div className="bg-dark-card p-4 rounded border border-gray-800">
              <h4 className="font-semibold text-white mb-2">How do I know the mechanics are trustworthy?</h4>
              {/* Safety First and Transparency citations [cite: 15, 30] */}
              <p className="text-gray-400 text-sm">We prioritize safety by providing verified mechanic profiles with photos. We also bridge the trust gap using transparency through user ratings and reviews.</p>
            </div>
            <div className="bg-dark-card p-4 rounded border border-gray-800">
              <h4 className="font-semibold text-white mb-2">Will I be overcharged because I am a traveler?</h4>
              {/* Pre-negotiated rates citation [cite: 29] */}
              <p className="text-gray-400 text-sm">Our platform helps reduce the fear of being overcharged by offering estimated service costs and pre-negotiated rates where applicable.</p>
            </div>
             <div className="bg-dark-card p-4 rounded border border-gray-800">
              <h4 className="font-semibold text-white mb-2">Is registration required for emergencies?</h4>
              {/* Design philosophy citation [cite: 31] */}
              <p className="text-gray-400 text-sm">No. Our platform is designed for emergency situations with no complex registration required, making it easy to use for all age groups.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} AutoIntegral — demo project
      </div>
    </footer>
  );
};

export default Footer; 
import React, { useState } from 'react';

// This is the top bar that stays at the top of the page
const Header = () => {
  // This helps use show or hide the login box when the button is clicked
  const [showLogin, setShowLogin] = useState(false);
// Design Note: We used thick black borders to give it a 'Bold' look
  return (
    <header className="w-full h-24 bg-white border-b-2 border-black flex items-center justify-between px-10 relative z-[2000]">
      <div className="flex-1"></div>

      <div className="flex-1 text-center">
        <h1 className="text-4xl font-black italic uppercase tracking-tighter">
          AUTO<span className="text-red-600">INTEGRAL</span>  
        </h1>
      </div>

      <div className="flex-1 flex justify-end items-center gap-6 relative">
        <button 
          onClick={() => setShowLogin(!showLogin)} 
          className="text-[12px] font-black uppercase hover:text-red-600 cursor-pointer"
        >
          Login
        </button>
        <button className="bg-black text-white px-6 py-2 rounded-full text-[11px] font-black uppercase cursor-pointer">
          Sign Up
        </button>

        {showLogin && (
          <div className="absolute top-16 right-0 w-80 bg-white border-4 border-black rounded-[30px] p-8 shadow-2xl z-[3000]">
            <h2 className="text-2xl font-black uppercase italic mb-6">User Login</h2>
            <div className="flex flex-col gap-4">
              <input type="email" placeholder="EMAIL ID" className="w-full p-3 border-2 border-black rounded-xl font-bold text-xs" />
              <input type="password" placeholder="PASSWORD" className="w-full p-3 border-2 border-black rounded-xl font-bold text-xs" />
              <button className="bg-black text-white py-3 rounded-xl font-black uppercase italic mt-2 hover:bg-red-600 transition-all text-sm">
                Login →
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
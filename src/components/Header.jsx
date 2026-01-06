import React, { useState } from 'react';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <header className="bg-dark-card py-4 shadow-md fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center px-6">
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-4">
            <img src="/assets/logo.svg" alt="AutoIntegral" className="h-10 w-auto" />
          </a>
          <nav className="hidden md:flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#mechanics" className="hover:text-primary">Mechanics</a>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-2 rounded bg-transparent border border-primary text-primary hover:bg-primary/10"
          >
            Login
          </button>
          <button
            onClick={() => setShowRegister(true)}
            className="px-4 py-2 rounded bg-primary text-white"
          >
            Sign up
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-dark-card border border-gray-700 p-6 rounded w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Login</h3>
              <button onClick={() => setShowLogin(false)} className="text-gray-400">&times;</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Logged in (demo)'); setShowLogin(false); }}>
              <input className="w-full px-3 py-2 mb-3 bg-transparent border border-gray-700 rounded" placeholder="Email" />
              <input className="w-full px-3 py-2 mb-4 bg-transparent border border-gray-700 rounded" placeholder="Password" type="password" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowLogin(false)} className="px-4 py-2 rounded border">Cancel</button>
                <button className="px-4 py-2 rounded bg-primary text-white">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
          <div className="bg-dark-card border border-gray-700 p-6 rounded w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Sign up</h3>
              <button onClick={() => setShowRegister(false)} className="text-gray-400">&times;</button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Registered (demo)'); setShowRegister(false); }}>
              <input className="w-full px-3 py-2 mb-3 bg-transparent border border-gray-700 rounded" placeholder="Name" />
              <input className="w-full px-3 py-2 mb-3 bg-transparent border border-gray-700 rounded" placeholder="Email" />
              <input className="w-full px-3 py-2 mb-4 bg-transparent border border-gray-700 rounded" placeholder="Password" type="password" />
              <div className="flex justify-end gap-2">
                <button type="button" onClick={() => setShowRegister(false)} className="px-4 py-2 rounded border">Cancel</button>
                <button className="px-4 py-2 rounded bg-primary text-white">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 

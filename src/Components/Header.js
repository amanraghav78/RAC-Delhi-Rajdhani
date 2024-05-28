// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="relative bg-white flex items-center justify-center text-center text-primary">
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Rotaract Club of Delhi Rajdhani</h1>
      </div>
    </header>
  );
}

export default Header;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Logo.png'; // Update with the correct path to your logo

function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 mr-3" />
        <span className="text-lg font-bold">Rotaract Club of Delhi Rajdhani</span>
      </div>
      <div className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-secondary">Home</Link>
        <Link to="/newsletter" className="hover:text-secondary">Our Newsletter</Link>
        <Link to="/team" className="hover:text-secondary">Team</Link>
        <Link to="/about" className="hover:text-secondary">About Us</Link>
        <Link to="/events" className="hover:text-secondary">Events</Link>
      </div>
    </nav>
  );
}

export default Navbar;

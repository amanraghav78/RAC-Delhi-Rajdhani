// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">About Us</h1>
      <p className="text-center text-lg md:text-xl mb-8">
        We are the Rotaract Club of Delhi Rajdhani, dedicated to service, leadership, and professional development.
      </p>
      <div className="bg-white p-4 rounded shadow-md space-y-2">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
          Our mission is to provide opportunities for young people to enhance their leadership skills and create positive change in their communities.
        </p>
      </div>
    </div>
  );
}

export default About;

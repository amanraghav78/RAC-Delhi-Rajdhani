// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Welcome to the Rotaract Club of Delhi Rajdhani</h1>
      <p className="text-center text-lg md:text-xl mb-8">
        We are a community of young individuals dedicated to service, leadership, and professional development.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            To provide opportunities for young people to enhance their leadership skills and create positive change in their communities.
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Join Us</h2>
          <p>
            Become a member and be part of a network of young leaders making a difference.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

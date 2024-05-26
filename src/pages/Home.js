// src/pages/Home.js
import React from 'react';

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Welcome to the Rotaract Club of Delhi Rajdhani</h1>
      <p className="text-center text-lg md:text-xl mb-8">
      "Self development- Fellowship through service"
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">About us</h2>
          <p>
          Rotaract Club of Delhi Rajdhani is the youth wing of Rotary International, District 3011 which aims to bring a positive and long lasting change in the community as well as self. 
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

// src/pages/Events.js
import React from 'react';

function Events() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-4 rounded shadow-md">
          <div className="overflow-hidden rounded">
            <img
              src="https://i.imgur.com/PEFGx4A.jpeg"
              alt="Clothes donation drive"
              className="w-full h-90 object-cover"
            />
          </div>
          <p className="mt-2 text-center font-semibold">Cloth Donation drive</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="overflow-hidden rounded">
            <img
              src="https://via.placeholder.com/400x300" // Placeholder image for Event 2
              alt="Event 2"
              className="w-full h-80 object-cover"
            />
          </div>
          <h2 className="mt-2 text-xl font-semibold text-center">Event 2</h2>
          <p className="text-center">Description of Event 2.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

// src/pages/Events.js
import React from 'react';

function Events() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Our Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Event 1</h2>
          <p>Description of Event 1.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Event 2</h2>
          <p>Description of Event 2.</p>
        </div>
      </div>
    </div>
  );
}

export default Events;

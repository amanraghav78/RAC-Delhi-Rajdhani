// src/pages/Team.js
import React from 'react';

function Team() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Our Team</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Member 1</h2>
          <p>description of Member 1.</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Member 2</h2>
          <p>description of Member 2</p>
        </div>
        <div className="bg-white p-4 rounded shadow-md space-y-2">
          <h2 className="text-xl font-semibold mb-2">Member 3</h2>
          <p>description of Member 3.</p>
        </div>
      </div>
    </div>
  );
}

export default Team;

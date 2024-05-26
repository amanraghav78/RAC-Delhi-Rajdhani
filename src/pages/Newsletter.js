// src/pages/Newsletter.js
import React from 'react';

function Newsletter() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">Our Newsletter</h1>
      <p className="text-center text-lg md:text-xl mb-8">
        Stay updated with our latest news and events by subscribing to our newsletter.
      </p>
      <div className="bg-white p-4 rounded shadow-md space-y-4">
        <h2 className="text-xl font-semibold mb-2">Subscribe Now</h2>
        <form className="flex flex-col space-y-4">
          <input type="email" placeholder="Enter your email" className="p-2 border rounded" />
          <button type="submit" className="bg-primary text-white p-2 rounded">Subscribe</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;

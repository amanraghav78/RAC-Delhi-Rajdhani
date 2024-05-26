// src/pages/Newsletter.js
import React from 'react';

function NewsletterPage() {
  return (
    <div className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-primary mb-8">Our Newsletter</h2>
      <p className="text-lg text-dark mb-6">Subscribe to our newsletter to stay updated.</p>
      <form className="flex justify-center">
        <input type="email" placeholder="Enter your email" className="p-2 w-64 border border-gray-300 rounded-l-lg" />
        <button type="submit" className="p-2 bg-secondary text-white font-semibold rounded-r-lg hover:bg-secondary-dark">Subscribe</button>
      </form>
    </div>
  );
}

export default NewsletterPage;

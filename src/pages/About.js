// src/pages/About.js
import React from 'react';

function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl font-bold text-center my-8">About Us</h1>
      <div class="text-center text-lg md:text-xl mb-8 px-4 md:px-8 lg:px-16 leading-relaxed">
  The Rotaract Club of Delhi Rajdhani, a proud youth wing of Rotary International, District 3011, is dedicated to fostering positive and enduring change within both our community and ourselves. 
  <br/>
  <br/>
  Rooted in the principles of optimism, happiness, and goodwill, the Rotaract Club of Delhi Rajdhani RID. 3011 steadfastly pursues its vision of a brighter future. We are committed to working diligently, ensuring that each individual takes pride and joy in the future we collectively create. With unwavering spirit and boundless enthusiasm, we stride towards realizing our vision.
</div>


      <div className="bg-white p-4 rounded shadow-md space-y-2">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p>
        Our mission is two-fold: to enhance society while nurturing personal growth. We achieve this by fostering dynamic exchanges of ideas with community leaders, cultivating essential leadership and professional skills, all while infusing every endeavor with the joy of service.
        </p>
      </div>
    </div>
  );
}

export default About;

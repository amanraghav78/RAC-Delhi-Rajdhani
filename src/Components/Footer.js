// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 font-merriweather text-sm mt-auto ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left hidden lg:block">
            <h5 className="font-semibold ">Rotaract Club of Delhi Rajdhani</h5>
            <p >Email: rotaractclubofdelhirajdhani@gmail.com</p>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://www.facebook.com/rotaractdelhirajdhani" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/rotaractdelhi" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/racdelhirajdhaniofficial" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/rotaractdelhirajdhani" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Rotaract Club of Delhi Rajdhani. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

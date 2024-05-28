
import './App.css'
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import NewsletterPage from './pages/Newsletter';
import Team from './pages/Team';
import About from './pages/About';
import Events from './pages/Events';
import Footer from './Components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


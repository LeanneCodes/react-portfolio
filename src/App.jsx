import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio/" element={<Home />} />
        <Route path="/react-portfolio/about" element={<About />} />
        <Route path="/react-portfolio/skills" element={<Skills />} />
        <Route path="/react-portfolio/projects" element={<Projects />} />
        <Route path="/react-portfolio/contact/*" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

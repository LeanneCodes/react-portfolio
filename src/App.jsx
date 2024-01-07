import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';


function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/react-portfolio/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/react-portfolio/skills" element={<Skills />} />
        <Route path="/react-portfolio/projects" element={<Projects />} />
        <Route path="/react-portfolio/contact/*" element={<Contact />} />
        <Route path="/react-portfolio/resume" element={<Resume />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <nav className="topbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>🏠 Home</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>📄 Résumé</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>✉️ Contact</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Router basename="/portfolio-website">
      <nav className="topbar">
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>🏠 Home</NavLink>
        <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>📄 Résumé</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>✉️ Contact</NavLink>
        <button id="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
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

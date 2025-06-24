import React from 'react';
import { NavLink } from 'react-router-dom'; // ✅ Import NavLink

function Home() {
  return (
    <div>
      {/* Top-bar menu */}
      <nav className="navbar">
        <NavLink to="/">🏠 Home</NavLink>
        <NavLink to="/resume">📄 Résumé</NavLink>
        <NavLink to="/contact">✉️ Contact</NavLink>
        <button id="theme-toggle">Switch to Light Mode</button>
      </nav>

      {/* Intro Header */}
      <header>
        <h1>Hello, I'm Celine 👋</h1>
        <p>Welcome to my web developer portfolio.</p>
      </header>

      {/* About me section */}
      <section>
        <h2>About Me</h2>
        <p>
          I am a software engineer with a passion for web development. <br />
          I'm currently rebuilding my skills and excited to work with modern tools again.
        </p>
      </section>

      {/* Projects I have done */}
      <section>
        <h2>Projects</h2>
        <ul>
          <li><strong>Bronco Buddies:</strong> Full stack matching platform using Node.js & React.</li>
          <li><strong>Recipe Recommender:</strong> Data science project using Python and ranking algorithms.</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

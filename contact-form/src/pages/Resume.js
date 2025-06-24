import React from 'react';
import '../index.css'; // Assuming styles are moved here

const Resume = () => {
  return (
    <div>
      {/* ───── Top-bar menu ───── */}
      <nav className="navbar">
        <a href="/">🏠 Home</a>
        <a href="/resume" className="active">📄 Résumé</a>
        <a href="/contact">✉️ Contact</a>
        <button id="theme-toggle">Switch to Light Mode</button>
      </nav>

      <header>
        <h1>Celine Mangahas – Résumé</h1>
      </header>

      {/* ───── Skills ───── */}
      <details id="skills" open>
        <summary><h2>Skills</h2></summary>
        <ul>
          <li><strong>Languages & Frameworks:</strong> Python, JavaScript, HTML, CSS, SQL, C++, C, Java, R, React.js, Node.js</li>
          <li><strong>Tools & Platforms:</strong> Git, GitHub, MySQL, REST APIs, VS Code, Unity, AWS, Spyder, JIRA, Atlassian</li>
          <li><strong>Data Science:</strong> NumPy, Pandas, OpenCV, data wrangling, ML model evaluation</li>
          <li><strong>Web Dev:</strong> Full-stack dev, auth, form validation, frontend / backend integration</li>
        </ul>
      </details>

      {/* ───── Work Experience ───── */}
      <details id="work">
        <summary><h2>Work Experience</h2></summary>
        <ul>
          <li>
            <strong>BrainStorm STEM Education – STEM Instructor</strong> (Jul 2025 – Present)
            <ul>
              <li>Teach robotics, engineering & physics to 1-6 grade students (Scratch & Python).</li>
            </ul>
          </li>
          <li>
            <strong>NAVAIR – Software Engineer</strong> (Jul 2023 – Nov 2023)
            <ul>
              <li>Automated flight-data workflows in Python & SQL → 95 % faster analysis.</li>
              <li>Built dashboards summarizing 10 GB+ of aviation KPIs.</li>
            </ul>
          </li>
        </ul>
      </details>

      {/* ───── Projects ───── */}
      <details id="projects">
        <summary><h2>Projects</h2></summary>
        <ul>
          <li><strong>Game Performance Analysis</strong> – R & Python data-viz project (<a href="https://rpubs.com/celinem13/kaizodata" target="_blank" rel="noopener noreferrer">link</a>)</li>
          <li><strong>Recipe Recommendation System</strong> – cosine similarity + BM25 in Python</li>
          <li>GitHub: <a href="https://github.com/celinem13" target="_blank" rel="noopener noreferrer">github.com/celinem13</a></li>
        </ul>
      </details>

      {/* ───── Education ───── */}
      <details id="education">
        <summary><h2>Education</h2></summary>
        <ul>
          <li><strong>Cal Poly Pomona</strong> – B.S. Computer Science (2018-2022)</li>
        </ul>
      </details>

      {/* ───── Certifications ───── */}
      <details id="certs">
        <summary><h2>Certifications</h2></summary>
        <ul>
          <li>Certified NetSuite Expert – Oracle SuiteFoundation</li>
        </ul>
      </details>
    </div>
  );
};

export default Resume;

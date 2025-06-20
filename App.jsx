import React from 'react'
import { FaEnvelope, FaLinkedin } from 'react-icons/fa'

export default function App() {
  return (
    <>
      <header className="hero animate">
        <div className="container">
          <img src="/Malak.jpg" alt="Malak Ashraf" className="profile-img" />
          <h1 className="main-name">Malak Ashraf</h1>
          <p className="job-title">Software Testing Engineer | Quality Advocate</p>
          <p className="intro">
            I help teams deliver secure, reliable software by breaking things the smart way before users do.
          </p>
        </div>
      </header>

      <section className="about animate">
        <h2>About Me</h2>
        <p>
          I'm a Software Testing Engineer based in Alexandria, Egypt, with a passion for software quality, logic, and security. 
          I specialize in functional and logic testing, with growing interest in automation and AI-based validation.
          With every test case, I aim to protect users and support developers in shipping better code.
        </p>
      </section>

      <section className="education animate">
        <h2>Education</h2>
        <p><strong>Faculty of Computers and Data Science</strong>, Alexandria University</p>
      </section>

      <section className="skills animate">
        <h2>Skills</h2>
        <h3>Hard Skills</h3>
        <ul>
          <li>Java, Python, C++</li>
          <li>OOP, Data Structures & Algorithms</li>
          <li>Software Testing & Test Case Writing</li>
          <li>Bug Reporting & File-Based Data Handling</li>
          <li>GUI Testing (Java Swing)</li>
          <li>AI Logic & Search Algorithms</li>
          <li>Linux, Microsoft Office</li>
          <li>Basic Security Testing Awareness</li>
        </ul>
        <h3>Soft Skills</h3>
        <ul>
          <li>Problem-Solving</li>
          <li>Critical Thinking</li>
          <li>Teamwork & Communication</li>
          <li>Fast Learning & Adaptability</li>
          <li>Attention to Detail</li>
        </ul>
      </section>

      <section className="services animate">
        <h2>Offered Services</h2>
        <ul>
          <li>Manual Software Testing</li>
          <li>Test Case Design & Execution</li>
          <li>Bug Reporting & Reproducibility Checks</li>
          <li>GUI Testing for Desktop Apps</li>
          <li>Logic Testing for AI/Algorithms</li>
          <li>Security-aware Functional Testing</li>
        </ul>
      </section>

      <section className="experience animate">
        <h2>Work Experience</h2>
        <p><strong>Freelancing & Self-Led Projects</strong></p>
        <ul>
          <li>Built a Java-based flight booking system using GUI and OOP.</li>
          <li>Developed a university management system in Python with core structures.</li>
          <li>Created a Lights Out AI solver with automated logic validation.</li>
        </ul>
      </section>

      <section className="volunteering animate">
        <h2>Volunteering</h2>
        <p><strong>GDG (Google Developer Groups)</strong></p>
        <p>Engaged with the tech community and enhanced collaboration and HR communication skills.</p>
      </section>

      <section className="projects animate">
        <h2>Projects</h2>
        <div className="project">
          <h3>Flight Booking System (Java)</h3>
          <p>A GUI-based booking system simulating real-world logic using OOP, file handling, and user roles.</p>
        </div>
        <div className="project">
          <h3>University Management System (Python)</h3>
          <p>Console-based academic system built using stacks, linked lists, and sorting techniques.</p>
        </div>
        <div className="project">
          <h3>Lights Out Solver (Python + AI)</h3>
          <p>Solves randomized grid configurations using smart AI logic and search strategies.</p>
        </div>
      </section>

      <section className="courses animate">
        <h2>Courses</h2>
        <ul>
          <li>Software Testing Track – Digital Egypt Pioneers</li>
          <li>Software Testing Course – Mahara Tech</li>
        </ul>
      </section>

      <section className="contact animate">
        <h2>Contact</h2>
        <ul>
          <li><FaEnvelope color="#2563eb" style={{ marginRight: 8 }} /> <a href="mailto:malakashrafrezk@gmail.com">malakashrafrezk@gmail.com</a></li>
          <li><FaLinkedin color="#2563eb" style={{ marginRight: 8 }} /> <a href="https://www.linkedin.com/in/malakashrafrezk" target="_blank" rel="noopener noreferrer">linkedin.com/in/malakashrafrezk</a></li>
        </ul>
      </section>

      <footer className="animate">
        <p>&copy; 2025 Malak Ashraf. All rights reserved. | Powered by Angel 🪽</p>
      </footer>
    </>
  )
}

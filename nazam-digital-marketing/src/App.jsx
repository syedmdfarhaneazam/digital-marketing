import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const App = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="App">
      <Hero />
      <Services />

      <footer>
        <Contact />
        &copy; {new Date().getFullYear()} |
        <span> Website made by Syed Md Farhan E Azam |</span>
        <a href="https://github.com/syedmdfarhaneazam" target="_blank" rel="noopener noreferrer">
          |<FaGithub />|
        </a>|
        <a href='https://www.linkedin.com/in/syed-md-farhan-e-azam-b21043279/' target='_blank' rel='noopener noreferrer'>
          |<FaLinkedin />|
        </a>
      </footer>

    </div>
  );
};

export default App;

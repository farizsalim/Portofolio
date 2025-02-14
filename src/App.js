import { useState, useEffect } from 'react';
import Navbar from './component/Navbar/Navbar';
import Hero from './component/Hero/Hero';
import TechnicalSkills from './component/TechnicalSkills/TechnicalSkills';
import Projects from './component/Projects/Projects';
import AboutMe from './component/AboutMe/AboutMe';
import Contact from './component/Contact/Contact'; // Import the Contact Component
import Footer from './component/Footer/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150; // Offset for smoother scroll effect
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Navbar activeSection={activeSection} />
      
      <section id="home">
        <Hero />
      </section>

      <section id="skills">
        <TechnicalSkills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="Footer">
        <Footer/>
      </section>
    </div>
  );
}

export default App;

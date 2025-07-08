import { useRef, useState, useEffect } from 'react';
import './App.css'
import { motion } from 'framer-motion'

/*{importing components}*/
import Navbar from './components/navbar.jsx'
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Skills from './components/skills.jsx';
import SkillsUpdated from './components/skills updated.jsx';
import Contact from './components/contact.jsx';

//imported animations
import ParticleField from './components/animations/particlefield.jsx';
import Glowcomponents from './components/animations/glowcomponent.jsx'


function App() {
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
        console.log(activeSection);
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);

  return (
    <>
      <div id='container' className="bg-gradient-to-br from-black via-[#0b0c2a] to-[#1f0c2b] text-white font-sans w-screen min-h-screen"
      >
        <Glowcomponents />
        <Navbar activeSection={activeSection} sectionRefs={sectionRefs} />

        <section id="about" ref={sectionRefs.about} className="min-h-1/2 px-10 overflow-hidden ">
          <div className="fixed top-0 left-0 w-full h-full z-0 ">
            <ParticleField />
          </div>
          <About />
        </section>


        <section id="projects" ref={sectionRefs.projects} className="min-h-screen  bg-[#c1c1c109] z-10">
          <Projects />
        </section>

        <section id="skills " ref={sectionRefs.skills} className="min-h-screen flex justify-center items-center">
          {/* <Skills /> */}
          <SkillsUpdated />
        </section>

        <section id="contact" ref={sectionRefs.contact} className="h-screen relative overflow-hidden">
          <Contact />
        </section>

        {/* Footer */}
        <footer className="text-center py-6 text-sm text-[#8892b0] bg-black/50 z-10">
          © {new Date().getFullYear()} Harsh Kumar. Built with React & Tailwind.
        </footer>
      </div>
    </>
  )
}

export default App

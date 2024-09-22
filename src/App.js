import React from 'react';
import GlobalStyle from './styles/GlobalStyle'; // Import global styles
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';





const App = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact /> {/* Add Contact section at the bottom */}
      <Footer />
    </>
  );
};

export default App;

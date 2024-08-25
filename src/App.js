



import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='max-w-full overflow-x-hidden'>
      <Header />
      <section id="home">
        {/* Home content (if any) */}
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="awards">
        <Awards />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
};

export default App;

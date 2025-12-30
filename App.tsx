
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import Testimonials from './components/Testimonials.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activeSection={activeSection} />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        <section id="services" className="py-20 bg-white">
          <Services />
        </section>
        <section id="about" className="py-20 bg-slate-50">
          <About />
        </section>
        <section id="testimonials" className="py-20 bg-white">
          <Testimonials />
        </section>
        <section id="contact" className="py-20 bg-slate-50">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;

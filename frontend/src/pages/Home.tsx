import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Capabilities } from '../components/Capabilities';
import { Projects } from '../components/Projects';
import { Philosophy } from '../components/Philosophy';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
export function Home() {
  const location = useLocation();
  // Handle hash-based scroll when navigating back from case study
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '');
    if (hash && hash !== '/') {
      // Small delay to let the page render
      const timer = setTimeout(() => {
        const el = document.getElementById(hash);
        if (el)
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location]);
  return (
    <main>
      <Hero />
      <About />
      <Capabilities />
      <Projects />
      <Philosophy />
      <Contact />
      <Footer />
    </main>);

}
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Capabilities } from './components/Capabilities';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
export function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div
        className="relative min-h-screen"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)'
        }}>

        <Navigation />
        <main>
          <Hero />
          <About />
          <Capabilities />
          <Projects />
          <Philosophy />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>);

}
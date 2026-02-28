import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { CaseStudy } from './pages/CaseStudy';
function AppShell() {
  return (
    <>
      <CustomCursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </>);

}
export function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <div
          className="relative min-h-screen"
          style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)'
          }}>

          <AppShell />
        </div>
      </ThemeProvider>
    </HashRouter>);

}
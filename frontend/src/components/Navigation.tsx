import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
const navLinks = [
{
  label: 'About',
  href: '#about'
},
{
  label: 'Capabilities',
  href: '#capabilities'
},
{
  label: 'Work',
  href: '#work'
},
{
  label: 'Philosophy',
  href: '#philosophy'
},
{
  label: 'Contact',
  href: '#contact'
}];

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  function handleNavClick(href: string) {
    setMobileOpen(false);
    const sectionId = href.replace('#', '');
    if (location.pathname !== '/') {
      // Navigate home first, then scroll after mount
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el)
        el.scrollIntoView({
          behavior: 'smooth'
        });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el)
      el.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
  function handleLogoClick() {
    setMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.25, 0.1, 0.25, 1]
        }}
        style={{
          backgroundColor: scrolled ?
          'color-mix(in srgb, var(--bg-primary) 92%, transparent)' :
          'transparent',
          borderBottom: scrolled ?
          '1px solid var(--border-subtle)' :
          '1px solid transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background-color 0.4s ease, border-color 0.4s ease'
        }}>

        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Monogram */}
            <button
              onClick={handleLogoClick}
              className="font-heading text-xl font-light tracking-[0.15em] bg-transparent border-none p-0"
              style={{
                color: 'var(--accent-gold)'
              }}
              aria-label="Return to top">

              A.R.
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) =>
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-xs uppercase tracking-[0.25em] transition-colors duration-300 bg-transparent border-none p-0"
                style={{
                  color: 'var(--text-secondary)'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--text-primary)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--text-secondary)'
                }>

                  {link.label}
                </button>
              )}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-sm transition-colors duration-300"
                style={{
                  color: 'var(--text-secondary)'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--accent-gold)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--text-secondary)'
                }
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>

                <AnimatePresence mode="wait">
                  {theme === 'dark' ?
                  <motion.div
                    key="sun"
                    initial={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8
                    }}
                    transition={{
                      duration: 0.3
                    }}>

                      <SunIcon size={16} />
                    </motion.div> :

                  <motion.div
                    key="moon"
                    initial={{
                      opacity: 0,
                      rotate: 90,
                      scale: 0.8
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1
                    }}
                    exit={{
                      opacity: 0,
                      rotate: -90,
                      scale: 0.8
                    }}
                    transition={{
                      duration: 0.3
                    }}>

                      <MoonIcon size={16} />
                    </motion.div>
                  }
                </AnimatePresence>
              </button>

              {/* Mobile Hamburger */}
              <button
                className="md:hidden p-2"
                style={{
                  color: 'var(--text-secondary)'
                }}
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}>

                <AnimatePresence mode="wait">
                  {mobileOpen ?
                  <motion.div
                    key="x"
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.2
                    }}>

                      <XIcon size={18} />
                    </motion.div> :

                  <motion.div
                    key="menu"
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.2
                    }}>

                      <MenuIcon size={18} />
                    </motion.div>
                  }
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          className="fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center"
          style={{
            backgroundColor: 'var(--bg-primary)'
          }}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          transition={{
            duration: 0.3
          }}>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) =>
            <motion.button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="font-heading text-3xl font-light bg-transparent border-none"
              style={{
                color: 'var(--text-primary)'
              }}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.5
              }}>

                  {link.label}
                </motion.button>
            )}
            </nav>
          </motion.div>
        }
      </AnimatePresence>
    </>);

}
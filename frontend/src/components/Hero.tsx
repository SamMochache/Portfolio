import React, { useRef, Children } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true">

      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          opacity: 0.045
        }}>

        <defs>
          <pattern
            id="grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse">

            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="var(--accent-gold)"
              strokeWidth="0.5" />

          </pattern>
          <pattern
            id="grid-large"
            width="400"
            height="400"
            patternUnits="userSpaceOnUse">

            <path
              d="M 400 0 L 0 0 0 400"
              fill="none"
              stroke="var(--accent-gold)"
              strokeWidth="1" />

          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#grid-large)" />
      </svg>

      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
          'radial-gradient(ellipse 80% 60% at 20% 50%, transparent 40%, var(--bg-primary) 100%)'
        }} />


      {/* Animated accent lines */}
      <motion.div
        className="absolute left-0 top-0 w-px h-full"
        style={{
          background:
          'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)',
          left: '20%',
          opacity: 0.08
        }}
        animate={{
          opacity: [0.04, 0.1, 0.04]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }} />

      <motion.div
        className="absolute left-0 top-0 w-px h-full"
        style={{
          background:
          'linear-gradient(to bottom, transparent, var(--accent-gold), transparent)',
          left: '60%',
          opacity: 0.06
        }}
        animate={{
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }} />

    </div>);

}
function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      aria-hidden="true">

      <div
        className="relative w-px h-16 overflow-hidden"
        style={{
          backgroundColor: 'var(--border-medium)'
        }}>

        <motion.div
          className="absolute top-0 left-0 w-full"
          style={{
            height: '40%',
            background:
            'linear-gradient(to bottom, transparent, var(--accent-gold))'
          }}
          animate={{
            y: ['0%', '250%']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }} />

      </div>
    </div>);

}
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 24
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
      aria-label="Hero section">

      <AnimatedGrid />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 w-full pt-24 pb-32"
        style={{
          y,
          opacity
        }}>

        <motion.div
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible">

          {/* Eyebrow */}
          <motion.p
            variants={itemVariants}
            className="font-body text-xs uppercase mb-8"
            style={{
              color: 'var(--accent-gold)',
              letterSpacing: '0.3em'
            }}>

            Digital Architect
          </motion.p>

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-light leading-[1.05] mb-8"
            style={{
              fontSize: 'clamp(3.2rem, 7.5vw, 7rem)',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>

            Engineering Digital
            <br />
            Infrastructure for
            <br />
            <span
              style={{
                color: 'var(--accent-gold)',
                fontStyle: 'italic'
              }}>

              the Exceptional.
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="font-body font-light text-lg leading-relaxed mb-12 max-w-lg"
            style={{
              color: 'var(--text-secondary)'
            }}>

            Precision-built systems. Scalable architecture.
            <br />
            Private execution.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start gap-4">

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}
              className="inline-block font-body text-xs uppercase px-8 py-4 transition-all duration-300 group"
              style={{
                border: '1px solid var(--accent-gold)',
                color: 'var(--accent-gold)',
                letterSpacing: '0.2em'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-gold)';
                e.currentTarget.style.color = 'var(--bg-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--accent-gold)';
              }}>

              Request Private Consultation
            </a>

            <p
              className="font-heading text-xs italic"
              style={{
                color: 'var(--text-tertiary)'
              }}>

              Currently accepting select engagements
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>);

}
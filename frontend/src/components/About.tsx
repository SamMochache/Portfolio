import React, { useRef, Children, lazy } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
const stats = [
{
  value: '6+',
  label: 'Years of Practice'
},
{
  value: '40+',
  label: 'Systems Built'
},
{
  value: '$60M+',
  label: 'Processed'
},
{
  value: '99.99%',
  label: 'Uptime Delivered'
}];

const PORTRAIT_URL = "/Sam_Mochache.png";

function GrainOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        borderRadius: '14px',
        opacity: 0.025,
        mixBlendMode: 'overlay'
      }}
      aria-hidden="true">

      <filter id="grain-portrait">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.75"
          numOctaves="4"
          stitchTiles="stitch" />

        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain-portrait)" />
    </svg>);

}
interface PortraitProps {
  isInView: boolean;
}
function ExecutivePortrait({ isInView }: PortraitProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const filterDark = 'grayscale(100%) contrast(1.18) brightness(0.88)';
  const filterLight = 'grayscale(75%) contrast(1.08) brightness(1.04) sepia(8%)';
  const filterHover = 'grayscale(0%) contrast(1.05) brightness(0.95)';
  const shadowDark =
  '0 0 60px rgba(255,255,255,0.03), 0 20px 60px rgba(0,0,0,0.5)';
  const shadowLight = '0 8px 40px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.05)';
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {}
      }
      transition={{
        duration: 0.9,
        delay: 0.35,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="relative flex justify-center lg:justify-end">

      {/* Portrait container */}
      <div
        className="relative group"
        style={{
          width: '100%',
          maxWidth: '420px'
        }}>

        {/* Vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            borderRadius: '14px',
            background: isDark ?
            'radial-gradient(ellipse at center, transparent 45%, rgba(11,11,15,0.55) 100%)' :
            'radial-gradient(ellipse at center, transparent 45%, rgba(248,246,241,0.4) 100%)'
          }}
          aria-hidden="true" />


        {/* Grain overlay */}
        <div
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            borderRadius: '14px',
            overflow: 'hidden'
          }}>

          <GrainOverlay />
        </div>

        {/* Portrait image */}
        <img
          src={PORTRAIT_URL}
          alt="Sam Mochache — Digital Architect & Full-Stack Engineer"
          loading="lazy"
          decoding="async"
          className="w-full block"
          style={{
            borderRadius: '14px',
            filter: isDark ? filterDark : filterLight,
            boxShadow: isDark ? shadowDark : shadowLight,
            transition: 'filter 0.5s ease, box-shadow 0.4s ease',
            aspectRatio: '1 / 1',
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
          onMouseEnter={(e) => {
            if (isDark) e.currentTarget.style.filter = filterHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = isDark ? filterDark : filterLight;
          }} />


        {/* Subtle gold accent line — bottom left */}
        <motion.div
          className="absolute -bottom-4 left-0"
          style={{
            width: '48px',
            height: '1px',
            backgroundColor: 'var(--accent-gold)',
            opacity: 0.5
          }}
          initial={{
            scaleX: 0,
            originX: 0
          }}
          animate={
          isInView ?
          {
            scaleX: 1
          } :
          {}
          }
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          aria-hidden="true" />

      </div>
    </motion.div>);

}
export function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };
  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 md:py-40"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
      aria-labelledby="about-heading">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Top row: decorative number + section label */}
        <motion.div
          className="flex items-start gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}>

          <motion.span
            variants={itemVariants}
            className="font-heading font-light select-none hidden lg:block"
            style={{
              fontSize: '5rem',
              lineHeight: 1,
              color: 'var(--text-primary)',
              opacity: 0.04,
              letterSpacing: '-0.05em',
              marginTop: '-0.5rem'
            }}
            aria-hidden="true">

            01
          </motion.span>
          <motion.p
            variants={itemVariants}
            className="font-body text-xs uppercase pt-1"
            style={{
              color: 'var(--accent-gold)',
              letterSpacing: '0.3em'
            }}>

            About
          </motion.p>
        </motion.div>

        {/* Main content grid: text left, portrait right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left: Text content */}
          <motion.div
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}>

            {/* Heading */}
            <motion.h2
              id="about-heading"
              variants={itemVariants}
              className="font-heading font-light mb-10"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}>

              A Digital Architect Operating at the Intersection of Engineering
              and Business Strategy
            </motion.h2>

            {/* Body paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6 mb-16">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                For over a decade, I have designed and deployed private digital
                infrastructure for ventures where failure is not an option. My
                work operates at the intersection of engineering precision and
                business strategy — building systems that handle
                institutional-grade volume, protect sensitive data, and scale
                without friction.
              </p>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                I do not build websites. I architect the digital foundations
                upon which high-stakes businesses operate. Each engagement is
                treated with the discretion of a private counsel and the rigor
                of a principal engineer — because the systems I build often
                become the most critical infrastructure my clients own.
              </p>
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                My clients are founders, family offices, fintech executives, and
                private ventures who require measurable outcomes, long-term
                thinking, and absolute confidentiality. I operate with a limited
                client roster by design.
              </p>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10"
              style={{
                borderTop: '1px solid var(--border-subtle)'
              }}>

              {stats.map((stat) =>
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="flex flex-col gap-2">

                  <span
                  className="font-heading font-light"
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                    color: 'var(--accent-gold)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1
                  }}>

                    {stat.value}
                  </span>
                  <span
                  className="font-body text-xs uppercase"
                  style={{
                    color: 'var(--text-tertiary)',
                    letterSpacing: '0.15em'
                  }}>

                    {stat.label}
                  </span>
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-[340px] md:max-w-[420px]">
              <ExecutivePortrait isInView={isInView} />
            </div>
          </div>
        </div>
      </div>
    </section>);

}
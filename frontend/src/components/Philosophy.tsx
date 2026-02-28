import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
const pillars = [
{
  title: 'Longevity Over Trend',
  description:
  'Built to last decades, not quarters. Every architectural decision is made with the long arc in mind.'
},
{
  title: 'Security as Foundation',
  description:
  'Privacy and protection are not features. They are prerequisites — the bedrock upon which everything else is built.'
},
{
  title: 'Measurable Impact',
  description:
  'Every architectural decision is justified by business outcomes. Engineering in service of strategy, not the other way around.'
}];

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const quoteY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-32 md:py-40 overflow-hidden"
      style={{
        backgroundColor: 'var(--bg-secondary)'
      }}
      aria-labelledby="philosophy-heading">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section label */}
        <motion.p
          className="font-body text-xs uppercase mb-16"
          style={{
            color: 'var(--accent-gold)',
            letterSpacing: '0.3em'
          }}
          initial={{
            opacity: 0,
            y: 16
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
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1]
          }}>

          Philosophy
        </motion.p>

        {/* Pull quote block */}
        <div className="relative mb-24 md:mb-32">
          {/* Decorative quote mark with parallax */}
          <motion.div
            ref={quoteRef}
            style={{
              y: quoteY
            }}
            className="absolute -top-8 -left-4 md:-left-8 select-none pointer-events-none"
            aria-hidden="true">

            <span
              className="font-heading"
              style={{
                fontSize: 'clamp(10rem, 20vw, 22rem)',
                lineHeight: 0.8,
                color: 'var(--accent-gold)',
                opacity: 0.05,
                fontWeight: 300
              }}>

              "
            </span>
          </motion.div>

          {/* Quote text */}
          <motion.blockquote
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
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative z-10 max-w-4xl">

            <p
              id="philosophy-heading"
              className="font-heading italic font-light leading-[1.3]"
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em'
              }}>

              I do not build software. I engineer systems that compound in value
              — infrastructure that outlasts trends, scales without friction,
              and operates with the precision of a Swiss mechanism.
            </p>
          </motion.blockquote>
        </div>

        {/* Divider */}
        <motion.div
          className="mb-16"
          style={{
            height: '1px',
            backgroundColor: 'var(--border-subtle)'
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
            duration: 1,
            delay: 0.4,
            ease: [0.25, 0.1, 0.25, 1]
          }} />


        {/* Philosophy Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {pillars.map((pillar, i) =>
          <motion.div
            key={pillar.title}
            initial={{
              opacity: 0,
              y: 20
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
              duration: 0.7,
              delay: 0.5 + i * 0.12,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="flex flex-col gap-4">

              <div className="flex items-center gap-4">
                <span
                className="font-heading font-light text-sm"
                style={{
                  color: 'var(--accent-gold)',
                  opacity: 0.6
                }}
                aria-hidden="true">

                  0{i + 1}
                </span>
                <div
                style={{
                  height: '1px',
                  width: '24px',
                  backgroundColor: 'var(--accent-gold)',
                  opacity: 0.3
                }} />

              </div>
              <h3
              className="font-heading font-light text-xl"
              style={{
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>

                {pillar.title}
              </h3>
              <p
              className="font-body font-light text-sm leading-relaxed"
              style={{
                color: 'var(--text-secondary)'
              }}>

                {pillar.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
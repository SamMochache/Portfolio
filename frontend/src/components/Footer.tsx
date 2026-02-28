import React from 'react';
import { motion } from 'framer-motion';
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      className="py-16"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)'
      }}
      role="contentinfo">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          className="flex flex-col items-center gap-5 text-center"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}>

          {/* Monogram */}
          <span
            className="font-heading text-2xl font-light"
            style={{
              color: 'var(--accent-gold)',
              letterSpacing: '0.15em'
            }}>

            A.R.
          </span>

          {/* Tagline */}
          <p
            className="font-body font-light text-xs"
            style={{
              color: 'var(--text-tertiary)',
              letterSpacing: '0.15em'
            }}>

            Precision-engineered digital infrastructure.
          </p>

          {/* Divider */}
          <div
            style={{
              width: '40px',
              height: '1px',
              backgroundColor: 'var(--border-medium)'
            }} />


          {/* Copyright */}
          <p
            className="font-body font-light text-xs"
            style={{
              color: 'var(--text-tertiary)',
              letterSpacing: '0.1em'
            }}>

            © {year} A.R. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>);

}
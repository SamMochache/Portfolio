import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowLeftIcon, CheckIcon } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import { Footer } from '../components/Footer';
import { Navigation } from '../components/Navigation';
const ease = [0.25, 0.1, 0.25, 1] as const;
function FadeUp({
  children,
  delay = 0



}: {children: React.ReactNode;delay?: number;}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-60px'
  });
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 22
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
        duration: 0.75,
        delay,
        ease
      }}>

      {children}
    </motion.div>);

}
function SectionLabel({ text }: {text: string;}) {
  return (
    <p
      className="font-body text-xs uppercase mb-4"
      style={{
        color: 'var(--accent-gold)',
        letterSpacing: '0.3em'
      }}>

      {text}
    </p>);

}
function Divider() {
  return (
    <div
      className="my-16 md:my-20"
      style={{
        height: '1px',
        backgroundColor: 'var(--border-subtle)'
      }} />);


}
export function CaseStudy() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, [slug]);
  if (!project) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{
          backgroundColor: 'var(--bg-primary)'
        }}>

        <p
          className="font-heading text-2xl font-light"
          style={{
            color: 'var(--text-secondary)'
          }}>

          Case study not found.
        </p>
        <button
          onClick={() => navigate('/')}
          className="font-body text-xs uppercase px-6 py-3 transition-all duration-300"
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

          Return Home
        </button>
      </div>);

  }
  return (
    <div
      style={{
        backgroundColor: 'var(--bg-primary)',
        minHeight: '100vh'
      }}>

      <Navigation />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden"
        style={{
          backgroundColor: 'var(--bg-primary)'
        }}
        aria-labelledby="cs-title">

        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true">

          <svg
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: 0.03
            }}>

            <defs>
              <pattern
                id="cs-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse">

                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="var(--accent-gold)"
                  strokeWidth="0.5" />

              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cs-grid)" />
          </svg>
          <div
            className="absolute inset-0"
            style={{
              background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--bg-primary) 100%)'
            }} />

        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* Back link */}
          <motion.button
            initial={{
              opacity: 0,
              x: -12
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.6,
              ease
            }}
            onClick={() => navigate('/#work')}
            className="inline-flex items-center gap-2 mb-14 group"
            style={{
              color: 'var(--text-tertiary)'
            }}
            onMouseEnter={(e) =>
            e.currentTarget.style.color = 'var(--accent-gold)'
            }
            onMouseLeave={(e) =>
            e.currentTarget.style.color = 'var(--text-tertiary)'
            }
            aria-label="Back to selected work">

            <ArrowLeftIcon
              size={14}
              className="transition-transform duration-300 group-hover:-translate-x-1" />

            <span
              className="font-body text-xs uppercase"
              style={{
                letterSpacing: '0.2em'
              }}>

              Selected Work
            </span>
          </motion.button>

          {/* Tags */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease
            }}>

            {project.tags.map((tag) =>
            <span
              key={tag}
              className="font-body text-xs uppercase px-3 py-1"
              style={{
                color: 'var(--text-tertiary)',
                border: '1px solid var(--border-subtle)',
                letterSpacing: '0.15em'
              }}>

                {tag}
              </span>
            )}
          </motion.div>

          {/* Title */}
          <motion.h1
            id="cs-title"
            className="font-heading font-light mb-8 max-w-4xl"
            style={{
              fontSize: 'clamp(2.2rem, 5vw, 5rem)',
              lineHeight: 1.08,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
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
              duration: 0.8,
              delay: 0.15,
              ease
            }}>

            {project.title}
          </motion.h1>

          {/* Short description */}
          <motion.p
            className="font-body font-light text-lg leading-relaxed max-w-2xl mb-16"
            style={{
              color: 'var(--text-secondary)'
            }}
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease
            }}>

            {project.shortDescription}
          </motion.p>

          {/* Top metrics bar */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-px"
            style={{
              backgroundColor: 'var(--border-subtle)'
            }}
            initial={{
              opacity: 0,
              y: 16
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.35,
              ease
            }}>

            {project.metrics.map((m) =>
            <div
              key={m.label}
              className="flex flex-col gap-2 p-6 md:p-8"
              style={{
                backgroundColor: 'var(--bg-card)'
              }}>

                <span
                className="font-heading font-light"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em'
                }}>

                  {m.value}
                </span>
                <span
                className="font-body text-xs uppercase"
                style={{
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.15em'
                }}>

                  {m.label}
                </span>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ── Body Content ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-20 md:py-28">
        {/* Overview + Challenge — two column on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <FadeUp>
            <SectionLabel text="Overview" />
            <h2
              className="font-heading font-light mb-6"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>

              The Engagement
            </h2>
            <p
              className="font-body font-light text-base leading-relaxed"
              style={{
                color: 'var(--text-secondary)'
              }}>

              {project.overview}
            </p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <SectionLabel text="Challenge" />
            <h2
              className="font-heading font-light mb-6"
              style={{
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.2
              }}>

              The Problem
            </h2>
            <p
              className="font-body font-light text-base leading-relaxed"
              style={{
                color: 'var(--text-secondary)'
              }}>

              {project.challenge}
            </p>
          </FadeUp>
        </div>

        <Divider />

        {/* Solution */}
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionLabel text="Solution" />
              <h2
                className="font-heading font-light"
                style={{
                  fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em'
                }}>

                The Approach
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p
                className="font-body font-light text-base leading-relaxed"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                {project.solution}
              </p>
            </div>
          </div>
        </FadeUp>

        <Divider />

        {/* Architecture */}
        <FadeUp>
          <SectionLabel text="Architecture" />
          <h2
            className="font-heading font-light mb-10"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em'
            }}>

            Key Technical Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.architecture.map((item, i) =>
            <motion.div
              key={i}
              className="flex items-start gap-4 p-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}
              initial={{
                opacity: 0,
                y: 16
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-40px'
              }}
              transition={{
                duration: 0.6,
                delay: i * 0.07,
                ease
              }}>

                <div
                className="flex-shrink-0 mt-0.5"
                style={{
                  color: 'var(--accent-gold)'
                }}
                aria-hidden="true">

                  <CheckIcon size={14} />
                </div>
                <p
                className="font-body font-light text-sm leading-relaxed"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                  {item}
                </p>
              </motion.div>
            )}
          </div>
        </FadeUp>

        <Divider />

        {/* Results */}
        <FadeUp>
          <SectionLabel text="Results" />
          <h2
            className="font-heading font-light mb-10"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em'
            }}>

            Measured Outcomes
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-px"
            style={{
              backgroundColor: 'var(--border-subtle)'
            }}>

            {project.results.map((r) =>
            <div
              key={r.label}
              className="flex flex-col gap-3 p-8"
              style={{
                backgroundColor: 'var(--bg-card)'
              }}>

                <span
                className="font-heading font-light"
                style={{
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em'
                }}>

                  {r.value}
                </span>
                <span
                className="font-body text-xs uppercase"
                style={{
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.15em'
                }}>

                  {r.label}
                </span>
              </div>
            )}
          </div>
        </FadeUp>

        <Divider />

        {/* Tech Stack */}
        <FadeUp>
          <SectionLabel text="Technology" />
          <h2
            className="font-heading font-light mb-8"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em'
            }}>

            Stack & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech) =>
            <span
              key={tech}
              className="font-body text-xs uppercase px-4 py-2"
              style={{
                color: 'var(--text-secondary)',
                border: '1px solid var(--border-medium)',
                letterSpacing: '0.15em',
                backgroundColor: 'var(--bg-card)'
              }}>

                {tech}
              </span>
            )}
          </div>
        </FadeUp>

        {/* Bottom CTA */}
        <FadeUp delay={0.1}>
          <div
            className="mt-24 pt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
            style={{
              borderTop: '1px solid var(--border-subtle)'
            }}>

            <div>
              <p
                className="font-heading italic font-light text-xl mb-2"
                style={{
                  color: 'var(--text-primary)'
                }}>

                Interested in a similar engagement?
              </p>
              <p
                className="font-body font-light text-sm"
                style={{
                  color: 'var(--text-tertiary)'
                }}>

                Engagements are selective. Serious inquiries only.
              </p>
            </div>
            <button
              onClick={() => navigate('/#contact')}
              className="flex-shrink-0 font-body text-xs uppercase px-8 py-4 transition-all duration-300"
              style={{
                border: '1px solid var(--accent-gold)',
                color: 'var(--accent-gold)',
                letterSpacing: '0.2em',
                backgroundColor: 'transparent'
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
            </button>
          </div>
        </FadeUp>
      </div>

      <Footer />
    </div>);

}
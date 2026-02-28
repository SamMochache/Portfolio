import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
interface ProjectMetric {
  value: string;
  label: string;
}
interface Project {
  id: string;
  title: string;
  tags: string[];
  description: string;
  metrics: ProjectMetric[];
}
const projects: Project[] = [
{
  id: 'wealth-platform',
  title: 'Private Wealth Management Platform',
  tags: ['FinTech', 'Security', 'Scale'],
  description:
  'End-to-end wealth management platform with real-time portfolio analytics, encrypted client communications, and institutional-grade security. Designed for discretion, built for performance.',
  metrics: [
  {
    value: '10,000+',
    label: 'Active Users'
  },
  {
    value: '99.99%',
    label: 'Uptime'
  },
  {
    value: '$500M+',
    label: 'AUM Managed'
  }]

},
{
  id: 'payment-infrastructure',
  title: 'Global Payment Infrastructure',
  tags: ['Payments', 'Architecture', 'Compliance'],
  description:
  'Multi-currency payment orchestration layer handling complex routing, fraud detection, and regulatory compliance across jurisdictions. Built to the highest standards of financial infrastructure.',
  metrics: [
  {
    value: '150+',
    label: 'Countries'
  },
  {
    value: '$2B+',
    label: 'Processed'
  },
  {
    value: 'PCI DSS',
    label: 'Level 1'
  }]

},
{
  id: 'automation-suite',
  title: 'Enterprise Automation Suite',
  tags: ['AI', 'Automation', 'Efficiency'],
  description:
  'AI-powered workflow automation connecting disparate enterprise systems, eliminating operational bottlenecks and compounding efficiency gains across the entire organization.',
  metrics: [
  {
    value: '80%',
    label: 'Manual Work Eliminated'
  },
  {
    value: '12',
    label: 'Integrated Systems'
  },
  {
    value: '6-Figure',
    label: 'Annual Savings'
  }]

}];

interface ProjectCardProps {
  project: Project;
  index: number;
}
function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className="group relative p-8 md:p-10"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderLeft: '2px solid transparent',
        transition: 'border-color 0.3s ease, background-color 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderLeftColor = 'var(--accent-gold)';
        e.currentTarget.style.backgroundColor = 'var(--bg-elevated)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderLeftColor = 'transparent';
        e.currentTarget.style.backgroundColor = 'var(--bg-card)';
      }}
      aria-label={`Case study: ${project.title}`}>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Project Info */}
        <div className="lg:col-span-7 flex flex-col gap-5">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
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
          </div>

          {/* Title */}
          <h3
            className="font-heading font-light"
            style={{
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
              letterSpacing: '-0.01em'
            }}>

            {project.title}
          </h3>

          {/* Description */}
          <p
            className="font-body font-light text-sm leading-relaxed"
            style={{
              color: 'var(--text-secondary)'
            }}>

            {project.description}
          </p>

          {/* View Case Study link */}
          <div className="mt-2">
            <span
              className="inline-flex items-center gap-2 font-body text-xs uppercase transition-all duration-300 group-hover:gap-3"
              style={{
                color: 'var(--accent-gold)',
                letterSpacing: '0.15em'
              }}
              role="presentation"
              aria-hidden="true">

              View Case Study
              <ArrowRightIcon size={12} />
            </span>
          </div>
        </div>

        {/* Right: Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-center gap-6">
          <div
            className="grid grid-cols-3 lg:grid-cols-1 gap-4 lg:gap-6 pt-6 lg:pt-0 lg:pl-8"
            style={{
              borderTop: '1px solid var(--border-subtle)'
            }}>

            {project.metrics.map((metric) =>
            <div key={metric.label} className="flex flex-col gap-1">
                <span
                className="font-heading font-light"
                style={{
                  fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
                  color: 'var(--accent-gold)',
                  lineHeight: 1,
                  letterSpacing: '-0.02em'
                }}>

                  {metric.value}
                </span>
                <span
                className="font-body text-xs"
                style={{
                  color: 'var(--text-tertiary)',
                  letterSpacing: '0.1em'
                }}>

                  {metric.label}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>);

}
export function Projects() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section
      id="work"
      ref={ref}
      className="py-32 md:py-40"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
      aria-labelledby="work-heading">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="mb-16 md:mb-20"
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
            ease: [0.25, 0.1, 0.25, 1]
          }}>

          <p
            className="font-body text-xs uppercase mb-4"
            style={{
              color: 'var(--accent-gold)',
              letterSpacing: '0.3em'
            }}>

            Selected Work
          </p>
          <h2
            id="work-heading"
            className="font-heading font-light"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em'
            }}>

            Case Studies in Precision
          </h2>
        </motion.div>

        {/* Project Cards */}
        <div
          className="flex flex-col gap-px"
          style={{
            backgroundColor: 'var(--border-subtle)'
          }}>

          {projects.map((project, i) =>
          <ProjectCard key={project.id} project={project} index={i} />
          )}
        </div>
      </div>
    </section>);

}
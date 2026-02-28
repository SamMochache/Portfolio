import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ShieldIcon,
  CreditCardIcon,
  ZapIcon,
  BotIcon,
  CloudIcon } from
'lucide-react';
interface Capability {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}
const capabilities: Capability[] = [
{
  number: '01',
  icon: <ShieldIcon size={20} />,
  title: 'Private Systems Engineering',
  description:
  'Bespoke digital infrastructure designed for confidentiality, resilience, and scale. Built for ventures where discretion is non-negotiable.'
},
{
  number: '02',
  icon: <CreditCardIcon size={20} />,
  title: 'Secure Payment Architecture',
  description:
  'End-to-end payment systems with institutional-grade security protocols. PCI DSS compliant, multi-currency, fraud-resistant by design.'
},
{
  number: '03',
  icon: <ZapIcon size={20} />,
  title: 'High-Performance Web Platforms',
  description:
  'Sub-second load times, 99.99% uptime, engineered for peak demand. Platforms that perform when the stakes are highest.'
},
{
  number: '04',
  icon: <BotIcon size={20} />,
  title: 'Automation & AI Systems',
  description:
  'Intelligent workflows that eliminate operational friction and compound efficiency. Systems that learn, adapt, and scale with your growth.'
},
{
  number: '05',
  icon: <CloudIcon size={20} />,
  title: 'Infrastructure & Cloud Strategy',
  description:
  'Multi-cloud architectures built for longevity, cost efficiency, and zero single points of failure. Infrastructure as a competitive advantage.'
}];

interface CapabilityCardProps {
  capability: Capability;
  index: number;
}
function CapabilityCard({ capability, index }: CapabilityCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 24
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
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{
        y: -4
      }}
      className="relative p-8 flex flex-col gap-6 group"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        transition: 'border-color 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-medium)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-subtle)';
      }}>

      {/* Card number — decorative */}
      <span
        className="absolute top-6 right-6 font-heading font-light select-none"
        style={{
          fontSize: '3rem',
          lineHeight: 1,
          color: 'var(--text-primary)',
          opacity: 0.04,
          letterSpacing: '-0.05em'
        }}
        aria-hidden="true">

        {capability.number}
      </span>

      {/* Icon */}
      <div
        className="w-10 h-10 flex items-center justify-center"
        style={{
          color: 'var(--accent-gold)'
        }}
        aria-hidden="true">

        {capability.icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3
          className="font-heading font-light text-xl"
          style={{
            color: 'var(--text-primary)',
            lineHeight: 1.2
          }}>

          {capability.title}
        </h3>
        <p
          className="font-body font-light text-sm leading-relaxed"
          style={{
            color: 'var(--text-secondary)'
          }}>

          {capability.description}
        </p>
      </div>
    </motion.article>);

}
export function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  return (
    <section
      id="capabilities"
      ref={ref}
      className="py-32 md:py-40"
      style={{
        backgroundColor: 'var(--bg-secondary)'
      }}
      aria-labelledby="capabilities-heading">

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

            Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="font-heading font-light max-w-xl"
            style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              color: 'var(--text-primary)',
              lineHeight: 1.15,
              letterSpacing: '-0.01em'
            }}>

            Precision Engineering Across Every Layer
          </h2>
        </motion.div>

        {/* Cards Grid: 3 top, 2 bottom */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{
            backgroundColor: 'var(--border-subtle)'
          }}>

          {capabilities.slice(0, 3).map((cap, i) =>
          <CapabilityCard key={cap.number} capability={cap} index={i} />
          )}
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px mt-px"
          style={{
            backgroundColor: 'var(--border-subtle)'
          }}>

          {capabilities.slice(3).map((cap, i) =>
          <CapabilityCard key={cap.number} capability={cap} index={i + 3} />
          )}
        </div>
      </div>
    </section>);

}
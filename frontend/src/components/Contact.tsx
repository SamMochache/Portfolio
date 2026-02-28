import React, { useState, useRef, Children } from 'react';
import { motion, useInView } from 'framer-motion';
import { LockIcon } from 'lucide-react';
interface FormState {
  name: string;
  organization: string;
  inquiry: string;
  contact: string;
}
export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [form, setForm] = useState<FormState>({
    name: '',
    organization: '',
    inquiry: '',
    contact: ''
  });
  const [submitted, setSubmitted] = useState(false);
  function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
  {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }
  const inputStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--border-medium)',
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontWeight: 300,
    fontSize: '0.9rem',
    width: '100%',
    padding: '12px 0',
    outline: 'none',
    transition: 'border-color 0.3s ease'
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '0.65rem',
    textTransform: 'uppercase',
    letterSpacing: '0.2em',
    color: 'var(--text-tertiary)',
    display: 'block',
    marginBottom: '4px'
  };
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
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
      id="contact"
      ref={ref}
      className="py-32 md:py-40"
      style={{
        backgroundColor: 'var(--bg-primary)'
      }}
      aria-labelledby="contact-heading">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left: Copy */}
          <motion.div
            className="lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}>

            <motion.p
              variants={itemVariants}
              className="font-body text-xs uppercase mb-6"
              style={{
                color: 'var(--accent-gold)',
                letterSpacing: '0.3em'
              }}>

              Private Consultation
            </motion.p>

            <motion.h2
              id="contact-heading"
              variants={itemVariants}
              className="font-heading font-light mb-8"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
                color: 'var(--text-primary)',
                lineHeight: 1.15,
                letterSpacing: '-0.01em'
              }}>

              For Serious Inquiries Only
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="font-body font-light text-base leading-relaxed mb-10"
              style={{
                color: 'var(--text-secondary)'
              }}>

              Engagements are selective. If you are building something
              exceptional, let us discuss how precision engineering can serve
              your vision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-3 p-5"
              style={{
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)'
              }}>

              <LockIcon
                size={14}
                style={{
                  color: 'var(--accent-gold)',
                  marginTop: '2px',
                  flexShrink: 0
                }} />

              <p
                className="font-body font-light text-xs leading-relaxed"
                style={{
                  color: 'var(--text-tertiary)'
                }}>

                All communications are handled with strict confidentiality.
                Inquiries are reviewed personally and responded to within 48
                hours.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="lg:col-span-7"
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
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}>

            {submitted ?
            <motion.div
              initial={{
                opacity: 0,
                y: 16
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6
              }}
              className="flex flex-col gap-6 py-16">

                <div
                className="w-12 h-px"
                style={{
                  backgroundColor: 'var(--accent-gold)'
                }} />

                <h3
                className="font-heading font-light text-2xl"
                style={{
                  color: 'var(--text-primary)'
                }}>

                  Inquiry Received
                </h3>
                <p
                className="font-body font-light text-sm leading-relaxed max-w-sm"
                style={{
                  color: 'var(--text-secondary)'
                }}>

                  Your inquiry has been received. You will hear back within 48
                  hours. Discretion guaranteed.
                </p>
              </motion.div> :

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-10"
              noValidate>

                {/* Name */}
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Full Name
                  </label>
                  <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--accent-gold)'
                  }
                  onBlur={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--border-medium)'
                  }
                  autoComplete="name" />

                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" style={labelStyle}>
                    Organization / Venture
                  </label>
                  <input
                  id="organization"
                  name="organization"
                  type="text"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Your organization or venture"
                  style={inputStyle}
                  onFocus={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--accent-gold)'
                  }
                  onBlur={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--border-medium)'
                  }
                  autoComplete="organization" />

                </div>

                {/* Nature of Inquiry */}
                <div>
                  <label htmlFor="inquiry" style={labelStyle}>
                    Nature of Inquiry
                  </label>
                  <textarea
                  id="inquiry"
                  name="inquiry"
                  required
                  rows={4}
                  value={form.inquiry}
                  onChange={handleChange}
                  placeholder="Describe your project or engagement in brief"
                  style={{
                    ...inputStyle,
                    borderBottom: 'none',
                    border: '1px solid var(--border-medium)',
                    padding: '12px 16px',
                    resize: 'none'
                  }}
                  onFocus={(e) =>
                  e.currentTarget.style.borderColor = 'var(--accent-gold)'
                  }
                  onBlur={(e) =>
                  e.currentTarget.style.borderColor =
                  'var(--border-medium)'
                  } />

                </div>

                {/* Preferred Contact */}
                <div>
                  <label htmlFor="contact" style={labelStyle}>
                    Preferred Contact (Email)
                  </label>
                  <input
                  id="contact"
                  name="contact"
                  type="email"
                  required
                  value={form.contact}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  style={inputStyle}
                  onFocus={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--accent-gold)'
                  }
                  onBlur={(e) =>
                  e.currentTarget.style.borderBottomColor =
                  'var(--border-medium)'
                  }
                  autoComplete="email" />

                </div>

                {/* Submit */}
                <div className="flex flex-col gap-4 pt-2">
                  <button
                  type="submit"
                  className="self-start font-body text-xs uppercase px-8 py-4 transition-all duration-300"
                  style={{
                    border: '1px solid var(--accent-gold)',
                    color: 'var(--accent-gold)',
                    letterSpacing: '0.2em',
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                    'var(--accent-gold)';
                    e.currentTarget.style.color = 'var(--bg-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--accent-gold)';
                  }}>

                    Submit Inquiry
                  </button>

                  <p
                  className="font-heading text-xs italic"
                  style={{
                    color: 'var(--text-tertiary)'
                  }}>

                    Response within 48 hours. Discretion guaranteed.
                  </p>
                </div>
              </form>
            }
          </motion.div>
        </div>
      </div>
    </section>);

}
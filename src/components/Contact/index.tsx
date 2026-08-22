import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../../data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const channels = [
    {
      icon: <Mail size={22} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: '#EA4335',
      description: 'Best for project inquiries and opportunities',
    },
    {
      icon: <Phone size={22} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: '#06B6D4',
      description: 'Available 9 AM – 9 PM IST',
    },
    {
      icon: <MapPin size={22} />,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: '#10B981',
      description: 'Open to remote & on-site roles',
    },
  ];

  const socials = [
    { href: personalInfo.github, icon: <Github size={20} />, label: 'GitHub', handle: '@ponraj056' },
    { href: personalInfo.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn', handle: 'Ponraj D R' },
    { href: personalInfo.leetcode, icon: <SiLeetcode size={20} />, label: 'LeetCode', handle: '300+ problems' },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Get In Touch</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? Reach out through any channel below.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 items-start max-w-5xl mx-auto">
          {/* Contact channels (3 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3 flex flex-col gap-5"
          >
            {channels.map((item) => (
              <motion.a
                key={item.label}
                variants={fadeInLeft}
                href={item.href}
                className="glass rounded-2xl p-6 flex items-center gap-5 group hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.color + '20', border: `1px solid ${item.color}30` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-muted text-xs mb-0.5 uppercase tracking-widest">{item.label}</p>
                  <p className="text-white text-base font-medium truncate">{item.value}</p>
                  <p className="text-muted text-xs mt-1">{item.description}</p>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-muted flex-shrink-0 opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Social links (2 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <motion.div variants={fadeInRight} className="glass rounded-2xl p-6">
              <p className="text-muted text-xs mb-5 uppercase tracking-widest">Find me online</p>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/5 text-muted hover:text-white hover:bg-primary/15 hover:border-primary/30 transition-all border border-white/5 group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/5 group-hover:bg-primary/20 transition-colors">
                      {s.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium">{s.label}</p>
                      <p className="text-xs text-muted truncate">{s.handle}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="ml-auto text-muted opacity-0 group-hover:opacity-100 group-hover:text-primary-400 transition-all"
                    />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              className="glass rounded-2xl p-6 flex items-center gap-4"
              style={{ border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.05)' }}
            >
              <div className="relative flex-shrink-0">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Available for Opportunities</p>
                <p className="text-muted text-xs">Open to internships, freelance, and full-time roles</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

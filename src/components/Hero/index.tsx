import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Download, Eye, Mail, Github, Linkedin, Code2, User } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import HeroBackground from './HeroBackground';
import { personalInfo } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const techIcons = [
  { label: 'React', color: '#61DAFB', x: '8%', y: '20%', delay: 0 },
  { label: 'JS', color: '#F7DF1E', x: '85%', y: '25%', delay: 0.5 },
  { label: 'Node', color: '#68A063', x: '12%', y: '70%', delay: 1 },
  { label: 'Java', color: '#ED8B00', x: '80%', y: '70%', delay: 1.5 },
  { label: 'AI', color: '#06B6D4', x: '50%', y: '85%', delay: 0.8 },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Three.js background */}
      <HeroBackground />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, #050816 70%)' }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[1]"
        style={{ background: 'linear-gradient(to top, #050816, transparent)' }}
      />

      {/* Animated blobs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] animate-blob z-[1]" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] animate-blob z-[1]" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/3 left-1/2 w-60 h-60 bg-accent/10 rounded-full blur-[80px] animate-blob z-[1]" style={{ animationDelay: '4s' }} />

      {/* Floating tech badges */}
      {techIcons.map((icon) => (
        <motion.div
          key={icon.label}
          className="absolute z-[2] hidden lg:flex items-center justify-center w-12 h-12 rounded-xl glass text-xs font-bold font-mono"
          style={{
            left: icon.x,
            top: icon.y,
            color: icon.color,
            border: `1px solid ${icon.color}30`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [0.95, 1.05, 0.95],
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            delay: icon.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon.label}
        </motion.div>
      ))}

      {/* Main content */}
      <div className="container-custom relative z-[3] py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-6"
              style={{ border: '1px solid rgba(6,182,212,0.3)' }}>
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Open to opportunities
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Ponraj D</span>
            </motion.h1>

            {/* Role typing animation */}
            <motion.div variants={fadeInUp} className="text-xl sm:text-2xl font-medium mb-6 h-10 text-gray-300">
              <span className="text-muted">I'm a </span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer', 2500,
                  'Java Developer', 2500,
                  'Full Stack Developer', 2500,
                  'AI Enthusiast', 2500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent font-semibold"
              />
            </motion.div>

            {/* Tagline */}
            <motion.p variants={fadeInUp} className="text-muted text-lg leading-relaxed mb-10 max-w-xl lg:mx-0 mx-auto">
              {personalInfo.tagline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-4 justify-center lg:justify-start mb-10">
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <Download size={18} />
                Download Resume
              </a>
              <button onClick={scrollToProjects} className="btn-secondary">
                <Eye size={18} />
                View Projects
              </button>
              <button onClick={scrollToContact} className="btn-secondary">
                <Mail size={18} />
                Hire Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 justify-center lg:justify-start">
              {[
                { href: personalInfo.github, icon: <Github size={20} />, label: 'GitHub', color: '#fff' },
                { href: personalInfo.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn', color: '#0A66C2' },
                { href: personalInfo.leetcode, icon: <SiLeetcode size={20} />, label: 'LeetCode', color: '#FFA116' },
                { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: 'Email', color: '#EA4335' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted transition-all duration-300 hover:scale-110 hover:text-white"
                  style={{ ['--hover-color' as string]: social.color }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = social.color + '60')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative flex-shrink-0"
          >
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-6 rounded-full border border-dashed border-primary/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-12 rounded-full border border-dashed border-secondary/15"
            />

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110" />

            {/* Photo / placeholder */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden"
              style={{
                border: '3px solid transparent',
                background: 'linear-gradient(#111827, #111827) padding-box, linear-gradient(135deg, #2563EB, #7C3AED, #06B6D4) border-box',
                boxShadow: '0 0 60px rgba(37,99,235,0.3)',
              }}
            >
              <img
                src={personalInfo.profileImage}
                alt="Ponraj D"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-primary-800/50 to-secondary/30">
                        <div class="text-6xl mb-2">👨‍💻</div>
                        <span class="font-display font-bold text-3xl text-white">PD</span>
                        <span class="text-muted text-sm mt-1">Ponraj D</span>
                      </div>`;
                  }
                }}
              />
            </div>

            {/* Stats floating cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-8 glass rounded-xl px-4 py-3 text-center shadow-xl"
            >
              <div className="text-2xl font-bold font-display text-primary-400">8.4</div>
              <div className="text-xs text-muted">CGPA</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-8 bottom-12 glass rounded-xl px-4 py-3 text-center shadow-xl"
            >
              <div className="text-2xl font-bold font-display text-accent">5+</div>
              <div className="text-xs text-muted">Projects</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-6 top-6 glass rounded-xl px-4 py-3 text-center shadow-xl"
            >
              <div className="flex items-center gap-1">
                <Code2 size={14} className="text-secondary" />
                <div className="text-sm font-bold font-display text-white">Full Stack</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToProjects}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2 text-muted hover:text-white transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} className="group-hover:text-primary transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
}

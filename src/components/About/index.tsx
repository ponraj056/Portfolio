import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import CountUp from 'react-countup';
import { MapPin, GraduationCap, Briefcase, Star } from 'lucide-react';
import { personalInfo, stats, education } from '../../data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">About Me</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Who <span className="gradient-text">I Am</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-2xl mx-auto">
            A passionate developer turning ideas into impactful digital experiences.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Bio */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Star size={20} className="text-primary-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">My Story</h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">{personalInfo.bio}</p>
              <p className="text-muted leading-relaxed">{personalInfo.bio2}</p>
              <div className="flex items-center gap-2 mt-5 text-muted text-sm">
                <MapPin size={15} className="text-accent" />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <GraduationCap size={20} className="text-secondary" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">Education</h3>
              </div>
              <div className="flex flex-col gap-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-primary/20 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white text-sm">{edu.degree}</p>
                      <p className="text-muted text-xs mt-0.5">{edu.institution}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-muted">{edu.period}</span>
                        <span className="text-xs font-semibold text-accent">{edu.score}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Stats + Highlights */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col gap-6"
          >
            {/* Animated Stats */}
            <motion.div variants={fadeInRight} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div className="font-display text-4xl font-bold gradient-text mb-1">
                    {inView && (
                      <CountUp
                        end={stat.value}
                        duration={2.5}
                        delay={i * 0.2}
                        decimals={stat.decimals ?? 0}
                      />
                    )}
                    {stat.suffix}
                  </div>
                  <p className="text-muted text-sm">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Passion Card */}
            <motion.div variants={fadeInRight} className="glass rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">What Drives Me</h3>
              </div>
              <div className="space-y-3">
                {[
                  { emoji: '🚀', text: 'Building production-grade applications that solve real problems' },
                  { emoji: '🤖', text: 'Integrating AI and LLMs to create intelligent user experiences' },
                  { emoji: '📚', text: 'Continuously learning — DSA, system design, new frameworks' },
                  { emoji: '🎯', text: 'Writing clean, maintainable code with best practices' },
                  { emoji: '🌐', text: 'Contributing to open source and the developer community' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
                    <span className="text-lg flex-shrink-0">{item.emoji}</span>
                    <p className="text-muted text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Current Status */}
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

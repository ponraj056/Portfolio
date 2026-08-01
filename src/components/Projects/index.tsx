import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Calendar, Star } from 'lucide-react';
import { projects } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/8 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Portfolio</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Things I've built that I'm proud of — from AI-powered platforms to automation tools.
          </motion.p>
        </motion.div>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/[0.06] transition-all duration-500"
              style={{
                background: '#111827',
                boxShadow:
                  hoveredId === project.id
                    ? '0 20px 60px rgba(37,99,235,0.2)'
                    : '0 4px 24px rgba(0,0,0,0.4)',
                transform: hoveredId === project.id ? 'translateY(-8px)' : 'translateY(0)',
                borderColor: hoveredId === project.id ? 'rgba(37,99,235,0.3)' : 'rgba(255,255,255,0.06)',
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent" />
                {/* Date badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full glass text-xs text-muted">
                  <Calendar size={11} />
                  {project.date}
                </div>
                {/* Featured star */}
                <div className="absolute top-3 left-3">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.features.slice(0, 3).map((f) => (
                    <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                      {f}
                    </span>
                  ))}
                  {project.features.length > 3 && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 text-muted border border-white/5">
                      +{project.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-muted hover:text-white text-sm font-medium border border-white/5 hover:border-white/10 transition-all"
                  >
                    <Github size={15} />
                    Code
                  </a>
                  {project.liveUrl !== '#' && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl btn-primary text-sm"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other projects */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display font-bold text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-all">
                      <Github size={16} />
                    </a>
                    {project.liveUrl !== '#' && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-muted hover:text-primary-400 hover:bg-primary/5 transition-all">
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => <span key={t} className="tag text-xs">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* GitHub CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ponraj056"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

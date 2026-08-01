import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { timelineItems } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const iconMap = {
  briefcase: Briefcase,
  'graduation-cap': GraduationCap,
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="timeline" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Journey</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Experience & <span className="gradient-text">Education</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            My professional journey and academic milestones.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            style={{ background: 'linear-gradient(180deg, #2563EB, #7C3AED, #06B6D4)' }} />

          <div className="flex flex-col gap-10">
            {timelineItems.map((item, i) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Briefcase;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative flex items-start gap-6 ${
                    isLeft
                      ? 'md:flex-row-reverse md:text-right pl-16 md:pl-0 md:pr-[calc(50%+2rem)]'
                      : 'pl-16 md:pl-[calc(50%+2rem)]'
                  }`}
                >
                  {/* Icon dot on timeline */}
                  <div
                    className="absolute left-0 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 z-10 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`,
                      border: `2px solid ${item.color}55`,
                      boxShadow: `0 0 20px ${item.color}33`,
                    }}
                  >
                    <Icon size={20} style={{ color: item.color }} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group">
                    <div className={`flex flex-wrap items-start justify-between gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <div>
                        <h3 className="font-display font-bold text-white text-lg group-hover:text-primary-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-accent font-medium text-sm mt-0.5">{item.organization}</p>
                      </div>
                      <div className={`flex flex-col gap-1 ${isLeft ? 'md:items-start' : 'items-end md:items-end'}`}>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted">
                          <MapPin size={12} />
                          {item.location}
                        </span>
                      </div>
                    </div>
                    <p className="text-muted text-sm leading-relaxed mb-4">{item.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : ''}`}>
                      {item.skills.map((skill) => (
                        <span key={skill} className="tag text-xs">{skill}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

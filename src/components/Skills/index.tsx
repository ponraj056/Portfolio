import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  inView: boolean;
  delay: number;
}

function SkillBar({ name, level, color, inView, delay }: SkillBarProps) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-mono text-muted">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}bb, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const activeCategory = skillCategories[activeTab];

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Skills</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Technologies I work with to bring ideas to life.
          </motion.p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex justify-center gap-2 flex-wrap mb-10"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === i
                  ? 'text-white shadow-lg'
                  : 'text-muted hover:text-white glass'
              }`}
              style={
                activeTab === i
                  ? { background: `linear-gradient(135deg, ${cat.color}cc, ${cat.color}88)`, border: `1px solid ${cat.color}44` }
                  : {}
              }
            >
              {cat.title}
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {activeCategory.skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300"
            >
              <SkillBar
                name={skill.name}
                level={skill.level}
                color={activeCategory.color}
                inView={inView}
                delay={i * 0.08}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* All skills pill cloud */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 text-center"
        >
          <motion.p variants={fadeInUp} className="text-muted text-sm mb-6 uppercase tracking-widest">All Technologies</motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
            {skillCategories.flatMap((cat) =>
              cat.skills.map((s) => (
                <span
                  key={s.name}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:border-primary/40 transition-all duration-300 cursor-default hover:scale-105"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {s.name}
                </span>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

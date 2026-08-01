import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { Award, Code, CheckCircle, Layers, Cpu, Briefcase, FolderOpen, Clock, GitCommit } from 'lucide-react';
import { certifications, achievements } from '../../data';
import { fadeInUp, staggerContainer, scaleIn } from '../../utils/animations';

const iconComponents: Record<string, React.ElementType> = {
  code: Code,
  'check-circle': CheckCircle,
  layers: Layers,
  cpu: Cpu,
  award: Award,
  folder: FolderOpen,
  briefcase: Briefcase,
  clock: Clock,
  'git-commit': GitCommit,
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-accent/8 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Certifications header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Credentials</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Certifications & <span className="gradient-text">Achievements</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Verified credentials and milestones from my learning journey.
          </motion.p>
        </motion.div>

        {/* Cert cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {certifications.map((cert, i) => {
            const Icon = iconComponents[cert.icon] ?? Award;
            return (
              <motion.div
                key={cert.id}
                variants={scaleIn}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:border-primary/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Color accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full blur-[40px] opacity-30 transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: cert.color }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: cert.color + '20', border: `1px solid ${cert.color}40` }}
                >
                  <Icon size={22} style={{ color: cert.color }} />
                </div>

                <div>
                  <h3 className="font-display font-bold text-white text-base leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-accent text-sm font-medium">{cert.issuer}</p>
                  <p className="text-muted text-xs mt-1">{cert.topics}</p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs text-muted">{cert.year}</span>
                  <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-green-500/10 text-green-400 border border-green-500/20">
                    <CheckCircle size={11} />
                    Verified
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h3 variants={fadeInUp} className="text-center font-display text-2xl font-bold text-white mb-8">
            By The <span className="gradient-text">Numbers</span>
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {achievements.map((ach, i) => {
              const Icon = iconComponents[ach.icon] ?? Award;
              return (
                <motion.div
                  key={ach.label}
                  variants={scaleIn}
                  transition={{ delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center group-hover:bg-primary/25 transition-colors">
                      <Icon size={18} className="text-primary-400" />
                    </div>
                  </div>
                  <div className="font-display text-2xl font-bold gradient-text mb-1">
                    {inView && (
                      <CountUp end={ach.value} duration={2} delay={i * 0.1} />
                    )}
                    {ach.suffix}
                  </div>
                  <p className="text-muted text-xs leading-tight">{ach.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

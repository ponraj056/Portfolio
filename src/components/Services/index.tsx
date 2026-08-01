import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Server, Database, Zap, Cpu, Settings } from 'lucide-react';
import { services } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const iconComponents: Record<string, React.ElementType> = {
  monitor: Monitor,
  server: Server,
  database: Database,
  zap: Zap,
  cpu: Cpu,
  settings: Settings,
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/8 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">What I Offer</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            My <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            End-to-end development services tailored to your needs.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconComponents[service.icon] ?? Monitor;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative glass rounded-2xl p-7 overflow-hidden transition-all duration-400 hover:border-primary/30"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}15, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${service.color}20`,
                    border: `1px solid ${service.color}40`,
                    boxShadow: `0 0 24px ${service.color}20`,
                  }}
                >
                  <Icon size={26} style={{ color: service.color }} />
                </div>

                <h3 className="font-display font-bold text-white text-lg mb-3 group-hover:text-primary-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-5">{service.description}</p>

                <div className="flex flex-wrap gap-2">
                  {service.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full border text-muted"
                      style={{ borderColor: service.color + '30', background: service.color + '10', color: service.color + 'cc' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

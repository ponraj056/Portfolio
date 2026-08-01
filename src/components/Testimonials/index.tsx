import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '../../data';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Testimonials</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            What People <span className="gradient-text">Say</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Feedback from mentors and colleagues who've worked with me.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="pb-12"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="glass rounded-2xl p-8 flex flex-col gap-5 h-full">
                  {/* Quote icon */}
                  <Quote size={32} className="text-primary/40" />

                  {/* Text */}
                  <p className="text-gray-300 text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-bold font-display text-white text-lg flex-shrink-0"
                      style={{ background: `${t.avatarColor}33`, border: `2px solid ${t.avatarColor}55` }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-muted text-xs">{t.role}</p>
                      <p className="text-xs mt-0.5" style={{ color: t.avatarColor + 'cc' }}>{t.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

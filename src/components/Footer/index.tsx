import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, navLinks } from '../../data';

export default function Footer() {
  const [showBack, setShowBack] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBack(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/5 rounded-full blur-[80px]" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg font-display text-white"
                  style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}
                >
                  P
                </div>
                <span className="font-display font-bold text-xl text-white">Ponraj D</span>
              </div>
              <p className="text-muted text-sm leading-relaxed max-w-xs">
                {personalInfo.tagline}
              </p>
              <div className="flex gap-3 mt-6">
                {[
                  { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub' },
                  { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                  { href: personalInfo.leetcode, icon: <SiLeetcode size={18} />, label: 'LeetCode' },
                  { href: `mailto:${personalInfo.email}`, icon: <Mail size={18} />, label: 'Email' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-white hover:border-primary/30 transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-display font-bold text-white mb-5">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-muted hover:text-white text-sm transition-all hover:translate-x-1 inline-block duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="font-display font-bold text-white mb-5">Contact</h4>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${personalInfo.email}`} className="text-muted hover:text-white text-sm transition-colors flex items-center gap-2">
                  <Mail size={14} className="text-accent" />
                  {personalInfo.email}
                </a>
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Code2 size={14} className="text-primary-400" />
                  {personalInfo.location}
                </div>
                <a
                  href={personalInfo.resumeUrl}
                  download
                  className="inline-flex items-center gap-2 text-sm text-primary-400 hover:text-primary-300 transition-colors font-medium"
                >
                  Download Resume &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-muted text-sm flex items-center gap-1.5">
              Made with <Heart size={13} className="text-red-400 fill-red-400" /> by{' '}
              <span className="text-white font-medium">Ponraj D</span> &mdash; {new Date().getFullYear()}
            </p>
            <p className="text-muted text-xs">
              Built with React, Vite, TailwindCSS &amp; Framer Motion
            </p>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <AnimatePresence>
        {showBack && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollTop}
            aria-label="Back to top"
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform"
            style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)', boxShadow: '0 4px 24px rgba(37,99,235,0.4)' }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

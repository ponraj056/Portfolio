import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return p + Math.random() * 12 + 3;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050816]"
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-30" />

          {/* Glowing blobs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px] animate-blob" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold font-display text-white"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                  boxShadow: '0 0 40px rgba(37,99,235,0.5)',
                }}
              >
                P
              </div>
              {/* Orbit ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-full border border-dashed border-primary/40"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display text-2xl font-bold text-white">Ponraj D</h1>
              <p className="text-muted text-sm mt-1">Full Stack Developer</p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 240 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="relative"
            >
              <div className="h-1 w-60 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(progress, 100)}%`,
                    background: 'linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4)',
                    transition: 'width 0.1s ease',
                  }}
                />
              </div>
              <p className="text-center text-xs text-muted mt-2">{Math.min(Math.floor(progress), 100)}%</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

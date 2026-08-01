import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[100] h-[3px] origin-left"
      style={{
        background: 'linear-gradient(90deg, #2563EB, #7C3AED, #06B6D4)',
        scaleX: progress / 100,
        transformOrigin: 'left',
      }}
    />
  );
}

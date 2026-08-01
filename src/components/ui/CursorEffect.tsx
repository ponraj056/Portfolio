import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorEffect() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 100, damping: 20, mass: 0.5 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 20, mass: 0.5 });

  const isTouchDevice = useRef(
    typeof window !== 'undefined' &&
      ('ontouchstart' in window || navigator.maxTouchPoints > 0)
  );

  useEffect(() => {
    if (isTouchDevice.current) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [cursorX, cursorY, dotX, dotY]);

  if (isTouchDevice.current) return null;

  return (
    <>
      {/* Glow ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          width: 40,
          height: 40,
          background:
            'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(124,58,237,0.1) 60%, transparent 70%)',
          border: '1px solid rgba(37,99,235,0.4)',
        }}
      />
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          x: dotX,
          y: dotY,
          width: 8,
          height: 8,
          background: 'linear-gradient(135deg, #2563EB, #06B6D4)',
          boxShadow: '0 0 8px #2563EB',
        }}
      />
    </>
  );
}

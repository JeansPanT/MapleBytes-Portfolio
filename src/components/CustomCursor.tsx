import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices using pointer media query
  useEffect(() => {
    const handleMobile = () => {
      // "pointer: coarse" typically indicates a touch device
      setIsMobile(window.matchMedia('(pointer: coarse)').matches);
    };

    handleMobile();
    window.addEventListener('resize', handleMobile);
    return () => window.removeEventListener('resize', handleMobile);
  }, []);

  // Only track mouse movement on non-mobile devices
  useEffect(() => {
    if (isMobile) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [isMobile]);

  // If mobile, render nothing (or you can return a fallback)
  if (isMobile) return null;

  return (
    <motion.div
      className="cursor-dot"
      animate={{
        x: mousePosition.x - 10, // Center the 20px dot
        y: mousePosition.y - 10,
        scale: isPointer ? 1.1 : 1,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.01 }}
    />
  );
}

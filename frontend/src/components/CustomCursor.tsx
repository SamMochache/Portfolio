import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
export function CustomCursor() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const dotX = useMotionValue(0);
  const dotY = useMotionValue(0);
  const ringX = useSpring(dotX, {
    stiffness: 120,
    damping: 20,
    mass: 0.5
  });
  const ringY = useSpring(dotY, {
    stiffness: 120,
    damping: 20,
    mass: 0.5
  });
  const goldColor = theme === 'dark' ? '#C9A96E' : '#8B6914';
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }
    const handleMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };
    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);
    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as Element;
      if (
      target.closest(
        'a, button, [role="button"], input, textarea, select, label'
      ))
      {
        setIsHovering(true);
      }
    };
    const handleHoverEnd = () => setIsHovering(false);
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [dotX, dotY, isVisible]);
  if (isTouchDevice) return null;
  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1
        }}
        transition={{
          duration: 0.15
        }}>

        <div
          className="rounded-full"
          style={{
            width: '6px',
            height: '6px',
            backgroundColor: goldColor
          }} />

      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%'
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.6 : 1
        }}
        transition={{
          duration: 0.2
        }}>

        <div
          className="rounded-full"
          style={{
            width: '32px',
            height: '32px',
            border: `1px solid ${goldColor}`,
            opacity: 0.5
          }} />

      </motion.div>
    </>);

}
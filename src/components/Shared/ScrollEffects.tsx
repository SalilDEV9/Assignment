import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useMotionValue } from "motion/react";

export default function ScrollEffects() {
  // 1. Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 2. Desktop Mouse coordinates using hardware-accelerated MotionValues
  const mouseX = useMotionValue(-300);
  const mouseY = useMotionValue(-300);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset by half of spotlight width (150px) to center it under cursor
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY, isHovered]);

  return (
    <>
      {/* Pristine high-fidelity scroll progress indicator */}
      <motion.div
        id="scroll-progress-indicator"
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#8b5cf6] via-[#c9e2d8] to-[#f3ca52] z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Floating color-shifting ambient cursor spotlight (high-end agency signature overlay) */}
      {isHovered && (
        <motion.div
          id="ambient-spotlight-overlay"
          className="fixed pointer-events-none w-[300px] h-[300px] rounded-full bg-[#8b5cf6]/5 mix-blend-multiply filter blur-3xl z-20 pointer-events-none"
          style={{
            left: mouseX,
            top: mouseY,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        />
      )}
    </>
  );
}

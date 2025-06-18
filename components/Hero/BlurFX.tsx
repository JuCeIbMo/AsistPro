'use client';
import { motion } from "framer-motion";

export const BlurFX = () => (
  <motion.div
    initial={{ 
      scale: 0.8,
      opacity: 0.7,
      x: "-50%",
      y: "-50%"
    }}
    animate={{
      scale: [1, 1.1],
      opacity: [0.8, 1]
    }}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "150vw",
      height: "150vh",
      background: "radial-gradient(circle at 50% 50%, #93c5fd 0%, #2563eb 60%, transparent 75%)",
      filter: "blur(140px)",
      zIndex: -1,
      pointerEvents: "none",
      transform: "translate(-50%, -50%)",
      willChange: "transform, opacity" // Optimización para GPU
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

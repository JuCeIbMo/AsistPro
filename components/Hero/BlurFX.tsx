'use client';
import { motion } from "framer-motion";

export const BlurFX = () => (
  <motion.div
    initial={{ scale:.9, opacity:.9, y:-100 }}
    animate={{ scale:1.1, opacity:1, y:80 }}
    transition={{ duration:15, repeat:Infinity, repeatType:"reverse" }}
    style={{
      position:"fixed",
      top:"-35%",
      left:"50%",
      width:"1000px",
      height:"1000px",
      background:"radial-gradient(circle at 30% 30%, #a5b4fc 0%, #3b82f6 70%, transparent 90%)",
      filter:"blur(140px)",
      transform:"translateX(-50%)",
      zIndex:-1,
      pointerEvents:"none"
    }}
  />
);

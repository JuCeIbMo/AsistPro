'use client';

import { useRef } from "react";
import Button from "../Button";
import starsBg from "@/public/imgs/stars.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import { glowVisuals } from "@/config/glowVisuals";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-[492px] md:h-[800px] flex items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      animate={{ backgroundPositionX: starsBg.width }}
      transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
      style={{ backgroundImage: `url(${starsBg.src})`, backgroundPositionY }}
    >
      {/* Background Overlay Gradient */}
      <div
        className="absolute inset-0"
        style={{ background: glowVisuals.radialOverlay }}
      />

      {/* Central Glowing Ball */}
      <div
        className="absolute h-64 w-64 md:h-96 md:w-96 rounded-full border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          background: glowVisuals.radialGradient,
          boxShadow: glowVisuals.multiGlowShadow,
          borderColor: glowVisuals.borderColor,
        }}
      />

      {/* Rotating Orbit Ring with Dots */}
      <motion.div
        className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: '1turn' }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ border: `1px solid ${glowVisuals.borderColor}`, opacity: 0.2 }}
      >
        <div className="absolute h-2 w-2 left-0 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: glowVisuals.orbitDotColor }} />
        <div className="absolute h-2 w-2 left-1/2 rounded-full top-0 -translate-x-1/2 -translate-y-1/2" style={{ background: glowVisuals.orbitDotColor }} />
        <div className="absolute h-5 w-5 left-full rounded-full border top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center" style={{ borderColor: glowVisuals.borderColor }}>
          <div className="h-2 w-2 rounded-full" style={{ background: glowVisuals.orbitDotColor }} />
        </div>
      </motion.div>

      {/* Dashed rings */}
      <motion.div
        className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        animate={{ rotate: '-1turn' }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        style={{ border: `1px dashed ${glowVisuals.dashedRingColor}` }}
      />
      <motion.div
        className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed"
        animate={{ rotate: '1turn' }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
        style={{ border: `1px dashed ${glowVisuals.dashedRingColor}`, opacity: 0.2 }}
      >
        <div className="absolute h-2 w-2 left-0 rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: glowVisuals.orbitDotColor }} />
        <div className="absolute h-2 w-2 left-full rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: glowVisuals.orbitDotColor }} />
      </motion.div>

      {/* Hero content */}
      <div className="relative container mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none font-semibold tracking-tighter bg-gradient-to-r from-primary-orange-500 to-primary-blue-600 text-transparent bg-clip-text text-center">
          AsistPro
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-5 text-center max-w-2xl mx-auto">
          Asistente personal de IA que organiza tus finanzas y agenda directamente por WhatsApp
        </p>
        <div className="flex justify-center mt-8 gap-4">
          <Button className="bg-primary-blue-600 hover:bg-primary-blue-700">Quiero AsistPro</Button>
          <Button variant="outline" className="text-white border-white hover:bg-white/10">Ver planes</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

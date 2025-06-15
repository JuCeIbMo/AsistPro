'use client';

import { motion } from 'framer-motion';
import { PhoneMockup } from './PhoneMockup';

export const PhoneMockups = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Celular izquierdo - oculto en mobile */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PhoneMockup 
              mediaSrc="/imgs/phone-mockups/left-phone.png" 
              isVideo={false}
            />
          </motion.div>

          {/* Celular central - siempre visible */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PhoneMockup 
              mediaSrc="/videos/center-demo.mp4" 
              isVideo={true}
            />
          </motion.div>

          {/* Celular derecho - oculto en mobile */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <PhoneMockup 
              mediaSrc="/imgs/phone-mockups/right-phone.png" 
              isVideo={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

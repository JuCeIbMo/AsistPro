'use client';

import Image from 'next/image';

type PhoneMockupProps = {
  mediaSrc: string;
  isVideo?: boolean;
  className?: string;
};

export const PhoneMockup = ({ mediaSrc, isVideo = false, className = '' }: PhoneMockupProps) => {
  return (
    <div className={`phone relative w-[300px] h-[600px] mx-auto my-8 border-[14px] border-gray-800 rounded-[40px] bg-gray-800 ${className}`}>
      {/* Botones laterales */}
      <span className="btn absolute w-[3px] bg-gray-800 rounded-r-[10px] left-[-17px] top-[72px] h-[32px]"></span>
      <span className="btn absolute w-[3px] bg-gray-800 rounded-r-[10px] left-[-17px] top-[124px] h-[46px]"></span>
      <span className="btn absolute w-[3px] bg-gray-800 rounded-r-[10px] left-[-17px] top-[178px] h-[46px]"></span>
      <span className="btn absolute w-[3px] bg-gray-800 rounded-l-[10px] right-[-17px] top-[142px] h-[64px]"></span>

      {/* Pantalla */}
      <div className="screen w-[272px] h-[572px] mx-auto my-auto rounded-[30px] overflow-hidden bg-white">
        {isVideo ? (
          <video 
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            className="w-full h-full object-cover"
            aria-label="Demo de la aplicación"
          />
        ) : (
          <Image 
            src={mediaSrc} 
            alt="Mockup de celular" 
            width={272}
            height={572}
            quality={85}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
};

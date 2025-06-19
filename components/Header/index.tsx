'use client';

import Image from "next/image";
import MenuIcon from "@/public/imgs/icon-menu.svg";
import Link from "next/link";
import Button from "../Button";
import { motion } from "framer-motion";

const  Header = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
            <motion.div 
              className="absolute inset-0 bg-blue-500/10 -z-20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className="absolute inset-0 backdrop-blur-sm -z-10 md:hidden" />
            <div className="container">
                <div className="relative flex items-center justify-between md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
                    <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
                    <div className="flex items-center justify-between w-full">
                        <div className="border rounded-lg inline-flex items-center justify-center border-white/15 p-2">
                            <Image 
                              src="/imgs/logo-nuevo.png" 
                              alt="logo"
                              width={100}
                              height={100}
                              className="h-auto max-h-14 w-auto"
                              style={{ objectFit: 'contain' }}
                            />
                        </div>
                        <span className="font-bold text-2xl mr-auto">
                            AsistPro
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-6 text-sm">
                            <Link href={`#features`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Características</Link>
                            <Link href={`#testimonials`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Testimonios</Link>
                            <Link href={`#pricing`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Planes</Link>
                            <Link href={`/faq`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition mr-4">FAQ</Link>
                        </nav>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Button className="whitespace-nowrap">Iniciar sesión</Button>
                        <button className="md:hidden" onClick={() => alert('Menú mobile abierto')}>
                          <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

'use client';

import LogoIcon from "@/public/imgs/logo.svg";
import MenuIcon from "@/public/imgs/icon-menu.svg";
import Link from "next/link";
import Button from "../Button";

const  Header = () => {
    return (
        <header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
            <div className="absolute inset-0 backdrop-blur -z-10 md:hidden" />
            <div className="container">
                <div className="relative flex items-center justify-between md:border border-white/15 md:p-2.5 rounded-xl max-w-2xl mx-auto">
                    <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block" />
                    <div>
                        <div className="border h-10 w-10 rounded-lg inline-flex items-center justify-center border-white/15">
                            <LogoIcon className="w-8 h-8" />
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex gap-8 text-sm">
                            <Link href={`#features`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Características</Link>
                            <Link href={`#testimonials`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Testimonios</Link>
                            <Link href={`#pricing`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">Planes</Link>
                            <Link href={`/faq`} className="text-[#fe680b] hover:text-[#fe680b]/80 transition">FAQ</Link>
                        </nav>
                    </div>
                    <div className="flex gap-4 items-center">
                        <Button>Iniciar sesión</Button>
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

import Link from "next/link";
import Logo from "@/public/imgs/logo.svg";
import XSocial from "@/public/imgs/social-x.svg";
import InstaSocial from "@/public/imgs/social-instagram.svg";
import YTSocial from "@/public/imgs/social-youtube.svg";

const Footer = () => {
    return (
        <footer className="py-5 border-t border-white/15">
            <div className="container">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="flex items-center gap-2 lg:flex-1">
                        <Logo className="h-6 w-6" />
                        <div className="font-medium">AsistPro</div>
                    </div>
                    <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
                        <Link 
                            href={`#features`} 
                            className="text-white/70 hover:text-white text-xs md:text-sm transition"
                        >
                            Características
                        </Link>
                        <Link 
                            href={`#testimonials`} 
                            className="text-white/70 hover:text-white text-xs md:text-sm transition"
                        >
                            Testimonios
                        </Link>
                        <Link 
                            href={`#pricing`} 
                            className="text-white/70 hover:text-white text-xs md:text-sm transition"
                        >
                            Planes
                        </Link>
                        <Link 
                            href={`/faq`} 
                            className="text-white/70 hover:text-white text-xs md:text-sm transition"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link 
                            href={`/contact`} 
                            className="text-white/70 hover:text-white text-xs md:text-sm transition"
                        >
                            Contacto
                        </Link>
                    </nav>
                    <div className="flex gap-5 lg:flex-1 lg:justify-end">
                        <XSocial className="text-white/40 hover:text-white transition" />
                        <InstaSocial className="text-white/40 hover:text-white transition" />
                        <YTSocial className="text-white/40 hover:text-white transition" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

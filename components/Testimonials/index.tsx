'use client';

import { motion } from "framer-motion";
import avatar1 from "@/public/imgs/avatar-1.webp";
import avatar2 from "@/public/imgs/avatar-2.webp";
import avatar3 from "@/public/imgs/avatar-3.webp";
import avatar4 from "@/public/imgs/avatar-4.webp";
import Image from "next/image";

const testimonials = [
    {
        text: "“Pude pagar mis deudas y aún tengo dinero para ahorrar gracias a AsistPro”",
        name: "Carlos Mendez",
        title: "Usuario desde 2024",
        avatarImg: avatar1,
    },
    {
        text: "“Nunca más olvidé una cita importante gracias a los recordatorios”",
        name: "Ana Torres",
        title: "Usuario desde 2023",
        avatarImg: avatar2,
    },
    {
        text: "“Controlo mis gastos mensuales con solo enviar mensajes por WhatsApp”",
        name: "Roberto Jiménez",
        title: "Usuario desde 2024",
        avatarImg: avatar3,
    },
    {
        text: "“La integración con Google Calendar cambió mi productividad”",
        name: "Lucía Fernández",
        title: "Usuario desde 2023",
        avatarImg: avatar4,
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 md:py-24">
            <div className="container">
                <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Clientes que transformaron sus vidas</h2>
                <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm mx-auto">
                    Mira cómo AsistPro está ayudando a personas reales a organizar sus vidas
                </p>
                <div className="flex [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] overflow-hidden mt-10">
                    <motion.div 
                        className="flex gap-5 pr-5 flex-none"
                        initial={{ translateX: "-50%" }}
                        animate={{ translateX: "0" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                        {[...testimonials, ...testimonials].map((testimonial, index) => (
                            <div 
                            key={`${index}-${testimonial.name}`} 
                            className="flex-none border border-white/15 p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(37,99,235,.3),black)] max-w-xs md:max-w-md"
                            >
                                <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
                                <div className="flex items-center gap-3 mt-5">
                                    <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-primary-blue-600 after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                                        <Image 
                                            src={testimonial.avatarImg}
                                            className="h-11 w-11 rounded-lg grayscale"
                                            alt={`Avatar for ${testimonial.name}`}
                                            width={44}
                                            height={44}
                                            quality={85}
                                            loading="lazy"
                                            priority={false}
                                            />
                                    </div>
                                    <div className="">
                                        <div className="">{testimonial.name}</div>
                                        <div className="text-white/50 text-sm">{testimonial.title}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

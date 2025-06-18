'use client';
import { BlurFX } from './BlurFX';
import Button from '../Button';

export const NewHero = () => (
  <section className="relative h-screen flex flex-col justify-start pt-28 items-center overflow-hidden">
    <BlurFX />
    
    {/* Texto voluminoso */}
    <h1 className="text-7xl font-bold mb-8 text-center">
      Decile por <span className="text-[#25D366]">WhatsApp</span> <br/>lo que no querés olvidar... y tu asistente se encarga del resto.


    </h1>
    
    {/* Texto pequeño */}
    <p className="text-xl text-gray-300 mb-12 max-w-lg text-center">

      Tu asistente inteligente por <span className="text-[#25D366]">WhatsApp</span>: te recuerda lo importante, justo cuando lo necesitás

    </p>
    
    {/* Botones (reutilizados del hero anterior) */}
    <div className="flex gap-4">
      <Button as="a" href="https://wa.me/c/59178816415">Empieza ahora</Button>
      <Button variant="outline" as="a" href="#pricing">Ver Planes</Button>
    </div>
  </section>
);

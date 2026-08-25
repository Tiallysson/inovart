'use client';

import Image from "next/image";
import { Carousel } from "antd";
import { motion } from "framer-motion";

const carouselImages = [
  {
    src: "/images/carrousel/Cópia de camisa gustavo (Apresentação) (1).png",
    alt: "Portfólio 1",
  },
  {
    src: "/images/carrousel/Cópia de camisa gustavo (Apresentação).png",
    alt: "Portfólio 2",
  },
  {
    src: "/images/carrousel/Cópia de Cópia de 42 KM (Apresentação).png",
    alt: "Portfólio 3",
  },
  {
    src: "/images/carrousel/Inovart (Apresentação).png",
    alt: "Portfólio 4",
  },
  {
    src: "/images/carrousel/LOGO 3.0 (Apresentação).png",
    alt: "Portfólio 5",
  },
  {
    src: "/images/carrousel/Logo OFICIAL Inovart (Apresentação).png",
    alt: "Portfólio 6",
  },
  {
    src: "/images/carrousel/Maratona João Pessoa (Apresentação).png",
    alt: "Portfólio 7",
  },
  {
    src: "/images/carrousel/Red and Pink Modern Makeup Studio Logo (Apresentação).png",
    alt: "Portfólio 8",
  },
  {
    src: "/images/carrousel/The Goat (Apresentação).png",
    alt: "Portfólio 9",
  },
];

export default function PortfolioCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center py-12 pt-8"
    >
      <div className="inline-block mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-zinc-800 tracking-tight text-center relative z-10">
          Nosso Portfólio
        </h2>
        <div className="h-3 w-full bg-orange-500/20 rounded-full -mt-4 relative z-0"></div>
      </div>

      <div className="w-full max-w-5xl px-4 relative group">
        {/* Glow brilhante atrás do carrossel */}
        <div className="absolute inset-4 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

        {/* Moldura Premium (Estilo Tela de Cinema/MacBook) */}
        <div className="relative bg-zinc-900/95 backdrop-blur-xl rounded-[2rem] p-3 md:p-5 shadow-2xl ring-1 ring-white/10">

          {/* Tela interna com overflow hidden para bordas arredondadas */}
          <div className="rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden bg-black relative">
            <Carousel autoplay effect="fade" autoplaySpeed={3500}>
              {carouselImages.map((image, index) => (
                <div key={image.src}>
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-[15000ms] hover:scale-110 ease-linear"
                      priority={index === 0}
                    />
                    {/* Gradiente sutil para garantir que os pontinhos (dots) brancos fiquem sempre visíveis */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

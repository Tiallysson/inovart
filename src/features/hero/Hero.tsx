'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRightOutlined, RocketOutlined, ThunderboltOutlined, StarOutlined } from "@ant-design/icons";

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <div className="relative flex flex-col px-4 pt-8 pb-16 justify-center items-center z-10 w-full max-w-5xl mx-auto">

      {/* Logo com animação */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden mb-6 mt-4 w-[95vw] max-w-[900px] aspect-[95/54]"
      >
        <Image
          src="/images/Logo OFICIAL Inovart.svg"
          alt="Logo Inovart"
          fill
          className="object-contain drop-shadow-xl"
          priority
        />
      </motion.div>

      {/* Título Forte */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center text-zinc-800 tracking-tight leading-[1.1] max-w-4xl"
      >
        Inovação + arte, <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 drop-shadow-sm">em cada detalhe</span>
      </motion.h2>

      {/* Subtítulo Persuasivo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-zinc-600 text-center max-w-2xl font-medium"
      >
        Especialistas em identidade visual e artes digitais para destacar a sua marca e atrair os clientes certos no mercado.
      </motion.p>

      {/* CTA Principal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10"
      >
        <button
          onClick={onContactClick}
          className="group relative px-8 py-4 bg-zinc-900 text-white font-bold text-lg rounded-full overflow-hidden shadow-[0_10px_40px_rgba(236,91,26,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_50px_rgba(236,91,26,0.5)] cursor-pointer"
        >
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="relative flex items-center gap-3">
            Solicitar um Orçamento <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </motion.div>

      {/* Trust Badges (Diferenciais) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-14 flex flex-wrap justify-center gap-3"
      >
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-zinc-700 font-semibold text-sm">
          <StarOutlined className="text-orange-500 text-base" /> Design Exclusivo
        </div>
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-zinc-700 font-semibold text-sm">
          <ThunderboltOutlined className="text-orange-500 text-base" /> Entrega Rápida
        </div>
        <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/60 shadow-sm text-zinc-700 font-semibold text-sm">
          <RocketOutlined className="text-orange-500 text-base" /> Foco em Resultados
        </div>
      </motion.div>
    </div>
  );
}

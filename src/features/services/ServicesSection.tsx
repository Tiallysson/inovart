'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { HighlightOutlined, MobileOutlined, SkinOutlined } from "@ant-design/icons";

export default function ServicesSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center mt-12 mb-4"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-zinc-700 mb-2 tracking-tight">
        Nossos Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl px-4 mt-6">

        {/* Identidade Visual (Cartão Horizontal Grande) */}
        <div className="md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-zinc-900 shadow-xl transition-all duration-500 hover:shadow-[0_20px_40px_rgba(236,91,26,0.15)] cursor-pointer flex flex-col md:flex-row min-h-[300px] md:min-h-[350px]">

          {/* Glow de fundo */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center z-10">
            <div className="w-14 h-14 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm border border-orange-500/20">
              <HighlightOutlined className="text-orange-500 text-3xl" />
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Identidade Visual</h3>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md">
              Sua marca transmitindo profissionalismo e confiança. Criação de logos, paletas de cores e toda a base visual para o seu negócio ser inesquecível.
            </p>
          </div>

          <div className="flex-1 relative h-64 md:h-auto w-full overflow-hidden">
            {/* Máscara de degrade para misturar o texto com a imagem */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent z-10 pointer-events-none" />

            <Image
              src="/images/identidade-visual.png"
              alt="Identidade Visual"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />
          </div>
        </div>

        {/* Artes Digitais (Cartão Quadrado) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/80 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col min-h-[380px]">
          <div className="p-8 pb-4 z-10 flex flex-col">
            <div className="w-12 h-12 bg-pink-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-pink-500/30 transition-transform duration-300 group-hover:scale-110">
              <MobileOutlined className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">Artes Digitais</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Divulgação de eventos, campanhas e conteúdo de alto impacto para dominar as redes sociais.
            </p>
          </div>

          <div className="flex-1 relative w-full mt-4 rounded-t-3xl overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] mx-auto max-w-[90%]">
            <Image
              src="/images/banner.png"
              alt="Artes Digitais"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

        {/* Fardamentos (Cartão Quadrado) */}
        <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-zinc-200/80 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] cursor-pointer flex flex-col min-h-[380px]">
          <div className="p-8 pb-4 z-10 flex flex-col">
            <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-orange-500/30 transition-transform duration-300 group-hover:scale-110">
              <SkinOutlined className="text-white text-2xl" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-800 mb-2">Fardamentos</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Design exclusivo para futebol, atléticas de faculdade, equipes e uniformes corporativos.
            </p>
          </div>

          <div className="flex-1 relative w-full mt-4 rounded-t-3xl overflow-hidden shadow-[0_-5px_20px_rgba(0,0,0,0.05)] mx-auto max-w-[90%]">
            <Image
              src="/images/camisa.jpg"
              alt="Fardamentos"
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

      </div>
    </motion.div>
  );
}

'use client';

import { motion } from "framer-motion";
import { ArrowRightOutlined } from "@ant-design/icons";

interface CtaBannerProps {
  onContactClick: () => void;
}

export default function CtaBanner({ onContactClick }: CtaBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
      className="w-[calc(100%-2rem)] max-w-4xl mx-auto mt-16 mb-4 p-8 md:p-12 rounded-[2rem] bg-zinc-900 shadow-2xl relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-pink-500/10 pointer-events-none group-hover:scale-110 transition-transform duration-1000" />
      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Pronto para transformar sua marca?</h2>
        <p className="text-zinc-300 mb-8 max-w-xl text-lg">
          Não deixe sua empresa com um visual amador. Fale com a gente e descubra como um design profissional pode multiplicar seus resultados.
        </p>
        <button onClick={onContactClick} className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-full overflow-hidden shadow-[0_10px_30px_rgba(236,91,26,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(236,91,26,0.5)] cursor-pointer">
          <span className="relative flex items-center gap-2">
            Falar com a Equipe <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </motion.div>
  );
}

'use client';

import Image from "next/image";
import { InstagramOutlined } from "@ant-design/icons";

export default function Footer() {
  return (
    <>
      <div className="w-full flex justify-center mt-2 md:mt-4 pointer-events-none relative z-0">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <Image
            src="/images/robot.png"
            alt="Mascote Inovart"
            fill
            className="object-contain object-bottom drop-shadow-[0_-5px_20px_rgba(0,0,0,0.15)] transition-transform duration-700 hover:scale-105 origin-bottom pointer-events-auto"
          />
        </div>
      </div>

      {/* Linha divisória para esconder a base do robô e criar a ilusão de estar dentro do footer */}
      <div className="w-full h-1 bg-zinc-400/50 relative z-10 shadow-[0_-2px_15px_rgba(0,0,0,0.2)]"></div>

      <footer className="w-full relative z-10 bg-zinc-200/80 backdrop-blur-md border-t border-zinc-300/50">
        <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-zinc-300/60 pb-8">
            {/* Marca e Localização */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-2xl font-extrabold text-zinc-800 tracking-tighter">INOVART</h3>
              <p className="text-sm text-zinc-500 mt-1 font-medium">Design Gráfico & Artes Digitais</p>
              <p className="text-xs text-zinc-400 mt-1 flex items-center gap-1">
                <span>📍</span> Girau do Ponciano · AL
              </p>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/inovartgd/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-300/50 text-zinc-600 hover:bg-orange-500 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Instagram da Inovart"
              >
                <InstagramOutlined className="text-xl" />
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
            <p className="font-medium">© {new Date().getFullYear()} Inovart Design. Todos os direitos reservados.</p>
            <p>
              Desenvolvido por{' '}
              <a
                href="https://instagram.com/tiallyssoncosta"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-zinc-700 hover:text-orange-500 transition-colors"
              >
                Tiallysson Costa
              </a>
            </p>
          </div>

          <div className="mt-6 text-[10px] md:text-xs text-center md:text-left text-zinc-400/80 max-w-4xl leading-relaxed">
            <p>Adidas e suas marcas, logotipos e elementos visuais são propriedade da adidas AG. Uso apenas para fins informativos e ilustrativos, sem nenhuma afiliação oficial.</p>
            <p className="mt-1">Demais logotipos e escudos exibidos em materiais de portfólio são usados apenas para fins ilustrativos e pertencem aos seus respectivos proprietários legais.</p>
          </div>

        </div>
      </footer>
    </>
  );
}

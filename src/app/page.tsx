"use client";

import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Button, Carousel } from 'antd';
import { 
  ArrowRightOutlined, SkinOutlined, HighlightOutlined, MobileOutlined, 
  ArrowUpOutlined, RocketOutlined, ThunderboltOutlined, StarOutlined, InstagramOutlined
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FullScreenModal from "@/components/modals/FullScreenModal";

const contact = "";

const photos = [
  "/images/713043629_17872588965673601_7899520686125911295_n.jpg",
  "/images/711426313_17872620891673601_6583932538794909166_n.jpg",
  "/images/625089085_18077813432344022_9166330354871520144_n.webp",
  "/images/621096884_17845658868673601_8741044131485810213_n.jpg",
  "/images/616221341_738151312283363_7777134836960121802_n.jpg",
  "/images/615721164_1411867607190660_2706016865349584871_n.jpg",
  "/images/611596243_870970812571994_4906170177744514941_n.jpg",
  "/images/carrousel/Cópia de camisa gustavo (Apresentação) (1).png",
  "/images/carrousel/Cópia de camisa gustavo (Apresentação).png",
  "/images/carrousel/Cópia de Cópia de 42 KM (Apresentação).png",
  "/images/carrousel/Inovart (Apresentação).png",
  "/images/carrousel/LOGO 3.0 (Apresentação).png",
  "/images/carrousel/Logo OFICIAL Inovart (Apresentação).png",
  "/images/carrousel/Maratona João Pessoa (Apresentação).png",
  "/images/carrousel/Red and Pink Modern Makeup Studio Logo (Apresentação).png",
  "/images/carrousel/The Goat (Apresentação).png",
];

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

export default function Home() {
  const [open, setOpen] = useState(false);
  const [gallery, openGallery] = useState(false);
  const [about, openAbout] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="min-h-screen bg-zinc-100 select-none">
      <main
        className="min-h-screen w-full relative overflow-x-hidden bg-gradient-to-b from-zinc-200 via-zinc-100 to-zinc-200 shadow-[inset_60px_0_80px_-40px_rgba(0,0,0,0.1),inset_-60px_0_80px_-40px_rgba(0,0,0,0.1)]">
          
          {/* Textura de Fundo (Dot Pattern) */}
          <div className="absolute inset-0 bg-[radial-gradient(theme(colors.zinc.400)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.15] pointer-events-none" />

          <Analytics/>
          <h1 className="sr-only">Inovart Design Gráfico e Artes Digitais</h1>

          {/* Navegação Sticky */}
          <div className="sticky top-4 z-50 flex flex-row p-3 mx-auto w-fit justify-center gap-2 md:gap-4 bg-zinc-200/50 backdrop-blur-md rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/40 transition-all mb-4">
            <button onClick={() => openAbout(true)} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer">
              Sobre
            </button>
            <button onClick={() => setOpen(true)} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer" >
              Contato
            </button>
            <button onClick={() => openGallery(true)} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer" >
              Galeria
            </button>
          </div>

          {/* Hero Section de Alto Impacto */}
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
                onClick={() => setOpen(true)} 
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

          {/* Luzes Desfocadas no Fundo */}
          <div className="absolute top-20 left-0 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute top-60 right-0 w-96 h-96 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none" />

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
                      <div key={index}>
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

          {/* CTA Banner Final */}
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
              <button onClick={() => setOpen(true)} className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-full overflow-hidden shadow-[0_10px_30px_rgba(236,91,26,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(236,91,26,0.5)] cursor-pointer">
                <span className="relative flex items-center gap-2">
                  Falar com a Equipe <ArrowRightOutlined className="transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </div>
          </motion.div>

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
                  href="https://instagram.com/inovart.designer_" 
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

        <FullScreenModal
          isOpen={gallery}
          onClose={() => openGallery(false)}
        >
          <div className="p-2 mt-7">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-black">
                Galeria
              </h1>

              <a
                href="https://www.instagram.com/inovart.designer_/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white font-medium transition-all duration-200 hover:bg-orange-600 hover:scale-105"
              >
                Ver mais
                <ArrowRightOutlined />
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                >
                  <Image
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </FullScreenModal>

        <FullScreenModal
          isOpen={about}
          onClose={() => openAbout(false)}
        >
          <div className="max-w-4xl mx-auto p-6 text-black">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              Sobre a Inovart
            </h1>

            <div className="space-y-5 text-zinc-700 leading-relaxed">
              <p>
                A <strong>INOVART</strong> nasce da união entre inovação e arte.
                O nome reflete a essência de um trabalho criativo que vai além do
                comum, explorando novas ideias, estilos e soluções visuais para
                transformar conceitos em identidade.
              </p>

              <p>
                A marca representa o encontro entre as artes digitais e o universo
                do design gráfico, onde cada projeto é pensado estrategicamente
                para comunicar, impactar e destacar. Aqui, criatividade e técnica
                caminham juntas, resultando em designs modernos, funcionais e
                alinhados às tendências visuais atuais.
              </p>

              <p>
                A logo da INOVART é baseada em um mouse invertido em formato de
                robô, unindo dois símbolos fortes do mundo digital. O mouse
                representa uma das ferramentas mais importantes da computação e do
                design gráfico, enquanto o robô simboliza tecnologia, inovação e o
                futuro criativo.
              </p>

              <p>
                Essa combinação traduz exatamente o propósito da marca: utilizar a
                tecnologia como aliada para criar artes inteligentes, modernas e
                conectadas com o universo digital.
              </p>

              <p>
                No design gráfico, cada detalhe importa: cores, formas,
                tipografia e significado. A INOVART trabalha para que cada arte
                conte uma história, fortaleça marcas e gere conexões reais com o
                público.
              </p>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">
                Serviços oferecidos
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-2xl bg-zinc-100 p-4">
                  🎨 Criação de logotipos e identidade visual
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  📱 Artes para redes sociais
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  📄 Banners e panfletos
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  ✉️ Convites personalizados
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  📋 Currículos modernos
                </div>

                <div className="rounded-2xl bg-zinc-100 p-4">
                  ✨ Outros materiais gráficos
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-orange-50 border border-orange-200 p-6">
              <p className="text-lg font-medium">
                📩 Entre em contato e transforme sua ideia agora.
              </p>

              <p className="mt-2 text-orange-700 font-semibold">
                INOVART — onde a criatividade ganha forma.
              </p>
            </div>
          </div>
        </FullScreenModal>

        <FullScreenModal
          isOpen={open}
          onClose={() => setOpen(false)}
        >
          <div className="max-w-2xl mx-auto p-6 text-black">
            <h1 className="text-3xl font-bold mb-3">
              Entre em Contato
            </h1>

            <p className="text-zinc-600 mb-8">
              Tem uma ideia, projeto ou precisa de um orçamento?
              Entre em contato e vamos transformar sua visão em algo único.
            </p>

            <div className="space-y-4">
              {/* <a
                href="https://wa.me/5582999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-green-50 border border-green-200 hover:bg-green-100 transition"
              >
                <div>
                  <h2 className="font-semibold text-lg">
                    WhatsApp
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Atendimento rápido e orçamento.
                  </p>
                </div>

                <span className="text-2xl">💬</span>
              </a> */}

              <a
                href="https://instagram.com/inovart.designer_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 rounded-2xl bg-pink-50 border border-pink-200 hover:bg-pink-100 transition"
              >
                <div>
                  <h2 className="font-semibold text-lg">
                    Instagram
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Veja nossos trabalhos e envie uma mensagem.
                  </p>
                </div>

                <span className="text-2xl">📸</span>
              </a>

              {/* <a
                href="mailto:contato@inovart.com.br"
                className="flex items-center justify-between p-5 rounded-2xl bg-blue-50 border border-blue-200 hover:bg-blue-100 transition"
              >
                <div>
                  <h2 className="font-semibold text-lg">
                    E-mail
                  </h2>
                  <p className="text-sm text-zinc-600">
                    Para propostas e solicitações detalhadas.
                  </p>
                </div>

                <span className="text-2xl">✉️</span>
              </a> */}
            </div>

            <div className="mt-10 rounded-2xl bg-orange-50 border border-orange-200 p-5">
              <p className="font-medium text-orange-700">
                INOVART — onde a criatividade ganha forma.
              </p>

              <p className="text-sm text-zinc-600 mt-2">
                Logotipos, identidade visual, artes para redes sociais,
                banners, convites e muito mais.
              </p>
            </div>
          </div>
        </FullScreenModal>

        {/* Botão Voltar ao Topo */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-[60] p-4 flex items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-110 hover:shadow-orange-500/30 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Voltar ao topo"
        >
          <ArrowUpOutlined className="text-xl" />
        </button>
      </main>
    </div>
  );
}

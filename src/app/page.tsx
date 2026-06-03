"use client";

import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
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
  
  return (
    <div className="min-h-screen bg-zinc-300 select-none">
      <main
        className="min-h-screen w-full bg-linear-to-r from-zinc-300 via-zinc-100 to-zinc-300 shadow-[inset_60px_0_80px_-40px_rgba(0,0,0,0.30),inset_-60px_0_80px_-40px_rgba(0,0,0,0.30)]">
          <Analytics/>
          <div className="flex flex-row p-8 justify-center">
            <div className="relative overflow-hidden" style={{ width: 'min(80vw, 620px)', aspectRatio: '19/9' }}>
              <Image
                src="/images/Logo OFICIAL Inovart.svg"
                alt="logo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="absolute top-20 left-10 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-500/20 rounded-full blur-3xl" />
          
          <div className="flex flex-row p-5 justify-center gap-3 md:gap-5">
            <button onClick={() => openAbout(true)} className="bg-[#f4c98c] py-0 px-4 md:px-4 p-1.5 md:p-2.5 text-xs md:text-base text-black rounded-full inline-flex items-center gap-5 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 cursor-pointer">
              <ArrowRightOutlined className="bg-black rounded-full p-1" style={{ color: '#ec5b1a'}} />Sobre
            </button>
            <button onClick={() => setOpen(true)} className="bg-[#f4c98c] px-4 md:px-4 p-1.5 md:p-2.5 text-xs md:text-base text-black rounded-full inline-flex items-center gap-5 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 cursor-pointer" >
              <ArrowRightOutlined className="bg-black rounded-full p-1" style={{ color: '#ec5b1a'}} />Contato
            </button>
            <button onClick={() => openGallery(true)}
                    className="bg-[#f4c98c] px-4 md:px-4 p-1.5 md:p-2.5 text-xs md:text-base text-black rounded-full inline-flex items-center gap-5 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 cursor-pointer" >
              <ArrowRightOutlined className="bg-black rounded-full p-1" style={{ color: '#ec5b1a'}} />Galeria
            </button>
          </div>

          <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-5xl px-4">
              <Carousel autoplay>
                {carouselImages.map((image, index) => (
                  <div key={index}>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

         <div className="flex flex-col md:flex-row p-8 w-full justify-center items-center gap-5">
            {/* Fardamentos */}
            <div className="w-full sm:w-72 md:w-85">
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl cursor-pointer">

                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative h-40 sm:h-44 md:h-48 w-full">
                  <Image
                    src="/images/camisa.jpg"
                    alt="Fardamentos"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    🎽 Fardamentos
                  </h2>

                  <p className="mt-2 text-sm text-white/90">
                    Futebol, faculdade, empresas e muito mais.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </div>

            {/* Identidade Visual */}
            <div className="w-full sm:w-72 md:w-85">
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl cursor-pointer">

                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative h-40 sm:h-44 md:h-48 w-full">
                  <Image
                    src="/images/identidade-visual.png"
                    alt="Identidade Visual"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    🎨 Identidade Visual
                  </h2>

                  <p className="mt-2 text-sm text-white/90">
                    Sua marca transmitindo profissionalismo e confiança.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </div>

            {/* Artes Digitais */}
            <div className="w-full sm:w-72 md:w-85">
              <div className="group relative overflow-hidden rounded-3xl bg-zinc-900 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-orange-500 hover:shadow-2xl cursor-pointer">

                <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-orange-500/20 blur-3xl" />

                <div className="relative h-40 sm:h-44 md:h-48 w-full">
                  <Image
                    src="/images/banner.png"
                    alt="Artes Digitais"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    📱 Artes Digitais
                  </h2>

                  <p className="mt-2 text-sm text-white/90">
                    Divulgação de eventos, campanhas e conteúdo para redes sociais.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
              </div>
            </div>

          </div>

        <footer className="w-full">
          <div className="mx-auto max-w-6xl px-4 py-6">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-center md:text-center">
              <div className="text-sm text-zinc-900">
                <span className="font-semibold text-zinc-700">Inovart Design</span> ·
                <span className="ml-2">Girau do Ponciano · AL</span>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-zinc-500 md:text-center">
              © {new Date().getFullYear()} Inovart Design. Todos os direitos reservados. <br />
              Developed by <Link href="https://instagram.com/tiallyssoncosta">Tiallysson Costa</Link>
            </div>

            <div className="text-xs text-center text-zinc-400 mt-3">
              <p>Adidas e suas marcas, logotipos e elementos visuais são propriedade da adidas AG. Uso apenas para fins informativos/ilustrativos, sem afiliação oficial.</p>
              <p>Logotipos e escudos exibidos são usados apenas para fins ilustrativos e pertencem aos seus proprietários legais.</p>
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
      </main>
    </div>
  );
}

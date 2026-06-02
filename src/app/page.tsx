"use client";

import Image from "next/image";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { Button, Carousel } from 'antd';
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import InstagramModal from "@/components/modals/InstagramModal";
import FullScreenModal from "@/components/modals/FullScreenModal";

const contact = "";

const photos = [
  "/images/713043629_17872588965673601_7899520686125911295_n.jpg",
  "/images/711426313_17872620891673601_6583932538794909166_n.jpg",
  "/images/625089085_18077813432344022_9166330354871520144_n.webp",
  "/images/621096884_17845658868673601_8741044131485810213_n.jpg",
  "/images/616221341_738151312283363_7777134836960121802_n.jpg",
  "/images/615721164_1411867607190660_2706016865349584871_n.jpg",
  "/images/611596243_870970812571994_4906170177744514941_n.jpg"
];

const carouselImages = [
  {
    src: "/images/672348960_17864692641673601_725803302733621710_n.heic",
    alt: "Portfólio 1",
  },
  {
    src: "/images/banner.png",
    alt: "Portfólio 2",
  },
  {
    src: "/images/camisa.jpg",
    alt: "Portfólio 3",
  },
  {
    src: "/images/identidade-visual.png",
    alt: "Portfólio 4",
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

          <div className="flex flex-col md:flex-row p-8 w-full justify-center items-center gap-5">
            <div className="w-full sm:w-72 md:w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-40 sm:h-44 md:h-47.5 w-full">
                  <Image
                    src="/images/camisa.jpg"
                    alt="Fardamentos"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Fardamentos</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Futebol, faculdade, empresas, entre outras.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>

            <div className="w-full sm:w-72 md:w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-40 sm:h-44 md:h-47.5 w-full">
                  <Image
                    src="/images/identidade-visual.png"
                    alt="Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Identidade Visual</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Sua empresa ou negócio transmitindo a imagem correta.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>

            <div className="w-full sm:w-72 md:w-85">
              <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-zinc-900 shadow-lg">
                <div className="relative h-40 sm:h-44 md:h-47.5 w-full">
                  <Image
                    src="/images/banner.png"
                    alt="Artes"
                    width={300}
                    height={200}
                    className="object-cover"
                    priority
                  />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h2 className="text-3xl font-bold text-white">Artes Digitais</h2>
                  <p className="mt-1 max-w-[26ch] text-sm font-medium text-white/80">
                    Divulgação de eventos de toda e qualquer espécie.
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/20" />
              </div>
            </div>
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
          </div>
        </footer>

        <FullScreenModal
          isOpen={gallery}
          onClose={() => openGallery(false)}
        >
          <div className="p-3">
            <h1 className="text-3xl font-bold text-black mb-3">
              Galeria
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl"
                >
                  <Image
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
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
      </main>
       <InstagramModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}

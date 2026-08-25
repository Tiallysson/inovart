'use client';

import FullScreenModal from "@/shared/components/FullScreenModal";

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose}>
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
  );
}

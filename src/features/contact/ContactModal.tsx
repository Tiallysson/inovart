'use client';

import FullScreenModal from "@/shared/components/FullScreenModal";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <FullScreenModal isOpen={isOpen} onClose={onClose}>
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
            href="https://www.instagram.com/inovartgd/"
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
  );
}

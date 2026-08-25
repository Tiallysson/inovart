'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import FullScreenModal from "@/shared/components/FullScreenModal";
import ImageLightbox from "@/features/gallery/ImageLightbox";

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

interface GalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Gallery({ isOpen, onClose }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <FullScreenModal isOpen={isOpen} onClose={onClose}>
        <div className="p-2 mt-7">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-black">
              Galeria
            </h1>

            <a
              href="https://www.instagram.com/inovartgd/"
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
              <button
                key={photo}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                aria-label={`Ampliar foto ${index + 1}`}
              >
                <Image
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </FullScreenModal>

      <ImageLightbox
        photos={photos}
        currentIndex={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </>
  );
}

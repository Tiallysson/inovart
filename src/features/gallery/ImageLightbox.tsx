'use client';

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { LeftOutlined, RightOutlined, CloseOutlined } from "@ant-design/icons";

interface ImageLightboxProps {
  photos: string[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function ImageLightbox({
  photos,
  currentIndex,
  onClose,
  onNavigate,
}: ImageLightboxProps) {
  const isOpen = currentIndex !== null;

  useEffect(() => {
    if (!isOpen || currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % photos.length);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, photos.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && currentIndex !== null && (
        <motion.div
          className="fixed inset-0 z-70 bg-black/90 flex items-center justify-center px-12 py-6 sm:px-16 sm:py-10 md:px-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 md:top-6 md:right-6 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white text-sm md:text-base rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
            aria-label="Fechar"
          >
            <CloseOutlined />
          </button>

          {photos.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex - 1 + photos.length) % photos.length);
                }}
                className="absolute left-1 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-white text-sm md:text-base rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                aria-label="Foto anterior"
              >
                <LeftOutlined />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigate((currentIndex + 1) % photos.length);
                }}
                className="absolute right-1 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center text-white text-sm md:text-base rounded-full bg-white/10 hover:bg-white/20 transition cursor-pointer"
                aria-label="Próxima foto"
              >
                <RightOutlined />
              </button>
            </>
          )}

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative w-full h-full max-w-5xl max-h-[65dvh] sm:max-h-[80dvh] md:max-h-[85dvh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[currentIndex]}
              alt={`Foto ${currentIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </motion.div>

          <div className="absolute bottom-2 md:bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs md:text-sm font-medium">
            {currentIndex + 1} / {photos.length}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

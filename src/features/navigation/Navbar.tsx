'use client';

interface NavbarProps {
  onAboutClick: () => void;
  onContactClick: () => void;
  onGalleryClick: () => void;
}

export default function Navbar({ onAboutClick, onContactClick, onGalleryClick }: NavbarProps) {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-row p-3 w-fit justify-center gap-2 md:gap-4 bg-zinc-200/50 backdrop-blur-md rounded-full shadow-[0_4px_30px_rgba(0,0,0,0.1)] border border-white/40 transition-all">
      <button onClick={onAboutClick} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer">
        Sobre
      </button>
      <button onClick={onContactClick} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer" >
        Contato
      </button>
      <button onClick={onGalleryClick} className="group border border-orange-500/30 bg-white/70 px-5 py-2 text-xs md:text-sm font-semibold text-zinc-700 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:shadow-lg cursor-pointer" >
        Galeria
      </button>
    </div>
  );
}

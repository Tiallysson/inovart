'use client';

interface InstagramModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InstagramModal({
  isOpen,
  onClose,
}: InstagramModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 z-10 rounded-full bg-white px-2 py-1 shadow cursor-pointer text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <iframe
          src="https://www.instagram.com/inovart.designer_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          width="100%"
          height="700"
          title="Instagram Post"
          className="border-0 rounded-lg"
        />
      </div>
    </div>
  );
}
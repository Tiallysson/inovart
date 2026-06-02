'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface FullScreenModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export default function FullScreenModal({
    isOpen,
    onClose,
    children
}: FullScreenModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/50 z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />

                    <motion.div
                        className="fixed top-8 md:left-20 md:right-20 inset-0 z-50 bg-white rounded-t-3xl overflow-hidden"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{
                        type: 'spring',
                        damping: 30,
                        stiffness: 300,
                        }}
                    >

                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 text-black rounded-full bg-zinc-100 hover:bg-zinc-200 transition"
                        >
                            ✕
                        </button>

                            <div className="h-full overflow-y-auto p-6">
                                {children}
                            </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
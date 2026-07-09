import { X } from "lucide-react";
import { useEffect } from "react";

import type { testimonialItems } from "@/data/gacf-landing";

type TestimonialItem = (typeof testimonialItems)[number];

interface TestimonialLightboxProps {
    item: TestimonialItem | null;
    onClose: () => void;
}

export function TestimonialLightbox({ item, onClose }: TestimonialLightboxProps) {
    useEffect(() => {
        if (!item) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [item, onClose]);

    if (!item) {
        return null;
    }

    return (
        <div
            aria-modal="true"
            className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-4"
            role="dialog"
        >
            <button
                aria-label="Tutup lightbox"
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-white hover:bg-white/20"
                onClick={onClose}
                type="button"
            >
                <X className="h-5 w-5" />
            </button>
            <div className="w-full max-w-3xl rounded-lg border border-white/10 bg-[#111114] p-6 shadow-2xl">
                <div className="grid aspect-video place-items-center rounded-lg border border-dashed border-amber-300/40 bg-amber-300/[0.06] text-center">
                    <div>
                        <p className="text-2xl font-black text-white">{item.title}</p>
                        <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                            {item.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

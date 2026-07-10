import { X } from "lucide-react";
import { useEffect } from "react";

import type { TestimonialItem } from "@/data/gacf-landing";

interface TestimonialLightboxProps {
    item: TestimonialItem | null;
    onClose: () => void;
}

export function TestimonialLightbox({
    item,
    onClose,
}: TestimonialLightboxProps) {
    useEffect(() => {
        if (!item) {
            return;
        }

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [item, onClose]);

    if (!item) {
        return null;
    }

    return (
        <div
            aria-modal="true"
            className="fixed inset-0 z-50 grid cursor-pointer place-items-center bg-black/80 p-4"
            onClick={onClose}
            role="dialog"
        >
            <button
                aria-label="Tutup lightbox"
                className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-white/10 bg-white/10 text-white hover:bg-white/20"
                onClick={onClose}
                type="button"
            >
                <X className="h-5 w-5" />
            </button>
            <div
                className="w-full max-w-5xl cursor-default overflow-hidden rounded-lg border border-white/10 bg-[#111114] shadow-2xl"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="border-b border-white/10 px-4 py-3 sm:px-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">
                        Testimoni GACF
                    </p>
                    <h3 className="mt-1 text-lg font-black text-white sm:text-xl">
                        {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-zinc-400">
                        {item.description}
                    </p>
                </div>

                <div className="p-3">
                    {item.embedSrc ? (
                        <div className="relative aspect-video overflow-hidden rounded-md bg-black">
                            <iframe
                                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen"
                                allowFullScreen
                                className="absolute inset-0 h-full w-full border-0"
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                src={item.embedSrc}
                                title={item.title}
                            />
                        </div>
                    ) : item.mediaSrc && item.type === "image" ? (
                        <img
                            alt={item.title}
                            className="max-h-[82vh] w-full rounded-md object-contain"
                            decoding="async"
                            src={item.mediaSrc}
                        />
                    ) : item.mediaSrc ? (
                        <video
                            autoPlay
                            className="max-h-[82vh] w-full rounded-md bg-black"
                            controls
                            playsInline
                            src={item.mediaSrc}
                        />
                    ) : (
                        <div className="grid aspect-video place-items-center rounded-lg border border-dashed border-amber-300/40 bg-amber-300/[0.06] text-center">
                            <div>
                                <p className="text-2xl font-black text-white">
                                    {item.title}
                                </p>
                                <p className="mt-3 max-w-md text-sm leading-6 text-zinc-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

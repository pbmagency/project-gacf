import { Image, PlayCircle, Quote } from "lucide-react";
import { useState } from "react";

import { testimonialItems } from "@/data/gacf-landing";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";
import { TestimonialLightbox } from "./testimonial-lightbox";
import type { TrackCta } from "./types";

interface TestimonialsSectionProps {
    onCtaClick: TrackCta;
}

type TestimonialItem = (typeof testimonialItems)[number];

export function TestimonialsSection({ onCtaClick }: TestimonialsSectionProps) {
    const [selected, setSelected] = useState<TestimonialItem | null>(null);

    return (
        <section
            className="bg-[#08080b] px-4 py-20 sm:px-6 lg:px-8"
            id="testimonials"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    eyebrow="Testimoni / Social Proof"
                    subtitle="Area ini disiapkan untuk video testimoni, screenshot chat WhatsApp, dan before-after resmi dari client GACF."
                    title="Bukti Resmi GACF Akan Ditampilkan di Sini"
                />

                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {testimonialItems.map((item) => {
                        const Icon = item.type === "video" ? PlayCircle : Image;

                        return (
                            <button
                                className="group cursor-pointer rounded-lg border border-white/10 bg-[#151519] p-3 text-left transition duration-200 hover:-translate-y-1 hover:border-amber-300/45 hover:bg-[#19191f]"
                                key={item.title}
                                onClick={() => setSelected(item)}
                                type="button"
                            >
                                <div className="relative overflow-hidden rounded-lg border border-dashed border-amber-300/30 bg-[#0b0b0f]">
                                    <div className="gacf-grid absolute inset-0 opacity-30" />
                                    <div className="relative grid aspect-video place-items-center">
                                        <div className="grid h-12 w-12 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/[0.10]">
                                            <Icon
                                                aria-hidden="true"
                                                className="h-7 w-7 text-amber-300 transition group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between border-t border-white/10 px-3 py-2">
                                        <span className="text-xs font-bold text-zinc-500">
                                            GACF proof media
                                        </span>
                                        <Quote className="h-4 w-4 text-amber-300/70" />
                                    </div>
                                </div>
                                <h3 className="mt-4 text-base font-black text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-zinc-400">
                                    {item.description}
                                </p>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <CtaButton
                        className="w-full sm:w-auto"
                        href="#pricing"
                        location="testimonials_primary"
                        onTrack={onCtaClick}
                    >
                        Saya Mau Lihat Penawarannya
                    </CtaButton>
                </div>
            </div>

            <TestimonialLightbox
                item={selected}
                onClose={() => setSelected(null)}
            />
        </section>
    );
}

import { Image, Maximize2, PlayCircle, Quote, X } from "lucide-react";
import { useState } from "react";

import { testimonialItems, type TestimonialItem } from "@/data/gacf-landing";

import { testimonialProofImage } from "./assets";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { TestimonialLightbox } from "./testimonial-lightbox";
import type { TrackCta } from "./types";

interface TestimonialsSectionProps {
    onCtaClick: TrackCta;
}

export function TestimonialsSection({ onCtaClick }: TestimonialsSectionProps) {
    const [selected, setSelected] = useState<TestimonialItem | null>(null);
    const [isProofOpen, setIsProofOpen] = useState(false);
    const publishedTestimonials = testimonialItems.filter(
        (item) => item.isPublished,
    );

    return (
        <section
            className="scroll-mt-16 bg-[#08080b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="testimonials"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Bab 4 - Bukti Lapangan"
                        subtitle="Bukti visual yang tersedia ditampilkan apa adanya. Tanpa cerita karangan, tanpa klaim hasil pasti buat semua bisnis."
                        title="Lihat bukti nyata dari orang yang sudah masuk ekosistem GACF."
                    />
                </Reveal>

                <Reveal
                    className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-lg border border-amber-300/20 bg-[#151519] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]"
                    delay={80}
                >
                    <button
                        className="group grid w-full cursor-pointer gap-5 text-left lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
                        onClick={() => setIsProofOpen(true)}
                        type="button"
                    >
                        <div className="px-2 py-2 sm:px-4">
                            <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">
                                Screenshot testimoni
                            </p>
                            <h3 className="mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                                Kumpulan feedback yang sudah tersedia dari GACF.
                            </h3>
                            <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                                Screenshot ini jadi bukti visual supaya lo bisa
                                lihat respon real, bukan cuma baca janji manis
                                di halaman penawaran.
                            </p>
                            <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-black text-white transition group-hover:border-amber-300/35 group-hover:bg-white/[0.07]">
                                <Maximize2 className="h-4 w-4 text-amber-300" />
                                Perbesar screenshot
                            </span>
                        </div>

                        <div className="relative mx-auto w-full max-w-[460px] overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0f] lg:max-w-[500px]">
                            <div className="gacf-grid absolute inset-0 opacity-20" />
                            <img
                                alt="Collage screenshot feedback member GACF"
                                className="relative aspect-square w-full object-contain transition duration-300 group-hover:scale-[1.015]"
                                decoding="async"
                                height={1080}
                                loading="lazy"
                                src={testimonialProofImage}
                                width={1080}
                            />
                        </div>
                    </button>
                </Reveal>

                {publishedTestimonials.length > 0 && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {publishedTestimonials.map((item, index) => {
                            const Icon =
                                item.type === "video" ? PlayCircle : Image;
                            const hasMedia = Boolean(item.mediaSrc);

                            return (
                                <Reveal
                                    className="h-full"
                                    delay={index * 70}
                                    key={item.title}
                                >
                                    <button
                                        className={`group h-full w-full rounded-lg border border-white/10 bg-[#151519] p-3 text-left transition duration-200 ${hasMedia ? "cursor-pointer hover:-translate-y-1 hover:border-amber-300/45 hover:bg-[#19191f]" : "cursor-default"}`}
                                        disabled={!hasMedia}
                                        onClick={() => setSelected(item)}
                                        type="button"
                                    >
                                        <div className="relative overflow-hidden rounded-lg border border-dashed border-amber-300/30 bg-[#0b0b0f]">
                                            <div className="gacf-grid absolute inset-0 opacity-30" />
                                            <div className="relative grid aspect-video place-items-center">
                                                {item.mediaSrc &&
                                                item.type === "image" ? (
                                                    <img
                                                        alt={item.title}
                                                        className="h-full w-full object-cover"
                                                        decoding="async"
                                                        loading="lazy"
                                                        src={item.mediaSrc}
                                                    />
                                                ) : item.mediaSrc ? (
                                                    <video
                                                        className="h-full w-full object-cover"
                                                        muted
                                                        playsInline
                                                        preload="metadata"
                                                        src={item.mediaSrc}
                                                    />
                                                ) : (
                                                    <div className="grid h-12 w-12 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/[0.10]">
                                                        <Icon
                                                            aria-hidden="true"
                                                            className="h-7 w-7 text-amber-300 transition group-hover:scale-105"
                                                        />
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 grid place-items-center bg-black/25 opacity-100 transition group-hover:bg-black/10">
                                                    <div className="grid h-12 w-12 place-items-center rounded-full border border-amber-300/45 bg-black/50 backdrop-blur-sm">
                                                        <Icon
                                                            aria-hidden="true"
                                                            className="h-6 w-6 text-amber-300 transition group-hover:scale-105"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="relative flex items-center justify-between border-t border-white/10 px-3 py-2">
                                                <span className="text-xs font-bold text-zinc-500">
                                                    Testimoni GACF
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
                                </Reveal>
                            );
                        })}
                    </div>
                )}

                <div className="mt-10 text-center">
                    <CtaButton
                        className="w-full sm:w-auto"
                        href="#pricing"
                        location="testimonials_primary"
                        onTrack={onCtaClick}
                    >
                        Gua Mau Lanjut ke Penawaran
                    </CtaButton>
                </div>
            </div>

            <TestimonialLightbox
                item={selected}
                onClose={() => setSelected(null)}
            />

            {isProofOpen && (
                <div
                    aria-modal="true"
                    className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
                    role="dialog"
                >
                    <button
                        aria-label="Tutup proof image"
                        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-lg border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                        onClick={() => setIsProofOpen(false)}
                        type="button"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div className="w-full max-w-4xl overflow-hidden rounded-lg border border-white/10 bg-[#101014] p-3 shadow-2xl">
                        <img
                            alt="Collage screenshot feedback member GACF"
                            className="max-h-[82vh] w-full object-contain"
                            decoding="async"
                            height={1080}
                            src={testimonialProofImage}
                            width={1080}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

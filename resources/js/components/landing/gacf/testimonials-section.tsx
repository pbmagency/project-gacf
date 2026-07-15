import { Play, PlayCircle, X } from "lucide-react";
import { useState } from "react";

import {
    imageTestimonials,
    testimonialItems,
    type TestimonialItem,
} from "@/data/gacf-landing";

import {
    bukTariTestimonialImage,
    pakMahfuddinTestimonialImage,
    pakSalimTestimonialImage,
    pakSandiTestimonialImage,
    testimonialProofImage,
} from "./assets";
import { CtaCluster } from "./cta-cluster";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { TestimonialLightbox } from "./testimonial-lightbox";
import type { TrackCta } from "./types";

interface TestimonialsSectionProps {
    onCtaClick: TrackCta;
}

const imageTestimonialAssets = {
    bukTari: bukTariTestimonialImage,
    pakMahfuddin: pakMahfuddinTestimonialImage,
    pakSalim: pakSalimTestimonialImage,
    pakSandi: pakSandiTestimonialImage,
};

const threeColumnDirections = ["left", "up", "right"] as const;
const fourColumnDirections = ["left", "up", "up", "right"] as const;

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
                        eyebrow="Testimoni Member Kami"
                        title="Bukti dari orang yang sudah belajar di GACF."
                    />
                </Reveal>

                {publishedTestimonials.length > 0 && (
                    <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 ">
                        {publishedTestimonials.map((item, index) => {
                            const hasPlayableMedia = Boolean(
                                item.embedSrc || item.mediaSrc,
                            );

                            return (
                                <Reveal
                                    className="h-full"
                                    delay={index * 70}
                                    direction={
                                        threeColumnDirections[
                                            index % threeColumnDirections.length
                                        ]
                                    }
                                    key={item.title}
                                >
                                    <button
                                        className={`group flex h-full min-h-[33rem] w-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111114] text-left shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition duration-200 sm:min-h-[35rem] lg:min-h-[34rem] ${
                                            hasPlayableMedia
                                                ? "cursor-pointer hover:-translate-y-1 hover:border-amber-300/45 hover:bg-[#16161a]"
                                                : "cursor-default"
                                        }`}
                                        disabled={!hasPlayableMedia}
                                        onClick={() => setSelected(item)}
                                        type="button"
                                    >
                                        <div className="relative isolate overflow-hidden bg-[#0b0b0f]">
                                            <div className="gacf-grid absolute inset-0 opacity-30" />
                                            <div className="relative grid aspect-square place-items-center">
                                                {item.posterSrc ? (
                                                    <>
                                                        <img
                                                            alt={`${item.title} preview`}
                                                            className="absolute inset-0 h-full w-full object-cover"
                                                            decoding="async"
                                                            loading="lazy"
                                                            src={item.posterSrc}
                                                            style={{
                                                                objectPosition:
                                                                    item.posterPosition ??
                                                                    "center top",
                                                            }}
                                                        />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-black/5" />
                                                        <div className="absolute inset-x-0 -bottom-px h-12 bg-gradient-to-t from-[#111114] via-[#111114]/75 to-transparent" />
                                                        <div className="relative grid justify-items-center">
                                                            <div className="grid h-16 w-16 place-items-center rounded-full bg-amber-300 text-[#0b0b0f] shadow-[0_18px_48px_rgba(250,204,21,0.28)] transition duration-200 group-hover:scale-105">
                                                                <Play
                                                                    aria-hidden="true"
                                                                    className="ml-1 h-8 w-8 fill-current"
                                                                />
                                                            </div>
                                                        </div>
                                                    </>
                                                ) : item.mediaSrc &&
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
                                                    <div className="relative grid h-full w-full place-items-center overflow-hidden px-4 text-center">
                                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(250,204,21,0.18),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
                                                        <div className="relative grid gap-3 justify-items-center">
                                                            <div className="grid h-12 w-12 place-items-center rounded-full border border-amber-300/50 bg-black/55 shadow-[0_18px_40px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-200 group-hover:scale-105 group-hover:border-amber-300">
                                                                <PlayCircle
                                                                    aria-hidden="true"
                                                                    className="h-7 w-7 fill-amber-300/20 text-amber-300"
                                                                />
                                                            </div>
                                                            <span className="text-xs font-black uppercase tracking-[0.16em] text-amber-300">
                                                                Putar video
                                                            </span>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex flex-1 flex-col p-5 sm:p-6">
                                            <h3 className="text-lg font-black leading-tight text-white">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-7 text-zinc-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </button>
                                </Reveal>
                            );
                        })}
                    </div>
                )}

                <div className="mx-auto mt-10 grid max-w-6xl gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {imageTestimonials.map((item, index) => (
                        <Reveal
                            className="h-full"
                            delay={Math.min(index * 70, 220)}
                            direction={
                                fourColumnDirections[
                                    index % fourColumnDirections.length
                                ]
                            }
                            key={item.name}
                        >
                            <article className="flex h-full min-h-[20rem] flex-col items-center rounded-lg border border-amber-300/20 bg-[#111114] px-6 py-7 text-center shadow-[0_22px_60px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-1 hover:border-amber-300/40 hover:bg-[#151519]">
                                <img
                                    alt={item.name}
                                    className="h-20 w-20 rounded-full border-2 border-amber-300 object-cover shadow-[0_14px_35px_rgba(250,204,21,0.18)]"
                                    decoding="async"
                                    height={96}
                                    loading="lazy"
                                    src={imageTestimonialAssets[item.imageKey]}
                                    width={96}
                                />
                                <p className="mt-7 text-pretty text-base font-semibold italic leading-8 text-zinc-100">
                                    "{item.quote}"
                                </p>
                                <div className="mt-auto pt-8">
                                    <h3 className="font-black text-amber-300">
                                        {item.name}
                                    </h3>
                                    <p className="mt-5 text-sm text-zinc-500">
                                        {item.role}
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                <Reveal className="mx-auto mt-8 max-w-3xl" delay={120}>
                    <button
                        aria-label="Perbesar screenshot feedback WhatsApp member GACF"
                        className="block w-full cursor-pointer"
                        onClick={() => setIsProofOpen(true)}
                        type="button"
                    >
                        <img
                            alt="Kumpulan screenshot feedback WhatsApp member GACF"
                            className="max-h-[28rem] w-full object-contain"
                            decoding="async"
                            height={1080}
                            loading="lazy"
                            src={testimonialProofImage}
                            width={1080}
                        />
                    </button>
                </Reveal>

                <Reveal delay={180}>
                    <CtaCluster
                        className="mt-10"
                        onTrack={onCtaClick}
                        primaryLocation="testimonials_primary"
                        secondaryLocation="testimonials_secondary"
                    />
                </Reveal>
            </div>

            <TestimonialLightbox
                item={selected}
                onClose={() => setSelected(null)}
            />

            {isProofOpen && (
                <div
                    aria-modal="true"
                    className="animate-fade-in fixed inset-0 z-50 grid cursor-pointer place-items-center bg-black/85 p-4"
                    onClick={() => setIsProofOpen(false)}
                    role="dialog"
                >
                    <button
                        aria-label="Tutup screenshot feedback"
                        className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-lg border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
                        onClick={() => setIsProofOpen(false)}
                        type="button"
                    >
                        <X className="h-5 w-5" />
                    </button>
                    <div
                        className="animate-scale-in w-full max-w-5xl cursor-default"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <img
                            alt="Kumpulan screenshot feedback WhatsApp member GACF diperbesar"
                            className="max-h-[88vh] w-full object-contain"
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

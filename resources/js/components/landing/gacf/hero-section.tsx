import {
    ChevronDown,
    ClipboardCheck,
    ShieldCheck,
    Star,
    TrendingUp,
} from "lucide-react";

import {
    bukTariTestimonialImage,
    gacfBundleImage,
    pakMahfuddinTestimonialImage,
    pakSandiTestimonialImage,
} from "./assets";
import { CtaCluster } from "./cta-cluster";
import { Reveal } from "./reveal";
import type { TrackCta } from "./types";

interface HeroSectionProps {
    onCtaClick: TrackCta;
}

const memberAvatarImages = [
    bukTariTestimonialImage,
    pakMahfuddinTestimonialImage,
    pakSandiTestimonialImage,
] as const;

export function HeroSection({ onCtaClick }: HeroSectionProps) {
    return (
        <section
            className="relative isolate scroll-mt-16 overflow-hidden bg-[#07070a] px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-10 lg:px-8 lg:pb-12 lg:pt-8 xl:pt-10"
            id="top"
        >
            <div className="gacf-grid absolute inset-0 opacity-45" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
                <Reveal direction="left">
                    <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-amber-200 sm:px-4 sm:tracking-[0.14em]">
                        <span className="h-2 w-2 shrink-0 rounded-full bg-amber-300" />
                        <span className="min-w-0">
                            New Strategy 2026 &middot; Google Ads Cuan Formula
                        </span>
                    </div>
                    <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-amber-300/25 bg-white/[0.04] px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-amber-100 sm:px-4">
                        <span className="flex items-center gap-0.5 text-amber-300">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 fill-current"
                                    key={index}
                                />
                            ))}
                        </span>
                        <span>3.500+ Members</span>
                        <span className="ml-1 flex -space-x-2">
                            {memberAvatarImages.map((image, index) => (
                                <img
                                    alt=""
                                    aria-hidden="true"
                                    className="h-6 w-6 rounded-full border-2 border-[#111114] object-cover"
                                    decoding="async"
                                    height={32}
                                    key={image}
                                    loading={index === 0 ? "eager" : "lazy"}
                                    src={image}
                                    width={32}
                                />
                            ))}
                        </span>
                    </div>
                    <h1 className="max-w-4xl text-balance text-3xl font-black leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem] xl:text-6xl">
                        Iklan Lo Ratusan Yang Klik, Tapi Yang Chat Dikit?
                    </h1>
                    <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
                        Belajar naikin jumlah chat tanpa asal nambah budget,
                        dengan ngebenerin data yang Google baca lewat OCT.
                    </p>

                    <div className="mt-6 grid gap-3 sm:flex">
                        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-amber-300/25 bg-amber-300/[0.08] px-4 py-2 text-sm font-black text-amber-100">
                            <ShieldCheck
                                aria-hidden="true"
                                className="h-4 w-4 text-amber-300"
                            />
                            87% Success Rate
                        </div>
                        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-black text-zinc-100">
                            <TrendingUp
                                aria-hidden="true"
                                className="h-4 w-4 text-amber-300"
                            />
                            Peningkatan ROAS 85X
                        </div>
                    </div>

                    <CtaCluster
                        align="left"
                        className="mt-7"
                        onTrack={onCtaClick}
                        primaryLocation="hero_primary"
                        secondaryLocation="hero_secondary"
                    />
                </Reveal>

                <Reveal delay={120} direction="right">
                    <HeroLearningVisual />
                </Reveal>
            </div>

            <Reveal
                className="relative mx-auto mt-8 flex max-w-7xl justify-center lg:mt-6"
                delay={220}
                direction="scale"
            >
                <a
                    aria-label="Lanjut ke bagian warning"
                    className="group grid h-10 w-10 cursor-pointer place-items-center rounded-full text-amber-300 transition duration-200 hover:-translate-y-0.5 hover:text-amber-200"
                    href="#problem"
                >
                    <ChevronDown
                        aria-hidden="true"
                        className="h-8 w-8 motion-safe:animate-bounce"
                    />
                </a>
            </Reveal>
        </section>
    );
}

function HeroLearningVisual() {
    const learningSteps = [
        ["01", "Blueprint"],
        ["02", "Tracking GTM & GA4"],
        ["03", "Offline Conversion"],
    ];

    return (
        <div className="relative hidden sm:block sm:min-h-[480px] lg:min-h-[500px]">
            <div className="gacf-panel relative overflow-hidden rounded-lg p-5 pb-0 sm:min-h-[445px] sm:overflow-visible sm:pb-5 lg:mr-8">
                <div className="gacf-grid absolute inset-0 opacity-25" />
                <div className="absolute inset-x-0 bottom-0 h-3/4 rounded-b-lg bg-gradient-to-t from-black via-black/55 to-transparent" />

                <div className="relative z-20 flex items-start justify-between gap-4">
                    <div className="max-w-sm">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
                            GACF E-Course
                        </p>
                        <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-[2rem]">
                            Ceritanya dimulai dari data yang salah.
                        </h2>
                        <p className="mt-3 max-w-xs text-sm leading-6 text-zinc-400">
                            Kalau sinyalnya cuma klik, Google juga akan terus
                            cari orang yang mirip pengklik.
                        </p>
                    </div>
                    <div className="hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 text-amber-300 sm:block">
                        <ClipboardCheck
                            aria-hidden="true"
                            className="h-6 w-6"
                        />
                    </div>
                </div>

                <div className="relative z-20 mt-7 max-w-xs rounded-lg border border-white/10 bg-black/40 p-4 backdrop-blur">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-zinc-500">
                        Learning path
                    </p>
                    <div className="mt-3 grid gap-2">
                        {learningSteps.map(([number, title]) => (
                            <div
                                className="group flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 transition duration-300 ease-out hover:border-amber-300/30 hover:bg-white/[0.055]"
                                key={number}
                            >
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-amber-300/25 bg-amber-300/10 font-mono text-[0.68rem] font-black text-amber-300 transition duration-300 ease-out group-hover:scale-105">
                                    {number}
                                </span>
                                <span className="text-sm font-black text-white">
                                    {title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <img
                    alt="Bundle materi Google Ads Cuan Formula"
                    className="pointer-events-none relative z-10 mx-auto mt-4 h-56 w-full max-w-[23rem] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:absolute sm:bottom-[-18px] sm:right-[-30px] sm:mt-0 sm:h-[62%] sm:w-auto sm:max-w-none lg:bottom-[-24px] lg:right-[-50px] lg:h-[66%]"
                    decoding="async"
                    height={640}
                    src={gacfBundleImage}
                    width={640}
                />
            </div>
        </div>
    );
}

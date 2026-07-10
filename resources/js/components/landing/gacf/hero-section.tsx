import {
    BookOpenCheck,
    CheckCircle2,
    ClipboardCheck,
    UsersRound,
} from "lucide-react";

import { heroBullets } from "@/data/gacf-landing";

import { gacfBundleImage } from "./assets";
import { CtaButton } from "./cta-button";
import type { TrackCta } from "./types";

interface HeroSectionProps {
    onCtaClick: TrackCta;
}

export function HeroSection({ onCtaClick }: HeroSectionProps) {
    return (
        <section
            className="relative isolate scroll-mt-16 overflow-hidden bg-[#07070a] px-4 pb-16 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-24 lg:pt-10 xl:pt-12"
            id="top"
        >
            <div className="gacf-grid absolute inset-0 opacity-45" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-9 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                    <div className="mb-5 inline-flex max-w-full items-start gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-bold uppercase leading-5 tracking-[0.1em] text-amber-200 sm:px-4 sm:tracking-[0.14em]">
                        <span className="h-2 w-2 rounded-full bg-amber-300" />
                        <span className="min-w-0">
                            New E-Course GACF - Google Ads Cuan Formula
                        </span>
                    </div>
                    <h1 className="max-w-4xl text-balance text-3xl font-black leading-[1.05] text-white sm:text-5xl lg:text-[3.6rem] xl:text-6xl">
                        Google Ads lo bukan kurang klik. Google lagi belajar
                        dari orang yang salah.
                    </h1>
                    <p className="mt-5 max-w-2xl text-pretty text-lg leading-8 text-zinc-300 sm:text-xl">
                        Di GACF, gua ajak lo benerin alur datanya: dari klik,
                        tracking, campaign, sampai closing WhatsApp/manual
                        dikirim balik ke Google lewat Offline Conversion
                        Tracking.
                    </p>

                    <ul className="mt-6 grid gap-3">
                        {heroBullets.map((bullet) => (
                            <li
                                className="flex items-start gap-3 text-zinc-200"
                                key={bullet}
                            >
                                <CheckCircle2
                                    aria-hidden="true"
                                    className="mt-0.5 h-5 w-5 shrink-0 text-amber-300"
                                />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-7 grid gap-3 sm:flex">
                        <CtaButton
                            className="w-full sm:w-auto"
                            href="#pricing"
                            location="hero_primary"
                            onTrack={onCtaClick}
                        >
                            Benerin Data Iklan Gua
                        </CtaButton>
                        <CtaButton
                            className="w-full sm:w-auto"
                            href="#curriculum"
                            location="hero_secondary"
                            onTrack={onCtaClick}
                            variant="secondary"
                        >
                            Lihat Alur Belajar
                        </CtaButton>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="inline-flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2">
                            <UsersRound
                                aria-hidden="true"
                                className="h-5 w-5 text-amber-300"
                            />
                            <span className="text-sm font-bold text-zinc-100">
                                Buat business owner yang capek bakar budget
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-lg border border-amber-300/25 bg-amber-300/[0.06] px-3 py-2 text-sm font-bold text-amber-100">
                            <BookOpenCheck
                                aria-hidden="true"
                                className="h-4 w-4"
                            />
                            Strategi GACF + OCT
                        </div>
                    </div>
                </div>

                <HeroLearningVisual />
            </div>
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
        <div className="relative sm:min-h-[540px] lg:min-h-[560px]">
            <div className="gacf-panel relative overflow-hidden rounded-lg p-5 pb-0 sm:min-h-[490px] sm:overflow-visible sm:pb-5 lg:mr-8">
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
                            Kalau yang masuk ke Google cuma klik, jangan heran
                            kalau yang dicari mesin juga cuma pengklik.
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
                                className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5"
                                key={number}
                            >
                                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-amber-300/25 bg-amber-300/10 font-mono text-[0.68rem] font-black text-amber-300">
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
                    src={gacfBundleImage}
                />
            </div>
        </div>
    );
}

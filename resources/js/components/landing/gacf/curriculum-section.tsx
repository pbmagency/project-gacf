import { BookOpenCheck } from "lucide-react";

import { curriculumModules } from "@/data/gacf-landing";

import { gacfCourseCover } from "./assets";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import type { TrackCta } from "./types";

interface CurriculumSectionProps {
    onCtaClick: TrackCta;
}

export function CurriculumSection({ onCtaClick }: CurriculumSectionProps) {
    return (
        <section
            className="relative scroll-mt-16 bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="curriculum"
        >
            <div className="gacf-grid absolute inset-0 opacity-20" />
            <div className="relative mx-auto max-w-6xl">
                <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start xl:gap-12">
                    <div className="lg:max-w-[29rem]">
                        <Reveal>
                            <div className="text-left">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 shrink-0 bg-amber-300/70" />
                                    <p className="text-xs font-bold uppercase leading-5 tracking-[0.18em] text-amber-300">
                                        Bab 6 - Alur Belajar
                                    </p>
                                </div>
                                <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.35rem]">
                                    Dari klik kosong sampai Google mulai belajar
                                    dari closing.
                                </h2>
                                <p className="mt-4 text-pretty text-base leading-7 text-zinc-300">
                                    Setiap modul disusun sebagai perjalanan:
                                    pahami kenapa datanya salah, rapikan
                                    tracking, jalankan campaign, lalu kirim data
                                    pembeli asli balik ke Google.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal
                            className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-4"
                            delay={90}
                        >
                            <div className="grid gap-4 sm:grid-cols-[5rem_1fr] sm:items-center">
                                <img
                                    alt="Cover Google Ads Cuan Formula"
                                    className="aspect-[3/4] w-20 rounded-lg border border-white/10 object-cover sm:w-full"
                                    decoding="async"
                                    height={320}
                                    loading="lazy"
                                    src={gacfCourseCover}
                                    width={240}
                                />
                                <div>
                                    <div className="flex items-center gap-3 text-amber-300">
                                        <BookOpenCheck
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                        />
                                        <span className="text-sm font-black uppercase tracking-[0.14em]">
                                            Learning path
                                        </span>
                                    </div>
                                    <p className="mt-3 text-sm leading-6 text-zinc-400">
                                        Urutannya dibuat supaya lo ngikutin
                                        ceritanya dari awal: sinyal, campaign,
                                        optimasi, sampai OCT.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <CtaButton
                            className="mt-6 w-full sm:w-auto"
                            href="#pricing"
                            location="curriculum_primary"
                            onTrack={onCtaClick}
                        >
                            Lihat Semua Modul
                        </CtaButton>
                    </div>

                    <div className="relative rounded-lg border border-white/10 bg-[#111115]/65">
                        <ol className="divide-y divide-white/10">
                            {curriculumModules.map((module, index) => (
                                <li className="list-none" key={module.title}>
                                    <Reveal delay={Math.min(index * 55, 220)}>
                                        <div className="grid grid-cols-[2.75rem_1fr] gap-3 px-4 py-4 transition duration-200 hover:bg-white/[0.035] sm:grid-cols-[3.5rem_1fr] sm:gap-4 lg:grid-cols-[3.25rem_1fr] lg:gap-4">
                                            <div className="sm:block">
                                                <span className="grid h-10 w-10 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/10 font-mono text-sm font-black text-amber-300 lg:h-9 lg:w-9 lg:text-xs">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black leading-tight text-white lg:text-base">
                                                    {module.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-zinc-400 lg:mt-1.5 lg:leading-5">
                                                    {module.copy}
                                                </p>
                                            </div>
                                        </div>
                                    </Reveal>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

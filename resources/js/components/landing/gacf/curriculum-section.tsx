import { BookOpenCheck } from "lucide-react";

import { curriculumModules } from "@/data/gacf-landing";

import { gacfCourseCover } from "./assets";
import { CtaCluster } from "./cta-cluster";
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
                        <Reveal direction="left">
                            <div className="text-left">
                                <div className="mb-4 flex items-center gap-3">
                                    <span className="h-px w-8 shrink-0 bg-amber-300/70" />
                                    <p className="text-xs font-bold uppercase leading-5 tracking-[0.18em] text-amber-300">
                                        Bab 5 - Alur Belajar
                                    </p>
                                </div>
                                <h2 className="text-balance text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.35rem]">
                                    Dari klik kosong sampai Google mulai belajar
                                    dari closing.
                                </h2>
                                <p className="mt-4 text-pretty text-base leading-7 text-zinc-300">
                                    Urutannya dibuat biar lo tahu harus mulai
                                    dari mana, bukan lompat-lompat optimasi.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal
                            className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-4"
                            delay={90}
                            direction="left"
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
                                        Mulai dari sinyal, campaign, optimasi,
                                        sampai OCT.
                                    </p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={180} direction="left">
                            <CtaCluster
                                align="left"
                                className="mt-6"
                                onTrack={onCtaClick}
                                primaryLocation="curriculum_primary"
                                secondaryLocation="curriculum_secondary"
                            />
                        </Reveal>
                    </div>

                    <Reveal
                        className="relative rounded-lg border border-white/10 bg-[#111115]/65"
                        delay={140}
                        direction="right"
                    >
                        <ol className="divide-y divide-white/10">
                            {curriculumModules.map((module, index) => (
                                <li className="list-none" key={module.title}>
                                    <Reveal
                                        delay={220 + index * 70}
                                        direction="right"
                                    >
                                        <div className="group grid grid-cols-[2.75rem_1fr] gap-3 px-4 py-4 transition duration-300 ease-out hover:bg-white/[0.04] sm:grid-cols-[3.5rem_1fr] sm:gap-4 lg:grid-cols-[3.25rem_1fr] lg:gap-4">
                                            <div className="sm:block">
                                                <span className="grid h-10 w-10 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/10 font-mono text-sm font-black text-amber-300 transition duration-300 ease-out group-hover:scale-105 group-hover:border-amber-300/50 lg:h-9 lg:w-9 lg:text-xs">
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
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

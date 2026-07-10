import { BookOpenCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { curriculumModules } from "@/data/gacf-landing";

import { gacfCourseCover } from "./assets";
import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { TrackCta } from "./types";

interface CurriculumSectionProps {
    onCtaClick: TrackCta;
}

export function CurriculumSection({ onCtaClick }: CurriculumSectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const viewportRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLOListElement>(null);
    const [scrollOffset, setScrollOffset] = useState(0);
    const [sectionHeight, setSectionHeight] = useState<number>();

    useEffect(() => {
        let frame = 0;
        let maxTravel = 0;

        const calculate = () => {
            const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

            if (!isDesktop || !viewportRef.current || !listRef.current) {
                maxTravel = 0;
                setScrollOffset(0);
                setSectionHeight(undefined);
                return;
            }

            const viewportHeight = viewportRef.current.clientHeight;
            const listHeight = listRef.current.scrollHeight;
            maxTravel = Math.max(0, listHeight - viewportHeight);
            setSectionHeight(window.innerHeight + maxTravel);
        };

        const update = () => {
            frame = 0;

            if (!sectionRef.current || maxTravel === 0) {
                setScrollOffset(0);
                return;
            }

            const sectionTop =
                sectionRef.current.getBoundingClientRect().top + window.scrollY;
            const scrollableDistance =
                sectionRef.current.offsetHeight - window.innerHeight;
            const progress =
                scrollableDistance > 0
                    ? (window.scrollY - sectionTop) / scrollableDistance
                    : 0;
            const clampedProgress = Math.min(1, Math.max(0, progress));

            setScrollOffset(maxTravel * clampedProgress);
        };

        const requestUpdate = () => {
            if (frame === 0) {
                frame = window.requestAnimationFrame(update);
            }
        };

        const recalculate = () => {
            calculate();
            requestUpdate();
        };

        recalculate();
        window.addEventListener("resize", recalculate);
        window.addEventListener("scroll", requestUpdate, { passive: true });

        return () => {
            window.removeEventListener("resize", recalculate);
            window.removeEventListener("scroll", requestUpdate);

            if (frame !== 0) {
                window.cancelAnimationFrame(frame);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative scroll-mt-16 bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-0"
            id="curriculum"
            style={sectionHeight ? { height: sectionHeight } : undefined}
        >
            <div className="gacf-grid absolute inset-0 opacity-20" />
            <div className="relative mx-auto max-w-7xl lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] lg:overflow-hidden">
                <div className="grid gap-10 lg:h-full lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
                    <div>
                        <Reveal>
                            <SectionHeading
                                align="left"
                                eyebrow="Bab 6 - Alur Belajar"
                                subtitle="Setiap modul disusun sebagai perjalanan: pahami kenapa datanya salah, rapikan tracking, jalankan campaign, lalu kirim data pembeli asli balik ke Google."
                                title="Dari klik kosong sampai Google mulai belajar dari closing."
                            />
                        </Reveal>

                        <Reveal
                            className="mt-7 rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:p-5"
                            delay={90}
                        >
                            <div className="grid gap-4 sm:grid-cols-[6rem_1fr] sm:items-center">
                                <img
                                    alt="Cover Google Ads Cuan Formula"
                                    className="aspect-[3/4] w-24 rounded-lg border border-white/10 object-cover sm:w-full"
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
                            className="mt-8 w-full sm:w-auto"
                            href="#pricing"
                            location="curriculum_primary"
                            onTrack={onCtaClick}
                        >
                            Lihat Semua Modul
                        </CtaButton>
                    </div>

                    <div
                        className="relative lg:h-[calc(100vh-9rem)] lg:overflow-hidden"
                        ref={viewportRef}
                    >
                        <ol
                            className="grid gap-0 transition-transform duration-75 ease-out sm:gap-3 lg:py-4"
                            ref={listRef}
                            style={{
                                transform: `translate3d(0, -${scrollOffset}px, 0)`,
                            }}
                        >
                            {curriculumModules.map((module, index) => (
                                <li className="list-none" key={module.title}>
                                    <Reveal delay={Math.min(index * 55, 220)}>
                                        <div
                                            className={`grid grid-cols-[2.75rem_1fr] gap-3 border-b border-white/10 py-4 transition duration-200 sm:grid-cols-[3.75rem_1fr] sm:gap-4 sm:rounded-lg sm:border sm:bg-[#111115] sm:p-4 sm:hover:-translate-y-0.5 sm:hover:border-amber-300/35 sm:hover:bg-[#17171c] lg:min-h-[8.75rem] lg:content-center ${
                                                index ===
                                                curriculumModules.length - 1
                                                    ? "border-b-0"
                                                    : ""
                                            }`}
                                        >
                                            <div className="sm:block">
                                                <span className="grid h-10 w-10 place-items-center rounded-lg border border-amber-300/30 bg-amber-300/10 font-mono text-sm font-black text-amber-300">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0",
                                                    )}
                                                </span>
                                                <span className="hidden text-xs font-bold uppercase tracking-[0.16em] text-zinc-500 sm:mt-3 sm:block">
                                                    Modul
                                                </span>
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-black leading-tight text-white">
                                                    {module.title}
                                                </h3>
                                                <p className="mt-2 text-sm leading-6 text-zinc-400">
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

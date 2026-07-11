import { ArrowRight, Check, X } from "lucide-react";

import { octComparison } from "@/data/gacf-landing";

import { CtaCluster } from "./cta-cluster";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { TrackCta } from "./types";

interface SolutionOctSectionProps {
    onCtaClick: TrackCta;
}

export function SolutionOctSection({ onCtaClick }: SolutionOctSectionProps) {
    return (
        <section
            className="relative scroll-mt-16 overflow-hidden bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="oct"
        >
            <div className="gacf-grid absolute inset-0 opacity-25" />
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Bab 2 - Turning Point"
                        title="Begitu data pembeli asli masuk, cara Google belajar ikut berubah."
                    />
                </Reveal>

                <div className="relative mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                    <ComparisonCard
                        delay={70}
                        direction="left"
                        icon="bad"
                        items={octComparison.without}
                        title="Sebelum OCT"
                    />
                    <Reveal
                        className="flex items-center justify-center lg:w-12"
                        delay={140}
                        direction="scale"
                    >
                        <div className="grid h-11 w-11 place-items-center rounded-lg border border-amber-300/35 bg-amber-300 text-zinc-950 shadow-[0_0_36px_rgba(251,191,36,0.2)] lg:h-12 lg:w-12">
                            <ArrowRight
                                aria-hidden="true"
                                className="h-6 w-6 rotate-90 lg:rotate-0"
                            />
                        </div>
                    </Reveal>
                    <ComparisonCard
                        delay={210}
                        direction="right"
                        icon="good"
                        items={octComparison.with}
                        title="Sesudah OCT"
                    />
                </div>

                <Reveal delay={260}>
                    <CtaCluster
                        className="mt-10"
                        onTrack={onCtaClick}
                        primaryLocation="solution_primary"
                        secondaryLocation="solution_secondary"
                    />
                </Reveal>
            </div>
        </section>
    );
}

function ComparisonCard({
    title,
    items,
    icon,
    delay = 0,
    direction = "up",
}: {
    title: string;
    items: string[];
    icon: "good" | "bad";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale";
}) {
    const isGood = icon === "good";

    return (
        <Reveal
            className={`rounded-lg border p-5 sm:p-6 ${
                isGood
                    ? "border-amber-300/30 bg-[linear-gradient(180deg,rgba(251,191,36,0.10),rgba(255,255,255,0.025))]"
                    : "border-red-400/20 bg-[linear-gradient(180deg,rgba(248,113,113,0.08),rgba(255,255,255,0.02))]"
            }`}
            delay={delay}
            direction={direction}
        >
            <h3 className="flex items-center justify-between gap-4 text-xl font-black text-white sm:text-2xl">
                {title}
                <span
                    className={`h-2 w-2 rounded-full ${
                        isGood ? "bg-emerald-300" : "bg-red-300"
                    }`}
                />
            </h3>
            <ul className="mt-5 grid gap-3">
                {items.map((item) => (
                    <li
                        className="flex gap-3 text-sm leading-6 text-zinc-200 sm:text-base"
                        key={item}
                    >
                        <span
                            className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full ${
                                isGood
                                    ? "bg-amber-300 text-zinc-950"
                                    : "bg-red-500/15 text-red-300"
                            }`}
                        >
                            {isGood ? (
                                <Check aria-hidden="true" className="h-4 w-4" />
                            ) : (
                                <X aria-hidden="true" className="h-4 w-4" />
                            )}
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </Reveal>
    );
}

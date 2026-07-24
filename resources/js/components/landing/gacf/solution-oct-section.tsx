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
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Metode Offline Conversion Tracking (OCT)"
                        title="Begitu data pembeli asli masuk, cara Google belajar ikut berubah."
                    />
                </Reveal>

                <div className="relative mt-10 grid gap-5 lg:grid-cols-2 lg:items-stretch">
                    <ComparisonCard
                        delay={70}
                        direction="left"
                        icon="bad"
                        items={octComparison.without}
                        title="❌ SEBELUM PASANG OCT"
                    />
                    <ComparisonCard
                        delay={210}
                        direction="right"
                        icon="good"
                        items={octComparison.with}
                        title="✅ SESUDAH PASANG OCT"
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
    items: { icon: string; title: string; description: string }[];
    icon: "good" | "bad";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale";
}) {
    const isGood = icon === "good";

    return (
        <Reveal
            className={`rounded-xl border p-6 sm:p-8 ${
                isGood
                    ? "border-green-500/20 bg-[#061208]"
                    : "border-red-500/20 bg-[#120606]"
            }`}
            delay={delay}
            direction={direction}
        >
            <h3 className={`text-lg font-bold sm:text-xl uppercase ${
                isGood ? "text-green-500" : "text-red-500"
            }`}>
                {title}
            </h3>
            <ul className="mt-8 grid gap-6">
                {items.map((item, index) => (
                    <li
                        className="text-sm leading-relaxed text-zinc-400 sm:text-base"
                        key={index}
                    >
                        <span className="mr-1.5">{item.icon}</span>
                        <strong className="text-zinc-100 font-semibold">{item.title}</strong>
                        <span className="mx-1.5 text-zinc-500">-</span>
                        <span>{item.description}</span>
                    </li>
                ))}
            </ul>
        </Reveal>
    );
}
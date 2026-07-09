import { ArrowRight, Check, X } from "lucide-react";

import { octComparison } from "@/data/gacf-landing";

import { CtaButton } from "./cta-button";
import { SectionHeading } from "./section-heading";
import type { TrackCta } from "./types";

interface SolutionOctSectionProps {
    onCtaClick: TrackCta;
}

export function SolutionOctSection({ onCtaClick }: SolutionOctSectionProps) {
    return (
        <section
            className="relative overflow-hidden bg-[#07070a] px-4 py-20 sm:px-6 lg:px-8"
            id="oct"
        >
            <div className="gacf-grid absolute inset-0 opacity-25" />
            <div className="mx-auto max-w-6xl">
                <SectionHeading
                    eyebrow="Offline Conversion Tracking"
                    subtitle="Tanpa data penjualan yang akurat, Google akan terus belajar dari klik. OCT bikin Google menerima sinyal closing asli dari WhatsApp atau transaksi manual."
                    title="Sebelum vs Sesudah Pasang OCT"
                />

                <div className="relative mt-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
                    <ComparisonCard
                        icon="bad"
                        items={octComparison.without}
                        title="Sebelum OCT"
                    />
                    <div className="flex items-center justify-center lg:w-12">
                        <div className="grid h-11 w-11 place-items-center rounded-lg border border-amber-300/35 bg-amber-300 text-zinc-950 shadow-[0_0_36px_rgba(251,191,36,0.2)] lg:h-12 lg:w-12">
                            <ArrowRight
                                aria-hidden="true"
                                className="h-6 w-6 rotate-90 lg:rotate-0"
                            />
                        </div>
                    </div>
                    <ComparisonCard
                        icon="good"
                        items={octComparison.with}
                        title="Sesudah OCT"
                    />
                </div>

                <div className="mt-10 text-center">
                    <CtaButton
                        className="w-full sm:w-auto"
                        href="#pricing"
                        location="solution_primary"
                        onTrack={onCtaClick}
                    >
                        Pasang Strategi OCT
                    </CtaButton>
                </div>
            </div>
        </section>
    );
}

function ComparisonCard({
    title,
    items,
    icon,
}: {
    title: string;
    items: string[];
    icon: "good" | "bad";
}) {
    const isGood = icon === "good";

    return (
        <div
            className={`rounded-lg border p-5 sm:p-6 ${
                isGood
                    ? "border-amber-300/30 bg-[linear-gradient(180deg,rgba(251,191,36,0.10),rgba(255,255,255,0.025))]"
                    : "border-red-400/20 bg-[linear-gradient(180deg,rgba(248,113,113,0.08),rgba(255,255,255,0.02))]"
            }`}
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
        </div>
    );
}

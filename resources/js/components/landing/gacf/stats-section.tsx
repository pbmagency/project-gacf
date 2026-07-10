import { coursePillars } from "@/data/gacf-landing";

import { RevealArticle } from "./reveal";

const statDirections = ["left", "up", "up", "right"] as const;

export function StatsSection() {
    return (
        <section
            className="scroll-mt-16 bg-[#09090b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="stats"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {coursePillars.map((pillar, index) => (
                        <RevealArticle
                            className="rounded-lg border border-white/10 bg-[#101014] px-5 py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/35 hover:bg-[#141418] sm:text-left"
                            delay={index * 70}
                            direction={statDirections[index]}
                            key={pillar.label}
                        >
                            <p className="font-mono text-3xl font-black leading-none text-[#ffd02a] sm:text-4xl">
                                {pillar.value}
                            </p>
                            <h3 className="mt-3 text-base font-black text-white">
                                {pillar.label}
                            </h3>
                            <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">
                                {pillar.detail}
                            </p>
                        </RevealArticle>
                    ))}
                </div>
            </div>
        </section>
    );
}

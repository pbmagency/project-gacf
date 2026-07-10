import { AlertTriangle } from "lucide-react";

import { problemPoints } from "@/data/gacf-landing";

import { Reveal, RevealListItem } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProblemSection() {
    return (
        <section
            className="relative scroll-mt-16 bg-[#0d0d11] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="problem"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-5xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Bab 1 - Akar Boncos"
                        subtitle="Sebelum mikir scale, lo harus tahu dulu data apa yang selama ini lo kasih ke Google."
                        title="Google makin pintar. Masalahnya, dia pintar dari sinyal yang salah."
                    />
                </Reveal>

                <ul className="mx-auto mt-9 grid max-w-4xl gap-0 overflow-hidden rounded-lg border border-white/10 bg-[#131317]">
                    {problemPoints.map((point, index) => (
                        <RevealListItem
                            className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 p-4 last:border-b-0 sm:p-5"
                            delay={index * 70}
                            key={point.title}
                        >
                            <span className="font-mono text-xs font-bold text-zinc-500">
                                0{index + 1}
                            </span>
                            <div className="flex gap-3">
                                <AlertTriangle
                                    aria-hidden="true"
                                    className="mt-0.5 hidden h-5 w-5 shrink-0 text-amber-300 sm:block"
                                />
                                <div>
                                    <h3 className="text-base font-black leading-7 text-white sm:text-lg">
                                        {point.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-zinc-400 sm:text-base">
                                        {point.copy}
                                    </p>
                                </div>
                            </div>
                        </RevealListItem>
                    ))}
                </ul>

                <Reveal
                    className="mx-auto mt-8 max-w-4xl rounded-lg border border-amber-300/25 bg-amber-300/[0.06] p-5 sm:p-6"
                    delay={120}
                >
                    <p className="text-lg font-black leading-8 text-white sm:text-xl">
                        Selama Google cuma dikasih makan klik kosong, dia akan
                        makin jago cari orang yang klik. Bukan orang yang beli.
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

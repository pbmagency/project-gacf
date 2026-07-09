import { AlertTriangle } from "lucide-react";

import { problemPoints } from "@/data/gacf-landing";

import { SectionHeading } from "./section-heading";

export function ProblemSection() {
    return (
        <section
            className="relative bg-[#0d0d11] px-4 py-20 sm:px-6 lg:px-8"
            id="problem"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-5xl">
                <SectionHeading
                    eyebrow="Warning"
                    subtitle="Kalau kamu masih stuck di salah satu fase ini, jangan buru-buru naikin budget dulu."
                    title="Fase Berdarah-darah Main Google Ads. Kamu Lagi di Tahap Mana?"
                />

                <ul className="mx-auto mt-9 grid max-w-4xl gap-0 overflow-hidden rounded-lg border border-white/10 bg-[#131317]">
                    {problemPoints.map((point, index) => (
                        <li
                            className="grid grid-cols-[auto_1fr] gap-4 border-b border-white/10 p-4 last:border-b-0 sm:p-5"
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
                        </li>
                    ))}
                </ul>

                <div className="mx-auto mt-8 max-w-4xl rounded-lg border border-amber-300/25 bg-amber-300/[0.06] p-5 sm:p-6">
                    <p className="text-lg font-black leading-8 text-white sm:text-xl">
                        Masalahnya bukan selalu budget kamu kurang besar. Mesin
                        Google belum kamu ajarin cara bedain mana orang iseng
                        dan mana pembeli asli.
                    </p>
                </div>
            </div>
        </section>
    );
}

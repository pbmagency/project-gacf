import { CircleDot } from "lucide-react";

import { Reveal, RevealListItem } from "./reveal";

const bleedingPhases = [
    {
        title: "Dashboard Rame, WA Sepi",
        copy: "Klik bisa ratusan, tapi yang chat serius tetap sedikit.",
    },
    {
        title: "Leads Masuk, Tapi Tukang Ghosting",
        copy: "Banyak yang nanya harga, lalu hilang pas di-follow up.",
    },
    {
        title: "Susah Di-Scale Up (Mentok)",
        copy: "Mau naikin budget takut boncos karena sumber closing belum kebaca.",
    },
];

const phaseDirections = ["left", "up", "right"] as const;

export function ProblemSection() {
    return (
        <section
            className="relative scroll-mt-16 bg-[#050506] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-[4.5rem]"
            id="problem"
        >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mx-auto max-w-7xl">
                <Reveal>
                    <div>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-red-300">
                            Warning!
                        </p>
                        <h2 className="mt-3 max-w-6xl text-3xl font-black uppercase leading-[1.02] text-white sm:text-4xl lg:text-[3.35rem]">
                            Fase 'berdarah-darah' main Google Ads. Lo lagi di
                            tahap mana?
                        </h2>
                    </div>
                </Reveal>

                <ul className="mt-8 grid gap-3 lg:grid-cols-3 lg:gap-4">
                    {bleedingPhases.map((point, index) => (
                        <RevealListItem
                            className="rounded-lg border border-red-500/35 bg-red-950/[0.12] p-4 shadow-[0_18px_48px_rgba(127,29,29,0.08)] lg:min-h-32 lg:p-5"
                            delay={index * 70}
                            direction={phaseDirections[index]}
                            key={point.title}
                        >
                            <div className="flex items-start gap-3">
                                <CircleDot
                                    aria-hidden="true"
                                    className="mt-1 h-4 w-4 shrink-0 text-red-400"
                                />
                                <div>
                                    <h3 className="text-base font-black leading-6 text-white sm:text-lg sm:leading-7">
                                        {point.title}
                                    </h3>
                                    <p className="mt-1 text-sm leading-6 text-zinc-400 lg:text-[0.95rem]">
                                        {point.copy}
                                    </p>
                                </div>
                            </div>
                        </RevealListItem>
                    ))}
                </ul>

                <Reveal
                    className="mt-7 rounded-lg border border-red-500/30 bg-red-950/[0.14] p-4 text-center sm:p-5"
                    delay={120}
                >
                    <p className="text-base font-black leading-7 text-white">
                        Kalau lo masih stuck di salah satu fase di atas,{" "}
                        <span className="text-amber-300">
                            stop bakar budget sekarang juga.
                        </span>
                    </p>
                    <p className="mx-auto mt-2 max-w-4xl text-sm font-semibold leading-6 text-zinc-300 sm:leading-7">
                        Masalahnya bukan budget lo yang kurang gede. Mesin
                        Google belum diajarin bedain mana{" "}
                        <span className="text-amber-300">orang iseng</span>{" "}
                        dan mana{" "}
                        <span className="text-amber-300">pembeli asli</span>.
                    </p>
                </Reveal>

                <div className="mt-10 grid max-w-6xl gap-6 lg:grid-cols-[0.42fr_0.58fr] lg:gap-10">
                    <Reveal className="lg:pt-1" delay={160} direction="left">
                        <h3 className="text-2xl font-black uppercase leading-tight text-white sm:text-3xl lg:text-[2.35rem]">
                            Terus, salahnya di mana kok boncos terus?
                        </h3>
                    </Reveal>

                    <div className="grid gap-4 text-base font-medium leading-7 text-zinc-300">
                        <Reveal delay={200} direction="right">
                            <p>
                                Selama ini, banyak campaign cuma ngasih tugas ke
                                Google:{" "}
                                <span className="font-black text-amber-300">
                                    cariin orang yang mau ngeklik tombol WA.
                                </span>
                            </p>
                        </Reveal>
                        <Reveal delay={260} direction="right">
                            <p>
                                Makanya yang datang bisa banyak, tapi belum
                                tentu niat beli.{" "}
                                <span className="font-black text-amber-300">
                                    Buat Google, tugasnya selesai begitu ada
                                    klik.
                                </span>
                            </p>
                        </Reveal>
                        <Reveal delay={320} direction="right">
                            <p>
                                Biar iklan lebih waras, Google perlu dikasih{" "}
                                <span className="font-black text-amber-300">
                                    data penjualan asli
                                </span>
                                , bukan cuma event klik yang kelihatan bagus.
                            </p>
                        </Reveal>
                        <Reveal delay={380} direction="right">
                            <p>
                                Di GACF, ini yang dibenerin lewat{" "}
                                <span className="font-black text-amber-300">
                                    Offline Conversion Tracking (OCT)
                                </span>
                                : data closing WhatsApp/manual dikirim balik ke
                                Google, supaya mesin belajar dari pembeli asli.
                            </p>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

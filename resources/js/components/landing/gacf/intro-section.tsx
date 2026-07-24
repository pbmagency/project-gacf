import { Check } from "lucide-react";

import { mockupGacfImage } from "./assets";
import { Reveal } from "./reveal";

export function IntroSection() {
    return (
        <section className="relative overflow-hidden bg-[#07070a] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    <Reveal direction="left">
                        <p className="text-xs font-bold uppercase tracking-[0.15em] text-amber-500">
                            SOLUSI DARI EXPERT & GOOGLE PREMIER PARTNER
                        </p>
                        <h2 className="mt-4 text-3xl font-black uppercase leading-[1.1] text-white sm:text-4xl lg:text-[2.75rem]">
                            PERKENALKAN: E-COURSE GOOGLE ADS CUAN FORMULA (GACF) 2026
                        </h2>
                        
                        <p className="mt-6 text-base leading-relaxed text-zinc-400">
                            Ini bukan sekadar tutorial bahas fungsi tombol dashboard. GACF 2026 adalah Blueprint Asli yang dipakai tim Upperclicks buat ngubah "klik nyasar" jadi Real Leads & Closingan menggunakan strategi Offline Conversion Tracking (OCT).
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-zinc-400">
                            Gue rangkum semua rahasia agensi dari 0 sampai expert, khusus buat lo yang mau hasilin profit tanpa harus bakar budget buat trial & error lagi.
                        </p>

                        <ul className="mt-8 grid gap-5">
                            {[
                                {
                                    title: "Bongkar Setup OCT",
                                    desc: "Ajarin algoritma Google nyari \"Pembeli\", bukan \"Pengklik\"."
                                },
                                {
                                    title: "Full Praktek, No Teori Basi",
                                    desc: "Langsung copy-paste strategi winning campaign agensi."
                                },
                                {
                                    title: "Ga Dilepas Sendirian",
                                    desc: "Dapet fasilitas bimbingan & bedah campaign rutin."
                                }
                            ].map((item, index) => (
                                <li className="flex gap-4 text-sm sm:text-base text-zinc-300" key={index}>
                                    <span className="mt-1 shrink-0 text-amber-500">
                                        <Check className="h-5 w-5" strokeWidth={3} />
                                    </span>
                                    <div>
                                        <strong className="text-white">{item.title}:</strong>{" "}
                                        {item.desc}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <a
                                href="#pricing"
                                className="inline-block rounded-md bg-amber-400 px-8 py-4 text-sm font-bold uppercase tracking-wider text-black shadow-lg transition hover:bg-amber-500"
                            >
                                BONGKAR DETAIL MODULNYA DI SINI
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={120} direction="right" className="relative mt-10 lg:mt-0">
                        <img
                            src={mockupGacfImage}
                            alt="GACF 2026 Bundle"
                            className="mx-auto w-full max-w-[500px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                        />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
import { coursePillars } from "@/data/gacf-landing";

import { Reveal, RevealArticle } from "./reveal";

export function StatsSection() {
    return (
        <section
            className="scroll-mt-16 bg-[#09090b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="stats"
        >
            <div className="mx-auto max-w-7xl">
                <Reveal className="mx-auto mb-10 max-w-4xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">
                        Bab 3 - Bukan Teori Kosong
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                        Angle ini lahir dari ngelola campaign dan membaca data
                        beneran.
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                        GACF nggak ngajarin lo ngejar metrik yang kelihatan
                        ramai doang. Fokusnya satu: bikin Google punya sinyal
                        pembeli asli buat dipelajari.
                    </p>
                    <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-6 text-zinc-400">
                        Berdasarkan data internal dan hasil member. Hasil tiap
                        bisnis bisa berbeda tergantung niche, budget, offer,
                        eksekusi, dan kondisi market.
                    </p>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {coursePillars.map((pillar, index) => (
                        <RevealArticle
                            className="rounded-lg border border-white/10 bg-[#101014] px-5 py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:text-left"
                            delay={index * 70}
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

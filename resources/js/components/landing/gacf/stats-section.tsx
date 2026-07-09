import { coursePillars } from "@/data/gacf-landing";

export function StatsSection() {
    return (
        <section className="bg-[#09090b] px-4 py-20 sm:px-6 lg:px-8" id="stats">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto mb-10 max-w-4xl text-center">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">
                        The Number Behind The Experience
                    </p>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                        Bukti pengalaman di balik strategi Google Ads Cuan
                        Formula.
                    </h2>
                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
                        GACF dirancang dari pengalaman ngelola campaign, membaca
                        data, dan membangun sistem tracking yang tidak cuma
                        berhenti di klik.
                    </p>
                    <p className="mx-auto mt-4 max-w-3xl text-sm font-semibold leading-6 text-zinc-400">
                        Angka ini dipakai sebagai social proof pengalaman, bukan
                        janji hasil yang pasti sama untuk setiap bisnis.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {coursePillars.map((pillar) => (
                        <article
                            className="rounded-lg border border-white/10 bg-[#101014] px-5 py-5 text-center shadow-[0_16px_40px_rgba(0,0,0,0.18)] sm:text-left"
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
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { gacfLogo } from "./assets";
import { Reveal } from "./reveal";

export function FooterSection() {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050506] px-4 py-14 sm:px-6 lg:px-8">
            <div className="gacf-grid absolute inset-0 opacity-15" />

            <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <Reveal className="max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg bg-white p-1.5 shadow-[0_14px_36px_rgba(251,191,36,0.12)]">
                            <img
                                alt="GACF"
                                className="h-full w-full object-contain"
                                decoding="async"
                                height={48}
                                loading="lazy"
                                src={gacfLogo}
                                width={48}
                            />
                        </span>
                        <h2 className="text-xl font-black text-white">
                            New E-Course GACF
                        </h2>
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                        Google Ads Cuan Formula bantu business owner ngerapihin
                        alur iklan dari tracking sampai OCT, supaya Google
                        belajar dari data pembeli asli.
                    </p>
                    <p className="mt-6 border-l border-white/10 pl-4 text-xs leading-6 text-zinc-500">
                        Disclaimer: Hasil setiap peserta dapat berbeda
                        tergantung niche, budget, offer, eksekusi, dan kondisi
                        market. Materi ini edukasi praktik, bukan jaminan hasil
                        finansial tertentu.
                    </p>
                </Reveal>

                <Reveal className="text-xs text-zinc-600 lg:text-right" delay={100}>
                    <p>
                        Copyright {new Date().getFullYear()} GACF. All rights
                        reserved.
                    </p>
                </Reveal>
            </div>
        </footer>
    );
}

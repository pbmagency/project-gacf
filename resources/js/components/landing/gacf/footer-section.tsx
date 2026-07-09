import { MessageCircle } from "lucide-react";

import { gacfLogo } from "./assets";
import type { TrackCta } from "./types";

interface FooterSectionProps {
    onCtaClick: TrackCta;
}

const whatsappUrl = import.meta.env.VITE_GACF_WHATSAPP_URL || "#pricing";

export function FooterSection({ onCtaClick }: FooterSectionProps) {
    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-[#050506] px-4 py-14 sm:px-6 lg:px-8">
            <div className="gacf-grid absolute inset-0 opacity-15" />

            <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-3">
                        <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-lg bg-white p-1.5 shadow-[0_14px_36px_rgba(251,191,36,0.12)]">
                            <img
                                alt="GACF"
                                className="h-full w-full object-contain"
                                src={gacfLogo}
                            />
                        </span>
                        <h2 className="text-xl font-black text-white">
                            New E-Course GACF
                        </h2>
                    </div>
                    <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400">
                        Google Ads Cuan Formula untuk bantu business owner
                        belajar Google Ads, tracking, optimasi, dan Offline
                        Conversion Tracking dengan data yang lebih bersih.
                    </p>
                    <p className="mt-6 border-l border-white/10 pl-4 text-xs leading-6 text-zinc-500">
                        Disclaimer: Hasil setiap peserta dapat berbeda
                        tergantung niche bisnis, budget iklan, kualitas offer,
                        eksekusi, dan kondisi market. Materi ini adalah edukasi
                        dan framework praktik, bukan jaminan hasil finansial
                        tertentu.
                    </p>
                </div>

                <div className="lg:min-w-72 lg:text-right">
                    <p className="text-sm font-black uppercase tracking-[0.16em] text-amber-300">
                        Kontak
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white">
                        Butuh tanya sebelum join?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">
                        Chat tim GACF via WhatsApp.
                    </p>
                    <a
                        className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5 hover:bg-[#1fc45c]"
                        href={whatsappUrl}
                        onClick={() =>
                            onCtaClick(
                                "footer_whatsapp",
                                "WhatsApp",
                                whatsappUrl,
                            )
                        }
                    >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                    </a>
                    <p className="mt-8 text-xs text-zinc-600">
                        Copyright {new Date().getFullYear()} GACF. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

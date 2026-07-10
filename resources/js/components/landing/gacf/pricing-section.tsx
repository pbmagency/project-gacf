import {
    CheckCircle2,
    MessageCircle,
    ShieldCheck,
    ShoppingCart,
} from "lucide-react";

import { pricingIncludes } from "@/data/gacf-landing";

import { DailyCountdownTimer } from "./daily-countdown-timer";
import { Reveal, RevealListItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { PricingAction } from "./types";

interface PricingSectionProps {
    onPricingAction: PricingAction;
}

const whatsappUrl = import.meta.env.VITE_GACF_WHATSAPP_URL || "#pricing";
const checkoutUrl = import.meta.env.VITE_GACF_CHECKOUT_URL || whatsappUrl;

const offerHighlights = [
    "Bonus audit 30 titik kesalahan khusus order hari ini",
    "Garansi setup kalau dalam 3 minggu masih stuck",
    "Webinar bulanan dan komunitas aktif buat tanya expert",
];

export function PricingSection({ onPricingAction }: PricingSectionProps) {
    return (
        <section
            className="relative scroll-mt-16 overflow-hidden bg-[#101014] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="pricing"
        >
            <div className="gacf-grid absolute inset-0 opacity-20" />
            <div className="mx-auto max-w-6xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Bab Akhir - Mulai Benerin Datanya"
                        subtitle="Kalau selama ini Google belajar dari klik kosong, sekarang waktunya lo kasih sinyal yang lebih bersih."
                        title="Masuk GACF dan mulai ajari Google membaca pembeli asli."
                    />
                </Reveal>

                <div className="gacf-panel relative mt-10 overflow-hidden rounded-lg p-5 sm:p-7">
                    <div className="grid gap-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
                        <Reveal className="rounded-lg border border-white/10 bg-black/20 p-5">
                            <span className="inline-flex rounded-lg bg-amber-300 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-zinc-950">
                                Harga Promo Hari Ini
                            </span>
                            <div className="mt-6">
                                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 line-through">
                                    Rp 1.650.000
                                </p>
                                <p className="mt-2 text-4xl font-black leading-none text-white sm:text-5xl">
                                    Rp 792.000
                                </p>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    Akses alur belajar GACF, bonus, komunitas,
                                    webinar, dan garansi sesuai syarat yang
                                    berlaku.
                                </p>
                            </div>

                            <DailyCountdownTimer />

                            <div className="mt-5 grid gap-2 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                                {offerHighlights.map((item, index) => (
                                    <Reveal
                                        className="flex gap-3 text-sm leading-6 text-zinc-300"
                                        delay={index * 60}
                                        key={item}
                                    >
                                        <CheckCircle2
                                            aria-hidden="true"
                                            className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                                        />
                                        <span>{item}</span>
                                    </Reveal>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={100}>
                            <h3 className="text-xl font-black text-white">
                                Yang lo dapat:
                            </h3>
                            <ul className="mt-5 grid gap-3 rounded-lg border border-white/10 bg-black/20 p-4 sm:p-5">
                                {pricingIncludes.map((item, index) => (
                                    <RevealListItem
                                        className="flex gap-3 text-sm leading-6 text-zinc-200"
                                        delay={index * 50}
                                        key={item}
                                    >
                                        <CheckCircle2
                                            aria-hidden="true"
                                            className="mt-0.5 h-5 w-5 shrink-0 text-amber-300"
                                        />
                                        <span>{item}</span>
                                    </RevealListItem>
                                ))}
                            </ul>

                            <div className="mt-4 rounded-lg border border-white/10 bg-white/[0.04] p-4">
                                <div className="flex gap-3">
                                    <ShieldCheck
                                        aria-hidden="true"
                                        className="h-5 w-5 shrink-0 text-amber-300"
                                    />
                                    <div>
                                        <h3 className="text-sm font-black text-white">
                                            Garansi Setup Auto Campaign
                                        </h3>
                                        <p className="mt-2 text-sm leading-6 text-zinc-400">
                                            Jika dalam 3 minggu setelah praktik
                                            semua modul lo masih belum bisa
                                            setup campaign, tim Hariyanto Chung
                                            akan bantu setup Google Ads supaya
                                            alurnya jalan sesuai syarat garansi.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                <button
                                    className="gacf-cta inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-black text-zinc-950 shadow-[0_16px_40px_rgba(251,191,36,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151519]"
                                    onClick={() =>
                                        onPricingAction(
                                            "pricing_pay",
                                            "Mulai Belajar GACF",
                                            checkoutUrl,
                                        )
                                    }
                                    type="button"
                                >
                                    <ShoppingCart className="h-4 w-4" />
                                    <span>Mulai Belajar GACF</span>
                                </button>
                                <button
                                    className="gacf-cta inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#151519]"
                                    onClick={() =>
                                        onPricingAction(
                                            "pricing_whatsapp",
                                            "Tanya via WhatsApp",
                                            whatsappUrl,
                                        )
                                    }
                                    type="button"
                                >
                                    <MessageCircle className="h-4 w-4" />
                                    <span>Tanya via WhatsApp</span>
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

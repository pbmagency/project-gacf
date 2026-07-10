import { Award, CheckCircle2, Quote } from "lucide-react";

import { mentorBullets } from "@/data/gacf-landing";

import { googlePremierBadge, mentorGoogleVisitImage } from "./assets";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function MentorSection() {
    return (
        <section
            className="scroll-mt-16 bg-[#101014] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="mentor"
        >
            <div className="mx-auto grid max-w-6xl items-center gap-9 lg:grid-cols-[0.74fr_1.26fr]">
                <Reveal className="gacf-panel-muted rounded-lg p-3">
                    <div
                        className="group relative min-h-[320px] overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0f] outline-none sm:min-h-[420px]"
                        tabIndex={0}
                    >
                        <div className="gacf-grid absolute inset-0 opacity-30" />
                        <img
                            alt="Hariyanto Chung di Google Indonesia"
                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-focus:scale-[1.03]"
                            decoding="async"
                            height={900}
                            loading="lazy"
                            src={mentorGoogleVisitImage}
                            width={720}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                        <div className="absolute left-3 top-3">
                            <img
                                alt="Google Partner Premier 2026"
                                className="h-12 w-auto rounded-lg border border-white/10 bg-white object-contain"
                                decoding="async"
                                height={48}
                                loading="lazy"
                                src={googlePremierBadge}
                                width={144}
                            />
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 rounded-lg border border-white/10 bg-black/55 p-3 backdrop-blur">
                            <p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-300">
                                Mentor GACF
                            </p>
                            <p className="mt-1 text-xl font-black text-white">
                                Hariyanto Chung
                            </p>
                            <p className="mt-1 text-sm leading-5 text-zinc-300">
                                Owner agency dan Google Partner Premier.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={100}>
                    <SectionHeading
                        align="left"
                        eyebrow="Bab 5 - Mentor"
                        title="Yang dibedah bukan sekadar dashboard, tapi cara Google belajar."
                    />
                    <p className="mt-5 text-base leading-7 text-zinc-300">
                        Gua Hariyanto Chung, owner agency dan Google Partner
                        Premier. Dari pengalaman ngelola campaign dan budget
                        iklan besar, gua rangkum satu pelajaran penting: iklan
                        boncos sering bukan karena Google bodoh, tapi karena
                        sinyal yang dikasih ke Google belum nunjukin pembeli
                        asli.
                    </p>

                    <div className="mt-5 max-w-2xl rounded-lg border-l-2 border-amber-300 bg-white/[0.035] p-4">
                        <Quote
                            aria-hidden="true"
                            className="mb-2 h-4 w-4 text-amber-300"
                        />
                        <p className="text-base font-black leading-7 text-white">
                            Jangan cuma minta Google cari traffic. Ajari dia
                            mengenali siapa pembeli lo.
                        </p>
                    </div>

                    <ul className="mt-6 grid gap-2">
                        {mentorBullets.map((bullet) => (
                            <li
                                className="flex gap-3 text-sm leading-6 text-zinc-200"
                                key={bullet}
                            >
                                <CheckCircle2
                                    aria-hidden="true"
                                    className="mt-0.5 h-4 w-4 shrink-0 text-amber-300"
                                />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 inline-flex max-w-full items-start gap-3 rounded-lg border border-amber-300/25 bg-amber-300/[0.06] px-4 py-3 text-amber-100">
                        <Award
                            aria-hidden="true"
                            className="mt-0.5 h-4 w-4 shrink-0"
                        />
                        <span className="text-sm font-bold">
                            Strategi praktis Google Ads, bukan teori dashboard
                            doang.
                        </span>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

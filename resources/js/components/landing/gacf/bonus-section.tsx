import { Sparkles, type LucideIcon, Users, Video } from "lucide-react";

import { bonusItems } from "@/data/gacf-landing";

import { Reveal, RevealArticle } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
    community: Users,
    template: Sparkles,
    webinar: Video,
} satisfies Record<(typeof bonusItems)[number]["icon"], LucideIcon>;

const bonusDirections = ["left", "up", "right"] as const;

export function BonusSection() {
    return (
        <section
            className="relative scroll-mt-16 overflow-hidden bg-[#050506] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="bonus"
        >
            <div className="gacf-grid absolute inset-0 opacity-20" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />
            <div className="relative mx-auto max-w-6xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Bonus Eksklusif Member"
                        title="Biar setelah belajar, lo nggak jalan sendiri."
                    />
                </Reveal>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {bonusItems.map((item, index) => {
                        const Icon = iconMap[item.icon];

                        return (
                            <RevealArticle
                                className="group relative overflow-hidden rounded-lg border border-amber-300/20 bg-[#101014] p-5 text-center transition duration-300 hover:-translate-y-1 hover:border-amber-300/45 hover:bg-[#141418]"
                                delay={index * 70}
                                direction={bonusDirections[index]}
                                key={item.title}
                            >
                                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                                <div className="mx-auto grid h-14 w-14 place-items-center rounded-lg border border-amber-300/20 bg-amber-300/10 text-amber-300 shadow-[0_0_28px_rgba(251,191,36,0.10)]">
                                    <Icon
                                        aria-hidden="true"
                                        className="h-7 w-7"
                                    />
                                </div>
                                <h3 className="mt-5 text-lg font-black leading-tight text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-zinc-400">
                                    {item.copy}
                                </p>
                            </RevealArticle>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

import { ChevronDown } from "lucide-react";
import { useState } from "react";

import { faqs } from "@/data/gacf-landing";

import { CtaButton } from "./cta-button";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import type { TrackCta } from "./types";

interface FaqSectionProps {
    onCtaClick: TrackCta;
}

export function FaqSection({ onCtaClick }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section
            className="scroll-mt-16 bg-[#08080b] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="faq"
        >
            <div className="mx-auto max-w-4xl">
                <Reveal>
                    <SectionHeading
                        eyebrow="Penutup"
                        title="Sebelum lo masuk, ini yang perlu jelas."
                    />
                </Reveal>

                <div className="mt-10 divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10 bg-[#151519]">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <Reveal delay={index * 55} key={faq.question}>
                                <button
                                    aria-expanded={isOpen}
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-white transition hover:bg-white/[0.035]"
                                    onClick={() =>
                                        setOpenIndex(isOpen ? -1 : index)
                                    }
                                    type="button"
                                >
                                    <span className="min-w-0">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        aria-hidden="true"
                                        className={`h-5 w-5 shrink-0 text-amber-300 transition ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-out ${
                                        isOpen
                                            ? "grid-rows-[1fr] opacity-100"
                                            : "grid-rows-[0fr] opacity-0"
                                    }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-5 text-sm leading-7 text-zinc-300">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                <div className="mt-10 text-center">
                    <CtaButton
                        className="w-full sm:w-auto"
                        href="#pricing"
                        location="faq_primary"
                        onTrack={onCtaClick}
                    >
                        Mulai Benerin Data Iklan
                    </CtaButton>
                </div>
            </div>
        </section>
    );
}

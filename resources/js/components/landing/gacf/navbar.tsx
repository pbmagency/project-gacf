import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";

import { gacfLogo } from "./assets";
import type { TrackCta } from "./types";

interface NavbarProps {
    onCtaClick: TrackCta;
}

export function Navbar({ onCtaClick }: NavbarProps) {
    const handlePricingClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onCtaClick("navbar_primary", "Ambil Promo", "#pricing");

        const target = document.querySelector("#pricing");

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", "#pricing");
    };

    return (
        <header className="sticky top-0 z-40 bg-[#08080b]/95 sm:bg-[#08080b]/88 sm:backdrop-blur-xl">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
                <a
                    className="flex items-center gap-3"
                    href="#top"
                    onClick={() => onCtaClick("navbar_logo", "GACF", "#top")}
                >
                    <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-lg border border-white/10 bg-white p-1">
                        <img
                            alt="GACF"
                            className="h-full w-full object-contain"
                            decoding="async"
                            height={40}
                            src={gacfLogo}
                            width={40}
                        />
                    </span>
                    <span>
                        <span className="block text-sm font-black text-white">
                            GACF
                        </span>
                        <span className="hidden text-xs text-zinc-400 sm:block">
                            Google Ads Cuan Formula
                        </span>
                    </span>
                </a>

                <a
                    className="gacf-cta inline-flex min-h-12 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-amber-400 px-3 py-1.5 text-center font-bold text-zinc-950 shadow-[0_14px_34px_rgba(251,191,36,0.2)] transition duration-200 hover:-translate-y-0.5 hover:bg-amber-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080b] sm:min-w-[10.75rem] sm:px-4"
                    href="#pricing"
                    onClick={handlePricingClick}
                >
                    <span className="grid leading-tight">
                        <span className="text-sm font-black">
                            Ambil Promo
                        </span>
                        <span className="mt-0.5 text-[0.64rem] font-bold text-zinc-800 sm:text-[0.7rem]">
                            Rp792rb &bull; Hemat Rp858rb
                        </span>
                    </span>
                    <ArrowRight
                        aria-hidden="true"
                        className="gacf-cta-arrow h-3.5 w-3.5 shrink-0"
                    />
                </a>
            </nav>
        </header>
    );
}

import { gacfLogo } from "./assets";
import { CtaButton } from "./cta-button";
import type { TrackCta } from "./types";

interface NavbarProps {
    onCtaClick: TrackCta;
}

export function Navbar({ onCtaClick }: NavbarProps) {
    return (
        <header className="sticky top-0 z-40 bg-[#08080b]/88 backdrop-blur-xl">
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
                            src={gacfLogo}
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

                <CtaButton
                    className="min-h-10 px-4 py-2"
                    href="#pricing"
                    location="navbar_primary"
                    onTrack={onCtaClick}
                >
                    Ambil Promo
                </CtaButton>
            </nav>
        </header>
    );
}

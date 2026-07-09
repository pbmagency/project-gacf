import { ArrowRight } from "lucide-react";
import type { MouseEvent } from "react";

import type { TrackCta } from "./types";

interface CtaButtonProps {
    href: string;
    location: string;
    children: string;
    onTrack: TrackCta;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "dark";
    className?: string;
}

export function CtaButton({
    href,
    location,
    children,
    onTrack,
    onClick,
    variant = "primary",
    className = "",
}: CtaButtonProps) {
    const base =
        "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-bold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08080b]";
    const variants = {
        primary:
            "bg-amber-400 text-zinc-950 shadow-[0_16px_40px_rgba(251,191,36,0.22)] hover:-translate-y-0.5 hover:bg-amber-300",
        secondary:
            "border border-white/15 bg-white/[0.06] text-white hover:-translate-y-0.5 hover:border-amber-300/50 hover:bg-white/10",
        dark: "border border-amber-300/30 bg-zinc-950 text-amber-200 hover:-translate-y-0.5 hover:bg-zinc-900",
    };

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        onClick?.();
        onTrack(location, children, href);

        if (!href.startsWith("#")) {
            return;
        }

        const target = document.querySelector(href);

        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", href);
    };

    return (
        <a
            className={`${base} ${variants[variant]} ${className}`}
            href={href}
            onClick={handleClick}
        >
            <span>{children}</span>
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
    );
}

import { ShieldCheck, Star, UsersRound } from "lucide-react";

import { CtaButton } from "./cta-button";
import type { TrackCta } from "./types";

interface CtaClusterProps {
    onTrack: TrackCta;
    primaryLocation: string;
    className?: string;
    align?: "left" | "center";
    primaryText?: string;
    secondaryLocation?: string;
    secondaryText?: string;
    secondaryHref?: string;
}

export function TrustRow({ align = "center" }: { align?: "left" | "center" }) {
    return (
        <div
            className={`mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold text-zinc-400 ${
                align === "center" ? "justify-center" : ""
            }`}
        >
            <span className="inline-flex items-center gap-1.5 text-zinc-200">
                <span className="flex items-center gap-0.5 text-amber-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            aria-hidden="true"
                            className="h-3.5 w-3.5 fill-current"
                            key={index}
                        />
                    ))}
                </span>
                4,9 Reviews
            </span>
            <span className="hidden text-zinc-600 sm:inline">&middot;</span>
            <span className="inline-flex items-center gap-1.5">
                <UsersRound
                    aria-hidden="true"
                    className="h-4 w-4 text-amber-300"
                />
                3.500+ Member Sukses
            </span>
            <span className="hidden text-zinc-600 sm:inline">&middot;</span>
            <span className="inline-flex items-center gap-1.5">
                <ShieldCheck
                    aria-hidden="true"
                    className="h-4 w-4 text-amber-300"
                />
                Garansi Setup 100%
            </span>
        </div>
    );
}

export function CtaCluster({
    onTrack,
    primaryLocation,
    className = "",
    align = "center",
    primaryText = "Ambil Promo Sekarang",
    secondaryLocation,
    secondaryText = "Lihat Bukti Member",
    secondaryHref = "#stats",
}: CtaClusterProps) {
    return (
        <div
            className={`${className} ${
                align === "center" ? "text-center" : "text-left"
            }`}
        >
            <div
                className={`grid gap-3 sm:flex ${
                    align === "center" ? "sm:justify-center" : ""
                }`}
            >
                <CtaButton
                    className="w-full sm:w-auto"
                    href="#pricing"
                    location={primaryLocation}
                    onTrack={onTrack}
                >
                    {primaryText}
                </CtaButton>

                {secondaryLocation && (
                    <CtaButton
                        className="w-full sm:w-auto"
                        href={secondaryHref}
                        location={secondaryLocation}
                        onTrack={onTrack}
                        variant="secondary"
                    >
                        {secondaryText}
                    </CtaButton>
                )}
            </div>

            <TrustRow align={align} />
        </div>
    );
}

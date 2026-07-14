import { Award, CheckCircle2, Quote } from "lucide-react";
import { useRef } from "react";

import { mentorBullets } from "@/data/gacf-landing";

import { googlePremierBadge } from "./assets";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

// ---------------------------------------------------------------------------
// Mentor photo data — ganti src ke path storage lokal saat ready
// ---------------------------------------------------------------------------
const mentorPhotos = [
    {
        id: 1,
        src: "/storage/Profile/mentor-new/1.jpeg",
        alt: "Hariyanto Chung – Foto 1",
        caption: "Google Visit Jakarta",
    },
    {
        id: 2,
        src: "/storage/Profile/mentor-new/2.jpeg",
        alt: "Hariyanto Chung – Foto 2",
        caption: "Google Premier Summit",
    },
    {
        id: 3,
        src: "/storage/Profile/mentor-new/3.jpeg",
        alt: "Hariyanto Chung – Foto 3",
        caption: "Workshop 2025",
    },
    {
        id: 4,
        src: "/storage/Profile/mentor-new/4.jpeg",
        alt: "Hariyanto Chung – Foto 4",
        caption: "Mentoring Session",
    },
] as const;

// ---------------------------------------------------------------------------
// Photo card (shared between slider & grid)
// ---------------------------------------------------------------------------
function MentorPhotoCard({
    photo,
    priority = false,
}: {
    photo: (typeof mentorPhotos)[number];
    priority?: boolean;
}) {
    return (
        <div className="group relative h-full w-full overflow-hidden rounded-lg border border-white/10 bg-[#0b0b0f]">
            <img
                alt={photo.alt}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                decoding="async"
                height={500}
                loading={priority ? "eager" : "lazy"}
                src={photo.src}
                width={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <p className="absolute bottom-2 left-2 right-2 rounded-md bg-black/50 px-2 py-1 text-center text-xs font-semibold tracking-wide text-amber-200 backdrop-blur-sm">
                {photo.caption}
            </p>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Mobile slider
// — Critical: outer wrapper must be overflow-hidden to prevent viewport bleed
// ---------------------------------------------------------------------------
function MentorSlider() {
    const trackRef = useRef<HTMLDivElement>(null);

    const scrollTo = (dir: -1 | 1) => {
        const track = trackRef.current;
        if (!track) return;
        // scroll by the width of one card + gap
        const card = track.firstElementChild as HTMLElement | null;
        const cardW = card ? card.offsetWidth + 12 : 180;
        track.scrollBy({ left: dir * cardW, behavior: "smooth" });
    };

    return (
        <div className="lg:hidden">
            {/*
             * overflow-hidden here is the key fix:
             * it clips the flex track so it cannot push the section wider
             */}
            <div className="overflow-hidden rounded-lg py-6">
                <div
                    ref={trackRef}
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1
                               [-ms-overflow-style:none] [scrollbar-width:none]
                               [&::-webkit-scrollbar]:hidden"
                >
                    {mentorPhotos.map((photo, i) => (
                        <div
                            /*
                             * w-[calc(50%-6px)] = show ~2 cards on mobile
                             * (gap=12px, so each card = (100% - 12px) / 2)
                             * sm: show ~3 cards
                             */
                            className="w-[calc(50%-6px)] shrink-0 snap-start sm:w-[calc(33.333%-8px)]"
                            key={photo.id}
                        >
                            <div className="aspect-[3/4]">
                                <MentorPhotoCard
                                    photo={photo}
                                    priority={i < 2}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* prev / next */}
            <div className="mt-0 flex items-center justify-center gap-3">
                <button
                    aria-label="Previous photo"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
                    onClick={() => scrollTo(-1)}
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M15 19l-7-7 7-7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                <span className="text-xs text-zinc-500"></span>
                <button
                    aria-label="Next photo"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/15"
                    onClick={() => scrollTo(1)}
                    type="button"
                >
                    <svg
                        aria-hidden="true"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M9 5l7 7-7 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

// ---------------------------------------------------------------------------
// Desktop 2×3 grid — aspect-[3/4] keeps cards compact to match text column
// ---------------------------------------------------------------------------
function MentorPhotoGrid() {
    return (
        <div className="hidden grid-cols-2 gap-2 lg:grid xl:gap-3">
            {mentorPhotos.map((photo, i) => (
                <div className="aspect-[3/4]" key={photo.id}>
                    <MentorPhotoCard photo={photo} priority={i < 2} />
                </div>
            ))}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------
export function MentorSection() {
    return (
        <section
            className="scroll-mt-16 bg-[#101014] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
            id="mentor"
        >
            <div className="mx-auto max-w-6xl">
                {/*
                 * Two-column layout: text left · photos right
                 * min-w-0 on right column is essential: without it, grid children
                 * do not shrink below their intrinsic content width, causing overflow.
                 */}
                <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
                    {/* LEFT — text content */}
                    <Reveal delay={0} direction="left">
                        <SectionHeading
                            align="left"
                            eyebrow="Mentor Pengalaman"
                            title="Gua nggak cuma bedah dashboard. Gua bedah sinyal yang Google baca."
                        />

                        {/* Mobile slider (hidden on lg+) */}
                        <MentorSlider />

                        <p className="mt-5 text-base leading-7 text-zinc-300">
                            Gua Hariyanto Chung, owner agency dan Google Partner
                            Premier. Setelah ngelola banyak campaign dan budget
                            iklan besar, gua lihat pola yang sering kejadian:
                            iklannya bukan selalu jelek, tapi sinyal yang masuk
                            ke Google belum nunjukin pembeli asli.
                        </p>

                        <div className="mt-5 rounded-lg border-l-2 border-amber-300 bg-white/[0.035] p-4">
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
                                Strategi Google Ads yang dibaca dari data, bukan
                                feeling doang.
                            </span>
                        </div>

                        {/* Google Premier badge */}
                        <div className="mt-8 flex items-center gap-4">
                            <img
                                alt="Google Premier Partner 2026"
                                className="h-14 w-auto object-contain"
                                decoding="async"
                                height={56}
                                loading="lazy"
                                src={googlePremierBadge}
                                width={168}
                            />
                            <div>
                                <p className="text-sm font-black text-white">
                                    Google Premier Partner 2026
                                </p>
                                <p className="text-xs font-bold uppercase tracking-[0.12em] text-amber-300">
                                    Top 3% Agency di Indonesia
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/*
                     * RIGHT — photos
                     * min-w-0 prevents this grid cell from overflowing its column.
                     * overflow-hidden clips any descendant overflow at this boundary.
                     */}
                    <Reveal
                        className="min-w-0 overflow-hidden"
                        delay={120}
                        direction="right"
                    >
                        {/* Desktop 2×3 grid (hidden below lg) */}
                        <MentorPhotoGrid />
                    </Reveal>
                </div>
            </div>
        </section>
    );
}

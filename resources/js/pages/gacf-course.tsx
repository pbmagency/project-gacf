import { Head } from "@inertiajs/react";
import { useCallback, useEffect, useRef } from "react";

import { CurriculumSection } from "@/components/landing/gacf/curriculum-section";
import { FaqSection } from "@/components/landing/gacf/faq-section";
import { FloatingWhatsapp } from "@/components/landing/gacf/floating-whatsapp";
import { FooterSection } from "@/components/landing/gacf/footer-section";
import { HeroSection } from "@/components/landing/gacf/hero-section";
import { MentorSection } from "@/components/landing/gacf/mentor-section";
import { Navbar } from "@/components/landing/gacf/navbar";
import { PricingSection } from "@/components/landing/gacf/pricing-section";
import { ProblemSection } from "@/components/landing/gacf/problem-section";
import { SolutionOctSection } from "@/components/landing/gacf/solution-oct-section";
import { StatsSection } from "@/components/landing/gacf/stats-section";
import { TestimonialsSection } from "@/components/landing/gacf/testimonials-section";
import type { PricingAction, TrackCta } from "@/components/landing/gacf/types";
import { generateEventId, useAnalytics } from "@/hooks/use-analytics";
import { useDwellTime } from "@/hooks/use-dwell-time";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { useSectionTracking } from "@/hooks/use-section-tracking";

if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
}

const price = Number(import.meta.env.VITE_COURSE_PRICE || 792000);
type MetaPixel = (
    command: "track",
    eventName: string,
    payload?: Record<string, unknown>,
    options?: { eventID?: string },
) => void;

export default function GacfCourse() {
    const {
        trackVisit,
        trackCTA,
        trackConversion,
        trackInitiateCheckout,
        trackLead,
    } = useAnalytics();
    const hasTrackedVisit = useRef(false);

    useScrollTracking();
    useDwellTime();
    useSectionTracking();

    useEffect(() => {
        if (hasTrackedVisit.current) {
            return;
        }

        hasTrackedVisit.current = true;
        trackVisit();
    }, [trackVisit]);

    const handleCtaClick = useCallback<TrackCta>(
        (location, text, destination) => {
            trackCTA(location, text, destination);
        },
        [trackCTA],
    );

    const handlePricingAction = useCallback<PricingAction>(
        (location, text, destination) => {
            const eventId = generateEventId();
            const pixelPayload = {
                content_name: "GACF 2026",
                content_category: "E-Course",
                value: price,
                currency: "IDR",
            };

            const fbq =
                typeof window !== "undefined"
                    ? (window as Window & { fbq?: MetaPixel }).fbq
                    : undefined;

            if (typeof fbq === "function") {
                fbq("track", "AddToCart", pixelPayload, {
                    eventID: eventId,
                });
            }

            trackCTA(location, text, destination, "AddToCart", eventId, {
                fireBrowserPixel: false,
            });
            trackInitiateCheckout({
                button_text: text,
                destination,
                event_id: eventId,
                value: price,
                currency: "IDR",
            });
            trackLead("gacf-pricing-action", {
                ...pixelPayload,
                product_id: "gacf-2026",
                button_text: text,
                destination,
                event_id: eventId,
                skip_browser_pixel: true,
            });
            trackConversion("gacf_add_to_cart", {
                ...pixelPayload,
                button_text: text,
                destination,
                event_id: eventId,
                meta_event: "AddToCart",
            });

            window.setTimeout(() => {
                if (destination.startsWith("#")) {
                    document.querySelector(destination)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                    return;
                }

                window.location.href = destination;
            }, 150);
        },
        [trackCTA, trackConversion, trackInitiateCheckout, trackLead],
    );

    return (
        <>
            <Head>
                <title>New E-Course GACF 2026 | Google Ads Cuan Formula</title>
                <meta
                    name="description"
                    content="Google Ads Cuan Formula ngajarin alur tracking sampai Offline Conversion Tracking supaya Google belajar dari pembeli asli, bukan klik kosong."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    property="og:title"
                    content="New E-Course GACF 2026 | Google Ads Cuan Formula"
                />
                <meta
                    property="og:description"
                    content="Strategi Google Ads + OCT buat benerin sinyal campaign: dari klik, tracking, optimasi, sampai data closing dikirim balik ke Google."
                />
                <meta property="og:type" content="website" />
            </Head>

            <div className="gacf-page min-h-screen overflow-x-clip font-sans text-white antialiased">
                <Navbar onCtaClick={handleCtaClick} />
                <main>
                    <HeroSection onCtaClick={handleCtaClick} />
                    <ProblemSection />
                    <SolutionOctSection onCtaClick={handleCtaClick} />
                    <StatsSection />
                    <TestimonialsSection onCtaClick={handleCtaClick} />
                    <MentorSection />
                    <CurriculumSection onCtaClick={handleCtaClick} />
                    <PricingSection onPricingAction={handlePricingAction} />
                    <FaqSection onCtaClick={handleCtaClick} />
                </main>
                <FooterSection onCtaClick={handleCtaClick} />
                <FloatingWhatsapp onCtaClick={handleCtaClick} />
            </div>
        </>
    );
}

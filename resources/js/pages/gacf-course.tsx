import { Head } from "@inertiajs/react";
import { useCallback, useEffect, useRef } from "react";

import { BonusSection } from "@/components/landing/gacf/bonus-section";
import { CurriculumSection } from "@/components/landing/gacf/curriculum-section";
import { FaqSection } from "@/components/landing/gacf/faq-section";
import { FooterSection } from "@/components/landing/gacf/footer-section";
import { HeroSection } from "@/components/landing/gacf/hero-section";
import { MentorSection } from "@/components/landing/gacf/mentor-section";
import { Navbar } from "@/components/landing/gacf/navbar";
import { PricingSection } from "@/components/landing/gacf/pricing-section";
import { ProblemSection } from "@/components/landing/gacf/problem-section";
import { SolutionOctSection } from "@/components/landing/gacf/solution-oct-section";
import { StatsSection } from "@/components/landing/gacf/stats-section";
import { TestimonialsSection } from "@/components/landing/gacf/testimonials-section";
import type { OrderFormTrack, TrackCta } from "@/components/landing/gacf/types";
import { generateEventId, useAnalytics } from "@/hooks/use-analytics";
import { useDwellTime } from "@/hooks/use-dwell-time";
import { useScrollTracking } from "@/hooks/use-scroll-tracking";
import { useSectionTracking } from "@/hooks/use-section-tracking";
import { IntroSection } from "@/components/landing/gacf/intro-section";
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
    const { trackVisit, trackCTA, trackInitiateCheckout, trackLead } =
        useAnalytics();
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

    const trackOrderFormStart = useCallback<OrderFormTrack>(
        (location, text, destination) => {
            const eventId = generateEventId();

            trackCTA(location, text, destination);
            trackInitiateCheckout({
                button_text: text,
                destination,
                event_id: eventId,
                location,
                product_id: "gacf-2026",
                value: price,
                currency: "IDR",
            });
        },
        [trackCTA, trackInitiateCheckout],
    );

    const trackOrderFormSubmit = useCallback<OrderFormTrack>(
        (location, text, destination) => {
            const eventId = generateEventId();
            const productPayload = {
                content_name: "GACF 2026",
                content_category: "E-Course",
                product_id: "gacf-2026",
                value: price,
                currency: "IDR",
            };

            // Browser-side Meta Pixel Lead (fired once here)
            if (typeof window.fbq === "function") {
                (window as Window & { fbq?: MetaPixel }).fbq?.(
                    "track",
                    "Lead",
                    {},
                    { eventID: eventId },
                );
            }

            // Internal CTA click analytics (no browser pixel, used by Labs dashboard)
            trackCTA(location, text, destination, "Lead", eventId, {
                fireBrowserPixel: false,
            });

            // Server-side CAPI Lead via backend (dedup via same eventId)
            trackLead("order-online-form-submit", {
                ...productPayload,
                button_text: text,
                destination,
                event_id: eventId,
                location,
                skip_browser_pixel: true,
            });

            // Push ke GTM dataLayer → GA4 conversion tag (event: generate_lead)
            // if (
            //     typeof window !== "undefined" &&
            //     Array.isArray((window as Window & { dataLayer?: unknown[] }).dataLayer)
            // ) {
            //     (window as Window & { dataLayer?: unknown[] }).dataLayer!.push({
            //         event: "generate_lead",
            //         form_location: location,
            //         form_text: text,
            //         product_id: "gacf-2026",
            //         value: price,
            //         currency: "IDR",
            //     });
            // }
        },
        [trackCTA, trackLead],
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
                    <IntroSection/>
                    <StatsSection />
                    <TestimonialsSection onCtaClick={handleCtaClick} />
                    <MentorSection />
                    <CurriculumSection onCtaClick={handleCtaClick} />
                    <BonusSection />
                    <PricingSection
                        onOrderFormStart={trackOrderFormStart}
                        onOrderFormSubmit={trackOrderFormSubmit}
                    />
                    <FaqSection onCtaClick={handleCtaClick} />
                </main>
                <FooterSection />
            </div>
        </>
    );
}

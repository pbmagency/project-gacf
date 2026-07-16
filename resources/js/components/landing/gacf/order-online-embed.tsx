import { useEffect, useRef, useState } from "react";

import type { OrderFormTrack } from "./types";

const orderOnlineFormId = "oo-embed-form-gacf-2026-ref-pbm-878";
const orderOnlineRedirectUrl = "https://dimancy.orderonline.id";
const orderOnlineAccountId = "5e93168a84d0731f526c543e";
const orderOnlineProductId = "6a55c19a6c3395434f0baf8d";
const orderOnlineVariantId = "6a55c19a6c3395434f0baf8e";

const loaderCss = `
.ooef-loader{visibility:hidden;opacity:0;position:absolute;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;flex-direction:column;animation:ooLoadingIn 10s ease;-webkit-animation:ooLoadingIn 10s ease;animation-fill-mode:forwards;overflow:hidden}
@keyframes ooLoadingIn{0%{visibility:hidden;opacity:0}20%{visibility:visible;opacity:0}100%{visibility:visible;opacity:1}}
@-webkit-keyframes ooLoadingIn{0%{visibility:hidden;opacity:0}20%{visibility:visible;opacity:0}100%{visibility:visible;opacity:1}}
.ooef-loader>div,.ooef-loader>div:after{border-radius:50%;width:2.5rem;height:2.5rem}
.ooef-loader>div{font-size:10px;position:relative;text-indent:-9999em;border:.25rem solid #f5f5f5;border-left:.25rem solid #55c4cf;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);-webkit-animation:ooLoading 1.1s infinite linear;animation:ooLoading 1.1s infinite linear}
.ooef-loader.error>div{border-left:.25rem solid #ff4500;animation-duration:5s}
@-webkit-keyframes ooLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}
@keyframes ooLoading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}
`;

type OrderOnlineQueue = unknown[][];

type OrderOnlineFunction = ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    loaded?: boolean;
    push?: OrderOnlineFunction;
    queue: OrderOnlineQueue;
    version?: string;
};

type OrderOnlineWindow = Window & {
    _ooe?: OrderOnlineFunction;
    jQuery?: unknown;
    ooe?: OrderOnlineFunction;
};

function appendScript(src: string, id: string, onLoad?: () => void) {
    const existingScript = document.getElementById(
        id,
    ) as HTMLScriptElement | null;

    if (existingScript) {
        if (!onLoad) {
            return;
        }

        if (existingScript.dataset.loaded === "true") {
            onLoad();
            return;
        }

        existingScript.addEventListener("load", onLoad, { once: true });
        return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.id = id;
    script.src = src;
    script.addEventListener(
        "load",
        () => {
            script.dataset.loaded = "true";
            onLoad?.();
        },
        { once: true },
    );

    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(script, firstScript);
}

function initOrderOnlineQueue(windowRef: OrderOnlineWindow) {
    if (windowRef.ooe) {
        return;
    }

    const ooe = function (...args: unknown[]) {
        if (ooe.callMethod) {
            ooe.callMethod(...args);
            return;
        }

        ooe.queue.push(args);
    } as OrderOnlineFunction;

    if (!windowRef._ooe) {
        windowRef._ooe = ooe;
    }

    ooe.push = ooe;
    ooe.loaded = true;
    ooe.version = "8.0.2";
    ooe.queue = [];
    windowRef.ooe = ooe;
}

function logOrderOnlineError(error: unknown) {
    const normalizedError =
        error instanceof Error ? error : new Error(String(error));
    const payload = JSON.stringify({
        stack: normalizedError.stack,
        url: document.location.href,
    });
    const params = `message=${encodeURIComponent(
        normalizedError.name,
    )}&payload=${encodeURIComponent(payload)}&type=embed&level=error`;

    const request = new XMLHttpRequest();
    request.open("POST", "https://api.orderonline.id/log", true);
    request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded",
    );
    request.send(params);
}

function initOrderOnlineEmbed() {
    const form = document.getElementById(
        orderOnlineFormId,
    ) as HTMLFormElement | null;

    if (!form || form.dataset.ooEmbedInitialized === "true") {
        return;
    }

    try {
        const windowRef = window as OrderOnlineWindow;

        initOrderOnlineQueue(windowRef);
        windowRef.ooe?.("setup", "redirect", orderOnlineRedirectUrl);
        windowRef.ooe?.(
            "init",
            orderOnlineAccountId,
            orderOnlineProductId,
            orderOnlineVariantId,
            orderOnlineFormId,
            {
                action: "Klik untuk pemesanan",
                mode: "page",
                title: "Form Pemesanan",
                triggerGtm: true,
                triggerPixel: false,
            },
        );

        const loadEmbedScript = () => {
            appendScript(
                "https://cdn.orderonline.id/js/embed-v2-slim.min.js?v=8.0.2",
                "oo-embed-js",
            );
        };

        if (!windowRef.jQuery) {
            appendScript(
                "https://cdn.orderonline.id/js/vendor/jquery.min.js",
                "oo-embed-jquery",
                loadEmbedScript,
            );
        } else {
            loadEmbedScript();
        }

        form.dataset.ooEmbedInitialized = "true";
    } catch (error) {
        logOrderOnlineError(error);
        form.querySelector(".ooef-loader")?.classList.add("error");
    }
}

interface OrderOnlineEmbedProps {
    onFormStart?: OrderFormTrack;
    onFormSubmit?: OrderFormTrack;
}

export function OrderOnlineEmbed({
    onFormStart,
    onFormSubmit,
}: OrderOnlineEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [shouldLoadEmbed, setShouldLoadEmbed] = useState(false);

    useEffect(() => {
        if (shouldLoadEmbed || typeof window === "undefined") {
            return;
        }

        const node = containerRef.current;

        if (!node || !("IntersectionObserver" in window)) {
            const timeoutId = window.setTimeout(
                () => setShouldLoadEmbed(true),
                2500,
            );

            return () => window.clearTimeout(timeoutId);
        }

        const loadEmbed = () => setShouldLoadEmbed(true);
        const loadFromHash = () => {
            if (
                window.location.hash === "#pricing" ||
                window.location.hash === "#order-form"
            ) {
                loadEmbed();
            }
        };

        loadFromHash();

        if (shouldLoadEmbed) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry?.isIntersecting) {
                    loadEmbed();
                    observer.disconnect();
                }
            },
            {
                rootMargin: "900px 0px",
                threshold: 0.01,
            },
        );

        observer.observe(node);
        window.addEventListener("hashchange", loadFromHash);

        return () => {
            observer.disconnect();
            window.removeEventListener("hashchange", loadFromHash);
        };
    }, [shouldLoadEmbed]);

    useEffect(() => {
        if (!shouldLoadEmbed) {
            return;
        }

        initOrderOnlineEmbed();

        const form = document.getElementById(orderOnlineFormId);

        if (!form) {
            return;
        }

        let hasStarted = false;
        let hasSubmitted = false;

        const trackStart = () => {
            if (hasStarted) {
                return;
            }

            hasStarted = true;
            onFormStart?.(
                "pricing_order_form_start",
                "Mulai Isi Form Pemesanan",
                "#order-form",
            );
        };

        const trackSubmit = () => {
            trackStart();

            if (hasSubmitted) {
                return;
            }

            hasSubmitted = true;
            onFormSubmit?.(
                "pricing_order_form_submit",
                "Kirim Form Pemesanan",
                "#order-form",
            );
        };

        form.addEventListener("focusin", trackStart, true);
        form.addEventListener("input", trackStart, true);
        form.addEventListener("change", trackStart, true);
        form.addEventListener("submit", trackSubmit, true);

        return () => {
            form.removeEventListener("focusin", trackStart, true);
            form.removeEventListener("input", trackStart, true);
            form.removeEventListener("change", trackStart, true);
            form.removeEventListener("submit", trackSubmit, true);
        };
    }, [onFormStart, onFormSubmit, shouldLoadEmbed]);

    return (
        <div
            className="scroll-mt-28 rounded-lg border border-amber-300/20 bg-white p-2 text-zinc-950 shadow-[0_22px_70px_rgba(0,0,0,0.24)] sm:p-3"
            id="order-form"
            ref={containerRef}
        >
            <div className="ooef">
                <form
                    className="orderonline-embed-form relative min-h-[32rem] overflow-hidden rounded-md bg-white"
                    data-origin="orderonline"
                    data-product-id={orderOnlineProductId}
                    data-product-slug="gacf-2026-ref-pbm"
                    data-username="dimancy"
                    id={orderOnlineFormId}
                >
                    <div className="ooef-loader">
                        <style>{loaderCss}</style>
                        <div aria-live="polite" role="status">
                            <div>Loading...</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

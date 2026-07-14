import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { lazy, Suspense } from "react";
import { createRoot, type Root } from "react-dom/client";
import { initializeTheme } from "@/hooks/use-appearance";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const AppLayout = lazy(() => import("@/layouts/app-layout"));
const AuthLayout = lazy(() => import("@/layouts/auth-layout"));
const SettingsLayout = lazy(() => import("@/layouts/settings/layout"));
const AppProviders = lazy(() => import("@/components/app-providers"));

declare global {
    interface Window {
        __inertiaReactRoot?: Root;
    }
}

function shouldWrapWithAppProviders(componentName: string) {
    return componentName !== "welcome" && componentName !== "gacf-course";
}

createInertiaApp({
    title: (title) => (title ? `${title}` : appName),
    layout: (name) => {
        switch (true) {
            case name.startsWith("auth/"):
                return AuthLayout;
            case name.startsWith("settings/"):
                return [AppLayout, SettingsLayout];
            default:
                return null;
        }
    },
    strictMode: true,
    setup({ el, App, props }) {
        if (!el) {
            return;
        }

        const app = <App {...props} />;
        const wrappedApp = shouldWrapWithAppProviders(
            props.initialPage.component,
        ) ? (
            <Suspense fallback={null}>
                <AppProviders>{app}</AppProviders>
            </Suspense>
        ) : (
            <Suspense fallback={null}>{app}</Suspense>
        );

        if (!window.__inertiaReactRoot) {
            el.replaceChildren();
            window.__inertiaReactRoot = createRoot(el);
        }

        window.__inertiaReactRoot.render(wrappedApp);
    },
    progress: {
        color: "#4B5563",
    },
});

// This will set light / dark mode on load...
initializeTheme();

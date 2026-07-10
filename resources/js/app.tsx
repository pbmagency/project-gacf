import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { lazy, Suspense } from 'react';
import { initializeTheme } from '@/hooks/use-appearance';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const AppLayout = lazy(() => import('@/layouts/app-layout'));
const AuthLayout = lazy(() => import('@/layouts/auth-layout'));
const SettingsLayout = lazy(() => import('@/layouts/settings/layout'));
const AppProviders = lazy(() => import('@/components/app-providers'));

function getInitialComponentName() {
    if (typeof document === 'undefined') {
        return '';
    }

    const pageElement = document.querySelector<HTMLElement>('[data-page]');
    const pageJson =
        pageElement?.getAttribute('data-page') || pageElement?.textContent;

    if (!pageJson) {
        return '';
    }

    try {
        const page = JSON.parse(pageJson) as { component?: string };

        return page.component || '';
    } catch {
        return '';
    }
}

function needsAppProviders() {
    const componentName = getInitialComponentName();

    return componentName !== 'welcome' && componentName !== 'gacf-course';
}

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    layout: (name) => {
        switch (true) {
            case name === 'welcome':
            case name === 'gacf-course':
                return undefined;
            case name.startsWith('admin/'):
                return undefined;
            case name.startsWith('auth/'):
                return AuthLayout;
            case name.startsWith('settings/'):
                return [AppLayout, SettingsLayout];
            default:
                return AppLayout;
        }
    },
    strictMode: true,
    withApp(app) {
        if (!needsAppProviders()) {
            return <Suspense fallback={null}>{app}</Suspense>;
        }

        return (
            <Suspense fallback={null}>
                <AppProviders>{app}</AppProviders>
            </Suspense>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on load...
initializeTheme();

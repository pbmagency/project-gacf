<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @if (config('services.gtm.id') || config('services.ga4.measurement_id') || config('services.clarity.id') || !empty(config('services.meta.pixel_ids', [])))
        <script>
            window.__gacfLoadWhenIdle = window.__gacfLoadWhenIdle || function(callback) {
                var hasRun = false;
                var events = ['pointerdown', 'keydown', 'touchstart', 'scroll'];

                var cleanup = function() {
                    events.forEach(function(eventName) {
                        window.removeEventListener(eventName, run, {
                            capture: true
                        });
                    });
                };

                var run = function() {
                    if (hasRun) {
                        return;
                    }

                    hasRun = true;
                    cleanup();

                    if ('requestIdleCallback' in window) {
                        window.requestIdleCallback(callback, {
                            timeout: 3500
                        });
                        return;
                    }

                    window.setTimeout(callback, 1400);
                };

                events.forEach(function(eventName) {
                    window.addEventListener(eventName, run, {
                        capture: true,
                        once: true,
                        passive: true
                    });
                });

                if (document.readyState === 'complete') {
                    window.setTimeout(run, 8000);
                    return;
                }

                window.addEventListener('load', function() {
                    window.setTimeout(run, 8000);
                }, {
                    once: true
                });
            };
        </script>
    @endif

    @if (config('services.gtm.id'))
        <!-- Google Tag Manager -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w.__gacfLoadWhenIdle(function() {
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                });
            })(window, document, 'script', 'dataLayer', '{{ config('services.gtm.id') }}');
        </script>
        <!-- End Google Tag Manager -->
    @endif

    @if (config('services.ga4.measurement_id'))
        <!-- Google tag (gtag.js) -->
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', '{{ config('services.ga4.measurement_id') }}');
            window.__gacfLoadWhenIdle(function() {
                var script = document.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtag/js?id={{ config('services.ga4.measurement_id') }}';
                document.head.appendChild(script);
            });
        </script>
    @endif

    {{-- Fonts --}}
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
        rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap"
            rel="stylesheet">
    </noscript>

    {{-- Microsoft Clarity --}}
    @if (config('services.clarity.id'))
        <script type="text/javascript">
            (function(c, l, a, r, i, t, y) {
                c[a] = c[a] || function() {
                    (c[a].q = c[a].q || []).push(arguments)
                };
                c.__gacfLoadWhenIdle(function() {
                    t = l.createElement(r);
                    t.async = 1;
                    t.src = "https://www.clarity.ms/tag/" + i;
                    y = l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t, y);
                });
            })(window, document, "clarity", "script", "{{ config('services.clarity.id') }}");
        </script>
    @endif

    @php($metaPixelIds = config('services.meta.pixel_ids', []))

    @if (!empty($metaPixelIds))
        <!-- Meta Pixel Code -->
        <script>
            ! function(f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function() {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                f.__gacfLoadWhenIdle(function() {
                    t = b.createElement(e);
                    t.async = !0;
                    t.src = v;
                    s = b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t, s)
                });
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            @foreach ($metaPixelIds as $pixelId)
                fbq('init', '{{ $pixelId }}');
            @endforeach
        </script>

        <!-- End Meta Pixel Code -->
    @endif

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.tsx'])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @if (config('services.gtm.id'))
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id={{ config('services.gtm.id') }}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endif

    @if (!empty($metaPixelIds))
        <noscript>
            @foreach ($metaPixelIds as $pixelId)
                <img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id={{ $pixelId }}&ev=PageView&noscript=1" />
            @endforeach
        </noscript>
    @endif

    @inertia
</body>

</html>

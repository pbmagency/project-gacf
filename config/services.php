<?php

$metaPixelIds = env('META_PIXEL_IDS') ?: env('META_PIXEL_ID', env('VITE_META_PIXEL_ID', ''));

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'meta' => [
        'pixel_id'     => env('META_PIXEL_ID', env('VITE_META_PIXEL_ID', '')),
        'pixel_ids'    => array_values(array_filter(array_map('trim', explode(',', $metaPixelIds)))),
        'access_token' => env('META_ACCESS_TOKEN', ''),
    ],

    'clarity' => [
        'id' => env('VITE_CLARITY_ID', ''),
    ],

    'gtm' => [
        'id' => env('GTM_ID', env('VITE_GTM_ID', '')),
    ],

    'ga4' => [
        'measurement_id' => env('GA4_MEASUREMENT_ID', env('VITE_GA4_MEASUREMENT_ID', '')),
    ],

];

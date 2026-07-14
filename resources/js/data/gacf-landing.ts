export const octComparison = {
    without: [
        "Google cuma lihat klik, form, atau tombol WhatsApp",
        "Closing chat/manual berhenti di luar dashboard",
        "Campaign makin pintar cari pengklik, bukan pembeli",
    ],
    with: [
        "Data closing WhatsApp/manual dikirim balik ke Google",
        "Google mulai belajar dari pembeli nyata",
        "Optimasi dan scale jadi lebih masuk akal",
    ],
};

export const coursePillars = [
    {
        value: "3.500+",
        label: "Business Owners",
        detail: "Dibantu belajar Google Ads berbasis data",
    },
    {
        value: "45M+",
        label: "Total Ad Spend",
        detail: "Budget Google Ads yang pernah dikelola",
    },
    {
        value: "85X",
        label: "Rata-rata ROAS",
        detail: "Peningkatan dalam 90 hari pertama",
    },
    {
        value: "87%",
        label: "Success Rate",
        detail: "Member capai target closing",
    },
];

export interface TestimonialItem {
    title: string;
    type: "video" | "image";
    description: string;
    embedSrc?: string;
    mediaSrc?: string;
    posterPosition?: string;
    posterSrc?: string;
    isPublished: boolean;
}

export const testimonialItems: TestimonialItem[] = [
    {
        title: "Pak Adi Member GACF",
        type: "video",
        description:
            "Pak Adi berhasil menemukan winning campaign setelah belajar di E-course GACF. Hasilnya ROAS hingga 10x.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/0d7c3c25-cdd0-4764-bc26-4b0a213a8b6a?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/0d7c3c25-cdd0-4764-bc26-4b0a213a8b6a/thumbnail.jpg",
        isPublished: true,
    },
    {
        title: "Mas Reno Member GACF",
        type: "video",
        description:
            "Peningkatan 70% Potensial Leads setelah belajar E-Course GACF.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/9545f93b-3f1e-4974-96dc-19d08c2024af?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/9545f93b-3f1e-4974-96dc-19d08c2024af/thumbnail.jpg",
        isPublished: true,
    },
    {
        title: "Bu Yulie Member GACF",
        type: "video",
        description:
            "Dari semua kursus, menurut bu Yuli ini kursus yang paling memuaskan",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/bb50e777-cdbe-4fc1-b662-685ee30daad4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/bb50e777-cdbe-4fc1-b662-685ee30daad4/thumbnail.jpg",
        posterPosition: "center",
        isPublished: true,
    },
    {
        title: "Pak Agus Member GACF",
        type: "video",
        description:
            "CTR naik, konversi juga naik setelah belajar di E-course GACF.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/0a8f19a3-c4c0-4bcb-a28e-8c7058db9738?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/0a8f19a3-c4c0-4bcb-a28e-8c7058db9738/thumbnail.jpg",
        isPublished: true,
    },
    {
        title: "Testimoni Member GACF",
        type: "video",
        description:
            "Pak x berhasil mendapatkan klien dari hasil belajar di E-course GACF",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/dde65514-a908-403d-bd2f-31790bd4bb0e?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/dde65514-a908-403d-bd2f-31790bd4bb0e/thumbnail.jpg",
        isPublished: true,
    },
];

export const imageTestimonials = [
    {
        imageKey: "bukTari",
        name: "Buk Tari",
        quote: "Dari ibu rumah tangga yang gaptek, sekarang bisa menghasilkan omset jutaan rupiah dari bisnis sendiri berkat GACF.",
        role: "Ibu Rumah Tangga",
    },
    {
        imageKey: "pakMahfuddin",
        name: "Pak Mahfuddin",
        quote: "Iklan saya muncul di halaman utama Google. Konversi naik berkali-kali lipat setelah ikut GACF!",
        role: "Business Owner",
    },
    {
        imageKey: "pakSalim",
        name: "Pak Salim",
        quote: "Satu-satunya e-course yang gamblang open dashboard dan bebas bertanya kapan saja.",
        role: "Entrepreneur",
    },
    {
        imageKey: "pakSandi",
        name: "Pak Sandi",
        quote: "Dari gaptek sampai sekarang expert di Google Ads. Gampang dipahami dan dipraktekkan!",
        role: "UMKM Owner",
    },
] as const;

export const mentorBullets = [
    "Owner agency dan Google Partner Premier",
    "Baca iklan dari data, bukan feeling dashboard",
    "Fokus ngajarin Google mengenali pembeli asli",
];

export const curriculumModules = [
    {
        title: "Fundamental Anti-Boncos",
        copy: "Benerin pondasi biar dari awal nggak asal bakar budget.",
    },
    {
        title: "Setup Intel Website (GTM & GA4)",
        copy: "Pasang GTM dan GA4 supaya gerak pengunjung kebaca rapi.",
    },
    {
        title: "Racik Campaign Search Yang Nendang",
        copy: "Riset keyword dan struktur campaign buat orang yang lebih siap beli.",
    },
    {
        title: "Bedah & Optimasi Iklan",
        copy: "Baca data, cut yang boncos, dan bikin campaign lebih efisien.",
    },
    {
        title: "Remarketing Anti-Ghosting",
        copy: "Kejar lagi orang yang sudah klik atau chat tapi belum beli.",
    },
    {
        title: "Scale-Up Pakai PMax & Demand Gen",
        copy: "Scale pakai PMax dan Demand Gen tanpa asal naikin budget.",
    },
    {
        title: "Upload Offline Conversion (OCT)",
        copy: "Upload data real buyer supaya Google belajar dari pembeli asli.",
    },
    {
        title: "Analisa Keyword Winning Google",
        copy: "Cari keyword yang punya peluang profit dari data yang lebih nyata.",
    },
];

export const bonusItems = [
    {
        title: "Komunitas Aktif & Supportif",
        copy: "Tempat tanya expert dan update strategi terbaru.",
        icon: "community",
    },
    {
        title: "Webinar Rutin Tiap Bulan",
        copy: "Bahas update Google, bedah akun, dan strategi yang works.",
        icon: "webinar",
    },
    {
        title: "1.000+ Winning Ads Template",
        copy: "Template iklan Google & Meta yang siap dipakai.",
        icon: "template",
    },
] as const;

export const pricingIncludes = [
    "Akses 8 modul e-course Google Ads",
    "Modul dari fundamental, tracking, Search, optimasi, remarketing, PMax, OCT, sampai keyword winning",
    "Akses komunitas aktif dan bebas tanya expert",
    "Webinar rutin tiap bulan",
    "1.000+ Winning Ads Template gratis",
    "Garansi Setup Auto Campaign sesuai syarat",
    "Bonus audit 30 titik kesalahan khusus order hari ini",
];

export const faqs = [
    {
        question: "E-course ini online atau offline?",
        answer: "Online. Lo bisa akses materi dari mana saja, lalu tetap dapat support komunitas dan webinar rutin sesuai jadwal tim GACF.",
    },
    {
        question: "Berapa modul yang didapatkan di e-course ini?",
        answer: "Lo dapat 8 modul: Fundamental Anti-Boncos, Setup Intel Website GTM & GA4, Racik Campaign Search, Optimasi Iklan, Remarketing, PMax & Demand Gen, OCT, dan Analisa Keyword Winning Google.",
    },
    {
        question: "Gua masih gaptek dan baru mau mulai Google Ads, bisa ikut?",
        answer: "Bisa. Materinya dibuat step-by-step untuk pemilik bisnis yang ingin mulai lebih rapi dan nggak asal bakar budget dari awal.",
    },
    {
        question: "Kalau iklan gua sudah pernah boncos, masih cocok?",
        answer: "Cocok. GACF justru ngebahas akar masalah yang sering bikin boncos: tracking berantakan, dashboard nggak nyambung ke penjualan asli, dan optimasi yang masih nebak-nebak.",
    },
    {
        question: "Apa itu OCT dan kenapa penting?",
        answer: "OCT atau Offline Conversion Tracking adalah cara ngirim data transaksi offline/manual seperti WhatsApp balik ke Google, supaya algoritma belajar dari pembeli asli, bukan cuma dari orang yang klik.",
    },
    {
        question: "ROAS atau omzet gua pasti naik setelah ikut?",
        answer: "Nggak ada janji hasil pasti. Hasil tiap bisnis bisa beda tergantung niche, budget, offer, eksekusi, kualitas data, dan kondisi market. GACF bantu lo punya sistem belajar dan optimasi yang lebih rapi.",
    },
    {
        question: "Apa aja bonus yang didapat?",
        answer: "Lo dapat 1.000+ Winning Ads Template, sesi audit 30 titik kesalahan khusus order hari ini, webinar rutin bulanan, dan akses komunitas untuk tanya expert.",
    },
    {
        question: "Bagaimana garansi setup campaign-nya?",
        answer: "Kalau dalam 3 minggu setelah belajar dan praktik semua modul lo masih belum bisa setup campaign, tim Hariyanto Chung akan bantu setup Google Ads sesuai syarat garansi: dari bidding, keyword research, ads copy, GTM, GA4, sampai conversion tracking.",
    },
];

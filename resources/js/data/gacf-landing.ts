export const heroBullets = [
    "Klik rame belum tentu bagus kalau Google cuma belajar dari pengklik",
    "Closing WhatsApp/manual harus ikut kebaca sebagai data pembeli asli",
    "GACF ngajarin alurnya dari tracking sampai OCT, step-by-step",
];

export const problemPoints = [
    {
        title: "Iklan bakar duit, konversi minim",
        copy: "Klik bisa masuk, budget tetap kepakai, tapi closing dan omset nyata belum ikut naik.",
    },
    {
        title: "Dashboard nggak nyambung ke penjualan asli",
        copy: "Di laporan terlihat ada klik atau event, tapi datanya nggak mencerminkan siapa yang benar-benar transfer.",
    },
    {
        title: "Google belajar dari data yang salah",
        copy: "Konversi offline dari WhatsApp/manual nggak dikirim balik, jadi algoritma terus belajar dari sinyal yang bias.",
    },
];

export const octComparison = {
    without: [
        "Google dikasih sinyal klik, form, atau tombol WhatsApp",
        "Closing asli dari chat/manual berhenti di luar dashboard",
        "Campaign makin pintar cari pengklik, bukan pembeli",
    ],
    with: [
        "Data closing WhatsApp/manual dikirim balik ke Google",
        "Google mulai belajar dari pembeli nyata, bukan sekadar klik",
        "Optimasi dan scale lebih masuk akal karena sinyalnya lebih bersih",
    ],
};

export const coursePillars = [
    {
        value: "3.500+",
        label: "Business Owners",
        detail: "Membantu sukses beriklan di Google Ads",
    },
    {
        value: "45M+",
        label: "Total Ad Spend",
        detail: "Yang sudah ter-manage dengan GACF",
    },
    {
        value: "85X",
        label: "Rata-rata ROAS",
        detail: "Peningkatan dalam 90 hari pertama",
    },
    {
        value: "87%",
        label: "Success Rate",
        detail: "Member capai target closing mereka",
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
        title: "Testimoni Bu Yulie",
        type: "video",
        description: "Cerita member GACF setelah belajar dan praktik.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/bb50e777-cdbe-4fc1-b662-685ee30daad4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/bb50e777-cdbe-4fc1-b662-685ee30daad4/thumbnail.jpg",
        posterPosition: "center",
        isPublished: true,
    },
    {
        title: "Testimoni Pak Agus",
        type: "video",
        description: "Cerita member GACF setelah belajar dan praktik.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/0a8f19a3-c4c0-4bcb-a28e-8c7058db9738?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/0a8f19a3-c4c0-4bcb-a28e-8c7058db9738/thumbnail.jpg",
        isPublished: false,
    },
    {
        title: "Testimoni Member 3",
        type: "video",
        description: "Cerita member GACF setelah belajar dan praktik.",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/dde65514-a908-403d-bd2f-31790bd4bb0e?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/dde65514-a908-403d-bd2f-31790bd4bb0e/thumbnail.jpg",
        isPublished: false,
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
    "Ngebedah Google Ads dari data, bukan feeling dashboard",
    "Fokus bikin mesin Google belajar dari pembeli asli",
];

export const curriculumModules = [
    {
        title: "Fundamental Anti-Boncos",
        copy: "Setup pondasi dan mindset yang bener dari nol supaya algoritma Google Ads nggak salah langkah dari hari pertama.",
    },
    {
        title: "Setup Intel Website (GTM & GA4)",
        copy: "Pasang Google Tag Manager dan GA4 supaya pergerakan pengunjung di website atau landing page lo terekam akurat.",
    },
    {
        title: "Racik Campaign Search Yang Nendang",
        copy: "Riset keyword dan bikin struktur iklan Search yang menarget orang siap beli, bukan orang yang cuma cari informasi gratisan.",
    },
    {
        title: "Bedah & Optimasi Iklan",
        copy: "Baca data, cut keyword yang bikin boncos, dan tekan biaya per klik supaya campaign makin efisien.",
    },
    {
        title: "Remarketing Anti-Ghosting",
        copy: "Kejar lagi orang yang sudah klik atau chat tapi belum jadi pembeli dengan strategi yang lebih rapi.",
    },
    {
        title: "Scale-Up Pakai PMax & Demand Gen",
        copy: "Pahami cara scale campaign modern Google tanpa asal naik budget, termasuk framework pakai Performance Max dan Demand Gen.",
    },
    {
        title: "Upload Offline Conversion (OCT)",
        copy: "Panduan upload data real buyer ke sistem supaya Google belajar dari pembeli asli, bukan klik sampah.",
    },
    {
        title: "Analisa Keyword Winning Google",
        copy: "Temukan keyword paling profitable yang kompetitor garap, lalu pakai strategi keyword research dengan data real.",
    },
];

export const bonusItems = [
    {
        title: "Komunitas Aktif & Supportif",
        copy: "Bebas tanya dengan expert kapanpun. Komunitas selalu update strategi terbaru.",
        icon: "community",
    },
    {
        title: "Webinar Rutin Tiap Bulan",
        copy: "Bahas update Google terbaru, bedah akun iklan, dan sharing strategi yang works.",
        icon: "webinar",
    },
    {
        title: "1.000+ Winning Ads Template",
        copy: "Template iklan terbukti jalan di Google & Meta. Tinggal pakai, tinggal profit.",
        icon: "template",
    },
] as const;

export const pricingIncludes = [
    "Akses 8 modul e-course Google Ads",
    "Fundamental Anti-Boncos, Setup Intel Website GTM & GA4, Racik Campaign Search, Optimasi Iklan, Remarketing, PMax & Demand Gen, OCT, Analisa Keyword Winning",
    "Akses komunitas aktif dan supportive, bebas tanya expert kapanpun",
    "Webinar rutin tiap bulan",
    "1.000+ Winning Ads Template gratis",
    "Garansi Setup Auto Campaign jika dalam 3 minggu belum bisa setup campaign sesuai syarat",
    "Bonus sesi audit 30 titik kesalahan dengan tim expert Upperclicks khusus order hari ini",
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
        answer: "Cocok, karena GACF membahas penyebab umum boncos: tracking yang nggak rapi, data dashboard yang nggak mencerminkan penjualan asli, dan optimasi yang masih nebak-nebak.",
    },
    {
        question: "Apa itu OCT dan kenapa penting?",
        answer: "OCT atau Offline Conversion Tracking adalah metode mengirim data transaksi offline/manual seperti WhatsApp ke Google, supaya algoritma belajar dari pembeli asli, bukan hanya dari orang yang klik iklan.",
    },
    {
        question: "ROAS atau omzet gua pasti naik setelah ikut?",
        answer: "Nggak ada janji hasil pasti. Hasil tiap bisnis bisa berbeda tergantung niche, budget, offer, eksekusi, kualitas data, dan kondisi market. GACF memberi framework praktik dan sistem belajar yang lebih rapi.",
    },
    {
        question: "Apa aja bonus yang didapat?",
        answer: "Lo dapat 1.000+ Winning Ads Template, sesi audit 30 titik kesalahan khusus order hari ini, webinar rutin bulanan, dan akses komunitas untuk tanya expert.",
    },
    {
        question: "Bagaimana garansi setup campaign-nya?",
        answer: "Jika dalam 3 minggu setelah belajar dan praktik semua modul lo masih belum bisa setup campaign, tim Hariyanto Chung akan bantu setup Google Ads secara penuh sesuai syarat garansi, mulai dari strategi bidding, keyword research, grouping keyword, ads copy, GTM, GA4, sampai conversion tracking.",
    },
];

export const octComparison = {
    without: [
        {
            icon: "📊",
            title: "Tracking Data Tombol Tidak Akurat",
            description: "Data conversion hanya dari form fill, tidak tercatat closing asli dari WhatsApp atau chat. Google hanya lihat klik, bukan penjualan nyata."
        },
        {
            icon: "🎯",
            title: "Targeting Random Banyak Leads Sampah",
            description: "Algoritma Google tidak tahu siapa pembeli asli. Campaign targeting random ke semua orang, hasilnya banyak leads tidak qualified atau tidak closing."
        },
        {
            icon: "💸",
            title: "Hasil Iklan: Banyak Klik Sedikit Closing BONCOS",
            description: "Klik tinggi tapi closing minim, budget terbang percuma. Performa terlihat bagus di dashboard tapi sebenarnya tidak profitable."
        },
        {
            icon: "🐌",
            title: "Learning Google: Lambat & Tidak Efisien",
            description: "Sistem belajar dari data salah, optimasi jadi lambat dan tidak efektif. Campaign stuck di performance biasa saja, susah untuk naik."
        }
    ],
    with: [
        {
            icon: "📊",
            title: "Tracking Data: Penjualan/Closing (Data Valid)",
            description: "Setiap closing dari WhatsApp, chat, atau telepon tercatat otomatis ke Google Ads system. Data pembeli asli, bukan sekadar klik."
        },
        {
            icon: "🎯",
            title: "Targeting: Spesifik ke Pembeli Nyata (Tepat Sasaran)",
            description: "Algoritma Google jadi tahu pembeli asli dan optimize targeting ke profil yang sama. Targeting jadi presisi dan efektif ke audiens qualified."
        },
        {
            icon: "💸",
            title: "Hasil Iklan: Closing Naik Signifikan (PROFIT)",
            description: "Closing rate meningkat drastis dengan targeting tepat. Budget efisien, tidak terbuang untuk leads sampah. Lebih sedikit klik, lebih banyak profit."
        },
        {
            icon: "⚡",
            title: "Learning Google: Cepat & Akurat (Otomatisasi)",
            description: "Sistem belajar dari data benar, keputusan optimasi cepat. Machine learning powerful dan campaign terus meningkat secara otomatis."
        }
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
    // {
    //     title: "Bu Yulie Member GACF",
    //     type: "video",
    //     description:
    //         "Dari semua kursus, menurut bu Yuli ini kursus yang paling memuaskan",
    //     embedSrc:
    //         "https://player.mediadelivery.net/embed/701542/bb50e777-cdbe-4fc1-b662-685ee30daad4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    //     posterSrc:
    //         "https://vz-e2df73f9-1fd.b-cdn.net/bb50e777-cdbe-4fc1-b662-685ee30daad4/thumbnail.jpg",
    //     posterPosition: "center",
    //     isPublished: true,
    // },
    {
        title: "Mas Gilang Member GACF",
        type: "video",
        description: "Potential Leads Lebih Banyak Sejak Belajar Di GACF",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/1dcc6aba-aab2-49b6-843e-722bf57553e4?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/1dcc6aba-aab2-49b6-843e-722bf57553e4/thumbnail.jpg",
        isPublished: true,
    },
    // {
    //     title: "Mas Ilham Member GACF",
    //     type: "video",
    //     description:
    //         "Mas Ilham berhasil mendapatkan klien dari hasil belajar di E-course GACF",
    //     embedSrc:
    //         "https://player.mediadelivery.net/embed/701542/dde65514-a908-403d-bd2f-31790bd4bb0e?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
    //     posterSrc:
    //         "https://vz-e2df73f9-1fd.b-cdn.net/dde65514-a908-403d-bd2f-31790bd4bb0e/thumbnail.jpg",
    //     isPublished: true,
    // },
    {
        title: "Testimoni Member GACF",
        type: "video",
        description: "Cerita member setelah pasang Offline Conversion Tracking",
        embedSrc:
            "https://player.mediadelivery.net/embed/701542/6856a01a-2b28-4b17-8930-6df98e5a3c05?autoplay=false&loop=false&muted=false&preload=false&responsive=true",
        posterSrc:
            "https://vz-e2df73f9-1fd.b-cdn.net/6856a01a-2b28-4b17-8930-6df98e5a3c05/thumbnail.jpg",
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
        copy: "Setup pondasi dan mindset yang bener dari nol. Lo bakal diajarin gimana algoritma Google Ads bekerja biar nggak salah langkah dari hari pertama beriklan.",
    },
    {
        title: "Setup Intel Website (GTM & GA4)",
        copy: "Jangan nebak-nebak! Di sini lo belajar pasang Google Tag Manager & GA4 biar semua pergerakan pengunjung di website atau landing page lo terekam akurat.",
    },
    {
        title: "Racik Campaign Search Yang Nendang",
        copy: "Cara riset keyword dan bikin struktur iklan Search yang nargetin orang-orang 'Siap Beli', bukan orang yang cuma mau cari informasi gratisan.",
    },
    {
        title: "Bedah & Optimasi Iklan",
        copy: "Iklan udah jalan, terus ngapain? Di modul ini dibahas tuntas cara baca data, nge-cut keyword yang bikin boncos, dan nekan biaya per klik (CPC) biar makin efisien.",
    },
    {
        title: "Remarketing Anti-Ghosting",
        copy: "Udah klik tombol WA tapi ngilang? Kita kejar mereka! Belajar strategi nampilin iklan lagi khusus ke orang-orang yang belum jadi beli biar akhirnya transfer.",
    },
    {
        title: "Scale-Up Pakai PMax & Demand Gen",
        copy: "Kalau campaign udah cuan, saatnya scale-up! Lo bakal belajar framework pakai Performance Max & Demand Gen buat ngelipatgandain leads pakai bantuan AI Google.",
    },
    {
        title: "Upload Offline Conversion (OCT)",
        copy: "Ini rahasia terbesarnya. Panduan lengkap upload data real buyer lo ke sistem, buat 'maksa' Google nyariin orang-orang yang profilnya mirip sama pembeli lo. Bye-bye klik sampah!",
    },
    {
        title: "Analisa Keyword Winning Google",
        copy: "Temukan keyword paling profitable yang kompetitor garap. Strategi keyword research dengan data real.",
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

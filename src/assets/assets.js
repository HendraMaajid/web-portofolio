import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import saya from './saya.jpg';
import antigravity from './antigravity.png';
import redis from './redis.svg';
import dbeaver from './dbeaver.png';
import linux from './linux.svg';

export const assets = {
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    right_arrow_white,
    mail_icon,
    mail_icon_dark,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    saya,
    antigravity,
    redis,
    dbeaver,
    linux
};

// assets.js
export const workData = [
    {
        title: 'EduPlatform',
        description: 'Go (Gin), Next.js, PostgreSQL, Tailwind CSS',
        detailId: 'Platform Learning Management System (LMS) full-stack dengan fitur manajemen kursus, modul pembelajaran, quiz interaktif, dan generate sertifikat otomatis.',
        detailEn: 'Full-stack Learning Management System (LMS) platform with features for course management, learning modules, interactive quizzes, and automatic certificate generation.',
        featuresId: [
            'Manajemen kursus, modul, quiz, dan assignment',
            'Role-based access control (Admin, Teacher, Student)',
            'Generate sertifikat otomatis (PDF) setelah penyelesaian kursus'
        ],
        featuresEn: [
            'Course, module, quiz, and assignment management',
            'Role-based access control (Admin, Teacher, Student)',
            'Automatic certificate generation (PDF) upon course completion',
            'Link GitHub : https://github.com/HendraMaajid/eduplatform'
        ],
        bgImage: 'https://raw.githubusercontent.com/HendraMaajid/eduplatform/main/image/home.png',
        githubLink: 'https://educourse.hendramaajid.my.id'
    },
    {
        title: 'Web RS Yolanda',
        description: 'HTML, CSS, JavaScript, PHP, MySQL',
        detailId: 'Membangun modul IGD dan laboratorium untuk mendukung alur kerja rumah sakit secara efisien.',
        detailEn: 'Built ER and laboratory modules to support hospital workflows more efficiently.',
        featuresId: [
            'Pengelolaan data pasien untuk unit IGD',
            'Alur pemeriksaan laboratorium terintegrasi',
            'Optimasi tampilan dashboard untuk staf medis'
        ],
        featuresEn: [
            'Patient data management for ER workflows',
            'Integrated laboratory examination flow',
            'Optimized dashboard UI for medical staff'
        ],
        bgImage: '/rs-yolanda.png',
        githubLink: 'https://github.com/HendraMaajid/Website-Rumah-Sakit-Yolandaa' // Ganti dengan link GitHub Anda
    },
    {
        title: 'Tukutick',
        description: 'Laravel, Bootstrap, MySQL',
        detailId: 'Platform ticketing pre-order dengan sistem gacha untuk mengurangi praktik scalping tiket.',
        detailEn: 'Pre-order ticketing platform with a gacha system to reduce ticket scalping.',
        featuresId: [
            'Sistem pre-order satu akun satu kesempatan',
            'Mekanisme gacha untuk distribusi tiket lebih adil',
            'Dashboard admin untuk monitoring transaksi'
        ],
        featuresEn: [
            'One-account one-chance pre-order mechanism',
            'Gacha-based allocation for fair ticket distribution',
            'Admin dashboard for transaction monitoring'
        ],
        bgImage: '/TukuTick.png',
        githubLink: 'https://github.com/HendraMaajid/tukutick' // Ganti dengan link GitHub Anda
    },
    {
        title: 'Movie Deck',
        description: 'React Js, Tailwind CSS, TMDB API',
        detailId: 'Aplikasi katalog film dengan integrasi TMDB API untuk eksplorasi data film interaktif.',
        detailEn: 'Movie catalog app integrated with TMDB API for interactive movie exploration.',
        featuresId: [
            'Pencarian film berdasarkan judul dan kategori',
            'Menampilkan detail film secara dinamis dari API',
            'Antarmuka responsif untuk mobile dan desktop'
        ],
        featuresEn: [
            'Movie search by title and category',
            'Dynamic movie detail rendering from API',
            'Responsive interface for mobile and desktop'
        ],
        bgImage: '/movie_deck.png',
        githubLink: 'https://github.com/HendraMaajid/MovieDeck' // Ganti dengan link GitHub Anda
    },
    {
        title: 'LAMA',
        description: 'HTML, CSS, JavaScript, Angular, Firebase',
        detailId: 'Aplikasi manajemen daftar anime dengan Angular dan Firebase untuk sinkronisasi data real-time.',
        detailEn: 'Anime list management app built with Angular and Firebase for real-time data sync.',
        featuresId: [
            'Tambah, edit, dan hapus daftar anime',
            'Sinkronisasi data real-time menggunakan Firebase',
            'Kategorisasi status anime yang ditonton'
        ],
        featuresEn: [
            'Add, edit, and delete anime entries',
            'Real-time data synchronization with Firebase',
            'Status categorization for watched anime'
        ],
        bgImage: '/LAMA.png',
        githubLink: 'https://github.com/HendraMaajid/LAMA' // Ganti dengan link GitHub Anda
    },
    {
        title: 'Learning Management System with AI Chatbot(RAG)',
        description: 'Tailwind CSS, Alpine Js, Laravel, Livewire, PostgreSQL',
        detailId: 'Mengembangkan LMS dengan chatbot AI berbasis RAG untuk tutor personal dan evaluasi otomatis.',
        detailEn: 'Developed an LMS with an RAG-based AI chatbot for personal tutoring and auto evaluation.',
        featuresId: [
            'Chatbot AI personal tutor berbasis RAG',
            'Pembuatan konten kuis dan materi dengan AI',
            'Evaluasi jawaban otomatis dengan feedback'
        ],
        featuresEn: [
            'RAG-based personal tutor AI chatbot',
            'AI-generated quizzes and learning materials',
            'Automatic answer evaluation with feedback'
        ],
        bgImage: '/lms.png',
        githubLink: 'http://belajar.smp-perantara.sch.id/'
    },
    {
        title: 'Marii Cup Tournament Padel',
        description: 'Laravel, React Js, Inertia JS, Animate UI, MySQL',
        detailId: 'Sistem manajemen turnamen padel dengan hitung poin otomatis, bracket generator, dan live scoring.',
        detailEn: 'Padel tournament management system with auto points, bracket generation, and live scoring.',
        featuresId: [
            'Perhitungan poin pemain otomatis',
            'Generator bracket turnamen sistem gugur',
            'Manajemen jadwal, skor langsung, dan status match'
        ],
        featuresEn: [
            'Automatic player point calculations',
            'Knockout tournament bracket generator',
            'Scheduling, live scoring, and match status management'
        ],
        bgImage: '/mariicup.png',
        githubLink: 'https://mariicup.com/'
    },
    {
        title: 'AutoPost Blogspot',
        description: 'Node.js, AI API, Blogspot API, MySQL',
        detailId: 'Platform otomatis untuk generate dan rewrite artikel berita menggunakan AI, dilengkapi human checker agar kualitas konten tetap terjaga sebelum diposting ke Blogspot.',
        detailEn: 'An automated platform to generate and rewrite news articles with AI, equipped with a human checker to maintain content quality before publishing to Blogspot.',
        featuresId: [
            'Generate artikel otomatis menggunakan AI berdasarkan topik',
            'Human checker untuk cek persentase konten AI',
            'Rewrite otomatis ulang jika skor AI terlalu tinggi',
            'Auto-post ke akun Blogspot yang sudah terhubung'
        ],
        featuresEn: [
            'Automatic AI article generation based on selected topics',
            'Human checker to analyze AI-content percentage',
            'Automatic rewrite loop when AI score is too high',
            'Auto-publish to connected Blogspot accounts'
        ],
        bgImage: '/autopost.png',
        githubLink: 'https://autopost.ozolab.id/login'
    },
    {
        title: 'Ozolab Web Generator',
        description: 'Laravel, Octane, AI API, Google Maps API, WhatsApp API',
        detailId: 'Platform otomatis untuk crawling data bisnis dari Google Maps lalu menghasilkan website lengkap dengan SEO, dokumen penawaran, dan pengiriman pesan pemasaran ke WhatsApp target.',
        detailEn: 'An automation platform that crawls business data from Google Maps and generates complete websites with SEO, proposal documents, and marketing message delivery to target WhatsApp numbers.',
        featuresId: [
            'Crawling data perusahaan, cafe, dan bisnis lain dari Google Maps',
            'Generate website otomatis dengan konten berbasis AI dan optimasi SEO',
            'Generate dokumen penawaran secara otomatis sesuai profil bisnis',
            'Kirim pesan WhatsApp otomatis ke target pemasaran'
        ],
        featuresEn: [
            'Crawling company, cafe, and other business data from Google Maps',
            'Automatic website generation with AI content and SEO optimization',
            'Automatic proposal document generation based on business profile',
            'Automated WhatsApp outreach to marketing targets'
        ],
        bgImage: '/ozolabwebgenerator.png',
        githubLink: 'https://ozolab.id'
    }
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, PHP, React Js, Next.js, Laravel, PostgreSQL, MySQL' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Universitas Jenderal Soedirman' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 7 projects' }
];

export const toolsData = [
    { name: 'VS Code', icon: assets.vscode },
    { name: 'Figma', icon: assets.figma },
    { name: 'Git', icon: assets.git },
    { name: 'Antigravity', icon: assets.antigravity },
    { name: 'Redis', icon: assets.redis },
    { name: 'DBeaver', icon: assets.dbeaver },
    { name: 'Linux', icon: assets.linux }
];
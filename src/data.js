import {
  Github, Linkedin, Mail, Phone, Code,
  Briefcase, Award, GraduationCap, Twitter, Download,
  Send, Calendar, Building2, Star, Eye,
  CheckCircle, Smartphone, Coffee, Cpu, Terminal, Database,
  Network, Box, Cloud, Menu, Layers, Zap, Globe, Users, Clock, Rocket,
  MessageSquare, ShieldCheck
} from 'lucide-react';

/* ─── Navigation ─── */
export const navItems = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];

/* ─── Social Links ─── */
export const socialLinks = [
  { Icon: Github, href: 'https://github.com/abhishekjhatiwal', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', label: 'LinkedIn' },
  { Icon: Code, href: 'https://leetcode.com/u/abhishek_jhatiwal/', label: 'LeetCode' },
  { Icon: Twitter, href: 'https://x.com/j472812', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:j472812@gmail.com', label: 'Email' },
];

/* ─── Hero Stats ─── */
export const stats = [
  { value: 5, label: 'Apps Built', icon: Smartphone, id: 'stat-apps' },
  { value: 8, label: 'Certifications', icon: Award, id: 'stat-certs' },
  { value: 1, label: 'Yrs Experience', icon: Clock, id: 'stat-exp' },
  { value: 100, label: 'Client Focused', icon: Users, id: 'stat-client' },
];

/* ─── Services ─── */
export const services = [
  { icon: Smartphone, title: 'Android App Development', desc: 'Native Android apps built with Kotlin & Jetpack Compose — fast, modern, and pixel-perfect.', gradient: 'from-blue-600 to-indigo-600', startingPrice: 'Starting from $800' },
  { icon: Layers, title: 'MVVM Clean Architecture', desc: 'Scalable, maintainable codebases using MVVM, Hilt DI, and Repository patterns.', gradient: 'from-indigo-600 to-purple-600', startingPrice: 'Starting from $600' },
  { icon: Zap, title: 'Firebase & Real-time Backend', desc: 'Auth, Firestore, Cloud Functions, Storage, and Push Notifications integrated seamlessly.', gradient: 'from-purple-600 to-pink-600', startingPrice: 'Starting from $500' },
  { icon: Globe, title: 'REST API Integration', desc: 'Retrofit + OkHttp integrations with proper error handling, caching, and offline support.', gradient: 'from-pink-600 to-rose-600', startingPrice: 'Starting from $400' },
  { icon: Rocket, title: 'Play Store Deployment', desc: 'End-to-end app publishing — signing, release management, store listing optimization.', gradient: 'from-rose-600 to-orange-600', startingPrice: 'Starting from $200' },
  { icon: CheckCircle, title: 'App UI/UX Design', desc: 'Figma to Android — translating designs into smooth, responsive Compose UI screens.', gradient: 'from-orange-600 to-blue-600', startingPrice: 'Starting from $350' },
];

/* ─── Projects ─── */
export const projects = [
  {
    id: 0, title: 'Trade Battle', date: '2025', category: 'MVVM',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'WebSocket'],
    shortDesc: 'Gamified stock market trading battle Android app — players compete in real-time.',
    description: [
      'Built Trade Battle, a gamified stock market trading Android app where users compete against each other in real-time trading challenges using virtual currency.',
      'Developed with Kotlin and Jetpack Compose following MVVM clean architecture, with Firebase for authentication and real-time data sync, and WebSocket for live market price updates.',
      'The app features a competitive battle system where two players trade stocks simultaneously within a time limit — the player with the higher portfolio value wins.',
    ],
    features: ['Real-time Gamified Trading Battles', 'Live Stock Price Updates via WebSocket', 'Portfolio Dashboard & P&L Tracking', 'Leaderboard & Player Rankings', 'Firebase Auth & Firestore Backend', 'Match-making & Battle Timer'],
    link: null,
    screens: [
      { src: '/trade-battle-dashboard.png', label: 'Dashboard' },
      { src: '/trade-battle-battle.png', label: 'Live Battle' },
      { src: '/trade-battle-leaderboard.png', label: 'Leaderboard' },
    ],
    featured: true,
    published: false
  },
  {
    id: 1, title: 'Rupiksha', date: 'Dec 2025 – Present', category: 'Published',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Retrofit'],
    shortDesc: 'Live on-demand home services app — published on Google Play Store.',
    description: [
      'Developed and shipped a full-featured on-demand home services Android application as an Android Developer at Rupiksha Services Private Limited.',
      'The app connects customers with trusted local service professionals for a wide range of household tasks including cleaning, plumbing, electrical work, and more.',
      'Built with Kotlin and Jetpack Compose following MVVM clean architecture, with Firebase for authentication and real-time updates, and Retrofit for seamless API integration.',
    ],
    features: ['On-demand Service Booking', 'Real-time Service Tracking', 'Firebase Authentication & Firestore', 'Clean MVVM Architecture', 'Professional Provider Listings', 'In-app Chat & Notifications'],
    link: 'https://play.google.com/store/apps/details?id=com.rupiksha.services',
    isLiveApp: true, featured: true, published: true
  },
  {
    id: 2, title: 'Sound For Silence', date: 'Sep 2025', category: 'Firebase',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Firebase'],
    shortDesc: 'Role-based educational app with video content and quizzes.',
    description: [
      'Built a comprehensive role-based Android application tailored for educational content delivery.',
      'The app features distinct interfaces for Admins and Students, ensuring a secure and focused experience.',
      'Integrated Firebase Authentication for secure login and Firestore for real-time data syncing.',
    ],
    features: ['Role-Based Access Control (Admin/User)', 'Video Streaming & Management', 'Interactive Quizzes with Score Tracking', 'Admin Dashboard for Content Uploads'],
    link: 'https://github.com/rupiksha/Sound-For-Silence.git', featured: true, published: false
  },
  {
    id: 3, title: 'YouTube App Clone', date: 'Jul 2025', category: 'Compose',
    tech: ['Kotlin', 'Coroutines', 'MVVM', 'Room'],
    shortDesc: 'YouTube-style video app using Jetpack Compose and MVVM.',
    description: [
      'A functional clone of the YouTube Android application demonstrating complex UI building with Jetpack Compose.',
      'Focuses on performance optimization using Coroutines for background tasks and Room database for caching.',
    ],
    features: ['Video Feed with Infinite Scroll', 'Custom Video Player Overlay', 'Offline Caching with Room', 'Search Functionality'],
    link: 'https://github.com/abhishekjhatiwal/YouTube-App.git', featured: false, published: false
  },
  {
    id: 4, title: 'Instagram App UI', date: 'Aug 2025', category: 'Compose',
    tech: ['Kotlin', 'Jetpack Compose'],
    shortDesc: 'Instagram-like interface with Stories, Feed and smooth animations.',
    description: [
      'A pixel-perfect recreation of the Instagram UI to master Jetpack Compose layouts and animations.',
      'Includes complex nested scrolling, story view animations, and a responsive grid layout.',
    ],
    features: ['Story Carousel Animation', 'Profile Grid Layout', 'Bottom Navigation Bar', 'Like & Comment Interaction UI'],
    link: 'https://github.com/abhishekjhatiwal/Instagram-UI-App.git', featured: false, published: false
  },
  {
    id: 5, title: 'DocHive', date: '2025', category: 'Published',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Room', 'Material 3'],
    shortDesc: 'All-in-one document management app — scan, convert, edit & organize files.',
    description: [
      'Built DocHive, a powerful all-in-one document management Android application that lets users scan, convert, edit, and organize documents seamlessly from their phone.',
      'The app supports multiple file formats including PDF, Word, Excel, CSV, and Text files with a comprehensive toolkit for document conversion (Image to PDF, Word to PDF, PDF to Word, PPT to PDF) and editing (annotations, text editing, digital signatures).',
      'Developed with Kotlin and Jetpack Compose following MVVM clean architecture, featuring Material 3 design with a clean purple-themed UI, biometric app lock, two-factor authentication, and cloud sync capabilities.',
    ],
    features: ['Scan to PDF with Camera', 'Multi-format Conversion (PDF, Word, Excel, PPT)', 'Document Editing & Annotations', 'Digital Signature Support', 'Professional Templates Library', 'Biometric App Lock & 2FA Security', 'Favorites & Recycle Bin Management', 'Theme Customization & Multi-language Support'],
    link: null,
    featured: true,
    published: true
  },
];

/* ─── Certifications ─── */
export const certifications = [
  { name: 'Programming in Java', institution: 'IIT Kharagpur', file: '/certificats/NPTELJava.pdf', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S65180455604057547', type: 'pdf', IconComp: Coffee, color: 'text-orange-400', bg: 'bg-orange-500/10' },
  { name: 'Programming in Modern C++', institution: 'IIT Kharagpur', file: '/certificats/Programming in Modern C++.pdf', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS44S125780076530513780', type: 'pdf', IconComp: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/10' },
  { name: 'Problem Solving Through Programming In C', institution: 'IIT Kharagpur', file: '/certificats/NPTEL_C.jpeg', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS53S4379073004136760', type: 'image', IconComp: Terminal, color: 'text-green-400', bg: 'bg-green-500/10' },
  { name: 'Data Base Management System', institution: 'IIT Kharagpur', file: '/certificats/Data Base Management System.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S53740075309169139.pdf', type: 'pdf', IconComp: Database, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
  { name: 'Data Structure And Algorithm Design', institution: 'IIT Kanpur', file: '/certificats/Data Structures and Algorithms Design.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S35860151010537627.pdf', type: 'pdf', IconComp: Network, color: 'text-pink-400', bg: 'bg-pink-500/10' },
  { name: 'Blockchain and Its Application', institution: 'IIT Kharagpur', file: '/certificats/Blockchain and its Applications_250507_190326.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S54740058104211862.pdf', type: 'pdf', IconComp: Box, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  { name: 'Cloud Computing', institution: 'IIT Kharagpur', file: '/certificats/Cloud Computing.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104740190604211862.pdf', type: 'pdf', IconComp: Cloud, color: 'text-sky-400', bg: 'bg-sky-500/10' },
  { name: 'Qt6 C++ GUI & Mobile App Development', institution: 'Udemy', file: '/certificats/QtCreator.pdf', verifyLink: 'https://www.udemy.com/certificate/UC-b9b131d5-a294-444a-8c7e-45dc60585feb/', type: 'pdf', IconComp: Smartphone, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
];

/* ─── Skill Groups ─── */
export const skillGroups = [
  { category: 'Languages', color: '#a855f7', skills: ['Kotlin', 'Java', 'C++', 'C', 'SQL'], percent: 92 },
  { category: 'Android & UI', color: '#3b82f6', skills: ['Jetpack Compose', 'XML Layouts', 'Material Design', 'Navigation Component'], percent: 95 },
  { category: 'Architecture', color: '#10b981', skills: ['MVVM', 'Clean Architecture', 'Hilt (DI)', 'Repository Pattern', 'Coroutines', 'Flow'], percent: 88 },
  { category: 'Libraries', color: '#f59e0b', skills: ['Room', 'Retrofit', 'OkHttp', 'Glide', 'Coil'], percent: 85 },
  { category: 'Backend & Cloud', color: '#ec4899', skills: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'Google Cloud (GCP)', 'REST APIs', 'WebSocket'], percent: 90 },
  { category: 'Tools', color: '#06b6d4', skills: ['Android Studio', 'Git', 'GitHub', 'Figma', 'Postman'], percent: 82 },
];

/* ─── Contact Cards ─── */
export const contactCards = [
  { label: 'Email', value: 'j472812@gmail.com', icon: Mail, action: 'copyEmail', bg: 'bg-rose-500/10 text-rose-400' },
  { label: 'Phone', value: '+91-6367706177', icon: Phone, href: 'tel:+916367706177', bg: 'bg-blue-500/10 text-blue-400' },
  { label: 'WhatsApp', value: 'Chat now', icon: MessageSquare, href: 'https://wa.me/916367706177', bg: 'bg-emerald-500/10 text-emerald-400' },
  { label: 'LinkedIn', value: '/abhishek-jhatiwal', icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', bg: 'bg-indigo-500/10 text-indigo-400' },
];

/* ─── Experience Roles ─── */
export const experienceRoles = [
  {
    id: 'rupiksha',
    title: 'Android Developer Intern',
    company: 'Rupiksha Services Pvt. Ltd.',
    companyIcon: Building2,
    period: 'Dec 2025 – Present',
    color: 'blue',
    summary: 'Shipped the core native Android application supporting customer bookings, providers match, and online payments directly onto the Play Store.',
    achievements: [
      'Built the user portal with custom UI panels in Jetpack Compose, dropping code rendering time by 20%.',
      'Implemented DI pattern using Hilt to organize dependencies and mock providers for automated testing.',
      'Configured Retrofit network clients with Room database caching to provide offline accessibility.',
      'Maintained continuous delivery via Git workflow and coordinated live deployments.',
    ],
    linkedinHref: 'https://www.linkedin.com/in/abhishek-jhatiwal/',
  },
  {
    id: 'arya',
    title: 'Academic Project Developer',
    company: 'Arya Institute of Engineering & Technology',
    companyIcon: GraduationCap,
    period: 'Aug 2022 – Aug 2026',
    color: 'indigo',
    summary: 'Designed and built a suite of native utilities (Trade Battle, Sound For Silence) utilizing clean architecture, WebSockets, and real-time backend node databases.',
    achievements: [
      'Architected Trade Battle supporting WebSocket market price streaming with matching engines.',
      'Developed sound processing algorithms and roles hierarchy inside Sound For Silence educational platform.',
      'Received academic distinction stars for coding courses.',
    ],
    linkedinHref: 'https://www.linkedin.com/in/abhishek-jhatiwal/',
  },
];

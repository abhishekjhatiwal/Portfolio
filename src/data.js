import {
  Github, Linkedin, Mail, Phone, Code,
  Briefcase, Award, GraduationCap, Twitter, Download,
  Send, Calendar, Building2, Star, Eye,
  CheckCircle, Smartphone, Coffee, Cpu, Terminal, Database,
  Network, Box, Cloud, Menu, Layers, Zap, Globe, Users, Clock, Rocket,
  MessageSquare, ShieldCheck
} from 'lucide-react';
import GooglePlayIcon from './components/GooglePlayIcon';

/* ─── Google Play Developer Account ─── */
export const googlePlayDeveloper = {
  name: 'Abhishek Jhatiwal',
  handle: '@abhishekjhatiwal',
  title: 'Android & Backend Developer',
  url: 'https://play.google.com/store/apps/dev?id=8242904958575037270',
  bio: 'Creating intuitive Android apps and secure backend solutions with Kotlin, Jetpack Compose, Spring Boot, and modern cloud technologies.',
  rating: '5.0 ★ Rated',
  badge: 'Google Play Verified Developer',
  totalDownloads: '50+'
};

/* ─── Navigation ─── */
export const navItems = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];

/* ─── Social Links ─── */
export const socialLinks = [
  { Icon: Github, href: 'https://github.com/abhishekjhatiwal', label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', label: 'LinkedIn' },
  { Icon: GooglePlayIcon, href: 'https://play.google.com/store/apps/dev?id=8242904958575037270', label: 'Google Play' },
  { Icon: Code, href: 'https://leetcode.com/u/abhishek_jhatiwal/', label: 'LeetCode' },
  { Icon: Twitter, href: 'https://x.com/j472812', label: 'Twitter' },
  { Icon: Mail, href: 'mailto:j472812@gmail.com', label: 'Email' },
];

/* ─── Hero Stats ─── */
export const stats = [
  { value: 6, label: 'Apps Built', icon: Smartphone, id: 'stat-apps' },
  { value: 8, label: 'Certifications', icon: Award, id: 'stat-certs' },
  { value: 1, label: 'Yrs Experience', icon: Clock, id: 'stat-exp' },
  { value: 100, label: 'Client Focused', icon: Users, id: 'stat-client' },
];

/* ─── Services ─── */
export const services = [
  { icon: Smartphone, title: 'Android App Development', desc: 'Native Android apps with Kotlin & Jetpack Compose — clean MVVM, custom design systems, and fluid animations.', gradient: 'from-blue-600 to-indigo-600', startingPrice: 'Starting from $800' },
  { icon: Database, title: 'Spring Boot Backend & APIs', desc: 'Enterprise-grade REST APIs in Kotlin, Spring Security, JWT auth, and role-based access control (RBAC).', gradient: 'from-emerald-600 to-teal-600', startingPrice: 'Starting from $700' },
  { icon: ShieldCheck, title: 'FinTech & B2B Solutions', desc: 'Aadhaar KYC, biometric auth, BBPS bill payments, Fingpay UPI cash withdrawal, and secure wallet flows.', gradient: 'from-indigo-600 to-purple-600', startingPrice: 'Starting from $850' },
  { icon: Cloud, title: 'Cloud Deployments & SQL', desc: 'PostgreSQL, Google Cloud SQL, container deployments on Google Cloud Run and AWS Elastic Beanstalk.', gradient: 'from-purple-600 to-pink-600', startingPrice: 'Starting from $500' },
  { icon: Rocket, title: 'Google Play Store Publishing', desc: 'End-to-end publishing, release tracks, policy compliance (Accessibility API, Privacy), and store optimization.', gradient: 'from-rose-600 to-orange-600', startingPrice: 'Starting from $250' },
  { icon: Layers, title: 'Clean Architecture & MVVM', desc: 'Scalable codebases using MVVM, Clean Architecture, Hilt DI, Room caching, Coroutines, Flow, and RxJava.', gradient: 'from-orange-600 to-blue-600', startingPrice: 'Starting from $600' },
];

/* ─── Projects ─── */
export const projects = [
  {
    id: 1, title: 'Rupiksha - Fintech App', date: 'Feb 2026', category: 'Fintech',
    tech: ['Kotlin', 'Java', 'Jetpack Compose', 'Retrofit', 'RxJava', 'Spring Boot'],
    shortDesc: 'Secure B2B fintech app — Domestic Money Transfer (DMT), BBPS & digital banking.',
    description: [
      'Built and shipped the new Rupiksha Android app for a multi-role fintech platform with distributor and retailer hierarchies as an Android and Backend Developer at Rupiksha Services Private Limited.',
      'Engineered remitter onboarding with Aadhaar-based KYC verification, OTP authentication, biometric security, and secure tokenized session management.',
      'Integrated BBPS bill payments, UPI cash withdrawal using Fingpay SDK, and real-time wallet flows.',
      'Developed with Kotlin, Jetpack Compose, MVVM and Clean Architecture, with Retrofit auth interceptors and token authenticators connecting to a Spring Boot backend on PostgreSQL (Google Cloud SQL).',
    ],
    features: [
      'Domestic Money Transfer (DMT) & Digital Banking Services',
      'Aadhaar-based KYC Verification & Biometric Auth',
      'UPI Cash Withdrawal via Fingpay SDK',
      'BBPS Bill Payments & Real-time Wallet Flows',
      'Retrofit Auth Interceptor & JWT Token Authenticator',
      'Reusable Compose Design System (Theme Tokens, PIN Pad, Dashboards)',
    ],
    link: 'https://play.google.com/store/apps/details?id=com.rupiksha.services',
    isLiveApp: true, featured: true, published: true
  },
  {
    id: 7, title: 'Bihar Health Department Project', date: '2025 – 2026', category: 'Backend',
    tech: ['Spring Boot', 'Kotlin', 'PostgreSQL', 'Spring Security', 'JWT'],
    shortDesc: 'State healthcare backend platform — role-based APIs, JWT security & PostgreSQL.',
    description: [
      'Owned the complete backend infrastructure for a state government healthcare department platform, architected with Spring Boot in Kotlin.',
      'Designed and created the normalized PostgreSQL relational database schema and developed versioned REST APIs on top of it.',
      'Implemented role-based authentication and role-based APIs with Spring Security and JWT to strictly control access across healthcare administrative hierarchies.',
    ],
    features: [
      'Role-Based Access Control (RBAC) & Role-Based APIs',
      'Stateless JWT Authentication with Spring Security',
      'Normalized PostgreSQL Relational Database Design',
      'Versioned RESTful APIs with Structured Exception Handling',
      'Audit Logging & Scalable Healthcare Data Architecture',
    ],
    link: null,
    featured: true,
    published: false
  },
  {
    id: 6, title: 'ScreenLens Translator', date: 'Jun 2026', category: 'Published',
    tech: ['Kotlin', 'Jetpack Compose', 'Google ML Kit', 'Accessibility API', 'MediaProjection'],
    shortDesc: 'AI-powered on-screen translator — instant floating translations across any app.',
    description: [
      'Built an AI-powered Android app that instantly translates on-screen text in any app using Google ML Kit on-device OCR.',
      'Published on Google Play with a 5.0 rating and 50+ downloads under developer profile Abhishek Jhatiwal.',
      'Resolved Google Play Console policy compliance requirements regarding Accessibility API disclosures and comprehensive privacy policies.',
      'Utilizes Android MediaProjection API for high-fidelity capture and Accessibility API (GlobalScrollService) to stabilize capture during screen scrolling.',
    ],
    features: [
      'Instant On-Screen Translation for Any App',
      'On-Device High-Speed OCR with Google ML Kit',
      'Floating Bubble Quick-Action Overlay',
      'Smart Scroll-Stabilization via Accessibility API',
      'MediaProjection High-Fidelity Capture',
      '100% On-Device Privacy & Zero Data Retention',
      '5.0 ★ Rating on Google Play Store'
    ],
    link: 'https://play.google.com/store/apps/dev?id=8242904958575037270',
    privacyPolicy: '/screenlens-privacy-policy.html',
    featured: true,
    published: true
  },
  {
    id: 2, title: 'Sound For Silence', date: 'Sep 2025', category: 'Architecture',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Firebase'],
    shortDesc: 'Role-based educational Android app with Clean Architecture & admin dashboard.',
    description: [
      'Built a comprehensive role-based Android application tailored for educational content delivery using Kotlin, Jetpack Compose, and MVVM with Clean Architecture.',
      'Implemented Firebase Authentication and Firestore for secure user management, plus an admin dashboard for content, user, and quiz management.',
      'Integrated Hilt for dependency injection, ensuring high modularity and clean testability across features.',
    ],
    features: [
      'Role-Based Access Control (Admin and Student views)',
      'Clean MVVM Architecture with Hilt Dependency Injection',
      'Firebase Authentication & Firestore Realtime Sync',
      'Admin Dashboard for Content Uploads & User Management',
      'Interactive Quizzes with Real-time Scoring'
    ],
    link: 'https://github.com/rupiksha/Sound-For-Silence.git',
    featured: true,
    published: false
  },
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
    id: 5, title: 'DocHive', date: '2025', category: 'Published',
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Room', 'Material 3'],
    shortDesc: 'All-in-one document management app — scan, convert, edit & organize files.',
    description: [
      'Built DocHive, a powerful all-in-one document management Android application that lets users scan, convert, edit, and organize documents seamlessly from their phone.',
      'The app supports multiple file formats including PDF, Word, Excel, CSV, and Text files with a comprehensive toolkit for document conversion (Image to PDF, Word to PDF, PDF to Word, PPT to PDF) and editing (annotations, text editing, digital signatures).',
      'Developed with Kotlin and Jetpack Compose following MVVM clean architecture, featuring Material 3 design with a clean purple-themed UI, biometric app lock, two-factor authentication, and cloud sync capabilities.',
    ],
    features: ['Scan to PDF with Camera', 'Multi-format Conversion (PDF, Word, Excel, PPT)', 'Document Editing & Annotations', 'Digital Signature Support', 'Professional Templates Library', 'Biometric App Lock & 2FA Security', 'Favorites & Recycle Bin Management', 'Theme Customization & Multi-language Support'],
    link: 'https://play.google.com/store/apps/dev?id=8242904958575037270',
    privacyPolicy: '/dochive-privacy-policy.html',
    featured: true,
    published: true
  },
];

/* ─── Certifications ─── */
export const certifications = [
  { name: 'NPTEL Discipline Star (CSE Distinction)', institution: 'NPTEL (IITs)', file: '/nptel-star-certificate.jpeg', verifyLink: 'https://archive.nptel.ac.in/', type: 'image', IconComp: Award, color: 'text-amber-400', bg: 'bg-amber-500/10' },
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
  { category: 'Languages', color: '#a855f7', skills: ['Kotlin', 'Java', 'SQL', 'C++', 'C'], percent: 94 },
  { category: 'Android Development', color: '#3b82f6', skills: ['Jetpack Compose', 'Android SDK', 'MVVM / MVP', 'Clean Architecture', 'Hilt (DI)', 'Room', 'Retrofit', 'RxJava', 'Material Design', 'ML Kit'], percent: 96 },
  { category: 'Backend & Security', color: '#10b981', skills: ['Spring Boot (Kotlin)', 'Spring Security', 'JWT Authentication', 'REST API Design', 'RBAC (Role-Based Access)', 'Role-Based APIs', 'Supabase'], percent: 92 },
  { category: 'Database & Cloud', color: '#ec4899', skills: ['PostgreSQL', 'Google Cloud SQL', 'Firestore', 'Google Cloud Run', 'AWS Elastic Beanstalk', 'Google Play Console'], percent: 90 },
  { category: 'Tools & DevOps', color: '#06b6d4', skills: ['Android Studio', 'Git', 'GitHub', 'VS Code', 'Qt Creator', 'Postman'], percent: 88 },
  { category: 'Core Engineering', color: '#f59e0b', skills: ['Data Structures & Algorithms', 'OOP', 'Clean Architecture', 'API Security', 'Agile Development'], percent: 92 },
];

/* ─── Contact Cards ─── */
export const contactCards = [
  { label: 'Google Play', value: 'Abhishek Jhatiwal', icon: GooglePlayIcon, href: 'https://play.google.com/store/apps/dev?id=8242904958575037270', bg: 'bg-emerald-500/10 text-emerald-400' },
  { label: 'Email', value: 'j472812@gmail.com', icon: Mail, action: 'copyEmail', bg: 'bg-rose-500/10 text-rose-400' },
  { label: 'Phone', value: '+91-6367706177', icon: Phone, href: 'tel:+916367706177', bg: 'bg-blue-500/10 text-blue-400' },
  { label: 'WhatsApp', value: 'Chat now', icon: MessageSquare, href: 'https://wa.me/916367706177', bg: 'bg-emerald-500/10 text-emerald-400' },
  { label: 'LinkedIn', value: '/abhishek-jhatiwal', icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', bg: 'bg-indigo-500/10 text-indigo-400' },
];

/* ─── Experience Roles ─── */
export const experienceRoles = [
  {
    id: 'rupiksha',
    title: 'Android and Backend Developer',
    company: 'Rupiksha Services Private Limited, India',
    companyIcon: Building2,
    period: 'Dec 2025 – Present',
    color: 'blue',
    summary: 'Building the new Rupiksha Android app for a multi-role fintech platform and engineering the Spring Boot backend on PostgreSQL (Google Cloud SQL) with cloud deployments on Google Cloud Run and AWS Elastic Beanstalk.',
    achievements: [
      'Built the new Rupiksha Android app for a multi-role fintech platform with distributor and retailer hierarchies, using Kotlin, Jetpack Compose, MVVM and Clean Architecture.',
      'Designed and developed the Spring Boot backend on PostgreSQL (Google Cloud SQL) with versioned REST APIs, Spring Security, JWT authentication and role-based access control.',
      'Deployed backend services to Google Cloud Run and AWS Elastic Beanstalk.',
      'Implemented secure session handling in the app with a Retrofit auth interceptor and token authenticator for JWT-based requests.',
      'Created a reusable Jetpack Compose design system (theme tokens, PIN pad, dashboard components) and reduced unnecessary recompositions.',
      'Integrated Firebase Authentication and Firestore; followed clean code practices and Agile workflows.',
    ],
    linkedinHref: 'https://www.linkedin.com/in/abhishek-jhatiwal/',
  },
  {
    id: 'bihar-health',
    title: 'Backend Developer (Government Healthcare)',
    company: 'Bihar Health Department Project',
    companyIcon: ShieldCheck,
    period: '2025 – 2026',
    color: 'emerald',
    summary: 'Owned the backend infrastructure for a state government healthcare department platform, built with Spring Boot in Kotlin, PostgreSQL, Spring Security, and JWT.',
    achievements: [
      'Designed and created the normalized PostgreSQL database schema and developed versioned REST APIs on top of it.',
      'Implemented role-based authentication and role-based APIs with Spring Security and JWT to strictly control access across healthcare administrative hierarchies.',
      'Engineered sensitive healthcare data models with high security and robust transaction consistency.',
      'Optimized query performance and RESTful response pipelines for mission-critical reliability.',
    ],
    linkedinHref: 'https://www.linkedin.com/in/abhishek-jhatiwal/',
  },
  {
    id: 'arya',
    title: 'B.Tech in Computer Science & Engineering',
    company: 'Arya Institute of Engineering Technology and Management',
    companyIcon: GraduationCap,
    period: 'Aug 2022 – Apr 2026',
    color: 'indigo',
    summary: 'Completing B.Tech in CSE with top academic distinction (NPTEL Discipline Star honors) and co-authored Microsoft Azure cloud architecture research.',
    achievements: [
      'Awarded NPTEL Discipline Star (Jul-Dec 2025) for outstanding academic performance in Computer Science and Engineering, completing 50+ weeks of NPTEL coursework across 7 specialized certifications.',
      'Co-authored research publication on Microsoft Azure cloud architecture at Arya Institute of Engineering Technology and Management.',
      'Architected full-stack Android and backend projects including ScreenLens Translator (published on Google Play Store with 5.0★ rating) and Trade Battle.',
    ],
    linkedinHref: 'https://www.linkedin.com/in/abhishek-jhatiwal/',
  },
];

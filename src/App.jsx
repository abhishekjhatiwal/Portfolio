import React, { useState, useEffect } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code,
  Briefcase, Award, GraduationCap, ChevronDown, Twitter, Download,
  Sun, Moon, Send, Calendar, Building2, Star, ArrowLeft, X, Eye,
  CheckCircle, Smartphone, Coffee, Cpu, Terminal, Database,
  Network, Box, Cloud, Menu, Layers, Zap, Shield,
  MessageCircle, ArrowRight, Globe, Users, Clock, Rocket
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '', service: '' });
  const [formStatus, setFormStatus] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceDropOpen, setServiceDropOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      if (!selectedProject) {
        const sections = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];
        const pos = window.scrollY + 100;
        for (const s of sections) {
          const el = document.getElementById(s);
          if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
            setActiveSection(s); break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  /* ─── DATA ─── */
  const services = [
    { icon: Smartphone, title: 'Android App Development', desc: 'Native Android apps built with Kotlin & Jetpack Compose — fast, modern, and pixel-perfect.', gradient: 'from-purple-500 to-violet-600', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
    { icon: Layers, title: 'MVVM Clean Architecture', desc: 'Scalable, maintainable codebases using MVVM, Hilt DI, and Repository pattern.', gradient: 'from-blue-500 to-cyan-500', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
    { icon: Zap, title: 'Firebase & Real-time Backend', desc: 'Auth, Firestore, Cloud Functions, Storage, and Push Notifications integrated seamlessly.', gradient: 'from-amber-500 to-orange-500', bg: 'bg-amber-500/10', border: 'border-amber-500/20' },
    { icon: Globe, title: 'REST API Integration', desc: 'Retrofit + OkHttp integrations with proper error handling, caching, and offline support.', gradient: 'from-green-500 to-emerald-500', bg: 'bg-green-500/10', border: 'border-green-500/20' },
    { icon: Rocket, title: 'Play Store Deployment', desc: 'End-to-end app publishing — signing, release management, store listing optimization.', gradient: 'from-pink-500 to-rose-500', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
    { icon: Shield, title: 'App UI/UX Design', desc: 'Figma to Android — translating designs into smooth, responsive Compose UI screens.', gradient: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
  ];

  const stats = [
    { value: '5+', label: 'Apps Built', icon: Smartphone },
    { value: '8+', label: 'Certifications', icon: Award },
    { value: '1+', label: 'Yrs Experience', icon: Clock },
    { value: '100%', label: 'Client Focused', icon: Users },
  ];

  const projects = [
    {
      id: 0, title: 'Trade Battle', date: '2025', category: 'Android',
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
    },
    {
      id: 1, title: 'Rupiksha', date: 'Dec 2025 – Present', category: 'Android',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Firebase', 'Retrofit'],
      shortDesc: 'Live on-demand home services app — published on Google Play Store.',
      description: [
        'Developed and shipped a full-featured on-demand home services Android application as an Android Developer at Rupiksha Services Private Limited.',
        'The app connects customers with trusted local service professionals for a wide range of household tasks including cleaning, plumbing, electrical work, and more.',
        'Built with Kotlin and Jetpack Compose following MVVM clean architecture, with Firebase for authentication and real-time updates, and Retrofit for seamless API integration.',
      ],
      features: ['On-demand Service Booking', 'Real-time Service Tracking', 'Firebase Authentication & Firestore', 'Clean MVVM Architecture', 'Professional Provider Listings', 'In-app Chat & Notifications'],
      link: 'https://play.google.com/store/apps/details?id=com.rupiksha.services',
      isLiveApp: true, featured: true,
    },
    {
      id: 2, title: 'Sound For Silence', date: 'Sep 2025', category: 'Android',
      tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Firebase'],
      shortDesc: 'Role-based educational app with video content and quizzes.',
      description: [
        'Built a comprehensive role-based Android application tailored for educational content delivery.',
        'The app features distinct interfaces for Admins and Students, ensuring a secure and focused experience.',
        'Integrated Firebase Authentication for secure login and Firestore for real-time data syncing.',
      ],
      features: ['Role-Based Access Control (Admin/User)', 'Video Streaming & Management', 'Interactive Quizzes with Score Tracking', 'Admin Dashboard for Content Uploads'],
      link: 'https://github.com/rupiksha/Sound-For-Silence.git', featured: true,
    },
    {
      id: 3, title: 'YouTube App Clone', date: 'Jul 2025', category: 'Android',
      tech: ['Kotlin', 'Coroutines', 'MVVM', 'Room'],
      shortDesc: 'YouTube-style video app using Jetpack Compose and MVVM.',
      description: [
        'A functional clone of the YouTube Android application demonstrating complex UI building with Jetpack Compose.',
        'Focuses on performance optimization using Coroutines for background tasks and Room database for caching.',
      ],
      features: ['Video Feed with Infinite Scroll', 'Custom Video Player Overlay', 'Offline Caching with Room', 'Search Functionality'],
      link: 'https://github.com/abhishekjhatiwal/YouTube-App.git', featured: false,
    },
    {
      id: 4, title: 'Instagram App UI', date: 'Aug 2025', category: 'Android',
      tech: ['Kotlin', 'Jetpack Compose'],
      shortDesc: 'Instagram-like interface with Stories, Feed and smooth animations.',
      description: [
        'A pixel-perfect recreation of the Instagram UI to master Jetpack Compose layouts and animations.',
        'Includes complex nested scrolling, story view animations, and a responsive grid layout.',
      ],
      features: ['Story Carousel Animation', 'Profile Grid Layout', 'Bottom Navigation Bar', 'Like & Comment Interaction UI'],
      link: 'https://github.com/abhishekjhatiwal/Instagram-UI-App.git', featured: false,
    },
  ];

  const certifications = [
    { name: 'Programming in Java', institution: 'IIT Kharagpur', file: '/certificats/NPTELJava.pdf', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S65180455604057547', type: 'pdf', IconComp: Coffee, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { name: 'Programming in Modern C++', institution: 'IIT Kharagpur', file: '/certificats/Programming in Modern C++.pdf', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS44S125780076530513780', type: 'pdf', IconComp: Cpu, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Problem Solving Through Programming In C', institution: 'IIT Kharagpur', file: '/certificats/NPTEL_C.jpeg', verifyLink: 'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS53S4379073004136760', type: 'image', IconComp: Terminal, color: 'text-green-400', bg: 'bg-green-500/10' },
    { name: 'Data Base Management System', institution: 'IIT Kharagpur', file: '/certificats/Data Base Management System.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S53740075309169139.pdf', type: 'pdf', IconComp: Database, color: 'text-yellow-400', bg: 'bg-yellow-500/10' },
    { name: 'Data Structure And Algorithm Design', institution: 'IIT Kanpur', file: '/certificats/Data Structures and Algorithms Design.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S35860151010537627.pdf', type: 'pdf', IconComp: Network, color: 'text-pink-400', bg: 'bg-pink-500/10' },
    { name: 'Blockchain and Its Application', institution: 'IIT Kharagpur', file: '/certificats/Blockchain and its Applications_250507_190326.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S54740058104211862.pdf', type: 'pdf', IconComp: Box, color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
    { name: 'Cloud Computing', institution: 'IIT Kharagpur', file: '/certificats/Cloud Computing.pdf', verifyLink: 'https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104740190604211862.pdf', type: 'pdf', IconComp: Cloud, color: 'text-sky-400', bg: 'bg-sky-500/10' },
    { name: 'Qt6 C++ GUI & Mobile App Development', institution: 'Udemy', file: '/certificats/QtCreator.pdf', verifyLink: 'https://www.udemy.com/certificate/UC-b9b131d5-a294-444a-8c7e-45dc60585feb/', type: 'pdf', IconComp: Smartphone, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
  ];

  const skillGroups = [
    { category: 'Languages', color: 'purple', skills: ['Kotlin', 'Java', 'C++', 'C', 'SQL'] },
    { category: 'Android & UI', color: 'blue', skills: ['Jetpack Compose', 'XML Layouts', 'Material Design', 'Navigation Component'] },
    { category: 'Architecture', color: 'green', skills: ['MVVM', 'Clean Architecture', 'Hilt (DI)', 'Repository Pattern', 'Coroutines', 'Flow'] },
    { category: 'Libraries', color: 'amber', skills: ['Room', 'Retrofit', 'OkHttp', 'Glide', 'Coil'] },
    { category: 'Backend & Cloud', color: 'pink', skills: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'REST APIs', 'WebSocket'] },
    { category: 'Tools', color: 'cyan', skills: ['Android Studio', 'Git', 'GitHub', 'Figma', 'VS Code', 'Postman'] },
  ];

  const navItems = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];

  const colorMap = {
    purple: 'bg-purple-500/15 text-purple-400 border border-purple-500/20',
    blue:   'bg-blue-500/15 text-blue-400 border border-blue-500/20',
    green:  'bg-green-500/15 text-green-400 border border-green-500/20',
    amber:  'bg-amber-500/15 text-amber-400 border border-amber-500/20',
    pink:   'bg-pink-500/15 text-pink-400 border border-pink-500/20',
    cyan:   'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20',
  };

  const colorMapLight = {
    purple: 'bg-purple-50 text-purple-700 border border-purple-200',
    blue:   'bg-blue-50 text-blue-700 border border-blue-200',
    green:  'bg-green-50 text-green-700 border border-green-200',
    amber:  'bg-amber-50 text-amber-700 border border-amber-200',
    pink:   'bg-pink-50 text-pink-700 border border-pink-200',
    cyan:   'bg-cyan-50 text-cyan-700 border border-cyan-200',
  };

  /* ─── HELPERS ─── */
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '', service: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  /* theme shortcuts */
  const card  = darkMode ? 'bg-white/[0.04] border border-white/10' : 'bg-white border border-slate-200 shadow-sm';
  const cardHover = darkMode
    ? 'hover:bg-white/[0.07] hover:border-purple-500/40 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(168,85,247,0.12)]'
    : 'hover:border-purple-300 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(168,85,247,0.10)]';
  const textPrimary   = darkMode ? 'text-white'     : 'text-slate-900';
  const textSecondary = darkMode ? 'text-slate-400'  : 'text-slate-600';
  const textMuted     = darkMode ? 'text-slate-500'  : 'text-slate-500';
  const sectionAlt    = darkMode ? 'bg-[#0c0c22]'    : 'bg-slate-50';
  const sectionBase   = darkMode ? 'bg-[#07071a]'    : 'bg-white';

  /* ─── PROJECT DETAIL ─── */
  const renderProjectDetail = (project) => (
    <div className={`pt-24 pb-16 px-4 min-h-screen ${sectionBase}`}>
      <div className="max-w-4xl mx-auto">
        <button onClick={() => { setSelectedProject(null); window.scrollTo(0, 0); }}
          className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-xl border transition-all text-purple-400 hover:scale-105 ${card}`}>
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </button>
        <div className={`rounded-2xl p-6 md:p-8 ${card}`}>
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
            <div>
              <h1 className="text-2xl sm:text-4xl font-black mb-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{project.title}</h1>
              <div className="flex items-center gap-2 text-purple-400 text-sm"><Calendar className="w-4 h-4" />{project.date}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.isLiveApp && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white rounded-xl text-sm font-semibold transition-all">
                  <Smartphone className="w-4 h-4" /> Play Store
                </a>
              )}
              {!project.isLiveApp && project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:opacity-90 text-white rounded-xl text-sm font-semibold transition-all">
                  <Github className="w-4 h-4" /> View Code
                </a>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t, i) => (
              <span key={i} className="px-3 py-1 bg-purple-500/15 text-purple-400 border border-purple-500/20 rounded-lg text-xs font-medium">{t}</span>
            ))}
          </div>

          <div className="space-y-6">
            <div>
              <h3 className={`text-lg font-bold mb-3 ${textPrimary}`}>Overview</h3>
              <div className={`space-y-2 text-sm leading-relaxed ${textSecondary}`}>
                {project.description.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
            <div>
              <h3 className={`text-lg font-bold mb-3 ${textPrimary}`}>Key Features</h3>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {project.features.map((f, i) => (
                  <div key={i} className={`flex items-start gap-2.5 p-3 rounded-xl border ${darkMode ? 'bg-white/[0.03] border-white/8' : 'bg-slate-50 border-slate-200'}`}>
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span className={`text-sm ${textSecondary}`}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
            {project.screens?.length > 0 && (
              <div>
                <h3 className={`text-lg font-bold mb-4 ${textPrimary}`}>App Screens</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.screens.map((s, i) => (
                    <div key={i} className="group flex flex-col items-center gap-2">
                      <div className={`w-full overflow-hidden rounded-xl border transition-all group-hover:scale-105 ${darkMode ? 'border-white/10 group-hover:border-purple-500/50' : 'border-slate-200 group-hover:border-purple-300'}`}>
                        <img src={s.src} alt={s.label} className="w-full object-cover" />
                      </div>
                      <span className="text-xs font-medium text-purple-400">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  /* ─── CERT MODAL ─── */
  const CertModal = () => {
    if (!selectedCert) return null;
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 bg-black/90 backdrop-blur-sm"
        onClick={() => setSelectedCert(null)}>
        <div className="relative w-full max-w-4xl h-[88vh] bg-slate-900 rounded-2xl overflow-hidden flex flex-col border border-white/20 shadow-2xl"
          onClick={e => e.stopPropagation()}>
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-800 shrink-0">
            <h3 className="text-base font-bold text-white flex items-center gap-2 truncate pr-4">
              <Award className="text-purple-400 w-4 h-4 shrink-0" />{selectedCert.name}
            </h3>
            <button onClick={() => setSelectedCert(null)} className="p-1.5 hover:bg-white/10 rounded-lg text-white shrink-0"><X className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-hidden bg-slate-950 flex items-center justify-center min-h-0">
            {selectedCert.type === 'pdf'
              ? <iframe src={`${selectedCert.file}#toolbar=0&navpanes=0`} className="w-full h-full" title={selectedCert.name} />
              : <img src={selectedCert.file} alt={selectedCert.name} className="max-w-full max-h-full object-contain p-4" />}
          </div>
          <div className="p-3 bg-slate-800 border-t border-white/10 flex justify-end gap-2 shrink-0">
            {selectedCert.verifyLink && (
              <a href={selectedCert.verifyLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium text-sm transition-colors">
                <CheckCircle className="w-3.5 h-3.5" /> Verify
              </a>
            )}
            <a href={selectedCert.file} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium text-sm transition-colors">
              <ExternalLink className="w-3.5 h-3.5" /> Open
            </a>
          </div>
        </div>
      </div>
    );
  };

  /* ═══════════════════════════════════════
      MAIN RENDER
  ═══════════════════════════════════════ */
  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#07071a] text-white' : 'bg-white text-slate-900'}`}
      style={{ fontFamily: "'Inter', sans-serif" }}>

      <style>{`
        @keyframes float      { 0%,100%{transform:translateY(0)}  50%{transform:translateY(-10px)} }
        @keyframes pulse-slow { 0%,100%{opacity:.35} 50%{opacity:.75} }
        @keyframes gshift     { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        .anim-float  { animation: float 4s ease-in-out infinite; }
        .anim-pulse  { animation: pulse-slow 3s ease-in-out infinite; }
        .g-text {
          background: linear-gradient(135deg,#a855f7,#06b6d4,#a855f7);
          background-size: 200%;
          animation: gshift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .card-t { transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, background .25s ease; }
        .btn-grad { background: linear-gradient(135deg,#7c3aed,#0891b2); transition: opacity .2s, transform .2s, box-shadow .2s; }
        .btn-grad:hover { opacity:.9; transform:translateY(-2px); box-shadow:0 8px 24px rgba(124,58,237,.4); }
        ::-webkit-scrollbar{width:5px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:linear-gradient(#7c3aed,#0891b2);border-radius:4px}
        * { box-sizing: border-box; }
      `}</style>

      {/* ──────────── NAVBAR ──────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? (darkMode ? 'bg-[#07071a]/95 shadow-[0_1px_30px_rgba(0,0,0,.6)]' : 'bg-white/95 shadow-md') + ' backdrop-blur-xl border-b ' + (darkMode ? 'border-white/5' : 'border-slate-200')
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl btn-grad flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-lg">AJ</div>
            <span className={`font-bold text-base sm:text-lg hidden sm:block ${textPrimary}`}>
              Abhishek<span className="g-text"> Jhatiwal</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`capitalize px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item
                    ? 'text-purple-400 bg-purple-500/10'
                    : `${textMuted} hover:${textPrimary} ${darkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`
                }`}>
                {item}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <button onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-all ${darkMode ? 'bg-white/5 hover:bg-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}>
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 btn-grad text-white rounded-xl text-sm font-semibold shadow-lg">
              <MessageCircle className="w-4 h-4" /> Hire Me
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2 rounded-lg ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'}`}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className={`lg:hidden border-t px-4 py-3 space-y-1 ${darkMode ? 'bg-[#07071a] border-white/8' : 'bg-white border-slate-200'}`}>
            {navItems.map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`w-full text-left capitalize px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeSection === item
                    ? 'text-purple-400 bg-purple-500/10'
                    : `${textSecondary} ${darkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`
                }`}>
                {item}
              </button>
            ))}
            <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-2 px-4 py-2.5 btn-grad text-white rounded-xl text-sm font-semibold">
              <MessageCircle className="w-4 h-4" /> Hire Me on WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ─── SELECTED PROJECT ─── */}
      {selectedProject ? renderProjectDetail(selectedProject) : (
        <>
          {/* ══════════════════════════════════
              HERO
          ══════════════════════════════════ */}
          <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* BG orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
              <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] -top-40 -left-32 bg-purple-600/20 anim-pulse" />
              <div className="absolute w-[400px] h-[400px] rounded-full blur-[100px] -bottom-32 -right-32 bg-cyan-600/15 anim-pulse" style={{ animationDelay: '1.5s' }} />
              {/* Grid */}
              <div className="absolute inset-0 opacity-[0.025]"
                style={{ backgroundImage: 'linear-gradient(rgba(168,85,247,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(168,85,247,.4) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
            </div>

            <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-20 pb-8 flex flex-col items-center text-center">
              {/* Available badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium mb-5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                Available for new projects
              </div>

              {/* Avatar */}
              <div className="relative mb-5 anim-float">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 blur-xl opacity-50 anim-pulse" />
                <img src="./abhishek.jpeg" alt="Abhishek Jhatiwal"
                  className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-white/10 shadow-2xl" />
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4">
                <span className={textPrimary}>I Build </span><span className="g-text">Android Apps</span>
                <br />
                <span className={textPrimary}>That </span><span className="g-text">People Love</span>
              </h1>

              {/* Subtitle */}
              <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-7 leading-relaxed ${textSecondary}`}>
                Android Developer specializing in{' '}
                <span className="text-purple-400 font-semibold">Kotlin</span> &amp;{' '}
                <span className="text-cyan-400 font-semibold">Jetpack Compose</span>.
                Building scalable, beautiful mobile experiences for real-world users.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-7">
                <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 btn-grad text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Hire Me
                </a>
                <button onClick={() => scrollTo('projects')}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base border transition-all hover:scale-105 ${
                    darkMode ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}>
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5" /> View My Work
                </button>
                <a href="https://drive.google.com/file/d/15MTtHyK18dBZcrcLGZpUNk1r4ttiRZhI/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-bold text-sm sm:text-base border transition-all hover:scale-105 ${
                    darkMode ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}>
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" /> Resume
                </a>
              </div>

              {/* Social icons */}
              <div className="flex justify-center items-center gap-3 mb-8">
                {[
                  { Icon: Github, href: 'https://github.com/abhishekjhatiwal', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', label: 'LinkedIn' },
                  { Icon: Code, href: 'https://leetcode.com/u/abhishek_jhatiwal/', label: 'LeetCode' },
                  { Icon: Twitter, href: 'https://x.com/j472812', label: 'Twitter' },
                  { Icon: Mail, href: 'mailto:j472812@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className={`p-2.5 rounded-xl border transition-all hover:scale-110 hover:-translate-y-0.5 hover:border-purple-500/50 ${
                      darkMode ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white' : 'border-slate-200 bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-white'
                    }`}>
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>

              {/* Stats — 4 columns on sm+ */}
              <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((st, i) => {
                  const StatIcon = st.icon;
                  return (
                    <div key={i} className={`p-3 sm:p-4 rounded-2xl border card-t text-center ${card} ${cardHover}`}>
                      <StatIcon className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 mx-auto mb-1.5" />
                      <div className="text-xl sm:text-2xl font-black g-text">{st.value}</div>
                      <div className={`text-xs font-medium mt-0.5 ${textMuted}`}>{st.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Scroll hint */}
            <button onClick={() => scrollTo('services')}
              className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 transition-colors animate-bounce ${textMuted} hover:text-purple-400`}>
              <span className="text-xs">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </section>

          {/* ══════════════════════════════════
              SERVICES
          ══════════════════════════════════ */}
          <section id="services" className={`py-16 md:py-24 ${sectionAlt}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">What I Offer</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 ${textPrimary}`}>My <span className="g-text">Services</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>End-to-end Android app development — from concept and design to deployment and maintenance.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {services.map((svc, i) => {
                  const SvcIcon = svc.icon;
                  return (
                    <div key={i} className={`p-5 sm:p-6 rounded-2xl border card-t group relative overflow-hidden ${card} ${cardHover}`}>
                      <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${svc.gradient} opacity-10 group-hover:opacity-20 transition-opacity blur-2xl pointer-events-none`} />
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${svc.gradient} mb-4 shadow-lg`}>
                        <SvcIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className={`text-base sm:text-lg font-bold mb-2 ${textPrimary}`}>{svc.title}</h3>
                      <p className={`text-sm leading-relaxed ${textSecondary}`}>{svc.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA banner */}
              <div className={`mt-10 sm:mt-12 p-6 sm:p-8 rounded-2xl border relative overflow-hidden text-center ${card}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 pointer-events-none" />
                <div className="relative">
                  <h3 className={`text-xl sm:text-2xl font-black mb-2 ${textPrimary}`}>Ready to build your next app?</h3>
                  <p className={`mb-5 text-sm sm:text-base ${textSecondary}`}>Let's discuss your idea and turn it into a real product on the Play Store.</p>
                  <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 btn-grad text-white rounded-2xl font-bold shadow-xl text-sm sm:text-base">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" /> Get a Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              ABOUT
          ══════════════════════════════════ */}
          <section id="about" className={`py-16 md:py-24 ${sectionBase}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">About Me</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary}`}>Who <span className="g-text">I Am</span></h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Photo */}
                <div className="flex justify-center">
                  <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600 to-cyan-600 blur-2xl opacity-25" />
                    <img src="./abhishek.jpeg" alt="Abhishek Jhatiwal"
                      className="relative w-full h-full object-cover rounded-3xl border-4 border-white/10 shadow-2xl" />
                    {/* Floating chips */}
                    <div className={`absolute -bottom-3 -right-3 px-3 py-2 rounded-xl border shadow-lg ${darkMode ? 'bg-[#07071a] border-white/15' : 'bg-white border-slate-200 shadow-md'}`}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-bold text-green-400">Open to Work</span>
                      </div>
                    </div>
                    <div className={`absolute -top-3 -left-3 px-3 py-2 rounded-xl border shadow-lg ${darkMode ? 'bg-[#07071a] border-white/15' : 'bg-white border-slate-200 shadow-md'}`}>
                      <div className="flex items-center gap-1.5">
                        <Smartphone className="w-3.5 h-3.5 text-purple-400" />
                        <span className={`text-xs font-bold ${textPrimary}`}>Android Dev</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <h3 className={`text-xl sm:text-2xl font-black mb-4 ${textPrimary}`}>Android Developer &amp; App Specialist</h3>
                  <p className={`text-sm sm:text-base leading-relaxed mb-3 ${textSecondary}`}>
                    I'm <span className="text-purple-400 font-semibold">Abhishek Jhatiwal</span>, a passionate Android Developer based in Jaipur, India, specializing in building production-ready apps using{' '}
                    <span className="text-cyan-400 font-semibold">Kotlin</span> and <span className="text-cyan-400 font-semibold">Jetpack Compose</span>.
                  </p>
                  <p className={`text-sm sm:text-base leading-relaxed mb-5 ${textSecondary}`}>
                    Currently working as an Android Developer at <span className={`font-semibold ${textPrimary}`}>Rupiksha Services Pvt. Ltd.</span> where I shipped a live app on Google Play. I have completed my B.Tech in CSE and hold <span className="font-semibold text-amber-400">8+ NPTEL certifications</span> from IITs.
                  </p>

                  {/* Highlights grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                    {[
                      { Icon: GraduationCap, label: 'B.Tech CSE', sub: 'Arya Institute, Completed' },
                      { Icon: Building2, label: 'Rupiksha Services', sub: 'Android Developer' },
                      { Icon: MapPin, label: 'Jaipur, Rajasthan', sub: 'India' },
                      { Icon: Star, label: 'NPTEL Discipline Star', sub: 'Jul–Dec 2025' },
                    ].map((item, i) => {
                      const HIcon = item.Icon;
                      return (
                        <div key={i} className={`flex items-start gap-3 p-3 rounded-xl border ${darkMode ? 'bg-white/[0.03] border-white/8' : 'bg-slate-50 border-slate-200'}`}>
                          <HIcon className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                          <div>
                            <div className={`text-xs font-bold ${textPrimary}`}>{item.label}</div>
                            <div className={`text-xs ${textMuted}`}>{item.sub}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 btn-grad text-white rounded-xl font-semibold text-sm shadow-lg">
                      <MessageCircle className="w-4 h-4" /> Let's Talk
                    </a>
                    <a href="https://drive.google.com/file/d/15MTtHyK18dBZcrcLGZpUNk1r4ttiRZhI/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-all hover:scale-105 ${
                        darkMode ? 'border-white/20 text-white hover:bg-white/5' : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}>
                      <Download className="w-4 h-4" /> Download CV
                    </a>
                  </div>
                </div>
              </div>

              {/* NPTEL Star Banner */}
              <div className={`mt-12 p-5 sm:p-7 rounded-2xl border cursor-pointer card-t hover:-translate-y-1 ${
                darkMode ? 'border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/40' : 'border-yellow-200 bg-yellow-50 hover:border-yellow-300'
              }`}
                onClick={() => setSelectedCert({ name: 'NPTEL Discipline Star', file: '/nptel-star-certificate.jpeg', type: 'image' })}>
                <div className="flex flex-col sm:flex-row items-center gap-5">
                  <div className="w-full sm:w-40 md:w-48 h-24 sm:h-28 relative shrink-0">
                    <img src="/nptel-star-certificate.jpeg" alt="NPTEL Star"
                      className="w-full h-full object-cover rounded-xl border border-yellow-500/30" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <h3 className="text-lg font-black text-yellow-400">NPTEL Discipline Star</h3>
                    </div>
                    <p className={`text-xs mb-2 ${darkMode ? 'text-yellow-200/60' : 'text-yellow-600'}`}>July – December 2025</p>
                    <p className={`text-sm leading-relaxed ${textSecondary}`}>Awarded for outstanding academic performance in CSE. Completed 50+ weeks of rigorous coursework with top-tier scores.</p>
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-semibold shrink-0 ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    <Eye className="w-4 h-4" /> View
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              PROJECTS
          ══════════════════════════════════ */}
          <section id="projects" className={`py-16 md:py-24 ${sectionAlt}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">Portfolio</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 ${textPrimary}`}>My <span className="g-text">Projects</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>Real apps built with production-quality code, shipped to real users.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                  <div key={project.id}
                    onClick={() => { setSelectedProject(project); window.scrollTo(0, 0); }}
                    className={`cursor-pointer rounded-2xl border p-5 sm:p-6 card-t group relative overflow-hidden ${
                      project.isLiveApp
                        ? (darkMode ? 'bg-green-500/[0.04] border-green-500/20 hover:border-green-400/50 hover:-translate-y-1.5' : 'bg-green-50 border-green-200 hover:border-green-400 hover:-translate-y-1.5')
                        : `${card} ${cardHover}`
                    }`}>
                    {/* Badge */}
                    {project.isLiveApp
                      ? <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" /> Live
                        </div>
                      : project.featured && <div className="absolute top-4 right-4 px-2.5 py-1 bg-gradient-to-r from-purple-500 to-violet-600 text-white text-xs font-bold rounded-full">Featured</div>
                    }

                    {/* Icon */}
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-md ${
                      project.isLiveApp ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-purple-600 to-violet-600'
                    }`}>
                      {project.isLiveApp ? <Smartphone className="w-5 h-5 text-white" /> : <Code className="w-5 h-5 text-white" />}
                    </div>

                    <h3 className={`text-base sm:text-lg font-black mb-1 ${textPrimary}`}>{project.title}</h3>
                    <p className={`text-xs mb-3 ${textMuted}`}>{project.date}</p>
                    <p className={`text-sm mb-4 leading-relaxed line-clamp-2 ${textSecondary}`}>{project.shortDesc}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                          project.isLiveApp
                            ? (darkMode ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-green-100 text-green-700 border border-green-200')
                            : (darkMode ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-200')
                        }`}>{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-lg ${
                          project.isLiveApp
                            ? (darkMode ? 'bg-green-500/10 text-green-300 border border-green-500/20' : 'bg-green-100 text-green-700 border border-green-200')
                            : (darkMode ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-200')
                        }`}>+{project.tech.length - 3}</span>
                      )}
                    </div>

                    <div className={`flex items-center justify-between pt-3 border-t text-sm font-semibold ${
                      project.isLiveApp
                        ? (darkMode ? 'border-green-500/10 text-green-400' : 'border-green-200 text-green-600')
                        : (darkMode ? 'border-white/5 text-purple-400' : 'border-slate-200 text-purple-600')
                    }`}>
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              SKILLS
          ══════════════════════════════════ */}
          <section id="skills" className={`py-16 md:py-24 ${sectionBase}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">Technical Stack</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary}`}>My <span className="g-text">Skills</span></h2>
              </div>

              {/* Skill groups */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12">
                {skillGroups.map((group, i) => (
                  <div key={i} className={`p-5 sm:p-6 rounded-2xl border card-t ${card} ${cardHover}`}>
                    <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${textMuted}`}>{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, j) => (
                        <span key={j} className={`px-2.5 py-1.5 text-xs sm:text-sm font-medium rounded-xl transition-all hover:scale-105 cursor-default ${
                          darkMode ? colorMap[group.color] : colorMapLight[group.color]
                        }`}>{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className={`text-xl sm:text-2xl font-black text-center mb-8 ${textPrimary}`}>
                  <span className="g-text">Certifications</span>
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  {certifications.map((cert, i) => {
                    const CertIcon = cert.IconComp;
                    return (
                      <div key={i} onClick={() => setSelectedCert(cert)}
                        className={`p-4 sm:p-5 rounded-2xl border cursor-pointer card-t group text-center ${card} ${cardHover}`}>
                        <div className="mb-3 flex justify-center">
                          <div className={`p-2.5 sm:p-3 rounded-xl ${cert.bg} group-hover:scale-110 transition-transform`}>
                            <CertIcon className={`w-6 h-6 sm:w-8 sm:h-8 ${cert.color}`} />
                          </div>
                        </div>
                        <h4 className={`text-xs font-bold mb-1 line-clamp-2 leading-snug ${textPrimary}`}>{cert.name}</h4>
                        <p className={`text-xs ${textMuted}`}>{cert.institution}</p>
                        <div className={`mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1 ${cert.color}`}>
                          <Eye className="w-3 h-3" /> View
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              EXPERIENCE
          ══════════════════════════════════ */}
          <section id="experience" className={`py-16 md:py-24 ${sectionAlt}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">Career</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary}`}>Work <span className="g-text">Experience</span></h2>
              </div>

              <div className="relative space-y-6">
                {/* Timeline line */}
                <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-px bg-gradient-to-b from-purple-600 to-cyan-600 hidden sm:block" />

                {/* Internship */}
                <div className="relative sm:pl-16">
                  <div className="absolute left-[14px] sm:left-[18px] top-5 w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 border-2 border-[#07071a] shadow-lg hidden sm:block" />
                  <div className={`p-5 sm:p-7 rounded-2xl border card-t ${card} ${cardHover}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-lg sm:text-xl font-black text-purple-400 mb-1">Android Developer Intern</h3>
                        <div className="flex items-center gap-2 mb-1">
                          <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                          <span className={`font-semibold text-sm ${textPrimary}`}>Rupiksha Services Pvt. Ltd.</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span className={`text-xs ${textMuted}`}>Jaipur, India</span>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-purple-400" />
                          <span className={`text-xs ${textSecondary}`}>Dec 2025 – Present</span>
                        </div>
                        <span className="px-3 py-1 bg-purple-500/15 text-purple-400 border border-purple-500/20 rounded-full text-xs font-bold">Internship</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {[
                        'Developed and shipped the Rupiksha Android app (now live on Play Store) using Kotlin & Jetpack Compose',
                        'Implemented MVVM architecture with ViewModel, Hilt DI, and Repository pattern for clean, testable code',
                        'Integrated Firebase Authentication, Firestore real-time database, and Retrofit for REST API consumption',
                        'Collaborated with design and backend teams on UI/UX, debugging, testing, and production deployment',
                      ].map((item, j) => (
                        <li key={j} className={`flex items-start gap-2.5 text-sm ${textSecondary}`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Education */}
                <div className="relative sm:pl-16">
                  <div className="absolute left-[14px] sm:left-[18px] top-5 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-[#07071a] shadow-lg hidden sm:block" />
                  <div className={`p-5 sm:p-7 rounded-2xl border card-t ${card} ${cardHover}`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 rounded-xl bg-cyan-500/15 shrink-0"><GraduationCap className="w-5 h-5 text-cyan-400" /></div>
                      <div>
                        <h3 className={`text-base sm:text-lg font-black mb-1 ${textPrimary}`}>B.Tech — Computer Science &amp; Engineering</h3>
                        <p className={`text-sm mb-2 ${textSecondary}`}>Arya Institute of Engineering Technology &amp; Management, Jaipur</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span className={`text-xs ${textMuted}`}>August 2022 – August 2026</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              CONTACT
          ══════════════════════════════════ */}
          <section id="contact" className={`py-16 md:py-24 ${sectionBase}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs sm:text-sm font-medium border border-purple-500/20 mb-4">Get In Touch</span>
                <h2 className={`text-3xl sm:text-4xl md:text-5xl font-black mb-3 ${textPrimary}`}>Let's <span className="g-text">Work Together</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>
                  Have an app idea? Looking for an Android developer? I'm available for freelance and full-time opportunities.
                </p>
              </div>

              <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
                {/* Contact cards */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
                  {[
                    { Icon: Mail, label: 'Email', value: 'j472812@gmail.com', href: 'mailto:j472812@gmail.com', color: 'text-red-400', bg: 'bg-red-500/10 border-red-500/20' },
                    { Icon: Phone, label: 'Phone', value: '+91-6367706177', href: 'tel:+916367706177', color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
                    { Icon: MessageCircle, label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/916367706177', color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                    { Icon: Linkedin, label: 'LinkedIn', value: '/in/abhishek-jhatiwal', href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
                    { Icon: Github, label: 'GitHub', value: '/abhishekjhatiwal', href: 'https://github.com/abhishekjhatiwal', color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20' },
                    { Icon: MapPin, label: 'Location', value: 'Jaipur, Rajasthan, India', href: null, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20' },
                  ].map((item, i) => {
                    const CIcon = item.Icon;
                    const inner = (
                      <>
                        <div className={`p-2 rounded-xl border shrink-0 ${item.bg}`}><CIcon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} /></div>
                        <div className="min-w-0">
                          <p className={`text-xs font-bold uppercase tracking-wider ${textMuted}`}>{item.label}</p>
                          <p className={`text-sm font-semibold truncate ${textPrimary} group-hover:${item.color} transition-colors`}>{item.value}</p>
                        </div>
                        {item.href && <ExternalLink className={`w-3.5 h-3.5 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${item.color}`} />}
                      </>
                    );
                    return item.href ? (
                      <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-4 rounded-2xl border card-t group ${card} ${cardHover}`}>{inner}</a>
                    ) : (
                      <div key={i} className={`flex items-center gap-3 p-4 rounded-2xl border ${card}`}>{inner}</div>
                    );
                  })}
                </div>

                {/* Contact form */}
                <div className={`lg:col-span-3 p-5 sm:p-8 rounded-2xl border ${card}`}>
                  <h3 className={`text-xl font-black mb-5 ${textPrimary}`}>Send Me a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe', key: 'name' },
                        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com', key: 'email' },
                      ].map(field => (
                        <div key={field.id}>
                          <label htmlFor={field.id} className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>{field.label}</label>
                          <input id={field.id} type={field.type} required value={formData[field.key]}
                            onChange={e => setFormData({ ...formData, [field.key]: e.target.value })}
                            className={`w-full px-4 py-2.5 rounded-xl border outline-none text-sm transition-all focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/60 ${
                              darkMode ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                            }`}
                            placeholder={field.placeholder} />
                        </div>
                      ))}
                    </div>

                    <div className="relative">
                      <label className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Service Needed</label>
                      {/* Custom dropdown */}
                      <button
                        type="button"
                        onClick={() => setServiceDropOpen(o => !o)}
                        onBlur={() => setTimeout(() => setServiceDropOpen(false), 150)}
                        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl border outline-none text-sm transition-all ${
                          serviceDropOpen ? 'ring-2 ring-purple-500/20 border-purple-500/60' : ''
                        } ${
                          darkMode
                            ? 'bg-white/5 border-white/10 text-white hover:bg-white/8 hover:border-white/20'
                            : 'bg-slate-50 border-slate-200 text-slate-900 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <span className={formData.service ? (darkMode ? 'text-white' : 'text-slate-900') : (darkMode ? 'text-slate-500' : 'text-slate-400')}>
                          {formData.service || 'Select a service...'}
                        </span>
                        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                          serviceDropOpen ? 'rotate-180' : ''
                        } ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                      </button>

                      {serviceDropOpen && (
                        <div className={`absolute top-full left-0 right-0 mt-1.5 rounded-xl border shadow-2xl z-50 overflow-hidden ${
                          darkMode
                            ? 'bg-[#0f0f28] border-white/10 shadow-black/60'
                            : 'bg-white border-slate-200 shadow-slate-200/80'
                        }`}>
                          {['', ...services.map(s => s.title), 'Other'].map((opt, i) => (
                            <button
                              key={i}
                              type="button"
                              onMouseDown={() => {
                                setFormData({ ...formData, service: opt });
                                setServiceDropOpen(false);
                              }}
                              className={`w-full text-left px-4 py-2.5 text-sm transition-all ${
                                opt === '' ? 'hidden' : ''
                              } ${
                                formData.service === opt
                                  ? (darkMode ? 'bg-purple-500/20 text-purple-300' : 'bg-purple-50 text-purple-700')
                                  : (darkMode
                                    ? 'text-slate-300 hover:bg-white/5 hover:text-white'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900')
                              }`}
                            >
                              {opt === '' ? '' : opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className={`block text-xs font-bold uppercase tracking-wider mb-1.5 ${textMuted}`}>Your Message</label>
                      <textarea id="message" required rows={5} value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border outline-none text-sm resize-none transition-all focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500/60 ${
                          darkMode ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                        placeholder="Tell me about your app idea or project..." />
                    </div>

                    <button type="submit" disabled={formStatus === 'sending'}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 btn-grad text-white rounded-xl font-bold shadow-xl disabled:opacity-60 disabled:cursor-not-allowed text-sm sm:text-base">
                      {formStatus === 'sending' ? 'Sending...'
                        : formStatus === 'success' ? <><CheckCircle className="w-5 h-5" /> Message Sent!</>
                        : <><Send className="w-5 h-5" /> Send Message</>}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              FOOTER
          ══════════════════════════════════ */}
          <footer className={`py-8 px-4 border-t ${darkMode ? 'bg-[#050510] border-white/5' : 'bg-slate-900 border-slate-800'}`}>
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl btn-grad flex items-center justify-center text-white font-black text-xs shrink-0">AJ</div>
                <span className="text-slate-400 text-sm">© 2025 <span className="g-text font-semibold">Abhishek Jhatiwal</span>. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/abhishekjhatiwal' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/' },
                  { Icon: Twitter, href: 'https://x.com/j472812' },
                  { Icon: Mail, href: 'mailto:j472812@gmail.com' },
                ].map(({ Icon, href }, i) => (
                  <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </>
      )}

      {/* ── Floating WhatsApp ── */}
      {!selectedProject && (
        <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-5 right-5 z-50 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20c05a] shadow-2xl flex items-center justify-center transition-all hover:scale-110 group"
          style={{ width: '52px', height: '52px' }}>
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
          <span className="absolute right-full mr-2 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all pointer-events-none border border-white/10">
            Chat on WhatsApp
          </span>
        </a>
      )}

      {/* ── Cert Modal ── */}
      <CertModal />
    </div>
  );
}
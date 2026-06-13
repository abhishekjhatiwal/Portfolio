import React, { useState, useEffect, useRef } from 'react';
import {
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code,
  Briefcase, Award, GraduationCap, ChevronDown, Twitter, Download,
  Sun, Moon, Send, Calendar, Building2, Star, ArrowLeft, X, Eye,
  CheckCircle, Smartphone, Coffee, Cpu, Terminal, Database,
  Network, Box, Cloud, Menu, Layers, Zap, Globe, Users, Clock, Rocket,
  Check, ChevronUp, MessageSquare, ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';

// Component imports
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import Preloader from './components/Preloader';
import Phone3D from './components/Phone3D';
import ParticleNetwork from './components/ParticleNetwork';
import TiltCard from './components/TiltCard';
import TechConstellation from './components/TechConstellation';
import FlipCard from './components/FlipCard';
import MagneticButton from './components/MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  // Filters for project categories
  const [projectFilter, setProjectFilter] = useState('All');

  // Multi-step Contact Form State
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Experience accordion state
  const [expandedRole, setExpandedRole] = useState(null);

  // Refs for Scroll Trigger stats counter
  const statsContainerRef = useRef(null);

  // Initialize Lenis Smooth Scroll & Preloader timeout
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Simulate preloader
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  // System Dark/Light Mode Detection
  useEffect(() => {
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isSystemDark);
  }, []);

  // Scroll detection for active navbar link and scrolled class
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = ['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'];
      const pos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Count-up animation for stats
  useEffect(() => {
    if (!isLoaded) return;
    const targets = document.querySelectorAll('.stat-count');
    targets.forEach((target) => {
      const targetVal = parseInt(target.getAttribute('data-target'), 10);
      gsap.fromTo(target, 
        { textContent: 0 }, 
        {
          textContent: targetVal,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: target,
            start: 'top 85%',
          },
          snap: { textContent: 1 },
          onUpdate: function() {
            if (target.id === 'stat-client') {
              target.textContent = this.targets()[0].textContent + '%';
            } else {
              target.textContent = this.targets()[0].textContent + '+';
            }
          }
        }
      );
    });
  }, [isLoaded]);

  // Show visual toast notification
  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Copy Email Function
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('j472812@gmail.com');
    triggerToast('Email copied to clipboard!');
    confetti({ particleCount: 40, spread: 60, origin: { y: 0.8 } });
  };

  // Download CV progress mimic
  const handleDownloadCV = () => {
    triggerToast('Preparing your CV download...');
    setTimeout(() => {
      window.open('https://drive.google.com/file/d/15MTtHyK18dBZcrcLGZpUNk1r4ttiRZhI/view?usp=sharing', '_blank');
      confetti({ particleCount: 80, spread: 80 });
    }, 1200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // ─── EmailJS Configuration ───
    // Replace these with your actual EmailJS credentials:
    // 1. Sign up free at https://www.emailjs.com
    // 2. Add an Email Service (Gmail) → copy the Service ID
    // 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{service}}, {{message}}
    // 4. Go to Account → copy your Public Key
    const SERVICE_ID  = 'service_l9oa3ca';
    const TEMPLATE_ID = 'template_owo1qui';
    const PUBLIC_KEY  = 'K12OLhLunb_XM2bS5';

    const templateParams = {
      from_name:  formData.name,
      from_email: formData.email,
      service:    formData.service || 'Not specified',
      message:    formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setFormStatus('success');
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        triggerToast('Message sent successfully!');
        setFormData({ name: '', email: '', service: '', message: '' });
        setFormStep(1);
        setTimeout(() => setFormStatus(''), 4000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setFormStatus('');
        triggerToast('Failed to send — please try WhatsApp instead.');
      });
  };

  const scrollTo = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ─── DATA ─── */
  const services = [
    { icon: Smartphone, title: 'Android App Development', desc: 'Native Android apps built with Kotlin & Jetpack Compose — fast, modern, and pixel-perfect.', gradient: 'from-blue-600 to-indigo-600', startingPrice: 'Starting from $800' },
    { icon: Layers, title: 'MVVM Clean Architecture', desc: 'Scalable, maintainable codebases using MVVM, Hilt DI, and Repository patterns.', gradient: 'from-indigo-600 to-purple-600', startingPrice: 'Starting from $600' },
    { icon: Zap, title: 'Firebase & Real-time Backend', desc: 'Auth, Firestore, Cloud Functions, Storage, and Push Notifications integrated seamlessly.', gradient: 'from-purple-600 to-pink-600', startingPrice: 'Starting from $500' },
    { icon: Globe, title: 'REST API Integration', desc: 'Retrofit + OkHttp integrations with proper error handling, caching, and offline support.', gradient: 'from-pink-600 to-rose-600', startingPrice: 'Starting from $400' },
    { icon: Rocket, title: 'Play Store Deployment', desc: 'End-to-end app publishing — signing, release management, store listing optimization.', gradient: 'from-rose-600 to-orange-600', startingPrice: 'Starting from $200' },
    { icon: CheckCircle, title: 'App UI/UX Design', desc: 'Figma to Android — translating designs into smooth, responsive Compose UI screens.', gradient: 'from-orange-600 to-blue-600', startingPrice: 'Starting from $350' },
  ];

  const stats = [
    { value: 5, label: 'Apps Built', icon: Smartphone, id: 'stat-apps' },
    { value: 8, label: 'Certifications', icon: Award, id: 'stat-certs' },
    { value: 1, label: 'Yrs Experience', icon: Clock, id: 'stat-exp' },
    { value: 100, label: 'Client Focused', icon: Users, id: 'stat-client' },
  ];

  const projects = [
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
    { category: 'Languages', color: '#a855f7', skills: ['Kotlin', 'Java', 'C++', 'C', 'SQL'], percent: 92 },
    { category: 'Android & UI', color: '#3b82f6', skills: ['Jetpack Compose', 'XML Layouts', 'Material Design', 'Navigation Component'], percent: 95 },
    { category: 'Architecture', color: '#10b981', skills: ['MVVM', 'Clean Architecture', 'Hilt (DI)', 'Repository Pattern', 'Coroutines', 'Flow'], percent: 88 },
    { category: 'Libraries', color: '#f59e0b', skills: ['Room', 'Retrofit', 'OkHttp', 'Glide', 'Coil'], percent: 85 },
    { category: 'Backend & Cloud', color: '#ec4899', skills: ['Firebase Auth', 'Firestore', 'Firebase Storage', 'Google Cloud (GCP)', 'REST APIs', 'WebSocket'], percent: 90 },
    { category: 'Tools', color: '#06b6d4', skills: ['Android Studio', 'Git', 'GitHub', 'Figma', 'Postman'], percent: 82 },
  ];

  const filteredProjects = projectFilter === 'All'
    ? projects
    : projects.filter(p => p.category === projectFilter || (projectFilter === 'Published' && p.published));

  /* Theme color styling shortcuts */
  const card = darkMode ? 'bg-white/[0.03] border border-white/10 backdrop-blur-md' : 'bg-white border border-slate-200 shadow-sm';
  const textPrimary = darkMode ? 'text-white' : 'text-slate-900';
  const textSecondary = darkMode ? 'text-slate-400' : 'text-slate-600';
  const textMuted = darkMode ? 'text-slate-500' : 'text-slate-500';
  const sectionAlt = darkMode ? 'bg-[#0a0a24]' : 'bg-slate-50/50';
  const sectionBase = darkMode ? 'bg-[#07071a]' : 'bg-white';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#07071a] text-white' : 'bg-white text-slate-900'}`} style={{ fontFamily: "'Inter', sans-serif" }}>
      
      {/* Visual Identity & Core Layout overlays */}
      <CustomCursor />
      <NoiseOverlay />
      <Preloader isLoaded={isLoaded} />

      {/* Visual Toast Notification popup */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] bg-blue-600 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-2xl flex items-center gap-2 border border-blue-400/30"
          >
            <Check className="w-5 h-5" /> {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──────────── NAVBAR ──────────── */}
      <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? (darkMode ? 'bg-[#07071a]/90 shadow-[0_4px_30px_rgba(0,0,0,.6)]' : 'bg-white/90 shadow-md') + ' backdrop-blur-xl border-b ' + (darkMode ? 'border-white/5' : 'border-slate-200')
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2.5 shrink-0">
            <img src="/abhishek.jpeg" alt="Abhishek Verma" className="w-9 h-9 rounded-xl object-cover shadow-lg shadow-blue-500/20" />
            <span className={`font-bold text-lg hidden sm:block ${textPrimary}`}>
              Abhishek<span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent"> Verma</span>
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1">
            {['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`capitalize px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item
                    ? 'text-blue-500 bg-blue-500/10'
                    : `${textSecondary} hover:${textPrimary} ${darkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`
                }`}>
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Pulsing indicator badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for work
            </div>

            <button onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Dark Mode"
              className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-white/5 hover:bg-white/10 text-slate-300' : 'bg-slate-100 hover:bg-slate-200 text-slate-600'}`}>
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Navigation Menu"
              className={`lg:hidden p-2.5 rounded-xl ${darkMode ? 'bg-white/5 hover:bg-white/10' : 'bg-slate-100 hover:bg-slate-200'}`}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className={`lg:hidden border-t px-6 py-4 space-y-2 ${darkMode ? 'bg-[#07071a] border-white/8' : 'bg-white border-slate-200'}`}>
            {['home', 'services', 'about', 'projects', 'skills', 'experience', 'contact'].map(item => (
              <button key={item} onClick={() => scrollTo(item)}
                className={`w-full text-left capitalize px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === item
                    ? 'text-blue-500 bg-blue-500/10'
                    : `${textSecondary} ${darkMode ? 'hover:bg-white/5' : 'hover:bg-slate-100'}`
                }`}>
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ─── SELECTED PROJECT PAGE VIEW ─── */}
      {selectedProject ? (
        <div className={`pt-32 pb-20 px-6 min-h-screen ${sectionBase}`}>
          <div className="max-w-4xl mx-auto">
            <button onClick={() => { setSelectedProject(null); window.scrollTo(0, 0); }}
              className={`flex items-center gap-2 mb-8 px-5 py-2.5 rounded-xl border transition-all text-blue-500 hover:scale-105 ${card}`}>
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </button>
            <div className={`rounded-3xl p-8 md:p-10 ${card}`}>
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl sm:text-5xl font-black mb-2 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">{selectedProject.title}</h1>
                  <div className="flex items-center gap-2 text-blue-500 text-sm"><Calendar className="w-4 h-4" />{selectedProject.date}</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.published && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white rounded-2xl text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20">
                      <Smartphone className="w-4 h-4" /> Play Store
                    </a>
                  )}
                  {!selectedProject.published && selectedProject.link && (
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white rounded-2xl text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
                      <Github className="w-4 h-4" /> View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-3.5 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl text-xs font-semibold">{t}</span>
                ))}
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>Overview</h3>
                  <div className={`space-y-3 text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                    {selectedProject.description.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
                <div>
                  <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>Key Features</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((f, i) => (
                      <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl border ${darkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        <span className={`text-sm ${textSecondary}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {selectedProject.screens?.length > 0 && (
                  <div>
                    <h3 className={`text-xl font-bold mb-4 ${textPrimary}`}>App Screenshots</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {selectedProject.screens.map((s, i) => (
                        <div key={i} className="group flex flex-col items-center gap-2">
                          <div className={`w-full overflow-hidden rounded-2xl border transition-all duration-300 group-hover:scale-105 ${darkMode ? 'border-white/10 group-hover:border-blue-500/50' : 'border-slate-200 group-hover:border-blue-300'}`}>
                            <img src={s.src} alt={s.label} className="w-full object-cover" />
                          </div>
                          <span className="text-xs font-semibold text-blue-400 mt-2">{s.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          {/* ══════════════════════════════════
              HERO SECTION
          ══════════════════════════════════ */}
          <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-6">
            <ParticleNetwork darkMode={darkMode} />

            {/* Glowing lights background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
              <div className="absolute w-[600px] h-[600px] rounded-full blur-[140px] -top-40 -left-32 bg-blue-600/10 anim-pulse-slow" />
              <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] -bottom-32 -right-32 bg-purple-600/10 anim-pulse-slow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Available Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-bold mb-6">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  Available for Remote & Freelance Projects
                </div>

                {/* Animated Typewriter Headline */}
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
                  <span className={textPrimary}>I Build </span>
                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Android Apps</span>
                  <br />
                  <span className={textPrimary}>That </span>
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">People Love</span>
                </h1>

                <p className={`text-sm sm:text-base md:text-lg max-w-xl mb-8 leading-relaxed ${textSecondary}`}>
                  Hi, I'm <span className="text-blue-500 font-bold">Abhishek Verma</span>. I specialize in crafting elegant, responsive native Android apps using <span className="font-semibold text-purple-400">Kotlin</span>, <span className="font-semibold text-indigo-400">Jetpack Compose</span>, and <span className="font-semibold text-emerald-400">Clean MVVM</span> principles.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                  <MagneticButton>
                    <button onClick={() => scrollTo('contact')} className="flex items-center gap-2 px-7 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-blue-500/20 hover:opacity-95 transition-all">
                      <MessageSquare className="w-5 h-5" /> Hire Me
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button onClick={() => scrollTo('projects')} className={`flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base border transition-all hover:bg-slate-100/5 ${card}`}>
                      <Eye className="w-5 h-5 text-blue-500" /> View My Work
                    </button>
                  </MagneticButton>
                  <MagneticButton>
                    <button onClick={handleDownloadCV} className={`flex items-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base border transition-all hover:bg-slate-100/5 ${card}`}>
                      <Download className="w-5 h-5 text-indigo-500" /> Resume
                    </button>
                  </MagneticButton>
                </div>

                {/* Social Connect links with Magnetic effects */}
                <div className="flex items-center justify-center lg:justify-start gap-3.5">
                  {[
                    { Icon: Github, href: 'https://github.com/abhishekjhatiwal', label: 'GitHub' },
                    { Icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', label: 'LinkedIn' },
                    { Icon: Code, href: 'https://leetcode.com/u/abhishek_jhatiwal/', label: 'LeetCode' },
                    { Icon: Twitter, href: 'https://x.com/j472812', label: 'Twitter' },
                    { Icon: Mail, href: 'mailto:j472812@gmail.com', label: 'Email' },
                  ].map(({ Icon, href, label }) => (
                    <MagneticButton key={label}>
                      <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                        className={`p-3 rounded-2xl border flex items-center justify-center transition-all duration-300 hover:border-blue-500/50 hover:text-blue-500 ${
                          darkMode ? 'border-white/10 bg-white/5 text-slate-400' : 'border-slate-200 bg-slate-50 text-slate-500'
                        }`}>
                        <Icon className="w-5 h-5" />
                      </a>
                    </MagneticButton>
                  ))}
                </div>
              </div>

              {/* 3D phone mockup canvas */}
              <div className="lg:col-span-5 flex justify-center relative">
                <Phone3D />
              </div>
            </div>

            {/* GSAP Scroll Trigger Stats counters */}
            <div ref={statsContainerRef} className="w-full max-w-7xl mx-auto px-6 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {stats.map((st) => {
                const StatIcon = st.icon;
                return (
                  <div key={st.id} className={`p-6 rounded-3xl border text-center flex flex-col justify-center items-center ${card}`}>
                    <StatIcon className="w-6 h-6 text-blue-500 mb-2.5" />
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent stat-count font-mono" id={st.id} data-target={st.value}>
                      0
                    </div>
                    <div className={`text-xs font-bold uppercase tracking-wider mt-1.5 ${textMuted}`}>{st.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ══════════════════════════════════
              SERVICES SECTION
          ══════════════════════════════════ */}
          <section id="services" className={`py-20 md:py-28 ${sectionAlt}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">Services</span>
                <h2 className={`text-4xl md:text-5xl font-black mb-4 ${textPrimary}`}>What <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">I Offer</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>Custom solutions built utilizing modern tools and clean software architectures.</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((svc, i) => {
                  const SvcIcon = svc.icon;
                  return (
                    <TiltCard key={i} className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between h-full group ${card}`}>
                      <div>
                        <div className={`inline-flex p-3.5 rounded-2xl bg-gradient-to-br ${svc.gradient} text-white mb-5 shadow-lg shadow-indigo-500/10`}>
                          <SvcIcon className="w-6 h-6" />
                        </div>
                        <h3 className={`text-lg sm:text-xl font-bold mb-3 ${textPrimary}`}>{svc.title}</h3>
                        <p className={`text-sm leading-relaxed mb-6 ${textSecondary}`}>{svc.desc}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-xs font-bold text-blue-500">{svc.startingPrice}</span>
                      </div>
                    </TiltCard>
                  );
                })}
              </div>

              {/* Consultation / Booking CTA banner */}
              <div className={`mt-12 p-8 sm:p-10 rounded-3xl border relative overflow-hidden text-center ${card}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 pointer-events-none" />
                <div className="relative z-10 max-w-xl mx-auto">
                  <h3 className={`text-2xl sm:text-3xl font-black mb-3 ${textPrimary}`}>Let's discuss your custom project</h3>
                  <p className={`mb-6 text-sm ${textSecondary}`}>Schedule a free discovery call to run through the project scope, technical specifications, and timeline estimates.</p>
                  <div className="flex flex-wrap justify-center gap-3.5">
                    <button onClick={() => setShowCalendly(true)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold text-sm sm:text-base shadow-xl shadow-blue-500/20">
                      <Calendar className="w-5 h-5" /> Book a Call (Calendly)
                    </button>
                    <a href="https://wa.me/916367706177" target="_blank" rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-6 py-3.5 border rounded-2xl font-bold text-sm sm:text-base transition-all hover:bg-slate-100/5 ${card}`}>
                      <MessageSquare className="w-5 h-5 text-emerald-500" /> WhatsApp Direct
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              ABOUT SECTION (BENTO GRID & TIMELINE)
          ══════════════════════════════════ */}
          <section id="about" className={`py-20 md:py-28 ${sectionBase}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">About Me</span>
                <h2 className={`text-4xl md:text-5xl font-black ${textPrimary}`}>Architecting <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Digital Interfaces</span></h2>
              </div>

              {/* Bento Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {/* Education Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${card} md:col-span-2`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <GraduationCap className="w-6 h-6 text-blue-500" />
                      <h3 className={`text-xl font-bold ${textPrimary}`}>Education</h3>
                    </div>
                    <p className={`text-sm sm:text-base leading-relaxed ${textSecondary}`}>
                      Completed Bachelor of Technology (B.Tech) in <span className="text-blue-500 font-bold">Computer Science & Engineering</span> from Arya Institute of Engineering Technology & Management (Jaipur), graduating in August 2026. Specialized in mobile application design, database architectures, and algorithm patterns.
                    </p>
                  </div>
                  <div className={`mt-6 p-4 rounded-2xl border ${darkMode ? 'bg-white/[0.02] border-white/5' : 'bg-slate-50 border-slate-200'} text-xs flex justify-between items-center`}>
                    <span className={textMuted}>Academic Coursework (2022 - 2026)</span>
                    <span className="text-blue-400 font-semibold">Jaipur, India</span>
                  </div>
                </div>

                {/* Location Card */}
                <div className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${card}`}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <MapPin className="w-6 h-6 text-indigo-500" />
                      <h3 className={`text-xl font-bold ${textPrimary}`}>Current Location</h3>
                    </div>
                    <p className={`text-sm ${textSecondary}`}>
                      Operating from the pink city, Jaipur, Rajasthan, India. Open for remote projects and international collaborations.
                    </p>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <div className="relative w-full h-24 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
                      <div className="absolute inset-0 bg-blue-500/10 blur-xl animate-pulse" />
                      <span className="text-xs font-black text-blue-400 tracking-wider">JAIPUR, RAJASTHAN</span>
                    </div>
                  </div>
                </div>

                {/* GitHub Contribution Mimic Heatmap */}
                <div className={`p-6 sm:p-8 rounded-3xl border ${card} md:col-span-3`}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Github className="w-6 h-6 text-purple-500" />
                      <h3 className={`text-xl font-bold ${textPrimary}`}>Coding Activity (GitHub streaks)</h3>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold">1,240 contributions in the last year</div>
                  </div>
                  {/* Heatmap Grid SVG Layout */}
                  <div className="w-full overflow-x-auto">
                    <div className="min-w-[700px] flex gap-1.5 justify-between">
                      {Array.from({ length: 48 }).map((_, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-1.5">
                          {Array.from({ length: 7 }).map((_, rowIdx) => {
                            // Generate random opacity levels mimicking contribution frequency
                            const level = Math.random() > 0.8 ? 3 : Math.random() > 0.4 ? 2 : Math.random() > 0.15 ? 1 : 0;
                            const colors = [
                              darkMode ? 'bg-slate-900/60' : 'bg-slate-100',
                              'bg-emerald-900/40',
                              'bg-emerald-700/60',
                              'bg-emerald-400'
                            ];
                            return (
                              <div
                                key={rowIdx}
                                className={`w-3.5 h-3.5 rounded-[3px] transition-all hover:scale-110 cursor-pointer ${colors[level]}`}
                                title={`Activity Level: ${level}`}
                              />
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 text-[10px] text-slate-500 mt-4 font-semibold uppercase">
                    <span>Less</span>
                    <div className="flex gap-1 items-center">
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-900/60" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-900/40" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-700/60" />
                      <div className="w-2.5 h-2.5 rounded-[2px] bg-emerald-400" />
                    </div>
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Horizontal Scroll Career Timeline */}
              <h3 className={`text-2xl font-black mb-8 ${textPrimary}`}>Professional Journey</h3>
              <div className="w-full overflow-x-auto pb-4">
                <div className="min-w-[800px] relative pt-12 flex justify-between gap-6 px-4">
                  {/* Connect Line */}
                  <div className="absolute left-0 right-0 top-[28px] h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500" />

                  {[
                    { year: '2022', title: 'CSE Matriculation', company: 'Arya Institute', desc: 'Commenced B.Tech in Computer Science Engineering. Learned data structures and OOP.' },
                    { year: '2023', title: 'Java & Algorithms', company: 'Self Directed', desc: 'Achieved Java certifications, mastering collections and network interfaces.' },
                    { year: '2024', title: 'Modern Android', company: 'NPTEL Courseworks', desc: 'Initiated active Android build testing, Kotlin, and Jetpack Compose.' },
                    { year: '2025', title: 'Android Developer Intern', company: 'Rupiksha Services', desc: 'Shipped live production applications. Handled backend database nodes and API requests.' },
                  ].map((milestone, idx) => (
                    <div key={idx} className="flex-1 relative">
                      {/* Timeline Node Point */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-[-26px] w-4 h-4 rounded-full bg-blue-500 border-4 border-[#07071a] shadow-lg shadow-blue-500/50 z-10" />
                      
                      <div className={`p-5 rounded-2xl border ${card} text-center flex flex-col items-center`}>
                        <span className="text-xs font-black bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full mb-2.5">{milestone.year}</span>
                        <h4 className={`text-sm font-black ${textPrimary}`}>{milestone.title}</h4>
                        <span className={`text-[10px] uppercase font-bold text-indigo-400 mt-1 mb-2`}>{milestone.company}</span>
                        <p className={`text-xs ${textSecondary} leading-relaxed`}>{milestone.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              PROJECTS SECTION
          ══════════════════════════════════ */}
          <section id="projects" className={`py-20 md:py-28 ${sectionAlt}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">Showcase</span>
                <h2 className={`text-4xl md:text-5xl font-black mb-4 ${textPrimary}`}>My <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Projects</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>Explore the live builds, clean source code, and design architecture.</p>
              </div>

              {/* Filters Menu */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
                {['All', 'Published', 'MVVM', 'Firebase', 'Compose'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setProjectFilter(f)}
                    className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      projectFilter === f
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                        : `${darkMode ? 'bg-white/5 text-slate-400 hover:bg-white/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Grid of Projects */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => { setSelectedProject(project); window.scrollTo(0, 0); }}
                    className={`cursor-pointer rounded-3xl border p-6 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 ${card} ${
                      project.published
                        ? 'border-emerald-500/20 shadow-lg shadow-emerald-500/5'
                        : ''
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        {/* Left Icon */}
                        <div className={`p-3 rounded-2xl ${
                          project.published ? 'bg-emerald-500/15 text-emerald-400' : 'bg-blue-500/15 text-blue-400'
                        }`}>
                          <Smartphone className="w-5 h-5" />
                        </div>
                        {/* Right Badge */}
                        {project.published ? (
                          <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Published
                          </span>
                        ) : (
                          <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
                            Repository
                          </span>
                        )}
                      </div>

                      <h3 className={`text-xl font-bold mb-1.5 ${textPrimary} group-hover:text-blue-500 transition-colors`}>{project.title}</h3>
                      <span className={`text-xs ${textMuted}`}>{project.date}</span>
                      <p className={`text-sm leading-relaxed mt-3 mb-5 ${textSecondary} line-clamp-2`}>{project.shortDesc}</p>
                    </div>

                    <div>
                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.slice(0, 3).map((t, idx) => (
                          <span key={idx} className="px-2.5 py-1 bg-white/[0.04] border border-white/5 rounded-lg text-[10px] font-semibold text-slate-400">{t}</span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2.5 py-1 bg-blue-500/10 rounded-lg text-[10px] font-semibold text-blue-400">+{project.tech.length - 3}</span>
                        )}
                      </div>

                      {/* Detail CTA Row */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 text-sm font-bold text-blue-500">
                        <span>Details & Screenshots</span>
                        <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              SKILLS SECTION
          ══════════════════════════════════ */}
          <section id="skills" className={`py-20 md:py-28 ${sectionBase}`}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">Stack</span>
                <h2 className={`text-4xl md:text-5xl font-black ${textPrimary}`}>Technical <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Proficiencies</span></h2>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-center mb-16">
                {/* Visual SVG graph constellation */}
                <div className="lg:col-span-5 flex justify-center">
                  <TechConstellation />
                </div>

                {/* Animated Skill progress meters */}
                <div className="lg:col-span-7 space-y-6">
                  {skillGroups.map((group, idx) => (
                    <div key={idx} className={`p-5 sm:p-6 rounded-3xl border ${card}`}>
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className={`text-sm font-black uppercase tracking-wider ${textPrimary}`}>{group.category}</h4>
                          <div className="flex flex-wrap gap-1.5 mt-1.5">
                            {group.skills.map((s, i) => (
                              <span key={i} className="text-[10px] font-semibold text-slate-500">{s}</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-base font-black text-blue-500 font-mono">{group.percent}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${group.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                  
                  {/* Currently Learning Shimmering Badge */}
                  <div className={`p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 text-center flex items-center justify-center gap-2 overflow-hidden relative group`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" style={{ backgroundSize: '200% 100%' }} />
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span className="text-xs font-bold text-indigo-300">Currently Learning: Jetpack Compose Glance (Widgets) & KMP (Kotlin Multiplatform)</span>
                  </div>
                </div>
              </div>

              {/* 3D Flip Card Certifications Gallery */}
              <h3 className={`text-2xl font-black text-center mb-10 ${textPrimary}`}>NPTEL & Professional Certifications</h3>
              <p className="text-center text-xs text-slate-500 mb-8 max-w-sm mx-auto">Note: Some NPTEL certifications were issued under name: Abhishek Verma</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {certifications.map((cert, idx) => {
                  const CertIcon = cert.IconComp;
                  return (
                    <FlipCard
                      key={idx}
                      front={
                        <>
                          <div className="flex justify-between items-start">
                            <div className={`p-3 rounded-xl ${cert.bg}`}>
                              <CertIcon className={`w-6 h-6 ${cert.color}`} />
                            </div>
                            <span className="text-[10px] font-bold text-slate-500">IIT Partnered</span>
                          </div>
                          <div>
                            <h4 className={`text-sm font-black mb-1 line-clamp-2 leading-snug ${textPrimary}`}>{cert.name}</h4>
                            <p className={`text-xs ${textMuted}`}>{cert.institution}</p>
                          </div>
                          <div className="text-[10px] text-blue-500 font-bold flex items-center gap-1.5 pt-2 border-t border-white/5">
                            <Eye className="w-3.5 h-3.5" /> Tap to view details
                          </div>
                        </>
                      }
                      back={
                        <>
                          <div>
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Credentials Verify</h4>
                            <p className="text-xs text-slate-300 leading-relaxed">Issued by {cert.institution} with verified scores.</p>
                          </div>
                          <div className="flex flex-col gap-2 w-full pt-4">
                            <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer"
                              className="w-full flex items-center justify-center gap-1.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-colors">
                              <CheckCircle className="w-3.5 h-3.5" /> Verify Link
                            </a>
                            <button onClick={(e) => { e.stopPropagation(); setSelectedCert(cert); }}
                              className="w-full flex items-center justify-center gap-1.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-xs transition-colors">
                              <Eye className="w-3.5 h-3.5" /> View Certificate
                            </button>
                          </div>
                        </>
                      }
                    />
                  );
                })}
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              EXPERIENCE SECTION
          ══════════════════════════════════ */}
          <section id="experience" className={`py-20 md:py-28 ${sectionAlt}`}>
            <div className="max-w-4xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">Timeline</span>
                <h2 className={`text-4xl md:text-5xl font-black ${textPrimary}`}>Career <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">History</span></h2>
              </div>

              <div className="relative pl-8 sm:pl-12 space-y-8">
                {/* vertical line drawn on scroll */}
                <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500" />

                {/* Role item 1 */}
                <div className="relative">
                  {/* indicator node */}
                  <div className="absolute left-[-24px] sm:left-[-32px] top-1.5 w-4.5 h-4.5 rounded-full bg-blue-500 border-4 border-[#07071a] shadow-lg shadow-blue-500/50" />
                  
                  <div className={`p-6 sm:p-8 rounded-3xl border ${card}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-black text-blue-500">Android Developer Intern</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="w-4 h-4 text-slate-400" />
                          <span className={`font-semibold text-sm ${textPrimary}`}>Rupiksha Services Pvt. Ltd.</span>
                        </div>
                      </div>
                      <span className="px-3.5 py-1.5 bg-blue-500/10 text-blue-400 rounded-full text-xs font-bold self-start">Dec 2025 – Present</span>
                    </div>

                    <p className={`text-sm mb-5 leading-relaxed ${textSecondary}`}>
                      Shipped the core native Android application supporting customer bookings, providers match, and online payments directly onto the Play Store.
                    </p>

                    {/* Expandable achievement accordion */}
                    <button 
                      onClick={() => setExpandedRole(expandedRole === 'rupiksha' ? null : 'rupiksha')}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4 hover:underline"
                    >
                      {expandedRole === 'rupiksha' ? 'Hide' : 'View'} key achievements 
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedRole === 'rupiksha' ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedRole === 'rupiksha' && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2.5 pl-4 border-l border-indigo-500/30 mb-4"
                      >
                        {[
                          'Built the user portal with custom UI panels in Jetpack Compose, dropping code rendering time by 20%.',
                          'Implemented DI pattern using Hilt to organize dependencies and mock providers for automated testing.',
                          'Configured Retrofit network clients with Room database caching to provide offline accessibility.',
                          'Maintained continuous delivery via Git workflow and coordinated live deployments.'
                        ].map((ach, idx) => (
                          <li key={idx} className={`text-xs ${textSecondary} flex items-start gap-2`}>
                            <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}

                    {/* LinkedIn testimonial links placeholder */}
                    <a href="https://www.linkedin.com/in/abhishek-jhatiwal/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-400 transition-colors font-bold uppercase tracking-wider">
                      <Linkedin className="w-3.5 h-3.5" /> View LinkedIn Testimonials
                    </a>
                  </div>
                </div>

                {/* Role item 2 */}
                <div className="relative">
                  <div className="absolute left-[-24px] sm:left-[-32px] top-1.5 w-4.5 h-4.5 rounded-full bg-indigo-500 border-4 border-[#07071a] shadow-lg shadow-indigo-500/50" />
                  
                  <div className={`p-6 sm:p-8 rounded-3xl border ${card}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-black text-indigo-500">Academic Project Developer</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <GraduationCap className="w-4 h-4 text-slate-400" />
                          <span className={`font-semibold text-sm ${textPrimary}`}>Arya Institute of Engineering & Technology</span>
                        </div>
                      </div>
                      <span className="px-3.5 py-1.5 bg-indigo-500/10 text-indigo-400 rounded-full text-xs font-bold self-start">Aug 2022 – Aug 2026</span>
                    </div>

                    <p className={`text-sm mb-5 leading-relaxed ${textSecondary}`}>
                      Designed and built a suite of native utilities (Trade Battle, Sound For Silence) utilizing clean architecture, WebSockets, and real-time backend node databases.
                    </p>

                    <button 
                      onClick={() => setExpandedRole(expandedRole === 'arya' ? null : 'arya')}
                      className="flex items-center gap-1.5 text-xs font-bold text-indigo-400 uppercase tracking-wider mb-4 hover:underline"
                    >
                      {expandedRole === 'arya' ? 'Hide' : 'View'} key achievements 
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expandedRole === 'arya' ? 'rotate-180' : ''}`} />
                    </button>

                    {expandedRole === 'arya' && (
                      <motion.ul 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="space-y-2.5 pl-4 border-l border-indigo-500/30 mb-4"
                      >
                        {[
                          'Architected Trade Battle supporting WebSocket market price streaming with matching engines.',
                          'Developed sound processing algorithms and roles hierarchy inside Sound For Silence educational platform.',
                          'Received academic distinction stars for coding courses.'
                        ].map((ach, idx) => (
                          <li key={idx} className={`text-xs ${textSecondary} flex items-start gap-2`}>
                            <span className="w-1 h-1 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              CONTACT SECTION & FOOTER
          ══════════════════════════════════ */}
          <section id="contact" className={`py-20 md:py-28 ${sectionBase}`}>
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold border border-blue-500/20 mb-4 uppercase tracking-wider">Contact</span>
                <h2 className={`text-4xl md:text-5xl font-black mb-4 ${textPrimary}`}>Let's Connect & <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Collaborate</span></h2>
                <p className={`max-w-xl mx-auto text-sm sm:text-base ${textSecondary}`}>Drop a message for project queries or career opportunities.</p>
              </div>

              <div className="grid lg:grid-cols-5 gap-8">
                {/* Contact Cards */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {[
                    { label: 'Email', value: 'j472812@gmail.com', icon: Mail, action: handleCopyEmail, bg: 'bg-rose-500/10 text-rose-400' },
                    { label: 'Phone', value: '+91-6367706177', icon: Phone, href: 'tel:+916367706177', bg: 'bg-blue-500/10 text-blue-400' },
                    { label: 'WhatsApp', value: 'Chat now', icon: MessageSquare, href: 'https://wa.me/916367706177', bg: 'bg-emerald-500/10 text-emerald-400' },
                    { label: 'LinkedIn', value: '/abhishek-jhatiwal', icon: Linkedin, href: 'https://www.linkedin.com/in/abhishek-jhatiwal/', bg: 'bg-indigo-500/10 text-indigo-400' },
                  ].map((item, idx) => {
                    const CIcon = item.icon;
                    const content = (
                      <>
                        <div className={`p-3.5 rounded-2xl shrink-0 ${item.bg}`}>
                          <CIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className={`text-[10px] font-bold uppercase tracking-wider ${textMuted}`}>{item.label}</p>
                          <p className={`text-sm font-semibold truncate ${textPrimary}`}>{item.value}</p>
                        </div>
                      </>
                    );
                    return item.href ? (
                      <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer"
                        className={`flex items-center gap-4.5 p-5 rounded-3xl border transition-all hover:-translate-y-1 ${card}`}>
                        {content}
                      </a>
                    ) : (
                      <button key={idx} onClick={item.action}
                        className={`w-full flex items-center gap-4.5 p-5 rounded-3xl border text-left transition-all hover:-translate-y-1 ${card}`}>
                        {content}
                      </button>
                    );
                  })}
                </div>

                {/* Contact Form Container (Multi-step) */}
                <div className={`lg:col-span-3 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${card}`}>
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className={`text-xl font-bold ${textPrimary}`}>Multi-step Enquiry</h3>
                      <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Step {formStep} of 4</span>
                    </div>

                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      {formStep === 1 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textMuted}`}>What is your name?</label>
                          <input
                            type="text" required placeholder="John Doe"
                            value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full px-4.5 py-3.5 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 ${
                              darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                            }`}
                          />
                        </motion.div>
                      )}

                      {formStep === 2 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textMuted}`}>What is your email address?</label>
                          <input
                            type="email" required placeholder="john@domain.com"
                            value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full px-4.5 py-3.5 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 ${
                              darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                            }`}
                          />
                        </motion.div>
                      )}

                      {formStep === 3 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textMuted}`}>What service do you need?</label>
                          <select
                            value={formData.service} onChange={e => setFormData({ ...formData, service: e.target.value })}
                            className={`w-full px-4.5 py-3.5 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 ${
                              darkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                            }`}
                          >
                            <option value="">Select a service...</option>
                            <option value="Android App Development">Android App Development</option>
                            <option value="MVVM Code Restructuring">MVVM Architecture / Hilt DI</option>
                            <option value="API Integration">API Integration</option>
                            <option value="Consulting">Technical Consulting</option>
                          </select>
                        </motion.div>
                      )}

                      {formStep === 4 && (
                        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                          <label className={`block text-xs font-bold uppercase tracking-wider mb-2 ${textMuted}`}>Describe your project requirements</label>
                          <textarea
                            rows={4} required placeholder="Write requirements here..."
                            value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                            className={`w-full px-4.5 py-3.5 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 resize-none ${
                              darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                            }`}
                          />
                        </motion.div>
                      )}

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center pt-4">
                        {formStep > 1 ? (
                          <button type="button" onClick={() => setFormStep(prev => prev - 1)}
                            className={`px-4.5 py-2.5 rounded-xl border text-xs font-bold transition-all ${card}`}>
                            Back
                          </button>
                        ) : <div />}

                        {formStep < 4 ? (
                          <button type="button" onClick={() => setFormStep(prev => prev + 1)}
                            className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/15">
                            Continue
                          </button>
                        ) : (
                          <button type="submit" disabled={formStatus === 'sending'}
                            className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-xs font-bold shadow-lg shadow-blue-500/20">
                            {formStatus === 'sending' ? 'Sending...' : 'Submit Form'}
                          </button>
                        )}
                      </div>
                    </form>
                  </div>

                  {/* Newsletter sub */}
                  <div className="mt-8 pt-6 border-t border-white/5">
                    <p className={`text-xs font-bold uppercase tracking-wider ${textMuted} mb-2`}>Newsletter Signup</p>
                    <div className="flex gap-2">
                      <input type="email" placeholder="Android Tips & updates" className={`flex-1 px-4 py-2 text-xs rounded-xl border outline-none ${darkMode ? 'bg-white/5 border-white/10 text-white' : 'bg-slate-50 border-slate-200'}`} />
                      <button onClick={() => triggerToast('Subscribed to Android Dev Tips!')} className="px-4 py-2 bg-indigo-600 text-white text-xs font-bold rounded-xl">Join</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ══════════════════════════════════
              GLOBAL FOOTER
          ══════════════════════════════════ */}
          <footer className={`py-12 border-t ${darkMode ? 'bg-[#050512] border-white/5' : 'bg-slate-900 border-slate-800'}`}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <img src="/abhishek.jpeg" alt="Abhishek Verma" className="w-8 h-8 rounded-xl object-cover" />
                <div className="text-left">
                  <p className="text-slate-400 text-sm">© 2026 Abhishek Verma. All rights reserved.</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Designed and built using React, Three.js &amp; Tailwind</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"
                  className="p-3 bg-white/5 rounded-full border border-white/10 text-slate-400 hover:text-white transition-colors">
                  <ChevronUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </footer>
        </>
      )}

      {/* Calendly Booking modal */}
      {showCalendly && (
        <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl h-[85vh] bg-[#07071a] rounded-3xl border border-white/15 overflow-hidden flex flex-col">
            <div className="p-4 border-b border-white/5 flex justify-between items-center bg-[#0a0a24]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400">Discovery Call Schedule</h3>
              <button onClick={() => setShowCalendly(false)} className="p-1.5 bg-white/5 rounded-lg text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 w-full bg-white">
              <iframe src="https://calendly.com/" className="w-full h-full" title="Calendly Scheduler" />
            </div>
          </div>
        </div>
      )}

      {/* Certificate modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
          <div className="relative w-full max-w-4xl h-[88vh] bg-slate-900 rounded-3xl overflow-hidden flex flex-col border border-white/20 shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-white/10 bg-slate-800 shrink-0">
              <h3 className="text-base font-bold text-white flex items-center gap-2 truncate pr-4">
                <Award className="text-blue-400 w-5 h-5 shrink-0" />{selectedCert.name}
              </h3>
              <button onClick={() => setSelectedCert(null)} className="p-2 hover:bg-white/10 rounded-xl text-white shrink-0"><X className="w-5 h-5" /></button>
            </div>
            <div className="flex-1 overflow-hidden bg-slate-950 flex items-center justify-center min-h-0">
              {selectedCert.type === 'pdf'
                ? <iframe src={`${selectedCert.file}#toolbar=0&navpanes=0`} className="w-full h-full" title={selectedCert.name} />
                : <img src={selectedCert.file} alt={selectedCert.name} className="max-w-full max-h-full object-contain p-5" />}
            </div>
            <div className="p-4 bg-slate-800 border-t border-white/10 flex justify-end gap-2.5 shrink-0">
              {selectedCert.verifyLink && (
                <a href={selectedCert.verifyLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs transition-colors">
                  <CheckCircle className="w-4 h-4" /> Verify Credentials
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import {
    Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code,
    Briefcase, Award, GraduationCap, ChevronDown, Twitter, Download,
    Sun, Moon, Send, Calendar, Building2, Star, ArrowLeft, X, Eye, CheckCircle,
    // Certification Icons
    Coffee, Cpu, Terminal, Database, Network, Box, Cloud, Smartphone, Icon
} from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      if (!selectedProject) {
        const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const height = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const colors = {
    primary: darkMode ? 'from-purple-400 to-pink-400' : 'from-purple-600 to-pink-600',
    secondary: darkMode ? 'from-purple-500 to-pink-500' : 'from-purple-700 to-pink-700',
    background: darkMode ? 'from-slate-900 via-purple-900 to-slate-900' : 'from-slate-100 via-purple-100 to-slate-100',
    card: darkMode ? 'bg-white/5' : 'bg-white/80',
    text: darkMode ? 'text-white' : 'text-slate-900',
    textSecondary: darkMode ? 'text-gray-300' : 'text-slate-700',
    border: darkMode ? 'border-white/10' : 'border-slate-200'
  };

  const projects = [
    {
      id: 1,
      title: "Sound For Silence",
      date: "Sep 2025",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Firebase"],
      shortDesc: "Role-based Android app with video content and quizzes.",
      description: [
        "Built a comprehensive role-based Android application tailored for educational content delivery.",
        "The app features distinct interfaces for Admins and Students, ensuring a secure and focused experience.",
        "Integrated Firebase Authentication for secure login and Firestore for real-time data syncing of quiz results and video progress."
      ],
      features: [
        "Role-Based Access Control (Admin/User)",
        "Video Streaming & Management",
        "Interactive Quizzes with Score Tracking",
        "Admin Dashboard for Content Uploads"
      ],
      link: "https://github.com/rupiksha/Sound-For-Silence.git",
      featured: true
    },
    {
      id: 2,
      title: "YouTube App Clone",
      date: "Jul 2025",
      tech: ["Kotlin", "Coroutines", "MVVM", "Room"],
      shortDesc: "YouTube-style video app using Jetpack Compose and MVVM.",
      description: [
        "A functional clone of the YouTube Android application demonstrating complex UI building with Jetpack Compose.",
        "Focuses on performance optimization using Coroutines for background tasks and Room database for caching video metadata.",
        "Implemented a custom video player layout and gesture controls."
      ],
      features: [
        "Video Feed with Infinite Scroll",
        "Custom Video Player Overlay",
        "Offline Caching with Room",
        "Search Functionality"
      ],
      link: "https://github.com/abhishekjhatiwal/YouTube-App.git",
      featured: true
    },
    {
      id: 3,
      title: "Instagram App UI",
      date: "Aug 2025",
      tech: ["Kotlin", "Jetpack Compose"],
      shortDesc: "Instagram-like interface with Stories and Feed.",
      description: [
        "A pixel-perfect recreation of the Instagram UI to master Jetpack Compose layouts and animations.",
        "Includes complex nested scrolling, story view animations, and a responsive grid layout for the profile page."
      ],
      features: [
        "Story Carousel Animation",
        "Profile Grid Layout",
        "Bottom Navigation Bar",
        "Like & Comment Interaction UI"
      ],
      link: "https://github.com/abhishekjhatiwal/Instagram-UI-App.git",
      featured: false
    }
  ];

  const certifications = [
    {
      name: "Programming in Java",
      institution: "IIT Kharagpur",
      file: "/certificats/NPTELJava.pdf",
      verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S65180455604057547",
      type: "pdf",
      iconComponent: Coffee,
      color: "text-orange-400"
    },
    {
      name: "Programming in Modern C++",
      institution: "IIT Kharagpur",
      file: "/certificats/Programming in Modern C++.pdf",
      verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS44S125780076530513780",
      type: "pdf",
      iconComponent: Cpu,
      color: "text-blue-400"
    },
    {
      name: "Problem Solving Through Programming In C",
      institution: "IIT Kharagpur",
      file: "/certificats/NPTEL_C.jpeg",
      verifyLink: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS53S4379073004136760",
      type: "image",
      iconComponent: Terminal,
      color: "text-green-400"
    },
    {
      name: "Data Base Management System",
      institution: "IIT Kharagpur",
      file: "/certificats/Data Base Management System.pdf",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S53740075309169139.pdf",
      type: "pdf",
      iconComponent: Database,
      color: "text-yellow-400"
    },
    {
      name: "Data Structure And Algorithm Design",
      institution: "IIT Kanpur",
      file: "/certificats/Data Structures and Algorithms Design.pdf",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S35860151010537627.pdf",
      type: "pdf",
      iconComponent: Network,
      color: "text-pink-400"
    },
    {
      name: "Blockchain and Its Application",
      institution: "IIT Kharagpur",
      file: "/certificats/Blockchain and its Applications_250507_190326.pdf",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S54740058104211862.pdf",
      type: "pdf",
      iconComponent: Box,
      color: "text-cyan-400"
    },
    {
      name: "Cloud Computing",
      institution: "IIT Kharagpur",
      file: "/certificats/Cloud Computing.pdf",
      verifyLink: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104740190604211862.pdf",
      type: "pdf",
      iconComponent: Cloud,
      color: "text-sky-400"
    },
    {
      name: "Qt6 C++ GUI & Mobile App Development",
      institution: "Udemy",
      file: "/certificats/QtCreator.pdf",
      verifyLink: "https://www.udemy.com/certificate/UC-b9b131d5-a294-444a-8c7e-45dc60585feb/",
      type: "pdf",
      iconComponent: Smartphone,
      color: "text-emerald-400"
    }
  ];

  const experience = [
    {
      role: "Android Developer",
      company: "Rupiksha Services Private Limited",
      location: "Jaipur, India",
      date: "December 2025 - Present",
      type: "Internship",
      description: [
        "Developed Android applications using Kotlin and Jetpack Compose UI",
        "Implemented MVVM architecture with ViewModel and state management",
        "Integrated Firebase Authentication and Firestore for backend services",
        "Collaborated with team on UI/UX, debugging, testing, and deployment"
      ]
    }
  ];

  const skills = {
    "Languages": ["Kotlin", "Java", "C++", "C", "SQL"],
    "Frameworks & Libraries": ["Jetpack Compose", "Hilt", "Room", "Retrofit", "Firebase"],
    "Tools & IDEs": ["Android Studio", "Git", "GitHub", "VS Code", "Qt Creator"],
    "Concepts": ["OOP", "Data Structures & Algorithms", "REST APIs", "Clean Architecture"]
  };

  const navItems = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/15MTtHyK18dBZcrcLGZpUNk1r4ttiRZhI/view?usp=sharing', '_blank');
  };

  const renderProjectDetail = (project) => (
      <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
        <button
            onClick={() => {
              setSelectedProject(null);
              window.scrollTo(0, 0);
            }}
            className={`flex items-center gap-2 mb-8 px-4 py-2 rounded-lg ${colors.card} hover:scale-105 transition-all text-purple-400`}
        >
          <ArrowLeft className="w-5 h-5" /> Back to Portfolio
        </button>

        <div className={`${colors.card} backdrop-blur-xl rounded-3xl p-8 border ${colors.border} shadow-2xl animate-fade-in`}>
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h1 className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                {project.title}
              </h1>
              <div className="flex items-center gap-3 text-purple-300 mb-4">
                <Calendar className="w-5 h-5" />
                <span>{project.date}</span>
              </div>
            </div>
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all shadow-lg hover:shadow-purple-500/30"
            >
              <Github className="w-5 h-5" /> View Code
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech, i) => (
                <span key={i} className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
              {tech}
            </span>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Overview</h3>
              <div className={`space-y-4 ${colors.textSecondary} text-lg leading-relaxed`}>
                {project.description.map((para, i) => (
                    <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Key Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                    <div key={i} className={`p-4 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3`}>
                      <div className="mt-1 w-2 h-2 rounded-full bg-purple-400" />
                      <span className={colors.textSecondary}>{feature}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );

  const renderCertModal = () => {
    if (!selectedCert) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedCert(null)}>
          <div
              className="relative w-full max-w-5xl h-[85vh] bg-slate-900 rounded-2xl overflow-hidden flex flex-col border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-800">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Award className="text-purple-400" /> {selectedCert.name}
              </h3>
              <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 bg-slate-950 overflow-hidden relative flex flex-col min-h-0">
              {selectedCert.type === 'pdf' ? (
                  <iframe
                      src={`${selectedCert.file}#toolbar=0&navpanes=0`}
                      className="w-full h-full"
                      title={selectedCert.name}
                  />
              ) : (
                  <div className="w-full h-full flex items-center justify-center p-4 min-h-0">
                    <img
                        src={selectedCert.file}
                        alt={selectedCert.name}
                        className="max-w-full max-h-full object-contain shadow-2xl"
                    />
                  </div>
              )}
            </div>

            <div className="p-4 bg-slate-800 border-t border-white/10 flex justify-end gap-4 shrink-0">
              {selectedCert.verifyLink && (
                  <a
                      href={selectedCert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" /> Verify Credential
                  </a>
              )}

              <a
                  href={selectedCert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Open Original File
              </a>
            </div>
          </div>
        </div>
    );
  };

  // --- REUSABLE 3D ICON COMPONENT ---
  // Added size prop to allow reuse in both Hero (socials) and Certifications
  const ThreeDIcon = ({  color, size = "w-16 h-16", iconSize = "w-12 h-12" }) => (
      <div className={`relative ${size} group-hover:scale-110 transition-transform duration-500`} style={{ perspective: '1000px' }}>
        <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d', animation: 'float 3s ease-in-out infinite' }}>
          <div className={`absolute inset-0 flex items-center justify-center ${color} drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]`}
               style={{ animation: 'spin3d 8s linear infinite' }}>
            <Icon className={iconSize} strokeWidth={1.5} />
          </div>
          <div className={`absolute inset-0 flex items-center justify-center ${color} opacity-30 blur-sm`}
               style={{ animation: 'spin3d 8s linear infinite', transform: 'translateZ(-10px)' }}>
            <Icon className={iconSize} />
          </div>
        </div>
      </div>
  );

  return (
      <div className={`min-h-screen bg-gradient-to-br ${colors.background} ${colors.text} transition-colors duration-500`}>
        <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin3d {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
      `}</style>

        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/95' : 'bg-white/95') + ' backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                  src="/abhishek.jpeg"
                  alt="AV"
                  className="w-10 h-10 rounded-full object-cover border-2 border-purple-400"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
              />
              <div className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent hidden`}>
                AV
              </div>
            </div>
            <div className="flex items-center gap-6">
              {!selectedProject && navItems.map((item) => (
                  <a
                      key={item}
                      href={`#${item}`}
                      onClick={() => setActiveSection(item)}
                      className={`hidden md:block capitalize transition-colors duration-300 ${
                          activeSection === item
                              ? 'text-purple-400 font-bold scale-105'
                              : 'hover:text-purple-400'
                      }`}
                  >
                    {item}
                  </a>
              ))}

              <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 ${colors.card} rounded-lg hover:scale-110 transition-all`}
                  title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        {selectedProject ? (
            renderProjectDetail(selectedProject)
        ) : (
            <>
              <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
                <div className="absolute inset-0 overflow-hidden">
                  <div className={`absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse`}></div>
                  <div className={`absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse`} style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="text-center z-10">
                  <div className="mb-6 inline-block relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.primary} rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse`}></div>
                    <img src="./abhishek.jpeg" alt="Abhishek Verma" className="w-40 h-40 rounded-full shadow-2xl object-cover relative z-10 border-4 border-white/10" />
                  </div>
                  <h1 className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent animate-pulse`}>
                    Abhishek Verma
                  </h1>
                  <p className="text-2xl md:text-3xl text-purple-300 mb-6">Android Developer</p>
                  <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto mb-8`}>
                    Crafting elegant mobile solutions with Kotlin, Jetpack Compose, and modern Android architecture
                  </p>

                  {/* UPDATED SOCIAL ICONS WITH 3D ANIMATION */}
                  <div className="flex gap-6 justify-center mb-12 flex-wrap items-center h-20">
                    {[
                      { icon: Github, link: "https://github.com/abhishekjhatiwal", title: "GitHub", color: "text-slate-300" },
                      { icon: Linkedin, link: "https://www.linkedin.com/in/abhishek-jhatiwal/", title: "LinkedIn", color: "text-blue-500" },
                      { icon: Code, link: "https://leetcode.com/u/abhishek_jhatiwal/", title: "LeetCode", color: "text-orange-500" },
                      { icon: Twitter, link: "https://x.com/j472812", title: "Twitter/X", color: "text-sky-400" },
                      { icon: Mail, link: "mailto:j472812@gmail.com", title: "Email", color: "text-red-500" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group" // Added group here to trigger hover effects if needed
                            title={social.title}
                        >
                          <ThreeDIcon
                              Icon={social.icon}
                              color={social.color}
                              size="w-14 h-14"
                              iconSize="w-8 h-8"
                          />
                        </a>
                    ))}
                  </div>

                  <button
                      onClick={handleDownloadResume}
                      className={`px-6 py-3 bg-gradient-to-r ${colors.secondary} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2 mx-auto mb-12 animate-bounce`}
                  >
                    <Download className="w-5 h-5" />
                    Download Resume
                  </button>
                </div>
              </section>

              <section id="about" className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    About Me
                  </h2>
                  <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-8 border ${colors.border} hover:border-purple-500/50 transition-all shadow-xl`}>
                    <p className={`text-lg ${colors.textSecondary} leading-relaxed mb-6`}>
                      Android Developer skilled in Kotlin, Jetpack Compose, MVVM, and Firebase with experience building real-world apps and strong fundamentals in C++, Java, and DSA. Focused on clean architecture, performance optimization, and delivering user-friendly mobile solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <GraduationCap className="w-8 h-8 text-purple-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-purple-300 mb-1">Education</h3>
                          <p className={colors.textSecondary}>B.Tech, Computer Science and Engineering</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Arya Institute of Engineering Technology and Management</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Aug 2022 - Aug 2026</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
                        <Briefcase className="w-8 h-8 text-purple-400 mt-1" />
                        <div>
                          <h3 className="font-semibold text-purple-300 mb-1">Current Role</h3>
                          <p className={colors.textSecondary}>Android Developer</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Rupiksha Services Private Limited</p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>December 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="experience" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
                <div className="max-w-4xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    Experience
                  </h2>
                  <div className="space-y-6">
                    {experience.map((exp, index) => (
                        <div key={index} className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:shadow-2xl`}>
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-purple-300 mb-1">{exp.role}</h3>
                              <div className="flex items-center gap-2 mb-2">
                                <Building2 className="w-4 h-4 text-purple-400" />
                                <p className={`font-semibold ${colors.textSecondary}`}>{exp.company}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{exp.location}</p>
                              </div>
                            </div>
                            <div className="mt-2 md:mt-0 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-purple-400" />
                              <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{exp.date}</span>
                            </div>
                          </div>
                          <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4 border border-purple-500/30">
                      {exp.type}
                    </span>
                          <ul className="space-y-2">
                            {exp.description.map((item, i) => (
                                <li key={i} className={`text-sm ${colors.textSecondary} flex items-start`}>
                                  <span className="text-purple-400 mr-2">•</span>
                                  <span>{item}</span>
                                </li>
                            ))}
                          </ul>
                        </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="projects" className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    Featured Projects
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => {
                              setSelectedProject(project);
                              window.scrollTo(0, 0);
                            }}
                            className={`${colors.card} cursor-pointer backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 hover:-translate-y-2 duration-300 group relative overflow-hidden shadow-lg`}
                        >
                          {project.featured && (
                              <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold shadow-md">
                                Featured
                              </div>
                          )}
                          <div className="flex justify-between items-start mb-4">
                            <Code className="w-8 h-8 text-purple-400" />
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{project.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                          <p className={`text-sm ${colors.textSecondary} mb-4 line-clamp-2`}>
                            {project.shortDesc}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tech.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                          {tech}
                        </span>
                            ))}
                            {project.tech.length > 3 && (
                                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">+{project.tech.length - 3}</span>
                            )}
                          </div>

                          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between text-purple-400 group-hover:text-purple-300 font-medium">
                            <span>View Details</span>
                            <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
                <div className="max-w-6xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    Technical Skills
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {Object.entries(skills).map(([category, items], index) => (
                        <div key={index} className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all`}>
                          <h3 className="text-xl font-bold mb-4 text-purple-300">{category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {items.map((skill, i) => (
                                <span key={i} className={`px-4 py-2 bg-gradient-to-r ${colors.secondary}/20 ${colors.text} rounded-lg text-sm hover:scale-105 transition-transform border border-transparent hover:border-purple-500/30`}>
                          {skill}
                        </span>
                            ))}
                          </div>
                        </div>
                    ))}
                  </div>

                  <div className="relative group cursor-pointer" onClick={() => setSelectedCert({ name: "NPTEL Discipline Star", file: "/nptel-star-certificate.jpeg", type: "image" })}>
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className={`relative flex flex-col md:flex-row items-center gap-8 ${colors.card} backdrop-blur-xl rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-400/50 transition-all`}>
                      <div className="w-full md:w-1/3 relative group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full animate-pulse"></div>
                        <img
                            src="/nptel-star-certificate.jpeg"
                            alt="NPTEL Star Certificate"
                            className="relative rounded-lg shadow-2xl border-2 border-yellow-400/50 object-cover w-full h-48 bg-slate-800"
                        />
                      </div>

                      <div className="w-full md:w-2/3">
                        <div className="flex items-center gap-3 mb-4">
                          <Star className="w-8 h-8 text-yellow-400 fill-yellow-400 animate-pulse" />
                          <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                            NPTEL Discipline Star
                          </h3>
                        </div>
                        <p className="text-xl text-yellow-100/80 mb-4 font-light">July - December 2025</p>
                        <p className={`${colors.textSecondary} text-lg leading-relaxed`}>
                          Awarded for outstanding academic performance in <span className="text-yellow-400 font-semibold">Computer Science & Engineering</span>. Completed <span className="font-bold text-white">50+ weeks</span> of rigorous coursework with top-tier final scores across all subjects.
                        </p>
                        <div className="mt-6 flex items-center gap-2 text-yellow-400 font-semibold group-hover:translate-x-2 transition-transform">
                          Click to View Certificate <Eye className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    Certifications
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedCert(cert)}
                            className={`${colors.card} cursor-pointer backdrop-blur-lg rounded-xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-visible`}
                        >
                          <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:rotate-12 ${cert.color}`}>
                            <cert.iconComponent className="w-24 h-24" />
                          </div>

                          <div className="relative z-10 flex flex-col h-full">
                            <div className="mb-6 flex justify-center">
                              <ThreeDIcon Icon={cert.iconComponent} color={cert.color} />
                            </div>

                            <h3 className="font-bold text-lg mb-2 group-hover:text-purple-400 transition-colors line-clamp-2 text-center">
                              {cert.name}
                            </h3>
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-4 text-center`}>
                              {cert.institution}
                            </p>
                            <div className="mt-auto flex justify-center items-center gap-2 text-sm text-purple-400 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                              View Certificate <Eye className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
                <div className="max-w-4xl mx-auto">
                  <h2 className={`text-4xl font-bold mb-8 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
                    Get In Touch
                  </h2>
                  <p className={`text-lg ${colors.textSecondary} mb-12 text-center`}>
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                  </p>

                  <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-8 border ${colors.border} mb-8 shadow-2xl`}>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${colors.textSecondary}`}>Name</label>
                          <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-all focus:ring-2 focus:ring-purple-500/20 ${colors.text}`}
                              placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className={`block text-sm font-semibold mb-2 ${colors.textSecondary}`}>Email</label>
                          <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                              className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-all focus:ring-2 focus:ring-purple-500/20 ${colors.text}`}
                              placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className={`block text-sm font-semibold mb-2 ${colors.textSecondary}`}>Message</label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows="5"
                            className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-all focus:ring-2 focus:ring-purple-500/20 ${colors.text}`}
                            placeholder="Tell me about your project..."
                        />
                      </div>
                      <button
                          type="submit"
                          disabled={formStatus === 'sending'}
                          className={`w-full px-6 py-3 bg-gradient-to-r ${colors.secondary} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {formStatus === 'sending' ? (
                            'Sending...'
                        ) : formStatus === 'success' ? (
                            '✓ Message Sent!'
                        ) : (
                            <>
                              <Send className="w-5 h-5" />
                              Send Message
                            </>
                        )}
                      </button>
                    </form>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <a href="mailto:j472812@gmail.com" className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group text-center`}>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Email</p>
                      <p className={`${colors.text} group-hover:text-purple-400 transition-colors break-all text-sm`}>j472812@gmail.com</p>
                    </a>
                    <a href="tel:+916367706177" className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group text-center`}>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Phone className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Phone</p>
                      <p className={`${colors.text} group-hover:text-purple-400 transition-colors`}>+91-6367706177</p>
                    </a>
                    <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} text-center`}>
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-6 h-6 text-purple-400" />
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Location</p>
                      <p className={colors.text}>Jaipur, Rajasthan</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
        )}

        {renderCertModal()}

        <footer className={`py-8 px-6 border-t ${colors.border} mt-12`}>
          <div className="max-w-6xl mx-auto text-center">
            <p className={darkMode ? 'text-gray-400' : 'text-slate-600'}>© 2025 Abhishek Verma. Built with React & Tailwind CSS</p>
          </div>
        </footer>
      </div>
  );
}
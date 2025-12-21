import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, Award, GraduationCap, ChevronDown, Twitter, Download, Sun, Moon, Send, Calendar, Building2 } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Color scheme - easily customizable
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
      title: "Sound For Silence",
      date: "Sep 2025",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Firebase"],
      description: [
        "Built a role-based Android app with video content and quizzes",
        "Integrated Firebase Authentication and Firestore",
        "Developed admin dashboard for content and user management"
      ],
      link: "https://github.com/rupiksha/Sound-For-Silence.git",
      featured: true
    },
    {
      title: "YouTube App Clone",
      date: "Jul 2025",
      tech: ["Kotlin", "Coroutines", "MVVM", "Room"],
      description: [
        "Built a YouTube-style video app using Jetpack Compose, MVVM, and Firebase Storage",
        "Implemented ViewModel and coroutine-based state management for smooth video handling"
      ],
      link: "https://github.com/abhishekjhatiwal/YouTube-App.git",
      featured: true
    },
    {
      title: "Instagram App UI",
      date: "Aug 2025",
      tech: ["Kotlin", "Jetpack Compose"],
      description: [
        "Built Instagram-like interface with Story carousel, grid layout, and navigation",
        "Optimized animations and layout performance for native-like UI"
      ],
      link: "https://github.com/abhishekjhatiwal/Instagram-UI-App.git",
      featured: false
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

  const certifications = [
    { name: "Programming in Java", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS105S65180455604057547" },
    { name: "Programming in Modern C++", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS44S125780076530513780" },
    { name: "Problem Solving Through Programming In C", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS53S4379073004136760" },
    { name: "Data Base Management System", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs145/Course/NPTEL25CS145S53740075309169139.pdf" },
    { name: "Data Structure And Algorithm Design", institution: "IIT Kanpur", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs81/Course/NPTEL25CS81S35860151010537627.pdf" },
    { name: "Blockchain and Its Application", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs08/Course/NPTEL25CS08S54740058104211862.pdf" },
    { name: "Cloud Computing", institution: "IIT Kharagpur", link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs11/Course/NPTEL25CS11S104740190604211862.pdf" },
    { name: "Qt6 C++ GUI & Mobile App Development", institution: "Udemy", link: "https://www.udemy.com/certificate/UC-b9b131d5-a294-444a-8c7e-45dc60585feb/" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    }, 1500);
  };

  const handleDownloadResume = () => {
    // This would link to your actual resume PDF
    window.open('https://drive.google.com/file/d/1XjNgLnGyzSaCEv57IR-nz-pF9qn0MMBT/view?usp=sharing', '_blank');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.background} ${colors.text} transition-colors duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? (darkMode ? 'bg-slate-900/95' : 'bg-white/95') + ' backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className={`text-2xl font-bold bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            AV
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className={`hover:text-purple-400 transition-colors hidden md:block`}>Home</a>
            <a href="#about" className={`hover:text-purple-400 transition-colors hidden md:block`}>About</a>
            <a href="#experience" className={`hover:text-purple-400 transition-colors hidden md:block`}>Experience</a>
            <a href="#projects" className={`hover:text-purple-400 transition-colors hidden md:block`}>Projects</a>
            <a href="#skills" className={`hover:text-purple-400 transition-colors hidden md:block`}>Skills</a>
            <a href="#contact" className={`hover:text-purple-400 transition-colors hidden md:block`}>Contact</a>
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse`}></div>
          <div className={`absolute w-96 h-96 bg-pink-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse`} style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="text-center z-10">
          <div className="mb-6 inline-block">
            {/* Replace this with your photo URL */}
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${colors.secondary} flex items-center justify-center text-4xl font-bold shadow-2xl`}>
              AV
            </div>
            {/* To use your photo, replace the div above with:
            <img src="YOUR_PHOTO_URL" alt="Abhishek Verma" className="w-32 h-32 rounded-full shadow-2xl object-cover" />
            */}
          </div>
          <h1 className={`text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent animate-pulse`}>
            Abhishek Verma
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-6">Android Developer</p>
          <p className={`text-lg ${colors.textSecondary} max-w-2xl mx-auto mb-8`}>
            Crafting elegant mobile solutions with Kotlin, Jetpack Compose, and modern Android architecture
          </p>
          <div className="flex gap-4 justify-center mb-8 flex-wrap">
            <a href="https://github.com/abhishekjhatiwal" target="_blank" rel="noopener noreferrer" className={`p-3 ${colors.card} hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-110`} title="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-jhatiwal/" target="_blank" rel="noopener noreferrer" className={`p-3 ${colors.card} hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-110`} title="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://leetcode.com/u/abhishek_jhatiwal/" target="_blank" rel="noopener noreferrer" className={`p-3 ${colors.card} hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-110`} title="LeetCode">
              <Code className="w-6 h-6" />
            </a>
            <a href="https://x.com/j472812" target="_blank" rel="noopener noreferrer" className={`p-3 ${colors.card} hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-110`} title="Twitter/X">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="mailto:j472812@gmail.com" className={`p-3 ${colors.card} hover:bg-white/20 rounded-lg backdrop-blur-sm transition-all hover:scale-110`} title="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={handleDownloadResume}
            className={`px-6 py-3 bg-gradient-to-r ${colors.secondary} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg flex items-center gap-2 mx-auto mb-12`}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </button>
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-purple-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            About Me
          </h2>
          <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-8 border ${colors.border} hover:border-purple-500/50 transition-all`}>
            <p className={`text-lg ${colors.textSecondary} leading-relaxed mb-6`}>
              Android Developer skilled in Kotlin, Jetpack Compose, MVVM, and Firebase with experience building real-world apps and strong fundamentals in C++, Java, and DSA. Focused on clean architecture, performance optimization, and delivering user-friendly mobile solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h3 className="font-semibold text-purple-300 mb-1">Education</h3>
                  <p className={colors.textSecondary}>B.Tech, Computer Science and Engineering</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Arya Institute of Engineering Technology and Management</p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>Aug 2022 - Aug 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-6 h-6 text-purple-400 mt-1" />
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

      {/* Experience Timeline */}
      <section id="experience" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all`}>
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
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm mb-4">
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

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group relative overflow-hidden`}>
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                    Featured
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <Code className="w-8 h-8 text-purple-400" />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{project.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.description.map((desc, i) => (
                    <li key={i} className={`text-sm ${colors.textSecondary} flex items-start`}>
                      <span className="text-purple-400 mr-2">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all`}>
                <h3 className="text-xl font-bold mb-4 text-purple-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} className={`px-4 py-2 bg-gradient-to-r ${colors.secondary}/20 ${colors.text} rounded-lg text-sm hover:scale-105 transition-transform`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievement */}
          <div className={`mt-12 bg-gradient-to-r ${colors.secondary}/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30`}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-yellow-400" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-300">NPTEL Discipline Star (Jul-Dec 2025)</h3>
                <p className={colors.textSecondary}>Awarded for outstanding academic performance in Computer Science & Engineering, completing 50+ weeks of NPTEL coursework with strong final scores across all subjects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className={`text-4xl font-bold mb-12 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a key={index} href={cert.link} target="_blank" rel="noopener noreferrer" className={`${colors.card} backdrop-blur-lg rounded-xl p-4 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group`}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'}`}>{cert.institution}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-6 ${darkMode ? 'bg-black/20' : 'bg-slate-50'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-bold mb-8 text-center bg-gradient-to-r ${colors.primary} bg-clip-text text-transparent`}>
            Get In Touch
          </h2>
          <p className={`text-lg ${colors.textSecondary} mb-12 text-center`}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact Form */}
          <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-8 border ${colors.border} mb-8`}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-sm font-semibold mb-2 ${colors.textSecondary}`}>Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-colors ${colors.text}`}
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
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-colors ${colors.text}`}
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold mb-2 ${colors.textSecondary}`}>Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows="5"
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-white/10' : 'bg-slate-100'} border ${colors.border} focus:border-purple-500 outline-none transition-colors ${colors.text}`}
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
            <a href="mailto:j472812@gmail.com" className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group`}>
              <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Email</p>
              <p className={`${colors.text} group-hover:text-purple-400 transition-colors break-all text-sm`}>j472812@gmail.com</p>
            </a>
            <a href="tel:+916367706177" className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border} hover:border-purple-500/50 transition-all hover:scale-105 group`}>
              <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Phone</p>
              <p className={`${colors.text} group-hover:text-purple-400 transition-colors`}>+91-6367706177</p>
            </a>
            <div className={`${colors.card} backdrop-blur-lg rounded-2xl p-6 border ${colors.border}`}>
              <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-slate-600'} mb-1`}>Location</p>
              <p className={colors.text}>Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-6 border-t ${colors.border}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-slate-600'}>© 2025 Abhishek Verma. Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
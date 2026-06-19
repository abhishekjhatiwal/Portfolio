import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { useTheme } from '../context/ThemeContext';
import { contactCards } from '../data';

const SERVICE_ID = 'service_l9oa3ca';
const TEMPLATE_ID = 'template_owo1qui';
const PUBLIC_KEY = 'K12OLhLunb_XM2bS5';

const serviceOptions = [
  'Android App Development',
  'MVVM Architecture / Hilt DI',
  'API Integration',
  'Technical Consulting',
];

const Contact = () => {
  const { darkMode, card, textPrimary, textSecondary, textMuted, sectionBase } = useTheme();

  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  const inputClasses = `w-full px-4 py-3.5 rounded-2xl border outline-none text-sm transition-all focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/60 ${
    darkMode
      ? 'bg-white/[0.03] border-white/10 text-white placeholder-slate-500'
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
  }`;

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const fireConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3b82f6', '#6366f1', '#8b5cf6', '#06b6d4'],
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('j472812@gmail.com');
    showToast('Email copied to clipboard!');
    fireConfetti();
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextStep = () => {
    if (formStep < 4) setFormStep((s) => s + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setFormStatus('sending');
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setFormStatus('success');
      fireConfetti();
      showToast('Message sent successfully!');
      setFormData({ name: '', email: '', service: '', message: '' });
      setFormStep(1);
      setTimeout(() => setFormStatus(''), 3000);
    } catch {
      showToast('Failed to send. Please try again.');
      setFormStatus('');
    }
  };

  const canProceed = () => {
    switch (formStep) {
      case 1: return formData.name.trim().length > 0;
      case 2: return formData.email.trim().length > 0;
      case 3: return formData.service.trim().length > 0;
      case 4: return formData.message.trim().length > 0;
      default: return false;
    }
  };

  const stepVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <section id="contact" className={`py-20 md:py-28 ${sectionBase} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4"
          >
            Contact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-black ${textPrimary}`}
          >
            Let&apos;s Connect &{' '}
            <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Collaborate
            </span>
          </motion.h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Left — Contact cards */}
          <div className="lg:col-span-2 space-y-4">
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              const isEmail = item.action === 'copyEmail';

              const cardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className={`${card} rounded-2xl p-4 flex items-center gap-4 cursor-pointer transition-all duration-300 ${
                    darkMode ? 'hover:shadow-blue-500/5' : 'hover:shadow-md'
                  }`}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <p className={`text-[10px] font-semibold tracking-widest uppercase ${textMuted} mb-0.5`}>
                      {item.label}
                    </p>
                    <p className={`text-sm font-medium truncate ${textPrimary}`}>
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              );

              if (isEmail) {
                return (
                  <div key={index} onClick={handleCopyEmail}>
                    {cardContent}
                  </div>
                );
              }

              if (item.href) {
                return (
                  <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {cardContent}
                  </a>
                );
              }

              return <div key={index}>{cardContent}</div>;
            })}
          </div>

          {/* Right — Multi-step form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`lg:col-span-3 ${card} rounded-3xl p-6 sm:p-8`}
          >
            {/* Form header */}
            <div className="flex items-center justify-between mb-8">
              <h3 className={`text-lg font-bold ${textPrimary}`}>Multi-step Enquiry</h3>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                darkMode ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'
              }`}>
                Step {formStep} of 4
              </span>
            </div>

            {/* Step progress bar */}
            <div className="flex gap-1.5 mb-8">
              {[1, 2, 3, 4].map((step) => (
                <div
                  key={step}
                  className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                    step <= formStep
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      : darkMode ? 'bg-white/10' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>

            {/* Steps */}
            <div className="min-h-[180px] relative">
              <AnimatePresence mode="wait">
                {formStep === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                      What&apos;s your name?
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={inputClasses}
                      autoFocus
                    />
                  </motion.div>
                )}

                {formStep === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                      Your email address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={inputClasses}
                      autoFocus
                    />
                  </motion.div>
                )}

                {formStep === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                      Select a service
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`${inputClasses} appearance-none`}
                    >
                      <option value="">Choose a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </motion.div>
                )}

                {formStep === 4 && (
                  <motion.div
                    key="step4"
                    variants={stepVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.25 }}
                  >
                    <label className={`block text-sm font-medium mb-2 ${textSecondary}`}>
                      Your message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project…"
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-6">
              {formStep > 1 ? (
                <button
                  onClick={prevStep}
                  className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    darkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {formStep < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  Continue
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed() || formStatus === 'sending'}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-blue-500/20"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit</span>
                    </>
                  )}
                </button>
              )}
            </div>

            {/* Newsletter strip */}
            <div className={`mt-8 pt-6 border-t ${darkMode ? 'border-white/5' : 'border-slate-100'}`}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <p className={`text-xs ${textMuted} flex-1`}>
                  📬 Subscribe to my newsletter for dev insights & project updates.
                </p>
                <button className={`text-xs font-medium px-4 py-2 rounded-xl transition-colors ${
                  darkMode
                    ? 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[99999] flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-sm font-medium shadow-2xl shadow-blue-500/30"
          >
            <Check className="w-4 h-4" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

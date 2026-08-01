import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { personalInfo } from '../../data';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../../utils/animations';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_portfolio';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'template_contact';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Please enter a valid email.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (!form.message.trim() || form.message.trim().length < 20) return 'Message must be at least 20 characters.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err, { icon: <AlertCircle size={16} className="text-red-400" /> });
      return;
    }

    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: personalInfo.email,
        },
        EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! I'll get back to you soon.", {
        icon: <CheckCircle size={16} className="text-green-400" />,
        duration: 5000,
      });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error('Failed to send message. Please try emailing me directly.', { duration: 5000 });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center mb-14"
        >
          <motion.span variants={fadeInUp} className="tag mb-4 inline-block">Get In Touch</motion.span>
          <motion.h2 variants={fadeInUp} className="section-title mb-4">
            Let's <span className="gradient-text">Connect</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="section-subtitle max-w-xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact info (2 cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {[
              { icon: <Mail size={20} />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#EA4335' },
              { icon: <Phone size={20} />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}`, color: '#06B6D4' },
              { icon: <MapPin size={20} />, label: 'Location', value: personalInfo.location, href: '#', color: '#10B981' },
            ].map((item) => (
              <motion.a
                key={item.label}
                variants={fadeInLeft}
                href={item.href}
                className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.color + '20', border: `1px solid ${item.color}30` }}
                >
                  <span style={{ color: item.color }}>{item.icon}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-muted text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div variants={fadeInLeft} className="glass rounded-2xl p-5">
              <p className="text-muted text-xs mb-4 uppercase tracking-widest">Find me online</p>
              <div className="flex gap-3">
                {[
                  { href: personalInfo.github, icon: <Github size={18} />, label: 'GitHub' },
                  { href: personalInfo.linkedin, icon: <Linkedin size={18} />, label: 'LinkedIn' },
                  { href: personalInfo.leetcode, icon: <SiLeetcode size={18} />, label: 'LeetCode' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 text-muted hover:text-white hover:bg-primary/15 hover:border-primary/30 transition-all border border-white/5 text-xs"
                  >
                    {s.icon}
                    {s.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form (3 cols) */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-muted mb-2 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-muted mb-2 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-muted mb-2 uppercase tracking-widest">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry, job opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all"
                />
              </div>
              <div>
                <label className="block text-xs text-muted mb-2 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-muted focus:outline-none focus:border-primary/50 focus:bg-primary/5 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

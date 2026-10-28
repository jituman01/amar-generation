'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons';

// PLACEHOLDERS: User can easily swap these placeholders with their actual links
const CONTACT_LINKS = {
  facebook: 'https://facebook.com/amar-generation-placeholder',
  instagram: 'https://instagram.com/amar-generation-placeholder',
  email: 'contact@amar-generation.example.com',
};

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', memory: '' });

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText(CONTACT_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && !formData.memory) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', memory: '' });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-paper border-t border-tan/60 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-btn text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-3">
            <Mail size={13} className="text-rust" />
            <span>যোগাযোগ ও আড্ডা</span>
          </div>

          <h2
            className="text-2xl xs:text-3xl sm:text-4xl font-serif font-bold text-ink leading-tight mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            আমাদের সাথে যুক্ত থাকুন
          </h2>

          <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-xl mx-auto">
            আপনার কোনো ফেলে আসা শৈশবের স্মৃতি, মজার কোনো ঘটনা বা প্ল্যাটফর্মের জন্য
            পরামর্শ থাকলে আমাদের সাথে শেয়ার করতে ভুলবেন না।
          </p>
        </div>

        {/* Liquid Glass Social Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {/* Facebook */}
          <a
            href={CONTACT_LINKS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-card group p-6 rounded-2xl flex flex-col items-center text-center gap-3 border border-white/80 hover:border-[#1877F2]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] group-hover:scale-110 transition-transform">
              <FacebookIcon size={22} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-ink text-base">ফেসবুক পেজ</h3>
              <p className="text-xs text-ink-soft mt-0.5">নতুন গল্প ও আপডেটের জন্য</p>
            </div>
            <span className="liquid-glass-btn mt-2 px-3 py-1 rounded-full text-xs font-medium text-[#1877F2] flex items-center gap-1 group-hover:bg-[#1877F2] group-hover:text-white transition-colors">
              <span>যুক্ত হন</span>
              <ExternalLink size={12} />
            </span>
          </a>

          {/* Instagram */}
          <a
            href={CONTACT_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass-card group p-6 rounded-2xl flex flex-col items-center text-center gap-3 border border-white/80 hover:border-[#E1306C]/40 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-[#E1306C]/10 border border-[#E1306C]/20 flex items-center justify-center text-[#E1306C] group-hover:scale-110 transition-transform">
              <InstagramIcon size={22} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-ink text-base">ইনস্টাগ্রাম</h3>
              <p className="text-xs text-ink-soft mt-0.5">স্মৃতির ছবি ও রিলস দেখতে</p>
            </div>
            <span className="liquid-glass-btn mt-2 px-3 py-1 rounded-full text-xs font-medium text-[#E1306C] flex items-center gap-1 group-hover:bg-[#E1306C] group-hover:text-white transition-colors">
              <span>ফলো করুন</span>
              <ExternalLink size={12} />
            </span>
          </a>

          {/* Email */}
          <div className="liquid-glass-card group p-6 rounded-2xl flex flex-col items-center text-center gap-3 border border-white/80 hover:border-rust/40 transition-all">
            <div className="w-12 h-12 rounded-full bg-rust/10 border border-rust/20 flex items-center justify-center text-rust group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div>
              <h3 className="font-serif font-bold text-ink text-base">ইমেইল করুন</h3>
              <p className="text-xs text-ink-soft mt-0.5 truncate max-w-[200px]" title={CONTACT_LINKS.email}>
                {CONTACT_LINKS.email}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <a
                href={`mailto:${CONTACT_LINKS.email}`}
                className="liquid-glass-btn px-3 py-1 rounded-full text-xs font-medium text-rust hover:text-ink transition-colors"
              >
                ইমেইল পাঠান
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="liquid-glass-btn p-1.5 rounded-full text-ink-soft hover:text-rust transition-colors"
                title="ইমেইল অ্যাড্রেস কপি করুন"
              >
                {copied ? <Check size={13} className="text-green-600" /> : <Copy size={13} />}
              </button>
            </div>
          </div>
        </div>

        {/* Send Your Childhood Memory / Suggestion Box */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/90 bg-gradient-to-br from-cream/50 via-paper to-tan/20">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles size={16} className="text-rust" />
            <h3 className="text-lg sm:text-xl font-serif font-bold text-ink">
              আপনার কোনো প্রিয় শৈশবের স্মৃতি শেয়ার করতে চান?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-ink-soft mb-6">
            আমরা হয়তো আপনার পাঠানো বিশেষ স্মৃতিটি আমাদের পরবর্তী ব্লগে বা মেমরি কালেকশনে যুক্ত করতে পারি!
          </p>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm flex items-center gap-2"
            >
              <Check size={18} className="text-green-600 shrink-0" />
              <span>ধন্যবাদ! আপনার স্মৃতি সফলভাবে গৃহীত হয়েছে। সোনালী দিনগুলো এভাবেই বেঁচে থাক!</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="user-name" className="block text-xs font-mono font-medium text-ink-soft mb-1">
                    আপনার নাম
                  </label>
                  <input
                    id="user-name"
                    type="text"
                    required
                    placeholder="যেমন: অনিক বা সুমাইয়া"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-paper/90 border border-tan/60 text-ink placeholder:text-ink-soft/50 text-sm focus:outline-none focus:ring-2 focus:ring-rust/30 focus:border-rust transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="user-era" className="block text-xs font-mono font-medium text-ink-soft mb-1">
                    আপনার জেনারেশন বা যুগ
                  </label>
                  <input
                    id="user-era"
                    type="text"
                    placeholder="যেমন: নব্বইয়ের দশক বা ২০০০ সাল"
                    className="w-full px-4 py-2.5 rounded-xl bg-paper/90 border border-tan/60 text-ink placeholder:text-ink-soft/50 text-sm focus:outline-none focus:ring-2 focus:ring-rust/30 focus:border-rust transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user-memory" className="block text-xs font-mono font-medium text-ink-soft mb-1">
                  আপনার হারিয়ে যাওয়া কোনো প্রিয় স্মৃতি বা পরামর্শ
                </label>
                <textarea
                  id="user-memory"
                  rows={3}
                  required
                  placeholder="যেমন: ছুটির দিনে বৃষ্টির মধ্যে কাগজের নৌকা ভাসানো কিংবা স্কুলের টিফিনে চালতার আচার..."
                  value={formData.memory}
                  onChange={(e) => setFormData({ ...formData, memory: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-paper/90 border border-tan/60 text-ink placeholder:text-ink-soft/50 text-sm focus:outline-none focus:ring-2 focus:ring-rust/30 focus:border-rust transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="liquid-glass-btn self-start flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-rust hover:text-ink transition-all mt-1"
              >
                <Send size={14} />
                <span>স্মৃতি পাঠিয়ে দিন</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

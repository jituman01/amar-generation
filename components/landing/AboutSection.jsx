'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Compass, Sparkles, History, Users, Award } from 'lucide-react';

const VALUES = [
  {
    icon: History,
    title: 'হারানো স্মৃতির সংরক্ষণ',
    description:
      'আমাদের ব্যস্ত আধুনিক জীবনে শৈশবের সরল আনন্দগুলো হারিয়ে যেতে বসেছে। এই প্ল্যাটফর্মটি নব্বই ও শূন্য দশকের সেই অমূল্য মুহূর্তগুলোকে জীবন্ত রাখে।',
  },
  {
    icon: Sparkles,
    title: 'অনন্য জেনারেশন কার্ড',
    description:
      'আপনার নিজের পছন্দের খেলা, নাটক, কার্টুন আর খাবার বাছাই করে এক নিমেষেই তৈরি করে নিন আপনার ব্যক্তিগত নস্টালজিয়া মেমরি কার্ড।',
  },
  {
    icon: Users,
    title: 'প্রজন্মের মেলবন্ধন',
    description:
      'নিজের কার্ডটি ডাউনলোড করে সোশ্যাল মিডিয়ায় বন্ধু ও পরিবারের সাথে শেয়ার করুন। শুরু হোক সোনালী দিনগুলোর গল্প আর স্মৃতিচারণ।',
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-cream/40 border-t border-tan/60 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-btn text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-3">
            <Heart size={13} className="text-rust" />
            <span>আমাদের উদ্দেশ্য</span>
          </div>

          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink leading-tight mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            কেন &lsquo;আমার জেনারেশন&rsquo;?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto font-sans">
            &lsquo;আমার জেনারেশন&rsquo; একটি নস্টালজিক ডিজিটাল উদ্যোগ, যার মূল উদ্দেশ্য
            বাংলাদেশের হারিয়ে যাওয়া সোনালী শৈশব ও সংস্কৃতিকে নতুন করে আবিষ্কার করা।
            এখানে এসে মানুষ তাদের ফেলে আসা শৈশবের খেলা, খাবার, নাটক আর স্মৃতিগুলোর সাথে
            পুনরায় আত্মিক সংযোগ স্থাপন করতে পারে।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VALUES.map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="liquid-glass-card rounded-2xl p-6 sm:p-7 flex flex-col items-start gap-4 border border-white/80"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cream via-white to-tan/40 border border-rust/20 flex items-center justify-center text-rust shadow-sm">
                  <Icon size={22} className="text-rust" />
                </div>

                <h3
                  className="text-lg sm:text-xl font-serif font-bold text-ink"
                  style={{ fontFamily: 'var(--font-bengali-serif)' }}
                >
                  {val.title}
                </h3>

                <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                  {val.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Heartfelt Quote Card */}
        <div className="mt-10 sm:mt-12 liquid-glass-card rounded-2xl p-6 sm:p-8 text-center border border-white/90 bg-gradient-to-r from-cream/60 via-paper/80 to-cream/60">
          <p className="text-base sm:text-lg font-serif italic text-ink mb-2">
            &ldquo;স্মৃতি হলো মনের একটি গোপন জানলা—যখনই দমবন্ধ লাগে, সেই জানলা খুলে দিলে ভেসে আসে শৈশবের একমুঠো তাজা বাতাস।&rdquo;
          </p>
          <span className="text-xs font-mono text-rust tracking-wider uppercase">
            — আমার জেনারেশন পরিবার
          </span>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { strings } from '@/data/strings';
import { Mail, Heart } from 'lucide-react';
import { FacebookIcon, InstagramIcon } from '@/components/ui/SocialIcons';

export function Footer() {
  const handleScrollTo = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="mt-auto py-12 bg-cream/80 border-t border-tan/60 text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <h3
          className="font-serif font-bold text-2xl text-ink mb-1"
          style={{ fontFamily: 'var(--font-bengali-serif)' }}
        >
          {strings.footer.title}
        </h3>
        <p className="text-sm text-ink-soft mb-6 max-w-md">
          {strings.footer.tagline}
        </p>

        {/* Quick Liquid Nav Pills in Footer */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => handleScrollTo('home')}
            className="liquid-glass-btn px-3 py-1 rounded-full text-xs text-ink-soft hover:text-rust"
          >
            হোম
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('create')}
            className="liquid-glass-btn px-3 py-1 rounded-full text-xs text-ink-soft hover:text-rust"
          >
            কার্ড তৈরি করুন
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('blogs')}
            className="liquid-glass-btn px-3 py-1 rounded-full text-xs text-ink-soft hover:text-rust"
          >
            স্মৃতির ব্লগ
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('about')}
            className="liquid-glass-btn px-3 py-1 rounded-full text-xs text-ink-soft hover:text-rust"
          >
            আমাদের কথা
          </button>
          <button
            type="button"
            onClick={() => handleScrollTo('contact')}
            className="liquid-glass-btn px-3 py-1 rounded-full text-xs text-ink-soft hover:text-rust"
          >
            যোগাযোগ
          </button>
        </div>

        {/* Social Placeholders in Footer */}
        <div className="flex items-center gap-3 mb-6">
          <a
            href="https://facebook.com/amar-generation-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="liquid-glass-btn p-2 rounded-full text-ink-soft hover:text-[#1877F2] transition-colors"
          >
            <FacebookIcon size={16} />
          </a>
          <a
            href="https://instagram.com/amar-generation-placeholder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="liquid-glass-btn p-2 rounded-full text-ink-soft hover:text-[#E1306C] transition-colors"
          >
            <InstagramIcon size={16} />
          </a>
          <a
            href="mailto:contact@amar-generation.example.com"
            aria-label="Email"
            className="liquid-glass-btn p-2 rounded-full text-ink-soft hover:text-rust transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>

        <div className="max-w-md bg-paper/70 border border-tan/40 rounded-xl px-4 py-2.5 text-xs text-ink-soft mb-6 leading-relaxed">
          {strings.footer.disclaimer}
        </div>

        <p className="text-xs text-ink-soft/70 flex items-center justify-center gap-1">
          <span>{strings.footer.copyright}</span>
          <span className="inline-flex items-center text-rust">
            — ভালোবাসার স্মৃতিতে তৈরি <Heart size={11} className="ml-1 fill-rust" />
          </span>
        </p>
      </div>
    </footer>
  );
}

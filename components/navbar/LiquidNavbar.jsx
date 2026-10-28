'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Sparkles,
  BookOpen,
  Info,
  Mail,
  Menu,
  X
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'হোম', englishLabel: 'Home', icon: Home },
  { id: 'create', label: 'কার্ড তৈরি', englishLabel: 'Create Card', icon: Sparkles },
  { id: 'blogs', label: 'স্মৃতির পাতা', englishLabel: 'Blogs', icon: BookOpen },
  { id: 'about', label: 'আমাদের কথা', englishLabel: 'About Us', icon: Info },
  { id: 'contact', label: 'যোগাযোগ', englishLabel: 'Contact', icon: Mail },
];

export function LiquidNavbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for subtle size/shadow adaptations
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver to sync active nav item with visible section
  useEffect(() => {
    const sectionIds = ['home', 'create', 'blogs', 'about', 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.1, 0.3],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id) => {
    setMobileMenuOpen(false);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('home');
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Floating Centered Liquid Glass Navbar Header */}
      <header
        role="banner"
        className="fixed top-3 xs:top-4 sm:top-5 left-0 right-0 z-50 flex justify-center items-center px-3 sm:px-4 pointer-events-none"
      >
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto liquid-glass-nav-container rounded-full flex items-center justify-between sm:justify-start gap-1 sm:gap-1.5 p-1.5 sm:p-2 transition-all duration-300 max-w-fit ${
            isScrolled
              ? 'shadow-[0_16px_40px_-8px_rgba(62,44,35,0.16),0_0_0_1px_rgba(255,255,255,0.9),inset_0_1.5px_2px_rgba(255,255,255,1)]'
              : 'shadow-[0_12px_32px_-6px_rgba(62,44,35,0.1),0_0_0_1px_rgba(255,255,255,0.7),inset_0_1px_1.5px_rgba(255,255,255,0.9)]'
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Logo & AMAR GENERATION Text */}
          <button
            type="button"
            onClick={() => handleScrollTo('home')}
            className="flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-ink hover:text-rust transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-rust/50"
            title="AMAR GENERATION — হোম"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/logo-png.png"
                alt="AMAR GENERATION Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <span className="font-sans font-extrabold text-[11px] sm:text-xs tracking-wider text-ink uppercase group-hover:text-rust transition-colors whitespace-nowrap">
              AMAR GENERATION
            </span>
          </button>

          {/* Liquid Separator */}
          <div className="h-4 w-[1px] bg-gradient-to-b from-transparent via-tan/60 to-transparent hidden sm:block mx-1" />

          {/* Desktop Navigation Links with Liquid Glass Buttons */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`liquid-glass-btn group relative flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'liquid-glass-btn-active text-rust'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon
                    size={14}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? 'text-rust' : 'text-ink-soft/80 group-hover:text-rust'
                    }`}
                  />
                  <span>{item.label}</span>

                  {/* Active liquid droplet indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="liquidActivePip"
                      className="w-1.5 h-1.5 rounded-full bg-rust shadow-[0_0_6px_rgba(181,101,29,0.8)] ml-0.5"
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Quick Action Pill + Menu Toggle */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              type="button"
              onClick={() => handleScrollTo('create')}
              className={`liquid-glass-btn flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
                activeSection === 'create' ? 'liquid-glass-btn-active' : 'text-ink-soft'
              }`}
            >
              <Sparkles size={12} className={activeSection === 'create' ? 'text-rust' : ''} />
              <span>কার্ড</span>
            </button>

            {/* Mobile Expandable Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              className="liquid-glass-btn p-1.5 rounded-full text-ink hover:text-rust transition-colors"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Liquid Glass Dropdown Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed top-18 left-4 right-4 z-50 sm:hidden liquid-glass-nav-container rounded-2xl p-3 border border-white/90 shadow-[0_20px_40px_rgba(62,44,35,0.18)] flex flex-col gap-1.5"
          >
            {/* Header with Logo and Text inside drawer */}
            <div className="px-2 py-1.5 flex items-center justify-between border-b border-tan/30 pb-2 mb-1">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/logo-png.png"
                    alt="AMAR GENERATION"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] font-sans font-extrabold tracking-wider text-rust uppercase">
                  AMAR GENERATION
                </span>
              </div>
              <span className="text-[10px] bg-rust/10 text-rust px-2 py-0.5 rounded-full font-mono">
                মেনু
              </span>
            </div>

            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleScrollTo(item.id)}
                  className={`liquid-glass-btn w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'liquid-glass-btn-active text-rust font-semibold'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon size={16} className={isActive ? 'text-rust' : 'text-ink-soft/80'} />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[11px] font-mono text-ink-soft/60">{item.englishLabel}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

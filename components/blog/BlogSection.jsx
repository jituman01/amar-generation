'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { blogs } from '@/data/blogs';
import { artRegistry } from '@/components/art';
import {
  BookOpen,
  Sparkles,
  Clock,
  Tag,
  ArrowRight,
  X,
  Heart,
  Share2,
  Bookmark,
  CheckCircle2,
  Film,
  Smile
} from 'lucide-react';

const CATEGORIES = [
  { id: 'all', label: 'সব স্মৃতি', count: 6 },
  { id: 'bioscope', label: 'বায়োস্কোপ', count: 1 },
  { id: 'games', label: 'ছোটবেলার খেলা', count: 1 },
  { id: 'food', label: 'মুখরোচক খাবার', count: 1 },
  { id: 'memories', label: 'বর্ষা ও লোডশেডিং', count: 1 },
  { id: 'culture', label: 'অ্যানালগ সংস্কৃতি', count: 2 },
];

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeStory, setActiveStory] = useState(null);
  const [reactions, setReactions] = useState({});

  const filteredBlogs =
    selectedCategory === 'all'
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  const handleReaction = (blogId, type) => {
    setReactions((prev) => {
      const current = prev[blogId] || { heart: 12, nostalgic: 24, share: 8 };
      return {
        ...prev,
        [blogId]: {
          ...current,
          [type]: current[type] + 1,
        },
      };
    });
  };

  return (
    <section
      id="blogs"
      className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-paper border-t border-tan/60 scroll-mt-16 overflow-hidden"
    >
      {/* Subtle vintage decorative corner textures */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-tan/15 via-transparent to-transparent pointer-events-none rounded-bl-full" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cream/40 via-transparent to-transparent pointer-events-none rounded-tr-full" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full liquid-glass-btn text-xs font-mono font-semibold tracking-wider text-rust uppercase mb-3">
            <Film size={13} className="text-rust" />
            <span>স্মৃতির অ্যালবাম ও ব্লগ</span>
          </div>

          <h2
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-ink leading-tight mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-bengali-serif)' }}
          >
            হারিয়ে যাওয়া সোনালী দিনগুলোর গল্প
          </h2>

          <p className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-2xl mx-auto">
            বায়োস্কোপের রঙিন জানলা, ধুলোমাখা মাঠের মার্বেল-লাটিম, স্কুলের গেটের
            তেঁতুলের আচার আর লোডশেডিংয়ের রাতের হারিকেনের রূপকথা—আমাদের ফেলে আসা
            সেই অমূল্য শৈশবের কোলাজ।
          </p>

          {/* Category Filter Tabs with Liquid Glass Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`liquid-glass-btn px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    isSelected
                      ? 'liquid-glass-btn-active text-rust font-semibold scale-105'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredBlogs.map((blog, idx) => {
            const ArtComponent = artRegistry[blog.artComponent] || Sparkles;
            const blogReactions = reactions[blog.id] || {
              heart: 18 + idx * 7,
              nostalgic: 32 + idx * 9,
            };

            return (
              <motion.article
                key={blog.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="liquid-glass-card group rounded-2xl overflow-hidden flex flex-col justify-between border border-white/80 hover:border-rust/30 hover:shadow-[0_20px_40px_-10px_rgba(62,44,35,0.14)]"
              >
                <div>
                  {/* Card Header Media / Visual Banner */}
                  <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-cream/70">
                    <Image
                      src={blog.image || '/images/childhood_games_snacks.jpg'}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay for Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />

                    {/* Top Sticker & Read Time */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                      <span className="liquid-glass-btn pointer-events-auto px-2.5 py-1 rounded-full text-[11px] font-semibold text-rust bg-white/90 shadow-xs border border-white/80">
                        {blog.badgeSticker}
                      </span>
                      <span className="liquid-glass-btn pointer-events-auto px-2 py-0.5 rounded-full text-[11px] text-ink font-mono bg-paper/85 shadow-xs flex items-center gap-1">
                        <Clock size={11} className="text-rust" />
                        <span>{blog.readTime}</span>
                      </span>
                    </div>

                    {/* Bottom Floating Art Icon Stamp */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-paper/90 border border-white/80 shadow-md flex items-center justify-center text-rust group-hover:rotate-12 transition-transform duration-300">
                      <ArtComponent size={22} className="text-rust" />
                    </div>

                    {/* Era Tag */}
                    <div className="absolute bottom-3 left-3 text-xs text-paper/90 font-mono tracking-wide drop-shadow-sm">
                      {blog.era}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex flex-col gap-3">
                    {/* Rhyme Banner */}
                    <div className="p-2.5 rounded-xl bg-cream/60 border border-tan/40 text-xs font-serif italic text-ink-soft/90 line-clamp-1">
                      &ldquo;{blog.rhyme}&rdquo;
                    </div>

                    {/* Blog Title */}
                    <h3
                      className="text-lg sm:text-xl font-serif font-bold text-ink leading-snug group-hover:text-rust transition-colors"
                      style={{ fontFamily: 'var(--font-bengali-serif)' }}
                    >
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-ink-soft leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Keyword Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {blog.memoryKeywords.slice(0, 3).map((kw) => (
                        <span
                          key={kw}
                          className="px-2 py-0.5 rounded-md text-[11px] bg-paper border border-tan/50 text-ink-soft font-mono"
                        >
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-5 sm:px-6 pb-5 pt-2 border-t border-tan/30 flex items-center justify-between">
                  {/* Reaction Pill */}
                  <button
                    type="button"
                    onClick={() => handleReaction(blog.id, 'nostalgic')}
                    className="flex items-center gap-1 text-xs text-ink-soft hover:text-rust transition-colors group/btn"
                    title="নস্টালজিক"
                  >
                    <Heart
                      size={14}
                      className="text-rust/70 group-hover/btn:scale-125 transition-transform"
                    />
                    <span>{blogReactions.nostalgic}</span>
                  </button>

                  {/* Read Story Button */}
                  <button
                    type="button"
                    onClick={() => setActiveStory(blog)}
                    className="liquid-glass-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-rust hover:text-ink transition-colors"
                  >
                    <span>পুরো গল্প পড়ুন</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Interactive Full Story Reading Modal */}
      <AnimatePresence>
        {activeStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto liquid-glass-card rounded-3xl p-6 sm:p-8 bg-paper/95 border border-white shadow-[0_25px_60px_-15px_rgba(62,44,35,0.25)] text-ink"
            >
              {/* Modal Close Button */}
              <button
                type="button"
                onClick={() => setActiveStory(null)}
                className="absolute top-4 right-4 liquid-glass-btn p-2 rounded-full text-ink hover:text-rust transition-colors z-20"
                aria-label="Close story"
              >
                <X size={18} />
              </button>

              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="liquid-glass-btn px-3 py-1 rounded-full text-xs font-semibold text-rust bg-cream border border-tan/60">
                  {activeStory.categoryLabel}
                </span>
                <span className="text-xs font-mono text-ink-soft">
                  {activeStory.readTime}
                </span>
              </div>

              {/* Title */}
              <h2
                className="text-2xl sm:text-3xl font-serif font-bold text-ink leading-tight mb-1"
                style={{ fontFamily: 'var(--font-bengali-serif)' }}
              >
                {activeStory.title}
              </h2>
              <p className="text-xs sm:text-sm text-rust font-mono mb-4">
                {activeStory.englishTitle}
              </p>

              {/* Visual Banner */}
              {activeStory.image && (
                <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden mb-6 border border-tan/40">
                  <Image
                    src={activeStory.image || '/images/childhood_games_snacks.jpg'}
                    alt={activeStory.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 672px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-paper text-xs sm:text-sm font-serif italic drop-shadow-md">
                    &ldquo;{activeStory.rhyme}&rdquo;
                  </div>
                </div>
              )}

              {/* Story Highlights Box */}
              <div className="p-4 rounded-2xl bg-cream/70 border border-tan/50 mb-6">
                <h4 className="text-xs font-mono font-bold tracking-wider uppercase text-rust mb-2.5 flex items-center gap-1.5">
                  <Sparkles size={13} className="text-rust" />
                  <span>স্মৃতির বিশেষ অংশসমূহ</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeStory.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-ink-soft">
                      <CheckCircle2 size={15} className="text-rust shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Full Text Story Content */}
              <div className="prose prose-stone max-w-none mb-6">
                {activeStory.fullStory
                  .trim()
                  .split('\n\n')
                  .map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-sm sm:text-base text-ink leading-relaxed mb-4 text-justify"
                    >
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>

              {/* Memory Keywords */}
              <div className="flex flex-wrap items-center gap-1.5 pb-6 border-b border-tan/40">
                <span className="text-xs font-mono text-ink-soft mr-1">ট্যাগ:</span>
                {activeStory.memoryKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-2.5 py-1 rounded-full text-xs bg-cream/80 border border-tan/60 text-ink-soft font-mono"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              {/* Modal Reaction & Action Bar */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleReaction(activeStory.id, 'nostalgic')}
                    className="liquid-glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-rust"
                  >
                    <Heart size={14} className="fill-rust/20" />
                    <span>নস্টালজিক হলাম</span>
                    <span className="font-mono ml-1">
                      ({reactions[activeStory.id]?.nostalgic || 32})
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleReaction(activeStory.id, 'heart')}
                    className="liquid-glass-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-ink-soft hover:text-ink"
                  >
                    <Smile size={14} />
                    <span>আমারও মনে আছে</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveStory(null)}
                  className="liquid-glass-btn px-4 py-1.5 rounded-full text-xs font-semibold text-ink hover:text-rust"
                >
                  বন্ধ করুন
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

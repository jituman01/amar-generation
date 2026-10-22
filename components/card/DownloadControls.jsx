'use client';

import React, { useState } from 'react';
import { strings } from '@/data/strings';
import { quotes } from '@/data/quotes';
import { downloadCardPng, shareCardPng } from '@/lib/exportCard';
import { Download, Share2, Sparkles, RefreshCw, Check, AlertCircle } from 'lucide-react';

export function DownloadControls({
  cardRef,
  customTitle,
  onUpdateTitle,
  selectedQuoteId,
  onSelectQuote,
  onPrev,
  onReset,
}) {
  const [isExporting, setIsExporting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleDownload = async () => {
    if (!cardRef.current || isExporting) return;
    setIsExporting(true);
    setErrorMessage(null);
    setStatusMessage(strings.wizard.cardStep.downloading);

    try {
      await downloadCardPng(cardRef.current, 'amar-generation-card.png');
      setStatusMessage(strings.wizard.cardStep.downloadSuccess);
      setTimeout(() => setStatusMessage(null), 3000);
    } catch (err) {
      console.error('Download failed:', err);
      setErrorMessage(strings.wizard.cardStep.exportError);
    } finally {
      setIsExporting(false);
    }
  };

  const handleShare = async () => {
    if (!cardRef.current || isExporting) return;
    setIsExporting(true);
    setErrorMessage(null);
    setStatusMessage(strings.wizard.cardStep.downloading);

    try {
      const result = await shareCardPng(cardRef.current, {
        title: customTitle || 'আমার জেনারেশন কার্ড',
        text: 'আমার ছোটবেলার সোনালী স্মৃতিগুলো নিয়ে তৈরি করা Generation Card!',
        filename: 'amar-generation-card.png',
      });

      if (result.shared) {
        setStatusMessage(strings.wizard.cardStep.shareSuccess);
      } else if (result.fallbackDownload) {
        setStatusMessage(strings.wizard.cardStep.shareFallback);
      }
      setTimeout(() => setStatusMessage(null), 4000);
    } catch (err) {
      console.error('Share failed:', err);
      setErrorMessage(strings.wizard.cardStep.exportError);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Customization controls: Title & Quote */}
      <div className="bg-cream/50 border border-tan/70 rounded-2xl p-5 shadow-2xs">
        <h3 className="font-serif font-bold text-ink text-base mb-3 flex items-center gap-1.5">
          <Sparkles size={16} className="text-rust" />
          <span>{strings.wizard.cardStep.editSectionTitle}</span>
        </h3>

        {/* Title input */}
        <div className="mb-4">
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            {strings.wizard.cardStep.titleInputLabel}
          </label>
          <input
            type="text"
            maxLength={60}
            value={customTitle}
            onChange={(e) => onUpdateTitle(e.target.value)}
            placeholder="আমার ছোটবেলার ছোট্ট একটা টুকরো"
            className="w-full bg-paper border border-tan/80 rounded-xl px-3.5 py-2.5 text-sm text-ink focus:outline-hidden focus:ring-2 focus:ring-ink"
          />

          {/* Title presets */}
          <div className="flex flex-wrap gap-1.5 mt-2">
            {strings.wizard.cardStep.titlePresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => onUpdateTitle(preset)}
                className="text-xs px-2.5 py-1 rounded-lg bg-paper border border-tan/60 text-ink-soft hover:text-ink hover:bg-tan/20 cursor-pointer transition-colors"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>

        {/* Quote selector */}
        <div>
          <label className="block text-xs font-medium text-ink-soft mb-1.5">
            {strings.wizard.cardStep.quoteInputLabel}
          </label>
          <div className="space-y-1.5">
            {quotes.map((q) => {
              const isSelected = q.id === selectedQuoteId;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => onSelectQuote(q.id)}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs sm:text-sm transition-colors cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-paper border-ink font-medium text-ink shadow-2xs'
                      : 'bg-paper/50 border-tan/50 text-ink-soft hover:bg-paper'
                  }`}
                >
                  <span className="truncate pr-2">&ldquo;{q.text}&rdquo;</span>
                  {isSelected && <Check size={14} className="text-ink shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Status or error feedback */}
      {statusMessage && (
        <div className="p-3 rounded-xl bg-ink text-paper text-sm text-center flex items-center justify-center gap-2 shadow-xs">
          <Sparkles size={16} className="text-rust" />
          <span>{statusMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm text-center flex items-center justify-center gap-2">
          <AlertCircle size={16} />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Action buttons (Sticky on mobile) */}
      <div className="sticky bottom-0 left-0 right-0 z-30 bg-paper/95 backdrop-blur-md border-t border-tan/80 py-3 sm:py-4 px-2 sm:px-0 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="button"
          onClick={handleDownload}
          disabled={isExporting}
          className="w-full sm:flex-1 min-h-[50px] px-6 py-3.5 rounded-xl font-medium text-base sm:text-lg bg-ink text-paper hover:bg-ink-soft transition-all duration-200 shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isExporting ? (
            <RefreshCw size={20} className="animate-spin" />
          ) : (
            <Download size={20} />
          )}
          <span>{strings.wizard.cardStep.downloadBtn}</span>
        </button>

        <button
          type="button"
          onClick={handleShare}
          disabled={isExporting}
          className="w-full sm:w-auto min-h-[50px] px-5 py-3.5 rounded-xl font-medium text-base bg-cream border border-tan text-ink hover:bg-tan/30 transition-all duration-200 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Share2 size={18} />
          <span>{strings.wizard.cardStep.shareBtn}</span>
        </button>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <button
            type="button"
            onClick={onPrev}
            className="px-4 py-2.5 min-h-[46px] rounded-xl text-sm font-medium text-ink-soft hover:text-ink hover:bg-cream transition-colors cursor-pointer"
          >
            ← {strings.wizard.cardStep.reselectBtn}
          </button>

          <button
            type="button"
            onClick={onReset}
            className="px-4 py-2.5 min-h-[46px] rounded-xl text-xs font-medium text-rust/90 hover:text-rust hover:bg-rust/10 transition-colors cursor-pointer"
          >
            {strings.wizard.buttons.reset}
          </button>
        </div>
      </div>
    </div>
  );
}

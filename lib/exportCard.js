import { toPng } from 'html-to-image';
import { CARD_WIDTH, CARD_HEIGHT } from '@/components/card/CardFrame';

/**
 * Converts a base64 data URL to a Blob.
 */
function dataUrlToBlob(dataUrl) {
  const arr = dataUrl.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * Render the unscaled card element to a high-resolution PNG data URL.
 */
export async function renderCardToDataUrl(cardElement) {
  if (!cardElement) {
    throw new Error('Card element reference not found');
  }

  // 1. Wait for web fonts to load
  if (typeof document !== 'undefined' && document.fonts) {
    try {
      await document.fonts.ready;
    } catch (e) {
      console.warn('Fonts ready check ignored:', e);
    }
  }

  const exportOptions = {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    pixelRatio: 2, // 2160 x 2700
    cacheBust: true,
    backgroundColor: '#FAF6EF',
    style: {
      transform: 'none',
      transformOrigin: 'top left',
      margin: '0',
    },
  };

  try {
    // Safari / iOS warm-up run
    await toPng(cardElement, exportOptions);
    // Real capture
    const dataUrl = await toPng(cardElement, exportOptions);
    return dataUrl;
  } catch (err) {
    console.warn('Initial 2x export failed, trying 1.5x fallback...', err);
    // Fallback to 1.5x pixel ratio
    const fallbackOptions = {
      ...exportOptions,
      pixelRatio: 1.5,
    };
    return await toPng(cardElement, fallbackOptions);
  }
}

/**
 * Download the generated card as a PNG file.
 */
export async function downloadCardPng(cardElement, filename = 'amar-generation-card.png') {
  const dataUrl = await renderCardToDataUrl(cardElement);
  const blob = dataUrlToBlob(dataUrl);
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);

  return true;
}

/**
 * Share the generated card using the Web Share API with download fallback.
 */
export async function shareCardPng(cardElement, { title, text, filename = 'amar-generation-card.png' }) {
  const dataUrl = await renderCardToDataUrl(cardElement);
  const blob = dataUrlToBlob(dataUrl);
  const file = new File([blob], filename, { type: 'image/png' });

  // Check if Web Share API with files is supported
  if (
    typeof navigator !== 'undefined' &&
    navigator.canShare &&
    navigator.canShare({ files: [file] })
  ) {
    try {
      await navigator.share({
        files: [file],
        title: title || 'Amar Generation Card',
        text: text || 'আমার শৈশবের জেনারেশন কার্ড!',
      });
      return { shared: true };
    } catch (err) {
      if (err.name === 'AbortError') {
        return { cancelled: true };
      }
      console.warn('Web share failed, falling back to download:', err);
    }
  }

  // Fallback to download
  await downloadCardPng(cardElement, filename);
  return { fallbackDownload: true };
}

import { stickers } from '@/data/stickers';
import { memories } from '@/data/memories';

/**
 * Pure function to evaluate which stickers are unlocked based on selected memories.
 * @param {string[]} selectedIds
 * @returns {Array} List of unlocked sticker objects
 */
export function getUnlockedStickers(selectedIds = []) {
  if (!selectedIds || selectedIds.length === 0) return [];

  const selectedSet = new Set(selectedIds);
  const selectedMemories = memories.filter((m) => selectedSet.has(m.id));

  // Count by category
  const categoryCounts = {};
  selectedMemories.forEach((mem) => {
    categoryCounts[mem.category] = (categoryCounts[mem.category] || 0) + 1;
  });

  return stickers.filter((sticker) => {
    const rule = sticker.unlockedBy;
    if (!rule) return false;

    if (rule.type === 'categoryCount') {
      return (categoryCounts[rule.category] || 0) >= rule.count;
    }

    if (rule.type === 'hasAny') {
      return rule.ids.some((id) => selectedSet.has(id));
    }

    if (rule.type === 'minTotal') {
      return selectedIds.length >= rule.count;
    }

    return false;
  });
}

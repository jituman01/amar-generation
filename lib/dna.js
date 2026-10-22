/**
 * Amar Generation: Childhood DNA Calculation Engine
 *
 * Algorithm & Transparent Rule:
 * 1. Each memory contributes weights (1-3) to traits via its `traits` map.
 * 2. `raw[trait]` = sum of weights from selected memories.
 * 3. `max[trait]` = sum of weights for that trait across all memories available in the selected era.
 * 4. `score` = round(40 + 60 * min(1, raw / (0.5 * max))) for traits with raw > 0.
 *    Choosing roughly half of a trait's items yields 100%, and any contribution starts at 40%.
 *    Traits with raw = 0 are omitted.
 * 5. Sort descending by score; tie-break deterministically.
 * 6. Top traits feed personalized generated descriptions deterministically hashed.
 */

import { traits } from '@/data/traits';
import { memories } from '@/data/memories';

/**
 * Deterministic hash function for stable description variant selection.
 */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Calculate Childhood DNA scores for a given era and selected memory IDs.
 * @param {string} eraId
 * @param {string[]} selectedIds
 * @param {number} topLimit
 */
export function calculateDna(eraId, selectedIds, topLimit = 5) {
  if (!selectedIds || selectedIds.length === 0) {
    return {
      traitScores: [],
      description: 'কিছু স্মৃতি নির্বাচন করলে তোমার Childhood DNA এখানে ফুটে উঠবে।',
      topTrait: null,
    };
  }

  // 1. Get all memories for this era
  const eraMemories = memories.filter((m) => m.eras.includes(eraId));
  const selectedMemories = eraMemories.filter((m) => selectedIds.includes(m.id));

  // 2. Compute max weights per trait in this era
  const maxWeights = {};
  const rawWeights = {};

  Object.keys(traits).forEach((traitId) => {
    maxWeights[traitId] = 0;
    rawWeights[traitId] = 0;
  });

  eraMemories.forEach((mem) => {
    if (mem.traits) {
      Object.entries(mem.traits).forEach(([traitId, weight]) => {
        if (maxWeights[traitId] !== undefined) {
          maxWeights[traitId] += weight;
        }
      });
    }
  });

  // 3. Compute raw weights from selected memories
  selectedMemories.forEach((mem) => {
    if (mem.traits) {
      Object.entries(mem.traits).forEach(([traitId, weight]) => {
        if (rawWeights[traitId] !== undefined) {
          rawWeights[traitId] += weight;
        }
      });
    }
  });

  // 4. Calculate scores: round(40 + 60 * min(1, raw / (0.5 * max)))
  const traitScores = [];
  const traitOrder = Object.keys(traits);

  traitOrder.forEach((traitId) => {
    const raw = rawWeights[traitId] || 0;
    const max = maxWeights[traitId] || 1;

    if (raw > 0) {
      const halfMax = Math.max(1, 0.5 * max);
      const ratio = Math.min(1, raw / halfMax);
      const score = Math.round(40 + 60 * ratio);

      traitScores.push({
        id: traitId,
        trait: traits[traitId],
        score,
        raw,
        max,
      });
    }
  });

  // 5. Sort descending by score, tie-break by raw weight then trait index
  traitScores.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (b.raw !== a.raw) return b.raw - a.raw;
    return traitOrder.indexOf(a.id) - traitOrder.indexOf(b.id);
  });

  const slicedScores = traitScores.slice(0, topLimit);
  const topTrait = slicedScores[0]?.trait || null;

  // 6. Generate description
  const description = generateDnaDescription(slicedScores, selectedMemories, selectedIds);

  return {
    traitScores: slicedScores,
    allScores: traitScores,
    description,
    topTrait,
  };
}

/**
 * Generate a personalized Bangla description deterministically.
 */
function generateDnaDescription(scores, selectedMemories, selectedIds) {
  if (scores.length === 0 || selectedMemories.length === 0) {
    return 'তোমার শৈশবের গল্প তৈরি হতে চলেছে...';
  }

  const primary = scores[0];
  const secondary = scores[1];
  const hash = hashString(selectedIds.sort().join('-'));

  // Pick a random-feeling but deterministic memory
  const randomMem = selectedMemories[hash % selectedMemories.length];
  const memLabel = randomMem ? `"${randomMem.label}"` : 'স্মৃতিগুলো';

  const descriptions = {
    outdoor: [
      `তুমি ছিলেন একজন নিখাদ আউটডোর কিড, যার ছোটবেলা কেটেছে ${memLabel}-এর ধুলোবালি ও খোলা মাঠের উল্লাসে।`,
      `পাড়ার মাঠ, রোদ আর বৃষ্টিই ছিল তোমার প্রিয় ঠিকানা; ${memLabel} তোমাকে আজও সেই উচ্ছলতায় ফিরিয়ে নিয়ে যায়।`,
      `বিকেলের আযানের আগ পর্যন্ত বাড়ি ফেরার চিন্তা ছিল না তোমার — ${memLabel} ছিল সেই বাঁধভাঙা আনন্দের সঙ্গী।`,
    ],
    cartoon: [
      `টিভি স্ক্রিন আর কাল্পনিক জগতের মুগ্ধ দর্শক ছিলে তুমি; ${memLabel} দেখা না হলে তোমার দিনটাই মাটি হয়ে যেত!`,
      `ছুটির সকাল মানেই তোমার জন্য ছিল কার্টুনের ম্যাজিক; প্রিয় স্মৃতি ${memLabel} আজও মনে রোমাঞ্চ জাগায়।`,
      `স্ক্রিনের নায়কদের সাথে মেতে থাকা এক স্বপ্নের শৈশব ছিল তোমার, যেখানে ${memLabel} ছিল সবচেয়ে রঙিন অধ্যায়।`,
    ],
    foodie: [
      `স্কুলের গেটের স্বাদ আর বিকেলের লোভনীয় নাশতা ছিল তোমার দিন শেষের সেরা উপহার, বিশেষ করে ${memLabel}।`,
      `স্মৃতির সবচেয়ে সুস্বাদু ঘ্রাণ আজও লেগে আছে তোমার মনে; ${memLabel} ছাড়া তোমার শৈশব অপূর্ণ ছিল!`,
      `বন্ধুদের সাথে ভাগ করে খাওয়া আর স্বাদের সন্ধানে ঘোরা এক রসনাবিলাসী শৈশব ছিল তোমার।`,
    ],
    techie: [
      `নতুন যন্ত্রপাতির বাটন টেপা আর কৌতূহলী চোখ নিয়ে বড় হয়েছো তুমি; ${memLabel}-এর স্মৃতি আজও তোমার চোখে চমক এনে দেয়।`,
      `ক্যাসেটের ফিতা ঘোরানো হোক বা ডিজিটাল স্ক্রিনের ম্যাজিক — তুমি ছিলে সেই যুগের সবচেয়ে ট্রেন্ডি খুদে এক্সপ্লোরার!`,
      `প্রযুক্তির পরিবর্তনের সাক্ষী তুমি; শৈশবে ${memLabel} চালানোই ছিল তোমার সবচেয়ে গর্বের মুহূর্ত।`,
    ],
    social: [
      `পাড়ার এক ঝাঁক বন্ধু ছাড়া তোমার কোনো খেলাই জমতো না; ${memLabel} নিয়ে কাটানো আড্ডাই ছিল জীবনের কেন্দ্রবিন্দু।`,
      `তুমি ছিলে দলের মধ্যমণি; সবাই মিলে মেতে থাকা আর ${memLabel} ভাগ করে নেওয়ার সেই দিনগুলো আজও সেরা।`,
    ],
    homebody: [
      `শান্ত মনে নিজের মতো করে শৈশব উপভোগ করেছ তুমি; বৃষ্টির দিনে ঘরের কোণে ${memLabel} ছিল পরম প্রশান্তি।`,
      `কোলাহলের বাইরে নিজের প্রিয় জগতেই তুমি ছিলে রাজা; ${memLabel} ছিল তোমার মিষ্টি অবসরের সঙ্গী।`,
    ],
    'sweet-tooth': [
      `আইসক্রিমের সুর বাজলেই পকেট হাতড়ানো আর মিষ্টির লোভে ছুটে যাওয়া এক পরম আনন্দময় শৈশব ছিল তোমার।`,
      `শৈশবের সবচেয়ে মিষ্টি স্মৃতিগুলো তোমার মনে গাঁথা; ${memLabel}-এর স্বাদ আজও মুখে লেগে আছে।`,
    ],
  };

  const pool = descriptions[primary.id] || descriptions.outdoor;
  const chosenVariant = pool[hash % pool.length];

  if (secondary && secondary.score >= 60) {
    return `${chosenVariant} সাথে সাথে ${secondary.trait.label}-এর স্পষ্ট ছাপও তোমার ব্যক্তিত্বে উজ্জ্বল।`;
  }

  return chosenVariant;
}

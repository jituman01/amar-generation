export const strings = {
  // Hero section verbatim copy
  hero: {
    eyebrow: 'A NOSTALGIC JOURNEY THROUGH TIME',
    title: 'স্মৃতির ক্যানভাসে আমাদের শৈশব।',
    body: 'তোমার শৈশবের খেলা, খাবার, কার্টুন আর স্মৃতিগুলো বেছে নাও। তৈরি করো AMAR GENERATION CARD.',
    primaryCta: 'Create My Card',
    secondaryCta: 'Explore Memories',
    chips: ['১ যুগ বাছো', '২ স্মৃতি বেছে নাও', '৩ কার্ড ডাউনলোড করো'],
    subtext: 'Made for the generations of Bangladesh',
  },

  // Landing page sections
  memoryPreview: {
    heading: 'নস্টালজিয়ার টুকরো টুকরো ছবি',
    subheading: 'যে স্মৃতিগুলো আজও আমাদের শৈশবে ফিরিয়ে নিয়ে যায়',
    exploreMore: 'স্মৃতিগুলো নিয়ে কার্ড বানাও',
    moreMemoriesCount: 'আরও অসংখ্য স্মৃতি অপেক্ষা করছে...',
  },

  howItWorks: {
    heading: 'কীভাবে তৈরি করবে তোমার Generation Card?',
    subheading: 'মাত্র ৪টি সহজ ধাপে তোমার শৈশবের স্মৃতিকথা ফ্রেমবন্দি করো',
    steps: [
      {
        number: '১',
        title: 'তোমার যুগ বেছে নাও',
        description: '৯০, ২০০০ বা ২০১০ — যে দশকটি তোমার শৈশবকে সবচেয়ে আপন মনে হয়।',
      },
      {
        number: '২',
        title: 'স্মৃতিগুলো বাছাই করো',
        description: 'প্রিয় খেলা, কার্টুন, খাবার ও প্রতিদিনের মুহূর্তগুলো থেকে প্রিয়গুলো বেছে নাও।',
      },
      {
        number: '৩',
        title: 'Childhood DNA দেখো',
        description: 'তোমার পছন্দের ওপর ভিত্তি করে তৈরি হবে তোমার নিজস্ব শৈশব ব্যক্তিত্ব।',
      },
      {
        number: '৪',
        title: 'কার্ড ডাউনলোড ও শেয়ার',
        description: 'সুন্দর ভিন্টেজ কার্ড তৈরি করে বন্ধুদের সাথে শেয়ার করো আর স্মৃতিতে ডুব দাও।',
      },
    ],
  },

  // Wizard (/create)
  wizard: {
    steps: [
      { id: 'era', label: '১. যুগ' },
      { id: 'memories', label: '২. স্মৃতি' },
      { id: 'dna', label: '৩. Childhood DNA' },
      { id: 'card', label: '৪. কার্ড' },
    ],
    buttons: {
      next: 'পরের ধাপ',
      prev: 'আগের ধাপ',
      reset: 'শুরু থেকে শুরু করো',
      createCard: 'কার্ড তৈরি করো',
      backToHome: 'হোমপেজে ফিরুন',
    },
    eraStep: {
      title: 'তোমার শৈশবের যুগটি বেছে নাও',
      helper: 'যে সময়কালটি তোমার শৈশবের সবচেয়ে আপন ও উজ্জ্বল মনে হয়, সেটি বেছে নাও। জন্ম সাল যাই হোক, অনুভূতিটাই আসল!',
      badgePrefix: 'যুগের পরিচিতি',
    },
    memoryStep: {
      title: 'তোমার পছন্দের স্মৃতিগুলো চিহ্নিত করো',
      helper: 'কমপক্ষে ৩টি এবং সর্বোচ্চ ১২টি স্মৃতি বেছে নাও (কয়েকটি ভিন্ন ক্যাটাগরি থেকে বেছে নিলে DNA আরো নিখুঁত হয়)।',
      minNotice: 'কার্ড তৈরি করতে অন্তত ৩টি স্মৃতি নির্বাচন করো',
      maxNotice: 'সর্বোচ্চ ১২টি স্মৃতি নির্বাচন করা যাবে।',
      selectionCount: (count) => `${count} টি স্মৃতি বেছেছ`,
      eraChangedNote: 'যুগ পরিবর্তনের কারণে অনুপযুক্ত কিছু স্মৃতি নির্বাচন বাদ দেওয়া হয়েছে।',
      allCategory: 'সব',
      clearAll: 'সব মুছুন',
    },
    dnaStep: {
      title: 'তোমার Childhood DNA',
      subtitle: 'তোমার স্মৃতি নির্বাচনের উপর ভিত্তি করে তৈরি হওয়া ব্যক্তিত্ব',
      funNotice: 'এটা সম্পূর্ণ মজার জন্য তৈরি একটি রূপরেখা।',
      explainerToggle: 'কীভাবে হিসাব হলো?',
      explainerText: 'তোমার বাছাই করা প্রতিটি স্মৃতি তার ধরন অনুযায়ী নির্দিষ্ট ট্রেইটে ১-৩ পয়েন্ট যোগ করে। তোমার নির্বাচিত যুগের সর্বোচ্চ পয়েন্টের অনুপাতে শতকরা স্কোর হিসাব করা হয়।',
      unlockedStickersTitle: 'আনলক হওয়া শৈশবের ব্যাজসমূহ',
      noStickersYet: 'আরও কয়েকটি স্মৃতি নির্বাচন করলে নতুন ব্যাজ আনলক হবে!',
    },
    cardStep: {
      title: 'তোমার তৈরি Generation Card',
      subtitle: 'টেমপ্লেট পরিবর্তন করো এবং কার্ডটি ডাউনলোড করে শেয়ার করো',
      templatesLabel: 'কার্ড টেমপ্লেট বেছে নাও',
      templates: {
        'minimal-memory': 'মিনিমাল মেমোরি',
        'retro-paper': 'রেট্রো পেপার',
        'y2k-pop': 'Y2K পপ',
      },
      editSectionTitle: 'কার্ড কাস্টমাইজ করো',
      titleInputLabel: 'কার্ডের শিরোনাম',
      titlePresets: [
        'আমার ছোটবেলার ছোট্ট একটা টুকরো',
        'আমার সোনালী শৈশব',
        'স্মৃতির আঙিনায় ফেলে আসা দিন',
        'যে দিনগুলো হারিয়ে গেছে',
      ],
      quoteInputLabel: 'কার্ডের প্রিয় উক্তি',
      downloadBtn: 'ছবি ডাউনলোড করো (PNG)',
      shareBtn: 'সোশ্যাল মিডিয়ায় শেয়ার করো',
      downloading: 'কার্ড তৈরি হচ্ছে...',
      downloadSuccess: 'কার্ডটি ডাউনলোড হয়েছে!',
      shareSuccess: 'সফলভাবে শেয়ার হয়েছে!',
      shareFallback: 'ছবিটি ডাউনলোড হয়েছে, এবার তোমার পছন্দের অ্যাপে শেয়ার করো।',
      exportError: 'কার্ড তৈরি করতে সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করো।',
      reselectBtn: 'স্মৃতি পরিবর্তন করো',
    },
  },

  footer: {
    title: 'Amar Generation — আমার জেনারেশন',
    tagline: 'শৈশবের স্মৃতিগুলো কখনোই পুরোনো হয় না।',
    disclaimer: 'Childhood DNA এবং কার্ডের ফলাফল কেবল স্মৃতিচারণ ও নির্মল আনন্দের জন্য।',
    copyright: '© ২০২৬ Amar Generation · বাংলাদেশের সব প্রজন্মের শৈশবের স্মরণে।',
  },
};

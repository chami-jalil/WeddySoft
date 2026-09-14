export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectFact = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  credit: string;
  summary: string;
  overview: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  facts: ProjectFact[];
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "lovepelli",
    title: "Lovepelli",
    category: "Web Design & Development",
    credit: "Designed and developed by WeddySoft",
    summary:
      "Lovepelli is a matchmaking website with registration, member search, and profile pages.",
    overview:
      "WeddySoft designed and developed the Lovepelli website. The live site includes account registration, login, location-based search, and member profile sections.",
    cover: {
      src: "/images/work/lovepelli/home.webp",
      alt: "Lovepelli website homepage",
    },
    gallery: [
      {
        src: "/images/work/lovepelli/home.webp",
        alt: "Lovepelli homepage with registration and city search",
      },
    ],
    facts: [
      { label: "Category", value: "Web Design & Development" },
      { label: "Credit", value: "Designed and developed by WeddySoft" },
      { label: "Website", value: "lovepelli.com" },
    ],
    links: [{ label: "Visit Lovepelli", href: "https://lovepelli.com" }],
  },
  {
    slug: "telugu-quran",
    title: "Telugu Quran",
    category: "Android App Development",
    credit: "Published on Google Play by WeddySoft Enterprises",
    summary:
      "Telugu Quran is an Android app for reading the Quran with Telugu translation, published on Google Play.",
    overview:
      "Telugu Quran is listed on Google Play under the developer name WeddySoft Enterprises. The Play listing shows 10K+ downloads and a 4.7 star rating. The updated app includes a Telugu home screen, chapter list with Arabic titles, verse reading with copy and bookmark actions, word search, an alphabetical index, and font size and theme settings.",
    cover: {
      src: "/images/work/telugu-quran/home.webp",
      alt: "Telugu Quran Android app home screen",
    },
    gallery: [
      {
        src: "/images/work/telugu-quran/home.webp",
        alt: "Telugu Quran home screen with chapter, search, and index shortcuts",
      },
      {
        src: "/images/work/telugu-quran/chapters.webp",
        alt: "Telugu Quran chapters list with Arabic and Telugu titles",
      },
      {
        src: "/images/work/telugu-quran/reading.webp",
        alt: "Telugu Quran verse reading screen for Surah Al-Fatiha",
      },
      {
        src: "/images/work/telugu-quran/search.webp",
        alt: "Telugu Quran search screen",
      },
      {
        src: "/images/work/telugu-quran/index.webp",
        alt: "Telugu Quran alphabetical word index",
      },
      {
        src: "/images/work/telugu-quran/settings.webp",
        alt: "Telugu Quran settings for font size and theme",
      },
    ],
    facts: [
      { label: "Category", value: "Android App Development" },
      { label: "Developer", value: "WeddySoft Enterprises" },
      { label: "Downloads", value: "10K+" },
      { label: "Rating", value: "4.7" },
    ],
    links: [
      {
        label: "View on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.tmc.teluguquran",
      },
    ],
  },
  {
    slug: "tailorpro",
    title: "TailorPro",
    category: "SaaS & Mobile Application",
    credit: "A software product developed by WeddySoft",
    summary:
      "TailorPro is a WeddySoft product for tailor shops to manage customers, measurements, and orders.",
    overview:
      "TailorPro is a SaaS and Android application developed by WeddySoft. The shop app includes a dashboard, customer records, measurement history, and order workflows for tailoring and alteration work. It is one of the products WeddySoft has built; it is not the identity of the company.",
    cover: {
      src: "/images/work/tailorpro/home.webp",
      alt: "TailorPro shop dashboard",
    },
    gallery: [
      {
        src: "/images/work/tailorpro/home.webp",
        alt: "TailorPro home dashboard with orders and customers",
      },
      {
        src: "/images/work/tailorpro/orders.webp",
        alt: "TailorPro order list with status filters",
      },
      {
        src: "/images/work/tailorpro/measurements-hub.webp",
        alt: "TailorPro measurements hub",
      },
      {
        src: "/images/work/tailorpro/measurements.webp",
        alt: "TailorPro new measurement form for a shirt",
      },
    ],
    facts: [
      { label: "Category", value: "SaaS & Mobile Application" },
      { label: "Credit", value: "Developed by WeddySoft" },
    ],
    links: [],
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

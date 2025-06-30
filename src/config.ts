export const SITE = {
  website: "https://bburt.me/", // replace this with your deployed domain
  author: "B. Burt",
  profile: "",
  desc: "My personal blog where I'll be writing about my life, my ongoing journey into infosec/cyber-security, random tech stuff, the occasional paranormal and my experiences being gangstalked.",
  title: "bburt-dot-me",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "See a typo?",
    url: "https://gitlab.com/beeburrt/bburt-dot-me/-/tree/main/",
  },
  dynamicOgImage: true,
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Boise", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

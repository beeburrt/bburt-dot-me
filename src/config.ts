import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://bburt.me/",
  author: "B Burt",
  desc: "Light-hearted blog about web development, learning, my life and recovery",
  title: "bburt.me",
  ogImage: "dev.svg",
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/beeburrt",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on Instagram`,
    active: false,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/beeburrt",
    linkTitle: `${SITE.author} on Twitter`,
    active: false
  },
  {
    name: "Mail",
    href: "mailto:bburt@bburt.me",
    linkTitle: `Email ${SITE.author}`,
    active: true
  },
  {
    name: "Twitch",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/beeburrt",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://codepen.io/beeburrt",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.author} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://old.reddit.com/user/beeburrt",
    linkTitle: `${SITE.author} on Reddit`,
    active: true,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.author} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.author} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.author} on Mastodon`,
    active: false,
  },
];

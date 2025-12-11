import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Yug",
  lastName: "Gupta",
  displayName: "Yug Gupta",
  username: "yuggupta",
  gender: "male",
  pronouns: "he/him",
  bio: "Building products and pushing boundaries with code.",
  flipSentences: [
    "Building products and pushing boundaries with code.",
    "Full-Stack Developer",
    "Founder & Product Builder",
  ],
  address: "Madhya Pradesh, India",
  phoneNumber: "", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "", // base64 encoded - Add your email here
  website: "https://yuggupta.com",
  jobTitle: "Founding Software Engineer @AGI_Inc",
  jobs: [
    {
      title: "Founding Software Engineer",
      company: "AGI Inc",
      website: "https://www.theagi.company",
    },
    {
      title: "Founder & Full Stack Developer",
      company: "Proton Labs",
      website: "https://protonlabs.dev",
    },
  ],
  about: `
- **Full-Stack Developer** with **5 years of coding experience**, started coding at age 11
- Founder of **Proton Labs**, a development agency building multiple products with **$20K+ in revenue**
- Contributed to building **real evals and evaluation systems for web agents** at **AGI Inc**
- Built multiple successful projects including **Hyperbop** and various innovative products
- Passionate about **learning, building, and exploring new technologies**
- Worked with **200+ websites** throughout career
- Always curious and eager to tackle new challenges
`,
  avatar:
    "https://pbs.twimg.com/profile_images/1893314235712839683/IGEji2Nu_400x400.jpg",
  ogImage:
    "https://assets.chanhdai.com/images/screenshot-og-image-light.png?t=1764345394",
  namePronunciationUrl: "/audio/chanhdai.mp3",
  timeZone: "Asia/Kolkata",
  keywords: [
    "yug gupta",
    "yuggupta",
    "proton labs",
    "full-stack developer",
    "web developer",
    "product builder",
    "hyperwarp",
    "agi inc",
  ],
  dateCreated: "2026-01-01", // YYYY-MM-DD
};

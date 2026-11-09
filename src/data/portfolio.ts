// All portfolio content lives here.

import type { StaticImageData } from "next/image";
import awsAiPractitioner from "@/app/Images/AWS AI practitioner.png";
import ccnaItn from "@/app/Images/CCNA Introduction to Networks.png";

export type Education = {
  school: string;
  degree: string;
  period: string;
  achievements: string[];
};

export type Experience = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  highlights: string[];
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
  date?: string;
  summary?: string; // two-sentence summary shown on the card
  note?: string; // small extra line, e.g. demo login
  image?: StaticImageData; // import from src/app/Images
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Certification = {
  name: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  image?: StaticImageData;
};

export type ContactLink = {
  label: string;
  href: string;
};

export const profile = {
  name: "Dom",
  title: "Software Engineer | Backend, Cloud & DevOps",
  summary: "I'm a Computer Science graduate and aspiring Software Engineer with a strong interest in backend development, cloud computing, and DevOps. I enjoy building practical, scalable applications and working across the development lifecycle, from designing backend systems and integrating APIs to deployment and infrastructure management. With experience in technologies such as Django, Laravel, Next.js, React, and Docker, I'm continuously expanding my skills in AWS and cloud technologies. I'm passionate about continuous learning, solving real-world problems, and building reliable software that makes a meaningful impact.",
};

export const education: Education[] = [
  {
    school: "Ateneo de Davao University",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2026",
    achievements: ["Dean's Lister 2nd Semester AY 2024-2025", "Dean's Lister 1st Semester AY 2025-2026"],
  },
];

export const workExperience: Experience[] = [
  {
    role: "DevOps Engineer",
    organization: "SAMAHAN Systems Development · Ateneo de Davao University",
    period: "Aug 2025 – Apr 2026",
    highlights: [
      "Kept apps running in staging and production with Docker and Docker Compose",
      "Set up the servers and deployment pipelines that took projects from merge to release",
    ],
  },
  {
    role: "Intern",
    organization: "Arisen Labs · Ateneo de Davao University",
    period: "May – Jul 2025",
    highlights: [
      "Built frontend pages and backend features for a full-stack Laravel + Vue + TypeScript system",
      "Worked in an agile team and got comfortable debugging issues end to end",
    ],
  },
];

export const volunteerExperience: Experience[] = [
  {
    role: "Head, Merch Design Team",
    organization: "PyCon Davao 2026 · organized by DurianPy",
    period: "2026",
    highlights: [
      "Led the merch design team and made sure every design stayed true to the event's theme",
      "Checked that sponsor logos on the merch followed each sponsor's brand guidelines",
    ],
  },
  {
    role: "Technical Head",
    organization: "NASA Space Apps Challenge 2025",
    period: "2025",
    highlights: [
      "Led the technical committee and split the work based on each member's strengths",
    ],
  },
  {
    role: "Creatives Member",
    organization: "DurianPy",
    period: "2025 – Present",
    highlights: [
      "Design event banners, social media graphics and promo materials for workshops and meetups",
    ],
  },
];

// Newest first.
export const projects: Project[] = [
  {
    title: "Lucky in Love",
    date: "February 2026",
    summary:
      "A speed-dating web app that handles sign-ups, compatibility questionnaires and the live event flow. Matches are made with a weighted graph algorithm that pairs people by mutual compatibility.",
    description:
      "Runs a speed-dating event from start to finish: participant sign-up, preference and compatibility questionnaires, and live event flow. Matches are generated with a weighted graph algorithm (NetworkX) that finds the best mutual pairs, and admins control the event status and when matches are revealed.",
    tech: ["Django", "PostgreSQL", "Tailwind CSS", "NetworkX", "Railway"],
    repoUrl: "https://github.com/Domadelfin/UmaNeskaSpeedDating",
  },
  {
    title: "On The Move: SAMAHAN Website",
    date: "February 2026",
    summary:
      "The new SAMAHAN website, containerized with Docker and deployed to a production VPS behind Nginx. I also moved the live domain from the old frontend to the new one, alongside the server's existing services.",
    description:
      "Containerized the new Next.js frontend with Docker and deployed it to a production VPS alongside existing services. Set up Nginx as the reverse proxy, fixed communication between containers on separate Docker networks, and switched the live domain over from the old frontend to the new one.",
    tech: ["Docker", "Nginx", "Linux VPS", "DNS"],
    liveUrl: "https://samahan.addu.edu.ph/",
  },
  {
    title: "WiFi Occupancy Prediction",
    date: "November 2025",
    summary:
      "Predicts how full each university library is from Wi-Fi signals, using CNN and LSTM models served through a Django REST API. A Next.js dashboard shows live and date-specific forecasts in interactive charts.",
    description:
      "A full-stack platform that turns Wi-Fi client signals into per-library occupancy predictions. Trained CNN and LSTM models are served through a Django REST API, with endpoints for live and date-specific forecasts shown in a Next.js dashboard. An admin view compares model versions and promotes the most accurate one.",
    tech: ["Next.js", "Django", "CNN / LSTM"],
    liveUrl: "https://wifi-occupancy-prediction-five.vercel.app/",
  },
  {
    title: "Duyog 2025",
    date: "October 2025",
    summary:
      "The deployment pipeline and hosting for the SAMAHAN UFest Palaro 2025 website, built on GitHub Actions and Render. It kept event schedules, activities and ticket info fast and reliable for the AdDU community.",
    description:
      "DevOps work for the UFest Palaro 2025 website: a CI/CD pipeline with GitHub Actions and a tuned hosting setup on Render, so schedules, activities and ticket info reached the AdDU community quickly and reliably.",
    tech: ["GitHub Actions", "Render"],
    liveUrl: "https://duyog2025.addu.edu.ph/",
  },
  {
    title: "AIM Global Citizenship System",
    date: "September 2025",
    summary:
      "A platform for AdDU students applying to international mobility programs, from submission and document checks to committee evaluation and approval. I worked across the stack, building frontend pages, backend endpoints and workflow automation.",
    description:
      "A central platform for student applications to international mobility programs, covering the whole workflow: submission, document checks, committee evaluation and final approval. I worked across the stack and the UI, building frontend pages, backend endpoints and workflow automation for students, staff, committee members and directors.",
    tech: ["Laravel", "Vue", "Inertia.js"],
    liveUrl: "https://gcf.arisenlab.org/",
  },
  {
    title: "Univents Admin",
    date: "May 2025",
    summary:
      "The admin panel of a campus event-tracking app for Ateneo de Davao University, used to manage events, organizations and attendance. Admins sign in with Google, and only accounts registered as admins can get in.",
    description:
      "The admin side of an event-tracking app for Ateneo de Davao University. Admins manage events and the organizations behind them, and see who attended. Sign-in uses Google, and only accounts registered as admins in the database can get in.",
    note: "Guest login: admin@addu.edu.ph / admin123",
    tech: ["Dart", "Google Sign-In"],
    liveUrl: "https://univents-web.vercel.app/",
    repoUrl: "https://github.com/Domadelfin/school-event-finder",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "PHP", "JavaScript", "TypeScript", "Dart", "HTML", "CSS"],
  },
  { category: "Backend", items: ["Django", "Laravel", "Express.js"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue.js"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    category: "DevOps & Cloud",
    items: ["AWS", "Docker", "Nginx", "Linux", "Vercel", "Railway", "Render"],
  },
  { category: "Design", items: ["Figma", "Canva"] },
  {
    category: "Soft Skills",
    items: [
      "Communication",
      "Teamwork",
      "Problem-Solving",
      "Organization",
      "Adaptability",
      "Time Management",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    image: awsAiPractitioner,
    credentialUrl: "https://www.credly.com/badges/2ea45f21-b452-4e49-9a60-8329194a8e08",
    date: "09/14/2026 - 09/14/2029",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    image: ccnaItn,
    credentialUrl: "https://www.credly.com/badges/7ea58f0c-798a-4376-8176-8acbc483a840",
    date: "05/04/2025", // no expiration
  },
];

export const contact = {
  heading: "Let's build something together!",
  message:
    "Whether you need a backend built, an app deployed to the cloud, or an extra pair of hands on your team, I'd love to hear about it. I'm open to freelance projects and full-time roles, so feel free to reach out and I'll get back to you as soon as I can.",
  openTo: ["Full-time roles", "Freelance projects"],
  // Options in the email form; the chosen one becomes the email subject
  topics: ["Full-time role", "Freelance project", "Just saying hi"],
  services: [
    "Backend development",
    "Full-stack web apps",
    "Cloud & DevOps",
    "Deployment & hosting",
  ],
  email: "dominicdelfin013@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Domadelfin" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/domadelfin/" },
  ] satisfies ContactLink[],
};

// Drives both the nav bar and the section order on the page.
export const sections = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

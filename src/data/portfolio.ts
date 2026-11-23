// All portfolio content lives here.

import type { StaticImageData } from "next/image";
import awsAiPractitioner from "@/app/Images/AWS AI practitioner.png";
import ccnaItn from "@/app/Images/CCNA Introduction to Networks.png";
import gradPhoto from "@/app/Images/Grad Photo.jpg";
import aimGcfShot from "@/app/Images/AIMGCF.png";
import duyogShot from "@/app/Images/Duyog2025.png";
import samahanShot from "@/app/Images/OTM-Samahan.png";
import luckyInLoveShot from "@/app/Images/SpeedDating.png";
import univentsShot from "@/app/Images/Univents.png";
import wifiShot from "@/app/Images/Wifi Occupancy Prediction.png";
// Smiley (Face-Detector repo): stills taken from the demo GIFs, which are
// served as small MP4s from /public/videos/face-detector instead of 10+ MB GIFs.
import smileyRaw from "@/app/Images/Face Detector/raw-smile.jpg";
import smileyThumb from "@/app/Images/Face Detector/thumbnail.jpg"; // 16:9 crop centered on the face
import smileySmoothed from "@/app/Images/Face Detector/smoothed-smile.jpg";
// Job Tracker on AWS. Account IDs in these screenshots are already blacked out.
import jtApp from "@/app/Images/Job Tracker/01-app-via-alb.png";
import jtEcs from "@/app/Images/Job Tracker/02-ecs-cluster-services.png";
import jtRdsNetworking from "@/app/Images/Job Tracker/04-rds-networking.png";
import jtDbSecurityGroup from "@/app/Images/Job Tracker/06-db-security-group.png";
import jtCrashLog from "@/app/Images/Job Tracker/08-backend-log-failure-eacces.png";
import jtFixedLog from "@/app/Images/Job Tracker/09-backend-log-success.png";
import jtVpcMap from "@/app/Images/Job Tracker/10-vpc-resource-map.png";

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
  kind: "work" | "volunteer";
  focus: string; // what kind of work, e.g. "DevOps" or "Full-stack"; shown as a label
  location?: string;
  highlights: string[];
};

export type GalleryItem = { image: StaticImageData; caption: string; video?: string };

export type Project = {
  title: string;
  date: string;
  role: string; // my part in it, shown as a label on the card
  summary: string; // two sentences on the card, focused on what I did
  image: StaticImageData; // screenshot, imported from src/app/Images
  tech: string[]; // names matching TechTag.tsx get a logo
  liveUrl?: string;
  repoUrl?: string;
  note?: string; // private note, not shown on the site
  // Shown in the popup when the card is clicked
  caseStudy: {
    problem: string;
    contributions: string[];
    decisions?: string[];
    // Measurable outcomes. The first one is also shown on the card, so keep it short.
    results?: string[];
    // Extra screenshots shown at the bottom of the case study. With `video`
    // (a path under /public), `image` is its still/poster and the video plays when enlarged.
    gallery?: GalleryItem[];
  };
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
  // Served from /public; the download attribute gives the saved file a clean name
  resume: { href: "/Delfin-Resume.pdf", fileName: "Dominic Delfin - Resume.pdf" },
  photo: gradPhoto,
  tagline: "I build and deploy web apps for organizations and clients, from the backend all the way to the cloud.",
  summary:
    "I've shipped production systems for SAMAHAN and Arisen Labs, including the SAMAHAN website, the Duyog 2025 event site and the AIM Global Citizenship platform. I work across the stack with Django, Laravel and Next.js, and handle the Docker, CI/CD and server setup that gets them live.",
};

export const education: Education[] = [
  {
    school: "Ateneo de Davao University",
    degree: "Bachelor of Science in Computer Science",
    period: "2022 – 2026",
    achievements: ["Dean's Lister 2nd Semester AY 2024-2025", "Dean's Lister 1st Semester AY 2025-2026"],
  },
];

// Work and volunteering in one timeline, newest first.
export const experience: Experience[] = [
  {
    role: "Head, Merch Design Team",
    organization: "PyCon Davao 2026 · organized by DurianPy",
    period: "2026",
    kind: "volunteer",
    focus: "Leadership · Design",
    highlights: [
      "Led the merch design team and made sure every design stayed true to the event's theme",
      "Checked that sponsor logos on the merch followed each sponsor's brand guidelines",
    ],
  },
  {
    role: "Full-stack Developer",
    organization: "Arisen Labs · for AdDU's AIM Office",
    period: "Aug 2025 – Jul 2026",
    kind: "work",
    focus: "Full-stack · Freelance, part-time",
    highlights: [
      "Asked back by the AIM director after the internship to build V2 of the Global Citizenship platform",
      "Built frontend and backend features for V2 around the office's new requirements, part-time alongside my final year of studies",
      "Finished my part of V2, which is now waiting to be deployed",
    ],
  },
  {
    role: "DevOps Engineer",
    organization: "SAMAHAN Systems Development · AdDU Student Government",
    period: "Aug 2025 – Apr 2026",
    kind: "work",
    focus: "DevOps",
    highlights: [
      "Deployed and maintained production sites with Docker, Docker Compose and Nginx, including the new SAMAHAN website",
      "Built the GitHub Actions CI/CD pipeline for Duyog 2025, the UFest site used by roughly 1,000–2,000 people",
      "Added uptime monitoring with UptimeRobot after free-tier outages, and the site hardly went down after that",
      "Redeployed the SAMAHAN website whenever the dev team pushed changes, so updates reached production quickly",
    ],
  },
  {
    role: "Technical Head",
    organization: "NASA Space Apps Challenge 2025",
    period: "2025",
    kind: "volunteer",
    focus: "Leadership",
    highlights: [
      "Led the technical committee and split the work based on each member's strengths",
    ],
  },
  {
    role: "Creatives Member",
    organization: "DurianPy",
    period: "2025 – Present",
    kind: "volunteer",
    focus: "Design",
    highlights: [
      "Design event banners, social media graphics and promo materials for workshops and meetups",
    ],
  },
  {
    role: "Full-stack Developer Intern",
    organization: "Arisen Labs",
    period: "May – Jul 2025",
    kind: "work",
    focus: "Full-stack",
    highlights: [
      "Built frontend pages and backend features for the AIM Global Citizenship platform (Laravel, Vue, TypeScript)",
      "Led its email system, designing the templates and sending them with Laravel's mailer",
      "The platform has taken 500+ applications and is still used by AdDU's AIM office",
    ],
  },
];

// Newest first.
export const projects: Project[] = [
  {
    title: "Smiley: Real-Time Smile Detection",
    date: "November 2026",
    role: "Solo · Computer vision",
    image: smileyThumb,
    summary:
      "A webcam app that finds your face and tells you whether you're smiling, built step by step in Python with OpenCV. I tested each step to see where the detectors fail, then added smoothing so the box and label stay steady instead of flickering.",
    tech: ["Python", "OpenCV", "NumPy"],
    repoUrl: "https://github.com/Domadelfin/Face-Detector",
    caseStudy: {
      problem:
        "I wanted to understand computer vision from the ground up before moving on to emotion recognition: how a program finds a face in a webcam feed, decides whether it's smiling, and stays stable from one frame to the next.",
      contributions: [
        "Built it in six steps, each a separate script that adds one idea, from the raw webcam loop to smoothing",
        "Detected faces with a Haar cascade, then searched for a smile only in the bottom half of the face, where the mouth is",
        "Searched for eyes only in the top half, which removed false detections on the mouth and nostrils",
        "Smoothed the results over time: a moving average for the box, a grace period for missed frames, and majority voting for the label",
        "Tested each step to find where the detectors fail, and documented what I learned",
      ],
      decisions: [
        "Tuned each detector's sensitivity by hand (minNeighbors 35 for smiles in my setup), trading missed detections against false ones",
        "Kept the pipeline in three stages (get the image, find the face, interpret it) so emotion recognition only has to replace the last one",
        "Chose smoothing settings that balance a steady display against lag when I move or change expression",
      ],
      results: [
        "A steady box and label instead of frame-to-frame flicker",
        "Documented its limits: frontal faces only, photos count as faces, and an open mouth counts as a smile",
      ],
      gallery: [
        {
          image: smileyRaw,
          video: "/videos/face-detector/raw_smile.mp4",
          caption: "Raw detection: the box jitters and the label reacts to every frame",
        },
        {
          image: smileySmoothed,
          video: "/videos/face-detector/smoothed_smile.mp4",
          caption: "Smoothed: a steady box whose color only changes once most frames agree",
        },
      ],
    },
  },
  {
    title: "Job Tracker on AWS",
    date: "November 2026",
    role: "Solo · Cloud architecture & deployment",
    image: jtApp,
    summary:
      "A side project to practice AWS: I built a full-stack job tracker and deployed it with ECS Fargate, a private RDS database, Secrets Manager and least-privilege IAM, all in Terraform. I split the infrastructure so the billable part only exists while I need it, which brings the cost down to about $0.09 an hour.",
    tech: ["Terraform", "ECS Fargate", "RDS", "Docker", "Next.js", "Express.js"],
    repoUrl: "https://github.com/Domadelfin/job-tracker",
    caseStudy: {
      problem:
        "I wanted hands-on practice with a production-style AWS setup (a custom VPC, containers behind a load balancer, a database that's never public, managed secrets and least-privilege IAM) without paying the roughly $110 a month it costs to run all the time.",
      contributions: [
        "Built the app (Next.js frontend, Express API, PostgreSQL) and ran it locally with Docker Compose",
        "Defined everything in Terraform, starting with a custom VPC: public, private-app and private-db subnets across 2 Availability Zones",
        "Deployed both services to ECS Fargate behind an Application Load Balancer, with images in ECR",
        "Kept the database private: no public IP, no route to the internet, and only the backend's security group can reach it",
        "Kept secrets out of code: RDS generates the password in Secrets Manager and ECS injects it at startup",
        "Gave each service its own narrowly scoped IAM roles, and the app code no permissions at all",
        "Traced a production-only crash through CloudWatch Logs to a file-permission bug in the Docker image, then added a build-time check so it can't ship again",
      ],
      decisions: [
        "Split Terraform into a free foundation layer that stays up and a billable runtime layer I create and destroy per session",
        "Used a NAT instance instead of a NAT Gateway (about $43 a month saved) and Fargate Spot",
        "When the account's guardrails blocked GitHub OIDC, pushed images with short-lived credentials instead of storing a long-lived access key",
      ],
      results: [
        "About $0.09/hour to run, vs ~$110/month always-on",
        "Caught a CRITICAL CVE with ECR scanning and patched it before deploying",
        "Database confirmed unreachable from the internet",
      ],
      gallery: [
        { image: jtVpcMap, caption: "The custom VPC: 3 subnet tiers across 2 Availability Zones" },
        { image: jtEcs, caption: "Frontend and backend services running on ECS Fargate" },
        { image: jtRdsNetworking, caption: "RDS in private subnets, not publicly accessible" },
        { image: jtDbSecurityGroup, caption: "The database accepts connections from the backend only" },
        { image: jtCrashLog, caption: "The production crash, found in CloudWatch Logs" },
        { image: jtFixedLog, caption: "After the fix: the backend starts up cleanly" },
      ],
    },
  },
  {
    title: "Lucky in Love",
    date: "February 2026",
    role: "Solo · Concept to deployment",
    image: luckyInLoveShot,
    summary:
      "I built this speed-dating web app on my own in two weeks, from the first concept to the live deployment. That included researching matching algorithms and building a weighted graph that pairs people by mutual compatibility.",
    tech: ["Django", "PostgreSQL", "Tailwind CSS", "NetworkX", "Railway"],
    repoUrl: "https://github.com/Domadelfin/UmaNeskaSpeedDating",
    caseStudy: {
      problem:
        "A speed-dating event needed one app to handle sign-ups, compatibility questionnaires and fair matches for its live rounds, and it had to be ready in two weeks.",
      contributions: [
        "Planned, designed, built and deployed the whole app myself",
        "Researched matching algorithms and chose the best fit for the deadline",
        "Built participant sign-up and the preference and compatibility questionnaires",
        "Built the matching engine as a weighted graph with NetworkX, pairing people by mutual compatibility",
        "Added admin controls for the event status and for when matches are revealed",
        "Deployed it on Railway with a PostgreSQL database",
      ],
      decisions: [
        "Scored every pair on mutual compatibility, so a match only ranks high when it works for both people",
        "Gave admins control over when matches are revealed, so the app follows the pace of the live event",
      ],
      results: [
        "About 50 participants matched at the live event",
        "Went from idea to live in two weeks, built solo",
      ],
    },
  },
  {
    title: "On The Move: SAMAHAN Website",
    date: "February 2026",
    role: "DevOps · Deployment & upkeep",
    image: samahanShot,
    summary:
      "I deployed SAMAHAN's new website to a production Linux server with Docker and Nginx, alongside the services already running there. I kept it up to date afterwards, redeploying whenever the dev team pushed changes.",
    tech: ["Docker", "Nginx", "Linux", "DNS"],
    // The site is down (502) right now. Put the link back once it's up again:
    // liveUrl: "https://samahan.addu.edu.ph/",
    caseStudy: {
      problem:
        "SAMAHAN's new Next.js website had to replace the old one on a production server that was already running other services, without disrupting them.",
      contributions: [
        "Containerized the new Next.js frontend with Docker",
        "Deployed it to the production VPS with Linux commands, next to the existing services",
        "Set up Nginx as the reverse proxy",
        "Fixed communication between containers on separate Docker networks",
        "Switched the live domain from the old frontend to the new one",
        "Redeployed the site whenever the dev team pushed changes to the repository",
      ],
      decisions: [
        "Ran the site in its own container behind Nginx, so it could be updated without touching the other services on the server",
      ],
    },
  },
  {
    title: "WiFi Occupancy Prediction",
    date: "November 2025",
    role: "Full-stack · Model integration",
    image: wifiShot,
    summary:
      "I built most of this platform, a Django REST API and Next.js dashboard that predicts how full each library is from Wi-Fi data. I also exported the trained CNN and LSTM models into the site and set them up to retrain as new data is logged.",
    tech: ["Next.js", "Django", "CNN / LSTM"],
    liveUrl: "https://wifi-occupancy-prediction-five.vercel.app/",
    caseStudy: {
      problem:
        "Students had no way to know how crowded each library area was before walking over. The team had Wi-Fi client data and trained models, but nothing that put predictions in front of people.",
      contributions: [
        "Handled most of the full-stack development",
        "Built the Django REST API with endpoints for live and date-specific forecasts",
        "Built the Next.js dashboard that shows occupancy per library area",
        "Exported the trained CNN and LSTM models as artifacts and loaded them into the backend",
        "Set up retraining as new data is logged in the site, so it can forecast the coming days and weeks",
        "Built an admin view that compares model versions and promotes the most accurate one",
      ],
      decisions: [
        "Retrained the models on newly logged data, so forecasts reflect recent patterns",
        "Kept model versions side by side, so a new model only goes live if it beats the current one",
      ],
    },
  },
  {
    title: "Duyog 2025",
    date: "October 2025",
    role: "DevOps · CI/CD, hosting & monitoring",
    image: duyogShot,
    summary:
      "I handled the DevOps for the Ateneo UFest 2025 website's frontend, from the GitHub Actions CI/CD pipeline to deployment on Render. It ran on Render's free tier, so I set up UptimeRobot to ping it and keep it awake and monitored.",
    tech: ["GitHub Actions", "Render", "UptimeRobot"],
    liveUrl: "https://duyog2025.addu.edu.ph/",
    caseStudy: {
      problem:
        "The UFest site was where the AdDU community found the event schedule, activities and the link to ticket sales, so it had to stay up during the event, on a free hosting plan that puts idle sites to sleep.",
      contributions: [
        "Built the CI/CD pipeline with GitHub Actions",
        "Deployed the frontend and configured its hosting on Render",
        "Noticed the site going down at times on the free tier, and set up UptimeRobot to ping it regularly",
        "Monitored the site throughout the event",
      ],
      decisions: [
        "Kept the free tier and used scheduled pings to avoid cold starts, so the event got reliable hosting at no cost",
      ],
      results: [
        "Roughly 1,000–2,000 users during UFest",
        "Hardly any downtime after adding the UptimeRobot pings",
      ],
    },
  },
  {
    title: "AIM Global Citizenship System",
    date: "September 2025",
    role: "Full-stack · Email system lead",
    image: aimGcfShot,
    summary:
      "On a team where everyone worked full-stack, I built frontend pages and backend features for AdDU's international mobility application platform. I was also in charge of its emails, designing the templates and sending them with Laravel's built-in mailer.",
    tech: ["Laravel", "Vue", "Inertia.js"],
    liveUrl: "https://gcf.arisenlab.org/",
    caseStudy: {
      problem:
        "Applications for international mobility programs went through several hands (students, staff, committee members and directors) and needed one platform to carry them from submission to approval.",
      contributions: [
        "Built frontend pages and backend endpoints as part of a full-stack team",
        "Worked on workflow automation for submission, document checks, evaluation and approval",
        "Led the email system: designed the email templates and handled sending with Laravel's mailer",
        "Was brought back after the internship to build V2 around the AIM office's new requirements (finished, not yet deployed)",
      ],
      results: [
        "500+ applications submitted through it (as of Sept 2025)",
        "Still in use by AdDU's AIM office",
      ],
    },
  },
  {
    title: "Univents Admin",
    date: "May 2025",
    role: "Full-stack · Built from a teammate's design",
    image: univentsShot,
    summary:
      "I did most of the full-stack development for the admin panel of a campus event-tracking app, turning a teammate's designs into working screens. Admins sign in with Google and manage events, organizations and attendance.",
    tech: ["Flutter", "Dart", "Google Sign-In"],
    liveUrl: "https://univents-web.vercel.app/",
    repoUrl: "https://github.com/Domadelfin/school-event-finder",
    note: "Guest login: admin@addu.edu.ph / admin123",
    caseStudy: {
      problem:
        "Ateneo de Davao organizations needed one place to post events and track attendance, with access limited to approved admins.",
      contributions: [
        "Handled most of the full-stack development",
        "Turned a teammate's designs into working screens",
        "Built event and organization management and the attendance views",
        "Set up Google sign-in, limited to accounts registered as admins",
      ],
    },
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
    name: "Introduction to Networks",
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
  { id: "skills", label: "Skills & Certs" },
  { id: "contact", label: "Contact" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

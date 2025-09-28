import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  freelance,
  shopify,
  sheryians,
  macbookpro,
  falverra,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "experience",
  },

  {
    id: "skills",
    title: "skills",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "React / Next.js Developer", icon: reactjs },
  { title: "Backend / API Developer", icon: backend },
  { title: "DevOps & Cloud (AWS)", icon: docker },
];

const technologies = [
  { name: "React.js / Next.js", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "JavaScript (ES6+)", icon: javascript },
  { name: "Node.js / Express", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "HTML5 / CSS3", icon: html },
  { name: "Git / GitHub", icon: git },
  { name: "AWS (EC2, VPC)", icon: docker },
  { name: "Razorpay / Payments", icon: backend },
];

const experiences = [
  {
    title: "Software Developer Engineer",
    company_name: "Aviotron Aerospace Pvt. Ltd",
    icon: falverra,
    iconBg: "#0188E3",
    date: "June 2025 - Present",
    points: [
      "Built and maintained production-grade applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
      "Developed responsive and user-centric interfaces with reusable React components, improving UI consistency and reducing redundancy by 40%.",
      "Integrated RESTful APIs and secure authentication (JWT, Clerk) for seamless data flow and user management.",
      "Provisioned and configured AWS EC2 instances, SSL certificates, VPC networking, and CI/CD pipelines (GitHub Actions) for automated deployments.",
      "Optimized frontend performance with lazy loading, code splitting, and asset compression.",
      "World Skill Challenge 2025 — Designed and deployed the official website (Next.js 14 App Router, Tailwind CSS, Framer Motion, MongoDB) and implemented Razorpay payments with OAuth, webhooks, and duplicate prevention.",
      "Integrated Zoho Forms with server-side signature verification, hidden fields, and duplicate registration prevention; resolved webhook 500 errors, Razorpay environment issues, and MongoDB pooling failures.",
      "Documented environment variables, webhook flows, and deployment guides for maintainability.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Aviotron Aerospace Pvt. Ltd (AeroBay)",
    icon: sheryians,
    iconBg: "#ffffff",
    date: "Jan 2025 - May 2025",
    points: [
      "Built responsive interactive web apps using React.js and REST APIs.",
      "Ensured cross-device compatibility and reusable UI components.",
      "Assisted in AWS EC2 setup, SSL configuration, and staging environment deployments.",
      "Contributed to frontend documentation for onboarding and knowledge sharing.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Chat App",
    description: "Real-time chat app (MERN) with Socket.IO, private rooms, and secure auth.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "socket.io", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "VitalScans.AI",
    description: "AI-powered medical imaging tool (Next.js, Firebase) integrating Teachable Machine and OpenAI.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "ai", color: "pink-text-gradient" },
    ],
    image: falverra,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "NeuroSketch",
    description: "AI Drawing tool for Parkinson's detection using Canvas API and Firebase.",
    tags: [
      { name: "html", color: "blue-text-gradient" },
      { name: "canvas", color: "green-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "",
    live_website_link: "",
  },
  {
    name: "ANPR System",
    description: "License plate detection with OpenCV on Raspberry Pi and a Next.js dashboard.",
    tags: [
      { name: "opencv", color: "blue-text-gradient" },
      { name: "raspberry-pi", color: "green-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
    ],
    image: macbookpro,
    source_code_link: "",
    live_website_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };

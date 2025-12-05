
import { CareerItem, ProjectItem, PublicationItem, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  email: "pranavdeo99@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranavdeo99",
  github: "https://github.com/pranav-deo",
  scholar: "https://scholar.google.com/citations?user=gFEbr6cAAAAJ", 
  website: "https://pranav-deo.github.io",
  resume: "/resume.pdf"
};

/**
 * LOGO CONFIGURATION
 * ------------------
 * Replace the URLs below with your local image paths.
 * Example: honda: "images/honda-logo.webp"
 */
export const LOGOS = {
  honda: "images/honda-logo.webp", 
  iitb: "images/iitb_logo.png"
};

/**
 * BIO CONFIGURATION
 * -----------------
 * image: Use a square (1:1 aspect ratio) image.
 */
export const BIO = {
  name: "Pranav Deo",
  role: "Robotics Research Engineer",
  summary: "Specialized in Deep Learning for controls, dexterous manipulation and real-world robot deployment",
  location: "Tokyo, Japan",
  image: "images/DP.jpg" // Replace with "images/profile.jpg"
};

export const CAREER_TIMELINE: CareerItem[] = [
  {
    id: "honda-combined",
    type: "work",
    role: "Robotics Research Engineer | Project Leader",
    company: "Honda R&D Co., Ltd.",
    location: "Tokyo, Japan",
    period: "2021 - Present",
    description: "Frontier Robotics Division. Leading hardware innovation and developing next-gen manipulation.",
    bullets: [
      "Large Project Leader (2025+): Managing an independent research direction",
      "Promote cross-cultural team integration",
      "On-finger manipulation of ~2mm objects with Honda Multifingered Hand",
      "In-hand manipulation of tools for factory automation",
      "Deploying hybrid models on Multifingered Hands"
    ],
    links: [
      { label: "Coin Picking", url: "https://youtu.be/c-q-sr4ASFw" },
      { label: "Can Opening", url: "https://youtu.be/AktHZjiEA5A" },
      { label: "Press Release", url: "https://global.honda/innovation/advanced-technology/avatarrobot.html" }
    ],
    // Replace with company logo if desired
    image: "https://placehold.co/100x100/e2e8f0/475569?text=Honda"
  },
  {
    id: "umic",
    type: "work",
    role: "Overall Coordinator",
    company: "Team UMIC, IIT Bombay",
    location: "Mumbai, India",
    period: "2017 - 2021",
    description: "Led 60-student tech team building autonomous vehicles",
    bullets: [
      "Overall Coordinator (2020+): Secured ₹3.5M funding + ₹2.5M industry sponsorships",
      "Winner in multiple international competitions: ASME SDC, IARC, IRC, Mahindra RISE",
      "Awarded the Institute Technical Color (<0.5%)"
    ],
    image: "https://placehold.co/100x100/e2e8f0/475569?text=UMIC"
  },
  {
    id: "iitb",
    type: "education",
    role: "B.Tech in Civil Engineering",
    company: "IIT Bombay",
    location: "Mumbai, India",
    period: "2017 - 2021",
    description: "Dual Minors in Computer Science & AI.",
    bullets: [
      "Dept. Rank 5 (GPA 9.26/10)",
      "Key Courses: Robotics, Adv. ML, Data Structures",
      "Awarded the Institute Academic Award (<1%)"
    ],
    image: "https://placehold.co/100x100/e2e8f0/475569?text=IITB"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "honda-hand",
    title: "Honda Avatar Robot",
    role: "Robotics Research Engineer",
    period: "2021 - Present",
    description: "Hierarchical Deep Learning policies for robust control with Honda Multifinger Hand",
    tags: ["Deep RL", "Deep IL", "Diffusion", "Sim-to-Real", "Manipulation"],
    bullets: [
      "Robust Tool Usage",
      "Tiny Object Manipulation"
    ],
    link: "https://global.honda/innovation/advanced-technology/avatarrobot.html",
    links: [
        { label: "Coin Picking", url: "https://youtu.be/c-q-sr4ASFw" },
        { label: "Can Opening", url: "https://youtu.be/AktHZjiEA5A" },
        { label: "Press Release", url: "https://global.honda/innovation/advanced-technology/avatarrobot.html" }
    ],
    // Landscape Project Thumbnail (e.g., 600x400)
    image: "images/p3.jpg"
  },
  {
    id: "sedrica-car",
    title: "Autonomous Driverless Car",
    role: "Techincal Lead",
    period: "2018 - 2021",
    description: "India's 1st student-led self-driving car (Level 4 target). Finalist for $1M prize at Mahindra RISE contest.",
    tags: ["Controls", "Planning", "SLAM", "Deep CV"],
    bullets: [
      "Real-time object detection with Stereo depth",
      "Online SLAM + Path Planning systems",
      "Model based/Learned controllers for steering",
      "Sim-to-real transfer learning with CARLA"
    ],
    link: "https://youtu.be/8lNKjX0-RKY",
    // Landscape Project Thumbnail
    image: "images/sedrica.jpeg"
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: "icra-24",
    title: "Touch-Based Manipulation with Multi-Fingered Robot using Off-policy RL and Temporal Contrastive Learning",
    authors: "N. Morihira, P. Deo, et al.",
    venue: "ICRA '24",
    year: "2024",
    description: "Solving POMDP in in-hand manipulation using only proprioception & tactile signals",
    // Paper Thumbnail or Chart
    image: "images/paper-icra24.png",
    link: "https://ieeexplore.ieee.org/abstract/document/10610239"
  },
  {
    id: "tmlr-23",
    title: "Offline reinforcement learning with mixture of deterministic policies",
    authors: "T. Osa, A. Hayashi, P. Deo, et al.",
    venue: "TMLR '23",
    year: "2023",
    description: "Addressing action multimodality in Offline RL for stability",
    image: "images/paper-tmlr23.png",
    link: "https://openreview.net/forum?id=zkRCp4RmAF" // Placeholder or actual link if known
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Robots",
    skills: ["Honda Hand", "Shadow Hand", "UR10", "Kinova", "ROS2", "MoveIt"]
  },
  {
    category: "Sim/Physics",
    skills: ["Isaac Gym", "MuJoCo", "PyBullet", "Gazebo"]
  },
  {
    category: "Deep Learning",
    skills: ["PyTorch", "JAX/Flax", "TensorFlow", "Diffusion", "RL", "OpenCV"]
  }
];

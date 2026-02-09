import type { TeamMember } from "../types";
import geethanjanaPic from "../assets/team/geethanjana-prabuddhika.png";
import geethPic from "../assets/team/geeth-liyanage.jpg";
import sayuruPic from "../assets/team/sayuru-herath.jpeg";
import kashmilaPic from "../assets/team/kashmila-dharmasiri.jpeg";
import sadewPic from "../assets/team/sadew-hiruditha.jpeg";
import kanushkaPic from "../assets/team/kanushka-gayan.jpeg";
import chanuthPic from "../assets/team/chanuth-hewawissa.jpeg";
import ashanPic from "../assets/team/ashan-miyuru.jpeg";

// Note: Replace these placeholder images with your actual team photos
// Or remove the image URLs entirely and handle missing images in your component

export const teamMembers: TeamMember[] = [
  {
    name: "Sayuru Herath",
    role: "Software Engineer",
    department: "Development",
    image: sayuruPic,
    bio: "Creative designer focused on crafting intuitive and beautiful user experiences. Believer in user-centered design and continuous iteration.",
    skills: [
      "Figma",
      "Design Systems",
      "User Research",
      "Prototyping",
      "Accessibility",
    ],
    social: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Kashmila Dharmasiri",
    role: "UI/UX-DM",
    department: "design",
    image: kashmilaPic,
    bio: "Product designer passionate about creating delightful experiences. Specializes in design thinking and collaborative workshops.",
    skills: ["UI Design", "Wireframing", "User Testing", "Sketch", "InVision"],
    social: {
      linkedin: "",
      twitter: "",
    },
  },
  {
    name: "Geethanjana Prabuddhika",
    role: "Founder & CEO",
    department: "EmDreams",
    image: geethanjanaPic,
    bio: "Software engineer and founder of EmDreams, with hands-on experience in full-stack development, VR and WebVR applications, and academic research. Passionate about building practical, user-centered solutions across web, desktop, and immersive platforms.",
    skills: [
      "Java",
      "Python",
      ".Net",
      "React",
      "Node.js",
      "Express.js",
      "PHP",
      "MySQL",
      "MongoDB",
      "Unity",
      "C#",
      "REST APIs",
    ],
    social: {
      github: "https://github.com/Geethanjana99",
      linkedin: "https://www.linkedin.com/in/geethanjana99",
      twitter: "",
    },
  },
  {
    name: "Kanushka Gayan",
    role: "Software Engineer",
    department: "development",
    image: kanushkaPic,
    bio: "Mobile development specialist with expertise in both iOS and Android platforms. Focused on performance optimization and native experiences.",
    skills: [
      "React Native",
      "Swift",
      "Kotlin",
      "Mobile UI",
      "App Store Optimization",
    ],
    social: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Geeth Liyanage",
    role: "Software Engineer",
    department: "Development",
    image: geethPic,
    bio: "Experienced PM ensuring projects are delivered on time and exceed expectations. Expert in agile methodologies and stakeholder management.",
    skills: [
      "Agile",
      "Stakeholder Management",
      "Risk Assessment",
      "Scrum",
      "JIRA",
    ],
    social: {
      linkedin: "",
      twitter: "",
    },
  },
  {
    name: "Chamod Malindu",
    role: "Business Analyst",
    department: "management",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Backend specialist with deep knowledge in distributed systems and microservices. Passionate about scalable architecture.",
    skills: ["Node.js", "Python", "Docker", "Kubernetes", "Microservices"],
    social: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Ashan Miyuru",
    role: "DevOps Engineer",
    department: "development",
    image: ashanPic,
    bio: "DevOps expert focused on automation and continuous integration. Believes in infrastructure as code and monitoring.",
    skills: ["AWS", "Terraform", "Jenkins", "Monitoring", "CI/CD"],
    social: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Sadew Hiruditha",
    role: "QA Engineer",
    department: "development",
    image: sadewPic,
    bio: "Quality assurance specialist ensuring product reliability and performance. Expert in automated testing frameworks.",
    skills: [
      "Test Automation",
      "Selenium",
      "Jest",
      "Performance Testing",
      "QA Strategy",
    ],
    social: {
      github: "",
      linkedin: "",
    },
  },
  {
    name: "Chanuth Hewawissa",
    role: "Assignment Section Head",
    department: "management",
    image: chanuthPic,
    bio: "Assignment section head with expertise in project coordination and team management. Focused on delivering quality assignments on time.",
    skills: [
      "Project Management",
      "Team Coordination",
      "Quality Assurance",
      "Documentation",
      "Planning",
    ],
    social: {
      github: "",
      linkedin: "",
    },
  },
];

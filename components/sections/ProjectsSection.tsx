// // src/components/sections/ProjectsSection.tsx
// "use client";

// import React from "react";
// import { motion, Variants } from "framer-motion"; // <--- CHANGED: Import Variants
// import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import Image from "next/image";

// // Dummy project data (you'd move this to data/projects.ts)
// const projects = [
//   {
//     id: 1,
//     title: "Quantum Connect",
//     description: "A secure, decentralized communication platform built with WebSockets and Next.js.",
//     image: "/images/project-quantum.jpg", // Add actual image paths
//     tech: ["Next.js", "Tailwind CSS", "GSAP", "Socket.io"],
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 2,
//     title: "Aether Analytics",
//     description: "Real-time data visualization dashboard for financial insights.",
//     image: "/images/project-aether.jpg",
//     tech: ["React", "D3.js", "Framer Motion", "Shadcn/ui"],
//     github: "#",
//     live: "#",
//   },
//   {
//     id: 3,
//     title: "Chrono Forge",
//     description: "An AI-powered task management system with predictive scheduling.",
//     image: "/images/project-chrono.jpg",
//     tech: ["Next.js", "Python (Flask)", "Anime.js", "PostgreSQL"],
//     github: "#",
//     live: "#",
//   },
// ];

// // <--- CHANGED: Add Variants type definition
// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // Stagger project card animations
//     },
//   },
// };

// // <--- CHANGED: Add Variants type definition
// const itemVariants: Variants = {
//   hidden: { opacity: 0, y: 50, scale: 0.8 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 10,
//     },
//   },
// };

// const ProjectsSection: React.FC = () => {
//   return (
//     <section id="projects" className="container mx-auto py-20 px-4">
//       <motion.h2
//         className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ duration: 0.5 }}
//       >
//         My Work
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {projects.map((project) => (
//           <motion.div key={project.id} variants={itemVariants}> {/* This line causing error before */}
//             <Card className="flex h-full flex-col justify-between overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary">
//               {project.image && (
//                 <div className="relative h-48 w-full overflow-hidden">
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     layout="fill"
//                     objectFit="cover"
//                     className="transition-transform duration-300 hover:scale-105"
//                   />
//                 </div>
//               )}
//               <CardHeader className="flex-grow p-6">
//                 <CardTitle className="mb-2 text-2xl font-bold text-foreground">
//                   {project.title}
//                 </CardTitle>
//                 <CardDescription className="text-muted-foreground">
//                   {project.description}
//                 </CardDescription>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {project.tech.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </CardHeader>
//               <div className="flex justify-end gap-4 p-6 pt-0">
//                 <Link href={project.github} target="_blank" rel="noopener noreferrer">
//                   <Button variant="outline" className="text-primary hover:bg-primary hover:text-primary-foreground">GitHub</Button>
//                 </Link>
//                 <Link href={project.live} target="_blank" rel="noopener noreferrer">
//                   <Button>Live Demo</Button>
//                 </Link>
//               </div>
//             </Card>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default ProjectsSection;

"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

// ======== PROJECT DATA ========
const categories = [
  {
    name: "💻 Web Development Projects",
    projects: [
      {
        id: 1,
        title: "E-commerce Website",
        description: "A modern e-commerce style web application built during a hackathon, featuring product galleries, responsive UI and themes inspired by Nike’s layout.",
        image: "/images/web-1.PNG",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
        github: "https://github.com/HassaanDeveloper/Hackathon",
        live: "https://hackathon-zeta-ashy.vercel.app/"
      },
      {
        id: 2,
        title: "Countdown Timer",
        description: "A responsive web application that functions as a customizable countdown timer. Users can set the time, start, pause, and reset the timer. It also includes a theme toggle feature.",
        image: "/images/web-2.PNG",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "Shadcn-Ui", "Framer Motion", "TypeScript"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/counter_app",
        live: "https://web-development-projects-k192.vercel.app/",
      },
      {
        id: 3,
        title: "Online Course Platform Landing Page",
        description: "A multi-section, responsive landing page template for an online education/course platform. It features sections for course categories, company achievements, course listings, a team showcase, customer testimonials, and a newsletter sign-up.",
        image: "/images/web-3.PNG",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
        github: "https://github.com/HassaanDeveloper/LandingPage_class6",
        live: "https://landing-page-class6.vercel.app/",
      },
      {
        id: 4,
        title: "Animated Birthday Wish App",
        description: "A fun and interactive web app for sending personalized birthday greetings. It typically features interactive elements like confetti, lightable candles, or a card reveal.",
        image: "/images/web-4.PNG",
        tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "Shadcn UI", "Framer-motion"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/birthday_wish",
        live: "https://web-development-projects-ten-chi.vercel.app/"
      },
      {
        id: 5,
        title: "Full Stack MERN Project",
        description: "A complete full-stack application leveraging the MERN (MongoDB, Express, React, Node.js) stack, demonstrating proficiency in both front-end and back-end development, including database operations.",
        image: "/images/web-5.PNG",
        tech: ["MongoDB", "React", "Node.js", "MERN Stack", "zod", "Resend E-mail", "next.js", "Shadcn-Ui"],
        github: "https://github.com/HassaanDeveloper/mern-stack-project",
        live: "https://mern-stack-project-pi.vercel.app/"
      },
      {
        id: 6,
        title: "Dynamic Resume Builder",
        description: "A web-based tool that allows users to input their data and generate a clean, customizable, and professionally formatted resume which can typically be downloaded or shared as a PDF.",
        image: "/images/web-6.PNG",
        tech: ["HTML", "CSS", "TypeScript", "PDF Generation Library (Inferred)"],
        github: "https://github.com/HassaanDeveloper/Dynamic-Resume-Builder",
        live: "https://dynamic-resume-builder-murex.vercel.app/"
      },
      {
        id: 7,
        title: "Weather Widget / Forecast App",
        description: "A simple, clean web application that fetches and displays real-time weather information for a user-specified location using a public weather API.",
        image: "/images/web-7.PNG",
        tech: ["HTML", "CSS", "TypeScript", "Weather API (e.g., OpenWeatherMap)", "Framer-motion", "Shadcn-Ui"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/weather_widget",
        live: "https://web-development-projects-m9j9.vercel.app/"
      },
      {
        id: 8,
        title: "Next.js App (Fifth Project)",
        description: "A general-purpose web application built using the Next.js framework, typically showcasing mastery of components, routing, and modern React development patterns.",
        image: "/images/web-8.PNG",
        tech: ["Next.js", "Tailwind CSS", "Vercel", "TypeScript"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/fifth_nextjs",
        live: "https://web-development-projects-r3j4.vercel.app/"
      },
      {
        id: 9,
        title: "PulesPay Landing Page Clone",
        description: "A detailed and pixel-perfect clone or inspired project of the PulesPay landing page, demonstrating advanced skills in responsive design and complex layout implementation.",
        image: "/images/web-9.PNG",
        tech: ["HTML", "CSS", "TypeScript", "Responsive Design", "GSAP", "Framer-motion", "Next.js", "Shadcn-Ui"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/pulespay",
        live: "https://web-development-projects-no6h.vercel.app/"
      },
      {
        id: 10,
        title: "Next.js App (Second Project)",
        description: "A foundational project utilizing the Next.js framework, focused on establishing the core setup, routing, and component structure for a simple web application.",
        image: "/images/web-10.PNG",
        tech: ["Next.js", "Vercel", "TypeScript", "TailwindCSS"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/second_nextjs",
        live: "https://web-development-projects-39pt.vercel.app/"
      },
      {
        id: 11,
        title: "Next.js E-commerce Template",
        description: "A modern, front-end e-commerce website built with Next.js and Vercel, demonstrating product display, dynamic routing, and a professional user interface.",
        image: "/images/web-11.PNG",
        tech: ["Next.js", "Vercel", "Tailwind CSS (Likely)", "TypeScript"],
        github: "https://github.com/HassaanDeveloper/Web-Development-Projects/tree/main/ecommerce_nextjs",
        live: "https://web-development-projects-t86w.vercel.app/"
      }
    ],
  },
  {
    name: "🧠 Agentic AI Projects",
    projects: [
      {
        id: 12,
        title: "Simple Agent (Greeting & Weather)",
        description: "A basic, task-specific AI chatbot built with Chainlit. It is programmed to handle greetings ('Hi', 'Bye') and answer weather-related questions but is explicitly limited to these functions.",
        image: "/images/Simple-agent-1.PNG",
        tech: ["Python", "Chainlit", "LLM (Inferred)", "OpenAi Agent SDK"],
        github: "https://github.com/HassaanDeveloper/Agentic-AI/tree/main/simple-agent",
        live: "/images/Simple-agent-2.PNG",
      },
      {
        id: 13,
        title: "Q&A Chatbot",
        description: "A comprehensive, multi-domain AI agent capable of providing a wide range of answers and responses. Its functions include current news summarization, general knowledge, creative writing, and logical reasoning across many subjects.",
        image: "/images/qa-chatbot-1.PNG",
        tech: ["Python", "Chainlit", "LLM (Inferred)", "OpenAi Agent SDK"],
        github: "https://github.com/HassaanDeveloper/Agentic-AI/tree/main/qa-chatbot",
        live: "/images/qa-chatbot-2.PNG",
      },
      {
        id: 14,
        title: "Authenticated Chatbot",
        description: "An AI agent secured with **user authentication** (login) to enable **personalized, stateful interactions** and secure access to user-specific data and tasks, transforming it from a general Q&A bot to a private assistant.",
        image: "/images/chatbot-authentication.PNG",
        tech: ["Python", "Chainlit", "Authentication Logic", "LLM (Inferred)", "Github Authentication", "OpenAi Agent SDK"],
        github: "https://github.com/HassaanDeveloper/Agentic-AI/tree/main/chatbot-authentication",
        live: "/images/advance-agent-1.PNG",
      },
      {
        id: 15,
        title: "Advance Agent",
        description: "Development of an autonomous AI Agent capable of multi-step reasoning, planning, and external tool execution to achieve complex goals with minimal human intervention. It demonstrates the core principles of Agentic AI, moving beyond simple Q&A to actively interact with the environment (e.g., using a calculator, performing a web search, or calling a custom API) to solve a task.",
        image: "/images/advance-agent-1.PNG",
        tech: ["Python", "Chainlit", "Authentication Logic", "LLM (Inferred)", "Github Authentication", "OpenAi Agent SDK"],
        github: "https://github.com/HassaanDeveloper/Agentic-AI/tree/main/advance-agent",
        live: "/images/advance-agent-2.PNG",
      },
    ],
  },
  {
    "name": "📱 App Development (Flutter)",
    "projects": [
      {
        id: 18,
        title: "Attendance Application",
        description: "A cross-platform mobile application for modern attendance management, likely designed for an educational institution or business. It features **role-based access** for Admin, Teacher/Staff, and Student users, automating attendance tracking and providing various reports.",
        image: "/images/attendance-application-1.PNG",
        tech: ["Flutter", "Dart", "Supabase Authentication", "Supabase", "Geolocation (Inferred)", "QR Code Scanning (Inferred)", "Firebase Cloud Messaging(FCM)", "Edge Function", "Postgress SQL"],
        github: "https://github.com/HassaanDeveloper/Attendance_Application",
        live: "/images/attendance-application-2.PNG"
      },
      {
        id: 17,
        title: "User Sign-up Page UI",
        description: "A clean, responsive, and reusable sign-up page UI component built with Flutter, focusing on form validation, modern design principles, and smooth user experience.",
        image: "/images/app-1.PNG",
        tech: ["Flutter", "Dart", "Netlify (Deployment)", "UI/UX Design"],
        github: "https://github.com/HassaanDeveloper/Flutter-Signup-page",
        live: "https://signup-page890.netlify.app/"
      },
      {
        id: 16,
        title: "Personal Finance Tracker",
        description: "A comprehensive personal finance application for tracking income, expenses, and managing budgets. It likely includes features like transaction logging, categorization, and visual reports/charts.",
        image: "/images/personal-finance-app.png",
        tech: ["Flutter", "Dart", "Netlify (Deployment)", "Firebase", "Firebase-Authentication"],
        github: "https://github.com/HassaanDeveloper/Flutter-Projects/tree/main/personal_finance_tracker",
        live: "https://personal-finance-tracker00.netlify.app/"
      },
      {
        id: 19,
        title: "User Login Page UI",
        description: "A well-structured, modern login screen UI for Flutter applications, featuring secure password input, form handling, and responsive layout for different screen sizes.",
        image: "/images/app-login-2.PNG",
        tech: ["Flutter", "Dart", "Netlify (Deployment)", "UI/UX Design"],
        github: "https://github.com/HassaanDeveloper/Flutter-Login-page",
        live: "https://login-page890.netlify.app/"
      }
    ]
  },

  {
    name: "📊 Data Analysis Projects",
    projects: [
      {
        id: 20,
        title: "Sales Performance Dashboard",
        description: "A Power BI dashboard for visualizing sales trends, key performance indicators (KPIs), and regional performance.",
        image: "/images/Snapshot of Power Bi Project.PNG",
        tech: ["Power BI", "Excel", "DAX"],
        github: "https://github.com/HassaanDeveloper/PowerBi-Project_of_Data-Analysis",
        live: "https://github.com/HassaanDeveloper/PowerBi-Project_of_Data-Analysis/blob/main/PowerBI%20Full%20Project.pbix",
      },
      {
        id: 21,
        title: "Executive Sales Overview",
        description: "An interactive Tableau dashboard to track high-level sales metrics, profitability, and forecasts.",
        image: "/images/Snapshot of Tableau Project.PNG",
        tech: ["Tableau", "SQL"],
        github: "https://github.com/HassaanDeveloper/Tableau-Project_of_Data-Analysis",
        live: "https://github.com/HassaanDeveloper/Tableau-Project_of_Data-Analysis/blob/main/AirBnB%20Full%20Project.twbx",
      },
      {
        id: 22,
        title: "Data Cleaning Project",
        description: "SQL project to clean a raw dataset, standardize formats, handle NULLs, and remove duplicates for reliable analysis.",
        image: "/images/data-cleaning.png",
        tech: ["SQL (e.g., MySQL/PostgreSQL)"],
        github: "https://github.com/HassaanDeveloper/SQL-projects_for_Data-Analysis/blob/main/Data%20cleaning.sql",
        live: "#",
      },
      {
        id: 23,
        title: "Global Sales Exploratory Data Analysis",
        description: "SQL queries for in-depth Exploratory Data Analysis (EDA), uncovering customer and product insights from the data.",
        image: "/images/EDA.png",
        tech: ["SQL (e.g., MySQL/PostgreSQL)"],
        github: "https://github.com/HassaanDeveloper/SQL-projects_for_Data-Analysis/blob/main/EDA%20project.sql",
        live: "#",
      },
    ],
},
];

// ======== ANIMATION CONFIG ========
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// ======== COMPONENT ========
const ProjectsSection: React.FC = () => {
  return (
    <section className="container mx-auto py-16 px-4 sm:py-20">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        My Work
      </motion.h2>

      {categories.map((category, idx) => (
        <div key={idx} className="mb-16">
          <h3 className="mb-6 text-xl font-semibold text-primary sm:mb-8 sm:text-2xl">
            {category.name}
          </h3>

          <motion.div
            className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {category.projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="flex h-full flex-col justify-between overflow-hidden rounded-lg border-2 border-primary/20 bg-card shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary">
                  {project.image && (
                    <div className="relative h-40 w-full overflow-hidden sm:h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader className="flex-grow p-4 sm:p-6">
                    <CardTitle className="mb-2 text-lg font-bold sm:text-2xl">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base">{project.description}</CardDescription>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                  <div className="flex justify-end gap-4 p-6 pt-0">
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        GitHub
                      </Button>
                    </Link>
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Live Demo</Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;

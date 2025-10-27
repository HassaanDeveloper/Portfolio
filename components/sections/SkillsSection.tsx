// src/components/sections/SkillsSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Lightbulb, Code, Layout, Database, Server, GitBranch, Brain, BarChart3, Smartphone } from "lucide-react"; // Example icons
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Define your skills data here or import from src/data/skills.ts
const skillsCategories = [
  {
    category: "Web Development (Frontend)",
    icon: Layout,
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Framer Motion", level: 85 },
      { name: "GSAP", level: 70 },
      { name: "Shadcn UI", level: 90 },
      { name: "Chakra UI", level: 90 },
      { name: "Three.js", level: 70 },
      { name: "UI/UX Design", level: 80 },
      { name: "Responsive Design", level: 98 },
      { name: "Figma", level: 75 },
    ],
  },
  {
    category: "Web Development (Backend)",
    icon: Server,
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 80 },
      { name: "FastAPI", level: 70 },
      { name: "RESTful APIs", level: 90 },
      { name: "JWT / OAuth2", level: 80 },
      { name: "Bcrypt", level: 70 },
      { name: "Zod Validation", level: 70 },
    ],
  },
  {
    category: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "Supabase", level: 80 },
      { name: "Firebase Firestore", level: 75 },
    ],
  },
  {
    category: "Mobile App Development",
    icon: Smartphone,
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Firebase", level: 85 },
      { name: "Firebase Authentication", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Supabase Authentication", level: 80 },
      { name: "Push Notifications (FCM)", level: 80 },
      { name: "App Architecture (MVVM, Clean Code)", level: 85 },
      { name: "Responsive UI Design", level: 90 },
    ],
  },
  {
    category: "Data Analysis & Visualization",
    icon: BarChart3,
    skills: [
      { name: "Python (Pandas, NumPy)", level: 90 },
      { name: "Data Cleaning (SQL, Pandas)", level: 90 },
      { name: "Matplotlib / Seaborn", level: 85 },
      { name: "Jupyter Notebook", level: 85 },
      { name: "SQL Queries & Joins", level: 90 },
      { name: "Excel / Google Sheets", level: 80 },
      { name: "Power BI / Tableau", level: 70 },
    ],
  },
  {
    category: "Artificial Intelligence / Machine Learning",
    icon: Brain,
    skills: [
      { name: "Scikit-Learn", level: 60 },
      { name: "Data Preprocessing", level: 85 },
      { name: "OpenAI Agent SDK", level: 85 },
      { name: "OpenAI Agent Kit, N8N", level: 75 },
      { name: "Model Training & Evaluation", level: 70 },
      { name: "Supervised / Unsupervised Learning", level: 80 },
      { name: "AI Agentic Systems (RAG, LLMs)", level: 65 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 70 },
      { name: "CI/CD (GitHub Actions)", level: 75 },
      { name: "Vercel / Netlify", level: 85 },
      { name: "AWS S3", level: 65 },
      { name: "Azure / Google Cloud", level: 65 },
    ],
  },
  {
    category: "Software Engineering & Concepts",
    icon: Lightbulb,
    skills: [
      { name: "Software Design & Architecture", level: 90 },
      { name: "Agile Methodologies", level: 85 },
      { name: "SRS Documentation", level: 90 },
      { name: "Software Process Models", level: 90 },
      { name: "UI/UX Principles", level: 85 },
      { name: "Performance Optimization", level: 80 },
      { name: "Problem Solving", level: 85 },
      { name: "Team Collaboration", level: 90 },
    ],
  },
];


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="container mx-auto py-20 px-4">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillsCategories.map((category, index) => (
          <motion.div key={category.category} variants={itemVariants}>
            <Card className="flex h-full flex-col rounded-lg border-2 border-primary/20 bg-card p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary">
              <CardHeader className="flex flex-row items-center gap-4 p-0 pb-4">
                {category.icon && <category.icon className="h-8 w-8 text-primary" />}
                <CardTitle className="text-2xl font-semibold text-foreground">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardDescription className="flex-grow space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill.name}</span>
                    <div className="relative h-2 w-2/3 rounded-full bg-muted">
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </CardDescription>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
// src/components/sections/Certifications.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";

// Define the structure for a certificate
interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  link: string; // URL to the certificate or verification page
  skills: string[]; // Skills covered by the certificate
}

// Replace with your actual certification data
const certifications: Certificate[] = [
  
  {
    id: 2,
    name: "Google Advanced Data Analytics",
    issuer: "Google via Coursera",
    date: "August 2024",
    link: "https://coursera.org/share/e02197765b3e4e8aeaac25fdefa6c4cf",
    skills: ["Data Analytics", "SQL", "Machine Learning", "Statistics"],
  },
  {
    id: 3,
    name: "IT for Business Success",
    issuer: "HP Life",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1d_8vOSZ2f_Wam8nT-Z4xVFaDaCKPajZm/view?usp=drive_link",
    skills: ["IT", "Business Management", "Digital Skills"],
  },
  {
    id: 4,
    name: "AI for Beginners",
    issuer: "HP Life",
    date: "June 2024",
    link: "https://drive.google.com/file/d/1EWEngVgKQllj1ApfnUaipwvAc0LlXHyO/view?usp=drive_link",
    skills: ["AI Fundamentals", "Neural Networks", "Business AI"],
  },
  {
    id: 5,
    name: "Data Analytics Bootcamp",
    issuer: "Alexander Freberg (YouTube)",
    date: "May 2024",
    link: "https://drive.google.com/file/d/1oPk3j9cXynn9C5Oz9ZeXAadPamahssEP/view?usp=drive_link",
    skills: ["Excel", "SQL", "Power BI", "Data Cleaning", "EDA", "Tableau", "Data Visualization"],
  },
  {
    id: 6,
    name: "Intro to Programming",
    issuer: "Kaggle",
    date: "March 2024",
    link: "https://www.kaggle.com/learn/certification/hassaanu9k/intro-to-programming",
    skills: ["Python", "Logic", "Programming Basics"],
  },
  {
    id: 7,
    name: "Python",
    issuer: "Kaggle",
    date: "March 2024",
    link: "https://www.kaggle.com/learn/certification/hassaanu9k/python",
    skills: ["Python", "Data Structures", "Functions"],
  },
  {
    id: 8,
    name: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "April 2024",
    link: "https://www.kaggle.com/learn/certification/hassaanu9k/intro-to-machine-learning",
    skills: ["ML Basics", "Scikit-learn", "Model Evaluation"],
  },
  {
    id: 9,
    name: "Feature Engineering",
    issuer: "Kaggle",
    date: "April 2024",
    link: "https://www.kaggle.com/learn/certification/hassaanu9k/feature-engineering",
    skills: ["Data Preprocessing", "Feature Encoding", "Feature Scaling"],
  },
  {
    id: 10,
    name: "Advanced SQL",
    issuer: "Kaggle",
    date: "April 2024",
    link: "https://www.kaggle.com/learn/certification/hassaanu9k/advanced-sql",
    skills: ["SQL Joins", "Window Functions", "Subqueries", "Optimization"],
  },
  {
    id: 1,
    name: "Accelerate Your Job Search with AI",
    issuer: "Google via Coursera",
    date: "October 2025",
    link: "https://coursera.org/share/cd6f1a7577e67db92e8cfd41bf30bbb9",
    skills: ["AI Tools", "Career Development", "Productivity"],
  },
];

const Certifications: React.FC = () => {
    // Animation variants for certificate cards
    // <--- ADDED: Explicitly type cardVariants as Variants ---
    const cardVariants: Variants = {
      hidden: { opacity: 0, y: 50, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          // <--- FIX IS HERE: Use a Cubic Bezier array for ease ---
          ease: [0.2, 0.8, 0.2, 1], // This is a common cubic-bezier for ease-out
        },
      },
    };

  return (
    <section id="certifications" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          My <span className="text-primary">Certifications</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }} // Stagger animation for each card
            >
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{certificate.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {certificate.issuer} - {certificate.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="mb-4">
                    <h4 className="text-lg font-medium mb-2 text-foreground">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {certificate.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-sm font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  {certificate.link && (
                    <Link
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-accent-foreground hover:text-primary transition-colors duration-200 mt-auto"
                    >
                      View Certificate <ExternalLinkIcon className="ml-2 h-4 w-4" />
                    </Link>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
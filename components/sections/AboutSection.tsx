// src/components/sections/AboutSection.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card"; // Using Shadcn Card for a clean look

const AboutSection: React.FC = () => {
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
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="container mx-auto py-20 px-4">
      <motion.h2
        className="mb-12 text-center text-4xl font-bold text-foreground sm:text-5xl text-glow"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-12 md:flex-row md:items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <div className="relative h-60 w-60 overflow-hidden rounded-full border-4 border-primary shadow-lg transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/my-pic.png" 
              alt="Hassaan"
              layout="fill"
              objectFit="cover"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        <Card className="flex-grow rounded-lg border-2 border-primary/20 bg-card p-8 shadow-xl">
          <motion.div variants={itemVariants}>
            <h3 className="mb-4 text-3xl font-semibold text-foreground">
              Hello, I&apos;m Hassaan 👋
            </h3>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="mb-4 text-lg text-muted-foreground">
              I’m a passionate and detail-driven tech enthusiast who believes technology
              isn’t just about writing code — it’s about crafting meaningful digital
              experiences that make life simpler, smarter, and more connected.
            </p>

            <p className="mb-4 text-lg text-muted-foreground">
              From designing elegant <strong>frontend interfaces</strong> to building
              powerful <strong>backend systems</strong> and performing insightful{" "}
              <strong>data analysis</strong>, I love turning raw ideas into digital reality.
              My journey started with curiosity — a constant drive to understand how
              things work — and that same energy now fuels my passion for web
              development, AI, and analytics.
            </p>

            <p className="mb-4 text-lg text-muted-foreground">
              I take pride in my <strong>communication and collaboration skills</strong>.
              Whether I’m presenting ideas, leading discussions, or explaining complex
              concepts to teammates, I always focus on clarity, confidence, and impact.
            </p>

            <p className="mb-4 text-lg text-muted-foreground">
              Every project I take on is more than a task — it’s an opportunity to build
              something that stands out. I love merging creativity with technical precision,
              delivering solutions that are both functional and visually engaging.
            </p>

            <p className="text-lg text-muted-foreground">
              My ultimate goal? To become a tech professional who blends{" "}
              <strong>creativity, data intelligence, and design</strong> into one unstoppable
              skill set — creating experiences that inspire and innovate. 🚀
            </p>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutSection;

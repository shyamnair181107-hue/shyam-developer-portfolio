"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Sparkles, Compass, Target, Code, Cpu, Briefcase } from "lucide-react";
import { profileData } from "@/data/profile";
import { Terminal } from "./Terminal";

export function About() {
  const iconMap: Record<string, React.ReactNode> = {
    GraduationCap: <GraduationCap className="w-6 h-6 text-accent-cyan" />,
    Sparkles: <Sparkles className="w-6 h-6 text-accent-violet" />,
    Compass: <Compass className="w-6 h-6 text-accent-blue" />,
    Target: <Target className="w-6 h-6 text-emerald-400" />,
    Briefcase: <Briefcase className="w-6 h-6 text-accent-violet" />
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet font-mono text-xs tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURE // BIOGRAPHY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Beyond the <span className="text-gradient-cyan">Code.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            {profileData.aboutIntro[0]}
          </p>
        </div>

        {/* 2-Column Grid: Left Story & 4 Info Cards, Right Interactive Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Story & 4 Info Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-heading text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent-cyan" />
                <span>The Engineering Philosophy</span>
              </h3>
              
              <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
                <p>{profileData.aboutIntro[1]}</p>
                <p>{profileData.aboutIntro[2]}</p>
              </div>

              {/* Tagline highlight */}
              <div className="mt-6 p-4 rounded-xl bg-background/60 border-l-4 border-accent-cyan text-xs sm:text-sm italic text-white/90">
                &ldquo;{profileData.primaryTagline}&rdquo;
              </div>
            </div>

            {/* 4 Information Cards in a 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profileData.infoCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl glass-panel-hover glass-panel border border-white/5 flex flex-col justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                    {iconMap[card.icon] || <Sparkles className="w-5 h-5 text-accent-cyan" />}
                  </div>
                  <div>
                    <h4 className="font-mono text-xs font-bold tracking-wider text-accent-cyan uppercase mb-1">
                      {card.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Terminal */}
          <div className="lg:col-span-6 flex flex-col items-start w-full">
            <div className="w-full">
              <div className="mb-3 flex items-center justify-between text-xs font-mono text-text-secondary">
                <span className="text-accent-violet flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-violet animate-pulse" />
                  INTERACTIVE REPL ENVIRONMENT
                </span>
                <span>Type &apos;help&apos; for list</span>
              </div>
              <Terminal />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


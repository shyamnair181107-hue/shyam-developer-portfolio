"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, FileDown, MessageSquare, Sparkles, Terminal, Code2, Layers, Cpu } from "lucide-react";
import { profileData } from "@/data/profile";

export function Hero() {
  const [imgSrc, setImgSrc] = useState<string>(profileData.profileImage);

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Animated Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-background-card/90 border border-accent-cyan/30 shadow-[0_0_15px_rgba(0,240,255,0.15)] mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[11px] font-semibold tracking-wider text-accent-cyan uppercase">
                {profileData.statusLabel}
              </span>
            </div>

            {/* Intro Monospace Subtitle */}
            <div className="flex items-center gap-2 text-text-secondary font-mono text-xs sm:text-sm tracking-widest uppercase mb-2">
              <span className="text-accent-violet">&gt;&gt;</span>
              <span>HELLO, I&apos;M</span>
            </div>

            {/* Main Name Heading with Futuristic Animated Gradient */}
            <h1 className="font-heading text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-4 text-white break-words">
              SHYAM <br />
              <span className="text-gradient-primary">
                SIVADASAN NAIR
              </span>
            </h1>

            {/* Professional Role Banner */}
            <p className="text-sm sm:text-lg font-mono text-accent-cyan font-medium mb-4 flex items-center gap-2 flex-wrap">
              <Terminal className="w-4 h-4 text-accent-violet shrink-0" />
              <span>{profileData.professionalRole}</span>
            </p>

            {/* Bio Paragraph */}
            <p className="text-xs sm:text-base text-text-secondary max-w-2xl leading-relaxed mb-8">
              {profileData.shortBio}
            </p>

            {/* 3 Primary CTA Buttons (Responsive Stack on Mobile) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              {/* CTA 1: Explore Work */}
              <button
                onClick={() => handleScrollTo("projects")}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* CTA 2: Download Resume */}
              <a
                href={profileData.resumeUrl}
                download="Shyam_Sivadasan_Nair_Resume.pdf"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-white glass-panel border border-white/10 hover:border-accent-cyan/60 hover:shadow-glow-cyan transition-all duration-300"
              >
                <FileDown className="w-4 h-4 text-accent-cyan group-hover:animate-bounce" />
                <span>Download Resume</span>
              </a>

              {/* CTA 3: Let's Connect */}
              <button
                onClick={() => handleScrollTo("contact")}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-text-secondary hover:text-white glass-panel border border-white/5 hover:border-accent-violet/50 transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4 text-accent-violet group-hover:scale-110 transition-transform" />
                <span>Let&apos;s Connect</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 mt-8 border-t border-white/10 w-full max-w-xl">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-white">2nd Year</div>
                <div className="font-mono text-[11px] text-text-secondary">CSE Undergrad</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-accent-cyan">Full-Stack</div>
                <div className="font-mono text-[11px] text-text-secondary">Web &amp; Systems</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-accent-violet">SIH 2026</div>
                <div className="font-mono text-[11px] text-text-secondary">FDR MITRA Track</div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Profile Photograph Frame with Ambient Glow & Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            {/* Ambient Background Aura */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-accent-violet/30 via-accent-cyan/20 to-accent-blue/30 blur-3xl pointer-events-none" />

            {/* Profile Frame Container */}
            <div className="relative group">
              {/* Outer Glowing Gradient Border */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-blue shadow-glow-dual transition-transform duration-500 group-hover:scale-[1.02]">
                {/* Inner Image Container */}
                <div className="relative w-60 h-76 sm:w-80 sm:h-96 max-w-[85vw] rounded-[22px] overflow-hidden bg-background-card flex items-center justify-center">
                  <Image
                    src={imgSrc}
                    alt="Shyam Sivadasan Nair - Computer Science Engineering Student & Developer"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={() => setImgSrc("/images/profile-placeholder.svg")}
                    priority
                  />

                  {/* Gradient Overlay for Cinematic Depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent opacity-60" />

                  {/* Tech HUD Line Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 sm:p-3 rounded-xl glass-panel border border-white/10 backdrop-blur-md">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-text-secondary">
                      <span className="flex items-center gap-1.5 text-accent-cyan">
                        <Cpu className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
                        SYS.ONLINE
                      </span>
                      <span className="text-white/80">IN // CS-2026</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 sm:-right-6 p-2 sm:p-2.5 rounded-xl glass-panel border border-accent-cyan/40 shadow-glow-cyan flex items-center gap-2 backdrop-blur-md scale-90 sm:scale-100"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-accent-cyan/15 flex items-center justify-center text-accent-cyan">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-[11px] sm:text-xs font-bold text-white">Full-Stack</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-accent-cyan">React • Next.js • Python</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-3 -left-2 sm:-left-6 p-2 sm:p-2.5 rounded-xl glass-panel border border-accent-violet/40 shadow-glow-violet flex items-center gap-2 backdrop-blur-md scale-90 sm:scale-100"
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-accent-violet/20 flex items-center justify-center text-accent-violet">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="text-left">
                  <div className="font-heading text-[11px] sm:text-xs font-bold text-white">Engineering</div>
                  <div className="font-mono text-[9px] sm:text-[10px] text-text-secondary">Pillai • 9.64 CGPA</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => handleScrollTo("about")}
            aria-label="Scroll to About section"
            className="flex flex-col items-center gap-2 text-text-secondary hover:text-accent-cyan transition-colors group focus:outline-none"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">DISCOVER MORE</span>
            <div className="w-5 h-9 rounded-full border-2 border-white/20 flex items-start justify-center p-1 group-hover:border-accent-cyan transition-colors">
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-accent-cyan"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}


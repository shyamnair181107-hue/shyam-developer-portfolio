"use client";

import React from "react";
import { ArrowUp, Heart, Terminal, Sparkles, Github, Linkedin, Mail } from "lucide-react";
import { profileData } from "@/data/profile";
import { socialLinks } from "@/data/socialLinks";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#060814] pt-16 pb-12 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-blue p-[1.5px]">
                <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-black text-sm text-white">
                    {profileData.brandInitials}
                  </span>
                </div>
              </div>
              <div>
                <span className="font-heading font-bold text-base text-white tracking-wide">
                  {profileData.fullName}
                </span>
                <span className="block font-mono text-[11px] text-accent-cyan">
                  {profileData.branch} • Second Year
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-text-secondary max-w-md leading-relaxed mb-4">
              &ldquo;{profileData.primaryTagline}&rdquo;
            </p>
            <p className="text-xs text-text-secondary/60 max-w-md italic">
              {profileData.supportingTagline}
            </p>
          </div>

          {/* Directory Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
              <span>NAVIGATION</span>
            </h4>
            <ul className="space-y-2 text-xs text-text-secondary font-mono">
              <li><a href="#home" className="hover:text-accent-cyan transition-colors">01. Home</a></li>
              <li><a href="#about" className="hover:text-accent-cyan transition-colors">02. About</a></li>
              <li><a href="#skills" className="hover:text-accent-cyan transition-colors">03. Skills</a></li>
              <li><a href="#projects" className="hover:text-accent-cyan transition-colors">04. Projects</a></li>
              <li><a href="#journey" className="hover:text-accent-cyan transition-colors">05. Journey</a></li>
              <li><a href="#achievements" className="hover:text-accent-cyan transition-colors">06. Achievements</a></li>
              <li><a href="#resume" className="hover:text-accent-cyan transition-colors">07. Resume Hub</a></li>
              <li><a href="#contact" className="hover:text-accent-cyan transition-colors">08. Contact</a></li>
            </ul>
          </div>

          {/* Social Links & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div>
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-4 md:text-right">
                CHANNELS
              </h4>
              <div className="flex items-center gap-3 mb-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl glass-panel border border-white/10 text-text-secondary hover:text-white hover:border-accent-cyan hover:shadow-glow-cyan transition-all"
                  >
                    {s.platform === "GitHub" && <Github className="w-4 h-4" />}
                    {s.platform === "LinkedIn" && <Linkedin className="w-4 h-4" />}
                    {s.platform === "Email" && <Mail className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass-panel border border-white/10 hover:border-accent-cyan text-xs font-mono text-text-secondary hover:text-accent-cyan transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-secondary">
          <p>© {new Date().getFullYear()} {profileData.fullName}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-[11px]">
            <span>Engineered with Next.js, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}


"use client";

import React, { useState } from "react";
import { FileDown, Eye, CheckCircle2, Clock, Mail, MapPin, Sparkles, FileText } from "lucide-react";
import { profileData } from "@/data/profile";
import { contactDetails } from "@/data/socialLinks";

export function Resume() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = () => {
    // Try to trigger download
    setDownloadNotice("Downloading resume PDF...");
    setTimeout(() => {
      setDownloadNotice(null);
    }, 4000);
  };

  return (
    <section id="resume" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE // CREDENTIALS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Professional <span className="text-gradient-primary">Profile.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            A comprehensive curriculum vitae detailing academic foundations, software engineering projects, technical arsenal, and development trajectory.
          </p>
        </div>

        {/* Resume Preview & Actions Card */}
        <div className="max-w-4xl mx-auto rounded-3xl glass-panel border border-accent-violet/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#111630] to-[#0A0D1E]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>LAST UPDATED: ACTIVE ACADEMIC YEAR 2025–2026</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {profileData.fullName}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-text-secondary mt-1">
                {profileData.professionalRole}
              </p>
            </div>

            {/* Download CTA Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={profileData.resumeUrl}
                download="Shyam_Sivadasan_Nair_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual hover:opacity-95 transition-all"
              >
                <FileDown className="w-4 h-4 animate-bounce" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-text-secondary hover:text-white glass-panel border border-white/10 hover:border-white/30 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Open in Tab</span>
              </a>
            </div>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-accent-cyan font-bold uppercase tracking-wider block mb-1">
                Core Focus
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Full-Stack Web Development, Relational Systems, Algorithmic Thinking, and Practical Engineering.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-accent-violet font-bold uppercase tracking-wider block mb-1">
                Primary Stack
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                React, Next.js, TypeScript, Tailwind CSS, Node.js, Express, MySQL, REST APIs, Git.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                Availability
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Available for internships, open-source projects, and engineering hackathons.
              </p>
            </div>
          </div>

          {/* Contact Details Quick Strip */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-text-secondary gap-3">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{contactDetails.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent-violet" />
              <span>{contactDetails.location}</span>
            </div>
            <div className="text-white/60">
              Targeting: Software Engineer Internships
            </div>
          </div>

          {/* Download Notification Banner */}
          {downloadNotice && (
            <div className="mt-4 p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{downloadNotice} Note: Ensure `/resume.pdf` is present in public directory.</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}


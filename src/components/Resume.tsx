"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FileDown, Eye, CheckCircle2, Clock, Mail, MapPin, Phone, Sparkles, FileText, Maximize2, X } from "lucide-react";
import { profileData } from "@/data/profile";
import { contactDetails } from "@/data/socialLinks";

export function Resume() {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    setDownloadNotice("Downloading official resume PDF...");
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
            Official curriculum vitae detailing B.Tech Computer Engineering at Pillai College of Engineering (9.64 CGPA), software internship at Tripple One Solutions, and key technical projects.
          </p>
        </div>

        {/* Resume Preview & Actions Card */}
        <div className="max-w-5xl mx-auto rounded-3xl glass-panel border border-accent-violet/30 p-5 sm:p-10 shadow-2xl relative overflow-hidden bg-gradient-to-b from-[#111630] to-[#0A0D1E]">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-accent-cyan mb-1">
                <Clock className="w-3.5 h-3.5" />
                <span>OFFICIAL RESUME • VERIFIED CREDENTIALS</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                {profileData.fullName}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-text-secondary mt-1">
                {profileData.institution} • {profileData.cgpa}
              </p>
            </div>

            {/* Action Buttons: Download PDF & Open Image */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={profileData.resumeUrl}
                download="Shyam_Sivadasan_Nair_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual hover:opacity-95 transition-all cursor-pointer"
              >
                <FileDown className="w-4 h-4 animate-bounce" />
                <span>Download Resume (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-text-secondary hover:text-white glass-panel border border-white/10 hover:border-accent-cyan transition-colors cursor-pointer"
              >
                <Maximize2 className="w-4 h-4 text-accent-cyan" />
                <span>Expand Fullscreen</span>
              </button>
            </div>
          </div>

          {/* Embedded Visual Resume Document Preview */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/10 bg-[#060814] shadow-inner group">
            <div className="relative w-full max-h-[500px] sm:max-h-[600px] overflow-hidden flex justify-center items-start">
              <Image
                src={profileData.resumeImageUrl}
                alt="Shyam Sivadasan Nair Resume Document"
                width={840}
                height={1080}
                className="w-full h-auto max-w-2xl object-contain object-top"
                priority
              />

              {/* Gradient fade to view full */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0A0D1E] via-[#0A0D1E]/80 to-transparent flex items-end justify-center pb-6">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl glass-panel border border-accent-cyan/40 bg-background/90 text-xs sm:text-sm font-mono text-accent-cyan hover:text-white hover:border-accent-cyan transition-all shadow-glow-cyan"
                >
                  <Eye className="w-4 h-4" />
                  <span>Click to View Complete Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8">
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-accent-cyan font-bold uppercase tracking-wider block mb-1">
                Academic Excellence
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Pillai College of Engineering, Navi Mumbai. First Year CGPA: <strong className="text-white">9.64 / 10.0</strong> in Computer Engineering.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-accent-violet font-bold uppercase tracking-wider block mb-1">
                Internship Experience
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Software Development Intern at <strong className="text-white">Tripple One Solutions</strong> (March – May 2026). Python, OOP, and web modules.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
              <span className="font-mono text-[11px] text-emerald-400 font-bold uppercase tracking-wider block mb-1">
                Verified Projects
              </span>
              <p className="text-xs text-text-secondary leading-relaxed">
                Campus Eats (Flask, Python, Vercel), Grand Azure, RakshaNet, and FDR MITRA.
              </p>
            </div>
          </div>

          {/* Contact Details Quick Strip */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-between text-xs font-mono text-text-secondary gap-3">
            <a href={`mailto:${contactDetails.email}`} className="flex items-center gap-2 hover:text-accent-cyan transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{contactDetails.email}</span>
            </a>
            {contactDetails.phone && (
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contactDetails.phone}</span>
              </a>
            )}
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-accent-violet" />
              <span>{contactDetails.location}</span>
            </div>
            <div className="text-white/60">
              Targeting: Software Engineering Internships
            </div>
          </div>

          {/* Download Notification Banner */}
          {downloadNotice && (
            <div className="mt-4 p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-xs font-mono text-accent-cyan flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{downloadNotice}</span>
            </div>
          )}
        </div>

        {/* Fullscreen Document Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-background/95 backdrop-blur-xl">
            <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl glass-panel border border-accent-cyan/40 bg-[#070918] p-4 sm:p-6 shadow-2xl flex flex-col items-center">
              <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <span className="font-heading font-bold text-sm text-white">
                  Shyam Sivadasan Nair — Official Resume
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href={profileData.resumeUrl}
                    download="Shyam_Sivadasan_Nair_Resume.pdf"
                    className="px-3 py-1.5 rounded-lg bg-accent-cyan/20 border border-accent-cyan/50 text-accent-cyan hover:text-white font-mono text-xs flex items-center gap-1.5"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="w-full flex justify-center">
                <Image
                  src={profileData.resumeImageUrl}
                  alt="Official Resume Full Document"
                  width={900}
                  height={1150}
                  className="w-full h-auto max-w-3xl rounded-xl object-contain shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Compass, AlertCircle, Building2, ShieldCheck } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-background/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel border border-accent-cyan/30 bg-[#0B0F24] p-6 sm:p-8 shadow-2xl z-10 text-left"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full bg-accent-violet/20 border border-accent-violet/40 text-accent-cyan text-xs font-mono font-semibold">
              {project.category}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                project.status === "Live"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
              }`}
            >
              ● {project.status}
            </span>
          </div>

          <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white mb-1">
            {project.title}
          </h2>
          <p className="font-mono text-sm text-accent-cyan mb-6">
            {project.subtitle}
          </p>

          {/* Cover Graphic / Blueprint */}
          <div className="relative w-full h-56 sm:h-80 rounded-2xl overflow-hidden mb-8 border border-white/10 bg-background">
            <Image
              src={project.coverImage.endsWith(".jpg") ? project.coverImage.replace(".jpg", ".svg") : project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <AlertCircle className="w-4 h-4" />
                <span>The Challenge / Problem</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>Engineered Solution</span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Dual Surface Feature Showcase for L'Horizon Azure */}
          {project.guestPortalFeatures && project.operationsFeatures && (
            <div className="space-y-6 mb-8">
              <div className="p-5 rounded-2xl bg-accent-violet/10 border border-accent-violet/30">
                <h4 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Compass className="w-5 h-5 text-accent-cyan" />
                  <span>Guest Portal Interactive Features</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.guestPortalFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-accent-cyan font-mono mt-0.5">▹</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/30">
                <h4 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-3">
                  <Building2 className="w-5 h-5 text-accent-violet" />
                  <span>Owner &amp; Staff Operations Suite</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.operationsFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                      <span className="text-accent-violet font-mono mt-0.5">▹</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Key Implemented Features for all other projects */}
          {!project.guestPortalFeatures && (
            <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
              <h4 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-3">
                <Layers className="w-5 h-5 text-accent-cyan" />
                <span>Key Architectural Capabilities</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="text-accent-cyan font-mono mt-0.5">▹</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Architecture Details */}
          <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
            <h4 className="font-heading text-base font-bold text-white flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-accent-violet" />
              <span>Technical Architecture &amp; Implementation</span>
            </h4>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {project.architectureDetails}
            </p>
          </div>

          {/* Tech Stack Badges */}
          <div className="mb-8">
            <h4 className="font-mono text-xs font-bold text-text-secondary uppercase mb-3">
              Technologies &amp; Protocols Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/5 border border-white/10 text-white"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex items-center gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-cyan hover:opacity-95 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Project</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs text-text-secondary hover:text-white glass-panel border border-white/10 hover:border-white/30 transition-all"
                >
                  <Github className="w-4 h-4" />
                  <span>Inspect Source Code</span>
                </a>
              )}
              {!project.liveUrl && (
                <span className="font-mono text-xs text-amber-400 bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
                  ⚙ In Active Development • SIH 2026 Phase
                </span>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs text-text-secondary hover:text-white font-mono transition-colors"
            >
              Close Window [Esc]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}


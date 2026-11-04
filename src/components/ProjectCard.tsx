"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Github, Eye, Sparkles, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const isSpotlight = project.isFeatured;

  return (
    <div
      className={`group relative rounded-3xl overflow-hidden glass-panel border transition-all duration-500 flex flex-col justify-between ${
        isSpotlight
          ? "border-accent-cyan/40 bg-gradient-to-b from-[#101736] to-[#0A0D22] shadow-[0_0_35px_-5px_rgba(0,240,255,0.2)] md:col-span-2 lg:col-span-2"
          : "border-white/10 hover:border-accent-violet/50 hover:shadow-glow-violet bg-[#0E122A]"
      }`}
    >
      {/* Top Banner Tag */}
      {isSpotlight && (
        <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/50 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-accent-cyan tracking-wider uppercase">
            FLAGSHIP ARCHITECTURE
          </span>
        </div>
      )}

      {/* Cover Image */}
      <div className={`relative w-full overflow-hidden bg-background ${isSpotlight ? "h-64 sm:h-80" : "h-52 sm:h-60"}`}>
        <Image
          src={project.coverImage.endsWith(".jpg") ? project.coverImage.replace(".jpg", ".svg") : project.coverImage}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E122A] via-[#0E122A]/40 to-transparent" />

        {/* Floating Status Pill */}
        <div className="absolute top-4 right-4 z-20">
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md ${
              project.status === "Live"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                : "bg-amber-500/20 text-amber-400 border border-amber-500/40"
            }`}
          >
            ● {project.status}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="font-mono text-xs text-accent-cyan uppercase tracking-wider mb-2">
            {project.category}
          </div>

          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors mb-1 flex items-center justify-between">
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </h3>

          <p className="font-mono text-xs text-text-secondary/80 mb-3">
            {project.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Feature Bullets */}
          <div className="space-y-2 mb-6">
            {project.keyFeatures.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                <span className="text-accent-cyan font-mono mt-0.5">▹</span>
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Badges & Actions */}
        <div>
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/5 border border-white/10 text-white/90"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-white/10">
            {/* View Details */}
            <button
              onClick={() => onSelect(project)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-white glass-panel border border-white/10 hover:border-accent-cyan/60 hover:text-accent-cyan transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>View Details</span>
            </button>

            {/* Live Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs text-white bg-gradient-to-r from-accent-violet to-accent-cyan hover:opacity-90 shadow-glow-cyan transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Project</span>
              </a>
            )}

            {/* GitHub Repo */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub source code for ${project.title}`}
                className="p-2.5 rounded-xl glass-panel border border-white/10 text-text-secondary hover:text-white hover:border-white/30 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


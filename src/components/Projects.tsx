"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filter, setFilter] = useState<"All" | "Live" | "Full-Stack" | "FinTech">("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Live") return project.status === "Live";
    if (filter === "Full-Stack") return project.category.includes("Full-Stack");
    if (filter === "FinTech") return project.category.includes("FinTech");
    return true;
  });

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet font-mono text-xs tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE // PRODUCTION APPS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-cyan">Projects.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Real-world full-stack web platforms and ambitious hackathon architectures engineered with modern TypeScript frameworks, reactive interfaces, and scalable databases.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {(["All", "Live", "Full-Stack", "FinTech"] as const).map((cat) => {
            const isSelected = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual"
                    : "text-text-secondary hover:text-white glass-panel border border-white/5 hover:border-white/20"
                }`}
              >
                {cat === "All" ? "All Featured (3)" : cat}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Detailed Modal View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  FileCode,
  FileJson,
  Atom,
  FileCode2,
  Palette,
  Layout,
  Server,
  Cpu,
  Network,
  Database,
  Layers,
  HardDrive,
  Zap,
  GitBranch,
  Github,
  TerminalSquare,
  Globe,
  Send,
  Boxes
} from "lucide-react";
import { skillsData, skillCategories, SkillCategory, SkillItem } from "@/data/skills";
import { TechnologyUniverse } from "./TechnologyUniverse";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  FileCode: <FileCode className="w-5 h-5" />,
  FileJson: <FileJson className="w-5 h-5" />,
  Atom: <Atom className="w-5 h-5" />,
  FileCode2: <FileCode2 className="w-5 h-5" />,
  Palette: <Palette className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Database: <Database className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  HardDrive: <HardDrive className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  GitBranch: <GitBranch className="w-5 h-5" />,
  Github: <Github className="w-5 h-5" />,
  TerminalSquare: <TerminalSquare className="w-5 h-5" />,
  Globe: <Globe className="w-5 h-5" />,
  Send: <Send className="w-5 h-5" />
};

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("All");

  const filteredSkills = skillsData.filter((skill) => {
    if (selectedCategory === "All") return true;
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-wider mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>ARSENAL // ARCHITECTURE &amp; TOOLING</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-primary">Arsenal.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            A structured matrix of languages, client frameworks, server runtimes, databases and developer tooling actively used to engineer software.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillCategories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual"
                    : "text-text-secondary hover:text-white glass-panel border border-white/5 hover:border-white/20"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Skill Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group relative p-5 rounded-2xl glass-panel-hover glass-panel border border-white/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-cyan group-hover:text-accent-violet group-hover:scale-110 transition-all duration-300">
                      {iconMap[skill.icon] || <Code2 className="w-5 h-5" />}
                    </div>
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-text-secondary border border-white/10">
                      {skill.category}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-white group-hover:text-accent-cyan transition-colors">
                    {skill.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-accent-violet/80">
                  <span>Stack Module</span>
                  <span className="text-white/40">● verified</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Constellation Canvas Component */}
        <div className="mt-12">
          <TechnologyUniverse />
        </div>

      </div>
    </section>
  );
}


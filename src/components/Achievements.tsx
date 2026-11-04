"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, Award, ExternalLink, Calendar, PlusCircle, CheckCircle, Sparkles, Inbox } from "lucide-react";
import { achievementsData, achievementCategories, AchievementCategory } from "@/data/achievements";

export function Achievements() {
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>("All");

  const filteredItems = achievementsData.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section id="achievements" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet font-mono text-xs tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES &amp; RECOGNITION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Achievements &amp; <span className="text-gradient-cyan">Certifications.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Documenting hackathon initiatives, technical events, certifications, and leadership milestones. Fully honest, transparent, and updated as credentials are confirmed.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {achievementCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all duration-300 ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-accent-violet to-accent-cyan shadow-glow-dual"
                    : "text-text-secondary hover:text-white glass-panel border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Cards or Meaningful Empty State */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <AnimatePresence>
              {filteredItems.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="p-6 sm:p-8 rounded-3xl glass-panel-hover glass-panel border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-[11px] font-mono font-semibold">
                        {item.category}
                      </span>
                      {item.badge && (
                        <span className="text-[11px] font-mono text-accent-violet bg-accent-violet/10 px-2.5 py-1 rounded-lg border border-accent-violet/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-1">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs font-mono text-text-secondary mb-4">
                      <span className="text-white/80">{item.organization}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-accent-cyan">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    {item.verificationUrl ? (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-cyan hover:underline"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Verify Credential</span>
                      </a>
                    ) : (
                      <span className="font-mono text-[11px] text-text-secondary/60">
                        In Progress / Verified by Portfolio
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          /* Graceful Empty State */
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto p-8 rounded-3xl glass-panel border border-white/10 text-center"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 mx-auto flex items-center justify-center text-text-secondary mb-4">
              <Inbox className="w-6 h-6" />
            </div>
            <h4 className="font-heading text-base font-bold text-white mb-2">
              No Entries in {activeCategory} Yet
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              New certifications, hackathon results, and leadership roles are added to this centralized hub as they are achieved during Shyam&apos;s second-year engineering tenure.
            </p>
          </motion.div>
        )}

      </div>
    </section>
  );
}


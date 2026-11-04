"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Calendar, CheckCircle2, Milestone } from "lucide-react";
import { journeyTimeline } from "@/data/education";

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="w-5 h-5 text-accent-cyan" />,
  Code: <Code className="w-5 h-5 text-accent-violet" />,
  Rocket: <Rocket className="w-5 h-5 text-emerald-400" />,
};

export function Journey() {
  return (
    <section id="journey" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-wider mb-3">
            <Milestone className="w-3.5 h-3.5" />
            <span>TRAJECTORY // CHRONOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineering <span className="text-gradient-primary">Journey.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            The ongoing evolution from core computer science abstractions to scalable real-world application architecture and future industry horizons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent hidden sm:block" />
          <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-violet via-accent-cyan to-transparent sm:hidden" />

          {/* Timeline Nodes */}
          <div className="space-y-12 sm:space-y-16">
            {journeyTimeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Marker Dot */}
                  <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-2xl glass-panel border border-accent-cyan/50 shadow-glow-cyan flex items-center justify-center z-20 bg-background-card">
                    {iconMap[item.icon] || <CheckCircle2 className="w-5 h-5 text-accent-cyan" />}
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="p-6 sm:p-8 rounded-3xl glass-panel-hover glass-panel border border-white/10 relative">
                      {/* Period Badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-violet/15 border border-accent-violet/30 text-accent-violet text-[11px] font-mono font-semibold">
                          <Calendar className="w-3 h-3" />
                          <span>{item.period}</span>
                        </span>
                        <span className="font-mono text-[11px] text-accent-cyan">
                          {item.badge}
                        </span>
                      </div>

                      {/* Titles */}
                      <h3 className="font-heading text-xl font-bold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-text-secondary/90 mb-4">
                        {item.subtitle}
                      </p>

                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Highlight Bullets */}
                      <div className="space-y-2 pt-4 border-t border-white/5">
                        {item.highlights.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-text-secondary">
                            <span className="text-accent-cyan font-mono mt-0.5">▸</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}


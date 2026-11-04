"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileDown, Terminal, ChevronRight } from "lucide-react";
import { profileData } from "@/data/profile";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section intersection spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Futuristic Brand Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="group flex items-center gap-2.5 z-50 focus:outline-none"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet via-accent-cyan to-accent-blue p-[1.5px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-background rounded-[10px] flex items-center justify-center">
              <span className="font-heading font-black text-sm tracking-tighter text-white group-hover:text-accent-cyan transition-colors">
                {profileData.brandInitials}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-sm tracking-wide text-white group-hover:text-accent-cyan transition-colors">
              SHYAM S. NAIR
            </span>
            <span className="font-mono text-[10px] text-accent-cyan/80 tracking-wider">
              DEV // PORTFOLIO
            </span>
          </div>
        </a>

        {/* Desktop Floating Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-navbar shadow-glass border border-white/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent-violet/30 to-accent-cyan/30 rounded-full border border-accent-cyan/40 shadow-glow-cyan"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Resume CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white overflow-hidden transition-all duration-300 bg-background-card hover:bg-background-cardHover border border-accent-violet/40 hover:border-accent-cyan hover:shadow-glow-cyan"
          >
            <FileDown className="w-3.5 h-3.5 text-accent-cyan group-hover:animate-bounce" />
            <span>Resume</span>
            <span className="font-mono text-[10px] text-accent-violet group-hover:text-accent-cyan">PDF</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden relative p-2 rounded-lg glass-panel border border-white/10 text-text-primary hover:text-accent-cyan transition-colors z-50"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Slide-Out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl glass-panel border border-accent-violet/30 shadow-2xl md:hidden max-h-[85vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              <div className="px-3 py-1 font-mono text-[11px] text-accent-cyan flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>NAVIGATION // DIRECTORY</span>
              </div>

              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-accent-violet/20 border border-accent-cyan/40 text-accent-cyan"
                        : "text-text-secondary hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-2">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-violet to-accent-cyan text-white text-xs font-bold shadow-glow-cyan"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}


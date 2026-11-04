"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2, MessageSquare, Github, Linkedin, Sparkles } from "lucide-react";
import { contactDetails, socialLinks } from "@/data/socialLinks";
import { profileData } from "@/data/profile";

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackMessage("");

    // Basic frontend checks
    if (!formData.fullName.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setStatus("error");
      setFeedbackMessage("Please provide a valid email address.");
      return;
    }
    if (!formData.subject.trim()) {
      setStatus("error");
      setFeedbackMessage("Please enter a subject.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setFeedbackMessage("Please write a message with at least 10 characters.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedbackMessage(data.message || "Message delivered successfully!");
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setFeedbackMessage(data.error || "An error occurred while submitting your message.");
      }
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage("Network error: Could not reach the server. Please email directly.");
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>COMMUNICATION PROTOCOL // COLLABORATE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Have an Idea? <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">Let&apos;s Build Something Great.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">
            Whether you represent a technology company offering an internship, need a fellow engineer for an ambitious hackathon project, or simply want to talk code — my inbox is always open.
          </p>
        </div>

        {/* 2-Column Grid: Coordinates & Submission Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Coordinates & Social Connect */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 bg-gradient-to-br from-[#10142C] to-[#0A0D20]">
              <h3 className="font-heading text-xl font-bold text-white mb-4">
                Direct Contact Channels
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                Fastest responses via email or LinkedIn. Open to discussions regarding student internships, software development roles, and hackathons.
              </p>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-accent-cyan/40 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-secondary uppercase block">
                      Email Address
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white group-hover:text-accent-cyan transition-colors">
                      {contactDetails.email}
                    </span>
                  </div>
                </a>

                {contactDetails.phone && (
                  <a
                    href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-400/40 hover:bg-white/[0.06] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-text-secondary uppercase block">
                        Contact Number
                      </span>
                      <span className="font-mono text-xs sm:text-sm text-white group-hover:text-emerald-400 transition-colors">
                        {contactDetails.phone}
                      </span>
                    </div>
                  </a>
                )}

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-accent-violet/10 border border-accent-violet/30 flex items-center justify-center text-accent-violet">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-text-secondary uppercase block">
                      Location
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white">
                      {contactDetails.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="font-mono text-xs text-text-secondary uppercase tracking-wider block mb-3">
                  Connect on Platforms
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const isGh = item.platform === "GitHub";
                    const isLi = item.platform === "LinkedIn";
                    return (
                      <a
                        key={item.platform}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel border border-white/10 hover:border-accent-cyan hover:text-accent-cyan transition-all text-xs text-white"
                      >
                        {isGh && <Github className="w-4 h-4 text-accent-cyan" />}
                        {isLi && <Linkedin className="w-4 h-4 text-accent-violet" />}
                        {!isGh && !isLi && <Sparkles className="w-4 h-4 text-emerald-400" />}
                        <span>{item.platform}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Status Notice */}
              <div className="mt-6 p-4 rounded-2xl bg-accent-violet/10 border border-accent-violet/20 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {contactDetails.status}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-accent-violet/30 bg-[#0C1028] shadow-2xl relative">
              <h3 className="font-heading text-xl font-bold text-white mb-1">
                Transmit a Direct Message
              </h3>
              <p className="font-mono text-xs text-text-secondary mb-6">
                All inquiries arrive securely in Shyam&apos;s developer feed.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field for bot suppression */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block font-mono text-xs text-text-secondary uppercase mb-1.5">
                      Full Name <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Namit Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-white/10 text-white text-xs sm:text-sm placeholder-text-secondary/40 focus:outline-none focus:border-accent-cyan focus:shadow-glow-cyan transition-all"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-mono text-xs text-text-secondary uppercase mb-1.5">
                      Email Address <span className="text-accent-cyan">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. namit@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-background/90 border border-white/10 text-white text-xs sm:text-sm placeholder-text-secondary/40 focus:outline-none focus:border-accent-cyan focus:shadow-glow-cyan transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-mono text-xs text-text-secondary uppercase mb-1.5">
                    Subject / Discussion Topic <span className="text-accent-cyan">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Internship Inquiry / Hackathon Teammate"
                    className="w-full px-4 py-3 rounded-xl bg-background/90 border border-white/10 text-white text-xs sm:text-sm placeholder-text-secondary/40 focus:outline-none focus:border-accent-cyan focus:shadow-glow-cyan transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-mono text-xs text-text-secondary uppercase mb-1.5">
                    Message <span className="text-accent-cyan">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your project, timeline, or internship requirements..."
                    className="w-full px-4 py-3 rounded-xl bg-background/90 border border-white/10 text-white text-xs sm:text-sm placeholder-text-secondary/40 focus:outline-none focus:border-accent-cyan focus:shadow-glow-cyan transition-all resize-y"
                  />
                </div>

                {/* Feedback Notification */}
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-xs text-emerald-400 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-400 flex items-start gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{feedbackMessage}</span>
                  </motion.div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 px-6 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-accent-violet via-indigo-600 to-accent-cyan shadow-glow-dual hover:opacity-95 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-accent-cyan" />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}


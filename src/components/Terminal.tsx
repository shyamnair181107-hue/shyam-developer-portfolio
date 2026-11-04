"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { skillsData } from "@/data/skills";
import { projectsData } from "@/data/projects";
import { contactDetails } from "@/data/socialLinks";

interface CommandLog {
  id: string;
  command: string;
  output: React.ReactNode;
}

export function Terminal() {
  const [inputVal, setInputVal] = useState("");
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      id: "initial",
      command: "welcome",
      output: (
        <div className="space-y-1 text-text-secondary text-xs">
          <p className="text-accent-cyan font-mono font-bold">
            ⚡ Shyam Sivadasan Nair Developer Workstation CLI [v2.4.0]
          </p>
          <p>Type <span className="text-accent-violet font-semibold">help</span> or click quick actions below to query portfolio data.</p>
        </div>
      )
    }
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const runCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let result: React.ReactNode;

    switch (trimmed) {
      case "help":
        result = (
          <div className="text-xs space-y-1 font-mono text-text-secondary">
            <p className="text-white font-bold">AVAILABLE COMMANDS:</p>
            <p><span className="text-accent-cyan">whoami</span> — Identity &amp; current academic role</p>
            <p><span className="text-accent-cyan">about</span> — Engineering philosophy &amp; focus areas</p>
            <p><span className="text-accent-cyan">skills</span> — Verified technical arsenal summary</p>
            <p><span className="text-accent-cyan">projects</span> — Key production applications</p>
            <p><span className="text-accent-cyan">contact</span> — Get in touch &amp; social coordinates</p>
            <p><span className="text-accent-cyan">clear</span> — Clear terminal output history</p>
          </div>
        );
        break;

      case "whoami":
        result = (
          <div className="text-xs space-y-1.5 font-mono">
            <p className="text-white font-bold">{profileData.fullName}</p>
            <p className="text-accent-cyan">{profileData.professionalRole}</p>
            <p className="text-text-secondary">{profileData.academicLevel} • {profileData.branch} • {profileData.country}</p>
            <p className="text-accent-violet italic">&ldquo;{profileData.primaryTagline}&rdquo;</p>
          </div>
        );
        break;

      case "about":
        result = (
          <div className="text-xs space-y-2 text-text-secondary">
            {profileData.aboutIntro.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        );
        break;

      case "skills":
        result = (
          <div className="text-xs space-y-2 font-mono">
            <div>
              <span className="text-accent-violet font-bold">Programming: </span>
              <span className="text-white">C, Python, JavaScript</span>
            </div>
            <div>
              <span className="text-accent-cyan font-bold">Frontend: </span>
              <span className="text-white">React, TypeScript, Tailwind CSS, HTML5, CSS3</span>
            </div>
            <div>
              <span className="text-accent-blue font-bold">Backend &amp; DB: </span>
              <span className="text-white">Node.js, Express.js, REST APIs, MySQL, PostgreSQL, SQLite, Supabase</span>
            </div>
            <div>
              <span className="text-emerald-400 font-bold">Tools: </span>
              <span className="text-white">Git, GitHub, VS Code, Vercel, Postman</span>
            </div>
          </div>
        );
        break;

      case "projects":
        result = (
          <div className="text-xs space-y-2.5 font-mono">
            {projectsData.map((p) => (
              <div key={p.id} className="p-2 rounded bg-white/5 border border-white/10">
                <div className="flex items-center justify-between text-white font-bold">
                  <span>{p.title}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                    p.status === "Live" ? "bg-emerald-500/20 text-emerald-300" : "bg-amber-500/20 text-amber-300"
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-text-secondary text-[11px] mt-1">{p.description}</p>
                <p className="text-accent-cyan text-[10px] mt-1">Stack: {p.technologies.slice(0, 4).join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        result = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-white font-bold">COMMUNICATION CHANNELS:</p>
            <p>Email: <a href={`mailto:${contactDetails.email}`} className="text-accent-cyan hover:underline">{contactDetails.email}</a></p>
            {contactDetails.phone && (
              <p>Phone: <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className="text-emerald-400 hover:underline">{contactDetails.phone}</a></p>
            )}
            <p>GitHub: <a href={contactDetails.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:underline">{contactDetails.githubUrl}</a></p>
            <p>LinkedIn: <a href={contactDetails.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-accent-violet hover:underline">LinkedIn Profile</a></p>
            <p>Location: <span className="text-white">{contactDetails.location}</span></p>
            <p className="text-text-secondary">{contactDetails.status}</p>
          </div>
        );
        break;

      case "clear":
        setLogs([]);
        return;

      default:
        result = (
          <p className="text-xs text-rose-400 font-mono">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-white underline cursor-pointer" onClick={() => runCommand("help")}>help</span> to see valid commands.
          </p>
        );
        break;
    }

    setLogs((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmd,
        output: result,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    runCommand(inputVal);
    setInputVal("");
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-accent-violet/30 shadow-2xl overflow-hidden font-mono text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#090C1A] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-text-secondary font-mono ml-2 flex items-center gap-1.5">
            <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan" />
            shyam@workstation: ~
          </span>
        </div>
        <div className="text-[11px] text-accent-violet/70 font-mono">zsh • interactive</div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 max-h-80 overflow-y-auto space-y-3.5 bg-background-card/90">
        {logs.map((log) => (
          <div key={log.id} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-accent-cyan font-bold">&gt;</span>
              <span className="text-accent-violet font-semibold">{log.command}</span>
            </div>
            <div className="pl-4">{log.output}</div>
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Quick Interactive Command Buttons */}
      <div className="px-4 py-2 bg-[#090C1A] border-t border-white/5 flex flex-wrap items-center gap-1.5 text-[11px]">
        <span className="text-text-secondary mr-1">Quick run:</span>
        {["whoami", "about", "skills", "projects", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => runCommand(cmd)}
            className="px-2 py-0.5 rounded bg-white/5 hover:bg-accent-violet/20 border border-white/10 hover:border-accent-cyan/50 text-accent-cyan hover:text-white transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center px-4 py-2.5 bg-background border-t border-white/10">
        <span className="text-accent-cyan font-bold text-xs mr-2 font-mono">&gt;</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type a command (e.g. whoami, projects, skills)..."
          className="flex-1 bg-transparent text-xs text-white placeholder-text-secondary/50 focus:outline-none font-mono"
        />
        <button
          type="submit"
          className="p-1 rounded text-accent-cyan hover:text-white hover:bg-white/10 transition-colors"
          title="Execute Command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
}


"use client";

import React, { useState, useRef, useEffect } from "react";
import { Sparkles, Info } from "lucide-react";

interface TechNode {
  id: string;
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools";
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
}

const initialNodes: TechNode[] = [
  { id: "c", name: "C", category: "Languages", x: 120, y: 150, vx: 0.2, vy: -0.15, radius: 24, color: "#3B82F6" },
  { id: "python", name: "Python", category: "Languages", x: 260, y: 90, vx: -0.2, vy: 0.18, radius: 26, color: "#EAB308" },
  { id: "js", name: "JavaScript", category: "Languages", x: 200, y: 220, vx: 0.15, vy: 0.15, radius: 25, color: "#F59E0B" },
  { id: "ts", name: "TypeScript", category: "Frontend", x: 380, y: 140, vx: -0.12, vy: -0.2, radius: 28, color: "#60A5FA" },
  { id: "react", name: "React", category: "Frontend", x: 490, y: 220, vx: 0.18, vy: 0.12, radius: 30, color: "#00F0FF" },
  { id: "next", name: "Next.js", category: "Frontend", x: 620, y: 130, vx: -0.15, vy: 0.15, radius: 28, color: "#F5F7FF" },
  { id: "tailwind", name: "Tailwind", category: "Frontend", x: 420, y: 310, vx: 0.1, vy: -0.15, radius: 24, color: "#2DD4BF" },
  { id: "node", name: "Node.js", category: "Backend", x: 580, y: 280, vx: -0.15, vy: -0.1, radius: 28, color: "#22C55E" },
  { id: "express", name: "Express", category: "Backend", x: 720, y: 220, vx: 0.12, vy: 0.18, radius: 24, color: "#94A3B8" },
  { id: "rest", name: "REST APIs", category: "Backend", x: 680, y: 340, vx: -0.18, vy: -0.12, radius: 24, color: "#8B5CF6" },
  { id: "mysql", name: "MySQL", category: "Database", x: 800, y: 120, vx: 0.15, vy: 0.1, radius: 26, color: "#38BDF8" },
  { id: "postgres", name: "PostgreSQL", category: "Database", x: 840, y: 270, vx: -0.12, vy: 0.15, radius: 26, color: "#818CF8" },
  { id: "supabase", name: "Supabase", category: "Database", x: 920, y: 180, vx: 0.1, vy: -0.12, radius: 24, color: "#34D399" },
  { id: "git", name: "Git", category: "Tools", x: 300, y: 350, vx: -0.15, vy: -0.15, radius: 24, color: "#F97316" },
  { id: "vercel", name: "Vercel", category: "Tools", x: 770, y: 390, vx: 0.12, vy: -0.1, radius: 25, color: "#E2E8F0" },
];

export function TechnologyUniverse() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeNode, setActiveNode] = useState<TechNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 1000, height: 460 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 1000);
    let height = (canvas.height = 460);
    setDimensions({ width, height });

    // Scale initial nodes to canvas size
    const nodes = initialNodes.map((n) => ({
      ...n,
      x: (n.x / 1000) * width,
      y: (n.y / 460) * height,
    }));

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 460;
      setDimensions({ width, height });
    };

    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect nodes with light beams
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.beginPath();
            const alpha = 0.25 * (1 - dist / 180);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & render nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce gently off canvas bounds
        if (n.x - n.radius < 10 || n.x + n.radius > width - 10) n.vx *= -1;
        if (n.y - n.radius < 10 || n.y + n.radius > height - 10) n.vy *= -1;

        // Glow ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius + 4, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.12;
        ctx.fill();

        // Core Circle
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#0D1126";
        ctx.globalAlpha = 0.9;
        ctx.fill();

        // Stroke
        ctx.strokeStyle = n.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = 0.8;
        ctx.stroke();

        // Label
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#F5F7FF";
        ctx.font = "bold 11px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.name, n.x, n.y);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Canvas click / hover / touch detection
    const handleInteract = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = clientX - rect.left;
      const mouseY = clientY - rect.top;

      let found: TechNode | null = null;
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const dx = mouseX - n.x;
        const dy = mouseY - n.y;
        if (Math.sqrt(dx * dx + dy * dy) < n.radius + 12) {
          found = n;
          break;
        }
      }
      setActiveNode(found);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleInteract(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        handleInteract(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchstart", handleTouch, { passive: true });
    canvas.addEventListener("touchmove", handleTouch, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchstart", handleTouch);
      canvas.removeEventListener("touchmove", handleTouch);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="w-full relative rounded-2xl glass-panel border border-accent-cyan/20 p-4 sm:p-6 overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <h3 className="font-heading font-bold text-base text-white">
            Interactive Technology Constellation
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-text-secondary">
          <Info className="w-3.5 h-3.5 text-accent-violet" />
          <span>Hover or tap any celestial node to inspect</span>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[400px] sm:h-[460px] rounded-xl overflow-hidden bg-background/80 border border-white/5">
        <canvas ref={canvasRef} className="block w-full h-full cursor-pointer" />

        {/* Selected Node HUD Badge */}
        {activeNode && (
          <div className="absolute top-4 left-4 p-3 rounded-xl glass-panel border border-accent-cyan/50 shadow-glow-cyan pointer-events-none transition-all">
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: activeNode.color }}
              />
              <span className="font-heading font-bold text-sm text-white">
                {activeNode.name}
              </span>
            </div>
            <p className="text-[11px] font-mono text-accent-cyan mt-0.5">
              Category: {activeNode.category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


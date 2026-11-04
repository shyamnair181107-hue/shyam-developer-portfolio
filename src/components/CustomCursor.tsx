"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const springConfig = { damping: 24, stiffness: 280, mass: 0.6 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    // Only enable custom cursor if device has fine pointing device (desktop mouse)
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasFinePointer) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") !== null ||
          target.closest("a") !== null ||
          target.getAttribute("role") === "button" ||
          window.getComputedStyle(target).cursor === "pointer";
        setIsPointer(isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden hidden md:block">
      {/* Outer Follower Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-accent-cyan/60 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 48 : 28,
          height: isPointer ? 48 : 28,
          backgroundColor: isPointer ? "rgba(0, 240, 255, 0.08)" : "transparent",
          boxShadow: isPointer ? "0 0 15px rgba(0, 240, 255, 0.4)" : "none",
        }}
      />
      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent-violet pointer-events-none shadow-[0_0_8px_#8B5CF6]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}


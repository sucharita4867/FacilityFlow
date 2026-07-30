"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsVisibleDesktop] = useState(false);

  // Mouse Coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth Spring Physics (Zero lag, 60fps)
  const springConfig = { damping: 28, stiffness: 450, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkDesktop = () => {
      const isPointerFine = window.matchMedia("(pointer: fine)").matches;
      const isLargeScreen = window.innerWidth >= 1024;
      setIsVisibleDesktop(isPointerFine && isLargeScreen);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;

      const isButton =
        target.closest("button") ||
        target.closest("a")?.classList.contains("btn") ||
        target.getAttribute("role") === "button";

      const isLink = target.closest("a") && !isButton;

      const isImage =
        target.tagName === "IMG" ||
        target.closest(".group-image") ||
        target.closest("[data-cursor='image']");

      const isCard =
        target.closest(".card") ||
        target.closest("[data-cursor='card']") ||
        target.closest(".group");

      if (isButton) {
        setCursorVariant("button");
        setCursorText("");
      } else if (isImage) {
        setCursorVariant("image");
        setCursorText("View");
      } else if (isCard && !isLink) {
        setCursorVariant("card");
        setCursorText("Explore");
      } else if (isLink) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDesktop);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isDesktop) return null;

  // Outer Ring Variants (Electric Cyan Theme)
  const ringVariants = {
    default: {
      height: 34,
      width: 34,
      backgroundColor: "rgba(6, 182, 212, 0)",
      borderColor: "#06b6d4", // Electric Cyan Ring
      borderWidth: 1.5,
    },
    button: {
      height: 48,
      width: 48,
      backgroundColor: "rgba(37, 99, 235, 0.15)", // Blue tint
      borderColor: "#3b82f6", // Bright Blue
      borderWidth: 2,
      scale: 1.1,
    },
    link: {
      height: 42,
      width: 42,
      backgroundColor: "rgba(6, 182, 212, 0.1)",
      borderColor: "#06b6d4",
      borderWidth: 1.5,
    },
    image: {
      height: 72,
      width: 72,
      backgroundColor: "rgba(6, 182, 212, 0.9)", // Solid Cyan View Badge
      borderColor: "#ffffff",
      borderWidth: 2,
    },
    card: {
      height: 64,
      width: 64,
      backgroundColor: "rgba(11, 31, 58, 0.9)", // Dark Navy matching theme
      borderColor: "#06b6d4",
      borderWidth: 1.5,
    },
  };

  // Center Dot Variants (White/Cyan Highlight)
  const dotVariants = {
    default: {
      height: 6,
      width: 6,
      backgroundColor: "#38bdf8", // Sky Blue Dot
      opacity: 1,
    },
    button: {
      height: 8,
      width: 8,
      backgroundColor: "#60a5fa",
      opacity: 1,
    },
    link: {
      height: 5,
      width: 5,
      backgroundColor: "#38bdf8",
      opacity: 1,
    },
    image: {
      height: 0,
      width: 0,
      opacity: 0,
    },
    card: {
      height: 0,
      width: 0,
      opacity: 0,
    },
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Smooth Ring */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          ...ringVariants[cursorVariant],
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        className="fixed top-0 left-0 flex items-center justify-center rounded-full shadow-lg shadow-cyan-500/20 backdrop-blur-[1px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`text-xs font-bold uppercase tracking-wider ${
              cursorVariant === "image" ? "text-slate-950" : "text-cyan-300"
            }`}
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center Small Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          ...dotVariants[cursorVariant],
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 800, damping: 35 }}
        className="fixed top-0 left-0 rounded-full shadow-sm shadow-cyan-400"
      />

      {/* Soft Ambient Cyan Glow */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 0.3 : 0,
          scale: cursorVariant === "button" ? 1.4 : 1,
        }}
        className="fixed top-0 left-0 -z-10 h-16 w-16 rounded-full bg-cyan-500/20 blur-xl pointer-events-none"
      />
    </div>
  );
}

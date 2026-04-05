import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type CursorState = "default" | "button" | "card";

// Generate stable random properties for the hovering particles
const HOVER_PARTICLES = Array.from({ length: 10 }).map((_, i) => {
  const angle = Math.random() * Math.PI * 2;
  const radius = Math.random() * 50 + 25; // 25px to 75px away
  return {
    id: i,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 1.5 + 1.5,
    xOffset: Math.cos(angle) * radius,
    yOffset: Math.sin(angle) * radius,
    orbitRadius: Math.random() * 20 + 10,
  };
});

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef<CursorState>("default");
  
  // React state only toggled once per enter/leave for performance
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    // Track cursor state separately from transform
    let dotScale = 1;
    let ringSize = 36;
    let ringOpacity = 0.45;
    let ringGlow = 0;

    const EASE = 0.11;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot snaps instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${dotScale})`;
      }
    };

    const tick = () => {
      // Smooth ring follow
      ringX = lerp(ringX, mouseX, EASE);
      ringY = lerp(ringY, mouseY, EASE);

      // Target values per state
      let targetRingSize = 36;
      let targetDotScale = 1;
      let targetRingOpacity = 0.45;
      let targetGlow = 0;

      const state = stateRef.current;
      if (state === "button") {
        targetRingSize = 56;
        targetDotScale = 2;
        targetRingOpacity = 0.9;
        targetGlow = 1;
      } else if (state === "card") {
        targetRingSize = 48;
        targetDotScale = 1.4;
        targetRingOpacity = 0.6;
        targetGlow = 0.4;
      }

      // Lerp all values
      dotScale = lerp(dotScale, targetDotScale, 0.14);
      ringSize = lerp(ringSize, targetRingSize, 0.12);
      ringOpacity = lerp(ringOpacity, targetRingOpacity, 0.12);
      ringGlow = lerp(ringGlow, targetGlow, 0.1);

      const glowValue = ringGlow * 18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${dotScale.toFixed(3)})`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
        // Set fixed dimensions and center children via flex inside ringRef
        ringRef.current.style.width = `${ringSize.toFixed(1)}px`;
        ringRef.current.style.height = `${ringSize.toFixed(1)}px`;
        ringRef.current.style.marginTop = `-${(ringSize / 2).toFixed(1)}px`;
        ringRef.current.style.marginLeft = `-${(ringSize / 2).toFixed(1)}px`;
        ringRef.current.style.borderColor = `rgba(255,26,26,${ringOpacity.toFixed(3)})`;
        ringRef.current.style.boxShadow = ringGlow > 0.05
          ? `0 0 ${glowValue.toFixed(1)}px rgba(255,26,26,${(ringGlow * 0.5).toFixed(3)})`
          : "none";
      }

      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    raf = requestAnimationFrame(tick);

    // State detection via event delegation — single source of truth
    const handleEnter = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el.closest("button, a, [role=button]")) {
        stateRef.current = "button";
        setIsHovering(true);
      } else if (el.closest("[data-cursor=card]")) {
        stateRef.current = "card";
        setIsHovering(true);
      }
    };
    const handleLeave = () => {
      stateRef.current = "default";
      setIsHovering(false);
    };

    document.addEventListener("mouseover", handleEnter, { passive: true });
    document.addEventListener("mouseout", handleLeave, { passive: true });

    // Hide cursor on leave, show on enter
    document.addEventListener("mouseleave", () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    });
    document.addEventListener("mouseenter", () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleEnter);
      document.removeEventListener("mouseout", handleLeave);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "#ff1a1a",
          boxShadow: "0 0 6px rgba(255,26,26,0.8)",
          willChange: "transform",
          transition: "opacity 0.2s ease",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center transform-gpu"
        style={{
          width: "36px",
          height: "36px",
          border: "1.5px solid rgba(255,26,26,0.45)",
          willChange: "transform, width, height",
          transition: "opacity 0.2s ease",
        }}
      >
        <AnimatePresence>
          {isHovering && HOVER_PARTICLES.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
                x: [p.xOffset * 0.2, p.xOffset, p.xOffset + p.orbitRadius],
                y: [p.yOffset * 0.2, p.yOffset, p.yOffset - p.orbitRadius],
              }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.3 } }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                background: "#ff1a1a",
                boxShadow: "0 0 8px rgba(255,26,26,0.8)",
              }}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

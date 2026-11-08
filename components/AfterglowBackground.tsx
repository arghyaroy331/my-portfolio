"use client";

import { useEffect, useRef } from "react";

export default function AfterglowBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorLightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const cursorLight = cursorLightRef.current;
    if (!container) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let mouseX = -1000;
    let mouseY = -1000;
    let curCursorX = -1000;
    let curCursorY = -1000;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 45;
      targetY = (e.clientY / innerHeight - 0.5) * 35;

      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Parallax lerp
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      if (container) {
        container.style.setProperty("--afterglow-offset-x", `${currentX}px`);
        container.style.setProperty("--afterglow-offset-y", `${currentY}px`);
      }

      // Cursor spotlight lerp
      if (cursorLight && mouseX > -500) {
        curCursorX += (mouseX - curCursorX) * 0.08;
        curCursorY += (mouseY - curCursorY) * 0.08;
        cursorLight.style.transform = `translate3d(${curCursorX}px, ${curCursorY}px, 0) translate(-50%, -50%)`;
        cursorLight.style.opacity = "1";
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="afterglow-root fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
      style={
        {
          "--afterglow-offset-x": "0px",
          "--afterglow-offset-y": "0px",
        } as React.CSSProperties
      }
    >
      {/* Base Canvas: Signature Dribbble #171717 Dark / Crisp #F8FAFC Light */}
      <div className="absolute inset-0 bg-[#F8FAFC] dark:bg-[#171717] transition-colors duration-300" />

      {/* Layer 1: Interactive Dynamic Cursor Ambient Spotlight */}
      <div
        ref={cursorLightRef}
        className="pointer-events-none fixed top-0 left-0 w-[480px] h-[480px] rounded-full opacity-0 transition-opacity duration-500 will-change-transform z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(128, 60, 255, 0.16) 0%, rgba(99, 102, 241, 0.08) 40%, transparent 70%)",
          filter: "blur(65px)",
        }}
      />

      {/* Layer 2: Floating Atmospheric Purple Ambient Orbs (Mario Šimić signature) */}
      <div className="dribbble-orb dribbble-orb-1" />
      <div className="dribbble-orb dribbble-orb-2" />
      <div className="dribbble-orb dribbble-orb-3" />

      {/* Layer 3: Central Ambient Spotlight behind hero content */}
      <div className="afterglow-center-spotlight" />

      {/* Layer 4: Subtle Curved Geometric Shadow Folds */}
      <div className="afterglow-curved-falloff" />

      {/* Layer 6: Cinematic Vignette (keeps contrast crisp around edges) */}
      <div className="afterglow-vignette" />
    </div>
  );
}

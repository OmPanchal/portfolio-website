"use client";

import { useEffect, useRef } from "react";

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let screenWidth, screenHeight;
    let animationFrameId;

    let staticStars = [];
    let sun = { radius: 80, pulsePhase: 0 };
    let moon = { radius: 60, craters: [] };

    // Define 60 foundational star slots; visibility will be altered programmatically
    const MAX_STARS = 400;

    function initializeOrResize() {
      screenWidth = canvas.width = window.innerWidth;
      screenHeight = canvas.height = window.innerHeight;
      generateStaticCelestialBodies();
    }

    function generateStaticCelestialBodies() {
      // Pre-generate stars with fixed coordinates so they don't jump around
      staticStars = [];
      for (let i = 0; i < MAX_STARS; i++) {
        staticStars.push({
          x: Math.random() * screenWidth,
          y: Math.random() * screenHeight,
          radius: Math.random() * 1.2 + 0.4,
          baseOpacity: Math.random() * 0.6 + 0.4,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Pre-bake standard moon craters
      moon.craters = [
        { relX: -12, relY: -8, r: 6, alpha: 0.12 },
        { relX: -4, relY: 12, r: 10, alpha: 0.15 },
        { relX: 14, relY: -4, r: 5, alpha: 0.1 },
        { relX: 8, relY: 16, r: 8, alpha: 0.14 },
      ];
    }

    // --- MAIN DYNAMIC ENGINE LOOP ---
    function updateAndDraw() {
      // 1. Calculate Clock Metrics
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // Map entire 24hr loop perfectly between 0.0 and 1.0 (0.0 = Midnight, 0.5 = Noon)
      const dayProgress = (hours * 3600 + minutes * 60 + seconds) / 86400;

      // 2. Compute Sky Lighting Archetypes & Interpolate Background
      let skyColor = "#030308"; // Default night
      let starVisibilityMultiplier = 1; // Full star load at night

      if (dayProgress >= 0.25 && dayProgress < 0.5) {
        // MORNING TO NOON (06:00 - 12:00)
        // Transition stars away, shift sky color toward clear daylight blue
        const p = (dayProgress - 0.25) / 0.25; // 0 to 1 scaling factor
        starVisibilityMultiplier = 1 - p;
        skyColor = interpolateColors("#0c0c1e", "#3a7bd5", p);
      } else if (dayProgress >= 0.5 && dayProgress < 0.75) {
        // NOON TO EVENING (12:00 - 18:00)
        // Stars completely hidden, sky shift from deep blue to sunset golden amber
        const p = (dayProgress - 0.5) / 0.25;
        starVisibilityMultiplier = 0;
        skyColor = interpolateColors("#3a7bd5", "#1a0f2e", p); // Moves toward deep twilight dusk
      } else if (dayProgress >= 0.75 && dayProgress <= 1.0) {
        // SUNSET TO MIDNIGHT (18:00 - 00:00)
        // Bring stars back on-screen, fade to pitch-dark void
        const p = (dayProgress - 0.75) / 0.25;
        starVisibilityMultiplier = p;
        skyColor = interpolateColors("#1a0f2e", "#030308", p);
      } else {
        // MIDNIGHT TO DAWN (00:00 - 06:00)
        starVisibilityMultiplier = 1;
        skyColor = "#030308";
      }

      // Draw the computed dynamic atmosphere frame
      ctx.fillStyle = skyColor;
      ctx.fillRect(0, 0, screenWidth, screenHeight);

      // 3. Render Stars dynamically utilizing visibility metrics
      if (starVisibilityMultiplier > 0) {
        staticStars.forEach((star) => {
          star.phase += star.twinkleSpeed;
          const opacityModifier = (Math.sin(star.phase) + 1) / 2;
          const dynamicOpacity =
            star.baseOpacity *
            (0.2 + opacityModifier * 0.8) *
            starVisibilityMultiplier;

          ctx.fillStyle = `rgba(255, 255, 255, ${dynamicOpacity})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // 4. Trace Orbit Coordinates (Elliptical Path Arc across sky)
      // Angle: 0 at midnight, Math.PI at Noon, Math.PI * 2 wrapping back around
      const orbitAngle = dayProgress * Math.PI * 2 - Math.PI / 2 + Math.PI;
      // Orbit math properties
      const centerX = screenWidth / 2;
      const centerY = screenHeight * 0.9; // Keeps the rotational peak high in the viewport
      const radiusX = screenWidth * 0.45;
      const radiusY = screenHeight * 0.65;

      // Calculate Sun Position Vector
      sun.x = centerX + Math.cos(orbitAngle) * radiusX;
      sun.y = centerY + Math.sin(orbitAngle) * radiusY;

      // Calculate Moon Position Vector (Offset by exactly 180 degrees / Math.PI)
      moon.x = centerX + Math.cos(orbitAngle + Math.PI) * radiusX;
      moon.y = centerY + Math.sin(orbitAngle + Math.PI) * radiusY;

      // 5. Draw Sun (Only compile calculations if its bounding box is near the viewport)
      if (sun.y < screenHeight + sun.radius * 3) {
        sun.pulsePhase += 0.005;
        const outerGlowRadius = sun.radius * 3.5 + Math.sin(sun.pulsePhase) * 6;
        const sunGradient = ctx.createRadialGradient(
          sun.x,
          sun.y,
          0,
          sun.x,
          sun.y,
          outerGlowRadius,
        );
        sunGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        sunGradient.addColorStop(0.1, "rgba(255, 245, 180, 0.95)");
        sunGradient.addColorStop(0.3, "rgba(255, 150, 0, 0.35)");
        sunGradient.addColorStop(1, "rgba(255, 60, 0, 0)");

        ctx.fillStyle = sunGradient;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, outerGlowRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Draw Moon (Only if it climbs above the display layout floor)
      if (moon.y < screenHeight + moon.radius * 2) {
        const moonGradient = ctx.createLinearGradient(
          moon.x - moon.radius,
          moon.y - moon.radius,
          moon.x + moon.radius * 0.4,
          moon.y + moon.radius * 0.4,
        );
        moonGradient.addColorStop(0, "#fbfbfd");
        moonGradient.addColorStop(0.5, "#dcdcdc");
        moonGradient.addColorStop(1, "#15151e");

        ctx.fillStyle = moonGradient;
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
        ctx.fill();

        // Render Craters with local space isolation mask
        ctx.save();
        ctx.beginPath();
        ctx.arc(moon.x, moon.y, moon.radius, 0, Math.PI * 2);
        ctx.clip();
        moon.craters.forEach((crater) => {
          const craterGradient = ctx.createRadialGradient(
            moon.x + crater.relX,
            moon.y + crater.relY,
            0,
            moon.x + crater.relX,
            moon.y + crater.relY,
            crater.r,
          );
          craterGradient.addColorStop(
            0,
            `rgba(40, 40, 50, ${crater.alpha * 1.8})`,
          );
          craterGradient.addColorStop(1, "rgba(255, 255, 255, 0.1)");
          ctx.fillStyle = craterGradient;
          ctx.beginPath();
          ctx.arc(
            moon.x + crater.relX,
            moon.y + crater.relY,
            crater.r,
            0,
            Math.PI * 2,
          );
          ctx.fill();
        });
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(updateAndDraw);
    }

    // Custom utility function to smoothly blend hex colors programmatically
    function interpolateColors(color1, color2, factor) {
      const r1 = parseInt(color1.substring(1, 3), 16);
      const g1 = parseInt(color1.substring(3, 5), 16);
      const b1 = parseInt(color1.substring(5, 7), 16);

      const r2 = parseInt(color2.substring(1, 3), 16);
      const g2 = parseInt(color2.substring(3, 5), 16);
      const b2 = parseInt(color2.substring(5, 7), 16);

      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));

      return `rgb(${r}, ${g}, ${b})`;
    }

    window.addEventListener("resize", initializeOrResize);
    initializeOrResize();
    animationFrameId = requestAnimationFrame(updateAndDraw);

    return () => {
      window.removeEventListener("resize", initializeOrResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

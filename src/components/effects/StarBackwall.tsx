"use client";

import { useEffect, useRef } from "react";

/* =========================================================
   PREMIUM CYBER-SPACE BACKWALL
   Effects:
   01. Deep cinematic black space
   02. Multi-layer stars with parallax
   03. Aurora / nebula ribbons
   04. Smart constellation lines
   05. Cursor energy lens
   06. Click ripple shockwave
   07. Scroll warp streaks
   08. Premium comet / meteor
   09. Floating cyber nodes
========================================================= */

type StarLayer = "far" | "mid" | "near";

type Star = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  phase: number;
  twinkle: number;
  driftX: number;
  driftY: number;
  layer: StarLayer;
  hue: number;
};

type Dust = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
};

type Comet = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  length: number;
  width: number;
  hue: number;
};

type Ripple = {
  x: number;
  y: number;
  radius: number;
  life: number;
  maxLife: number;
};

type CyberNode = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
  opacity: number;
  orbit: number;
};

type Spark = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
};

const CONFIG = {
  maxStars: 440,
  minStars: 170,
  maxDust: 95,
  maxCyberNodes: 12,
  maxSparks: 48,
  maxConstellationPoints: 78,
};

const GRID_CELL_SIZE = 190;
const MOUSE_SPARK_INTERVAL = 72;
const TARGET_FRAME_MS = 1000 / 45;

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function pickLayer(): StarLayer {
  const v = Math.random();
  if (v < 0.55) return "far";
  if (v < 0.86) return "mid";
  return "near";
}

function layerDepth(layer: StarLayer) {
  if (layer === "near") return 1;
  if (layer === "mid") return 0.58;
  return 0.24;
}

function layerParallax(layer: StarLayer) {
  if (layer === "near") return 62;
  if (layer === "mid") return 34;
  return 14;
}

function layerGlow(layer: StarLayer) {
  if (layer === "near") return 13;
  if (layer === "mid") return 8;
  return 4.5;
}

export default function StarBackwall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const starsRef = useRef<Star[]>([]);
  const dustRef = useRef<Dust[]>([]);
  const cometsRef = useRef<Comet[]>([]);
  const ripplesRef = useRef<Ripple[]>([]);
  const sparksRef = useRef<Spark[]>([]);
  const nodesRef = useRef<CyberNode[]>([]);

  const mouseRef = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    screenX: 0,
    screenY: 0,
    active: false,
  });

  const scrollRef = useRef({
    y: 0,
    targetY: 0,
    velocity: 0,
    lastScrollY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let resizeRaf = 0;
    let lastTime = performance.now();
    let cometTimer = 0;
    let nextCometDelay = rand(3600, 8800);
    let lastSparkTime = 0;

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    let currentDpr = Math.min(window.devicePixelRatio || 1, 2);

    let backgroundCache: HTMLCanvasElement | null = null;
    let vignetteCache: HTMLCanvasElement | null = null;

    const rebuildStaticCaches = (
      width: number,
      height: number,
      dpr: number,
    ) => {
      backgroundCache = document.createElement("canvas");
      backgroundCache.width = Math.floor(width * dpr);
      backgroundCache.height = Math.floor(height * dpr);

      const baseCtx = backgroundCache.getContext("2d", { alpha: false });
      if (baseCtx) {
        baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        baseCtx.fillStyle = "#000104";
        baseCtx.fillRect(0, 0, width, height);

        const centerGlow = baseCtx.createRadialGradient(
          width * 0.52,
          height * 0.42,
          0,
          width * 0.52,
          height * 0.42,
          Math.max(width, height) * 0.82,
        );

        centerGlow.addColorStop(0, "rgba(8, 24, 34, 0.34)");
        centerGlow.addColorStop(0.38, "rgba(2, 9, 16, 0.68)");
        centerGlow.addColorStop(1, "rgba(0, 0, 0, 1)");

        baseCtx.fillStyle = centerGlow;
        baseCtx.fillRect(0, 0, width, height);

        const leftNebula = baseCtx.createRadialGradient(
          width * 0.02,
          height * 0.26,
          0,
          width * 0.02,
          height * 0.26,
          width * 0.85,
        );

        leftNebula.addColorStop(0, "rgba(34, 211, 238, 0.12)");
        leftNebula.addColorStop(0.28, "rgba(34, 211, 238, 0.035)");
        leftNebula.addColorStop(1, "rgba(34, 211, 238, 0)");

        baseCtx.fillStyle = leftNebula;
        baseCtx.fillRect(0, 0, width, height);

        const rightNebula = baseCtx.createRadialGradient(
          width * 0.98,
          height * 0.72,
          0,
          width * 0.98,
          height * 0.72,
          width * 0.72,
        );

        rightNebula.addColorStop(0, "rgba(124, 58, 237, 0.08)");
        rightNebula.addColorStop(0.4, "rgba(34, 211, 238, 0.018)");
        rightNebula.addColorStop(1, "rgba(0, 0, 0, 0)");

        baseCtx.fillStyle = rightNebula;
        baseCtx.fillRect(0, 0, width, height);
      }

      vignetteCache = document.createElement("canvas");
      vignetteCache.width = Math.floor(width * dpr);
      vignetteCache.height = Math.floor(height * dpr);

      const vignetteCtx = vignetteCache.getContext("2d");
      if (vignetteCtx) {
        vignetteCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

        const vignette = vignetteCtx.createRadialGradient(
          width * 0.5,
          height * 0.48,
          Math.min(width, height) * 0.25,
          width * 0.5,
          height * 0.48,
          Math.max(width, height) * 0.78,
        );

        vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
        vignette.addColorStop(0.7, "rgba(0, 0, 0, 0.18)");
        vignette.addColorStop(1, "rgba(0, 0, 0, 0.65)");

        vignetteCtx.fillStyle = vignette;
        vignetteCtx.fillRect(0, 0, width, height);
      }
    };

    /* =====================================================
       01. CREATE SCENE
    ===================================================== */

    const createScene = () => {
      const width = viewportWidth;
      const height = viewportHeight;
      const area = width * height;

      const starCount = clamp(
        Math.floor(area / 2700),
        CONFIG.minStars,
        CONFIG.maxStars,
      );

      const dustCount = clamp(Math.floor(area / 19000), 36, CONFIG.maxDust);

      const nodeCount = clamp(
        Math.floor(area / 145000),
        5,
        CONFIG.maxCyberNodes,
      );

      starsRef.current = Array.from({ length: starCount }, () => {
        const layer = pickLayer();
        const depth = layerDepth(layer);

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          size: rand(0.35, 1.55) * (0.65 + depth),
          opacity: rand(0.13, 0.78) * (0.65 + depth * 0.35),
          phase: Math.random() * Math.PI * 2,
          twinkle: rand(0.003, 0.016),
          driftX: rand(-0.008, 0.018) * depth,
          driftY: rand(-0.004, 0.012) * depth,
          layer,
          hue: Math.random() > 0.82 ? rand(184, 196) : rand(205, 230),
        };
      });

      dustRef.current = Array.from({ length: dustCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: rand(0.35, 1.15),
        opacity: rand(0.025, 0.095),
        speed: rand(0.006, 0.018),
      }));

      nodesRef.current = Array.from({ length: nodeCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: rand(1.5, 3.5),
        phase: Math.random() * Math.PI * 2,
        speed: rand(0.004, 0.012),
        opacity: rand(0.08, 0.2),
        orbit: rand(16, 42),
      }));
    };

    /* =====================================================
       02. RESIZE CANVAS
    ===================================================== */

    const resizeCanvas = () => {
      currentDpr = Math.min(window.devicePixelRatio || 1, 2);
      viewportWidth = window.innerWidth;
      viewportHeight = window.innerHeight;

      canvas.width = Math.floor(viewportWidth * currentDpr);
      canvas.height = Math.floor(viewportHeight * currentDpr);
      canvas.style.width = `${viewportWidth}px`;
      canvas.style.height = `${viewportHeight}px`;

      ctx.setTransform(currentDpr, 0, 0, currentDpr, 0, 0);
      rebuildStaticCaches(viewportWidth, viewportHeight, currentDpr);

      mouseRef.current.screenX = viewportWidth / 2;
      mouseRef.current.screenY = viewportHeight / 2;

      createScene();
    };

    /* =====================================================
       03. DEEP BACKGROUND + NEBULA
    ===================================================== */

    const drawBackground = (width: number, height: number, time: number) => {
      if (backgroundCache) {
        ctx.drawImage(backgroundCache, 0, 0, width, height);
      } else {
        ctx.fillStyle = "#000104";
        ctx.fillRect(0, 0, width, height);
      }

      /* Aurora cinematic ribbons */
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (let i = 0; i < 4; i++) {
        const ribbonAlpha = [0.085, 0.055, 0.04, 0.028][i];
        const ribbonWidth = [34, 26, 20, 16][i];

        const gradient = ctx.createLinearGradient(
          0,
          height * 0.25,
          width,
          height,
        );
        gradient.addColorStop(0, "rgba(34, 211, 238, 0)");
        gradient.addColorStop(0.28, `rgba(34, 211, 238, ${ribbonAlpha})`);
        gradient.addColorStop(0.6, `rgba(99, 102, 241, ${ribbonAlpha * 0.8})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = ribbonWidth;
        ctx.beginPath();

        for (let x = -100; x <= width + 100; x += 20) {
          const y =
            height * (0.36 + i * 0.075) +
            Math.sin(x * 0.006 + time * 0.00042 + i) * 34 +
            Math.sin(x * 0.013 + time * 0.00026 + i * 1.7) * 17;

          if (x === -100) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();
      }

      ctx.restore();

      if (vignetteCache) {
        ctx.drawImage(vignetteCache, 0, 0, width, height);
      }
    };

    /* =====================================================
       04. DUST PARTICLES
    ===================================================== */

    const drawDust = (width: number, height: number, delta: number) => {
      const mouse = mouseRef.current;
      const scroll = scrollRef.current;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (const dust of dustRef.current) {
        dust.y += dust.speed * delta;
        dust.x += Math.sin(dust.y * 0.003) * 0.012 * delta;

        if (dust.y > height + 20) {
          dust.y = -20;
          dust.x = Math.random() * width;
        }

        const x = dust.x - mouse.x * 16;
        const y = dust.y - mouse.y * 16 - scroll.y * 8;

        ctx.fillStyle = `rgba(160, 240, 255, ${dust.opacity})`;
        ctx.beginPath();
        ctx.arc(x, y, dust.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    /* =====================================================
       05. STAR FIELD + CONSTELLATION
    ===================================================== */

    const drawStars = (width: number, height: number, delta: number) => {
      const mouse = mouseRef.current;
      const scroll = scrollRef.current;

      const brightPoints: {
        x: number;
        y: number;
        alpha: number;
        depth: number;
      }[] = [];

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (const star of starsRef.current) {
        const depth = layerDepth(star.layer);
        const parallax = layerParallax(star.layer);

        star.phase += star.twinkle * delta;
        star.x += star.driftX * delta;
        star.y += star.driftY * delta;

        if (star.x > width + 30) star.x = -30;
        if (star.x < -30) star.x = width + 30;
        if (star.y > height + 30) star.y = -30;
        if (star.y < -30) star.y = height + 30;

        const pulse = (Math.sin(star.phase) + 1) / 2;
        const alpha = star.opacity * (0.66 + pulse * 0.42);
        const size = star.size * (0.88 + pulse * 0.22);

        let x = star.x - mouse.x * parallax;
        let y = star.y - mouse.y * parallax - scroll.y * parallax * 0.18;

        /* cursor magnetic lens */
        if (mouse.active) {
          const dx = x - mouse.screenX;
          const dy = y - mouse.screenY;
          const distance = Math.hypot(dx, dy);
          const radius = 320;

          if (distance < radius && distance > 0.01) {
            const force = (1 - distance / radius) * (8 + depth * 18);
            x += (dx / distance) * force;
            y += (dy / distance) * force;
          }
        }

        const glowSize = size * layerGlow(star.layer);

        const glow = ctx.createRadialGradient(x, y, 0, x, y, glowSize);
        glow.addColorStop(0, `hsla(${star.hue}, 100%, 86%, ${alpha * 0.5})`);
        glow.addColorStop(0.42, `hsla(${star.hue}, 100%, 72%, ${alpha * 0.1})`);
        glow.addColorStop(1, `hsla(${star.hue}, 100%, 72%, 0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `hsla(${star.hue}, 100%, ${82 + depth * 10}%, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        if (star.layer === "near" && alpha > 0.55) {
          ctx.strokeStyle = `rgba(225, 252, 255, ${alpha * 0.18})`;
          ctx.lineWidth = 0.55;
          ctx.beginPath();
          ctx.moveTo(x - size * 5, y);
          ctx.lineTo(x + size * 5, y);
          ctx.moveTo(x, y - size * 5);
          ctx.lineTo(x, y + size * 5);
          ctx.stroke();
        }

        if (star.layer !== "far" && alpha > 0.34) {
          brightPoints.push({ x, y, alpha, depth });
        }
      }

      ctx.restore();

      /* smart constellation lines */
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      ctx.lineWidth = 0.75;

      const points = brightPoints
        .slice(0, CONFIG.maxConstellationPoints)
        .map((point, index) => ({ ...point, index }));
      const buckets = new Map<string, typeof points>();

      for (const point of points) {
        const gx = Math.floor(point.x / GRID_CELL_SIZE);
        const gy = Math.floor(point.y / GRID_CELL_SIZE);
        const key = `${gx}:${gy}`;
        const bucket = buckets.get(key);

        if (bucket) bucket.push(point);
        else buckets.set(key, [point]);
      }

      for (const a of points) {
        const gx = Math.floor(a.x / GRID_CELL_SIZE);
        const gy = Math.floor(a.y / GRID_CELL_SIZE);

        for (let ox = -1; ox <= 1; ox++) {
          for (let oy = -1; oy <= 1; oy++) {
            const bucket = buckets.get(`${gx + ox}:${gy + oy}`);
            if (!bucket) continue;

            for (const b of bucket) {
              if (b.index <= a.index) continue;

              const dx = a.x - b.x;
              const dy = a.y - b.y;
              const distance = Math.hypot(dx, dy);
              const maxDistance = 92 + Math.max(a.depth, b.depth) * 74;

              if (distance > maxDistance) continue;

              const midX = (a.x + b.x) / 2;
              const midY = (a.y + b.y) / 2;
              const cursorDistance = Math.hypot(
                midX - mouseRef.current.screenX,
                midY - mouseRef.current.screenY,
              );

              const cursorBoost =
                mouseRef.current.active && cursorDistance < 360 ? 1.95 : 0.72;

              const alpha =
                (1 - distance / maxDistance) *
                Math.min(a.alpha, b.alpha) *
                0.18 *
                cursorBoost;

              if (alpha < 0.012) continue;

              const gradient = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
              gradient.addColorStop(0, `rgba(34, 211, 238, ${alpha * 0.12})`);
              gradient.addColorStop(0.5, `rgba(220, 252, 255, ${alpha})`);
              gradient.addColorStop(1, `rgba(34, 211, 238, ${alpha * 0.12})`);

              ctx.strokeStyle = gradient;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      ctx.restore();
    };

    /* =====================================================
       06. CYBER NODES
    ===================================================== */

    const drawCyberNodes = (width: number, height: number, time: number) => {
      const mouse = mouseRef.current;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      for (const node of nodesRef.current) {
        node.phase += node.speed;

        const orbitX = Math.cos(node.phase) * node.orbit;
        const orbitY = Math.sin(node.phase * 0.8) * node.orbit * 0.5;

        const x = node.x + orbitX - mouse.x * 24;
        const y = node.y + orbitY - mouse.y * 24;

        if (x < -80 || x > width + 80 || y < -80 || y > height + 80) continue;

        const pulse = (Math.sin(time * 0.0015 + node.phase) + 1) / 2;
        const alpha = node.opacity * (0.65 + pulse * 0.55);

        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.55})`;
        ctx.lineWidth = 0.8;

        ctx.beginPath();
        ctx.arc(x, y, node.radius + 8 + pulse * 4, 0, Math.PI * 2);
        ctx.stroke();

        ctx.fillStyle = `rgba(210, 252, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(34, 211, 238, ${alpha * 0.08})`;
        ctx.beginPath();
        ctx.arc(x, y, node.radius + 18, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    /* =====================================================
       07. CURSOR ENERGY LENS
    ===================================================== */

    const drawCursorEnergy = (time: number) => {
      const mouse = mouseRef.current;
      if (!mouse.active) return;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const radius = 285 + Math.sin(time * 0.002) * 10;

      const glow = ctx.createRadialGradient(
        mouse.screenX,
        mouse.screenY,
        0,
        mouse.screenX,
        mouse.screenY,
        radius,
      );

      glow.addColorStop(0, "rgba(34, 211, 238, 0.115)");
      glow.addColorStop(0.34, "rgba(34, 211, 238, 0.032)");
      glow.addColorStop(1, "rgba(34, 211, 238, 0)");

      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(mouse.screenX, mouse.screenY, radius, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 3; i++) {
        const arcRadius = 48 + i * 34 + Math.sin(time * 0.002 + i) * 5;

        ctx.strokeStyle = `rgba(190, 250, 255, ${0.13 - i * 0.03})`;
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.arc(
          mouse.screenX,
          mouse.screenY,
          arcRadius,
          time * 0.001 + i,
          time * 0.001 + i + Math.PI * 1.35,
        );
        ctx.stroke();
      }

      ctx.restore();
    };

    /* =====================================================
       08. CLICK RIPPLE SHOCKWAVE
    ===================================================== */

    const drawRipples = (delta: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "screen";

      ripplesRef.current = ripplesRef.current.filter((ripple) => {
        ripple.life += delta;
        ripple.radius += 5.4 * delta;

        const progress = ripple.life / ripple.maxLife;
        const alpha = Math.max(0, 0.28 * (1 - progress));

        ctx.strokeStyle = `rgba(125, 235, 255, ${alpha})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.stroke();

        const glow = ctx.createRadialGradient(
          ripple.x,
          ripple.y,
          ripple.radius * 0.2,
          ripple.x,
          ripple.y,
          ripple.radius,
        );

        glow.addColorStop(0, "rgba(34, 211, 238, 0)");
        glow.addColorStop(0.75, `rgba(34, 211, 238, ${alpha * 0.16})`);
        glow.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.fill();

        return ripple.life < ripple.maxLife;
      });

      ctx.restore();
    };

    /* =====================================================
       09. COMETS / METEORS
    ===================================================== */

    const spawnComet = () => {
      const width = viewportWidth;
      const height = viewportHeight;
      const fromLeft = Math.random() > 0.5;

      cometsRef.current.push({
        x: fromLeft ? -180 : width + 180,
        y: rand(30, height * 0.58),
        vx: fromLeft ? rand(7.4, 11.4) : -rand(7.4, 11.4),
        vy: rand(1.2, 3.2),
        life: 0,
        maxLife: rand(78, 122),
        length: rand(145, 265),
        width: rand(1.4, 2.2),
        hue: rand(185, 205),
      });
    };

    const drawComets = (delta: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      cometsRef.current = cometsRef.current.filter((comet) => {
        comet.x += comet.vx * delta;
        comet.y += comet.vy * delta;
        comet.life += delta;

        const progress = comet.life / comet.maxLife;
        const alpha = Math.max(0, 0.82 * (1 - progress));

        const tailX = comet.x - comet.vx * (comet.length / 8);
        const tailY = comet.y - comet.vy * (comet.length / 8);

        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          tailX,
          tailY,
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
        gradient.addColorStop(
          0.22,
          `hsla(${comet.hue}, 100%, 72%, ${alpha * 0.75})`,
        );
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = comet.width;
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, 1.4, 0, Math.PI * 2);
        ctx.fill();

        return comet.life < comet.maxLife;
      });

      ctx.restore();
    };

    /* =====================================================
       10. SCROLL WARP STREAKS
    ===================================================== */

    const drawWarpStreaks = (width: number, height: number) => {
      const velocity = scrollRef.current.velocity;

      if (velocity < 0.8) return;

      ctx.save();
      ctx.globalCompositeOperation = "screen";

      const count = Math.min(46, Math.floor(velocity * 9));
      const alpha = Math.min(0.17, velocity * 0.022);

      for (let i = 0; i < count; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const length = rand(25, 105) * clamp(velocity * 0.12, 0.7, 1.9);

        const gradient = ctx.createLinearGradient(x, y, x, y + length);
        gradient.addColorStop(0, "rgba(34, 211, 238, 0)");
        gradient.addColorStop(0.5, `rgba(225, 252, 255, ${alpha})`);
        gradient.addColorStop(1, "rgba(34, 211, 238, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = rand(0.45, 1.1);
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x, y + length);
        ctx.stroke();
      }

      ctx.restore();
    };

    /* =====================================================
       11. CURSOR SPARKS
    ===================================================== */

    const emitSparks = (x: number, y: number, count = 2) => {
      if (sparksRef.current.length > CONFIG.maxSparks) return;

      for (let i = 0; i < count; i++) {
        sparksRef.current.push({
          x,
          y,
          vx: rand(-0.6, 0.6),
          vy: rand(-0.6, 0.6),
          life: 0,
          maxLife: rand(22, 42),
        });
      }
    };

    const drawSparks = (delta: number) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      sparksRef.current = sparksRef.current.filter((spark) => {
        spark.x += spark.vx * delta;
        spark.y += spark.vy * delta;
        spark.life += delta;

        const progress = spark.life / spark.maxLife;
        const alpha = Math.max(0, 0.55 * (1 - progress));

        ctx.fillStyle = `rgba(170, 245, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(spark.x, spark.y, 1.05, 0, Math.PI * 2);
        ctx.fill();

        return spark.life < spark.maxLife;
      });

      ctx.restore();
    };

    /* =====================================================
       12. MAIN ANIMATION LOOP
    ===================================================== */

    const animate = (time: number) => {
      const elapsed = time - lastTime;

      if (elapsed < TARGET_FRAME_MS) {
        raf = requestAnimationFrame(animate);
        return;
      }

      const delta = Math.min(elapsed / 16.67, 2);
      lastTime = time;

      const width = viewportWidth;
      const height = viewportHeight;

      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.075;
      mouse.y += (mouse.targetY - mouse.y) * 0.075;

      const scroll = scrollRef.current;
      scroll.y += (scroll.targetY - scroll.y) * 0.058;
      scroll.velocity *= 0.88;

      drawBackground(width, height, time);
      drawDust(width, height, delta);
      drawStars(width, height, delta);
      drawCyberNodes(width, height, time);
      drawComets(delta);
      drawWarpStreaks(width, height);
      drawCursorEnergy(time);
      drawRipples(delta);
      drawSparks(delta);

      cometTimer += elapsed;

      if (cometTimer > nextCometDelay) {
        spawnComet();
        cometTimer = 0;
        nextCometDelay = rand(4200, 9800);
      }

      raf = requestAnimationFrame(animate);
    };

    /* =====================================================
       13. EVENTS
    ===================================================== */

    const handleMouseMove = (event: MouseEvent) => {
      const width = viewportWidth;
      const height = viewportHeight;

      mouseRef.current.active = true;
      mouseRef.current.screenX = event.clientX;
      mouseRef.current.screenY = event.clientY;
      mouseRef.current.targetX = (event.clientX / width - 0.5) * 2;
      mouseRef.current.targetY = (event.clientY / height - 0.5) * 2;

      const now = performance.now();
      if (now - lastSparkTime > MOUSE_SPARK_INTERVAL && Math.random() > 0.94) {
        lastSparkTime = now;
        emitSparks(event.clientX, event.clientY, 2);
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    const handleClick = (event: MouseEvent) => {
      ripplesRef.current.push({
        x: event.clientX,
        y: event.clientY,
        radius: 8,
        life: 0,
        maxLife: 62,
      });

      emitSparks(event.clientX, event.clientY, 8);
    };

    const handleScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight - viewportHeight || 1;

      const currentScroll = window.scrollY;
      const velocity = Math.abs(currentScroll - scrollRef.current.lastScrollY);

      scrollRef.current.velocity = Math.max(
        scrollRef.current.velocity,
        Math.min(velocity, 12),
      );

      scrollRef.current.lastScrollY = currentScroll;
      scrollRef.current.targetY = (currentScroll / maxScroll - 0.5) * 2;
    };

    const handleResize = () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);

      resizeRaf = requestAnimationFrame(() => {
        resizeCanvas();
        handleScroll();
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
        return;
      }

      if (!raf) {
        lastTime = performance.now();
        raf = requestAnimationFrame(animate);
      }
    };

    resizeCanvas();
    handleScroll();

    raf = requestAnimationFrame(animate);

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(resizeRaf);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-0 [contain:strict]"
        style={{ transform: "translate3d(0,0,0)" }}
        aria-hidden="true"
      />

      {/* Extra CSS depth overlay. Content must stay z-10 above this. */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-70 [contain:paint]"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(34,211,238,0.045),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(99,102,241,0.045),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.34))]" />
      </div>
    </>
  );
}

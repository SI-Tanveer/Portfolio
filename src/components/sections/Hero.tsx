"use client";

import { memo } from "react";
import { motion } from "motion/react";
import ProfileFlipPanel from "./ProfileFlipPanel";
import {
  ArrowRight,
  BrainCircuit,
  Cpu,
  Download,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

type RoleItem = {
  label: string;
  icon: LucideIcon;
  primary?: boolean;
};

type ExpertiseItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

const roleItems: RoleItem[] = [
  {
    label: "Cybersecurity Engineer",
    icon: ShieldCheck,
    primary: true,
  },
  {
    label: "AI Automation",
    icon: Cpu,
  },
];

const expertiseItems: ExpertiseItem[] = [
  {
    title: "Security Semantic RAG",
    description:
      "Context-aware retrieval pipelines engineered for secure, reliable knowledge operations.",
    icon: BrainCircuit,
    tag: "01",
  },
  {
    title: "FDE Business Automation",
    description:
      "Execution-focused automation systems built to solve real operational and business workflows.",
    icon: Workflow,
    tag: "02",
  },
  {
    title: "LLM Security",
    description:
      "Secure-by-design AI systems with strong attention to resilience, trust, and risk control.",
    icon: LockKeyhole,
    tag: "03",
  },
];

const AnimatedBackground = memo(function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 22, 0], y: [0, -18, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-10%] top-[8%] h-96 w-96 transform-gpu rounded-full bg-cyan-400/[0.12] blur-[120px] will-change-transform"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -28, 0], y: [0, 20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-12%] top-[22%] h-[34rem] w-[34rem] transform-gpu rounded-full bg-cyan-300/[0.10] blur-[145px] will-change-transform"
      />

      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 14, 0], y: [0, -14, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-12%] left-[34%] h-80 w-80 transform-gpu rounded-full bg-cyan-500/[0.08] blur-[120px] will-change-transform"
      />

      <div className="absolute left-[18%] top-[58%] h-56 w-56 rounded-full bg-sky-400/[0.05] blur-[100px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.08),transparent_35%),radial-gradient(circle_at_75%_30%,rgba(34,211,238,0.06),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(6,182,212,0.06),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/20" />
    </div>
  );
});

const HeroRoleBadge = memo(function HeroRoleBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: smoothEase, delay: 0.05 }}
      whileHover={{
        y: -3,
        scale: 1.012,
        transition: { duration: 0.25, ease: smoothEase },
      }}
      className="group relative mb-7 inline-flex max-w-full transform-gpu flex-wrap items-center gap-2.5 overflow-hidden rounded-full border border-cyan-300/20 bg-white/[0.045] p-1.5 shadow-[0_0_36px_rgba(34,211,238,0.10)] backdrop-blur-xl transition-all duration-500 will-change-transform hover:border-cyan-300/40 hover:bg-white/[0.065] hover:shadow-[0_0_50px_rgba(34,211,238,0.16)]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 transform-gpu bg-gradient-to-r from-transparent via-cyan-200/[0.12] to-transparent will-change-transform"
        animate={{ x: ["0%", "330%"] }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatDelay: 5.5,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute -left-8 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full bg-cyan-300/[0.14] blur-2xl transition-all duration-500 group-hover:bg-cyan-300/[0.22]" />

      <div className="relative z-10 flex items-center gap-2 rounded-full px-3 py-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-300/25" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_15px_rgba(110,231,183,0.70)]" />
        </span>

        <span className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.22em] text-white/[0.52]">
          Building Secure AI Systems
        </span>
      </div>

      {roleItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.45,
              ease: smoothEase,
              delay: 0.18 + index * 0.11,
            }}
            whileHover={{
              y: -2,
              scale: 1.035,
              transition: { duration: 0.22, ease: smoothEase },
            }}
            className={
              item.primary
                ? "relative z-10 flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 font-mono text-[11.5px] font-black uppercase tracking-[0.18em] text-black shadow-[0_0_26px_rgba(34,211,238,0.30)]"
                : "relative z-10 flex items-center gap-2 rounded-full border border-white/[0.08] px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-100/[0.72] transition-all duration-300 hover:border-cyan-300/25 hover:bg-cyan-300/[0.08] hover:text-cyan-50"
            }
          >
            <Icon
              size={item.primary ? 15 : 14}
              className={item.primary ? "text-black" : "text-cyan-300"}
            />
            <span>{item.label}</span>
          </motion.div>
        );
      })}
    </motion.div>
  );
});

const DesignPrincipleCard = memo(function DesignPrincipleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -5,
        scale: 1.012,
        transition: { duration: 0.28, ease: smoothEase },
      }}
      transition={{ duration: 0.75, ease: smoothEase, delay: 0.78 }}
      className="group relative mt-6 transform-gpu overflow-hidden rounded-2xl border border-cyan-300/15 bg-white/[0.04] p-4 shadow-[0_0_28px_rgba(34,211,238,0.06)] backdrop-blur-xl transition-all duration-500 will-change-transform hover:border-cyan-300/30 hover:bg-white/[0.055] hover:shadow-[0_0_36px_rgba(34,211,238,0.10)]"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 transform-gpu bg-gradient-to-r from-transparent via-cyan-200/[0.10] to-transparent will-change-transform"
        animate={{ x: ["0%", "300%"] }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          repeatDelay: 5.5,
          ease: "easeInOut",
        }}
      />

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-300/[0.10] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.18]" />

      <div className="relative z-10 mb-3 flex items-center gap-2.5">
        <motion.div
          animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
          className="flex h-8 w-8 transform-gpu items-center justify-center rounded-lg border border-cyan-300/20 bg-cyan-300/[0.08] shadow-[0_0_18px_rgba(34,211,238,0.12)] will-change-transform"
        >
          <Sparkles size={16} className="text-cyan-300" />
        </motion.div>

        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.26em] text-cyan-100/[0.64] transition-colors duration-300 group-hover:text-cyan-100/[0.84]">
          Peak Interest
        </p>
      </div>

      <p className="relative z-10 text-[15.5px] font-medium leading-7 text-white/[0.84] transition-colors duration-300 group-hover:text-white/[0.92]">
        Building intelligent security systems that detect, reason, automate, and
        protect modern digital environments
      </p>

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/35 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-80" />
    </motion.div>
  );
});

const ExpertiseCards = memo(function ExpertiseCards() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: smoothEase, delay: 0.9 }}
      className="mt-6 grid max-w-3xl gap-3 sm:grid-cols-2 xl:grid-cols-3"
    >
      {expertiseItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: smoothEase,
              delay: 1 + index * 0.12,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              transition: { duration: 0.28, ease: smoothEase },
            }}
            className="group relative transform-gpu overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-xl transition-all duration-500 will-change-transform hover:border-cyan-300/30 hover:bg-cyan-300/[0.052] hover:shadow-[0_0_32px_rgba(34,211,238,0.10)]"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-40 transition duration-500 group-hover:opacity-100" />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 transform-gpu bg-gradient-to-r from-transparent via-cyan-200/[0.10] to-transparent will-change-transform"
              animate={{ x: ["0%", "280%"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 5.5,
                ease: "easeInOut",
              }}
            />

            <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-300/[0.10] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.20]" />

            <div className="relative z-10 mb-4 flex items-start justify-between">
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  repeatDelay: 4,
                  ease: "easeInOut",
                }}
                className="flex h-11 w-11 transform-gpu items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.10] shadow-[0_0_20px_rgba(34,211,238,0.10)] transition duration-500 will-change-transform group-hover:scale-110 group-hover:border-cyan-300/35 group-hover:bg-cyan-300/[0.15]"
              >
                <Icon className="text-cyan-300" size={21} />
              </motion.div>

              <span className="font-mono text-[11px] font-semibold tracking-[0.22em] text-white/[0.28] transition duration-300 group-hover:text-cyan-100/[0.45]">
                {item.tag}
              </span>
            </div>

            <div className="relative z-10">
              <h3 className="font-mono text-[16px] font-semibold tracking-[0.04em] text-white transition duration-300 group-hover:text-cyan-50">
                {item.title}
              </h3>

              <p className="mt-2 text-[13.5px] leading-6 text-white/[0.64] transition duration-300 group-hover:text-white/[0.80]">
                {item.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-300/0 via-cyan-300/80 to-cyan-300/0 transition-all duration-500 group-hover:w-full" />
          </motion.div>
        );
      })}
    </motion.div>
  );
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-screen w-full items-center overflow-hidden px-5 pb-12 pt-24 md:px-10 lg:px-16 lg:pt-28 xl:px-24 2xl:px-32"
    >
      <AnimatedBackground />

      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[1680px] flex-col items-center justify-center gap-10 lg:flex-row lg:items-center lg:justify-between xl:gap-24">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: smoothEase }}
          className="order-2 w-full max-w-[760px] transform-gpu lg:order-1 lg:origin-left lg:scale-[0.9] lg:pr-6 xl:scale-[0.88]"
        >
          <HeroRoleBadge />

          {/* Main Heading */}
          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.07em] text-white md:text-7xl xl:text-[5.05rem]">
            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease: smoothEase, delay: 0.18 }}
              className="block text-white/95"
            >
              Architecting Business operations &
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease: smoothEase, delay: 0.3 }}
              className="block"
            >
              <span className="relative inline-block">
                {/* Premium glow behind main phrase */}
                <span className="absolute -inset-x-4 bottom-3 h-8 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-emerald-300/15 blur-2xl" />

                <motion.span
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{
                    duration: 3.2,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="relative bg-gradient-to-r from-cyan-200 via-white to-emerald-300 bg-[length:240%_240%] bg-clip-text text-transparent drop-shadow-[0_0_26px_rgba(34,211,238,0.24)]"
                >
                  Autonomous Cyber
                </motion.span>
              </span>
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.75, ease: smoothEase, delay: 0.42 }}
              className="block"
            >
              <span className="relative inline-block">
                <span className="absolute -inset-x-3 bottom-2 h-7 rounded-full bg-cyan-300/10 blur-xl" />

                <span className="relative bg-gradient-to-r from-white via-cyan-100 to-white/80 bg-clip-text text-transparent">
                  Defense
                </span>
              </span>
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: smoothEase, delay: 0.66 }}
            className="mt-7 max-w-2xl text-base leading-8 text-white/[0.70] md:text-lg"
          >
            Bridging the gap between InfoSec and Agentic AI. I engineer
            intelligent, self-acting security systems to outpace modern cyber
            threats
          </motion.p>

          <DesignPrincipleCard />
          <ExpertiseCards />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: smoothEase, delay: 1.02 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center rounded-full border border-cyan-300/70 bg-cyan-300 px-6 py-3 font-mono text-sm font-black uppercase tracking-[0.15em] text-black transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_45px_rgba(34,211,238,0.36)]"
            >
              View Selected Work
              <ArrowRight
                className="ml-2 transition duration-300 group-hover:translate-x-1"
                size={17}
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1sZkk20EMI1o_uUsTQ9xAZ15Wuw6QFHuC/view?usp=drivesdk"
              className="group inline-flex items-center rounded-full border border-white/15 bg-white/[0.045] px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-white/[0.08] hover:text-white"
            >
              Download Resume
              <Download
                className="ml-2 opacity-70 transition duration-300 group-hover:translate-y-0.5 group-hover:opacity-100"
                size={16}
              />
            </a>
          </motion.div>

          {/* Minimal Hero Focus Strip */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: smoothEase, delay: 1.14 }}
            className="mt-6 border-t border-white/10 pt-4"
          >
            
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: smoothEase, delay: 0.15 }}
          className="order-1 relative flex w-full max-w-[480px] transform-gpu justify-center lg:order-2 lg:justify-end"
        >
          <motion.div
            aria-hidden="true"
            animate={{ scale: [1, 1.05, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-10 transform-gpu rounded-full bg-cyan-400/[0.10] blur-3xl will-change-transform"
          />
          <div className="absolute -inset-4 rounded-[2.5rem] border border-cyan-300/10" />

          <div className="relative w-full">
            <ProfileFlipPanel />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

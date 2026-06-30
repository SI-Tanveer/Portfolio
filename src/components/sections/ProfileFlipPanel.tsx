"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { JetBrains_Mono, Sora } from "next/font/google";
import { RotateCcw } from "lucide-react";

const panelFont = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bioTitle =
  "Beyond the Code: My Journey into Cybersecurity & AI";

const bioText = `I'm Md Shahidul Islam Tanveer, a cybersecurity-focused CSE graduate from Daffodil International University and currently working as an AI Automation Engineer at Betopia Group. My work sits at the intersection of cybersecurity, AI automation, agentic systems, and research-driven problem solving.

My journey started with curiosity about digital systems, security puzzles, and how technology can be protected from real-world threats. Today, I focus on exploring how AI can enhance cybersecurity through automation, intelligent assistants, threat analysis, and practical security research.

I believe in honest effort, deep exploration, and building solutions that are not only technically strong but also meaningful, secure, and useful.
`;

export default function ProfileFlipPanel() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasSignaturePlayed, setHasSignaturePlayed] = useState(false);
  const [hasBioPlayed, setHasBioPlayed] = useState(false);

  useEffect(() => {
    if (!isFlipped || hasBioPlayed) return;

    const revealTimer = window.setTimeout(() => {
      setHasBioPlayed(true);
    }, 650);

    return () => window.clearTimeout(revealTimer);
  }, [isFlipped, hasBioPlayed]);

  return (
    <>
      <style jsx global>{`
        @keyframes signatureNeonWrite {
          0% {
            opacity: 0;
            clip-path: inset(-70% 100% -80% 0);
            filter: blur(6px);
            transform: translateY(6px) scale(0.98);
          }

          12% {
            opacity: 1;
          }

          55% {
            filter: blur(1.3px);
          }

          100% {
            opacity: 1;
            clip-path: inset(-70% 0 -80% 0);
            /* No filter animation. */
            transform: translateY(0) scale(1);
          }
        }

        @keyframes signaturePenTravel {
          0% {
            opacity: 0;
            left: 6%;
            top: 56%;
            transform: translate(-50%, -50%) scale(0.65);
          }

          8% {
            opacity: 1;
          }

          18% {
            left: 18%;
            top: 47%;
          }

          32% {
            left: 33%;
            top: 60%;
          }

          48% {
            left: 50%;
            top: 41%;
          }

          63% {
            left: 65%;
            top: 54%;
          }

          80% {
            left: 82%;
            top: 45%;
          }

          100% {
            opacity: 0;
            left: 96%;
            top: 51%;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @keyframes signatureGreenTrail {
          0% {
            opacity: 0;
            transform: translateX(-35%) scaleX(0.1);
          }

          22% {
            opacity: 0.5;
          }

          100% {
            opacity: 0;
            transform: translateX(55%) scaleX(1);
          }
        }

        @keyframes signatureGlowSettle {
          0% {
            text-shadow:
              0 0 0 rgba(34, 211, 238, 0),
              0 0 0 rgba(34, 255, 102, 0),
              0 14px 34px rgba(0, 0, 0, 0.7);
          }

          45% {
            text-shadow:
              0 0 22px rgba(34, 211, 238, 0.24),
              0 0 34px rgba(34, 255, 102, 0.14),
              0 14px 36px rgba(0, 0, 0, 0.86);
          }

          100% {
            text-shadow:
              0 0 14px rgba(34, 211, 238, 0.14),
              0 0 7px rgba(255, 255, 255, 0.1),
              0 12px 30px rgba(0, 0, 0, 0.8);
          }
        }

        @keyframes signatureUnderline {
          0% {
            opacity: 0;
            transform: scaleX(0);
          }

          100% {
            opacity: 1;
            transform: scaleX(1);
          }
        }

        @keyframes imageReveal {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(0.96);
            /* Avoid animating filter/blur for smoother 60fps motion. */
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            /* No filter animation. */
          }
        }

        @keyframes bioFadeIn {
          0% {
            opacity: 0;
            transform: translateY(16px);
            /* Avoid animating filter/blur for smoother 60fps motion. */
          }

          100% {
            opacity: 1;
            transform: translateY(0);
            /* No filter animation. */
          }
        }

        @keyframes cardBorderFlow {
          0% {
            background-position: 0% 50%;
          }

          100% {
            background-position: 100% 50%;
          }
        }

        .profile-card-shell::before {
          content: "";
          position: absolute;
          inset: -1px;
          z-index: 0;
          border-radius: 2.35rem;
          background: linear-gradient(
            120deg,
            rgba(34, 211, 238, 0.08),
            rgba(255, 255, 255, 0.08),
            rgba(16, 185, 129, 0.08),
            rgba(34, 211, 238, 0.08)
          );
          background-size: 240% 240%;
          opacity: 0.9;
          /* Static border = smoother than an infinite animated gradient. */
        }

        .signature-stage {
          position: relative;
          width: 100%;
          max-width: 452px;
          overflow: visible;
          padding: 1.85rem 1.35rem 0.9rem;
        }

        .signature-fit-name {
          font-size: clamp(1.7rem, 4.85vw, 2.42rem);
          font-weight: 900;
          letter-spacing: -0.055em;
          line-height: 1.15;
        }

        .signature-neon-write {
          display: block;
          max-width: 100%;
          white-space: nowrap;
          overflow: visible;
          animation:
            signatureNeonWrite 2.15s cubic-bezier(0.22, 1, 0.36, 1) both,
            signatureGlowSettle 2.35s ease-out both;
        }

        .signature-neon-stable {
          display: block;
          max-width: 100%;
          white-space: nowrap;
          overflow: visible;
          opacity: 1;
          clip-path: inset(-70% 0 -80% 0);
          transform: translateY(0) scale(1);
          filter: blur(0);
          text-shadow:
            0 0 14px rgba(34, 211, 238, 0.14),
            0 0 7px rgba(255, 255, 255, 0.1),
            0 12px 30px rgba(0, 0, 0, 0.8);
        }

        .signature-green-pen {
          position: absolute;
          z-index: 5;
          height: 9px;
          width: 9px;
          border-radius: 999px;
          background: #22ff66;
          box-shadow:
            0 0 10px rgba(34, 255, 102, 1),
            0 0 24px rgba(34, 255, 102, 0.85),
            0 0 46px rgba(34, 255, 102, 0.42);
          animation: signaturePenTravel 2.1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .signature-green-pen::before {
          content: "";
          position: absolute;
          inset: -14px;
          border-radius: inherit;
          background: radial-gradient(
            circle,
            rgba(34, 255, 102, 0.55),
            transparent 62%
          );
          filter: blur(6px);
        }

        .signature-green-trail {
          pointer-events: none;
          position: absolute;
          left: 6%;
          top: 54%;
          height: 14px;
          width: 58%;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(34, 255, 102, 0.4),
            transparent
          );
          filter: blur(8px);
          animation: signatureGreenTrail 2.05s ease-out both;
        }

        .signature-line-effect {
          transform-origin: center;
          animation: signatureUnderline 0.9s ease-out 1.65s both;
        }

        .signature-line-stable {
          opacity: 1;
          transform: scaleX(1);
        }

        .photo-entry-effect {
          animation: imageReveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
        }

        .bio-fade-in-once {
          animation: bioFadeIn 0.55s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .flip-card-inner {
          will-change: transform;
          transform: translateZ(0);
        }

        .profile-card-face {
          contain: layout paint;
          transform: translateZ(0);
          will-change: transform;
        }

        .profile-image-layer {
          transform: translateZ(0);
          will-change: transform;
        }

        @media (prefers-reduced-motion: reduce) {
          .signature-neon-write,
          .signature-green-pen,
          .signature-green-trail,
          .signature-line-effect,
          .photo-entry-effect,
          .bio-fade-in-once {
            animation: none !important;
          }
        }

        .bio-scroll-zone {
          scrollbar-width: thin;
          scrollbar-color: rgba(34, 211, 238, 0.45) rgba(255, 255, 255, 0.06);
        }

        .bio-scroll-zone::-webkit-scrollbar {
          width: 6px;
        }

        .bio-scroll-zone::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.055);
          border-radius: 999px;
        }

        .bio-scroll-zone::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.45);
          border-radius: 999px;
        }

        .bio-scroll-zone::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.75);
        }
      `}</style>

      <div
        className={`${panelFont.className} relative mx-auto w-full max-w-[500px]`}
      >
        <div
          className="relative h-[610px] w-full sm:h-[650px]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="flip-card-inner relative h-full w-full transition-transform duration-[620ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{
              transformStyle: "preserve-3d",
              transform: isFlipped
                ? "translateZ(0) rotateY(180deg)"
                : "translateZ(0) rotateY(0deg)",
              willChange: "transform",
            }}
          >
            {/* FRONT SIDE */}
            <div
              className="profile-card-face profile-card-shell absolute inset-0 overflow-hidden rounded-[2.35rem] bg-[#050b0d]/95 p-[1px] shadow-[0_0_46px_rgba(34,211,238,0.12)] backdrop-blur-md"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[2.35rem] border border-cyan-300/15 bg-[#050b0d]/95 p-5">
                <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/[0.11] blur-2xl" />
                <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-2xl" />
                <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                <div className="relative flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-white/10 bg-gradient-to-b from-white/[0.06] via-cyan-300/[0.025] to-black/65 p-5">
                  {/* Signature */}
                  <div className="relative z-20 flex min-h-[170px] w-full flex-col items-center justify-center overflow-visible px-0 pt-1 text-center">
                    <div className="signature-stage">
                      <h2
                        onAnimationEnd={() => setHasSignaturePlayed(true)}
                        className={`${panelFont.className} ${
                          hasSignaturePlayed
                            ? "signature-neon-stable"
                            : "signature-neon-write"
                        } signature-fit-name whitespace-nowrap bg-gradient-to-r from-white via-cyan-100 to-cyan-300 bg-clip-text text-center text-transparent`}
                      >
                        Md Shahidul Islam
                      </h2>

                      {!hasSignaturePlayed && (
                        <>
                          <span className="signature-green-trail" />
                          <span className="signature-green-pen" />
                        </>
                      )}
                    </div>

                    <div
                      className={`${
                        hasSignaturePlayed
                          ? "signature-line-stable"
                          : "signature-line-effect"
                      } mt-[-4px] h-px w-[62%] max-w-56 bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent`}
                    />
                  </div>

                  {/* Photo */}
                  <div className="photo-entry-effect relative flex-1 overflow-hidden rounded-[1.6rem] border border-cyan-300/15 bg-black/45 shadow-[inset_0_0_44px_rgba(34,211,238,0.07)]">
                    <Image
                      src="/images/profile/tanveer-profile.png"
                      alt="Md Shahidul Islam Tanveer"
                      fill
                      priority
                      className="profile-image-layer object-cover transition-transform duration-500 hover:scale-[1.018]"
                      style={{ objectPosition: "center top" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-black/5" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-cyan-300/[0.10]" />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.035)_1px,transparent_1px)] bg-[length:100%_9px] opacity-20" />

                    <div className="absolute left-5 top-5 h-8 w-8 border-l border-t border-cyan-300/50" />
                    <div className="absolute right-5 top-5 h-8 w-8 border-r border-t border-cyan-300/50" />
                    <div className="absolute bottom-5 left-5 h-8 w-8 border-b border-l border-cyan-300/50" />
                    <div className="absolute bottom-5 right-5 h-8 w-8 border-b border-r border-cyan-300/50" />
                  </div>
                </div>
              </div>
            </div>

            {/* BACK SIDE */}
            <div
              className="profile-card-face profile-card-shell absolute inset-0 overflow-hidden rounded-[2.35rem] bg-[#050b0d]/95 p-[1px] shadow-[0_0_46px_rgba(34,211,238,0.12)] backdrop-blur-md"
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                transform: "rotateY(180deg) translateZ(0)",
              }}
            >
              <div className="relative z-10 h-full overflow-hidden rounded-[2.35rem] border border-cyan-300/15 bg-[#050b0d]/95 p-5">
                <div className="pointer-events-none absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/[0.11] blur-2xl" />
                <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-2xl" />
                <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

                <div className="relative flex h-full min-h-0 flex-col overflow-hidden rounded-[1.85rem] border border-white/10 bg-gradient-to-b from-white/[0.06] via-cyan-300/[0.025] to-black/65">
                  <div className="shrink-0 border-b border-white/10 px-7 py-6">
                    <p
                      className={`${monoFont.className} text-[10.5px] font-black uppercase tracking-[0.32em] text-cyan-200/70`}
                    >
                      Profile Bio
                    </p>
                  </div>

                  <div className="bio-scroll-zone min-h-0 flex-1 overflow-y-auto px-7 py-7 pr-5">
                    <div
                      className={
                        isFlipped && !hasBioPlayed ? "bio-fade-in-once" : ""
                      }
                    >
                      <h3 className="text-[1.8rem] font-black leading-tight tracking-[-0.045em] text-white md:text-[2rem]">
                        {bioTitle}
                      </h3>

                      <p className="mt-6 whitespace-pre-line text-[15.5px] font-medium leading-8 text-white/68">
                        {bioText}
                      </p>
                    </div>
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-[#050b0d] to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsFlipped((prev) => !prev)}
          aria-pressed={isFlipped}
          className={`${monoFont.className} group mx-auto mt-5 flex items-center justify-center gap-2 rounded-full border border-cyan-300/15 bg-white/[0.045] px-5 py-2.5 text-[10.5px] font-bold uppercase tracking-[0.22em] text-cyan-100/70 shadow-[0_0_26px_rgba(34,211,238,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.07] hover:text-cyan-50 hover:shadow-[0_0_34px_rgba(34,211,238,0.13)] focus:outline-none focus:ring-2 focus:ring-cyan-300/35`}
        >
          <RotateCcw
            size={13}
            className="transition-transform duration-500 group-hover:rotate-180"
          />
          {isFlipped ? "Back to profile" : "Click to read bio"}
        </button>
      </div>
    </>
  );
}

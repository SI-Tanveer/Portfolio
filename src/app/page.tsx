"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import StarBackwall from "@/components/effects/StarBackwall";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Code2,
  Database,
  Fingerprint,
  GraduationCap,
  Layers3,
  Mail,
  Orbit,
  ServerCog,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";

type SectionShellProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  text: string;
  children: ReactNode;
};

const achievements = [
  {
    value: "SEC",
    label: "Security Mindset",
    desc: "Risk-aware architecture, secure workflows, and threat thinking.",
  },
  {
    value: "AI",
    label: "Automation",
    desc: "LLM workflows, RAG pipelines, and agentic product logic.",
  },
  {
    value: "DATA",
    label: "Research Data",
    desc: "Dataset creation, cleaning, annotation planning, and analysis.",
  },
];


const aboutIdentityFacts = [
  {
    label: "Current Role",
    value: "AI Automation Engineer",
    detail: "Betopia Group",
    icon: <Bot size={22} />,
  },
  {
    label: "Academic Base",
    value: "CSE Graduate",
    detail: "Daffodil International University",
    icon: <GraduationCap size={22} />,
  },
  {
    label: "Core Direction",
    value: "AI × Defensive Security",
    detail: "Secure intelligent systems",
    icon: <ShieldCheck size={22} />,
  },
];

const aboutStoryCards = [
  {
    label: "Origin Signal",
    title: "Curiosity became the entry point.",
    icon: <Fingerprint size={24} />,
    text: "My cybersecurity journey started from fascination with how digital systems work, how hidden patterns are discovered, and how technology can be protected from real-world threats.",
    tags: [
      "Security Puzzles",
      "Cicada 3301",
      "Technical Articles",
      "Books",
      "Pattern Discovery",
    ],
  },
  {
    label: "Current Operating Field",
    title: "AI automation is my active build space.",
    icon: <BrainCircuit size={24} />,
    text: "Today I build automation workflows, agentic AI systems, business automation solutions, and LLM-based systems while exploring how AI can support threat analysis and automated defense.",
    tags: [
      "AI Automation",
      "Agentic Systems",
      "LLM Workflows",
      "Business Automation",
      "Security-Aware AI",
    ],
  },
];

const aboutMindsetFlow = [
  "Curiosity",
  "Deep Exploration",
  "Practical Execution",
  "Secure Impact",
];

const featuredProjects = [
  {
    icon: <Bot size={25} />,
    title: "Automated IDS Assistant",
    type: "Applied AI Detection System",
    status:
      "Real-time Intrusion Detection Assistant for Security Operations (SOC)",
    desc: "An AI assistant that monitors intrusion detection system (IDS) alerts, analyzes logs, and provides actionable insights for security operations. It leverages machine learning models to classify threats, prioritize alerts, and suggest mitigation strategies.",
    stack: ["AI Logic", "Automation", "Email Flow", "Safety Rules"],
  },
  {
    icon: <BrainCircuit size={25} />,
    title: "RAG Based Assistant",
    type: "Semantic Retrieval LangChain Based System",
    status: "Personalized AI Assistant Build",
    desc: "A context-aware retrieval system designed for grounded answers, document reasoning, cleaner knowledge access, and production-level response control.",
    stack: [
      "RAG",
      "Embeddings",
      "LLM",
      "Grounding",
      "LangChain",
      "Vector DB",
      "Prompting",
      "Agents",
      "Token Cost Management",
    ],
  },
  {
    icon: <Workflow size={25} />,
    title: "TrendTrack Business Automation",
    type: "Playwright Automation Engineering",
    status: "Real Client Business Use",
    desc: "Operational automation flows using n8n, APIs, Playwright browser automation, scheduled execution, and structured business logic to run the system reliably.",
    stack: [
      "n8n",
      "APIs",
      "Playwright",
      "Webhooks",
      "Ci/CD",
      "Scheduling",
      "Automation Logics",
      "Data Flow",
    ],
  },
  {
    icon: <Workflow size={25} />,
    title: "OpenClaw system control via OpenVA + n8n",
    type: "System Automation Pipeline",
    status:
      "Real System Control Using OpenVA + n8n, control of OpenClaw system actions via automation flows",
    desc: "Operational automation flows using OpenClaw. Controls system actions through OpenVA, connected with personal WhatsApp and automated CI/CD workflows.",
    stack: [
      "OpenClaw",
      "OpenVA",
      "WhatsApp",
      "Webhooks",
      "Scheduling",
      "Automation Logics",
      "CI/CD",
    ],
  },
];

const researchItems = [
  {
    type: "Featured BSc Capstone Thesis",
    status: "90% Complete · Submission in Progress",
    title: "Cross-Surface Behavioral Consistency of Attackers",
    subtitle:
      "An Empirical Study Using Cowrie, OpenCanary & External Threat Intelligence",
    desc: "A cybersecurity-focused empirical study that examines whether attacker behavior remains consistent across multiple deception surfaces. The work combines Cowrie SSH/Telnet honeypot data, OpenCanary service-interaction logs, and external threat intelligence to analyze cross-surface signals, behavioral consistency, attacker ranking stability, and security risk patterns.",
    signal: "Cybersecurity · Honeypots · Threat Intelligence",
    highlight: true,
    icon: <ShieldCheck size={26} />,
    tags: [
      "Cowrie",
      "OpenCanary",
      "Threat Intel",
      "Attacker Behavior",
      "Empirical Security",
    ],
  },
  {
    type: "Published Conference Paper",
    status: "Published · IEEE ICCCNT · Indore, India",
    title: "Asthma Prediction Using Machine Learning",
    subtitle: "Conference publication under IEEE",
    desc: "A machine-learning-based prediction study focused on healthcare analytics, classification, data preprocessing, and model-driven decision support for asthma prediction.",
    signal: "Machine Learning · Healthcare AI",
    highlight: false,
    icon: <BrainCircuit size={24} />,
    tags: ["IEEE", "ICCCNT", "Prediction", "Classification"],
  },
  {
    type: "Ongoing Thesis Research",
    status: "Active Research Direction",
    title: "Hybrid Semantic Quantum-Inspired Classical Steganography",
    subtitle: "For High-Security Region-of-Interest Hiding",
    desc: "An ongoing security research project exploring semantic information hiding, quantum-inspired design ideas, and classical secure embedding strategies for protecting high-security regions of interest.",
    signal: "Steganography · Data Security · ROI Hiding",
    highlight: false,
    icon: <Fingerprint size={24} />,
    tags: ["Steganography", "Quantum-Inspired", "ROI Hiding", "Data Security"],
  },
];

const skillStacks = [
  {
    icon: <BrainCircuit size={22} />,
    category: "AI Engineering",
    signal: "LLM · RAG · Agents",
    focus: "Building context-aware AI workflows and intelligent applications.",
    skills: [
      { name: "LLM Applications", mark: "LLM" },
      { name: "RAG Systems", mark: "RAG" },
      { name: "LangChain", mark: "LC" },
      { name: "LangGraph", mark: "LG" },
      { name: "AI Agents", mark: "AG" },
      { name: "Prompt Engineering", mark: "PE" },
      { name: "Context-Aware Workflows", mark: "CTX" },
    ],
    orbitClass: "left-1/2 top-4 -translate-x-1/2",
  },
  {
    icon: <ServerCog size={22} />,
    category: "Backend Engineering",
    signal: "APIs · Logic · Integration",
    focus:
      "Designing API layers, backend logic, and reliable system integration.",
    skills: [
      { name: "Python", mark: "Py" },
      { name: "FastAPI", mark: "API" },
      { name: "NestJS", mark: "Nest" },
      { name: "REST APIs", mark: "REST" },
      { name: "API Development", mark: "DEV" },
      { name: "Backend Logic", mark: "LOG" },
      { name: "System Integration", mark: "SYS" },
    ],
    orbitClass: "right-5 top-1/4 -translate-y-1/2",
  },
  {
    icon: <Workflow size={22} />,
    category: "Automation Systems",
    signal: "n8n · Playwright · Workflows",
    focus:
      "Connecting tools into practical pipelines that reduce repeated work and improve execution.",
    skills: [
      { name: "n8n Automation", mark: "n8n" },
      { name: "Playwright", mark: "PW" },
      { name: "Workflow Orchestration", mark: "WF" },
      { name: "API Integration", mark: "API" },
      { name: "Webhooks", mark: "HOOK" },
      { name: "Business Process Automation", mark: "BPA" },
      { name: "Operational Workflows", mark: "OPS" },
    ],
    orbitClass: "right-8 bottom-1/4 translate-y-1/2",
  },
  {
    icon: <Code2 size={22} />,
    category: "Frontend & Web",
    signal: "Next.js · React · UI Tooling",
    focus:
      "Building modern web interfaces with clean structure, maintainable styling, and developer tooling.",
    skills: [
      { name: "Next.js", mark: "Next" },
      { name: "React", mark: "React" },
      { name: "Vite", mark: "Vite" },
      { name: "HTML", mark: "HTML" },
      { name: "CSS", mark: "CSS" },
      { name: "Tailwind CSS", mark: "TW" },
      { name: "ESLint", mark: "ES" },
    ],
    orbitClass: "left-1/2 bottom-4 -translate-x-1/2",
  },
  {
    icon: <Database size={22} />,
    category: "Data & Machine Learning",
    signal: "Features · Models · Evaluation",
    focus:
      "Working with data, feature preparation, classification models, and measurable performance evaluation.",
    skills: [
      { name: "Machine Learning", mark: "ML" },
      { name: "Classification Models", mark: "CLS" },
      { name: "Feature Engineering", mark: "FE" },
      { name: "Pandas", mark: "Pd" },
      { name: "NumPy", mark: "Np" },
      { name: "Scikit-learn", mark: "SK" },
      { name: "Model Evaluation", mark: "EVAL" },
    ],
    orbitClass: "left-8 bottom-1/4 translate-y-1/2",
  },
  {
    icon: <ShieldCheck size={22} />,
    category: "Security Research Direction",
    signal: "Logs · Threat Intel · Defense",
    focus:
      "Analyzing attacker behavior, logs, and threat intelligence from a defensive security perspective.",
    skills: [
      { name: "Honeypot", mark: "CW" },
      { name: "Cryptography", mark: "OC" },
      { name: "Threat Intelligence", mark: "TI" },
      { name: "Blue Team Operations", mark: "BTO" },
      { name: "Penetration Testing", mark: "PT" },
      { name: "Security Operations Center", mark: "SOC" },
      { name: "Defensive Security Mindset", mark: "DEF" },
      { name: "Risk-Aware Thinking", mark: "RISK" },
      { name: "Steganography", mark: "SG" },
      { name: "Incident Response", mark: "IR" },
    ],
    orbitClass: "left-5 top-1/4 -translate-y-1/2",
  },
];

const educationItems = [
  {
    level: "BSc",
    label: "Primary Academic Focus",
    title: "BSc in Computer Science & Engineering",
    subtitle: "Major in Cybersecurity",
    institution: "Daffodil International University",
    faculty: "Faculty of Science & Information Technology (FSIT)",
    duration: "April 2022 — June 2026",
    status: "Completed",
    result: "CGPA 3.23",
    icon: <GraduationCap size={24} />,
    role: "Main academic identity",
    description:
      "This degree strengthened my technical foundation in cybersecurity, computer networks, machine learning, and information security. It also shaped my mindset toward building AI automation systems with stronger security awareness, practical engineering discipline, and real-world problem-solving exposure.",
    highlights: [
      "Cybersecurity",
      "Information Security",
      "Computer Networks",
      "Machine Learning",
      "AI Automation Mindset",
    ],
    metrics: [
      { label: "Degree", value: "BSc CSE" },
      { label: "Major", value: "Cybersecurity" },
      { label: "Result", value: "CGPA 3.23" },
    ],
  },
  {
    level: "HSC",
    label: "Science Foundation",
    title: "Higher Secondary Certificate",
    subtitle: "Science Group",
    institution: "Rajshahi Govt. City College, Rajshahi",
    faculty: "Science Background",
    duration: "2020",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    icon: <Layers3 size={24} />,
    role: "Supporting academic foundation",
    description:
      "Built a strong science foundation with emphasis on higher mathematics, analytical thinking, and structured problem-solving before entering computer science.",
    highlights: [
      "Science",
      "Higher Mathematics",
      "Analytical Thinking",
      "Problem Solving",
    ],
    metrics: [
      { label: "Group", value: "Science" },
      { label: "Passed", value: "2020" },
      { label: "Result", value: "GPA 5.00" },
    ],
  },
  {
    level: "SSC",
    label: "Early Academic Base",
    title: "Secondary School Certificate",
    subtitle: "Science Group",
    institution: "Court Model High School, Rajshahi",
    faculty: "Science Background",
    duration: "2018",
    status: "Completed",
    result: "GPA 5.00 / 5.00",
    icon: <ShieldCheck size={24} />,
    role: "Early learning foundation",
    description:
      "Formed my early academic base in science, logic, discipline, and structured learning, which later supported my growth in computer science and technical problem-solving.",
    highlights: ["Science", "Logic", "Discipline", "Structured Learning"],
    metrics: [
      { label: "Group", value: "Science" },
      { label: "Passed", value: "2018" },
      { label: "Result", value: "GPA 5.00" },
    ],
  },
];

const cvDriveLink = "#"; // Replace with your Google Drive CV link later.

const professionalEmail = "shahidulislamtanvir00@gmail.com";
const educationalEmail = "islam15-6538@diu.edu.bd";

const createGmailComposeLink = (email: string, subject: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email,
  )}&su=${encodeURIComponent(subject)}`;

const createMailtoLink = (email: string, subject: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const emailChannels = [
  {
    title: "Professional Email",
    value: professionalEmail,
    desc: "Best channel for work, collaboration, freelance, and technical opportunities.",
    href: createGmailComposeLink(professionalEmail, "Professional Inquiry"),
    fallbackHref: createMailtoLink(professionalEmail, "Professional Inquiry"),
    action: "Open Gmail draft",
    accent: "Primary Channel",
  },
  {
    title: "Educational Email",
    value: educationalEmail,
    desc: "Academic contact for university, research, and educational communication.",
    href: createGmailComposeLink(educationalEmail, "Academic Inquiry"),
    fallbackHref: createMailtoLink(educationalEmail, "Academic Inquiry"),
    action: "Open Gmail draft",
    accent: "Academic Channel",
  },
];

const contactLinks = [
  {
    title: "GitHub",
    handle: "SI-Tanveer",
    desc: "Code, experiments, automation builds, and engineering projects.",
    href: "https://github.com/SI-Tanveer",
    icon: <FaGithub size={26} />,
  },
  {
    title: "LinkedIn",
    handle: "Shahidul Islam",
    desc: "Professional profile, academic direction, and career updates.",
    href: "https://www.linkedin.com/in/si-tanveer",
    icon: <FaLinkedin size={26} />,
  },
  {
    title: "Facebook",
    handle: "Shahidul Islam",
    desc: "Social profile and direct reach for quick communication.",
    href: "https://www.facebook.com/share/1D7G9Yn877/",
    icon: <FaFacebookF size={24} />,
  },
  {
    title: "CV/Resume",
    handle: "Shahidul Islam",
    desc: "I am ready to collaborate",
    href: "https://drive.google.com/file/d/1sZkk20EMI1o_uUsTQ9xAZ15Wuw6QFHuC/view?usp=drivesdk",
    icon: <ArrowUpRight size={24} />,
    primary: true,
  },
];

function SectionShell({
  id,
  index,
  eyebrow,
  title,
  text,
  children,
}: SectionShellProps) {
  return (
    <section
      id={id}
      className="relative z-10 px-5 py-20 md:px-10 md:py-24 lg:px-16 xl:px-24 2xl:px-32"
    >
      <div className="mx-auto w-full max-w-[1580px]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="relative">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 backdrop-blur-md">
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.28em] text-cyan-200">
                {index}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.85)]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-black leading-[0.96] tracking-[-0.06em] text-white md:text-5xl xl:text-6xl">
              {title}
            </h2>
          </div>

          <div className="lg:pb-3">
            <p className="max-w-2xl text-base leading-8 text-white/58 md:text-lg">
              {text}
            </p>

            <div className="mt-7 h-px w-full bg-gradient-to-r from-cyan-300/45 via-white/10 to-transparent" />
          </div>
        </div>

        <div className="mt-10 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

function FlexCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-cyan-300/[0.052] hover:shadow-[0_0_38px_rgba(34,211,238,0.10)] ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-cyan-300/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

export default function Home() {
  const projectsRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress: projectsScrollProgress } = useScroll({
    target: projectsRef,
    offset: ["start 72%", "end 38%"],
  });

  const smoothProjectsProgress = useSpring(projectsScrollProgress, {
    stiffness: 110,
    damping: 28,
    mass: 0.35,
  });

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const activeSkill = skillStacks[activeSkillIndex];

  const [activeEducationIndex, setActiveEducationIndex] = useState(0);
  const activeEducation = educationItems[activeEducationIndex];

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#000104] text-white">
      <StarBackwall />
      <Navbar />

      <div className="pointer-events-none fixed inset-0 z-[1] bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.055),transparent_32%),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.62))]" />

      <div className="relative z-10">
        <Hero />

        {/* SIGNAL STRIP */}
        <section className="relative z-10 px-5 pb-20 md:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="mx-auto grid w-full max-w-[1580px] gap-4 md:grid-cols-3">
            {achievements.map((item) => (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/35 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.055]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-0 transition group-hover:opacity-100" />
                <p className="font-mono text-3xl font-black tracking-[-0.08em] text-cyan-200">
                  {item.value}
                </p>
                <p className="mt-2 font-mono text-[11px] font-black uppercase tracking-[0.24em] text-white/75">
                  {item.label}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/45">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <SectionShell
          id="about"
          index="[01]"
          eyebrow="About Me"
          title="I turn curiosity into secure, intelligent systems."
          text="A compact identity dossier built around cybersecurity passion, AI automation practice, and research-driven execution."
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_48px_rgba(34,211,238,0.06)] backdrop-blur-xl md:p-6 xl:p-7">
              <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/[0.075] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/[0.045] blur-3xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />

              <div className="relative z-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr] xl:items-stretch">
                {/* Primary identity panel */}
                <motion.article
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[1.65rem] border border-cyan-300/18 bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)] transition-all duration-500 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045] md:p-6"
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.12]" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-60" />

                  <div className="relative z-10">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                      <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.075] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/75">
                        <Fingerprint size={14} /> Identity Signal
                      </span>

                      <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100/70">
                        Contender Mindset
                      </span>
                    </div>

                    <h3 className="max-w-4xl text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-5xl">
                      MD Shahidul Islam Tanveer
                    </h3>

                    <p className="mt-4 max-w-3xl text-[16px] font-semibold leading-7 text-cyan-100/78">
                      Cybersecurity-focused CSE graduate from Daffodil International University, currently working as an AI Automation Engineer at Betopia Group.
                    </p>

                    <p className="mt-5 max-w-3xl text-[14.5px] leading-7 text-white/58">
                      My journey started with curiosity about hidden patterns, security puzzles, technical articles, books, and stories like Cicada 3301. Today, I connect that passion with automation workflows, agentic AI systems, LLM-based solutions, and security-aware research.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                      {aboutIdentityFacts.map((fact, index) => (
                        <motion.div
                          key={fact.label}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.35 }}
                          transition={{
                            duration: 0.42,
                            ease: [0.16, 1, 0.3, 1],
                            delay: index * 0.06,
                          }}
                          className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/[0.045]"
                        >
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.075] text-cyan-300">
                            {fact.icon}
                          </div>
                          <p className="font-mono text-[9.5px] font-black uppercase tracking-[0.18em] text-cyan-100/62">
                            {fact.label}
                          </p>
                          <p className="mt-2 text-sm font-black tracking-[-0.025em] text-white">
                            {fact.value}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-white/42">
                            {fact.detail}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.article>

                {/* Story panels */}
                <div className="grid gap-4">
                  {aboutStoryCards.map((card, index) => (
                    <motion.article
                      key={card.label}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.07,
                      }}
                      whileHover={{ y: -4 }}
                      className="group relative overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/35 p-5 transition-all duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.045] hover:shadow-[0_0_34px_rgba(34,211,238,0.08)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="flex gap-4">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.075] text-cyan-300">
                          {card.icon}
                        </span>

                        <div className="min-w-0">
                          <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                            {card.label}
                          </p>
                          <h4 className="mt-2 text-2xl font-black leading-tight tracking-[-0.045em] text-white">
                            {card.title}
                          </h4>
                          <p className="mt-3 text-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/68">
                            {card.text}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {card.tags.slice(0, 4).map((tag) => (
                              <span
                                key={tag}
                                className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white/48 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Bottom proof and mindset strip */}
              <div className="relative z-10 mt-5 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-[1.55rem] border border-cyan-300/18 bg-cyan-300/[0.055] p-5"
                >
                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/70">
                    Proof of Depth
                  </p>
                  <p className="mt-3 text-[15px] font-semibold leading-7 text-white/72">
                    Independently worked on a cybersecurity honeypot-based undergraduate thesis focused on real-world attacker behavior.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.06 }}
                  className="rounded-[1.55rem] border border-white/10 bg-black/35 p-5"
                >
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                      Operating Mindset
                    </p>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                      Passion into execution
                    </p>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-4">
                    {aboutMindsetFlow.map((item, index) => (
                      <div
                        key={item}
                        className="relative rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 text-center"
                      >
                        <p className="font-mono text-[9px] font-black uppercase tracking-[0.16em] text-cyan-100/64">
                          0{index + 1}
                        </p>
                        <p className="mt-2 text-xs font-black leading-5 tracking-[-0.02em] text-white/80">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* PROJECTS */}
        <div ref={projectsRef} className="relative">
          <SectionShell
            id="projects"
            index="[02]"
            eyebrow="Project Portfolio"
            title="Security aware AI systems and automation workflows"
            text="Selected work focused on integrating AI with security measures, AI automated workflows, context-aware systems, and engineering decisions that can be explained, improved, and secured."
          >
            <div className="relative mx-auto max-w-6xl">
              {/* Central scroll-progress line */}
              <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 lg:block">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                <motion.div
                  style={{
                    scaleY: smoothProjectsProgress,
                    transformOrigin: "top",
                  }}
                  className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-emerald-300 shadow-[0_0_24px_rgba(34,211,238,0.75)]"
                />

                <motion.div
                  style={{
                    scaleY: smoothProjectsProgress,
                    transformOrigin: "top",
                  }}
                  className="absolute left-1/2 top-0 h-full w-14 -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-2xl"
                />
              </div>

              <div className="space-y-10 lg:space-y-0">
                {featuredProjects.map((project, index) => {
                  const isLeft = index % 2 === 0;

                  return (
                    <motion.article
                      key={project.title}
                      initial={{ opacity: 0, y: 34 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.28 }}
                      transition={{
                        duration: 0.7,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.08,
                      }}
                      className="relative grid gap-5 lg:min-h-[360px] lg:grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)]"
                    >
                      {/* Project card */}
                      <motion.div
                        whileHover={{
                          y: -6,
                          scale: 1.015,
                          transition: {
                            duration: 0.25,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }}
                        className={`${
                          isLeft ? "lg:col-start-1" : "lg:col-start-3"
                        } ${index > 0 ? "lg:mt-16" : ""}`}
                      >
                        <FlexCard className="group relative min-h-[360px] overflow-hidden">
                          <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-300/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.14]" />
                          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-100" />

                          <div
                            className={`pointer-events-none absolute top-20 hidden h-px w-16 bg-gradient-to-r lg:block ${
                              isLeft
                                ? "-right-16 from-cyan-300/55 to-transparent"
                                : "-left-16 from-transparent to-cyan-300/55"
                            }`}
                          />

                          <div className="relative z-10">
                            <div className="mb-7 flex items-start justify-between gap-4">
                              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/35 group-hover:bg-cyan-300/[0.13]">
                                {project.icon}
                              </div>

                              <ArrowUpRight
                                size={20}
                                className="text-white/35 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300"
                              />
                            </div>

                            <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-cyan-200/70">
                              {project.type}
                            </p>

                            <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.055em] text-white">
                              {project.title}
                            </h3>

                            <p className="mt-5 text-[14.5px] leading-7 text-white/56 transition-colors duration-300 group-hover:text-white/68">
                              {project.desc}
                            </p>

                            <div className="mt-7 flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/50 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100/65"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            <div className="mt-8 rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.055] p-4 transition-all duration-300 group-hover:border-cyan-300/25 group-hover:bg-cyan-300/[0.075]">
                              <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/70">
                                {project.status}
                              </p>
                            </div>
                          </div>
                        </FlexCard>
                      </motion.div>

                      {/* Timeline node */}
                      <div className="hidden justify-center pt-12 lg:col-start-2 lg:row-start-1 lg:flex">
                        <motion.div
                          initial={{ scale: 0.75, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{
                            duration: 0.45,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.12 + index * 0.08,
                          }}
                          className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 bg-black/70 shadow-[0_0_28px_rgba(34,211,238,0.20)] backdrop-blur-md"
                        >
                          <span className="absolute h-12 w-12 rounded-full bg-cyan-300/[0.08]" />

                          <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]">
                            <span className="h-2 w-2 rounded-full bg-black" />
                          </span>
                        </motion.div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </SectionShell>
        </div>

        {/* RESEARCH */}
        <SectionShell
          id="research"
          index="[03]"
          eyebrow="Academic Research"
          title="Advancing Academic Research in Cybersecurity and Healthcare Systems"
          text="Research is one of the strongest parts of my academic identity. I am deeply interested in security-focused problems where attacker behavior, AI security, cryptography, steganography, and threat intelligence can be studied together to understand real risks and build more reliable digital systems."
        >
          <div className="mx-auto max-w-7xl space-y-7">
            {researchItems
              .filter((item) => item.highlight)
              .map((item) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                  }}
                  className="group relative overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/35 hover:bg-white/[0.055] hover:shadow-[0_0_70px_rgba(34,211,238,0.13)] md:p-8"
                >
                  {/* Professional accent frame */}
                  <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] bg-[linear-gradient(135deg,rgba(34,211,238,0.16),transparent_28%,transparent_72%,rgba(16,185,129,0.12))] opacity-70" />

                  {/* Left active line */}
                  <div className="pointer-events-none absolute inset-y-8 left-0 w-[3px] rounded-full bg-gradient-to-b from-cyan-200 via-cyan-400 to-emerald-300 shadow-[0_0_22px_rgba(34,211,238,0.65)]" />

                  {/* Soft glow */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.13]" />

                  {/* Hover scan line */}
                  <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-cyan-200/[0.08] to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: ["0%", "300%"] }}
                    transition={{
                      duration: 3.8,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                      ease: "easeInOut",
                    }}
                  />

                  <div className="relative z-10 grid gap-8 xl:grid-cols-[1.35fr_0.65fr] xl:items-start">
                    {/* Main featured content */}
                    <div>
                      <div className="mb-7 flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-cyan-300 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[0_0_26px_rgba(34,211,238,0.28)]">
                          Primary Research Strength
                        </span>

                        <span className="rounded-full border border-cyan-300/15 bg-black/35 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100/65">
                          {item.status}
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.12)] sm:flex">
                          {item.icon}
                        </div>

                        <div>
                          <p className="font-mono text-[10.5px] font-black uppercase tracking-[0.24em] text-cyan-100/70">
                            {item.type}
                          </p>

                          <h3 className="mt-4 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-5xl">
                            {item.title}
                          </h3>

                          <p className="mt-4 max-w-4xl text-[17px] font-semibold leading-8 text-cyan-100/78">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="mt-7 max-w-5xl text-[15.5px] leading-8 text-white/62">
                        {item.desc}
                      </p>

                      {/* Research value strip */}
                      <div className="mt-8 grid gap-3 md:grid-cols-3">
                        {[
                          {
                            label: "Problem",
                            value:
                              "Do attackers behave consistently across different exposed surfaces?",
                          },
                          {
                            label: "Method",
                            value:
                              "Empirical analysis using honeypot logs and external threat intelligence.",
                          },
                          {
                            label: "Value",
                            value:
                              "Security insight for attacker profiling, prioritization, and interpretation.",
                          },
                        ].map((point) => (
                          <div
                            key={point.label}
                            className="rounded-2xl border border-white/10 bg-black/30 p-4 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.045]"
                          >
                            <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100/65">
                              {point.label}
                            </p>
                            <p className="mt-3 text-[13px] font-medium leading-6 text-white/55">
                              {point.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Academic snapshot */}
                    <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300">
                          {item.icon}
                        </div>

                        <div>
                          <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/70">
                            Research Snapshot
                          </p>
                          <p className="mt-1 text-sm text-white/45">
                            Quick academic evaluation
                          </p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            label: "Domain",
                            value:
                              "Cybersecurity · Honeypots · Threat Intelligence",
                          },
                          {
                            label: "Data Sources",
                            value:
                              "Cowrie SSH/Telnet logs + OpenCanary service logs",
                          },
                          {
                            label: "Research Focus",
                            value:
                              "Cross-surface attacker behavior consistency",
                          },
                          {
                            label: "Contribution",
                            value:
                              "Evidence-based behavior analysis and security interpretation",
                          },
                        ].map((point) => (
                          <div
                            key={point.label}
                            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.045]"
                          >
                            <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100/65">
                              {point.label}
                            </p>

                            <p className="mt-2 text-sm font-medium leading-6 text-white/58">
                              {point.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="relative z-10 mt-8 flex flex-wrap gap-2 border-t border-white/10 pt-6">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-cyan-300/15 bg-black/35 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:text-cyan-100/85"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}

            {/* Secondary research records */}
            <div className="grid gap-6 lg:grid-cols-2">
              {researchItems
                .filter((item) => !item.highlight)
                .map((item, index) => (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.08,
                    }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
                    }}
                    className="group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/25 hover:bg-white/[0.05] hover:shadow-[0_0_38px_rgba(34,211,238,0.09)]"
                  >
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/[0.06] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.11]" />

                    <div className="relative z-10">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/30">
                          {item.icon}
                        </div>

                        <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-white/48 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100/65">
                          {item.status}
                        </span>
                      </div>

                      <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-200/70">
                        {item.type}
                      </p>

                      <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.05em] text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm font-semibold leading-6 text-cyan-100/68">
                        {item.subtitle}
                      </p>

                      <p className="mt-5 text-sm leading-7 text-white/55 transition-colors duration-300 group-hover:text-white/68">
                        {item.desc}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.13em] text-white/50 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:text-cyan-100/72"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
            </div>
          </div>
        </SectionShell>

        {/* SKILLS */}
        <SectionShell
          id="skills"
          index="[04]"
          eyebrow="Capability Matrix"
          title="Skill Intelligence Map"
          text="A scalable view of my practical stack across AI engineering, backend systems, automation, web technologies, data analysis, and security research direction."
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_65px_rgba(34,211,238,0.07)] backdrop-blur-xl md:p-6 xl:p-7">
            {/* Ambient system background */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-300/[0.055] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.08),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_35%,rgba(34,211,238,0.035))]" />

            {/* Subtle scan line */}
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent"
              animate={{ y: [0, 620, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10 grid gap-5 xl:grid-cols-[0.78fr_1.12fr_0.9fr] xl:items-stretch">
              {/* LEFT: identity and category controls */}
              <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="mb-7 flex items-center justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
                    <Orbit size={28} />
                  </div>

                  <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/70">
                    Interactive Stack
                  </span>
                </div>

                <h3 className="text-3xl font-black leading-[1.05] tracking-[-0.055em] text-white md:text-4xl">
                  AI Engineer × Security-Aware Builder
                </h3>

                <p className="mt-4 text-[14.5px] leading-7 text-white/55">
                  Click any capability domain to inspect the focus area and the
                  exact tools/skills inside it. You can edit the stack from the
                  <span className="font-semibold text-cyan-100/75">
                    {" "}
                    skillStacks{" "}
                  </span>
                  array.
                </p>

                <div className="mt-7 grid gap-2">
                  {skillStacks.map((group, index) => {
                    const isActive = activeSkillIndex === index;

                    return (
                      <motion.button
                        key={group.category}
                        type="button"
                        onClick={() => setActiveSkillIndex(index)}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.985 }}
                        className={`group/tab relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                          isActive
                            ? "border-cyan-300/35 bg-cyan-300/[0.09] shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                            : "border-white/10 bg-white/[0.035] hover:border-cyan-300/25 hover:bg-cyan-300/[0.045]"
                        }`}
                      >
                        <div className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cyan-200 to-emerald-300 opacity-0 transition-opacity duration-300 group-hover/tab:opacity-70" />

                        <div className="flex items-center gap-3">
                          <span
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                              isActive
                                ? "border-cyan-300/35 bg-cyan-300/[0.12] text-cyan-200"
                                : "border-white/10 bg-black/30 text-white/45 group-hover/tab:text-cyan-200"
                            }`}
                          >
                            {group.icon}
                          </span>

                          <span className="min-w-0">
                            <span
                              className={`block font-mono text-[10px] font-black uppercase tracking-[0.2em] ${
                                isActive
                                  ? "text-cyan-100/80"
                                  : "text-white/45 group-hover/tab:text-cyan-100/65"
                              }`}
                            >
                              0{index + 1}
                            </span>

                            <span className="mt-1 block truncate text-[14px] font-black tracking-[-0.02em] text-white">
                              {group.category}
                            </span>
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* CENTER: orbit skill map */}
              <div className="relative min-h-[460px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/30 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="absolute inset-6 rounded-full border border-cyan-300/[0.08]" />
                <div className="absolute inset-14 rounded-full border border-white/[0.06]" />
                <div className="absolute inset-24 rounded-full border border-cyan-300/[0.07]" />

                <motion.div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-cyan-300/[0.12]"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 36,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="absolute left-1/2 top-1/2 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.08] text-center shadow-[0_0_45px_rgba(34,211,238,0.13)] backdrop-blur-xl">
                  <span className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-cyan-100/65">
                    Core Stack
                  </span>
                  <span className="mt-2 text-3xl font-black tracking-[-0.055em] text-white">
                    {skillStacks.length}
                  </span>
                  <span className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/38">
                    Domains
                  </span>
                </div>

                {skillStacks.map((group, index) => {
                  const isActive = activeSkillIndex === index;

                  return (
                    <motion.button
                      key={group.category}
                      type="button"
                      onClick={() => setActiveSkillIndex(index)}
                      initial={{ opacity: 0, scale: 0.82 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.45,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.06,
                      }}
                      whileHover={{ y: -4, scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      className={`absolute ${group.orbitClass} z-10 w-[150px] rounded-2xl border p-3 text-left backdrop-blur-md transition-all duration-300 ${
                        isActive
                          ? "border-cyan-300/45 bg-cyan-300/[0.12] shadow-[0_0_34px_rgba(34,211,238,0.18)]"
                          : "border-white/10 bg-black/45 hover:border-cyan-300/30 hover:bg-cyan-300/[0.07]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border ${
                            isActive
                              ? "border-cyan-300/40 bg-cyan-300/[0.14] text-cyan-200"
                              : "border-white/10 bg-white/[0.04] text-white/45"
                          }`}
                        >
                          {group.icon}
                        </span>

                        <span className="text-[11.5px] font-black leading-4 tracking-[-0.02em] text-white">
                          {group.category}
                        </span>
                      </div>

                      <p className="mt-2 truncate font-mono text-[8.5px] font-bold uppercase tracking-[0.16em] text-cyan-100/45">
                        {group.signal}
                      </p>
                    </motion.button>
                  );
                })}
              </div>

              {/* RIGHT: active detail panel */}
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/[0.08] blur-3xl" />

                <motion.div
                  key={activeSkill.category}
                  initial={{ opacity: 0, x: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10"
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
                      {activeSkill.icon}
                    </div>

                    <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-cyan-100/65">
                      Active Domain
                    </span>
                  </div>

                  <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                    {activeSkill.signal}
                  </p>

                  <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.055em] text-white">
                    {activeSkill.category}
                  </h3>

                  <p className="mt-4 text-[14.5px] leading-7 text-white/58">
                    {activeSkill.focus}
                  </p>

                  <div className="mt-7 overflow-hidden rounded-2xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/[0.11] via-white/[0.045] to-emerald-300/[0.055] p-4 shadow-[0_0_26px_rgba(34,211,238,0.08)]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-mono text-[10.5px] font-black uppercase tracking-[0.22em] text-cyan-100/78">
                          Capability Skills
                        </p>
                        <p className="mt-1 text-sm leading-6 text-white/52">
                          Highlighted for fast scan skill-sets
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {activeSkill.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          duration: 0.34,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.04,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.015,
                          transition: {
                            duration: 0.2,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }}
                        className="group/skill relative overflow-hidden rounded-2xl border border-cyan-300/18 bg-gradient-to-br from-cyan-300/[0.105] via-white/[0.05] to-black/35 p-3.5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.055),0_0_22px_rgba(34,211,238,0.045)] transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-45 transition-opacity duration-300 group-hover/skill:opacity-100" />

                        <div className="flex items-center gap-3">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/25 bg-black/35 font-mono text-[10px] font-black uppercase tracking-[-0.02em] text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.08)] transition-all duration-300 group-hover/skill:border-cyan-300/40 group-hover/skill:bg-cyan-300/[0.13] group-hover/skill:text-white">
                            {skill.mark}
                          </span>

                          <span className="min-w-0 text-[13.5px] font-black leading-5 tracking-[-0.025em] text-white/88 transition-colors duration-300 group-hover/skill:text-white">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* EDUCATION */}
        <SectionShell
          id="education"
          index="[05]"
          eyebrow="Academic Background"
          title="Academic foundation shaped by cybersecurity, computer science, and practical engineering."
          text="My academic journey is centered on a BSc in Computer Science & Engineering with a cybersecurity focus, supported by a strong science foundation from HSC and SSC."
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_60px_rgba(34,211,238,0.07)] backdrop-blur-xl md:p-6 xl:p-7">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.075] blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-300/[0.045] blur-3xl" />
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent" />

              <div className="relative z-10 grid gap-6 xl:grid-cols-[0.82fr_1.18fr]">
                {/* LEFT: academic selector */}
                <div className="rounded-[1.75rem] border border-white/10 bg-black/35 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="mb-7 flex items-center justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.10)]">
                      <GraduationCap size={28} />
                    </div>

                    <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.07] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/70">
                      Academic Index
                    </span>
                  </div>

                  <h3 className="text-3xl font-black leading-[1.05] tracking-[-0.055em] text-white md:text-4xl">
                    BSc as the core. HSC and SSC as strong foundations.
                  </h3>

                  <p className="mt-4 text-[14.5px] leading-7 text-white/55">
                    Select each academic phase to view the result, institution,
                    focus areas, and the role it played in my technical growth.
                  </p>

                  <div className="mt-7 grid gap-3">
                    {educationItems.map((item, index) => {
                      const isActive = activeEducationIndex === index;

                      return (
                        <motion.button
                          key={item.level}
                          type="button"
                          onClick={() => setActiveEducationIndex(index)}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.985 }}
                          className={`group/edu relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 ${
                            isActive
                              ? "border-cyan-300/35 bg-cyan-300/[0.09] shadow-[0_0_28px_rgba(34,211,238,0.12)]"
                              : "border-white/10 bg-white/[0.035] hover:border-cyan-300/25 hover:bg-cyan-300/[0.045]"
                          }`}
                        >
                          <div
                            className={`absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-cyan-200 to-emerald-300 transition-opacity duration-300 ${
                              isActive
                                ? "opacity-100"
                                : "opacity-0 group-hover/edu:opacity-70"
                            }`}
                          />

                          <div className="flex items-center gap-3">
                            <span
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                                isActive
                                  ? "border-cyan-300/35 bg-cyan-300/[0.12] text-cyan-200"
                                  : "border-white/10 bg-black/30 text-white/45 group-hover/edu:text-cyan-200"
                              }`}
                            >
                              {item.icon}
                            </span>

                            <span className="min-w-0">
                              <span
                                className={`block font-mono text-[10px] font-black uppercase tracking-[0.2em] ${
                                  isActive
                                    ? "text-cyan-100/80"
                                    : "text-white/45 group-hover/edu:text-cyan-100/65"
                                }`}
                              >
                                {item.label}
                              </span>

                              <span className="mt-1 block text-lg font-black tracking-[-0.035em] text-white">
                                {item.level}
                              </span>

                              <span className="mt-1 block truncate text-sm leading-6 text-white/48">
                                {item.institution}
                              </span>
                            </span>
                          </div>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                {/* RIGHT: active education dossier */}
                <motion.article
                  key={activeEducation.level}
                  initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-cyan-300/20 bg-white/[0.045] p-6 shadow-[0_0_55px_rgba(34,211,238,0.08)] backdrop-blur-xl transition-all duration-500 hover:border-cyan-300/35 hover:bg-white/[0.055] hover:shadow-[0_0_70px_rgba(34,211,238,0.12)] md:p-8"
                >
                  <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.08] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.13]" />
                  <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-emerald-300/[0.045] blur-3xl" />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/65 to-transparent" />

                  <div className="relative z-10">
                    <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                          {activeEducation.icon}
                        </div>

                        <div>
                          <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-cyan-100/70">
                            {activeEducation.label}
                          </p>
                          <p className="mt-1 text-sm text-white/45">
                            {activeEducation.role}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-cyan-300 px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-black shadow-[0_0_26px_rgba(34,211,238,0.26)]">
                        {activeEducation.status}
                      </span>
                    </div>

                    <p className="font-mono text-[10.5px] font-black uppercase tracking-[0.24em] text-cyan-200/70">
                      {activeEducation.faculty}
                    </p>

                    <h3 className="mt-4 max-w-5xl text-4xl font-black leading-[0.98] tracking-[-0.06em] text-white md:text-5xl">
                      {activeEducation.title}
                    </h3>

                    <p className="mt-4 text-[18px] font-semibold leading-8 text-cyan-100/78">
                      {activeEducation.subtitle}
                    </p>

                    <div className="mt-6 grid gap-3 md:grid-cols-3">
                      {activeEducation.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-white/10 bg-black/30 p-4"
                        >
                          <p className="font-mono text-[10px] font-black uppercase tracking-[0.18em] text-cyan-100/60">
                            {metric.label}
                          </p>
                          <p className="mt-2 text-sm font-semibold text-white/75">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                          Institution
                        </p>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                          {activeEducation.duration}
                        </p>
                      </div>

                      <p className="mt-3 text-lg font-black tracking-[-0.035em] text-white">
                        {activeEducation.institution}
                      </p>

                      <p className="mt-4 text-[15px] leading-8 text-white/62">
                        {activeEducation.description}
                      </p>
                    </div>

                    <div className="mt-7">
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <p className="font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                          Academic Focus
                        </p>

                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">
                          {activeEducation.highlights.length} Areas
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2.5">
                        {activeEducation.highlights.map((item, index) => (
                          <motion.span
                            key={item}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.32,
                              ease: [0.16, 1, 0.3, 1],
                              delay: index * 0.045,
                            }}
                            className="rounded-full border border-cyan-300/20 bg-cyan-300/[0.075] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.13em] text-cyan-50/85 shadow-[0_0_18px_rgba(34,211,238,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.12]"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          </div>
        </SectionShell>

        {/* CONTACT */}
        <SectionShell
          id="contact"
          index="[06]"
          eyebrow="Contact Gateway"
          title="Let’s connect through the right channel."
          text="For professional opportunities, academic communication, collaborations, research ideas, or technical projects, use the channel that fits best."
        >
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_0_70px_rgba(34,211,238,0.08)] backdrop-blur-xl md:p-6 xl:p-7">
            {/* Premium background depth */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/[0.08] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-emerald-300/[0.055] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(34,211,238,0.08),transparent_32%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.06),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_42%,rgba(34,211,238,0.035))]" />

            <div className="relative z-10 grid gap-6 xl:grid-cols-[0.9fr_1.1fr] xl:items-stretch">
              {/* LEFT: Contact identity + emails */}
              <div className="relative overflow-hidden rounded-[1.9rem] border border-cyan-300/20 bg-black/35 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.045)]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/[0.09] blur-3xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

                <div className="relative z-10">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/[0.09] text-cyan-300 shadow-[0_0_28px_rgba(34,211,238,0.12)]">
                      <Mail size={30} />
                    </div>

                    <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-4 py-2 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-emerald-100/75">
                      Available for contact
                    </span>
                  </div>

                  <h3 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.06em] text-white md:text-5xl">
                    Professional, academic, and technical communication.
                  </h3>

                  <p className="mt-6 max-w-2xl text-[15.5px] leading-8 text-white/60">
                    I am open to AI engineering work, automation projects,
                    cybersecurity-focused collaboration, research discussion,
                    and technical opportunities where reliability and security
                    matter.
                  </p>

                  <div className="mt-8 space-y-3">
                    {emailChannels.map((channel, index) => (
                      <motion.a
                        key={channel.value}
                        href={channel.href}
                        target="_blank"
                        rel="noreferrer"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.35 }}
                        transition={{
                          duration: 0.45,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.08,
                        }}
                        whileHover={{
                          y: -3,
                          transition: {
                            duration: 0.22,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        }}
                        className="group/mail relative block overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:shadow-[0_0_32px_rgba(34,211,238,0.10)]"
                      >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent opacity-40 transition-opacity duration-300 group-hover/mail:opacity-100" />

                        <div className="flex items-start gap-4">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 transition-all duration-300 group-hover/mail:scale-105 group-hover/mail:border-cyan-300/35">
                            <Mail size={20} />
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="flex flex-wrap items-center gap-2">
                              <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-cyan-100/65">
                                {channel.accent}
                              </span>
                              <span className="hidden h-1 w-1 rounded-full bg-cyan-300/55 sm:block" />
                              <span className="text-[12px] font-semibold text-white/38">
                                {channel.title}
                              </span>
                            </span>

                            <span className="mt-2 block break-all text-[15px] font-black tracking-[-0.02em] text-white transition-colors duration-300 group-hover/mail:text-cyan-50">
                              {channel.value}
                            </span>

                            <span className="mt-2 block text-sm leading-6 text-white/48 transition-colors duration-300 group-hover/mail:text-white/62">
                              {channel.desc}
                            </span>

                            <span className="mt-3 inline-flex items-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-cyan-100/62 transition-all duration-300 group-hover/mail:border-cyan-300/30 group-hover/mail:text-cyan-100/85">
                              {channel.action}
                            </span>
                          </span>

                          <ArrowUpRight
                            size={18}
                            className="shrink-0 text-white/30 transition duration-300 group-hover/mail:translate-x-1 group-hover/mail:-translate-y-1 group-hover/mail:text-cyan-300"
                          />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: Social and profile gateways */}
              <div className="grid gap-5 sm:grid-cols-2">
                {contactLinks.map((link, index) => {
                  const isPlaceholder = link.href === "#";

                  return (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      target={isPlaceholder ? undefined : "_blank"}
                      rel={isPlaceholder ? undefined : "noreferrer"}
                      initial={{ opacity: 0, y: 22 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                        delay: index * 0.07,
                      }}
                      whileHover={{
                        y: -6,
                        scale: 1.015,
                        transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
                      }}
                      whileTap={{ scale: 0.985 }}
                      className={`group relative min-h-[210px] overflow-hidden rounded-[1.9rem] border p-6 backdrop-blur-xl transition-all duration-500 ${
                        link.primary
                          ? "border-cyan-300/30 bg-cyan-300/[0.085] text-cyan-100 hover:border-cyan-300/45 hover:bg-cyan-300/[0.12] hover:shadow-[0_0_45px_rgba(34,211,238,0.16)]"
                          : "border-white/10 bg-black/35 text-white/75 hover:border-cyan-300/35 hover:bg-cyan-300/[0.06] hover:text-cyan-100 hover:shadow-[0_0_38px_rgba(34,211,238,0.10)]"
                      }`}
                    >
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/55 to-transparent opacity-45 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/[0.07] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.13]" />

                      <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-4">
                            <span className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-300 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300/35 group-hover:bg-cyan-300/[0.12]">
                              {link.icon}
                            </span>

                            <ArrowUpRight
                              size={19}
                              className="text-white/32 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-300"
                            />
                          </div>

                          <p className="mt-6 font-mono text-[10px] font-black uppercase tracking-[0.22em] text-cyan-100/65">
                            {link.handle}
                          </p>

                          <h3 className="mt-3 text-2xl font-black tracking-[-0.045em] text-white">
                            {link.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-white/52 transition-colors duration-300 group-hover:text-white/68">
                            {link.desc}
                          </p>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition-all duration-300 group-hover:border-cyan-300/20 group-hover:bg-cyan-300/[0.045]">
                          <p className="font-mono text-[9.5px] font-black uppercase tracking-[0.2em] text-white/42">
                            {isPlaceholder ? "Ready to update" : "Open profile"}
                          </p>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </SectionShell>
      </div>
    </main>
  );
}

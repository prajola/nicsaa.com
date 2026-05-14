import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Activity,
  Brain,
  Zap,
  Eye,
  Plug,
  TrendingUp,
  Cpu,
  Radar,
  Workflow,
  Bot,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Building2,
  Rocket,
  Wrench,
  Linkedin,
  Twitter,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <Nav />
      <Hero />
      <WhatIs />
      <WhyNicsaa />
      <UniqueAdvantage />
      <Features />
      <UseCases />
      <Competitors />
      <Vision />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ── NAV ───────────────────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/40 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4 px-6">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500" />
            <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center font-display font-bold text-white text-sm">
              N
            </div>
          </div>
          <span className="font-display font-semibold text-lg tracking-tight">
            Nicsaa
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1 text-sm">
          {[
            ["Why", "#why"],
            ["Features", "#features"],
            ["Use Cases", "#use-cases"],
            ["Compare", "#compare"],
            ["Vision", "#vision"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="px-3 py-2 rounded-md text-white/65 hover:text-white hover:bg-white/5 transition"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a href="#cta" className="hidden sm:inline-flex btn btn-ghost text-sm">
            Get Early Access
          </a>
          <a href="#cta" className="btn btn-primary text-sm">
            Book a Demo
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ── HERO ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="section pt-44 md:pt-52 pb-24 text-center">
      <div className="container">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col items-center gap-6"
        >
          <motion.div variants={fadeUp}>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Autonomous AI · Operating Layer
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="h-hero max-w-4xl"
          >
            <span className="text-gradient">Run Your Business on</span>{" "}
            <span className="text-neon">Autopilot</span>{" "}
            <span className="text-gradient">with AI.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-white/55 max-w-2xl leading-relaxed font-light"
          >
            <span className="text-white font-medium">Nicsaa</span> is an autonomous AI
            decision layer that analyzes, predicts, and executes actions across your
            entire business — from infrastructure to revenue.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="font-mono text-xs tracking-[0.3em] uppercase text-white/40 mt-2"
          >
            No dashboards · No delays · Just outcomes.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 justify-center mt-4">
            <a href="#cta" className="btn btn-primary">
              Get Early Access
              <ArrowRight size={16} />
            </a>
            <a href="#cta" className="btn btn-ghost">
              Book a Demo
            </a>
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

/* Animated terminal-style block under the hero */
function HeroVisual() {
  const lines = [
    { tag: "scan",    body: "16 services · 4 clusters · 312 active resources" },
    { tag: "predict", body: "cost-spike risk 92% confidence — payments-svc" },
    { tag: "decide",  body: "rightsize HPA · scale 8 → 5 · save $14,200/mo" },
    { tag: "act",     body: "patch applied · rollout healthy · MTTR 31s" },
  ];

  const tagColor: Record<string, string> = {
    scan:    "text-cyan-300/90",
    predict: "text-violet-300/90",
    decide:  "text-fuchsia-300/90",
    act:     "text-emerald-300/90",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      className="relative mt-16 mx-auto max-w-3xl"
    >
      <div className="glass rounded-2xl p-1 overflow-hidden">
        <div className="rounded-xl bg-black/60 p-5 md:p-7 text-left font-mono text-[12.5px] md:text-sm leading-relaxed">
          <div className="flex items-center gap-1.5 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-white/40 text-[11px] tracking-wider uppercase">
              nicsaa://autonomous-loop
            </span>
          </div>
          {lines.map((l, i) => (
            <motion.div
              key={l.tag}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.18 }}
              className="flex items-start gap-3 py-1"
            >
              <span className={`${tagColor[l.tag]} font-semibold uppercase text-[10px] tracking-widest min-w-[60px]`}>
                [{l.tag}]
              </span>
              <span className="text-white/80">{l.body}</span>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="mt-3 flex items-center gap-2 text-emerald-400/90 text-[11px] uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            loop online · learning
          </motion.div>
        </div>
      </div>
      <div className="absolute -inset-x-12 -bottom-10 h-24 bg-gradient-to-t from-violet-500/15 to-transparent blur-3xl pointer-events-none" />
    </motion.div>
  );
}

/* ── WHAT IS Nicsaa ────────────────────────────────────────── */
function WhatIs() {
  return (
    <Section eyebrow={<><Brain size={12} /> What is Nicsaa</>} id="what">
      <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <h2 className="h-display mb-6">
            <span className="text-gradient">An AI operating layer that</span>{" "}
            <span className="text-neon">runs your operations.</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed font-light mb-4">
            Nicsaa — <em className="not-italic text-white/85">Neural Intelligence for
            Cognitive Systems & Autonomous Actions</em> — sits on top of your tools and
            systems, transforming raw data into real-time decisions and automated actions.
          </p>
          <p className="text-white/55 text-base leading-relaxed font-light">
            Instead of giving you more dashboards and alerts, Nicsaa runs your operations
            intelligently and autonomously.
          </p>
          <div className="flex flex-wrap gap-2 mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
            <span className="px-3 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200">
              It connects.
            </span>
            <span className="px-3 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/30 text-violet-200">
              It understands.
            </span>
            <span className="px-3 py-1.5 rounded-full bg-fuchsia-400/10 border border-fuchsia-400/30 text-fuchsia-200">
              It acts.
            </span>
          </div>
        </div>

        <DiagramLoop />
      </div>
    </Section>
  );
}

function DiagramLoop() {
  const nodes = [
    { label: "Predict", icon: <Radar size={18} /> },
    { label: "Decide",  icon: <Cpu size={18} /> },
    { label: "Act",     icon: <Bot size={18} /> },
  ];
  return (
    <div className="relative glass rounded-2xl p-8 md:p-10">
      <div className="flex flex-col gap-4">
        {nodes.map((n) => (
          <div key={n.label} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-200">
              {n.icon}
            </div>
            <div className="flex-1">
              <div className="font-display font-semibold">{n.label}</div>
              <div className="text-xs text-white/45 mt-0.5">
                {n.label === "Predict" && "Forecasts the next state of your business."}
                {n.label === "Decide"  && "Chooses the best action against your goals."}
                {n.label === "Act"     && "Executes via APIs · safely · reversibly."}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/40 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        continuous loop
      </div>
    </div>
  );
}

/* ── WHY Nicsaa ────────────────────────────────────────────── */
function WhyNicsaa() {
  const pains = [
    "Too many tools, no unified intelligence.",
    "Alerts without actions.",
    "Slow human response times.",
    "Hidden cost leaks & missed opportunities.",
  ];
  return (
    <Section eyebrow={<><Zap size={12} /> Why Nicsaa</>} id="why">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="h-display mb-6">
            <span className="text-gradient">Modern businesses are</span>{" "}
            <span className="text-neon">drowning in data,</span>{" "}
            <span className="text-gradient">starving for decisions.</span>
          </h2>
          <p className="text-white/55 leading-relaxed font-light">
            Dashboards give you signals. Alerts give you noise. Neither moves your business
            forward.
          </p>
          <p className="text-white/75 text-lg mt-6 font-medium">
            Nicsaa replaces reactive operations with{" "}
            <span className="text-neon font-semibold">proactive, autonomous execution.</span>
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="flex flex-col gap-3"
        >
          {pains.map((p) => (
            <motion.li
              key={p}
              variants={fadeUp}
              className="glass rounded-xl px-5 py-4 flex items-start gap-3"
            >
              <div className="mt-1 w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(255,92,242,0.7)]" />
              <span className="text-white/80">{p}</span>
            </motion.li>
          ))}
          <motion.div
            variants={fadeUp}
            className="mt-3 px-5 py-4 rounded-xl bg-gradient-to-r from-cyan-400/10 via-violet-400/10 to-fuchsia-400/10 border border-white/10 font-mono text-xs tracking-[0.25em] uppercase text-white/65 text-center"
          >
            dashboards → decisions → actions
          </motion.div>
        </motion.ul>
      </div>
    </Section>
  );
}

/* ── UNIQUE ADVANTAGE ──────────────────────────────────────── */
function UniqueAdvantage() {
  const items = [
    {
      icon: <Rocket size={20} />,
      title: "Autonomous Decision-Making",
      body: "Nicsaa doesn't just analyze — it decides and executes in real time.",
    },
    {
      icon: <Zap size={20} />,
      title: "Action-First AI",
      body: "Every insight leads to an immediate, measurable action.",
    },
    {
      icon: <Layers size={20} />,
      title: "Unified Intelligence Layer",
      body: "One AI brain across infrastructure, sales, finance, and operations.",
    },
    {
      icon: <Radar size={20} />,
      title: "Predict → Decide → Act",
      body: "A continuous loop that optimizes your business automatically.",
    },
    {
      icon: <Eye size={20} />,
      title: "Explainable AI",
      body: "Every decision is transparent, traceable, and auditable.",
    },
    {
      icon: <Plug size={20} />,
      title: "Plug-and-Play Integration",
      body: "Works with your existing stack — no replacements needed.",
    },
    {
      icon: <TrendingUp size={20} />,
      title: "Real Business Impact",
      body: "Reduces costs, increases revenue, and prevents losses.",
    },
    {
      icon: <Brain size={20} />,
      title: "Self-Learning System",
      body: "Gets smarter with every decision it makes.",
    },
  ];

  return (
    <Section eyebrow={<><Sparkles size={12} /> Unique Advantage</>} id="advantage">
      <h2 className="h-display text-center mb-3 max-w-3xl mx-auto">
        <span className="text-gradient">What makes</span>{" "}
        <span className="text-neon">Nicsaa different.</span>
      </h2>
      <p className="text-center text-white/55 max-w-2xl mx-auto mb-14 font-light">
        Eight engineering decisions that separate an autonomous system from another
        observability tool.
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {items.map((it) => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            className="glass rounded-xl p-5 flex flex-col gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15 border border-white/10 flex items-center justify-center text-cyan-200">
              {it.icon}
            </div>
            <div className="font-display font-semibold text-[1rem] leading-snug">
              {it.title}
            </div>
            <div className="text-sm text-white/55 leading-relaxed font-light">
              {it.body}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ── FEATURES ──────────────────────────────────────────────── */
function Features() {
  const features = [
    {
      icon: <Activity size={22} />,
      title: "Real-Time Intelligence",
      body:
        "Understands your entire business in real time — infrastructure, users, revenue, and operations.",
    },
    {
      icon: <Radar size={22} />,
      title: "Predictive Decision Engine",
      body:
        "Forecasts failures, cost spikes, churn risks, and growth opportunities before they happen.",
    },
    {
      icon: <Bot size={22} />,
      title: "Autonomous Actions",
      body:
        "Fixes issues, optimizes systems, and executes workflows automatically.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Explainable Decisions",
      body:
        "Clear, audit-grade reasoning behind every action — replay any decision, end-to-end.",
    },
    {
      icon: <Plug size={22} />,
      title: "Seamless Integrations",
      body:
        "Kubernetes & cloud platforms · Databases & analytics tools · CRM & business systems.",
    },
  ];

  return (
    <Section eyebrow={<><Workflow size={12} /> Features</>} id="features">
      <h2 className="h-display text-center mb-3 max-w-3xl mx-auto">
        <span className="text-gradient">What</span>{" "}
        <span className="text-neon">Nicsaa</span>{" "}
        <span className="text-gradient">does.</span>
      </h2>
      <p className="text-center text-white/55 max-w-xl mx-auto mb-14 font-light">
        Five capabilities that turn your business signals into autonomous outcomes.
      </p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            className={`glass rounded-2xl p-6 ${
              idx === 0 ? "lg:row-span-2 lg:flex lg:flex-col lg:justify-between" : ""
            }`}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400/20 via-violet-500/15 to-fuchsia-500/10 border border-white/10 flex items-center justify-center text-cyan-200 mb-4">
                {f.icon}
              </div>
              <div className="font-display font-semibold text-xl mb-2">
                {f.title}
              </div>
              <p className="text-white/55 leading-relaxed font-light">{f.body}</p>
            </div>
            {idx === 0 && (
              <div className="mt-6 font-mono text-[11px] tracking-[0.25em] uppercase text-cyan-300/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                live signal mesh
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ── USE CASES ─────────────────────────────────────────────── */
function UseCases() {
  const cases = [
    {
      icon: <Wrench size={22} />,
      title: "DevOps & SRE",
      kicker: "Production teams",
      points: [
        "Auto-detect and resolve incidents",
        "Optimize infrastructure performance",
        "Cut MTTR by 80%+",
      ],
      tint: "from-cyan-400/20 to-cyan-400/0",
    },
    {
      icon: <Rocket size={22} />,
      title: "Startups",
      kicker: "Scale lean",
      points: [
        "Reduce burn rate",
        "Automate operations with minimal teams",
        "Ship faster, scale safer",
      ],
      tint: "from-violet-500/25 to-violet-500/0",
    },
    {
      icon: <Building2 size={22} />,
      title: "Enterprises",
      kicker: "Cross-functional",
      points: [
        "Cross-functional decision automation",
        "Improve efficiency at scale",
        "Audit-ready, compliance-friendly",
      ],
      tint: "from-fuchsia-500/25 to-fuchsia-500/0",
    },
  ];

  return (
    <Section eyebrow="Use Cases" id="use-cases">
      <h2 className="h-display text-center mb-14 max-w-3xl mx-auto">
        <span className="text-gradient">Built for</span>{" "}
        <span className="text-neon">every modern team.</span>
      </h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="grid md:grid-cols-3 gap-5"
      >
        {cases.map((c) => (
          <motion.div
            key={c.title}
            variants={fadeUp}
            className="relative glass rounded-2xl p-7 overflow-hidden"
          >
            <div className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${c.tint} blur-3xl pointer-events-none`} />
            <div className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-3">
                {c.kicker}
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-200">
                  {c.icon}
                </div>
                <div className="font-display font-semibold text-2xl">{c.title}</div>
              </div>
              <ul className="flex flex-col gap-2.5">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-cyan-300/85 flex-shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ── COMPETITORS ───────────────────────────────────────────── */
function Competitors() {
  const rows = [
    { cat: "Monitoring",    existing: "Datadog, Grafana",     limit: "Only alerts, no actions" },
    { cat: "Observability", existing: "New Relic",            limit: "Insights without execution" },
    { cat: "AI Tools",      existing: "ChatGPT, Copilot",     limit: "Assistive, not autonomous" },
    { cat: "Automation",    existing: "Zapier",               limit: "Rule-based, not intelligent" },
  ];
  const edges = [
    "Executes decisions automatically",
    "Learns and adapts continuously",
    "Works across the entire business",
    "Delivers real outcomes, not just insights",
  ];

  return (
    <Section eyebrow="Competitors" id="compare">
      <h2 className="h-display text-center mb-3 max-w-3xl mx-auto">
        <span className="text-gradient">How</span>{" "}
        <span className="text-neon">Nicsaa</span>{" "}
        <span className="text-gradient">is different.</span>
      </h2>
      <p className="text-center text-white/55 max-w-xl mx-auto mb-14 font-light">
        Not a tool. Not an assistant. An autonomous system.
      </p>

      <div className="glass rounded-2xl overflow-hidden">
        <div className="grid grid-cols-[1.1fr_1.5fr_1.6fr] font-mono text-[10.5px] uppercase tracking-[0.28em] text-white/45 border-b border-white/10">
          <div className="p-5">Category</div>
          <div className="p-5 border-l border-white/10">Existing Solutions</div>
          <div className="p-5 border-l border-white/10">Limitation</div>
        </div>
        {rows.map((r, i) => (
          <div
            key={r.cat}
            className={`grid grid-cols-[1.1fr_1.5fr_1.6fr] ${
              i < rows.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="p-5 font-display font-semibold text-white">{r.cat}</div>
            <div className="p-5 border-l border-white/10 text-white/65">{r.existing}</div>
            <div className="p-5 border-l border-white/10 text-white/55 font-light">{r.limit}</div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-400/[0.07] via-violet-500/[0.07] to-fuchsia-500/[0.07] p-7">
        <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-200/85 mb-4">
          Nicsaa's Edge
        </div>
        <ul className="grid sm:grid-cols-2 gap-3">
          {edges.map((e) => (
            <li key={e} className="flex items-start gap-2.5">
              <CheckCircle2 size={18} className="text-cyan-300 flex-shrink-0 mt-0.5" />
              <span className="text-white/90">{e}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

/* ── VISION ────────────────────────────────────────────────── */
function Vision() {
  return (
    <Section eyebrow="Vision" id="vision">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="h-display mb-6">
          <span className="text-gradient">The future is</span>{" "}
          <span className="text-neon">autonomous.</span>
        </h2>
        <p className="text-white/65 text-lg leading-relaxed font-light mb-4">
          We believe every business will run on AI.
        </p>
        <p className="text-white/55 text-base leading-relaxed font-light">
          Nicsaa is building the autonomous layer that powers this future — where{" "}
          <span className="text-white">decisions are instant</span>,{" "}
          <span className="text-white">operations are optimized</span>, and{" "}
          <span className="text-white">growth is continuous</span>.
        </p>
      </div>

      <div className="beam mt-16 max-w-md mx-auto" />
      <p className="text-center mt-8 font-display italic text-white/70 max-w-2xl mx-auto text-lg leading-relaxed">
        "Nicsaa is the AI system that doesn't just assist your business —{" "}
        <span className="text-neon font-semibold not-italic">it runs it.</span>"
      </p>
    </Section>
  );
}

/* ── FINAL CTA ─────────────────────────────────────────────── */
function FinalCTA() {
  return (
    <section id="cta" className="section pt-10 pb-32">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-cyan-500/[0.07] via-violet-500/[0.05] to-fuchsia-500/[0.07] p-10 md:p-16 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(76,224,255,0.18),transparent_70%)] pointer-events-none" />
          <div className="relative">
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              Early Access · Limited
            </span>
            <h2 className="h-display mt-6 mb-5 max-w-3xl mx-auto">
              <span className="text-gradient">Ready to run your business on</span>{" "}
              <span className="text-neon">autopilot?</span>
            </h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8 font-light">
              Join the next generation of companies powered by autonomous AI.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href="mailto:hello@nicsaa.com?subject=Nicsaa%20Early%20Access" className="btn btn-primary">
                Get Early Access
                <ArrowRight size={16} />
              </a>
              <a href="mailto:hello@nicsaa.com?subject=Nicsaa%20Demo" className="btn btn-ghost">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    {
      label: "Product",
      links: [
        { name: "Features",       href: "#features" },
        { name: "Integrations",   href: "#features" },
        { name: "Pricing (Coming Soon)", href: "#" },
      ],
    },
    {
      label: "Company",
      links: [
        { name: "About",   href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "mailto:hello@nicsaa.com" },
      ],
    },
    {
      label: "Resources",
      links: [
        { name: "Blog",           href: "#" },
        { name: "Documentation",  href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative z-2 border-t border-white/8 pt-16 pb-10 px-6">
      <div className="container">
        <div className="grid md:grid-cols-[1.4fr_repeat(3,1fr)_0.8fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500" />
                <div className="absolute inset-[2px] rounded-md bg-black flex items-center justify-center font-display font-bold text-white text-sm">
                  N
                </div>
              </div>
              <span className="font-display font-semibold text-lg">Nicsaa</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Autonomous AI for Business Operations.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.label}>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">
                {c.label}
              </div>
              <ul className="flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l.name}>
                    <a
                      href={l.href}
                      className="text-white/65 hover:text-cyan-200 transition text-sm"
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40 mb-4">
              Social
            </div>
            <div className="flex gap-2">
              <a
                href="https://www.linkedin.com/company/nicsaa"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 transition"
              >
                <Linkedin size={15} />
              </a>
              <a
                href="https://x.com/nicsaa"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-cyan-300 hover:border-cyan-400/40 transition"
              >
                <Twitter size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="beam mb-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40 font-mono uppercase tracking-[0.18em]">
          <span>© 2026 Nicsaa · All rights reserved.</span>
          <span className="text-white/55">Not a tool. Not an assistant. An autonomous system.</span>
        </div>
      </div>
    </footer>
  );
}

/* ── Reusable section frame ────────────────────────────────── */
function Section({
  children,
  eyebrow,
  id,
}: {
  children: React.ReactNode;
  eyebrow: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-10"
        >
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {eyebrow}
          </span>
        </motion.div>
        {children}
      </div>
    </section>
  );
}

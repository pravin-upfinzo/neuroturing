import React from "react";
import { Shield } from "lucide-react";

function BorderBeamCard({
  id,
  number,
  title,
  description,
  delay = 0,
  duration = 6,
}) {
  return (
    <div className="relative group rounded-2xl overflow-hidden p-[1px] hover:-translate-y-2 transition-all duration-500">
      {/* Rotating Glow */}
      <div
        className="absolute -inset-[150%] animate-border-spin opacity-70"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, transparent 280deg, #00F2FE 320deg, #ffffff 350deg, transparent 360deg)",
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        }}
      />

      {/* SVG Border Beam */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full z-10"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id={`beam-${id}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#fff" />
            <stop offset="40%" stopColor="#00F2FE" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>

          <filter
            id={`glow-${id}`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="6"
          fill="none"
          stroke={`url(#beam-${id})`}
          strokeWidth="1.2"
          strokeDasharray="22 78"
          pathLength="100"
          filter={`url(#glow-${id})`}
          className="animate-border-beam"
          style={{
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      </svg>

      {/* Card */}
      <div className="relative z-20 rounded-2xl bg-[#070A12]/95 backdrop-blur-xl border border-white/10 p-8 h-full min-h-[300px]">
        <div className="flex items-center justify-between mb-8">
          <span className="text-xs tracking-[0.3em] text-slate-400">
            {number}
          </span>

          <div className="w-11 h-11 rounded-xl border border-cyan-400/30 bg-cyan-500/10 flex items-center justify-center">
            <Shield className="w-5 h-5 text-cyan-400" />
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>

        <p className="text-slate-400 leading-7">{description}</p>
      </div>
    </div>
  );
}

export default function WhyExplainable() {
  const cardsData = [
    {
      id: "1",
      number: "01 / 03",
      title: "Opaque Decisions",
      description:
        "Black-box AI models make important decisions without revealing why they reached those conclusions.",
      delay: 0,
      duration: 6,
    },
    {
      id: "2",
      number: "02 / 03",
      title: "Regulatory Pressure",
      description:
        "Financial institutions must provide transparency, fairness and accountability for AI-driven decisions.",
      delay: 2,
      duration: 6,
    },
    {
      id: "3",
      number: "03 / 03",
      title: "Trust at Risk",
      description:
        "Customers and stakeholders lose confidence when AI decisions cannot be explained or challenged.",
      delay: 4,
      duration: 6,
    },
  ];

  return (
    <section className="relative   overflow-hidden py-24 px-6">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-xs tracking-[0.3em] uppercase text-cyan-300">
            WHY IT MATTERS
          </span>

          <h2 className="mt-8 text-5xl font-bold text-white md:text-6xl">
            Why Explainable{" "}
            <span className="bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              AI Matters
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Modern AI is powerful but invisible. Every decision should be
            transparent, explainable and trustworthy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {cardsData.map((card) => (
            <BorderBeamCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
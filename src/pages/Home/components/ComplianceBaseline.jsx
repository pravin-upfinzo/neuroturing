import React from "react";
import { ShieldCheck, Scale, ChevronRight ,CheckCircle2} from "lucide-react";

const CARDS = [
  {
    icon: ShieldCheck,
    iconBg: "bg-gradient-to-br from-[#7C5CFC] to-[#5B3FE0]",
    title: "FRSL AI Framework",
    description: "Framework for Responsible and Ethical Enablement of AI",
  },
  {
    icon: CheckCircle2,
    iconBg: "bg-gradient-to-br from-[#0F3D3E] to-[#0A2C2D]",
    iconColor: "text-cyan-300",
    title: "Responsible AI Governance",
    description: "Automated governance expectations and audit trails",
  },
];

export default function ComplianceBaseline() {
  return (
    <section className="w-full  px-6 py-10 font-sans text-[#f5f7fa]">
      <div
        className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] border border-white/[0.06] p-10 sm:p-14 lg:p-[72px_64px]"
        style={{
          background:
            "radial-gradient(120% 160% at 100% 100%, rgba(99,102,241,0.10) 0%, #0a0d16 55%), radial-gradient(90% 140% at 0% 0%, rgba(239,68,68,0.06) 0%, transparent 45%), #05070c",
        }}
      >
        {/* Glow effects */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-rose-900/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left: intro */}
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-[7px] text-xs font-bold uppercase tracking-[0.08em] text-cyan-400">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_theme(colors.cyan.400)]" />
              Regulatory ready
            </span>

            <h2 className="mt-7 mb-6 text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.01em]">
            Built for the New 
              <br />
              <span className="bg-gradient-to-r from-[#d6ecff] to-[#6f9ff2] bg-clip-text text-transparent">
              AI Compliance Era
              </span>
            </h2>

            <p className="max-w-[520px] text-lg leading-[1.65] text-[#9aa4b8]">
            Neuroturing XAI empowers financial institutions with transparent, compliant AI through real-time explainability, continuous monitoring, and immutable audit trails.
            </p>
          </div>

          {/* Right: cards */}
          <div className="flex flex-col gap-5">
            {CARDS.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
              <div
                key={title}
                className="group flex items-start gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6
                           transition-colors duration-300 hover:border-white/[0.12] hover:bg-white/[0.04]"
              >
                <div
                  className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl ${iconBg} shadow-[0_0_24px_rgba(124,92,252,0.25)]`}
                >
                  <Icon className={`h-6 w-6 ${iconColor ?? "text-white"}`} strokeWidth={2.25} />
                </div>

                <div className="flex-1">
                  <h4 className="mb-1.5 text-lg font-bold leading-[1.3] text-[#f5f7fa]">
                    {title}
                  </h4>
                  <p className="text-[0.95rem] leading-[1.55] text-[#9aa4b8]">
                    {description}
                  </p>
                </div>

                <ChevronRight
                  className="mt-1 h-5 w-5 flex-shrink-0 text-[#5c6579] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#9aa4b8]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

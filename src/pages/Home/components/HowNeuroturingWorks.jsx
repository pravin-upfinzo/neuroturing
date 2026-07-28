import React from "react";
import { Compass, ShieldCheck, FileText } from "lucide-react";
import Howitworks_1 from "../../../images/howitworks_1.svg";
import Howitworks_2 from "../../../images/howitworks_2.svg";
import Howitworks_3 from "../../../images/howitworks_3.svg";

const STEPS = [
  {
    number: "01",
    title: "Connect",
    description:
      "Securely integrate with existing AI models, banking systems, payment infrastructure, LOS, LMS, and fraud engines using APIs.",
  },
  {
    number: "02",
    title: "Analyse",
    description:
      "Capture AI outputs, transaction events, model predictions, and operational data in real time.",
  },
  {
    number: "03",
    title: "Explain",
    description:
      "Generate human-readable explanations while automatically creating immutable audit records and governance evidence.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Provide contextual insights to operations teams, compliance officers, fraud analysts, executives, customers, and regulators.",
  },
];

const OUTPUTS = [
  {
    image: Howitworks_1,
    title: "Explainable predictions",
    description: "For every decision, in real time.",
  },
  {
    image: Howitworks_2,
    title: "Trust & confidence scores",
    description: "Model self-awareness surfaced to users.",
  },
  {
    image: Howitworks_3,
    title: "Regulator-ready reports",
    description: "Compliance-grade audit trails.",
  },
];
const RAILS = [
  {
    number: "01",
    title: "Fraud Decision Explainability",
    description: "Understand why transactions are flagged, approved, or blocked in real time.",
  },
  {
    number: "02",
    title: "AML & Risk Transparency",
    description: "Explain every AML alert and risk score with complete regulatory traceability.",
  },
  {
    number: "03",
    title: "Credit & Lending Decisions",
    description: "Provide clear reasons behind approvals, declines, and credit risk assessments.",
  },
  {
    number: "04",
    title: "Audit & Compliance Intelligence",
    description: "Maintain continuous governance with immutable audit trails and real-time monitoring.",
  },
];

export default function HowNeuroturingWorks() {
  return (
    <>
     <section
      className="w-full py-5 md:py-15 font-sans text-[#f5f7fa]"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full
                     bg-[rgba(0,229,255,0.08)] border border-[rgba(0,229,255,0.35)]
                     text-[#00E5FF] text-xs font-bold uppercase tracking-[0.08em]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] flex-shrink-0" />
          How it works
        </span>

        {/* Heading */}
        <h2 className="mt-7 mb-10 md:mb-16 text-4xl md:text-6xl font-extrabold leading-[1.08] tracking-[-0.01em]">
          How Neuroturing{" "}
          <span
            className="uppercase bg-gradient-to-r from-[#d6ecff] to-[#6f9ff2]
                       bg-clip-text text-transparent"
          >
            XAI works
          </span>
        </h2>

        {/* Steps */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-2.5 py-4 md:py-0
                           border-t border-[rgba(255,255,255,0.12)] first:border-t-0
                           md:border-t-0"
              >
                <span className="w-5 h-5 rounded-full bg-[#f5f7fa] flex-shrink-0" />
                <span className="font-mono text-[13px] tracking-[0.06em] text-[#9aa1ac]">
                  {step.number}
                </span>
              </div>
            ))}
          </div>

          <div className="hidden md:block h-px bg-[rgba(255,255,255,0.12)] my-6" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8">
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="pb-6 mb-2 border-b border-[rgba(255,255,255,0.12)]
                           last:border-b-0 last:mb-0 last:pb-0
                           md:pb-0 md:mb-0 md:border-b-0"
              >
                <h3 className="mb-3 text-[1.375rem] font-bold leading-[1.3]">
                  {step.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[#9aa1ac]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Output header */}
        <div className="flex items-center gap-5 mt-14 mb-8 md:mt-[88px] md:mb-12">
        <span
          className="flex-shrink-0 px-5 py-2 rounded-full border border-[#E4E3D6] text-[#9AA1AC] text-xs font-bold uppercase tracking-[0.08em]"
        >
          Output
        </span>

        <div className="flex-1 border-b border-[#E4E3D6]/25"></div>
      </div>

        {/* Outputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-10">
          {OUTPUTS.map(({ image, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div
                className="flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center
                          rounded-full bg-[linear-gradient(131.76deg,#B4F1FF_66.27%,#357CCE_99.5%)]"
              >
                <img
                  src={image}
                  alt={title}
                  className="h-6 w-6 object-contain"
                />
              </div>

              <div>
                <h4 className="mb-2 text-[20px] font-bold leading-[1.3] text-[#F5F7FA]">
                  {title}
                </h4>

                <p className="text-[16px] leading-7 text-[#9AA1AC]">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
     <section className="py-6 font-sans text-[#f5f7fa]">
     <div
       className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 rounded-[32px] border border-white/[0.06] p-10 sm:rounded-3xl sm:p-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:p-[72px_45px]"
       style={{
         background:
           "radial-gradient(120% 160% at 0% 0%, #141c30 0%, #0a0d16 65%)",
       }}
     >
       {/* Left: intro */}
       <div className="flex flex-col">
         <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#4fd1c5]/35 bg-[#2dd4bf]/[0.08] px-4 py-[7px] text-xs font-bold uppercase tracking-[0.08em] text-[#4fd1c5]">
           <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4fd1c5] shadow-[0_0_8px_#4fd1c5]" />
           Financial trust engine
         </span>

         <h2 className="mt-7 mb-6 text-[clamp(1.9rem,9vw,3.25rem)] font-extrabold leading-[1.12] tracking-[-0.01em] sm:text-[clamp(2.25rem,4vw,3.25rem)]">
           End-to-End
           <br />
           <span className="bg-gradient-to-r from-[#d6ecff] to-[#6f9ff2] bg-clip-text text-transparent">
           Payment Intelligence
           </span>
         </h2>

         <p className="mb-6 text-[1.15rem] font-normal text-[#c7cfe0] sm:text-2xl">
           Receivables <span className="mx-2.5 text-[#9aa4b8]">→</span> Escrow
           <span className="mx-2.5 text-[#9aa4b8]">→</span>Payables
         </p>

         <p className="max-w-[440px] text-base leading-[1.65] text-[#9aa4b8]">
         Neuroturing XAI explains every AI decision across the
         complete payment lifecycle, giving financial institutions complete visibility into every transaction.
         </p>
       </div>

       {/* Right: rail grid */}
       <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-2 sm:gap-x-14 sm:gap-y-16">
         {RAILS.map((rail) => (
           <div key={rail.number}>
             <span className="mb-4 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-[#9aa4b8]">
               <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8b7cf6] shadow-[0_0_8px_#8b7cf6]" />
               Rail / {rail.number}
             </span>
             <h3 className="mb-3 max-w-[22ch] text-[1.375rem] font-bold leading-[1.35]">
               {rail.title}
             </h3>
             <p className="max-w-none text-[0.95rem] leading-[1.6] text-[#9aa4b8] sm:max-w-[32ch]">
               {rail.description}
             </p>
           </div>
         ))}
       </div>
     </div>
   </section>
    </>
   
    
  );
}

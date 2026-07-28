import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import aboutus from "../../images/aboutus_bg.jpg";
import whynuro from "../../images/whynuro.jpg";
import aboutushero from "../../images/aboutushero.jpg";
import deliverimg from "../../images/deliverimg.jpg";
import TrustOperatingSystem from "../Home/components/TrustOperatingSystem";

const About = () => {
  const deliverables = [
    "Explainable AI for every financial decision",
    "Real-time monitoring of AI behaviour and model drift",
    "Immutable audit trails for regulatory compliance",
    "Customer-friendly AI explanations",
    "Executive dashboards for governance and operational intelligence",
  ];

  const whyChooseUs = [
    "No AI model retraining required",
    "Fast API-first integration",
    "Built for Banks, Payment Aggregators, NBFCs & FinTechs",
    "RBI & SEBI AI governance ready",
    "Modular architecture that scales with your business",
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#05080B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/[0.04] blur-[150px]" />
        <div className="absolute top-[1000px] -left-60 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.035] blur-[150px]" />
        <div className="absolute top-[1900px] -right-60 h-[500px] w-[500px] rounded-full bg-blue-500/[0.035] blur-[150px]" />
      </div>

      {/* Header */}
      <div className="relative z-50">
        <Header />
      </div>

      <main className="relative z-10">
        <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
          {/* Background Image */}
          <img
            src={aboutus}
            alt=""
            className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      object-center
    "
          />

          {/* Dark Blend */}
          <div
            className="
      absolute
      inset-0
      bg-[#05080B]/75
    "
          />

          {/* Bottom / Top Fade */}
          <div
            className="
      absolute
      inset-0
      bg-gradient-to-b
      from-[#05080B]/20
      via-transparent
      to-[#05080B]
    "
          />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2
              className="
        bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)]
        bg-clip-text
        text-transparent
        text-[40px]
        font-bold
        leading-[1.1]
        tracking-[-0.48px]
        sm:text-[48px]
        md:text-[56px]
        lg:text-[50px]
      "
            >
              About Us
            </h2>

            <p
              className="
        mx-auto
        mt-6
        max-w-3xl
        text-base
        leading-7
        text-gray-400
        sm:text-lg
      "
            >
              Neuroturing is an enterprise Explainable AI (XAI) platform
              purpose-built for banks, payment aggregators, NBFCs, fintech
              companies, and financial institutions. We help organizations
              transform black-box AI into transparent, auditable, and trusted
              intelligence without changing or retraining their existing AI
              models.
            </p>
          </div>
        </section>
        {/* =====================================================
            HERO / ABOUT NEUROTURING
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
            {/* LEFT CONTENT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.05] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                About Neuroturing
              </div>

              <h1 className="max-w-4xl text-4xl font-bold leading-[1.5] tracking-tight sm:text-5xl lg:text-6xl">
                Building Trust in{" "}
                <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">
                  Every AI Decision
                </span>
              </h1>

              <div className="mt-8 max-w-3xl space-y-5">
                <p className="text-base leading-7 text-[#8E9AA1] sm:text-lg">
                  As financial institutions increasingly rely on AI for fraud
                  detection, credit decisioning, AML screening, payment
                  processing, and risk management, explainability has become
                  essential. Neuroturing provides the intelligence layer that
                  makes every AI decision understandable, traceable, and
                  compliant with evolving regulatory expectations.
                </p>

                <p className="text-base leading-7 text-[#8E9AA1] sm:text-lg">
                  Our modular platform enables organizations to explain,
                  monitor, and audit AI decisions across the complete financial
                  lifecycle from Receivables and Escrow to Payables, Lending,
                  and Fraud Management.
                </p>
              </div>
            </div>

            {/* RIGHT BUTTON */}
            <div className="flex items-center justify-center lg:justify-end">
              <img
                src={aboutushero}
                alt="hero"
                className="w-full max-w-md object-contain "
              />
            </div>
          </div>
        </section>

        {/* =====================================================
    MISSION & VISION
====================================================== */}
        <section className="mb-20 max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Mission */}
          <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To build trust, transparency, and accountability into every
              AI-powered financial decision.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading Explainable AI platform for the global
              financial ecosystem, enabling responsible AI adoption through
              transparency, compliance, and governance.
            </p>
          </div>
        </section>

        {/* =====================================================
            WHAT WE DELIVER
            LEFT IMAGE / RIGHT CONTENT
        ====================================================== */}
        <section id="deliver" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 ">
          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
            {/* LEFT IMAGE / VISUAL */}
            <div className="flex items-center justify-center lg:justify-end">
              <img
                src={deliverimg}
                alt="Neuroturing"
                className="w-full max-w-md object-contain"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2
                className="
    text-[40px]
    font-bold
    leading-[1.1]
    tracking-[-0.48px]
    sm:text-[48px]
    md:text-[56px]
    lg:text-[50px]
  "
              >
                What{" "}
                <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">
                  We Deliver
                </span>
              </h2>

              <div className="mt-9 space-y-5">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.05]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    </div>

                    <p className="text-[16px] leading-6 text-[#9AA6AC]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            WHY NEUROTURING
            LEFT CONTENT / RIGHT IMAGE
        ====================================================== */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 ">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT CONTENT */}
            <div>
              <h2
                className="
    text-[40px]
    font-bold
    leading-[1.1]
    tracking-[-0.48px]
    sm:text-[48px]
    md:text-[56px]
    lg:text-[50px]
  "
              >
                Why{" "}
                <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">
                  Neuroturing
                </span>
              </h2>

              <div className="mt-9 space-y-5">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/[0.05]">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    </div>

                    <p className="text-[16px] leading-6 text-[#9AA6AC]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE / VISUAL */}
            <div className="flex items-center justify-center lg:justify-end">
              <img
                src={whynuro}
                alt="Neuroturing"
                className="w-full max-w-md object-contain"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            TRUST BACKED BY NUMBERS
            SAME CONTENT AS YOUR SCREENSHOT
        ====================================================== */}
        <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-28 lg:px-8 lg:py-36">
          {/* Background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-[130px]" />

          {/* Dotted globe */}
          <div className="pointer-events-none absolute left-1/2 top-[53%] h-[300px] w-[700px] -translate-x-1/2 opacity-30">
            <div className="absolute inset-0 rounded-[50%] border border-dotted border-cyan-300/25" />

            <div className="absolute left-[5%] right-[5%] top-[10%] h-[80%] rounded-[50%] border border-dotted border-cyan-300/20" />

            <div className="absolute left-[12%] right-[12%] top-[20%] h-[60%] rounded-[50%] border border-dotted border-cyan-300/20" />

            <div className="absolute left-[20%] right-[20%] top-[30%] h-[40%] rounded-[50%] border border-dotted border-cyan-300/20" />

            <div className="absolute left-1/2 top-1/2 h-full w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-dotted border-cyan-300/20" />
          </div>

          {/* Heading */}
          <div className="relative z-10 mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Measurable{" "}
              <span className="bg-[linear-gradient(90deg,#B4F1FF_70.67%,#357CCE_100%)] bg-clip-text text-transparent">
                Impact
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-lg text-xs leading-5 text-[#77858C]">
              We have a big mission in front of us: Connect a billion people by
              2031 - and we can only achieve this with your trust.
            </p>
          </div>

          {/* Stats */}
          <div className="relative z-10 mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {/* 2023 */}
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.025] px-5 py-5 text-center backdrop-blur-md">
              <div className="text-3xl font-semibold tracking-tight text-white">
                90%
              </div>

              <div className="mt-1 text-xs text-[#7B898F]">
                Faster AI Investigations
              </div>
            </div>

            {/* 100% */}
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.025] px-5 py-5 text-center backdrop-blur-md">
              <div className="text-3xl font-semibold tracking-tight text-white">
                100%
              </div>

              <div className="mt-1 text-xs text-[#7B898F]">
                Audit-Ready Decisions
              </div>
            </div>

            {/* $2.5M */}
            <div className="rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.07] to-white/[0.025] px-5 py-5 text-center backdrop-blur-md">
              <div className="text-3xl font-semibold tracking-tight text-white">
                60%
              </div>

              <div className="mt-1 text-xs text-[#7B898F]">
                Less Manual Review Effort
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CLOSING STATEMENT
        ====================================================== */}
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 ">
          <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-white/[0.02] px-8 py-14 text-center backdrop-blur-md sm:px-12">
            <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />

            <p className="mx-auto max-w-5xl text-center text-2xl font-medium leading-[1.45] tracking-tight text-gray-200 sm:text-3xl lg:text-4xl">
              At Neuroturing, we believe{" "}
              <span
                className="
      font-semibold
      bg-[linear-gradient(90.01deg,#B4F1FF_44.8%,#357CCE_63.39%)]
      bg-clip-text
      text-transparent
    "
              >
                AI should never be a black box
              </span>{" "}
              Every decision should be explainable, every action auditable, and
              every outcome trusted.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;

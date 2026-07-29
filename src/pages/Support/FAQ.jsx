import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FAQAccordion from './components/FAQAccordion';

const faqItems = [
  {
    question: 'What is Neuroturing?',
    answer:
      'Neuroturing is an AI company building explainable AI (XAI) solutions for banks, payment aggregators, and fintechs - designed to make every automated decision transparent, auditable, and compliant with regulatory expectations.',
  },
  {
    question: 'How is Neuroturing different from other AI platforms?',
    answer:
      'A: Unlike generic AI or automation tools, Neuroturing is purpose-built for explainability -every module, from onboarding to transaction monitoring, generates a clear, human-readable rationale behind its decisions, not just an output.',
  },
  {
    question: 'What is the Neuroturing Connected Banking Platform?',
    answer:
      "It's an AI-powered, unified platform that brings merchant onboarding, verification, approvals, settlements, and transaction management into one system -with explainable AI supporting every decision along the way.",
  },
  {
    question: 'What does "explainable AI" mean on this platform, and how is risk monitored?',
    answer:
      'Every AI-driven decision comes with a clear, human-readable reason behind it - ClarityCore™ turns complex model outputs into plain-language explanations, while DriftSense™ continuously monitors model behavior and transaction patterns to catch drift or anomalies early.',
  },
  {
    question: 'Can decisions be audited or traced back later?',
    answer:
      'Yes. ProofChain™ maintains a secure, traceable record of every decision and its explanation, creating an audit-ready trail for regulators, auditors, and internal governance reviews.',
  },
  {
    question: 'How do customers or frontline agents get explanations for declined or flagged transactions?',
    answer:
      'ExplainTouch™ delivers real-time, plain-language explanations at the point of transaction - helping customers self-correct and agents resolve queries instantly, without escalation.',
  },
  {
    question: ' Is there a single view to monitor everything, and is the platform built for regulatory compliance?',
    answer:
      'InsightHub™ consolidates insights, risk signals, and performance metrics from every module into one dashboard for stakeholders -and the entire platform is designed around RBI, DPDP, and FIU-IND expectations, with standardized governance and audit-ready reporting built in.',
  },
];

const FAQ = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Support
            </div>

            <h1
              className="mb-5 bg-gradient-to-r from-white via-[#d8ecff] to-[#8ebeff] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-[3.5rem] lg:leading-none"
              style={{ lineHeight: 1.15 }}
            >
              Frequently Asked Questions
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
              Find quick answers to common questions about Neuroturing, platform capabilities,
              and how to connect with the team.
            </p>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;

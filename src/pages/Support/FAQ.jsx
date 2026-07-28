import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FAQAccordion from './components/FAQAccordion';

const faqItems = [
  {
    question: 'What does Neuroturing do?',
    answer:
      'Neuroturing provides an explainable intelligence layer for financial institutions. The platform helps organizations understand, monitor, and audit AI-driven decisions without replacing their existing models.',
  },
  {
    question: 'Who is Neuroturing built for?',
    answer:
      'Neuroturing is designed for banks, NBFCs, payment aggregators, fintech companies, and other financial institutions that need transparent and accountable AI systems.',
  },
  {
    question: 'Do I need to retrain my existing AI models?',
    answer:
      'No. Neuroturing is positioned as a modular layer that works with your existing AI environment, helping teams explain and govern model decisions without retraining core models.',
  },
  {
    question: 'What problems can Neuroturing help solve?',
    answer:
      'The platform can help with explainability, auditability, model monitoring, governance readiness, customer-facing decision explanations, and improved internal visibility into AI-driven outcomes.',
  },
  {
    question: 'Can Neuroturing support compliance and governance needs?',
    answer:
      'Yes. The platform is presented to support transparency, accountability, and traceability, which are important capabilities for AI governance and regulatory preparedness in financial services.',
  },
  {
    question: 'How can I get in touch with the team?',
    answer:
      'You can use the contact form on the website or reach out through the contact details listed on the Contact Us page to speak with the Neuroturing team.',
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
              style={{ WebkitBackgroundClip: 'text' }}
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

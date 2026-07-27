import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
  const deliverables = [
    'Explainable AI for every financial decision',
    'Real-time monitoring of AI behaviour and model drift',
    'Immutable audit trails for regulatory compliance',
    'Customer-friendly AI explanations',
    'Executive dashboards for governance and operational intelligence',
  ];

  const whyChooseUs = [
    'No AI model retraining required',
    'Fast API-first integration',
    'Built for Banks, Payment Aggregators, NBFCs & FinTechs',
    'RBI & SEBI AI governance ready',
    'Modular architecture that scales with your business',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {/* Page Header */}
        <div className="mb-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-semibold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            About Neuroturing
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-pink-400" style={{ WebkitBackgroundClip: 'text' }}>
            Building Trust in Every AI Decision
          </h1>
        </div>

        {/* About Section */}
        <section className="mb-20 relative z-10">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Neuroturing is an enterprise Explainable AI (XAI) platform purpose-built for banks, payment aggregators, NBFCs, fintech companies, and financial institutions. We help organizations transform black-box AI into transparent, auditable, and trusted intelligence without changing or retraining their existing AI models.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              As financial institutions increasingly rely on AI for fraud detection, credit decisioning, AML screening, payment processing, and risk management, explainability has become essential. Neuroturing provides the intelligence layer that makes every AI decision understandable, traceable, and compliant with evolving regulatory expectations.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our modular platform enables organizations to explain, monitor, and audit AI decisions across the complete financial lifecycle from Receivables and Escrow to Payables, Lending, and Fraud Management.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
          {/* Mission */}
          <div className="p-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To build trust, transparency, and accountability into every AI-powered financial decision.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To become the leading Explainable AI platform for the global financial ecosystem, enabling responsible AI adoption through transparency, compliance, and governance.
            </p>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400" style={{ WebkitBackgroundClip: 'text' }}>
              What We Deliver
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliverables.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-green-500/20 bg-green-500/5 hover:bg-green-500/10 transition-all">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-400/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Neuroturing */}
        <section className="mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-400" style={{ WebkitBackgroundClip: 'text' }}>
              Why Neuroturing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl border border-orange-500/20 bg-orange-500/5 hover:bg-orange-500/10 transition-all">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-400/20 flex items-center justify-center mt-1">
                    <span className="w-2 h-2 rounded-full bg-orange-400" />
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="relative z-10 max-w-4xl mx-auto">
          <div className="p-12 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md text-center">
            <p className="text-xl text-gray-200 leading-relaxed">
              At Neuroturing, we believe <span className="text-cyan-400 font-semibold">AI should never be a black box</span>. Every decision should be explainable, every action auditable, and every outcome trusted.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;

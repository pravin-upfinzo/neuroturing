import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import { AlertTriangle, BarChart3, ShieldOff, Eye, GitBranch, Zap, Activity } from 'lucide-react';
import clarityCoreImg from '../../images/ClarityCore.png';

// ─── ClarityCore Theme (Blue) ────────────────────────────────────────────────
const theme = {
  gradientFrom: 'from-blue-600',
  gradientTo: 'to-cyan-400',
  glowColor: 'rgba(37,99,235,0.28)',
  tagBorderColor: 'border-blue-500/30',
  tagTextColor: 'text-blue-400',
  tagBgColor: 'bg-blue-500/10',
  cardBorderColor: 'border-blue-500/20',
  iconBgColor: 'bg-blue-900/40',
  iconBorderColor: 'border-blue-500/20',
  accentTextColor: 'text-blue-400',
  stepBorderColor: 'border-blue-500',
  connectorColor: 'from-blue-700 to-transparent',
  badgeBorderColor: 'border-blue-500/25',
  badgeBgColor: 'bg-blue-900/20',
  badgeTextColor: 'text-blue-400',
};

// Floating chips that orbit the product illustration
const badges = [
  { icon: <Eye className="w-4 h-4" />,      label: 'SHAP Explanations',    sub: 'Feature attribution' },
  { icon: <GitBranch className="w-4 h-4" />, label: 'Decision Paths',       sub: 'Full trace' },
  { icon: <Zap className="w-4 h-4" />,       label: 'Real-Time Output',     sub: '< 2ms latency' },
  { icon: <Activity className="w-4 h-4" />,  label: 'Audit Logs',           sub: 'Immutable records' },
];

const highlights = [
  { value: '10×',  label: 'Faster Explanations',     description: 'Generate SHAP-quality results in milliseconds, not minutes.' },
  { value: '99%',  label: 'Feature Coverage',         description: 'Explains every input variable across all model architectures.' },
  { value: '—62%', label: 'Audit Prep Time',          description: 'Automated evidence packages ready in one click.' },
  { value: '100%', label: 'Regulatory Traceability',  description: 'Full decision logs stored and exportable on demand.' },
];

const problems = [
  {
    icon: <AlertTriangle className="w-6 h-6" />,
    title: 'Black-Box Decisions',
    description: 'Regulators and auditors reject AI outputs when models cannot articulate the reasoning behind every prediction.',
  },
  {
    icon: <ShieldOff className="w-6 h-6" />,
    title: 'Compliance Gaps',
    description: 'SR11-7 and EU AI Act demand documented rationale. Ad-hoc explainability tools leave dangerous gaps in evidence trails.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Explanation Latency',
    description: 'Post-hoc XAI libraries are too slow for real-time decisioning in credit, fraud, and trading workflows.',
  },
];

const steps = [
  {
    step: '01',
    title: 'Connect Your Model',
    description: 'Integrate any ML framework — scikit-learn, XGBoost, PyTorch — via REST API or our lightweight SDK in under 30 minutes.',
  },
  {
    step: '02',
    title: 'Configure Explanation Rules',
    description: 'Select SHAP, LIME, or our proprietary FastExplain™ algorithm. Set thresholds for feature importance and decision boundaries.',
  },
  {
    step: '03',
    title: 'Generate Audit-Ready Reports',
    description: 'Every prediction is wrapped with a human-readable explanation, a confidence score, and an immutable log entry—automatically.',
  },
  {
    step: '04',
    title: 'Monitor & Govern in Production',
    description: 'Dashboards surface explanation drift, flag anomalous decisions, and auto-escalate to human review when confidence drops below your configured threshold.',
  },
];

const ClarityCore = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <ProductHeroBanner
        tagline="Explainable AI Engine"
        title="ClarityCore"
        subtitle="Real-time, audit-ready explanations for every model decision."
        description="ClarityCore is Neuroturing's core explainability engine. It wraps any black-box model with instant, human-readable reasoning—making every prediction transparent, defensible, and regulatory-ready."
        productImage={clarityCoreImg}
        badges={badges}
        theme={theme}
        ctaLabel="Get Started"
        ctaSecondary="Request a Demo"
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutProduct
          sectionTag="About ClarityCore"
          heading={<>The explainability layer <span className="text-blue-400">every model needs.</span></>}
          body="ClarityCore sits between your machine learning models and the business decisions they power. It generates SHAP-quality explanations in real time—without the performance penalty—and bundles them into structured, audit-ready packages that satisfy SR11-7, GDPR Article 22, and the EU AI Act."
          highlights={highlights}
          theme={theme}
        />

        <ProblemItSolves
          sectionTag="The Problem"
          heading={<>Why black-box AI is a <span className="text-blue-400">liability</span></>}
          intro="Financial institutions face mounting pressure to justify every automated decision. Without native explainability, every model is a legal and regulatory risk."
          problems={problems}
          theme={theme}
        />

        <HowItWorks
          sectionTag="How It Works"
          heading={<>From black-box to <span className="text-blue-400">glass-box</span> in four steps.</>}
          steps={steps}
          theme={theme}
          cta={{ label: 'See Full Documentation', href: '#' }}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ClarityCore;

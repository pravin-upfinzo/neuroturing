import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import { PieChart, TrendingDown, Search, Bell, BarChart2, ShieldCheck, Layers, Activity } from 'lucide-react';

// ─── InsightHub Theme (Pink / Purple) ────────────────────────────────────────
const theme = {
  gradientFrom: 'from-pink-600',
  gradientTo: 'to-purple-500',
  glowColor: 'rgba(219,39,119,0.22)',
  tagBorderColor: 'border-pink-500/30',
  tagTextColor: 'text-pink-400',
  tagBgColor: 'bg-pink-500/10',
  cardBorderColor: 'border-pink-500/20',
  iconBgColor: 'bg-pink-900/40',
  iconBorderColor: 'border-pink-500/20',
  accentTextColor: 'text-pink-400',
  stepBorderColor: 'border-pink-500',
  connectorColor: 'from-pink-700 to-transparent',
  badgeBorderColor: 'border-pink-500/25',
  badgeBgColor: 'bg-pink-900/20',
  badgeTextColor: 'text-pink-400',
};

const badges = [
  { icon: <BarChart2 className="w-4 h-4" />,   label: 'Live Dashboards',    sub: 'Streaming updates' },
  { icon: <ShieldCheck className="w-4 h-4" />, label: 'Fairness Metrics',   sub: '40+ KPIs' },
  { icon: <Layers className="w-4 h-4" />,      label: 'Model Registry',    sub: 'All frameworks' },
  { icon: <Activity className="w-4 h-4" />,    label: 'Drift Detection',   sub: 'Continuous' },
];

const highlights = [
  { value: '360°', label: 'Model Visibility',  description: 'Unified view across all models deployed in production.' },
  { value: '<1s',  label: 'Insight Latency',   description: 'Dashboards refresh in under a second via streaming pipelines.' },
  { value: '40+',  label: 'Built-in Metrics',  description: 'Accuracy, fairness, drift, and compliance KPIs out of the box.' },
  { value: '100%', label: 'Audit Readiness',   description: 'Every event logged and exportable for regulatory review.' },
];

const problems = [
  {
    icon: <Search className="w-6 h-6" />,
    title: 'Siloed Model Data',
    description: 'Teams operate blind—model performance lives in separate tools, spreadsheets, or nowhere at all.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Undetected Drift',
    description: 'Models silently degrade over time. Without continuous monitoring, bias and inaccuracy creep into decisions before anyone notices.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Reactive Governance',
    description: 'Issues are discovered during audits—not before. Reactive governance exposes institutions to regulatory action and reputational damage.',
  },
];

const steps = [
  { step: '01', title: 'Connect Your Model Registry', description: 'Point InsightHub at your MLflow, SageMaker, or Vertex AI registry to automatically ingest all deployed models.' },
  { step: '02', title: 'Define KPIs & Thresholds',    description: 'Choose from 40+ built-in metrics or define custom ones. Set alert thresholds for accuracy, fairness, and data drift.' },
  { step: '03', title: 'Monitor in Real Time',         description: 'Streaming dashboards surface anomalies the moment they occur, with root-cause attribution powered by ClarityCore.' },
  { step: '04', title: 'Act & Document',               description: 'Trigger automated remediation workflows or escalate to human review—with a full audit trail generated automatically.' },
];

const InsightHub = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      tagline="Model Intelligence Dashboard"
      title="InsightHub"
      subtitle="360° real-time visibility across every model in production."
      description="InsightHub is Neuroturing's unified monitoring and governance platform. It gives teams a single pane of glass to track model health, detect drift, measure fairness, and generate compliance evidence—continuously."
      badges={badges}
      theme={theme}
      ctaLabel="Explore InsightHub"
      ctaSecondary="Book a Demo"
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="About InsightHub"
        heading={<>From fragmented metrics to <span className="text-pink-400">unified intelligence.</span></>}
        body="InsightHub aggregates performance, fairness, and explainability signals from every model across your organisation. It replaces ad-hoc monitoring scripts with a governed, always-on observatory that keeps your AI portfolio compliant and performing."
        highlights={highlights}
        theme={theme}
      />
      <ProblemItSolves
        sectionTag="The Problem"
        heading={<>Why AI governance <span className="text-pink-400">breaks down</span></>}
        intro="As model portfolios grow, governance collapses into spreadsheets and tribal knowledge. The result: silent failures, regulatory exposure, and eroded trust."
        problems={problems}
        theme={theme}
      />
      <HowItWorks
        sectionTag="How It Works"
        heading={<>Governance on <span className="text-pink-400">autopilot.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'View Full Docs', href: '#' }}
      />
    </div>
    <Footer />
  </div>
);

export default InsightHub;

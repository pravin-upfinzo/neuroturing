import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import BusinessImpact from './components/BusinessImpact';
import { PieChart, TrendingDown, Search, Bell, BarChart2, ShieldCheck, Layers, Activity } from 'lucide-react';
import LackOfActionImg from '../../images/products/icons/lackof-action-insights.svg'
import DifficultyIdentifyingTrends from '../../images/products/icons/difficulty-identifying-trends.svg'
import LimitedDecisionIntelligenceImg from '../../images/products/icons/limited-decision-intelligence.svg'
import LackOfVisibilityImg from '../../images/products/icons/lackof-visibility.svg'
import insightHubAboutImg from '../../images/Aboutproduct/InsightHub_Aboutproduct.png';

import icon1 from '../../images/compliance_value/audit-dashboard.svg';
import icon2 from '../../images/compliance_value/track-events.svg';
import icon3 from '../../images/compliance_value/transparency.svg';
import ComplianceValue from './components/ComplianceValue';
import businessImpactImg from '../../images/BusinessImpact/InsightHub/Business Impact.png';
import impactIconDataDriven from '../../images/BusinessImpact/InsightHub/Vector.png';
import impactIconOptimization from '../../images/BusinessImpact/InsightHub/Union.png';
import impactIconEfficiency from '../../images/BusinessImpact/InsightHub/Vector2.png';
import ProductBannerImage from '../../images/Producetbanner/InsightHub.png';

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
  { icon: <BarChart2 className="w-4 h-4" />, label: 'Live Dashboards', sub: 'Streaming updates' },
  { icon: <ShieldCheck className="w-4 h-4" />, label: 'Fairness Metrics', sub: '40+ KPIs' },
  { icon: <Layers className="w-4 h-4" />, label: 'Model Registry', sub: 'All frameworks' },
  { icon: <Activity className="w-4 h-4" />, label: 'Drift Detection', sub: 'Continuous' },
];

const highlights = [
  { value: '360°', label: 'Model Visibility', description: 'Unified view across all models deployed in production.' },
  { value: '<1s', label: 'Insight Latency', description: 'Dashboards refresh in under a second via streaming pipelines.' },
  { value: '40+', label: 'Built-in Metrics', description: 'Accuracy, fairness, drift, and compliance KPIs out of the box.' },
  { value: '100%', label: 'Audit Readiness', description: 'Every event logged and exportable for regulatory review.' },
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

// ─── Business Impact (Copper / Amber, matching the outcome icons) ─────────────
const impactTheme = {
  glowColor: 'rgba(200,135,63,0.18)',
  tagBorderColor: 'border-amber-500/30',
  tagTextColor: 'text-amber-400',
  tagBgColor: 'bg-amber-500/10',
  cardBorderColor: 'border-amber-500/20',
  iconBorderColor: 'border-amber-500/20',
  accentTextColor: 'text-amber-400',
  railFrom: '#F5D9BE',
  railTo: '#C6873F',
};

const impactItems = [
  { icon: <img src={impactIconDataDriven} alt="" className="w-5 h-5 object-contain" />, label: 'One source of truth turns scattered data into confident, fast decisions' },
  { icon: <img src={impactIconEfficiency} alt="" className="w-5 h-5 object-contain" />, label: 'Resources go where they are needed most — no more guessing' },
  { icon: <img src={impactIconOptimization} alt="" className="w-5 h-5 object-contain" />, label: ' Spot optimization opportunities before your competitors even notice them.' },
];

const steps = [
  { step: '01', title: 'Connect Your Model Registry', description: 'Point InsightHub at your MLflow, SageMaker, or Vertex AI registry to automatically ingest all deployed models.' },
  { step: '02', title: 'Define KPIs & Thresholds', description: 'Choose from 40+ built-in metrics or define custom ones. Set alert thresholds for accuracy, fairness, and data drift.' },
  { step: '03', title: 'Monitor in Real Time', description: 'Streaming dashboards surface anomalies the moment they occur, with root-cause attribution powered by ClarityCore.' },
  { step: '04', title: 'Act & Document', description: 'Trigger automated remediation workflows or escalate to human review—with a full audit trail generated automatically.' },
];

const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: "Audit-ready dashboards bring every compliance metric into one clear view",
  },
  {
    imgSrc: icon2,
    subtitle: "Automated tracking catches deviations the moment they happen, not after",
  },
  {
    imgSrc: icon3,
    subtitle: "Gives regulators and leadership a transparent, verifiable window into your AI.",
  },
];

const complianceTheme = {
  borderGradient: 'from-[#4a3429]/60 via-[#2a1d17]/40 to-[#140e0b]/30',
  borderGradientHover: 'hover:from-[#8c5e47]/80 hover:via-[#52372a]/70 hover:to-[#2e1d15]/50',
  cardBg: 'bg-gradient-to-b from-[#2a1d17]/90 via-[#18110e]/95 to-[#0d0907]',
  innerBg: 'bg-gradient-to-b from-[#38261e]/70 via-[#271a14]/60 to-[#1a110d]/70',
  innerBgHover: 'group-hover:from-[#4d3328]/80 group-hover:via-[#36231b]/75 group-hover:to-[#241712]/80',
  innerBorder: 'border-[#593c2f]/50',
  innerBorderHover: 'group-hover:border-[#8c5e47]/70',
  ringBorder: 'border-[#d4a387]/25',
  ringBorderHover: 'group-hover:border-[#e3b89e]/60',
  glowGradient: 'from-[#8c5e47]/35 to-[#d4a387]/20',
  glowGradientHover: 'group-hover:from-[#a67156]/55 group-hover:to-[#e3b89e]/35',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(212,163,135,0.3)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(227,184,158,0.5)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(140,94,71,0.25)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "InsightHub aggregates data from across the platform and presents it through intuitive dashboards, visualizations, and analytics—enabling users to explore trends, risks, and performance metrics in real time.",

  iconBackground:
    "from-[#EAA68D] to-[#9E6350] shadow-[0_8px_20px_-6px_rgba(234,166,141,0.45)]",

  borderStyle:
    "bg-[linear-gradient(180deg,rgba(217,126,94,0)_0%,#D97E5E_47.12%,rgba(217,126,94,0)_100%)]",

  details: [
    {
      id: 1,
      icon: LackOfVisibilityImg,
      description: "Pulls fragmented systems into one unified, real-time command view.",
    },
    {
      id: 2,
      icon: LackOfActionImg,
      description: "Converts raw AI output into intelligence leadership can actually act on.",
    },
    {
      id: 3,
      icon: DifficultyIdentifyingTrends,
      description: "Surfaces hidden bottlenecks and trends before they turn into losses",
    }
  ],
};

const InsightHub = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      title="InsightHub"
      subtitle="Gain Complete Visibility into AI Decisions, Risks, and Trends"
      description="InsightHub provides a unified dashboard to monitor AI behavior, track trends, and drive data-informed decisions across your organization."
      productImage={ProductBannerImage}
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="explainable ai engine"
        heading="About the Product"
        body={[
          "InsightHub is the intelligence and visualization layer of the platform. It consolidates data from all modules to provide a single, real-time view of AI operations, risks, and performance.",
          "From fraud trends to payout delays, InsightHub enables teams and leadership to move from reactive to proactive decision-making.",]}

        image={insightHubAboutImg}
      />

      <ProblemItSolves data={problemSolvedData} />
      <HowItWorks
        small="sas"
        sectionTag="How It Works"
        heading={<>Governance on <span className="text-pink-400">autopilot.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'View Full Docs', href: '#' }}
      />
      <ComplianceValue
        smalltitle="TRUST & COMPLIANCE"
        title="Compliance Value"
        description="Establish a culture of accountability that bridges the gap between technical execution and public-facing transparency."
        cards={complianceCards}
        theme={complianceTheme}
      />

      <BusinessImpact
        sectionTag="The Impact"
        heading="Business Impact"
        intro="Maximize operational efficiency by automating the path from observation to action, ensuring your resources are always deployed where they matter most."
        items={impactItems}
        image={businessImpactImg}
        theme={impactTheme}
      />

    </div>
    <Footer />
  </div>
);

export default InsightHub;

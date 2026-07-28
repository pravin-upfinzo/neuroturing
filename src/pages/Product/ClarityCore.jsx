import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import HowItWorks from './components/HowItWorks';
import BusinessImpact from './components/BusinessImpact';
import { AlertTriangle, BarChart3, ShieldOff, Eye, GitBranch, Zap, Activity, EyeOff, Database } from 'lucide-react';
import clarityCoreImg from '../../images/ClarityCore.png';
import DatasetsImg from '../../images/products/icons/database.svg'
import DelayinInvestigationsImg from '../../images/products/icons/delay-in-investigations.svg'
import InabilityToJustifyDecisionsImg from '../../images/products/icons/inability-to-justify-decisions.svg'
import LackOfVisibilityImg from '../../images/products/icons/lackof-visibility.svg'
import ProblemItSolves from './components/ProblemItSolves';
import clarityCoreAboutImg from '../../images/Aboutproduct/Claritycore_Aboutproduct.png';
import ProductBannerImage from '../../images/Producetbanner/claritycore.png';

import icon1 from '../../images/compliance_value/explainability.svg';
import icon2 from '../../images/compliance_value/audit-readiness.svg';
import icon3 from '../../images/compliance_value/ai-transparency.svg';
import ComplianceValue from './components/ComplianceValue';

import businessImpactImg from '../../images/BusinessImpact/ClarityCore/Business Impact.png';
import impactIconFaster from '../../images/BusinessImpact/ClarityCore/Container.png';
import impactIconReliance from '../../images/BusinessImpact/ClarityCore/Icon.png';
import impactIconEfficiency from '../../images/BusinessImpact/ClarityCore/meter.png';
import impactIconConfidence from '../../images/BusinessImpact/ClarityCore/shield.png';
// ─── ClarityCore Theme (Blue) ────────────────────────────────────────────────
const theme = {
  gradientFrom: 'from-blue-600',
  gradientTo: 'to-cyan-400',
  glowColor: 'rgba(37,99,235,0.28)',
  tagBorderColor: 'border-cyan-500/[0.22]',
  tagTextColor: 'text-cyan-500',
  tagBgColor: 'bg-cyan-500/[0.22]',
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
  { icon: <Eye className="w-4 h-4" />, label: 'SHAP Explanations', sub: 'Feature attribution' },
  { icon: <GitBranch className="w-4 h-4" />, label: 'Decision Paths', sub: 'Full trace' },
  { icon: <Zap className="w-4 h-4" />, label: 'Real-Time Output', sub: '< 2ms latency' },
  { icon: <Activity className="w-4 h-4" />, label: 'Audit Logs', sub: 'Immutable records' },
];

const highlights = [
  { value: '10×', label: 'Faster Explanations', description: 'Generate SHAP-quality results in milliseconds, not minutes.' },
  { value: '99%', label: 'Feature Coverage', description: 'Explains every input variable across all model architectures.' },
  { value: '—62%', label: 'Audit Prep Time', description: 'Automated evidence packages ready in one click.' },
  { value: '100%', label: 'Regulatory Traceability', description: 'Full decision logs stored and exportable on demand.' },
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

const impactItems = [
  { icon: <img src={impactIconFaster} alt="" className="w-5 h-5 object-contain" />, label: 'Accelerate exception handling and case resolution by giving operations teams instant, plain-language reasoning behind every decision, cutting turnaround time on merchant and transaction reviews.' },
  { icon: <img src={impactIconReliance} alt="" className="w-5 h-5 object-contain" />, label: 'Improve cross-team collaboration by translating technical risk signals into explanations that compliance, operations, and support teams can act on without escalation.' },
  { icon: <img src={impactIconEfficiency} alt="" className="w-5 h-5 object-contain" />, label: 'Strengthen decision consistency and reduce rework by giving every team the same clear view of the factors driving a recommendation.' },
  // { icon: <img src={impactIconConfidence} alt="" className="w-5 h-5 object-contain" />, label: 'Greater confidence in AI systems' },
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

const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: 'Build regulatory confidence with fully explainable reasoning behind every onboarding, approval, and risk decision, ready for review at any time',
  },
  {
    imgSrc: icon2,
    subtitle: 'Maintain consistent governance through standardized, human-readable explanations that document the "why" behind every flagged case or held payout.',
  },
  {
    imgSrc: icon3,
    subtitle: 'Support regulatory readiness with traceable, defensible decision narratives that hold up under supervisory and internal audit scrutiny',
  },
];

const complianceTheme = {
  borderGradient: 'from-[#2d3a4d]/60 via-[#1a2330]/40 to-[#0e131b]/30',
  borderGradientHover: 'hover:from-[#567498]/80 hover:via-[#364b63]/70 hover:to-[#1e2a38]/50',
  cardBg: 'bg-gradient-to-b from-[#182230]/90 via-[#101721]/95 to-[#090d13]',
  innerBg: 'bg-gradient-to-b from-[#25354a]/70 via-[#192433]/60 to-[#101822]/70',
  innerBgHover: 'group-hover:from-[#354b69]/80 group-hover:via-[#25354a]/75 group-hover:to-[#172230]/80',
  innerBorder: 'border-[#3f5778]/50',
  innerBorderHover: 'group-hover:border-[#678db8]/70',
  ringBorder: 'border-[#a1c4ec]/25',
  ringBorderHover: 'group-hover:border-[#c2dcfa]/60',
  glowGradient: 'from-[#567498]/35 to-[#a1c4ec]/20',
  glowGradientHover: 'group-hover:from-[#6b8eb8]/55 group-hover:to-[#c2dcfa]/35',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(161,196,236,0.3)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(194,220,250,0.5)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(86,116,152,0.28)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "ClarityCore captures AI model outputs in real time and decodes the underlying logic by analyzing contributing variables, rules, and patterns. It then converts this information into clear, contextual explanations tailored for operational and compliance workflows.",

  iconBackground:
    "from-[#397CFF] to-[#1360DA] shadow-[0_8px_20px_-6px_rgba(57,124,255,0.45)]",

  borderStyle:
    "bg-[linear-gradient(180deg,rgba(9,28,116,0)_0%,#2C73F2_47.12%,rgba(9,28,116,0)_100%)]",

  details: [
    {
      id: 1,
      icon: LackOfVisibilityImg,
      description: "Eliminate black-box decisioning by translating complex onboarding, transaction, and risk signals into clear, human-readable explanations for every banking and operations team",
    },
    {
      id: 2,
      icon: DatasetsImg,
      description: "Replace manual investigation and escalation cycles with instant, structured reasoning that lets teams resolve exceptions and reviews without chasing down analysts",
    },
    {
      id: 3,
      icon: DelayinInvestigationsImg,
      description: "Remove ambiguity from operational exception handling by surfacing the exact factors behind every flag, hold, or verification request as it happens",
    },
  ],
};

const ClarityCore = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <ProductHeroBanner
        title="ClarityCore"
        subtitle="Turn Complex AI Decisions into Clear, Actionable Insights"
        description="ClarityCore translates black-box AI outputs into human-readable explanations—empowering teams to understand, trust, and act on every decision."
        productImage={ProductBannerImage}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutProduct
          sectionTag="explainable ai engine"
          heading="About the Product"
          body={[
            "ClarityCore is the interpretation engine of the Neuroturing XAI platform. In high-stakes financial environments, AI models often produce decisions that are difficult to understand—even internally. ClarityCore bridges this gap by converting complex model outputs into structured, contextual explanations.",
            "Whether it's a flagged transaction, delayed payout, or compliance trigger, ClarityCore ensures every decision is transparent, explainable, and actionable—without requiring deep technical expertise.",
          ]}
          image={clarityCoreAboutImg}
        />


        <ProblemItSolves
          data={problemSolvedData}
        />
        <HowItWorks
          sectionTag="How It Works"
          heading={<>From black-box to <span className="text-blue-400">glass-box</span> in four steps.</>}
          steps={steps}
          theme={theme}
          cta={{ label: 'See Full Documentation', href: '#' }}
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
          intro="Unlock faster execution and operational efficiency with explainable AI that teams can trust and act on."
          items={impactItems}
          image={businessImpactImg}
        // theme={theme}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ClarityCore;

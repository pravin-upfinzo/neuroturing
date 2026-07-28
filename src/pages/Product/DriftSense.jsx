import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import BusinessImpact from './components/BusinessImpact';
import { Activity, TrendingDown, GitMerge, Bell, Radio, Gauge, BarChart2, RefreshCw } from 'lucide-react';
import UndetectedFraudPatternImg from '../../images/products/icons/undetected-fraud-pattern.svg'
import ModelPerformanceDegradationOvertimeImg from '../../images/products/icons/model-performance-degradation-overtime.svg'
import IncreaseFalsePositives from '../../images/products/icons/increase-false-positives.svg'
import LackofRealTimeMonitoring from '../../images/products/icons/lackof-real-time-monitoring.svg'

import driftSenseAboutImg from '../../images/Aboutproduct/DriftSense_Aboutproduct.png';
import businessImpactImg from '../../images/BusinessImpact/DriftSense/Business Impact.png';
import impactIconFraud from '../../images/BusinessImpact/DriftSense/Prevents fraud.png';
import impactIconAccuracy from '../../images/BusinessImpact/DriftSense/Improves AI.png';
import impactIconFalse from '../../images/BusinessImpact/DriftSense/Reduces false.png';
import ProductBannerImage from '../../images/Producetbanner/DriftSense.png';

import icon1 from '../../images/compliance_value/continuous-monitoring.svg';
import icon2 from '../../images/compliance_value/bias-detection.svg';
import icon3 from '../../images/compliance_value/risk-governance.svg';
import ComplianceValue from './components/ComplianceValue';
// ─── DriftSense Theme (Cyan / Teal) ─────────────────────────────────────────
const theme = {
  gradientFrom: 'from-cyan-500',
  gradientTo: 'to-teal-400',
  glowColor: 'rgba(6,182,212,0.22)',
  tagBorderColor: 'border-cyan-500/30',
  tagTextColor: 'text-cyan-400',
  tagBgColor: 'bg-cyan-500/10',
  cardBorderColor: 'border-cyan-500/20',
  iconBgColor: 'bg-cyan-900/40',
  iconBorderColor: 'border-cyan-500/20',
  accentTextColor: 'text-cyan-400',
  stepBorderColor: 'border-cyan-500',
  connectorColor: 'from-cyan-700 to-transparent',
  badgeBorderColor: 'border-cyan-500/25',
  badgeBgColor: 'bg-cyan-900/20',
  badgeTextColor: 'text-cyan-400',
};

const badges = [
  { icon: <Radio className="w-4 h-4" />, label: 'Live Monitoring', sub: 'Stream-based' },
  { icon: <Gauge className="w-4 h-4" />, label: '50+ Drift Metrics', sub: 'PSI, KS, W-dist' },
  { icon: <Bell className="w-4 h-4" />, label: 'Smart Alerts', sub: 'No false positives' },
  { icon: <RefreshCw className="w-4 h-4" />, label: 'Auto-Remediation', sub: 'Retrain trigger' },
];

const highlights = [
  { value: '97%', label: 'Early Drift Detection', description: 'Catches distributional shift before it materially impacts model performance.' },
  { value: '<5min', label: 'Alert Latency', description: 'From drift event to alert notification in under five minutes.' },
  { value: '50+', label: 'Drift Metrics', description: 'PSI, KS test, Wasserstein distance, and custom metrics supported.' },
  { value: '—71%', label: 'Model Failure Rate', description: 'Institutions using DriftSense report significantly fewer production incidents.' },
];

const problems = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Silent Degradation',
    description: 'Models trained on historical data quietly diverge from the current world. By the time performance drops, significant damage has already been done.',
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: 'Concept Drift Blindness',
    description: 'Statistical drift in input features is only half the problem. Concept drift—where the relationship between inputs and outcomes shifts—is far harder to detect.',
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: 'Alert Fatigue',
    description: 'Naive monitoring tools fire hundreds of false-positive alerts. Teams learn to ignore them—until a real failure becomes catastrophic.',
  },
];

// ─── Business Impact (Orange, matching the Figma) ─────────────────────────────
const impactTheme = {
  cardBorderColor: 'border-orange-500/20',
  iconBorderColor: 'border-orange-500/20',
  accentTextColor: 'text-orange-400',
};

const impactItems = [
  { icon: <img src={impactIconFraud} alt="" className="w-5 h-5 object-contain" />, label: 'Protects revenue by catching fraud and failures before customers ever feel them.' },
  { icon: <img src={impactIconAccuracy} alt="" className="w-5 h-5 object-contain" />, label: 'Keeps your AI`s edge sharp with accuracy that holds up as markets shift.' },
  { icon: <img src={impactIconFalse} alt="" className="w-5 h-5 object-contain" />, label: ' Frees up your team`s time - fewer false alarms,fewer manual reviews' },
];

const steps = [
  { step: '01', title: 'Profile Your Data & Model', description: 'DriftSense builds baseline statistical profiles of your training data distributions and model behaviour at deployment time.' },
  { step: '02', title: 'Continuously Compare', description: 'Streaming production data is compared against baselines using 50+ statistical tests. Anomalies are scored by severity and likely impact.' },
  { step: '03', title: 'Smart Alert Routing', description: 'Alerts are triaged by our intelligence layer—only material drift triggers notifications, with root-cause attribution included.' },
  { step: '04', title: 'Trigger Remediation Workflows', description: 'Automatically initiate retraining pipelines, shadow model deployments, or model rollbacks—all with a full audit log captured by ProofChain.' },
];

const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: 'Continuous, real-time oversight instead of point-in-time compliance checks.',
  },
  {
    imgSrc: icon2,
    subtitle: 'Surfaces fairness gaps and bias before they become a public problem',
  },
  {
    imgSrc: icon3,
    subtitle: 'Gives you a defensible, audit-ready record of AI performance over time.',
  },
];

const complianceTheme = {
  borderGradient: 'from-[#4a3f2d]/60 via-[#2a2419]/40 to-[#14110c]/30',
  borderGradientHover: 'hover:from-[#947c56]/80 hover:via-[#5e4e37]/70 hover:to-[#332a1e]/50',
  cardBg: 'bg-gradient-to-b from-[#292318]/90 via-[#19150f]/95 to-[#0e0c08]',
  innerBg: 'bg-gradient-to-b from-[#3b3223]/70 via-[#292318]/60 to-[#1b1710]/70',
  innerBgHover: 'group-hover:from-[#524631]/80 group-hover:via-[#3b3223]/75 group-hover:to-[#262016]/80',
  innerBorder: 'border-[#5c4e37]/50',
  innerBorderHover: 'group-hover:border-[#947c56]/70',
  ringBorder: 'border-[#dfc399]/25',
  ringBorderHover: 'group-hover:border-[#ebd2ad]/60',
  glowGradient: 'from-[#947c56]/35 to-[#dfc399]/20',
  glowGradientHover: 'group-hover:from-[#b3966a]/55 group-hover:to-[#ebd2ad]/35',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(223,195,153,0.3)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(235,210,173,0.5)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(148,124,86,0.25)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "Streamline your compliance process to turn high-effort audits into a seamless, automated advantage.",

  iconBackground:
    "from-[#FF4C00] to-[#992E00] shadow-[0_8px_20px_-6px_rgba(255,76,0,0.45)]",

  borderStyle:
  "bg-[linear-gradient(180deg,rgba(184,77,31,0)_0%,#B84D1F_47.12%,rgba(184,77,31,0)_100%)]",

  details: [
    {
      id: 1,
      icon: UndetectedFraudPatternImg,
      description: "Catches fraud patterns and anomalies in real time, before they escalate",
    },
    {
      id: 2,
      icon: ModelPerformanceDegradationOvertimeImg,
      description: "Flags model drift the moment accuracy starts slipping in production",
    },
    {
      id: 3,
      icon: IncreaseFalsePositives,
      description: "Cuts through false-positive noise so real threats never get buried in alerts",
    }
  ],
};

const DriftSense = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      title="DriftSense"
      subtitle="Detect Anomalies and Model Drift Before They Become Risks"
      description="DriftSense continuously monitors AI systems and transaction patterns to detect anomalies, performance drops, and emerging risks in real time."
      productImage={ProductBannerImage}
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="explainable ai engine"
        heading="About the Product"
        body={[
          "DriftSense is the monitoring and risk detection engine of the platform. In fast-changing financial environments, AI models can quickly become outdated or misaligned with new patterns.",
          "DriftSense ensures your systems stay reliable by proactively identifying anomalies, behavioral shifts, and performance degradation—before they impact operations.",
        ]}
        image={driftSenseAboutImg}
      />



      <ProblemItSolves
        data={problemSolvedData}
      />
      <HowItWorks
        sectionTag="How It Works"
        heading={<>From deployment to <span className="text-cyan-400">perpetual health.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'Explore the Documentation', href: '#' }}
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
        intro="Maximize your competitive edge with AI that maintains peak accuracy and long-term reliability in shifting markets."
        items={impactItems}
        image={businessImpactImg}
        theme={impactTheme}
      />
    </div>
    <Footer />
  </div>
);

export default DriftSense;

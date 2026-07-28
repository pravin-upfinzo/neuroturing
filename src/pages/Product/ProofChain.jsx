import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import BusinessImpact from './components/BusinessImpact';
import { Lock, Link2, ShieldAlert, Database, Hash, FileCheck2, GitCommit, Timer } from 'lucide-react';
import incompleteAuditTrailsImg from '../../images/products/icons/incomplete-audit-trails.svg'
import InabilityToReconstructAIdecisionsImg from '../../images/products/icons/inability-to-reconstruct-ai-decisions.svg'
import HighManualEffortImg from '../../images/products/icons/high-manual-effort.svg'
import RegulatoryImg from '../../images/products/icons/regulatory.svg'
import proofChainAboutImg from '../../images/Aboutproduct/ProofChain_Aboutproduct.png';
import businessImpactImg from '../../images/BusinessImpact/ProofChain/Business Impact_1.png';
import impactIconAudit from '../../images/BusinessImpact/ProofChain/Eliminates manual audit preparation.svg';
import impactIconCosts from '../../images/BusinessImpact/ProofChain/Reduces compliance costs.png';
import impactIconGovernance from '../../images/BusinessImpact/ProofChain/Strengthens governance and accountability.svg';
import ProductBannerImage from '../../images/Producetbanner/ProofChain.png';

import icon1 from '../../images/compliance_value/audit-ready.svg';
import icon2 from '../../images/compliance_value/traceability.svg';
import icon3 from '../../images/compliance_value/defensible-evidence.svg';
import ComplianceValue from './components/ComplianceValue';

// ─── ProofChain Theme (Orange / Amber) ──────────────────────────────────────
const theme = {
  gradientFrom: 'from-orange-500',
  gradientTo: 'to-amber-400',
  glowColor: 'rgba(249,115,22,0.22)',
  tagBorderColor: 'border-orange-500/30',
  tagTextColor: 'text-orange-400',
  tagBgColor: 'bg-orange-500/10',
  cardBorderColor: 'border-orange-500/20',
  iconBgColor: 'bg-orange-900/40',
  iconBorderColor: 'border-orange-500/20',
  accentTextColor: 'text-orange-400',
  stepBorderColor: 'border-orange-500',
  connectorColor: 'from-orange-700 to-transparent',
  badgeBorderColor: 'border-orange-500/25',
  badgeBgColor: 'bg-orange-900/20',
  badgeTextColor: 'text-orange-400',
};

const badges = [
  { icon: <Hash className="w-4 h-4" />, label: 'Cryptographic Hash', sub: 'Tamper-proof' },
  { icon: <FileCheck2 className="w-4 h-4" />, label: 'Compliance Packages', sub: 'SR11-7, GDPR+' },
  { icon: <GitCommit className="w-4 h-4" />, label: 'Chain of Custody', sub: 'End-to-end' },
  { icon: <Timer className="w-4 h-4" />, label: '< 2ms Write Latency', sub: 'Zero overhead' },
];

const highlights = [
  { value: '∞', label: 'Immutable Audit Logs', description: 'Tamper-proof record of every model decision, stored with cryptographic integrity.' },
  { value: '<2ms', label: 'Log Write Latency', description: 'Sub-millisecond audit writes—no impact on decisioning performance.' },
  { value: '100%', label: 'Chain-of-Custody', description: 'Verifiable provenance from raw data ingestion to final decision output.' },
  { value: '5+', label: 'Compliance Frameworks', description: 'Pre-mapped to SR11-7, GDPR, EU AI Act, DORA, and Basel IV requirements.' },
];

const problems = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: 'Mutable Audit Trails',
    description: 'Traditional database logs can be altered or deleted. Regulators increasingly demand tamper-proof evidence of every AI decision.',
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'Provenance Gaps',
    description: 'When a decision is challenged, institutions cannot prove which model version, which data, and which explanation generated it.',
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: 'Fragmented Evidence',
    description: 'Audit evidence is scattered across data warehouses, model registries, and email threads—impossible to assemble under time pressure.',
  },
];

// ─── Business Impact (Violet / Indigo, matching the Figma + icon color) ───────
const impactTheme = {
  cardBorderColor: 'border-violet-500/20',
  iconBorderColor: 'border-violet-500/20',
  accentTextColor: 'text-violet-400',
};

const impactItems = [
  { icon: <img src={impactIconAudit} alt="" className="w-5 h-5 object-contain" />, label: 'Cuts weeks of audit prep down to instant, automated reporting - always inspection-ready.' },
  { icon: <img src={impactIconCosts} alt="" className="w-5 h-5 object-contain" />, label: 'Lower operational overhead. Compliance stops being a cost centre and becomes a background process.' },
  { icon: <img src={impactIconGovernance} alt="" className="w-5 h-5 object-contain" />, label: 'One source of truth across every workflow, freeing your team to focus on higher-value work instead of paperwork.' },
];

const steps = [
  { step: '01', title: 'Intercept Every Decision Event', description: 'ProofChain attaches as a middleware layer, capturing every model prediction, input payload, explanation, and outcome in real time.' },
  { step: '02', title: 'Hash & Anchor', description: 'Each event is cryptographically hashed and anchored to an immutable ledger, creating a verifiable chain of custody.' },
  { step: '03', title: 'Assemble Compliance Packages', description: 'At audit time, ProofChain assembles structured evidence packages mapped to specific regulatory articles—in minutes, not weeks.' },
  { step: '04', title: 'Respond to Challenges Instantly', description: 'Retrieve the full provenance of any decision—model version, input data, explanation, and downstream outcome—with a single API call.' },
];

const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: 'Constant audit-readiness -nothing to scramble for when a regulator asks',
  },
  {
    imgSrc: icon2,
    subtitle: ' Every action is traceable to its origin, so no decision is ever left undocumented',
  },
  {
    imgSrc: icon3,
    subtitle: 'Immutable, defensible records that hold up under the closest legal, forensic, or supervisory review',
  },
];

const complianceTheme = {
  borderGradient: 'from-[#323659]/60 via-[#1c1e38]/40 to-[#0e0f21]/30',
  borderGradientHover: 'hover:from-[#6368a3]/80 hover:via-[#3d4273]/70 hover:to-[#22254a]/50',
  cardBg: 'bg-gradient-to-b from-[#1b1e3d]/90 via-[#12142c]/95 to-[#090a18]',
  innerBg: 'bg-gradient-to-b from-[#2b2f57]/70 via-[#1e2142]/60 to-[#12132e]/70',
  innerBgHover: 'group-hover:from-[#3a3f73]/80 group-hover:via-[#2a2e5b]/75 group-hover:to-[#1b1e45]/80',
  innerBorder: 'border-[#464c82]/50',
  innerBorderHover: 'group-hover:border-[#6f76bf]/70',
  ringBorder: 'border-[#a2a8ed]/25',
  ringBorderHover: 'group-hover:border-[#c5caef]/60',
  glowGradient: 'from-[#6368a3]/35 to-[#a2a8ed]/20',
  glowGradientHover: 'group-hover:from-[#787ec2]/55 group-hover:to-[#c5caef]/35',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(162,168,237,0.3)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(197,202,239,0.5)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(99,104,163,0.3)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "Streamline your compliance process to turn high-effort audits into a seamless, automated advantage.",

  iconBackground:
    "from-[#8483F9] to-[#2525EA] shadow-[0_8px_20px_-6px_rgba(132,131,249,0.45)]",

  borderStyle:
    "bg-[linear-gradient(180deg,rgba(76,63,122,0)_0%,#4C3F7A_47.12%,rgba(76,63,122,0)_100%)]",

  details: [
    {
      id: 1,
      icon: incompleteAuditTrailsImg,
      description: "Closes the gap between complex AI decisions and the missing links in your audit trail",
    },
    {
      id: 2,
      icon: InabilityToReconstructAIdecisionsImg,
      description: "No more digging through fragmented logs - reconstruct any decision instantly, end to end",
    },
    {
      id: 3,
      icon: HighManualEffortImg,
      description: "Replaces slow, manual audit prep with a real-time system built to survive strict regulatory scrutiny",
    }
  ],
};

const ProofChain = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      title="ProofChain"
      subtitle="Build a Complete, Tamper-Proof Audit Trail for Every AI Decision"
      description="ExplainTouch delivers simple, transparent explanations of AI decisions to end-users—enhancing trust and reducing confusion."
      productImage={ProductBannerImage}
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="explainable ai engine"
        heading="About the Product"
        body={[
          "ProofChain is the audit backbone of Neuroturing XAI. In financial systems where every decision must be defensible, ProofChain ensures that nothing is lost, altered, or unverifiable.",
          "It automatically logs every AI-driven action—capturing decision context, model versions, and system behavior—creating a single source of truth for audits and compliance.",
        ]}
        image={proofChainAboutImg}
      />


      <ProblemItSolves
        data={problemSolvedData}
      />
      <HowItWorks
        sectionTag="How It Works"
        heading={<>Every decision, <span className="text-orange-400">provably preserved.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'Read the Technical Whitepaper', href: '#' }}
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
        intro="Transform your organizational integrity with a single source of truth that strengthens governance and locks in absolute accountability."
        items={impactItems}
        image={businessImpactImg}
        theme={impactTheme}
      />
    </div>
    <Footer />
  </div>
);

export default ProofChain;

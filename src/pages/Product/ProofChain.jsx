import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import { Lock, Link2, ShieldAlert, Database, Hash, FileCheck2, GitCommit, Timer } from 'lucide-react';

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
  { icon: <Hash className="w-4 h-4" />,       label: 'Cryptographic Hash',   sub: 'Tamper-proof' },
  { icon: <FileCheck2 className="w-4 h-4" />, label: 'Compliance Packages',  sub: 'SR11-7, GDPR+' },
  { icon: <GitCommit className="w-4 h-4" />,  label: 'Chain of Custody',    sub: 'End-to-end' },
  { icon: <Timer className="w-4 h-4" />,      label: '< 2ms Write Latency', sub: 'Zero overhead' },
];

const highlights = [
  { value: '∞',    label: 'Immutable Audit Logs',  description: 'Tamper-proof record of every model decision, stored with cryptographic integrity.' },
  { value: '<2ms', label: 'Log Write Latency',      description: 'Sub-millisecond audit writes—no impact on decisioning performance.' },
  { value: '100%', label: 'Chain-of-Custody',       description: 'Verifiable provenance from raw data ingestion to final decision output.' },
  { value: '5+',   label: 'Compliance Frameworks', description: 'Pre-mapped to SR11-7, GDPR, EU AI Act, DORA, and Basel IV requirements.' },
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

const steps = [
  { step: '01', title: 'Intercept Every Decision Event',  description: 'ProofChain attaches as a middleware layer, capturing every model prediction, input payload, explanation, and outcome in real time.' },
  { step: '02', title: 'Hash & Anchor',                    description: 'Each event is cryptographically hashed and anchored to an immutable ledger, creating a verifiable chain of custody.' },
  { step: '03', title: 'Assemble Compliance Packages',    description: 'At audit time, ProofChain assembles structured evidence packages mapped to specific regulatory articles—in minutes, not weeks.' },
  { step: '04', title: 'Respond to Challenges Instantly', description: 'Retrieve the full provenance of any decision—model version, input data, explanation, and downstream outcome—with a single API call.' },
];

const ProofChain = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      tagline="Immutable Audit Infrastructure"
      title="ProofChain"
      subtitle="Cryptographically verifiable audit trails for every AI decision."
      description="ProofChain creates an unbreakable chain of custody for every model decision your institution makes—capturing the input, explanation, model version, and outcome in a tamper-proof, regulator-ready record."
      badges={badges}
      theme={theme}
      ctaLabel="Secure Your Audit Trail"
      ctaSecondary="See How It Works"
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="About ProofChain"
        heading={<>Audit evidence that is <span className="text-orange-400">impossible to dispute.</span></>}
        body="ProofChain eliminates the #1 risk in AI governance: the inability to prove what happened, when, and why. Every decision your models make is captured, hashed, and stored in an immutable ledger that satisfies the most demanding regulatory evidence standards."
        highlights={highlights}
        theme={theme}
      />
      <ProblemItSolves
        sectionTag="The Problem"
        heading={<>Why AI audit trails <span className="text-orange-400">fail under scrutiny</span></>}
        intro="When regulators investigate an AI-driven decision, institutions routinely discover they cannot reconstruct the full decision context. ProofChain makes this impossible."
        problems={problems}
        theme={theme}
      />
      <HowItWorks
        sectionTag="How It Works"
        heading={<>Every decision, <span className="text-orange-400">provably preserved.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'Read the Technical Whitepaper', href: '#' }}
      />
    </div>
    <Footer />
  </div>
);

export default ProofChain;

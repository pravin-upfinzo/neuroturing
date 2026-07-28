import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import BusinessImpact from './components/BusinessImpact';
import { Users, MessageSquare, Layers, FileText, Globe, CheckCircle2, Languages, Mic } from 'lucide-react';
import HighvolumeOfSupportQqueriesImg from '../../images/products/icons/high-volume-of-support-queries.svg'
import CustomerDistractAIdrivenOutcomes from '../../images/products/icons/customer-distract-AI-driven-outcomes.svg'
import InabilityToJustifyDecisionsImg from '../../images/products/icons/inability-to-justify-decisions.svg'
import LackOfVisibilityImg from '../../images/products/icons/lackof-visibility.svg'
import explainTouchAboutImg from '../../images/Aboutproduct/ExplainTouch_Aboutproduct.png';
import businessImpactImg from '../../images/BusinessImpact/ExplainTouch/Business Impact.png';
import impactIconSupport from '../../images/BusinessImpact/ExplainTouch/Reduces support load and operational overhead.svg';
import impactIconTrust from '../../images/BusinessImpact/ExplainTouch/Improves customer satisfaction and trust.svg';
import impactIconExperience from '../../images/BusinessImpact/ExplainTouch/Enhances overall user experience.svg';

import ProductBannerImage from '../../images/Producetbanner/ExplainTouch.png';
// ─── ExplainTouch Theme (Emerald / Green) ───────────────────────────────────

import icon1 from '../../images/compliance_value/chat-check.png';
import icon2 from '../../images/compliance_value/scale.png';
import icon3 from '../../images/compliance_value/shield-check.png';
import ComplianceValue from './components/ComplianceValue';

const theme = {
  gradientFrom: 'from-emerald-500',
  gradientTo: 'to-teal-400',
  glowColor: 'rgba(16,185,129,0.22)',
  tagBorderColor: 'border-emerald-500/30',
  tagTextColor: 'text-emerald-400',
  tagBgColor: 'bg-emerald-500/10',
  cardBorderColor: 'border-emerald-500/20',
  iconBgColor: 'bg-emerald-900/40',
  iconBorderColor: 'border-emerald-500/20',
  accentTextColor: 'text-emerald-400',
  stepBorderColor: 'border-emerald-500',
  connectorColor: 'from-emerald-700 to-transparent',
  badgeBorderColor: 'border-emerald-500/25',
  badgeBgColor: 'bg-emerald-900/20',
  badgeTextColor: 'text-emerald-400',
};

const badges = [
  { icon: <Globe className="w-4 h-4" />, label: '12+ Languages', sub: 'Auto-localised' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'GDPR Art. 22', sub: 'Right to explain' },
  { icon: <MessageSquare className="w-4 h-4" />, label: 'Any Channel', sub: 'Email, SMS, API' },
  { icon: <Mic className="w-4 h-4" />, label: 'Plain Language', sub: 'NLG-powered' },
];

const highlights = [
  { value: '5×', label: 'Customer Comprehension', description: 'Plain-language explanations tested against consumer focus groups.' },
  { value: '—38%', label: 'Complaint Rate', description: 'Institutions using ExplainTouch saw fewer credit-decision disputes.' },
  { value: '12+', label: 'Languages Supported', description: 'Automatically localised explanations for global customer bases.' },
  { value: '100%', label: 'Right-to-Explain Ready', description: 'GDPR Article 22 compliance out of the box.' },
];

const problems = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Unintelligible Decisions',
    description: 'Customers receiving loan rejections or insurance denials are entitled to an explanation—but technical SHAP values mean nothing to them.',
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Complaint Overload',
    description: 'Without clear explanations at point-of-decision, customers escalate—driving up call-centre costs and regulatory complaints.',
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'GDPR Right-to-Explain',
    description: 'Article 22 mandates meaningful information about automated decisions. Most institutions cannot produce this consistently at scale.',
  },
];

// ─── Business Impact (Emerald) ───────────────────────────────────────────────
const impactTheme = {
  glowColor: 'rgba(16,185,129,0.18)',
  tagBorderColor: 'border-emerald-500/30',
  tagTextColor: 'text-emerald-400',
  tagBgColor: 'bg-emerald-500/10',
  cardBorderColor: 'border-emerald-500/20',
  iconBorderColor: 'border-emerald-500/20',
  accentTextColor: 'text-emerald-400',
  railFrom: '#A7F3D0',
  railTo: '#34D399',
};

const impactItems = [
  { icon: <img src={impactIconSupport} alt="" className="w-5 h-5 object-contain" />, label: 'Accelerate issue resolution and reduce support escalations by giving customers and agents instant,understandable answers at the point of transaction' },
  { icon: <img src={impactIconTrust} alt="" className="w-5 h-5 object-contain" />, label: 'Improve customer experience and retention by streamlining decline/hold explanations, self-service correction, and dispute handling from a single explainability layer.' },
  { icon: <img src={impactIconExperience} alt="" className="w-5 h-5 object-contain" />, label: 'Strengthen business performance with fewer chargeback disputes, lower checkout abandonment, and higher first-contact resolution that enable faster, more confident customer interactions' },
];

const steps = [
  { step: '01', title: 'Ingest Model Decisions', description: 'ExplainTouch hooks into your decisioning pipeline and receives each model output along with its ClarityCore explanation payload.' },
  { step: '02', title: 'Translate to Plain Language', description: 'Our NLG engine converts feature weights and decision paths into clear, jargon-free sentences calibrated to your customer segments.' },
  { step: '03', title: 'Personalise & Localise', description: 'Apply tone, language, and channel-specific templates. Deliver via email, SMS, in-app, or contact-centre scripts.' },
  { step: '04', title: 'Log & Audit', description: 'Every explanation delivered to a customer is stored immutably with a timestamp and delivery receipt for regulatory evidence.' },
];

const complianceCards = [
  {
    imgSrc: icon1,
    subtitle: "Build regulatory confidence with explainable AI recommendations that provide complete transparency behind every customer-facing transaction decision",
  },
  {
    imgSrc: icon2,
    subtitle: "Maintain consistent governance through standardized explanation templates, audit-ready interaction logs, and comprehensive customer communication visibility",
  },
  {
    imgSrc: icon3,
    subtitle: "Support regulatory readiness with traceable decision-making, compliance-focused customer disclosures, and secure handling of transaction-level explanation data",
  },
];

const complianceTheme = {
  borderGradient: 'from-[#3a6350]/60 via-[#233f32]/40 to-[#14261c]/30',
  borderGradientHover: 'hover:from-[#5eab8a]/80 hover:via-[#376b53]/70 hover:to-[#214234]/50',
  cardBg: 'bg-gradient-to-b from-[#213a2f]/90 via-[#162a21]/95 to-[#101e18]',
  innerBg: 'bg-gradient-to-b from-[#2c4e3e]/70 via-[#213c2f]/60 to-[#182d23]/70',
  innerBgHover: 'group-hover:from-[#3a6652]/80 group-hover:via-[#2b4d3d]/75 group-hover:to-[#1e382c]/80',
  innerBorder: 'border-[#43755c]/50',
  innerBorderHover: 'group-hover:border-[#68b38f]/70',
  ringBorder: 'border-[#96e0c2]/30',
  ringBorderHover: 'group-hover:border-[#b4f0d7]/65',
  glowGradient: 'from-[#5eb892]/35 to-[#96e0c2]/25',
  glowGradientHover: 'group-hover:from-[#6ecfa6]/55 group-hover:to-[#b4f0d7]/40',
  imgShadow: 'drop-shadow-[0_4px_14px_rgba(150,224,194,0.35)]',
  imgShadowHover: 'group-hover:drop-shadow-[0_6px_20px_rgba(180,240,215,0.55)]',
  cardShadowHover: 'hover:shadow-[0_12px_35px_rgba(50,135,95,0.3)]',
}
const problemSolvedData = {
  title: "Problem It Solves",
  badge: "Core Challenges",
  description:
    "Neutralize frustration during service disruptions with clear, honest communication that protects your brand’s reputation",

  iconBackground:
    "from-[#03C379] to-[#015D3A] shadow-[0_8px_20px_-6px_rgba(3,195,121,0.45)]",

  borderStyle:
    "bg-[linear-gradient(180deg,rgba(65,133,99,0)_0%,#418563_47.12%,rgba(65,133,99,0)_100%)]",

  details: [
    {
      id: 1,
      icon: LackOfVisibilityImg,
      description: " Eliminate the black-box experience customers and frontline agents face when transactions are declined, held, or flagged, by delivering plain-language explanations at the exact moment of the event"},
    {
      id: 2,
      icon: HighvolumeOfSupportQqueriesImg,
      description: "Replace generic error codes and repeated failed attempts with real-time, human-readable reasoning that helps customers self-correct and agents resolve queries instantly",
    },
    {
      id: 3,
      icon: CustomerDistractAIdrivenOutcomes,
      description: "Gain complete visibility into why every transaction outcome occurred, with explainable AI translating complex model decisions into clear, actionable context for customers and support teams alike",
    }
  ],
};

const ExplainTouch = () => (
  <div className="relative w-full overflow-hidden bg-background text-white">
    <div className="absolute top-0 left-0 w-full z-50"><Header /></div>

    <ProductHeroBanner
      title="ExplainTouch"
      subtitle="Communicate AI Decisions Clearly to Customers and Stakeholders"
      description="ExplainTouch delivers simple, transparent explanations of AI decisions to end-users—enhancing trust and reducing confusion."
      productImage={ProductBannerImage}
    />

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <AboutProduct
        sectionTag="explainable ai engine"
        heading="About the Product"
        body={[
          "ExplainTouch is the communication layer of Neuroturing XAI. While AI systems make complex decisions, users only see outcomes—often without context.",
          "ExplainTouch bridges this gap by transforming technical reasoning into clear, user-friendly messages, ensuring that customers and merchants always understand what’s happening and why.",
        ]}
        image={explainTouchAboutImg}
      />

      <ProblemItSolves
        data={problemSolvedData}
      />

      <HowItWorks
        sectionTag="How It Works"
        heading={<>From model output to <span className="text-emerald-400">customer-ready explanation.</span></>}
        steps={steps}
        theme={theme}
        cta={{ label: 'View Integration Guide', href: '#' }}
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
        intro="Seamlessly integrate explainability into your platform to create a smoother, more sophisticated journey for every user."
        items={impactItems}
        image={businessImpactImg}
        theme={impactTheme}
      />
    </div>
    <Footer />
  </div>
);

export default ExplainTouch;

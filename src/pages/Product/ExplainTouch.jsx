import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductHeroBanner from './components/ProductHeroBanner';
import AboutProduct from './components/AboutProduct';
import ProblemItSolves from './components/ProblemItSolves';
import HowItWorks from './components/HowItWorks';
import { Users, MessageSquare, Layers, FileText, Globe, CheckCircle2, Languages, Mic } from 'lucide-react';
import HighvolumeOfSupportQqueriesImg from '../../images/products/icons/high-volume-of-support-queries.svg'
import CustomerDistractAIdrivenOutcomes from '../../images/products/icons/customer-distract-AI-driven-outcomes.svg'
import InabilityToJustifyDecisionsImg from '../../images/products/icons/inability-to-justify-decisions.svg'
import LackOfVisibilityImg from '../../images/products/icons/lackof-visibility.svg'
import explainTouchAboutImg from '../../images/Aboutproduct/ExplainTouch_Aboutproduct.png';

import ProductBannerImage from '../../images/Producetbanner/ExplainTouch.png';
// ─── ExplainTouch Theme (Emerald / Green) ───────────────────────────────────
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

const steps = [
  { step: '01', title: 'Ingest Model Decisions', description: 'ExplainTouch hooks into your decisioning pipeline and receives each model output along with its ClarityCore explanation payload.' },
  { step: '02', title: 'Translate to Plain Language', description: 'Our NLG engine converts feature weights and decision paths into clear, jargon-free sentences calibrated to your customer segments.' },
  { step: '03', title: 'Personalise & Localise', description: 'Apply tone, language, and channel-specific templates. Deliver via email, SMS, in-app, or contact-centre scripts.' },
  { step: '04', title: 'Log & Audit', description: 'Every explanation delivered to a customer is stored immutably with a timestamp and delivery receipt for regulatory evidence.' },
];


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
      description: "Poor transparency in customer-facing decisions",
    },
    {
      id: 2,
      icon: HighvolumeOfSupportQqueriesImg,
      description: "High volume of support queries",
    },
    {
      id: 3,
      icon: CustomerDistractAIdrivenOutcomes,
      description: "Customer distrust in AI-driven outcomes",
    },
    {
      id: 4,
      icon: InabilityToJustifyDecisionsImg,
      description: "Lack of clear communication during delays or failures",
    },
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
    </div>
    <Footer />
  </div>
);

export default ExplainTouch;

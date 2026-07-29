import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Information We Collect',
    body:
      'We may collect:',
    points: [
      'Name, company name, designation, email address, and phone number.',
      'Business information submitted through contact or demo request forms.',
      'Website usage data such as browser type, IP address, device information, and pages visited.',
      'Cookies and analytics data used to improve website performance.',
      'Neuroturing does not intentionally collect confidential financial, payment, or personally sensitive customer data through this website.',
    ],
  },
  {
    title: 'How We Use Your Information',
    body:
      'We use your information to:',
    points: [
      'Respond to enquiries and demo requests.',
      'Provide information about our products and services.',
      'Improve website functionality and user experience.',
      'Communicate important updates.',
      'Maintain website security and prevent misuse.',
      'Meet applicable legal and regulatory obligations.',
    ],
  },
  {
    title: 'Data Security',
    body:
      'We implement appropriate administrative, technical, and organizational safeguards designed to protect information against unauthorized access, disclosure, alteration, or destruction.',
  },
  {
    title: 'Data Sharing',
    body:
      'We do not sell or rent your personal information. Information may only be shared with:',
    points: [
      'Authorized service providers supporting our operations.',
      'Legal or regulatory authorities where required by law.',
      'Successors in the event of a merger, acquisition, or business restructuring.',
    ],
  },
  {
    title: 'Data Retention',
    body:
      'Information is retained only for as long as necessary to fulfil the purposes described in this Privacy Policy or as required by applicable law.',
  },
  {
    title: 'Your Rights',
    body:
      'Depending on applicable laws, you may request to:',
    points: [
      'Access your personal information.',
      'Correct inaccurate information.',
      'Request deletion of your information.',
      'Withdraw consent where applicable.',
      'Contact us regarding privacy concerns.',
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="relative w-full overflow-hidden bg-background text-white">
      <div className="absolute top-0 left-0 w-full z-50">
        <Header />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.08) 45%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Legal
            </div>

            <h1
              className="mb-5 bg-gradient-to-r from-white via-[#d8ecff] to-[#8ebeff] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl"
              style={{ WebkitBackgroundClip: 'text' }}
            >
              Privacy Policy
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            At Neuroturing, protecting your privacy and safeguarding your information is fundamental to our commitment to responsible AI. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website or engage with our products and services.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300">
              Effective date: July 29, 2026
            </div>
          </div>

          <div className="space-y-6">
            {sections.map((section, index) => (
              <LegalSection
                key={section.title}
                index={String(index + 1).padStart(2, '0')}
                title={section.title}
                body={section.body}
                points={section.points}
              />
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="mb-4 text-2xl font-bold text-white">
              Contact
            </h2>

            <p className="mb-6 leading-7 text-gray-400">
                For privacy-related questions, contact:
            </p>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Company
                </p>
                <p className="mt-1 text-gray-300">
                  Neuroturing
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Email
                </p>
                <a
                  href="mailto:info@neuroturing.com"
                  className="mt-1 text-white transition-colors hover:text-cyan-400"
                >
                  info@neuroturing.com
                </a>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-cyan-400">
                  Website
                </p>
                <a
                  href="https://neuroturing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-white transition-colors hover:text-cyan-400"
                >
                  www.neuroturing.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

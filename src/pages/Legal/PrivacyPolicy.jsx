import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Information We Collect',
    body:
      'Neuroturing may collect personal information that you voluntarily provide through forms on this website, such as your name, email address, company name, phone number, and any message or business details you choose to share.',
  },
  {
    title: 'How We Use Information',
    body:
      'We use the information collected through the website to respond to inquiries, provide requested information, improve our services, maintain website functionality, and communicate updates that may be relevant to your interaction with Neuroturing.',
    points: [
      'Respond to contact requests and business inquiries.',
      'Improve website performance, usability, and user experience.',
      'Send relevant operational or marketing communications where permitted.',
    ],
  },
  {
    title: 'Automatically Collected Data',
    body:
      'When you visit the website, certain technical information may be collected automatically, such as browser type, device information, IP address, pages visited, referring URLs, and general usage behavior. This information helps us understand how the site is being used and how it can be improved.',
  },
  {
    title: 'Cookies and Tracking Technologies',
    body:
      'The website may use cookies and similar technologies to support essential functionality, improve site experience, and analyze aggregate traffic patterns. Additional details are described in our Cookie Policy.',
  },
  {
    title: 'How We Share Information',
    body:
      'Neuroturing does not sell personal information. We may share information with trusted service providers or advisors who support website operations, communications, analytics, or legal compliance, subject to appropriate confidentiality and security obligations.',
  },
  {
    title: 'Data Security',
    body:
      'We take reasonable administrative, technical, and organizational measures to protect personal information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission or storage can be guaranteed as completely secure.',
  },
  {
    title: 'Data Retention',
    body:
      'Personal information is retained only for as long as necessary to fulfill the purpose for which it was collected, comply with legal obligations, resolve disputes, or enforce our agreements and legitimate business interests.',
  },
  {
    title: 'Your Rights',
    body:
      'Depending on applicable law, you may have rights relating to the personal information we hold about you, including the right to request access, correction, deletion, or restriction of processing. You may also object to certain uses of your information where permitted by law.',
  },
  {
    title: 'Third-Party Services',
    body:
      'This website may contain links to external websites or may rely on third-party service providers for hosting, analytics, or communications. Neuroturing is not responsible for the privacy practices of third-party websites or services outside our control.',
  },
  {
    title: 'Updates to This Policy',
    body:
      'We may update this Privacy Policy from time to time to reflect legal, operational, or business changes. The latest version will always be available on this page, and continued use of the website after updates indicates acceptance of the revised policy.',
  },
  {
    title: 'Contact Us',
    body:
      'If you have any questions about this Privacy Policy or how your information is handled, please contact Neuroturing through the contact page or by email at info@neuroturing.com.',
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
              This policy explains what information Neuroturing may collect through the website,
              how that information is used, and the safeguards applied to protect it.
            </p>

            <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-gray-300">
              Effective date: July 28, 2026
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

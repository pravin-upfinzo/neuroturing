import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Website Use',
    body:
      "The information available on this website is provided for general informational purposes regarding Neuroturing's products, services, and solutions. Unauthorized use of this website may give rise to legal action",
  },
  {
    title: 'Intellectual Property',
    body:
      'All content, including text, graphics, product names, trademarks, logos, software, documentation, and website design, is the exclusive property of Neuroturing unless otherwise stated. No content may be copied, reproduced, distributed, or modified without prior written permission.',
  },
  {
    title: 'Product Information',
    body:
      'Product descriptions, features, specifications, and service offerings are provided for informational purposes only and may change without prior notice. Availability of products or services may vary by region or customer engagement.',
  },
  {
    title: 'Demo Requests',
    body:
      'Submitting a demo request or contact form does not create a commercial relationship or guarantee service availability. Neuroturing reserves the right to accept or decline engagements at its discretion.',
  },
  {
    title: 'Privacy',
    body:
      'Any information submitted through our website is handled in accordance with our Privacy Policy. Users are responsible for ensuring that the information they provide is accurate and lawful.',
  },
  {
    title: 'Third-Party Services',
    body:
      'Our website may contain links to third-party websites or services. Neuroturing is not responsible for their content, availability, or privacy practices.',
  },
  {
    title: 'Disclaimer',
    body:
      'The website and its content are provided on an "as is" and "as available" basis without warranties of any kind. Neuroturing does not guarantee uninterrupted or error-free access to the website.',
  },
  {
    title: 'Limitation of Liability',
    body:
      'To the maximum extent permitted by law, Neuroturing shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from the use of this website or reliance on its content.',
  },
  {
    title: 'Governing Law',
    body:
      'The laws of India shall govern these Terms & Conditions. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts located in India.',
  },
  {
    title: 'Changes to These Terms',
    body:
      'Neuroturing reserves the right to modify these Terms & Conditions at any time. Updated versions will be published on this website with immediate effect.',
  },
];

const TermsAndConditions = () => {
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
              Terms & Conditions
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
            Welcome to Neuroturing. By accessing or using this website, you agree to comply with these Terms & Conditions. If you do not agree, please discontinue use of the website.
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
              For any questions regarding these Terms & Conditions, please contact us:
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

export default TermsAndConditions;

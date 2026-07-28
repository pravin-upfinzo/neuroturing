import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'Acceptance of Terms',
    body:
      'By accessing, browsing, or using the Neuroturing website and its related content, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should discontinue use of the website immediately.',
  },
  {
    title: 'Use of the Website',
    body:
      'You may use this website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use of this site by any other person or organization.',
    points: [
      'Do not attempt to gain unauthorized access to any part of the platform or related systems.',
      'Do not copy, reproduce, republish, or distribute website content without prior written permission.',
      'Do not use the website to transmit harmful, misleading, or unlawful material.',
    ],
  },
  {
    title: 'Intellectual Property',
    body:
      'All content on this website, including text, visual assets, graphics, branding, product names, and design elements, is owned by or licensed to Neuroturing unless otherwise stated. These materials are protected by applicable intellectual property laws.',
  },
  {
    title: 'Product and Service Information',
    body:
      'Information presented on the website about Neuroturing products, services, and capabilities is provided for general informational purposes only. We reserve the right to modify, update, or discontinue any offering without prior notice.',
  },
  {
    title: 'Third-Party Links',
    body:
      'This website may include links to third-party websites or platforms for convenience. Neuroturing does not control and is not responsible for the content, security, or privacy practices of those third-party services.',
  },
  {
    title: 'Disclaimer of Warranties',
    body:
      'The website and its contents are provided on an "as is" and "as available" basis. Neuroturing makes no warranties, express or implied, regarding the availability, accuracy, reliability, or completeness of the website or its materials.',
  },
  {
    title: 'Limitation of Liability',
    body:
      'To the fullest extent permitted by law, Neuroturing shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of, or inability to use, this website.',
  },
  {
    title: 'Privacy and Data Use',
    body:
      'Any personal information submitted through this website, including through contact or subscription forms, is handled in accordance with our privacy practices. Users should ensure that the information they provide is accurate and lawful to share.',
  },
  {
    title: 'Changes to These Terms',
    body:
      'Neuroturing may revise these Terms & Conditions at any time. Updated versions will be posted on this page, and continued use of the website after such updates constitutes acceptance of the revised terms.',
  },
  {
    title: 'Contact Information',
    body:
      'If you have questions regarding these Terms & Conditions, please contact Neuroturing through the contact page or by email at info@neuroturing.com.',
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
              These terms explain the rules, responsibilities, and limitations that apply when
              visitors access and interact with the Neuroturing website.
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

export default TermsAndConditions;

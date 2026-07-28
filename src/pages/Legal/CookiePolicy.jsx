import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import LegalSection from './components/LegalSection';

const sections = [
  {
    title: 'What Are Cookies',
    body:
      'Cookies are small text files stored on your device when you visit a website. They help websites remember information about your visit, support essential functionality, and improve the overall browsing experience.',
  },
  {
    title: 'How Neuroturing Uses Cookies',
    body:
      'Neuroturing may use cookies and similar technologies to keep the website functioning properly, understand visitor interactions, measure performance, and improve usability over time.',
    points: [
      'Support essential website behavior and basic navigation.',
      'Remember user preferences where applicable.',
      'Analyze aggregate traffic and engagement patterns.',
    ],
  },
  {
    title: 'Types of Cookies We May Use',
    body:
      'Depending on the website setup and connected tools, Neuroturing may use essential cookies, analytics cookies, functionality cookies, and limited performance-related technologies that help us understand how the site is being accessed and used.',
  },
  {
    title: 'Third-Party Cookies',
    body:
      'Some cookies may be set by third-party services integrated into the website, such as analytics, embedded content, or communication tools. These third parties may process data according to their own privacy and cookie policies.',
  },
  {
    title: 'Managing Cookie Preferences',
    body:
      'Most web browsers allow users to control cookies through browser settings. You may choose to block, delete, or limit cookies at any time, although doing so may affect the functionality or performance of certain parts of the website.',
  },
  {
    title: 'Cookie Retention',
    body:
      'Cookies may remain on your device for different periods depending on their purpose. Some expire when you close your browser, while others may persist for a longer period until they expire or are manually removed.',
  },
  {
    title: 'Changes to This Cookie Policy',
    body:
      'Neuroturing may update this Cookie Policy from time to time to reflect changes in legal requirements, website functionality, or service providers. The latest version will always be posted on this page.',
  },
  {
    title: 'Contact Information',
    body:
      'If you have questions about our use of cookies or tracking technologies, please contact Neuroturing through the contact page or by email at info@neuroturing.com.',
  },
];

const CookiePolicy = () => {
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
              Cookie Policy
            </h1>

            <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-400">
              This policy outlines how cookies and similar technologies may be used on the
              Neuroturing website and the choices available to visitors.
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

export default CookiePolicy;

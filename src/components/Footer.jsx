import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight, ArrowUp } from 'lucide-react';
import footerlogo from '../images/footer-logo.png';
import TrustOperatingSystem from '../pages/Home/components/TrustOperatingSystem';

const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['Home', 'About Us'],
  },
  {
    title: 'Products',
    links: ['ClarityCore™', 'ProofChain™', 'DriftSense™', 'ExplainTouch™', 'InsightHub™'],
  },
  {
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Cookie Policy'],
  },
  {
    title: 'Support',
    links: ["FAQ's", 'Contact Us'],
  },
];

// Links that map to real routes instead of plain "#" anchors.
const LINK_ROUTES = {
  Home: '/',
  'About Us': '/company',
  'Contact Us': '/contact',
  'ClarityCore™': '/products/clarity-core',
  'ProofChain™': '/products/proof-chain',
  'DriftSense™': '/products/drift-sense',
  'ExplainTouch™': '/products/explain-touch',
  'InsightHub™': '/products/insight-hub',
  "FAQ's": '/faq',
  'Terms & Conditions': '/terms-and-conditions',
  'Privacy Policy': '/privacy-policy',
  'Cookie Policy': '/cookie-policy',
};

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
];

const socialStyles = {
  base: `
    relative flex h-9 w-9 items-center justify-center rounded-full
    bg-[#1A1A1A]
    transition-all duration-300
    hover:bg-[#242424]
    shadow-[inset_0_3px_2px_rgba(255,255,255,0.08),0_0_10px_rgba(255,255,255,0.04)]
  `,
  border: `
    before:absolute
    before:inset-0
    before:rounded-full
    before:p-[1px]
    before:pointer-events-none
    before:content-['']
    before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]
    before:[-webkit-mask-composite:xor]
    before:[mask-composite:exclude]
  `,
  gradient: `
    before:bg-[conic-gradient(from_102.21deg_at_52.75%_38.75%,rgba(249,249,249,0.5)_-32.95deg,rgba(64,64,64,0.5)_10.52deg,rgba(64,64,64,0.35)_32.12deg,rgba(255,255,255,0.5)_60.28deg,rgba(255,255,255,0.5)_107.79deg,rgba(64,64,64,0.35)_187.59deg,#F9F9F9_207.58deg,rgba(255,255,255,0.5)_287.31deg,rgba(249,249,249,0.5)_327.05deg,rgba(64,64,64,0.5)_370.52deg)]
  `,
};

const Footer = () => {
  const [email, setEmail] = useState('');

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <TrustOperatingSystem/>
    <footer className="w-full bg-[#05070d] pt-16 relative z-20">
      <div className="w-full flex flex-col md:flex-row justify-between gap-20 lg:gap-44 max-w-7xl mx-auto px-6 lg:px-10 pb-10">
        {/* Brand column */}
        <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center">
                {/* Swap for your logo.svg import if you'd rather use the asset directly */}
                <img src={footerlogo} alt="Footer Logo" className='w-full h-auto' />

              </span>
            </div>

            <p className="text-white text-sm leading-relaxed max-w-xs">
            The Explainable Intelligence Layer for Modern Finance. Transforming AI into transparent, accountable, and trusted financial intelligence.
            </p>

            {/* Subscribe input */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex w-full max-w-md items-center rounded-full border border-white/10 bg-[#181818] p-1 shadow-[inset_0_1px_1px_rgba(255,255,255,0.08),0_0_20px_rgba(255,255,255,0.03)]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="min-w-0 flex-1 bg-transparent px-5 py-2.5 text-sm text-white placeholder:text-[#6E6E87] focus:outline-none"
              />

              <button
                type="submit"
                className="group flex items-center gap-2 rounded-full border border-white/15 bg-gradient-to-b from-[#555] to-[#2B2B2B] px-6 py-2.5 text-sm font-medium text-white shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_4px_15px_rgba(255,255,255,0.08)] transition-all duration-300 hover:brightness-110"
              >
                Subscribe

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Social icons */}
            <div className="mt-2 flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`${socialStyles.base} ${socialStyles.border} ${socialStyles.gradient}`}>
                  <Icon className="h-4 w-4 text-white" />
                </button>
              ))}
            </div>
          </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Link columns — Company / Products / Legal / Support, matching the screenshot */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-white font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                {col.title}
              </h4>
              <div className="flex flex-col gap-4">
                {col.links.map((link) =>
                  LINK_ROUTES[link] ? (
                    <Link
                      key={link}
                      to={LINK_ROUTES[link]}
                      className="text-textMuted hover:text-blue-400 text-sm transition-colors"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      key={link}
                      href="javascript:void(0)"
                      className="text-textMuted hover:text-blue-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs order-1 md:order-none">
            © {new Date().getFullYear()} Neuroturing. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-white/40 text-xs tracking-[0.25em] uppercase order-3 md:order-none">
            <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            AI Predicts &middot; XAI Justifies
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
          </div>

          <div className="flex items-center gap-6 order-2 md:order-none">
            <a href="/disclaimer" className="text-white/40 hover:text-white text-xs transition-colors">Disclaimer</a>
            <a href="/ai-statement" className="text-white/40 hover:text-white text-xs transition-colors">AI Statement</a>
          </div>
        </div>
      </div>
      {/* Scroll To Top */}
      <button onClick={scrollToTop}
        className={`
          fixed
          bottom-8
          right-8
          z-50
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          border
          border-[#3FD1FF]/20
          bg-[#0A192F]
          text-white
          backdrop-blur-md
          shadow-[0_0_30px_rgba(21,93,214,0.35)]
          transition-all
          duration-500
          hover:-translate-y-1
          hover:scale-110
          hover:border-[#3FD1FF]
          hover:shadow-[0_0_45px_rgba(63,209,255,0.45)]
          ${
            showScrollTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-6 opacity-0"
          }
        `}
        >
        <span className="
            absolute
            inset-0
            rounded-full
            bg-[radial-gradient(circle,#3FD1FF_0%,transparent_70%)]
            opacity-20
            blur-xl
          "
        />

        <ArrowUp size={22} className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>
    </footer>
    </>
  );
};

export default Footer;

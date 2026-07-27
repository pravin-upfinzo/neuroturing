import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, Linkedin, Github, Facebook, Instagram, ArrowRight } from 'lucide-react';
import logo from '../images/logo.svg';
import footerlogo from '../images/footer-logo.png';



const FOOTER_COLUMNS = [
  {
    title: 'Company',
    links: ['Home', 'About Us', 'Solutions', 'Services', 'Industries', 'Compliance & Governance'],
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
  'About Us': '/about',
  'Contact Us': '/contact',
};

const SOCIALS = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Linkedin, label: 'LinkedIn' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="w-full bg-[#05070d] pt-16 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4 flex flex-col items-start gap-5">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center">
                {/* Swap for your logo.svg import if you'd rather use the asset directly */}
                <img src={footerlogo} alt="Footer Logo" className='w-full h-auto' />

              </span>
            </div>

            <p className="text-white text-sm leading-relaxed max-w-xs">
              Explainable intelligence for modern finance — neural links you can trust, audit, and prove.
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
            <div className="mt-8 flex items-center gap-4">
              {SOCIALS.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="h-9 w-9 rounded-full border border-white/15 bg-[#1A1A1A]
        shadow-[inset_0_3px_2px_rgba(255,255,255,1),0_0_10px_rgba(255,255,255,0.04)]
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:bg-[#242424]
        hover:border-white/25
      "
                >
                  <Icon className="h-4 w-4 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* Link columns — Company / Products / Legal / Support, matching the screenshot */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4 md:col-span-2">
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
                      href="#"
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
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Trust</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

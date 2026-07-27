import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import logo from '../images/logo.svg';

const products = [
  { name: 'ClarityCore', path: '/products/clarity-core', color: 'text-blue-400', dot: 'bg-blue-400' },
  { name: 'InsightHub', path: '/products/insight-hub', color: 'text-pink-400', dot: 'bg-pink-400' },
  { name: 'ExplainTouch', path: '/products/explain-touch', color: 'text-emerald-400', dot: 'bg-emerald-400' },
  { name: 'ProofChain', path: '/products/proof-chain', color: 'text-orange-400', dot: 'bg-orange-400' },
  { name: 'DriftSense', path: '/products/drift-sense', color: 'text-cyan-400', dot: 'bg-cyan-400' },
];

// Same fixed-size pill for every top-level item so nothing shifts when a
// route becomes active/inactive — only bg/border/text toggle, the box
// itself never changes size.
const navItemBase =
  'flex h-9 min-w-[84px] items-center justify-center gap-1.5 rounded-full border-2 border-transparent px-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap';

const navItemActive =
  'border-white bg-[linear-gradient(7deg,_#fff,_rgba(106,141,255,1),_#fff)] text-black shadow-[0_0_0_1px_#ddd]';

const navItemInactive = 'text-gray-400 hover:text-white';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isProductsActive = location.pathname.startsWith('/products');

  return (
    <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between z-20 relative">
      <Link to="/" className="flex items-center">
        <img src={logo} alt="Neuroturing Logo" className="h-8" />
      </Link>

      {/* Desktop nav — thin gradient-ring border (light top, fading to a soft
          blue at the bottom) wrapped around the pill, since glass-panel alone
          doesn't render a visible border. Same p-[1px] ring technique used
          on the Contact Us button, so both elements match. */}
      <div className="hidden md:inline-flex rounded-[40px] bg-gradient-to-b from-white/25 via-white/5 to-blue-500/25 p-[1px]">
    <nav className="flex h-[50px] items-center gap-2 rounded-[40px] border border-white/10 bg-[#0B1320] px-2 py-2 transition-all duration-300 hover:border-blue-500">
        <Link
          to="/"
          className={`${navItemBase} ${isHomeActive ? navItemActive : navItemInactive}`}
        >
          Home
        </Link>

        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <button
            className={`${navItemBase} ${isProductsActive ? navItemActive : navItemInactive}`}
          >
            Products
            <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50 w-52 transition-all duration-150 ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
          >
            <div className="bg-[#0B1320] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 py-2">
              {products.map((product) => (
                <Link
                  key={product.path}
                  to={product.path}
                  className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors hover:bg-white/5 ${location.pathname === product.path ? 'text-white bg-white/5' : 'text-gray-400 hover:text-white'}`}
                >
                  <span className={`w-2 h-2 rounded-full ${product.dot}`} />
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <a href="#solutions" className={`${navItemBase} ${navItemInactive}`}>Solutions</a>
        <Link to="/about" className={`${navItemBase} ${location.pathname === '/about' ? navItemActive : navItemInactive}`}>Why Us</Link>
        <a href="#company" className={`${navItemBase} ${navItemInactive}`}>Company</a>
      </nav>
      </div>

      <div className="hidden md:inline-flex rounded-full bg-gradient-to-b from-white via-blue-300/30 to-blue-500/50 p-[1px]">
        <Link
          to="/contact"
          className="flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#0a0a0a]"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0B1320] border border-white/10 rounded-2xl mx-4 p-4 flex flex-col gap-2 shadow-2xl z-50">
          <Link to="/" className="px-4 py-3 text-sm font-medium text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>Home</Link>
          <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Products</div>
          {products.map((product) => (
            <Link
              key={product.path}
              to={product.path}
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors hover:bg-white/5 ${product.color}`}
              onClick={() => setMobileOpen(false)}
            >
              <span className={`w-2 h-2 rounded-full ${product.dot}`} />
              {product.name}
            </Link>
          ))}
          <a href="#solutions" className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>Solutions</a>
          <a href="#why-us" className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>Why Us</a>
          <a href="#company" className="px-4 py-3 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setMobileOpen(false)}>Company</a>
        </div>
      )}
    </header>
  );
};

export default Header;

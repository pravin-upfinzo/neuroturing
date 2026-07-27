import React from 'react';

/**
 * ProductHeroBanner — Redesigned to match ClarityCore Figma reference.
 *
 * Layout:  Header overlaid → full-width dark banner → left text block + right product illustration.
 * The illustration (productImage prop) sits centre-right with a soft radial glow beneath it.
 * Floating stat / feature chips orbit the illustration on desktop.
 *
 * Props:
 *  - tagline        {string}    – small pill label above the title
 *  - title          {string}    – main product name (large, gradient)
 *  - subtitle       {string}    – short headline under the title
 *  - description    {string}    – body paragraph
 *  - productImage   {string}    – imported image path (the product illustration)
 *  - badges         {Array}     – up to 4 floating chip objects { icon, label, sub } shown around the illustration
 *  - ctaLabel       {string}    – primary button text
 *  - ctaSecondary   {string}    – secondary button text
 *  - theme          {object}    – colour tokens (see ClarityCore for reference)
 */
const ProductHeroBanner = ({
  tagline = 'Product',
  title,
  subtitle,
  description,
  productImage,
  badges = [],
  ctaLabel = 'Get Started',
  ctaSecondary = 'Request a Demo',
  theme = {},
}) => {
  const {
    gradientFrom = 'from-blue-600',
    gradientTo   = 'to-cyan-400',
    glowColor    = 'rgba(37,99,235,0.30)',
    tagBorderColor = 'border-blue-500/30',
    tagTextColor   = 'text-blue-400',
    tagBgColor     = 'bg-blue-500/10',
    badgeBorderColor = 'border-blue-500/20',
    badgeBgColor     = 'bg-blue-900/30',
    badgeTextColor   = 'text-blue-300',
  } = theme;

  return (
    <div className="w-full relative overflow-hidden bg-background text-white">
      
      {/* ──── TEXT SECTION (Header + Content) ────────────────────────── */}
      <section className="w-full relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        
        {/* Ambient background glows for text section */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${glowColor} 0%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            opacity: 1,
          }}
        />

        {/* Text content container */}
        <div className="w-full max-w-4xl mx-auto relative z-10">
          
          {/* Tag pill */}
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border ${tagBorderColor} ${tagBgColor} ${tagTextColor} text-xs font-semibold uppercase tracking-widest mb-6`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {tagline}
          </div>

          {/* Product name */}
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br ${gradientFrom} ${gradientTo}`}
            style={{ WebkitBackgroundClip: 'text' }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white font-semibold leading-snug max-w-2xl mb-6">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed max-w-3xl text-base sm:text-lg mb-8">
            {description}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              className={`px-7 py-3 rounded-full text-white font-semibold text-sm transition-all bg-gradient-to-r ${gradientFrom} ${gradientTo} hover:opacity-90 active:scale-95`}
              style={{ boxShadow: `0 0 28px ${glowColor}` }}
            >
              {ctaLabel}
            </button>
            <button className="px-7 py-3 rounded-full border border-white/15 hover:bg-white/5 text-white font-medium text-sm transition-colors">
              {ctaSecondary}
            </button>
          </div>
        </div>
      </section>

      {/* ──── IMAGE SECTION (Full-width banner) ────────────────────────── */}
      <section className="w-full relative overflow-hidden bg-gradient-to-b from-background/50 via-background/20 to-background py-12 lg:py-16">
        
        {/* Image section background glow */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 50% 30%, ${glowColor} 0%, transparent 75%)`,
          }}
        />

        {/* Grid texture for image section */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* Product image container */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]">
            {productImage ? (
              <img
                src={productImage}
                alt={`${title} product`}
                className="w-full h-auto max-w-6xl object-contain drop-shadow-2xl"
                draggable={false}
              />
            ) : (
              <div
                className={`w-64 h-64 rounded-3xl border ${badgeBorderColor} ${badgeBgColor} flex items-center justify-center`}
              >
                <span className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-br ${gradientFrom} ${gradientTo}`}>
                  {title?.[0]}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background z-5 pointer-events-none" />
      </section>
    </div>
  );
};

export default ProductHeroBanner;

import React from 'react';

/**
 * AboutProduct
 *
 * Props:
 *  - sectionTag  {string}   – small label chip above heading
 *  - heading     {string}   – section title
 *  - body        {string}   – paragraph text
 *  - highlights  {Array}    – list of { icon: ReactNode, label, value } stat cards
 *  - theme       {object}   – same color config as ProductHeroBanner
 *  - image       {string}   – optional illustration URL (right-side visual)
 */
const AboutProduct = ({
  sectionTag = 'About',
  heading,
  body,
  highlights = [],
  theme = {},
}) => {
  const {
    gradientFrom = 'from-blue-600',
    gradientTo = 'to-cyan-500',
    tagBorderColor = 'border-blue-500/30',
    tagTextColor = 'text-blue-400',
    tagBgColor = 'bg-blue-500/10',
    glowColor = 'rgba(37,99,235,0.15)',
    cardBorderColor = 'border-blue-500/20',
    accentTextColor = 'text-blue-400',
  } = theme;

  return (
    <section className="w-full py-20 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left — text */}
        <div className="space-y-6">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tagBorderColor} ${tagBgColor} ${tagTextColor} text-xs font-semibold uppercase tracking-wider`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {sectionTag}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            {heading}
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">{body}</p>
        </div>

        {/* Right — highlight stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel p-6 border ${cardBorderColor} flex flex-col gap-3 hover:bg-white/5 transition-colors relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{ background: `radial-gradient(circle at 0% 0%, ${glowColor}, transparent 70%)` }}
              />
              <div className={`text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${gradientFrom} ${gradientTo}`}>
                {item.value}
              </div>
              <div className="text-white font-semibold">{item.label}</div>
              {item.description && (
                <div className="text-gray-500 text-sm">{item.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;

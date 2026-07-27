import React from 'react';

/**
 * HowItWorks
 *
 * Props:
 *  - sectionTag  {string}   – chip label
 *  - heading     {string}   – section title
 *  - intro       {string}   – optional lead paragraph
 *  - steps       {Array}    – list of { step, title, description }
 *  - theme       {object}   – color config
 *  - cta         {object}   – optional { label, href } for bottom CTA
 */
const HowItWorks = ({
  sectionTag = 'Process',
  heading,
  intro,
  steps = [],
  theme = {},
  cta,
}) => {
  const {
    gradientFrom = 'from-blue-600',
    gradientTo = 'to-cyan-500',
    tagBorderColor = 'border-blue-500/30',
    tagTextColor = 'text-blue-400',
    tagBgColor = 'bg-blue-500/10',
    glowColor = 'rgba(37,99,235,0.15)',
    stepBorderColor = 'border-blue-500',
    cardBorderColor = 'border-blue-500/20',
    accentTextColor = 'text-blue-400',
    connectorColor = 'from-blue-900 to-transparent',
  } = theme;

  return (
    <section className="w-full py-20 relative z-10 border-t border-white/5">
      <div className="space-y-16">
        {/* Section header */}
        <div className="max-w-2xl space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${tagBorderColor} ${tagBgColor} ${tagTextColor} text-xs font-semibold uppercase tracking-wider`}>
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {sectionTag}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            {heading}
          </h2>
          {intro && <p className="text-gray-400 leading-relaxed text-lg">{intro}</p>}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line on desktop */}
          <div className={`hidden lg:block absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b ${connectorColor}`} />

          <div className="space-y-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className={`flex flex-col lg:flex-row items-start gap-6 glass-panel p-8 border ${cardBorderColor} hover:bg-white/5 transition-colors group relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 50%, ${glowColor}, transparent 60%)` }}
                />

                {/* Step number circle */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${stepBorderColor} flex items-center justify-center font-bold text-white bg-background relative z-10`}>
                  {item.step || String(idx + 1).padStart(2, '0')}
                </div>

                <div className="flex-1 relative z-10">
                  <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>

                {/* Hover accent marker */}
                <div className={`hidden lg:flex items-center self-center ${accentTextColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional bottom CTA */}
        {cta && (
          <div className="flex justify-center pt-4">
            <a
              href={cta.href || '#'}
              className={`px-8 py-3.5 rounded-full text-white font-medium bg-gradient-to-r ${gradientFrom} ${gradientTo} shadow-lg transition-all hover:opacity-90`}
              style={{ boxShadow: `0 0 20px ${glowColor}` }}
            >
              {cta.label}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default HowItWorks;

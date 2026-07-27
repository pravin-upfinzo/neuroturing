import React from 'react';

/**
 * ProblemItSolves
 *
 * Props:
 *  - sectionTag  {string}   – small chip label
 *  - heading     {string}   – section title
 *  - intro       {string}   – introductory paragraph
 *  - problems    {Array}    – list of { icon: ReactNode, title, description }
 *  - theme       {object}   – color config
 */
const ProblemItSolves = ({
  sectionTag = 'The Problem',
  heading,
  intro,
  problems = [],
  theme = {},
}) => {
  const {
    gradientFrom = 'from-blue-600',
    gradientTo = 'to-cyan-500',
    tagBorderColor = 'border-blue-500/30',
    tagTextColor = 'text-blue-400',
    tagBgColor = 'bg-blue-500/10',
    glowColor = 'rgba(37,99,235,0.12)',
    cardBorderColor = 'border-blue-500/20',
    iconBgColor = 'bg-blue-900/40',
    iconBorderColor = 'border-blue-500/20',
    accentTextColor = 'text-blue-400',
  } = theme;

  return (
    <section className="w-full py-20 relative z-10 border-t border-white/5">
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ background: `radial-gradient(ellipse 50% 40% at 50% 0%, ${glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10 space-y-12">
        {/* Header */}
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

        {/* Problem cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className={`glass-panel p-8 border ${cardBorderColor} flex flex-col gap-4 hover:border-opacity-80 group transition-all relative overflow-hidden`}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at 30% 30%, ${glowColor}, transparent 60%)` }}
              />
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl ${iconBgColor} border ${iconBorderColor} flex items-center justify-center ${accentTextColor} relative z-10`}>
                {item.icon || (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                  </svg>
                )}
              </div>

              {/* Number badge */}
              <div className={`absolute top-5 right-5 text-5xl font-black opacity-5 bg-clip-text text-transparent bg-gradient-to-br ${gradientFrom} ${gradientTo} select-none`}>
                {String(idx + 1).padStart(2, '0')}
              </div>

              <h3 className="text-white font-semibold text-lg relative z-10">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemItSolves;

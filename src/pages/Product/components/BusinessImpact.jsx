import React, { useState, useEffect, useRef } from 'react';

const BusinessImpact = ({
  sectionTag = 'The Impact',
  heading = 'Business Impact',
  intro,
  items = [],
  image,
  theme = {},
  reverse = false,
  interval = 2000,
  rawIcons = false,
}) => {
  const {
    cardBorderColor = 'border-blue-500/20',
    iconBorderColor = 'border-blue-500/20',
    accentTextColor = 'text-blue-400',
  } = theme;

  const count = items.length;

  // Which row is highlighted. Honours an initial `active: true` item if provided.
  const initialActive = Math.max(0, items.findIndex((it) => it.active));
  const [activeIndex, setActiveIndex] = useState(initialActive);
  const [paused, setPaused] = useState(false);

  // Progress-rail thumb — measured from the active row so it stays aligned
  // even when a label wraps to two lines on small screens.
  const itemRefs = useRef([]);
  const [thumb, setThumb] = useState({ top: 0, height: 0 });

  // Auto-advance the active row on a loop, unless the user is hovering a row.
  useEffect(() => {
    if (paused || count <= 1) return undefined;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  // Keep the rail thumb aligned with the active row (and on resize).
  useEffect(() => {
    const update = () => {
      const el = itemRefs.current[activeIndex];
      if (el) setThumb({ top: el.offsetTop, height: el.offsetHeight });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [activeIndex, count]);

  const defaultIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="w-full py-20 relative z-10 border-t border-white/5">
      {/* Background radial accent */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Illustration */}
        <div
          className={`flex items-center justify-center ${
            reverse ? 'order-2' : 'order-2 lg:order-1'
          }`}
        >
          {image && (
            <img
              src={image}
              alt={heading}
              className="w-full max-w-md lg:max-w-full h-auto object-contain"
            />
          )}
        </div>

        {/* Content */}
        <div
          className={`space-y-6 ${
            reverse ? 'order-1' : 'order-1 lg:order-2'
          }`}
        >
          {/* Fixed tag color — intentionally NOT theme-driven */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-[#00E5FF] text-xs font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {sectionTag}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-snug">
            {heading}
          </h2>

          {intro && <p className="text-gray-400 leading-relaxed text-lg">{intro}</p>}

          {/* Outcome list with vertical progress rail */}
          <div className="flex gap-4 pt-2">
            {/* Progress rail (left) — thumb slides to the active row */}
            {count > 1 && (
              <div className="relative w-1.5 flex-shrink-0 rounded-full bg-white/10">
                {/* Fixed rail color — intentionally NOT theme-driven */}
                <span
                  className="absolute left-0 w-full rounded-full"
                  style={{
                    top: thumb.top,
                    height: thumb.height,
                    background: 'linear-gradient(to bottom, #858f9e, #4f688d)',
                    transition: 'top 500ms cubic-bezier(0.4,0,0.2,1), height 500ms cubic-bezier(0.4,0,0.2,1)',
                    boxShadow: '0 0 12px rgba(37,99,235,0.18)',
                    border: '1px solid #4f688d',
                  }}
                />
              </div>
            )}

            {/* List */}
            <ul
              className="relative flex-1 space-y-3"
              onMouseLeave={() => setPaused(false)}
            >
              {items.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <li
                    key={idx}
                    ref={(el) => { itemRefs.current[idx] = el; }}
                    onMouseEnter={() => { setActiveIndex(idx); setPaused(true); }}
                    className={`flex items-center gap-4 p-4 rounded-2xl border cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? `${cardBorderColor} bg-white/[0.06]`
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/[0.04]'
                    }`}
                  >
                    {/* Icon badge. rawIcons = the asset already includes its own
                        circle/background, so render it bare at full badge size. */}
                    {rawIcons ? (
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                        {item.icon || defaultIcon}
                      </span>
                    ) : (
                      <span
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? 'bg-white text-gray-900'
                            : `border ${iconBorderColor} bg-white/5 ${accentTextColor}`
                        }`}
                      >
                        {item.icon || defaultIcon}
                      </span>
                    )}

                    <span className={`text-sm sm:text-base font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {item.label}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessImpact;

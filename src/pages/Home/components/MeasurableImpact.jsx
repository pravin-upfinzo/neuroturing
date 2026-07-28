import React from 'react';

const MeasurableImpact = () => {
  const metrics = [
    {
      value: "90%",
      label: "Faster AI Investigations",
      desc: "Instant AI explanations significantly reduce investigation time for fraud, payment, and compliance teams."
    },
    {
      value: "100%",
      label: "Audit-Ready Decisions",
      desc: "Automatically generate complete, immutable audit trails for every AI-driven transaction and operational decision."
    },
    {
      value: "60%",
      label: "Less Manual Review Effort",
      desc: "Reduce manual intervention through transparent AI insights that simplify operational workflows."
    },
    {
      value: "Deploy",
      label: "in Under 2 Weeks",
      desc: "Go live quickly without retraining AI models or disrupting your existing technology stack."
    }
  ];

  return (
    <section className="w-full py-16 relative z-10">

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-950/30 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        <span className="text-cyan-400 text-[11px] tracking-wider font-semibold uppercase">
          THE PLATFORM
        </span>
      </div>

      {/* Title with Gradient Text */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
          Measurable{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Impact
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-y border-neutral-800">
        {metrics.map((metric, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-between py-8 px-6 min-h-[220px] ${idx !== 0 ? 'border-t sm:border-t-0 border-neutral-800 sm:border-l' : ''
              }`}
          >
            {/* Top Text Group */}
            <div>
              {/* Big Stat Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-4">
                {metric.value}
              </div>

              {/* Subhead (Label) */}
              <div className="text-sm font-medium text-neutral-200">
                {metric.label}
              </div>

              {/* Small Description */}
              <div className="text-xs text-neutral-400 mt-1">
                {metric.desc}
              </div>
            </div>

            {/* Bottom Accent Bar matching the reference gradient */}
            <div className="w-12 h-[3px] bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 rounded-full mt-8" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeasurableImpact;

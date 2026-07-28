import React from 'react';

const LegalSection = ({ index, title, body, points }) => {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
          {index}
        </div>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
      </div>

      {body ? <p className="text-base leading-8 text-gray-300">{body}</p> : null}

      {points?.length ? (
        <ul className="mt-5 space-y-3">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-gray-300">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
              <span className="leading-7">{point}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
};

export default LegalSection;

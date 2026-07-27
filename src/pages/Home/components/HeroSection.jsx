import React from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import heroVideo from '../../../images/herobanner-img.mp4';

const HeroSection = () => {
  return (
    <section className="relative isolate w-full min-h-screen overflow-hidden bg-[#040814]">
      {/* Video — right-side element, bleeds off the edge */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[80%] overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Left fade so the video dissolves into the background instead of a hard edge */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              90deg,
              #040814 0%,
              rgba(4,8,20,.98) 12%,
              rgba(4,8,20,.92) 24%,
              rgba(4,8,20,.75) 42%,
              rgba(4,8,20,.42) 60%,
              transparent 82%
            )`,
          }}
        />

        {/* Top / bottom fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#040814] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#040814] to-transparent" />

        {/* Mobile scrim — video spans full width below lg, needs more contrast for text */}
        <div className="absolute inset-0 bg-[#040814]/50 lg:hidden" />
      </div>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(4,8,20,.45)_100%)]" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ambient background glow (visible on the left, behind the text) */}
        <div className="pointer-events-none absolute left-[-160px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[160px]" />
        <div className="pointer-events-none absolute left-44 top-24 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[150px]" />
        <div className="flex min-h-screen items-center py-32">
          <div className="max-w-[650px]">
            <h1 className="font-extrabold tracking-[-1.5px] leading-[1.08] text-4xl sm:text-5xl lg:text-[64px]">
              <span className="text-[#BFEFFD]">Where </span>
              <span className="bg-gradient-to-r from-[#6EA8FF] to-[#2B5FCB] bg-clip-text text-transparent">
                Financial AI
              </span>
              <br />
              <span className="text-[#BFEFFD]">Becomes Explainable</span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg font-light leading-relaxed text-white/80">
              The Explainable Intelligence Layer for Modern Finance, AI predicts. XAI justifies.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Book a Demo */}
              <button className="group relative overflow-hidden rounded-full border border-sky-400/40 bg-[#14263D]/90 px-8 py-4 font-medium text-white shadow-[0_0_25px_rgba(56,189,248,0.35)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#2563EB] via-[#3B82F6] to-[#60A5FA] transition-transform duration-500 group-hover:translate-x-0" />
                <span className="relative flex items-center gap-2.5">
                  <Sparkles size={18} className="transition-transform duration-500 group-hover:rotate-180" />
                  Book a Demo
                </span>
              </button>

              {/* Explore the Platform */}
              <button className="group relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-8 py-4 font-medium text-slate-400 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-[#3B82F6]/60 hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]">
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#0F172A] transition-transform duration-500 group-hover:scale-x-100" />
                <span className="relative flex items-center gap-2">
                  Explore the Platform
                  <ChevronRight size={18} className="transition-transform duration-500 group-hover:translate-x-2" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
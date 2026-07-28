import React from 'react';
import { Sparkles } from 'lucide-react';
import heroVideo from '../../../images/herobanner-img.mp4';

const HeroSection = () => {
  return (
    <section className="relative isolate w-full xl:min-h-screen overflow-hidden bg-[#040814]">
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
        <div className="flex xl:min-h-screen items-center py-32">
          <div className="max-w-[650px]">
            <h1 className="lg:text-[60px] text-[37px] font-extrabold lg:leading-[70px] leading-[43px]  text-[#B4F1FF] [text-shadow:0_0_69.6px_rgba(21,93,214,0.80)]">
              Where{" "}
              <span className="text-[#357CCE]">
                Financial AI
              </span>
              <br />
              Becomes Explainable
            </h1>
            <p className="mt-4 text-[17px] font-normal leading-normal text-white">
              The Explainable Intelligence Layer for Modern Finance, AI makes decisions. Neuroturing XAI explains them.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {/* Book a Demo */}
              <button
                className="
                  group
                  relative
                  flex
                  h-[62px]
                  w-[242px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[62px]
                  border
                  border-white/20
                  bg-[#0A192F]
                  shadow-[0_0_64px_rgba(21,93,214,.25)]
                "
              >
              <span class="
                    absolute
                    left-1/2
                    bottom-[-30px]
                    h-[90px]
                    w-[70px]
                    -translate-x-1/2
                    rounded-full
                    bg-[radial-gradient(circle,#3FD1FF_68.5%,#266799_100%)]
                    opacity-40
                    blur-[36px]
                    scale-75
                    transition-all
                    duration-500
                    group-hover:scale-100
                    group-hover:opacity-60
                  "></span>
                {/* Bottom to Top Glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-full
                    h-[130px]
                    w-[130px]
                    -translate-x-1/2
                    rounded-full

                    bg-[radial-gradient(circle,#3FD1FF_0%,#266799_65%,transparent_100%)]

                    opacity-40
                    blur-[38px]

                    transition-all
                    duration-700
                    ease-[cubic-bezier(.22,1,.36,1)]

                    group-hover:top-1/2
                    group-hover:-translate-y-1/2
                  "
                />

                {/* Content */}
                <span className="relative z-10 flex items-center gap-3">
                  <Sparkles
                    className="transition-transform duration-500 group-hover:rotate-180"
                    size={18}
                  />
                  Book a Demo
                </span>
              </button>
              {/* Explore the Platform */}
              <button className="group relative flex h-[62px] items-center overflow-hidden rounded-full border border-[rgba(148,163,184,0.20)] border-white/20 px-7 backdrop-blur-md ">
                <span className="flex items-center gap-3 transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-3">
                  <span className="text-[17px] font-light text-[#94A3B8]">
                    Explore the Platform
                  </span>
                  <svg width="14" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-8" >
                   <path d="M4.15026 7.26912C4.52858 6.88081 4.52858 6.26177 4.15026 5.87346L0.283293 1.90436C-0.0957632 1.51529 -0.0949183 0.89478 0.285196 0.506747L0.487204 0.30053C0.879328 -0.0997634 1.5238 -0.0997635 1.91592 0.30053L7.37321 5.87151C7.75406 6.2603 7.75406 6.88228 7.37321 7.27107L1.91592 12.842C1.5238 13.2423 0.879328 13.2423 0.487204 12.842L0.285196 12.6358C-0.0949182 12.2478 -0.0957634 11.6273 0.283292 11.2382L4.15026 7.26912ZM11.6931 7.26912C12.0714 6.88081 12.0714 6.26177 11.6931 5.87346L7.82615 1.90436C7.44709 1.51529 7.44794 0.89478 7.82805 0.506747L8.03006 0.30053C8.42219 -0.0997633 9.06665 -0.0997635 9.45878 0.30053L14.9161 5.87151C15.2969 6.2603 15.2969 6.88228 14.9161 7.27107L9.45878 12.842C9.06665 13.2423 8.42219 13.2423 8.03006 12.842L7.82805 12.6358C7.44794 12.2478 7.44709 11.6273 7.82615 11.2382L11.6931 7.26912Z" fill="#94A3B8"/>
                  </svg>
                  {/* <ChevronsRight size={18} className="transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-8" /> */}
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
import React from "react";
import bg1 from "../../../images/bg1.svg";
import bg2 from "../../../images/bg2.svg";
import { Sparkles } from 'lucide-react';

const TrustOperatingSystem = () => {
  return (
    <section
      className="
        relative
        left-1/2
        w-screen
        -translate-x-1/2
        overflow-hidden
        py-14
        text-white
      "
    >
      {/* ================= LEFT GLOW ================= */}
      <img
        src={bg1}
        alt=""
        className="
          pointer-events-none
          absolute
          left-0
          top-1/2
         mix-blend-mode: screen;
          z-0
          h-[500px]
          w-[400px]
          -translate-y-1/2
          object-cover
        "
      />

      {/* ================= RIGHT GLOW ================= */}
      <img
        src={bg1}
        alt=""
        className="
          pointer-events-none
          absolute
          right-0
          top-1/2
          z-0
          h-[500px]
         mix-blend-mode: screen;
          w-[400px]
          -translate-y-1/2
          scale-x-[-1]
          object-cover
        "
      />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 text-center">
        {/* Small Heading */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span>EXPERIENCE THE FUTURE</span>
          </div>

        {/* Main Heading */}
        <h1
          className="
            font-['Inter']
            text-[56px]
            font-bold
            leading-[64px]
            tracking-[-1.5px]
          "
        >
          Trust is the operating system of
          <span
            className="
              mt-2
              block
              bg-[linear-gradient(90.01deg,#B4F1FF_44.8%,#357CCE_63.39%)]
              bg-clip-text
              text-transparent
            "
          >
            Future Finance
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-[32px]
            font-['Inter']
            text-[16px]
            font-normal
            leading-[28px]
            tracking-[-0.2px]
            text-[#A3A3A3]
          "
        >
          The next decade of finance will be built on AI. The decade after that
          will <br />
          be built on trust in that AI. Start building now.
        </p>

        {/* ================= BUTTONS ================= */}
        <div className="mt-[40px] flex justify-center gap-5">
          {/* ========== GET STARTED ========== */}
          <div className="group/demo relative inline-flex items-center justify-center">
            {/* White glow */}
           

            <button
              className="
                  group
                  relative
                  flex
                  h-[62px]
                  w-[186px]
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
              <span
                class="
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
                  "
              ></span>
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
          </div>

          {/* ========== WATCH A DEMO ========== */}
          <div
            className="
              group/watch
              h-[62px]
              w-[180px]
              rounded-full
              bg-[linear-gradient(84.93deg,rgba(255,255,255,0.6)_1.96%,rgba(106,141,255,0.6)_50.04%,rgba(255,255,255,0.6)_93.96%)]
              p-[2px]
            "
          >
            <button
              className="
                relative
                h-full
                w-full
                overflow-hidden
                rounded-full
                bg-black
                font-['Inter']
                text-[14px]
                font-semibold
                leading-[20px]
                text-white
              "
            >
              {/* Text */}
              <span
                className="
                  absolute
                  left-8
                  top-1/2
                  -translate-y-1/2
                  whitespace-nowrap
                  transition-all
                  duration-300
                  ease-in-out
                  group-hover/watch:left-1/2
                  group-hover/watch:-translate-x-1/2
                "
              >
                Watch a Demo
              </span>

              {/* Arrow */}
              <span
                className="
                  absolute
                  right-7
                  top-1/2
                  -translate-y-1/2
                  transition-all
                  duration-300
                  ease-in-out
                  group-hover/watch:translate-x-10
                  group-hover/watch:opacity-0
                "
              >
                ❯❯
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustOperatingSystem;

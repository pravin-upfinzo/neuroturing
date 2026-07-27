import React from "react";
import bg1 from "../../../images/bg1.svg";
import bg2 from "../../../images/bg2.svg";

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
        <p
          className="
            mb-8
            font-['Inter']
            text-[12px]
            font-bold
            leading-[3.6px]
            tracking-[1.2px]
            text-[#A6B2C7]
          "
        >
          EXPERIENCE THE FUTURE
        </p>

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
            <div
              className="
                pointer-events-none
                absolute
                bottom-[-10px]
                left-1/2
                h-[24px]
                w-[140px]
                -translate-x-1/2
                rounded-full
                bg-white/30
                blur-xl
                transition-all
                duration-500
                group-hover/demo:h-[36px]
                group-hover/demo:w-[160px]
                
              "
            />

            <button
              className="
                relative
                z-10
                flex
                h-[52px]
                w-[180px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-white/30
                bg-[linear-gradient(110deg,rgba(25,40,62,0.95),rgba(12,25,45,0.9))]
                font-['Inter']
                text-[14px]
                font-semibold
                mix-blend-mode: screen;
                text-white
                transition-all
                duration-300
              "
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4 shrink-0"
              >
                <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2z" />

                <path
                  d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9L19 14z"
                  opacity="0.7"
                />
              </svg>

              <span className="whitespace-nowrap">Get Started</span>
            </button>
          </div>

          {/* ========== WATCH A DEMO ========== */}
          <div
            className="
              group/watch
              h-[52px]
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

"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "Global Celebrities",
    desc: "World-class celebrities partner with X& to deploy capital, build brands, and create value through direct engagement with the startup ecosystem.",
    images: ["/kevin.png", "/steve.png", "/man.png"],
  },
  {
    num: "02",
    title: "Online Influence",
    desc: "Amplifying deal flow and brand reach through digital-native networks that connect culture to capital at scale.",
    images: [],
  },
  {
    num: "03",
    title: "Offline Influence",
    desc: "High-touch relationships and curated events that turn cultural capital into lasting venture partnerships.",
    images: [],
  },
  {
    num: "04",
    title: "AI-Native Intelligence OS",
    desc: "Proprietary AI infrastructure powering every layer — from deal sourcing and diligence to portfolio management and LP reporting.",
    images: [],
  },
];

// Placeholder visuals for steps without images
const stepVisuals: Record<string, { icon: string; label: string; sublabel: string }> = {
  "01": { icon: "🌟", label: "Celebrity Network", sublabel: "Global reach, cultural capital" },
  "02": { icon: "📡", label: "Digital Distribution", sublabel: "Social reach × deal flow" },
  "03": { icon: "🤝", label: "Curated Events", sublabel: "Relationships that compound" },
  "04": { icon: "🧠", label: "AI Infrastructure", sublabel: "Intelligence at every layer" },
};

export function ScrollHowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let best = 0;
      let bestDist = Infinity;

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vh * 0.45);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActiveStep(best);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const vis = stepVisuals[steps[activeStep].num];

  return (
    <section className="py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-2xl md:text-3xl text-foreground/80 font-light font-[family-name:var(--font-display)] max-w-2xl mb-20 leading-relaxed">
          Capital, code, and culture — layered into a single integrated platform.
        </p>

        <div ref={containerRef} className="flex gap-12 md:gap-20 relative">
          {/* Left: scrolling text steps */}
          <div className="flex-1 min-w-0">
            <div className="flex gap-6 md:gap-10">
              {/* Timeline */}
              <div className="relative flex-shrink-0" style={{ width: 2 }}>
                <div className="absolute top-0 bottom-0 w-[2px] bg-[#D1CEC9]" />
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-3 h-3 rounded-full transition-all duration-500"
                    style={{
                      top: `${(i / (steps.length - 1)) * 100}%`,
                      left: -5,
                      transform: "translateY(-50%)",
                      backgroundColor: i <= activeStep ? "#3A4D56" : "transparent",
                      border: `2px solid ${i <= activeStep ? "#3A4D56" : "#D1CEC9"}`,
                    }}
                  />
                ))}
              </div>

              {/* Steps */}
              <div className="flex flex-col gap-32 md:gap-44 py-4">
                {steps.map((step, i) => (
                  <div
                    key={step.num}
                    ref={(el) => { stepRefs.current[i] = el; }}
                    className="transition-opacity duration-500"
                    style={{ opacity: i === activeStep ? 1 : 0.25 }}
                  >
                    <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">
                      {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-medium font-[family-name:var(--font-display)] text-foreground mt-2 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: sticky visual */}
          <div className="hidden md:block w-[380px] flex-shrink-0">
            <div className="sticky top-[30vh]">
              <div
                className="rounded-2xl bg-[#EEEAE3] border border-[#D1CEC9] overflow-hidden transition-all duration-700"
                style={{ minHeight: 360 }}
              >
                {steps[activeStep].images.length > 0 ? (
                  <div className="p-8 flex flex-col items-center gap-6">
                    <div className="flex gap-4 justify-center">
                      {steps[activeStep].images.map((src, j) => (
                        <Image
                          key={src}
                          src={src}
                          alt=""
                          width={96}
                          height={120}
                          className="rounded-xl object-cover w-24 h-28 transition-all duration-500"
                          style={{
                            opacity: 1,
                            transform: `translateY(${j * 4}px)`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground tracking-widest uppercase text-center">
                      {vis.sublabel}
                    </p>
                  </div>
                ) : (
                  <div className="p-8 flex flex-col items-center justify-center gap-6" style={{ minHeight: 360 }}>
                    <span className="text-6xl transition-all duration-500">{vis.icon}</span>
                    <div className="text-center">
                      <p className="text-lg font-medium font-[family-name:var(--font-display)] text-foreground">
                        {vis.label}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{vis.sublabel}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

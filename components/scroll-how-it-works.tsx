"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    num: 1,
    title: "GLOBAL CELEBRITIES",
    subtitle: "Celebrity-Led Investment Platform",
    desc: "World-class celebrities partner with X& to deploy capital, build brands, and create value through direct engagement with the startup ecosystem.",
    images: ["/kevin.png", "/steve.png", "/man.png"],
  },
  {
    num: 2,
    title: "ONLINE INFLUENCE",
    subtitle: "Digital-native distribution",
    desc: "Amplifying deal flow and brand reach through digital-native networks that connect culture to capital at scale.",
    visual: "interconnected",
  },
  {
    num: 3,
    title: "OFFLINE INFLUENCE",
    subtitle: "Real-world credibility and access",
    desc: "From Decacorn Cup to Founder Performance Centers, we bring unique people together.",
    visual: "decacorn",
  },
  {
    num: 4,
    title: "AI NATIVE INTELLIGENCE OS",
    subtitle: "Sanbo — Intelligence at every layer",
    desc: "Proprietary AI infrastructure powering every layer — from deal sourcing and diligence to portfolio management and LP reporting.",
    visual: "sanbo",
  },
];

export function ScrollHowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      let best = 0;
      let bestDist = Infinity;

      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - vh * 0.5);
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

  return (
    <section className="py-24 md:py-36 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mb-16">
          Capital, code, and culture — layered into a single integrated platform that connects global influence with venture-scale opportunity.
        </p>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="rounded-2xl bg-[#F5F3EF] border border-[#E8E4DF] p-8 md:p-10 transition-all duration-500"
              style={{
                opacity: i === activeStep ? 1 : 0.4,
                transform: i === activeStep ? "scale(1)" : "scale(0.97)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <span className="w-9 h-9 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.num}
                </span>
                <h3 className="text-sm md:text-base font-semibold tracking-[0.15em] uppercase">
                  {step.title}
                </h3>
              </div>

              {/* Visual */}
              <div className="flex justify-center mb-8">
                {step.images ? (
                  <div className="flex gap-3">
                    {step.images.map((src) => (
                      <Image
                        key={src}
                        src={src}
                        alt=""
                        width={80}
                        height={100}
                        className="rounded-lg object-cover w-20 h-24"
                      />
                    ))}
                  </div>
                ) : step.visual === "interconnected" ? (
                  <svg width="200" height="120" viewBox="0 0 200 120" fill="none">
                    <circle cx="100" cy="25" r="10" fill="#3A4D56"/>
                    <circle cx="45" cy="85" r="10" fill="#3A4D56"/>
                    <circle cx="155" cy="85" r="10" fill="#3A4D56"/>
                    <circle cx="70" cy="50" r="7" fill="#7A8D96"/>
                    <circle cx="130" cy="50" r="7" fill="#7A8D96"/>
                    <circle cx="100" cy="95" r="7" fill="#7A8D96"/>
                    <line x1="100" y1="25" x2="45" y2="85" stroke="#D1CEC9" strokeWidth="1.5"/>
                    <line x1="100" y1="25" x2="155" y2="85" stroke="#D1CEC9" strokeWidth="1.5"/>
                    <line x1="45" y1="85" x2="155" y2="85" stroke="#D1CEC9" strokeWidth="1.5"/>
                    <line x1="100" y1="25" x2="70" y2="50" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="100" y1="25" x2="130" y2="50" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="45" y1="85" x2="70" y2="50" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="155" y1="85" x2="130" y2="50" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="45" y1="85" x2="100" y2="95" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="155" y1="85" x2="100" y2="95" stroke="#D1CEC9" strokeWidth="1"/>
                    <line x1="70" y1="50" x2="130" y2="50" stroke="#D1CEC9" strokeWidth="1"/>
                  </svg>
                ) : step.visual === "decacorn" ? (
                  <div className="bg-[#1a3a2a] rounded-lg px-8 py-6 text-center">
                    <p className="text-[#c9a84c] font-bold text-lg tracking-wider font-[family-name:var(--font-display)]">
                      ✦ DECACORN CUP ✦
                    </p>
                    <div className="text-4xl mt-2">♞</div>
                  </div>
                ) : step.visual === "sanbo" ? (
                  <Image src="/sanbo.svg" alt="Sanbo" width={100} height={100} />
                ) : null}
              </div>

              {/* Text */}
              <h4 className="text-base md:text-lg font-semibold text-foreground mb-2">
                {step.subtitle}
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

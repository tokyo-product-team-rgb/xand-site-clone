"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "GLOBAL CELEBRITIES",
    subtitle: "INVESTMENTS",
    assets: ["/kevin.png", "/steve.png", "/man.png"],
    content:
      "X& partners with global icons who bring unique access to high-potential sectors, serving as their exclusive venture capital partner.\n\nOur mission is to build a platform where the most influential minds from government, business, culture, and technology can leverage to amplify their message.",
  },
  {
    title: "ONLINE INFLUENCE",
    subtitle: "Digital distribution with intent",
    assets: ["/insta.png", "/linkedin.png"],
    content:
      "Our online influence is a global distribution network powered by cultural icons and our brand that allows us to shape conversations and accelerate the adoption of technology, products, and ideas.",
  },
  {
    title: "OFFLINE INFLUENCE",
    subtitle: "Real-world credibility and access",
    assets: ["/horse.png"],
    content:
      "From Decacorn Cup to Founder Performance Centers, we bring unique people together.",
  },
  {
    title: "AI NATIVE INTELLIGENCE OS",
    subtitle: "Investment Management",
    assets: ["/sanbo.svg"],
    content:
      "AI-native OS for Investors that unifies data, governance, and agent execution in one secure environment.",
  },
];

export function ScrollHowItWorks() {
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
    <section className="py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mb-16">
          X& builds and operates platforms at the intersection of capital, code, and culture.
        </p>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.title}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              className="border border-gray-200 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-10 transition-all duration-500 space-y-6"
              style={{
                opacity: i === activeStep ? 1 : 0.35,
                transform: i === activeStep ? "scale(1)" : "scale(0.98)",
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-7 h-7 rounded-full bg-[#3A4D56] text-white flex items-center justify-center text-sm font-medium">
                  {i + 1}
                </div>
                <h3 className="text-sm md:text-xl tracking-wider font-medium text-[#3A4D56]">
                  {step.title}
                </h3>
              </div>

              {/* Assets */}
              <div className="flex gap-2">
                {step.assets.map((src) => (
                  <div key={src} className="relative aspect-square w-full max-h-35">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="30vw"
                      className="object-contain object-top"
                    />
                  </div>
                ))}
              </div>

              {/* Text */}
              <h4 className="text-lg font-semibold text-[#2F3E46] whitespace-pre-wrap">
                {step.subtitle}
              </h4>
              <p className="text-[#4F5D64] leading-relaxed max-w-3xl whitespace-pre-wrap text-sm md:text-base">
                {step.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

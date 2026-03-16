"use client";

import { useState } from "react";
import Image from "next/image";

const layers = [
  { label: "GLOBAL CELEBRITIES", color: "#3A4D56" },
  { label: "ONLINE INFLUENCE", color: "#5A6D76" },
  { label: "OFFLINE INFLUENCE", color: "#7A8D96" },
  { label: "AI NATIVE INTELLIGENCE OS", color: "#9AADB6" },
];

const details = [
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

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = details[active];

  return (
    <section className="py-24 md:py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
          HOW IT WORKS
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mb-16">
          X& builds and operates platforms at the intersection of capital, code, and culture.
        </p>

        <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
          {/* Diamond Layers */}
          <div className="relative w-72 h-96 flex flex-col items-center justify-center gap-4">
            {layers.map((layer, i) => (
              <button
                key={layer.label}
                onClick={() => setActive(i)}
                className="w-40 h-20 flex items-center justify-center text-white text-[9px] tracking-widest font-medium text-center px-2 cursor-pointer transition-all duration-300"
                style={{
                  backgroundColor: layer.color,
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                  transform: `translateY(${i * -8}px)`,
                  opacity: i === active ? 1 : 0.5,
                  filter: i === active ? "brightness(1.15)" : "brightness(0.85)",
                }}
              >
                {layer.label}
              </button>
            ))}
          </div>

          {/* Detail Panel */}
          <div
            key={active}
            className="flex-1 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-400"
          >
            <div className="flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-xs font-bold">
                {active + 1}
              </span>
              <h3 className="text-lg font-semibold tracking-wide uppercase">
                {step.title}
              </h3>
            </div>

            <div className="flex gap-3">
              {step.assets.map((src) => (
                <div key={src} className="relative w-24 h-28">
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="100px"
                    className="rounded-lg object-contain object-top"
                  />
                </div>
              ))}
            </div>

            <h4 className="text-sm tracking-widest text-muted-foreground uppercase">
              {step.subtitle}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {step.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

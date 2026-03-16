"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {children}
    </div>
  );
}

export function ScrollTimeline({
  items,
  highlight,
}: {
  items: { text: string; bold?: boolean }[];
  highlight: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      // progress 0→1 as section scrolls through viewport
      const raw = (vh - rect.top) / (vh + rect.height);
      setProgress(Math.max(0, Math.min(1, raw)));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIndex = Math.min(
    items.length - 1,
    Math.floor(progress * items.length * 1.2)
  );

  return (
    <div ref={sectionRef} className="w-full bg-[#EEEAE3] py-24 md:py-36 px-8 md:px-16">
      <div className="max-w-5xl mx-auto flex gap-8 md:gap-14">
        {/* Vertical timeline */}
        <div className="relative flex flex-col items-center pt-2" style={{ minWidth: 2 }}>
          <div className="absolute top-0 bottom-0 w-[2px] bg-[#D1CEC9]" />
          <div
            className="absolute top-0 w-[2px] bg-[#3A4D56] transition-all duration-500 ease-out"
            style={{ height: `${Math.max(5, progress * 100)}%` }}
          />
          {items.map((_, i) => {
            const pos = ((i + 0.5) / items.length) * 100;
            const isActive = i <= activeIndex;
            return (
              <div
                key={i}
                className="absolute w-2.5 h-2.5 rounded-full border-2 transition-all duration-500"
                style={{
                  top: `${pos}%`,
                  transform: "translateY(-50%)",
                  borderColor: isActive ? "#3A4D56" : "#D1CEC9",
                  backgroundColor: isActive ? "#3A4D56" : "#EEEAE3",
                }}
              />
            );
          })}
        </div>

        {/* Text */}
        <div className="flex flex-col justify-between flex-1 py-2" style={{ minHeight: 280 }}>
          {items.map((item, i) => (
            <div
              key={i}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: i <= activeIndex ? 1 : 0.2,
                transform: i <= activeIndex ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <p
                className="font-[family-name:var(--font-display)]"
                style={{
                  fontSize: item.bold ? "clamp(24px, 3vw, 36px)" : "clamp(20px, 2.5vw, 28px)",
                  fontWeight: item.bold ? 500 : 300,
                  color: item.bold ? "#2a2a26" : "#3a3a36",
                  lineHeight: 1.3,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

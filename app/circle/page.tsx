"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fundCards = [
  {
    title: "CONSUMER",
    image: "/kevin.png",
    logo: "/companies/heart.png",
    points: ["Direct-to-consumer brands", "Lifestyle and wellness", "Consumer tech platforms"],
  },
  {
    title: "LONGEVITY & ENTERTAINMENT",
    image: "/steve.png",
    logo: "/companies/aoki.png",
    points: ["Health & longevity science", "Music & entertainment tech", "Web3 entertainment"],
  },
  {
    title: "SPORTS & ENTERTAINMENT",
    image: "/man.png",
    logo: "/companies/aapi.png",
    points: ["Sports technology", "Media & content", "Fan engagement platforms"],
  },
  {
    title: "AAPI FOUNDERS",
    image: "/suit.png",
    logo: "/companies/leaf.png",
    points: ["AAPI-founded startups", "Cross-cultural commerce", "Pacific Rim innovation"],
  },
  {
    title: "INTERNATIONAL",
    image: "/kevin-hart-suit.png",
    logo: "/companies/space.png",
    points: ["Global market expansion", "Cross-border investment", "International partnerships"],
  },
];

const fundTabs = [
  { name: "HartBeat Ventures", logos: ["funds/hartBeat_ventures/astonmartin.png", "funds/hartBeat_ventures/elevenlabs.png", "funds/hartBeat_ventures/function.png", "funds/hartBeat_ventures/palta.png", "funds/hartBeat_ventures/simple.png", "funds/hartBeat_ventures/vitahustle.png"] },
  { name: "Aoki Labs", logos: [] },
  { name: "Markham Valley Ventures", logos: [] },
  { name: "BYL Ventures", logos: [] },
  { name: "X&KSK", logos: [] },
  { name: "Fifth Quarter Ventures", logos: [] },
  { name: "Direct", logos: [] },
];

export default function CirclePage() {
  const [activeFund, setActiveFund] = useState(0);

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Image src="/hero-logo.png" alt="X&" width={200} height={80} className="w-32 md:w-48" priority />
        <Image src="/TEXT_CIRCLE.svg" alt="Circle" width={200} height={40} className="mt-4 w-40 md:w-52" />
        <p className="mt-8 text-sm md:text-base tracking-wider text-muted-foreground font-light text-center max-w-md px-8">
          Where global icons become world-changing investors.
        </p>
      </section>

      {/* Scroll Section */}
      <section className="py-32 md:py-48 relative">
        <div className="max-w-3xl mx-auto px-8 space-y-10 text-center">
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Influence is the new infrastructure.
          </p>
          <p className="text-xl md:text-2xl text-foreground font-semibold">
            Distribution is the new defensibility.
          </p>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Celebrity is the new capital.
          </p>
        </div>

        {/* White Card */}
        <div className="max-w-2xl mx-auto mt-20 bg-white rounded-2xl p-10 md:p-14 shadow-sm">
          <h3 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">THE PLATFORM</h3>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            X&Circle connects the world's most influential people with venture-scale investment opportunities. 
            By combining celebrity influence with institutional-grade deal flow, X&Circle creates a platform 
            where cultural capital becomes financial capital — and where founders gain distribution advantages 
            that money alone cannot buy.
          </p>
          {/* Decorative */}
          <div className="absolute right-8 top-1/2 w-32 h-32 rounded-full border border-border hidden md:block" />
          <div className="absolute right-16 top-1/2 translate-y-8 w-px h-24 bg-border hidden md:block rotate-45" />
        </div>
      </section>

      {/* What That Unlocks - Stats */}
      <section className="py-24 bg-[#F0EEE9]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { value: "$30M", sub: "Earlier market access." },
              { value: "$140M", sub: "Faster trust." },
              { value: "$2.3M", sub: "Broader adoption." },
            ].map((stat) => (
              <div key={stat.value} className="text-center p-8">
                <p className="text-4xl md:text-5xl font-bold text-foreground font-[family-name:var(--font-display)]">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm tracking-wider text-muted-foreground">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Domain Expertise - Carousel */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-12 uppercase">
            FUND DOMAIN EXPERTISE
          </h2>
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {fundCards.map((card) => (
                <CarouselItem key={card.title} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="rounded-2xl overflow-hidden border border-border">
                    <div className="h-56 relative">
                      <Image src={card.image} alt={card.title} fill className="object-cover" />
                      <div className="absolute bottom-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Image src={card.logo} alt="" width={24} height={24} />
                      </div>
                    </div>
                    <div className="bg-white p-5">
                      <h3 className="text-xs tracking-widest font-semibold mb-3 uppercase">{card.title}</h3>
                      <ul className="space-y-1">
                        {card.points.map((p) => (
                          <li key={p} className="text-xs text-muted-foreground">• {p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* Investments Section */}
      <section className="py-24 px-8">
        <div className="max-w-5xl mx-auto">
          {/* Toggle Tabs */}
          <div className="flex gap-4 mb-12">
            <button className="px-4 py-2 text-xs tracking-widest bg-foreground text-primary-foreground rounded-full uppercase">
              Investments by Funds
            </button>
            <button className="px-4 py-2 text-xs tracking-widest text-muted-foreground border border-border rounded-full uppercase">
              Investments by Sector
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Fund buttons */}
            <div className="flex flex-col gap-2 min-w-48">
              {fundTabs.map((fund, i) => (
                <button
                  key={fund.name}
                  onClick={() => setActiveFund(i)}
                  className={`text-left px-4 py-2 text-xs tracking-wider rounded-lg transition-colors ${
                    activeFund === i
                      ? "bg-foreground text-primary-foreground font-medium"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {fund.name}
                </button>
              ))}
            </div>

            {/* Logos grid */}
            <div className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-4">
              {fundTabs[activeFund].logos.map((logo) => (
                <div key={logo} className="bg-white rounded-xl p-4 flex items-center justify-center border border-border aspect-square">
                  <Image src={`/${logo}`} alt="" width={80} height={80} className="object-contain" />
                </div>
              ))}
              {fundTabs[activeFund].logos.length === 0 && (
                <p className="col-span-full text-sm text-muted-foreground">Portfolio companies coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

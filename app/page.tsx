import Image from "next/image";
import Link from "next/link";
import { ScrollReveal, ScrollTimeline } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center border-t border-b border-border relative">
        <Image
          src="/hero-logo.png"
          alt="X&"
          width={315}
          height={120}
          className="w-50 md:w-[315px] mix-blend-multiply"
          priority
        />
        <p className="mt-6 text-sm md:text-base tracking-wider text-muted-foreground font-light">
          A full-stack investment and technology company
        </p>
      </section>

      {/* Facts Banner */}
      <ScrollTimeline
        highlight="X& is coming together."
        items={[
          { text: "Capital is changing." },
          { text: "Code is accelerating." },
          { text: "Culture is becoming distribution." },
          { text: "X& is coming together.", bold: true },
        ]}
      />

      {/* How It Works */}
      <section className="py-24 md:py-36 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-6 uppercase">
              HOW IT WORKS
            </h2>
            <p className="text-2xl md:text-3xl text-foreground/80 font-light font-[family-name:var(--font-display)] max-w-2xl mb-20 leading-relaxed">
              Capital, code, and culture — layered into a single integrated platform.
            </p>
          </ScrollReveal>

          <div className="flex gap-8 md:gap-14">
            {/* Timeline */}
            <div className="relative flex-shrink-0" style={{ width: 2 }}>
              <div className="absolute top-0 bottom-0 w-[2px] bg-[#D1CEC9]" />
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="absolute w-2.5 h-2.5 rounded-full bg-[#3A4D56] border-2 border-[#3A4D56]"
                  style={{ top: `${i * 33}%`, left: -4, transform: "translateY(-50%)" }}
                />
              ))}
            </div>

            {/* Steps */}
            <div className="flex flex-col gap-20 md:gap-28">
              <ScrollReveal delay={0}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">01</span>
                  <h3 className="text-xl md:text-2xl font-medium font-[family-name:var(--font-display)] text-foreground">
                    Global Celebrities
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                    World-class celebrities partner with X& to deploy capital, build brands, and create value through direct engagement with the startup ecosystem.
                  </p>
                  <div className="flex gap-3 pt-2">
                    <Image src="/kevin.png" alt="Kevin Hart" width={64} height={80} className="rounded-lg object-cover w-16 h-20" />
                    <Image src="/steve.png" alt="Steve Aoki" width={64} height={80} className="rounded-lg object-cover w-16 h-20" />
                    <Image src="/man.png" alt="Partner" width={64} height={80} className="rounded-lg object-cover w-16 h-20" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">02</span>
                  <h3 className="text-xl md:text-2xl font-medium font-[family-name:var(--font-display)] text-foreground">
                    Online Influence
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                    Amplifying deal flow and brand reach through digital-native networks that connect culture to capital at scale.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">03</span>
                  <h3 className="text-xl md:text-2xl font-medium font-[family-name:var(--font-display)] text-foreground">
                    Offline Influence
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                    High-touch relationships and curated events that turn cultural capital into lasting venture partnerships.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="space-y-4">
                  <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">04</span>
                  <h3 className="text-xl md:text-2xl font-medium font-[family-name:var(--font-display)] text-foreground">
                    AI-Native Intelligence OS
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg">
                    Proprietary AI infrastructure powering every layer — from deal sourcing and diligence to portfolio management and LP reporting.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* THIS IS X& Banner */}
      <section className="py-24 text-center" style={{
        background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent)"
      }}>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
          THIS IS X&
        </h2>
        <p className="mt-4 text-sm md:text-base tracking-widest text-muted-foreground uppercase">
          NOT A FUND. NOT A PRODUCT.
        </p>
        <p className="mt-2 text-lg md:text-xl tracking-wider text-foreground font-medium uppercase">
          A PLATFORM
        </p>
      </section>

      {/* Bottom Cards */}
      <section className="px-8 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Circle Card */}
          <Link href="/circle" className="group block p-10 rounded-2xl bg-[#EEECE8] hover:bg-[#E8E4DF] transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center">
                <Image src="/circle.svg" alt="Circle" width={32} height={32} />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Image src="/hero-logo.png" alt="X&" width={40} height={16} />
              <span className="text-xl font-light font-[family-name:var(--font-display)]">Circle</span>
            </div>
            <span className="text-xs tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">
              Learn More →
            </span>
          </Link>

          {/* Sanbo Card */}
          <Link href="/sanbo" className="group block p-10 rounded-2xl bg-[#E8E4DF] hover:bg-[#EEECE8] transition-colors">
            <div className="mb-6">
              <Image src="/sanbo.svg" alt="Sanbo" width={48} height={48} />
            </div>
            <h3 className="text-xl font-light mb-2">Sanbo</h3>
            <span className="text-xs tracking-widest text-muted-foreground group-hover:text-foreground transition-colors uppercase">
              Learn More →
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}

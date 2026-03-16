import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center border-t border-b border-border relative">
        <Image
          src="/hero-logo.png"
          alt="X&"
          width={315}
          height={120}
          className="w-50 md:w-[315px]"
          priority
        />
        <p className="mt-6 text-sm md:text-base tracking-wider text-muted-foreground font-light">
          A full-stack investment and technology company
        </p>
      </section>

      {/* Facts */}
      <section className="relative py-32 md:py-48">
        <div className="max-w-3xl mx-auto px-8">
          {/* Decorative vertical line */}
          <div className="absolute left-1/2 top-16 w-px h-32 bg-border" />
          {/* Decorative circle */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-border hidden md:block" />

          <div className="space-y-12 text-center">
            <ScrollReveal delay={0}>
              <p className="text-xl md:text-2xl text-foreground/80 font-light">
                Capital is changing.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-xl md:text-2xl text-foreground font-semibold">
                Code is accelerating.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="text-xl md:text-2xl text-foreground/80 font-light">
                Culture is becoming distribution.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={700}>
              <p className="text-2xl md:text-3xl text-foreground font-bold mt-16">
                X& is where they come together.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            HOW IT WORKS
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mb-16">
            Capital, code, and culture — layered into a single integrated platform that connects global influence with venture-scale opportunity.
          </p>

          {/* Diamond Layers */}
          <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
            <div className="relative w-72 h-96 flex flex-col items-center justify-center gap-4">
              {[
                { label: "GLOBAL CELEBRITIES", color: "#3A4D56" },
                { label: "ONLINE INFLUENCE", color: "#5A6D76" },
                { label: "OFFLINE INFLUENCE", color: "#7A8D96" },
                { label: "AI NATIVE INTELLIGENCE OS", color: "#9AADB6" },
              ].map((layer, i) => (
                <div
                  key={layer.label}
                  className="w-40 h-20 flex items-center justify-center text-white text-[9px] tracking-widest font-medium text-center px-2"
                  style={{
                    backgroundColor: layer.color,
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    transform: `translateY(${i * -8}px)`,
                  }}
                >
                  {layer.label}
                </div>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-foreground text-primary-foreground flex items-center justify-center text-xs font-bold">
                  1
                </span>
                <h3 className="text-lg font-semibold tracking-wide uppercase">
                  Global Celebrities
                </h3>
              </div>
              <div className="flex gap-3">
                <Image src="/kevin.png" alt="Kevin Hart" width={80} height={100} className="rounded-lg object-cover w-20 h-24" />
                <Image src="/steve.png" alt="Steve Aoki" width={80} height={100} className="rounded-lg object-cover w-20 h-24" />
                <Image src="/man.png" alt="Partner" width={80} height={100} className="rounded-lg object-cover w-20 h-24" />
              </div>
              <h4 className="text-sm tracking-widest text-muted-foreground uppercase">
                Celebrity-Led Investment Platform
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                World-class celebrities partner with X& to deploy capital, build brands, and create value through direct engagement with the startup ecosystem.
              </p>
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

import Image from "next/image";
import Link from "next/link";
import { ScrollTimeline } from "@/components/scroll-reveal";
import { ScrollHowItWorks } from "@/components/scroll-how-it-works";

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
      <ScrollHowItWorks />

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

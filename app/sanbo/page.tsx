import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const features = [
  {
    icon: "⬡",
    label: "AI INTEGRATIONS",
    title: "INTELLIGENT DEAL ANALYSIS",
    description: "AI-powered analysis across every stage of the investment lifecycle. From sourcing to due diligence to portfolio monitoring, Sanbo's intelligence layer surfaces insights that help you make better decisions faster.",
    screenshot: "/sanbo/screenshot1.png",
  },
  {
    icon: "⬡",
    label: "DISTRIBUTION",
    title: "SEAMLESS DEAL FLOW MANAGEMENT",
    description: "Manage inbound and outbound deal flow in one place. Track relationships, share materials with LPs, and collaborate across your team with built-in workflows designed for how investment teams actually work.",
    screenshot: "/sanbo/screenshot2.png",
  },
  {
    icon: "⬡",
    label: "CONNECTED",
    title: "UNIFIED PORTFOLIO OPERATIONS",
    description: "Connect your entire portfolio in a single operating system. From cap table management to reporting, Sanbo gives you real-time visibility across every company — with automated data collection and investor-ready outputs.",
    screenshot: "/sanbo/screenshot3.png",
  },
];

export default function SanboPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center">
        <Image src="/sanbo-logo.svg" alt="Sanbo" width={160} height={160} className="h-40 w-auto" priority />
        <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-foreground">SANBO</h1>
        <p className="mt-4 text-sm md:text-base tracking-wider text-muted-foreground font-light text-center max-w-md px-8">
          The AI-native operating system for finance.
        </p>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F0EEE9]">
        <div className="max-w-3xl mx-auto px-8 text-center space-y-6">
          <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
            Manage the end to end experience for private market investments.
          </p>
          <p className="text-base text-muted-foreground">
            Get to yes or no fast, with everything in one place.
          </p>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-24 px-8 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs tracking-[0.3em] text-muted-foreground mb-4 uppercase">
            SANBO PLATFORM
          </h2>
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl mb-12">
            A comprehensive platform built from the ground up for modern investment teams. 
            Sanbo combines AI-native intelligence with intuitive design to streamline every aspect 
            of private market investing.
          </p>
          <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm">
            <Image
              src="/sanba_screenshot.png"
              alt="Sanbo Platform"
              width={1200}
              height={700}
              className="w-full"
            />
          </div>
          {/* Decorative circles */}
          <div className="absolute -right-8 top-1/3 w-48 h-48 rounded-full border border-border hidden lg:block" />
          <div className="absolute -right-4 top-1/3 translate-y-16 w-32 h-32 rounded-full border border-border hidden lg:block" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-8">
        <div className="max-w-5xl mx-auto space-y-0">
          {features.map((feature, i) => (
            <div key={feature.label}>
              {i > 0 && <Separator className="my-16 bg-border" />}
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className={`space-y-6 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-muted-foreground/20 rounded flex items-center justify-center text-sm">
                      {feature.icon}
                    </span>
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                      {feature.label}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-wide uppercase text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                    <Image
                      src={feature.screenshot}
                      alt={feature.title}
                      width={600}
                      height={400}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

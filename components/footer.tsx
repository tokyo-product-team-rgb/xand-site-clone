import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="px-8 py-12 mt-24">
      <Separator className="mb-8 bg-border" />
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
        <p>© 2026 X&. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-foreground transition-colors">HOME</Link>
          <Link href="/circle" className="hover:text-foreground transition-colors">X&CIRCLE</Link>
          <Link href="/sanbo" className="hover:text-foreground transition-colors">SANBO</Link>
        </div>
      </div>
    </footer>
  );
}

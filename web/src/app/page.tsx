import { Button } from "@/components/ui/Button";
import { Bistre } from "@/components/ui/Bistre";

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-[1100px] px-12 py-24">
        <p className="text-xs font-bold uppercase tracking-[1.4px] text-accent">
          Design system — checkpoint
        </p>
        <h1 className="mt-4 text-[50px] leading-[1.1] font-medium">
          Tokens, font, and the first two ported components.
        </h1>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.7] text-gray-1">
          Kumbh Sans self-hosted via next/font/local, neutrals and the business-unit blue accent
          wired through CSS variables, and the .btn / .bistre recipes moved out of copy-pasted
          HTML into single-source component CSS.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="light">Light (on dark)</Button>
        </div>
      </section>

      <Bistre as="section" className="px-12 py-24">
        <div className="relative z-[1] mx-auto max-w-[1100px]">
          <p className="text-xs font-bold uppercase tracking-[1.4px] text-white/40">Bistre surface</p>
          <h2 className="mt-4 text-[42px] leading-[1.1] font-medium text-[#F7F7F7]">
            Same glow recipe, one source of truth.
          </h2>
          <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.6] text-white/75">
            This gradient used to drift across three HTML pages before being caught in an audit.
            Now it only exists once, in components.css.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="primary">Book a call</Button>
            <Button variant="ghost">Learn more</Button>
          </div>
        </div>
      </Bistre>
    </main>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative mx-auto max-w-5xl px-6 py-20">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-indigo-500/10 p-8 backdrop-blur">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="text-2xl font-semibold sm:text-3xl">Ready to deploy your Coding Agent?</h3>
          <p className="mt-3 text-white/80">
            Get a personalized demo and discover how an agent can pair-program, ship PRs, and accelerate your roadmap.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:hello@yourcodingagent.com?subject=Demo%20request"
              className="group inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-medium text-neutral-900 hover:bg-white/90"
            >
              Request a demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 hover:bg-white/10"
            >
              View docs
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2">
        <div className="mx-auto h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_60%)] blur-3xl" />
      </div>
      <footer className="mt-10 flex items-center justify-between text-sm text-white/50">
        <span>© {new Date().getFullYear()} Coding Agent Co.</span>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white/80">Privacy</a>
          <a href="#" className="hover:text-white/80">Terms</a>
        </div>
      </footer>
    </section>
  );
}

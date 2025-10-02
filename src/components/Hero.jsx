import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Spline Scene */}
      <div className="relative h-[90vh] w-full">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Subtle gradient aura overlay (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/10 to-neutral-950" />
      </div>

      {/* Content Overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        <div className="pointer-events-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-400" />
            <span className="text-sm text-white/80">Launch faster with code-native AI agents</span>
          </div>
          <h1 className="text-balance bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
            Build, ship, and scale with your own Coding Agent
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
            We create autonomous coding agents that understand your stack, write reliable code, open pull requests, and learn from feedback — securely inside your workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center rounded-lg bg-violet-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              Get a demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-medium text-white/90 hover:bg-white/10"
            >
              Explore features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

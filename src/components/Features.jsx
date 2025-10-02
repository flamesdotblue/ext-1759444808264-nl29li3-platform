import React from 'react';
import { Code, Shield, Cpu, Rocket } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6 text-violet-300" />,
    title: 'Production-grade code',
    desc: 'Agents write typed, testable code with linters and conventions that match your repository.'
  },
  {
    icon: <Shield className="h-6 w-6 text-violet-300" />,
    title: 'Private & secure',
    desc: 'Your code never leaves your cloud. Role-based access and audit logs included.'
  },
  {
    icon: <Cpu className="h-6 w-6 text-violet-300" />,
    title: 'Understands your stack',
    desc: 'Embeds your docs, patterns, and services so the agent navigates systems like a senior dev.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-violet-300" />,
    title: 'Ships autonomously',
    desc: 'Opens PRs, requests review, and iterates from CI feedback until it passes.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What our coding agents do</h2>
        <p className="mt-3 text-white/70">Integrated into your GitHub, CI, and issue tracker with guardrails you control.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition hover:translate-y-[-2px] hover:border-white/20"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 ring-1 ring-violet-500/30">
              {f.icon}
            </div>
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Soft background accent */}
      <div className="pointer-events-none absolute inset-x-0 -z-0 top-1/2 -translate-y-1/2">
        <div className="mx-auto h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_60%)] blur-3xl" />
      </div>
    </section>
  );
}

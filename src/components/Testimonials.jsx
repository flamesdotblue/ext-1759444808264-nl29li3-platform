import React from 'react';

const quotes = [
  {
    quote:
      'Their agent opened a fully passing PR for a complex feature flag rollout overnight. The review was mostly nitpicks.',
    author: 'CTO, Series B SaaS'
  },
  {
    quote:
      'We cut our backlog by 40% in a month. The agent took small tickets off engineers’ plates with great reliability.',
    author: 'VP Engineering, Fintech'
  },
  {
    quote:
      'Security was our biggest worry—running it inside our VPC with read-scoped access sealed the deal.',
    author: 'Head of Platform, Enterprise'
  }
];

export default function Testimonials() {
  return (
    <section className="relative border-y border-white/10 bg-white/[0.03] py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold">Teams shipping with agents</h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6">
              <blockquote className="text-white/90">“{q.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

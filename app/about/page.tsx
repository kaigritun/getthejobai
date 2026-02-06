import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | GetTheJobAI',
  description: 'GetTheJobAI helps job seekers use AI effectively to land their dream jobs faster.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">About GetTheJobAI</h1>
      <div className="space-y-6 text-white/70">
        <p>GetTheJobAI helps job seekers use AI tools effectively to land their dream jobs faster.</p>
        <p>We provide practical guides, prompts, and tools for resume writing, cover letters, interview prep, and job applications — all optimized for the AI era.</p>
        <h2 className="text-2xl font-bold text-white mt-8">Our Mission</h2>
        <p>Make AI job search tools accessible and effective for everyone, regardless of technical background.</p>
        <h2 className="text-2xl font-bold text-white mt-8">What We Offer</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Free guides on using ChatGPT and AI for job search</li>
          <li>Interactive tools like resume scorers and analyzers</li>
          <li>Curated comparisons of AI job search tools</li>
          <li>Copy-paste prompts that actually work</li>
        </ul>
      </div>
    </div>
  )
}

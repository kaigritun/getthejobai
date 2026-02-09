import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | GetTheJobAI',
  description: 'GetTheJobAI helps job seekers use AI effectively to land their dream jobs faster.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="max-w-2xl mb-16">
        <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">About</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Helping job seekers win with AI</h1>
        <p className="text-xl text-white/60 leading-relaxed">
          GetTheJobAI provides practical, no-fluff guides to help you use AI tools 
          effectively in your job search. No hype, no get-rich-quick promises — just 
          real methods that actually work.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-white/10 mb-16">
        {[
          { stat: '38+', label: 'Free Guides' },
          { stat: '50+', label: 'AI Prompts' },
          { stat: '15+', label: 'Interactive Tools' },
          { stat: '100%', label: 'Free to Use' },
        ].map((item) => (
          <div key={item.label} className="text-center">
            <div className="text-3xl font-bold text-emerald-400 mb-2">{item.stat}</div>
            <div className="text-sm text-white/50">{item.label}</div>
          </div>
        ))}
      </div>

      {/* What We Offer */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">What we offer</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Resume Optimization',
              desc: 'Guides and prompts to tailor your resume for any job posting, beat ATS systems, and highlight your strengths.',
            },
            {
              title: 'Cover Letter Writing',
              desc: 'Templates and AI prompts to craft compelling cover letters that actually get read.',
            },
            {
              title: 'Interview Preparation',
              desc: 'Practice questions, STAR method guides, and AI-powered mock interview techniques.',
            },
            {
              title: 'Interactive Tools',
              desc: 'Free analyzers and scorers to instantly improve your application materials.',
            },
          ].map((item) => (
            <div key={item.title} className="border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
        <p className="text-white/60 mb-6">Browse our free guides and start improving your job search today.</p>
        <Link 
          href="/guides"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-8 py-3 rounded-lg transition-all"
        >
          Browse Guides →
        </Link>
      </div>
    </div>
  )
}

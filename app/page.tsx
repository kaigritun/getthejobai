import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="max-w-2xl">
        <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
          AI-Powered Job Search
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Land your next job faster with AI
        </h1>
        <p className="text-xl text-white/60 mb-8 leading-relaxed">
          Practical guides, prompts, and tools to use ChatGPT and AI assistants 
          for resumes, cover letters, interview prep, and job applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="/guides/chatgpt-resume-prompts"
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Free Resume Prompts →
          </Link>
          <Link 
            href="/guides"
            className="border border-white/20 hover:border-white/40 hover:bg-white/5 px-6 py-3 rounded-lg transition-all"
          >
            Browse Guides
          </Link>
        </div>
        
        {/* Email Signup */}
        <div className="mt-12">
          <EmailSignup 
            headline="Get weekly AI job search tips" 
            description="Free weekly tips on using AI to land your dream job."
            buttonText="Get Free Tips" 
          />
        </div>
      </div>

      {/* Paid Product Section */}
      <section className="mt-24 bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border border-emerald-500/20 rounded-2xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-1">
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-wider mb-3">
              Premium Resource
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              50+ ChatGPT Prompts for Job Seekers
            </h2>
            <p className="text-white/70 mb-6 leading-relaxed">
              Stop spending hours crafting the perfect prompt. Get 50+ battle-tested prompts 
              for every stage of your job search — resume optimization, cover letters, 
              interview prep, salary negotiation, and more.
            </p>
            <ul className="space-y-3 mb-8 text-white/80">
              {[
                '15 resume prompts that beat ATS systems',
                '10 cover letter templates for any industry',
                '12 interview prep prompts with mock Q&A',
                '8 salary negotiation scripts',
                '5 LinkedIn optimization prompts',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://buy.stripe.com/fZu8wQ6HMfQqdTPdlI2VG00"
                className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-8 py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] text-lg"
              >
                Get Instant Access — $19
              </a>
              <span className="text-white/40 text-sm">Instant PDF download</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Guides */}
      <section className="mt-24">
        <p className="text-white/40 font-mono text-xs uppercase tracking-wider mb-8">
          Popular Guides
        </p>
        <div className="grid gap-4">
          {[
            {
              title: 'ChatGPT Resume Prompts That Actually Work',
              desc: 'Copy-paste prompts to improve your resume with AI',
              tag: 'Resume',
              href: '/guides/chatgpt-resume-prompts',
            },
            {
              title: 'AI Cover Letter Generator Guide',
              desc: 'Generate personalized cover letters in minutes',
              tag: 'Cover Letter',
              href: '/guides/ai-cover-letter-generator',
            },
            {
              title: 'AI Interview Prep Guide',
              desc: 'Practice with AI before your real interview',
              tag: 'Interview',
              href: '/guides/ai-interview-prep',
            },
            {
              title: 'Best AI Resume Tools 2026',
              desc: 'Comparison of top AI tools for job seekers',
              tag: 'Tools',
              href: '/guides/best-ai-resume-tools-2026',
            },
          ].map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group border border-white/10 rounded-xl p-5 transition-all hover:border-emerald-500/50 hover:bg-white/[0.02]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase">
                      {guide.tag}
                    </span>
                  </div>
                  <h3 className="font-medium mb-1 group-hover:text-emerald-400 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-white/50">{guide.desc}</p>
                </div>
                <span className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Use AI */}
      <section className="mt-24 border-t border-white/10 pt-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Why use AI for your job search?</h2>
          <div className="space-y-6 text-white/70">
            <p>
              The job market is brutal. You&apos;re competing against hundreds of applicants,
              many using AI to optimize their applications. Level the playing field.
            </p>
            <ul className="space-y-3">
              {[
                'Tailor your resume to each job posting in minutes',
                'Write cover letters that actually get read',
                'Practice interviews with AI before the real thing',
                'Research companies and prepare better questions',
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <section className="mt-24 border-t border-white/10 pt-16">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold mb-4">Stay ahead of the competition</h2>
          <EmailSignup 
            headline="Free AI job search tips, weekly" 
            description="Join thousands of job seekers using AI to land better jobs, faster."
            buttonText="Subscribe Free" 
          />
        </div>
      </section>
    </div>
  )
}

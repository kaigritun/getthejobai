import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Job Search Guides | GetTheJobAI',
  description: 'Practical guides to using AI and ChatGPT for resumes, cover letters, interview prep, and job applications.',
}

const guides = [
  {
    title: 'ChatGPT Resume Prompts That Actually Work',
    desc: 'Copy-paste prompts to improve your resume with AI. Tested and refined prompts for real results.',
    tag: 'Resume',
    href: '/guides/chatgpt-resume-prompts',
    ready: true
  },
  {
    title: 'How to Use AI for Cover Letters',
    desc: 'Generate personalized cover letters in minutes, not hours.',
    tag: 'Cover Letter',
    href: '/guides/ai-cover-letter-guide',
    ready: false
  },
  {
    title: 'Best AI Resume Builders 2025',
    desc: 'Comparison of top AI-powered tools for job seekers.',
    tag: 'Tools',
    href: '/guides/best-ai-resume-builders',
    ready: false
  },
  {
    title: 'AI Interview Prep Guide',
    desc: 'Practice with AI before your real interview. Common questions and mock sessions.',
    tag: 'Interview',
    href: '/guides/ai-interview-prep',
    ready: false
  },
  {
    title: 'Job Search Automation with AI',
    desc: 'Automate job applications and tracking with AI assistants.',
    tag: 'Automation',
    href: '/guides/job-search-automation',
    ready: false
  },
  {
    title: 'LinkedIn Optimization with AI',
    desc: 'Use AI to improve your LinkedIn profile and get noticed by recruiters.',
    tag: 'LinkedIn',
    href: '/guides/linkedin-optimization',
    ready: false
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg hover:text-emerald-400 transition-colors">
            GetTheJobAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="text-white">Guides</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Guides
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Job Search Guides
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Practical, no-BS guides to using AI for your job search. 
            Every guide includes copy-paste prompts and real examples.
          </p>
        </div>

        <div className="grid gap-4">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.ready ? guide.href : '#'}
              className={`border border-white/10 rounded-lg p-6 transition-colors ${
                guide.ready 
                  ? 'hover:border-emerald-500/50 hover:bg-white/[0.02]' 
                  : 'opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase">
                      {guide.tag}
                    </span>
                    {!guide.ready && (
                      <span className="text-xs font-mono text-white/30 uppercase">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h2 className="font-medium text-lg mb-2">{guide.title}</h2>
                  <p className="text-white/50">{guide.desc}</p>
                </div>
                {guide.ready && (
                  <span className="text-emerald-400 text-xl">→</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2025 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

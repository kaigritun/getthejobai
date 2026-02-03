import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | GetTheJobAI',
  description: 'Tips, insights, and guides for using AI in your job search.',
}

const posts = [
  {
    title: 'ChatGPT Resume Prompts That Actually Work',
    desc: 'Copy-paste prompts to improve your resume with AI. Tested and refined prompts for real results.',
    date: '2026-02-03',
    href: '/guides/chatgpt-resume-prompts',
  },
  {
    title: 'ATS Resume Optimization: Beat the Bots',
    desc: '75% of resumes get filtered by ATS. Learn how to optimize keywords, formatting, and pass the bots.',
    date: '2026-02-02',
    href: '/guides/ats-resume-optimization',
  },
  {
    title: 'Best AI Resume Builders 2026',
    desc: 'Honest reviews of every major AI resume builder. Teal for free, Rezi if you pay.',
    date: '2026-02-01',
    href: '/guides/best-ai-resume-builders-2026',
  },
  {
    title: 'AI Interview Prep Guide',
    desc: 'Practice with AI before your real interview. Generate questions, build STAR answers, role-play.',
    date: '2026-01-30',
    href: '/guides/ai-interview-prep',
  },
  {
    title: 'AI Cover Letter Generator Guide',
    desc: 'Generate personalized cover letters in minutes, not hours. Best tools and prompts.',
    date: '2026-01-28',
    href: '/guides/ai-cover-letter-generator',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg hover:text-emerald-400 transition-colors">
            GetTheJobAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="hover:text-white transition-colors">Tools</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
            <Link href="/blog" className="text-white">Blog</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Blog
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Latest Posts
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Tips, insights, and in-depth guides for landing your next job with AI.
          </p>
        </div>

        <div className="grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="border border-white/10 rounded-lg p-6 hover:border-emerald-500/50 hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-white/40 mb-2">{post.date}</p>
                  <h2 className="font-medium text-lg mb-2">{post.title}</h2>
                  <p className="text-white/50">{post.desc}</p>
                </div>
                <span className="text-emerald-400 text-xl">→</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/guides" className="text-emerald-400 hover:underline">
            View all guides →
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2026 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Job Search Tools 2025 | GetTheJobAI',
  description: 'Curated list of AI tools for job seekers - resume builders, cover letter generators, interview prep, and job search automation.',
}

const tools = [
  {
    name: 'Teal',
    category: 'Resume Builder',
    desc: 'AI-powered resume builder with job tracking. Free tier available.',
    url: 'https://www.tealhq.com/',
    highlight: true,
  },
  {
    name: 'Rezi',
    category: 'Resume Builder',
    desc: 'ATS-optimized resume builder with AI writing assistant.',
    url: 'https://www.rezi.ai/',
    highlight: false,
  },
  {
    name: 'Kickresume',
    category: 'Resume Builder',
    desc: 'AI resume and cover letter builder with templates.',
    url: 'https://www.kickresume.com/',
    highlight: false,
  },
  {
    name: 'ChatGPT',
    category: 'All-Purpose',
    desc: 'The versatile AI assistant. Use with our prompts for resume help.',
    url: 'https://chat.openai.com/',
    highlight: true,
  },
  {
    name: 'Claude',
    category: 'All-Purpose',
    desc: 'Great for longer documents. Excellent at tailoring resumes.',
    url: 'https://claude.ai/',
    highlight: false,
  },
  {
    name: 'Interview Warmup',
    category: 'Interview Prep',
    desc: 'Free Google tool for practicing interview answers.',
    url: 'https://grow.google/certificates/interview-warmup/',
    highlight: true,
  },
  {
    name: 'Jobscan',
    category: 'ATS Optimization',
    desc: 'Compare your resume to job descriptions for ATS match.',
    url: 'https://www.jobscan.co/',
    highlight: false,
  },
  {
    name: 'LinkedIn AI Features',
    category: 'Job Search',
    desc: 'Built-in AI writing tools for profiles and messages.',
    url: 'https://www.linkedin.com/',
    highlight: false,
  },
]

const categories = ['All', 'Resume Builder', 'Interview Prep', 'ATS Optimization', 'All-Purpose', 'Job Search']

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      <nav className="border-b border-white/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg hover:text-emerald-400 transition-colors">
            GetTheJobAI
          </Link>
          <div className="flex gap-6 text-sm text-white/60">
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <Link href="/tools" className="text-white">Tools</Link>
            <Link href="/prompts" className="hover:text-white transition-colors">Prompts</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Tools
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI Tools for Job Seekers
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Curated list of the best AI tools to help with your job search.
            All personally tested. Most have free tiers.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((cat) => (
            <span 
              key={cat}
              className="text-xs font-mono px-3 py-1.5 rounded border border-white/20 text-white/60 hover:border-white/40 cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-4">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`border rounded-lg p-5 transition-colors ${
                tool.highlight 
                  ? 'border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-500/50' 
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-emerald-400 uppercase">
                      {tool.category}
                    </span>
                    {tool.highlight && (
                      <span className="text-xs font-mono text-white/50 uppercase">
                        Recommended
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium text-lg mb-1">{tool.name}</h3>
                  <p className="text-white/50">{tool.desc}</p>
                </div>
                <span className="text-white/30 text-xl">↗</span>
              </div>
            </a>
          ))}
        </div>

        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-4">How to Choose</h2>
          <div className="space-y-4 text-white/70">
            <p>
              Don&apos;t pay for tools until you&apos;ve tried the free versions. Most AI resume 
              builders have generous free tiers.
            </p>
            <p>
              <strong className="text-white">My recommendation:</strong> Start with ChatGPT + our 
              <Link href="/prompts" className="text-emerald-400 hover:text-emerald-300"> free prompts</Link>. 
              It&apos;s more flexible than specialized tools and you learn more in the process.
            </p>
          </div>
        </section>
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

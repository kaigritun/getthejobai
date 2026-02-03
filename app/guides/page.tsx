import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Job Search Guides | GetTheJobAI',
  description: 'Practical guides to using AI and ChatGPT for resumes, cover letters, interview prep, and job applications.',
}

const guides = [
  {
    title: 'AI Job Search Tools: Complete Guide',
    desc: 'Comprehensive guide to AI tools for job searching. Compare resume builders, job boards, networking tools, and interview prep platforms.',
    tag: 'Tools',
    href: '/guides/ai-job-search-tools',
    ready: true
  },
  {
    title: 'AI Interview Preparation Guide',
    desc: 'Use AI to prepare for interviews. Mock interviews with ChatGPT, company research, answer preparation, and follow-up strategies.',
    tag: 'Interview',
    href: '/guides/ai-interview-preparation',
    ready: true
  },
  {
    title: 'AI Job Application Tracking',
    desc: 'Automate tracking, follow-ups, and organization so you never lose track of opportunities. Best tools and AI prompts.',
    tag: 'Organization',
    href: '/guides/ai-job-application-tracking',
    ready: true
  },
  {
    title: 'AI Job Market Research',
    desc: 'Research job markets 10x faster with AI. Target the right companies, understand trends, position yourself as ideal.',
    tag: 'Research',
    href: '/guides/ai-job-market-research',
    ready: true
  },
  {
    title: 'ChatGPT Prompts for LinkedIn Outreach',
    desc: 'AI-powered LinkedIn outreach that gets responses. Prompts for connecting with hiring managers, recruiters, and industry contacts.',
    tag: 'Networking',
    href: '/guides/chatgpt-linkedin-outreach',
    ready: true
  },
  {
    title: 'Building an AI-Powered Job Tracker',
    desc: 'Track applications with AI. Build a system that helps you follow up, analyze patterns, and improve your strategy.',
    tag: 'Organization',
    href: '/guides/ai-job-tracker',
    ready: true
  },
  {
    title: 'Build a Freelance Portfolio with AI',
    desc: 'Create impressive portfolio projects without client work. Generate ideas, create spec work, and write compelling case studies.',
    tag: 'Portfolio',
    href: '/guides/ai-freelance-portfolio',
    ready: true
  },
  {
    title: 'Build a Killer Portfolio with AI',
    desc: 'Use AI to build portfolio projects fast. Generate ideas, scaffold projects, create case studies, and stand out.',
    tag: 'Portfolio',
    href: '/guides/ai-portfolio-building',
    ready: true
  },
  {
    title: 'AI Interview Follow-Ups and Thank You Notes',
    desc: 'Write memorable thank you emails that actually get responses. Prompts and templates for panel interviews and recovery.',
    tag: 'Interview',
    href: '/guides/ai-interview-followup',
    ready: true
  },
  {
    title: 'Research Companies with AI Before Interviews',
    desc: '20 minutes of AI research beats 90% of candidates. Prompts for company deep dives, Glassdoor analysis, interviewer prep.',
    tag: 'Interview',
    href: '/guides/ai-company-research',
    ready: true
  },
  {
    title: 'Build Your Personal Brand with AI',
    desc: 'Use AI to build a standout professional brand. Optimize LinkedIn, create content, and get found by recruiters.',
    tag: 'Personal Branding',
    href: '/guides/ai-personal-branding',
    ready: true
  },
  {
    title: 'AI Career Pivot: Switch Industries with AI',
    desc: 'Use AI to identify transferable skills, fill knowledge gaps fast, and rewrite your narrative for a successful career change.',
    tag: 'Career Change',
    href: '/guides/ai-career-pivot',
    ready: true
  },
  {
    title: 'Finding Remote Jobs with AI',
    desc: 'Find hidden remote jobs, tailor applications at scale, and prove your remote readiness. Beat global competition.',
    tag: 'Remote Work',
    href: '/guides/remote-job-search-ai',
    ready: true
  },
  {
    title: 'AI Skills Gap Analysis',
    desc: 'Identify exactly what skills you need for your target job, prioritize what to learn, and close gaps quickly.',
    tag: 'Skills',
    href: '/guides/ai-skills-gap-analysis',
    ready: true
  },
  {
    title: 'How to Land a Remote Job Using AI in 2026',
    desc: 'Beat the competition for remote jobs with AI tools. Smart job search, tailored applications, and interview prep.',
    tag: 'Remote Work',
    href: '/guides/remote-job-ai-guide',
    ready: true
  },
  {
    title: 'ChatGPT Resume Prompts That Actually Work',
    desc: 'Copy-paste prompts to improve your resume with AI. Tested and refined prompts for real results.',
    tag: 'Resume',
    href: '/guides/chatgpt-resume-prompts',
    ready: true
  },
  {
    title: 'ATS Resume Optimization: Beat the Bots',
    desc: '75% of resumes get filtered by ATS. Learn how to optimize keywords, formatting, and pass the bots.',
    tag: 'Resume',
    href: '/guides/ats-resume-optimization',
    ready: true
  },
  {
    title: 'AI Cover Letter Generator Guide',
    desc: 'Generate personalized cover letters in minutes, not hours. Best tools and prompts.',
    tag: 'Cover Letter',
    href: '/guides/ai-cover-letter-generator',
    ready: true
  },
  {
    title: 'AI Interview Prep Guide',
    desc: 'Practice with AI before your real interview. Generate questions, build STAR answers, role-play.',
    tag: 'Interview',
    href: '/guides/ai-interview-prep',
    ready: true
  },
  {
    title: 'AI Salary Negotiation Scripts',
    desc: 'Research market rates, generate negotiation scripts, prepare for objections. Get the salary you deserve.',
    tag: 'Salary',
    href: '/guides/ai-salary-negotiation',
    ready: true
  },
  {
    title: 'AI Networking Emails That Get Responses',
    desc: 'Templates and prompts for cold outreach, follow-ups, and intro requests. High-volume personalization.',
    tag: 'Networking',
    href: '/guides/ai-networking-emails',
    ready: true
  },
  {
    title: 'Best AI Resume Builders 2026',
    desc: 'Honest reviews of every major AI resume builder. Teal for free, Rezi if you pay.',
    tag: 'Tools',
    href: '/guides/best-ai-resume-builders-2026',
    ready: true
  },
  {
    title: 'LinkedIn Optimization with AI',
    desc: 'Use AI to optimize your LinkedIn profile and get found by recruiters. Keywords, headline, About section.',
    tag: 'LinkedIn',
    href: '/guides/linkedin-ai-optimization',
    ready: true
  },
  {
    title: 'Job Search Automation with AI',
    desc: 'Automate job applications and tracking with AI assistants.',
    tag: 'Automation',
    href: '/guides/job-search-automation',
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

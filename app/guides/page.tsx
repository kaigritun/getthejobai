'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'

const guides = [
  { title: '50 ChatGPT Interview Prompts', desc: 'Copy-paste prompts to practice interview answers. Behavioral questions, salary negotiation, and mock interview scripts.', tag: 'Interview', href: '/guides/chatgpt-interview-prompts' },
  { title: 'ChatGPT Thank You Email After Interview', desc: 'Write perfect interview thank you emails with ChatGPT. Copy-paste prompts, real examples, and timing tips.', tag: 'Interview', href: '/guides/chatgpt-thank-you-email' },
  { title: '15 Free AI Tools for Job Search', desc: 'The best free AI tools for job searching — resume builders, interview prep, and application automation.', tag: 'Tools', href: '/guides/free-ai-job-search-tools' },
  { title: 'ChatGPT for Career Advice', desc: 'Get personalized career guidance from ChatGPT. Prompts for career pivots, salary negotiation, and skill development.', tag: 'Career', href: '/guides/chatgpt-career-advice' },
  { title: 'Best AI Resume Tools 2026', desc: 'Tested 12 AI resume tools. Compare Teal, Rezi, Kickresume, ChatGPT and more.', tag: 'Tools', href: '/guides/best-ai-resume-tools-2026' },
  { title: 'AI Resume for Software Engineers', desc: 'Use AI to build a software engineer resume that beats ATS. Prompts for bullet points, tech skills, and projects.', tag: 'Resume', href: '/guides/ai-resume-software-engineer' },
  { title: 'AI Resume for Healthcare Professionals', desc: 'Build a healthcare resume with AI. Prompts for certifications, clinical experience, and specialty-specific tips.', tag: 'Resume', href: '/guides/ai-resume-healthcare' },
  { title: 'ChatGPT LinkedIn Profile Optimization', desc: 'Use ChatGPT prompts to optimize your headline, about section, and experience bullets.', tag: 'LinkedIn', href: '/guides/chatgpt-linkedin-profile' },
  { title: 'ChatGPT Interview Preparation', desc: 'Use ChatGPT for interview prep: analyze job descriptions, prepare STAR stories, practice questions.', tag: 'Interview', href: '/guides/chatgpt-interview-preparation' },
  { title: 'AI LinkedIn Optimization Guide', desc: 'Use AI to optimize your LinkedIn profile, write engaging posts, and get found by recruiters.', tag: 'LinkedIn', href: '/guides/ai-linkedin-optimization' },
  { title: 'AI Job Search Tools: Complete Guide', desc: 'Comprehensive guide to AI tools for job searching. Compare resume builders, job boards, and interview prep.', tag: 'Tools', href: '/guides/ai-job-search-tools' },
  { title: 'AI Interview Preparation', desc: 'Use AI to prepare for interviews. Mock interviews with ChatGPT, company research, answer preparation.', tag: 'Interview', href: '/guides/ai-interview-preparation' },
  { title: 'AI Job Application Tracking', desc: 'Automate tracking, follow-ups, and organization so you never lose track of opportunities.', tag: 'Organization', href: '/guides/ai-job-application-tracking' },
  { title: 'AI Job Market Research', desc: 'Research job markets 10x faster with AI. Target the right companies, understand trends.', tag: 'Research', href: '/guides/ai-job-market-research' },
  { title: 'ChatGPT LinkedIn Outreach', desc: 'AI-powered LinkedIn outreach that gets responses. Prompts for connecting with hiring managers.', tag: 'Networking', href: '/guides/chatgpt-linkedin-outreach' },
  { title: 'AI-Powered Job Tracker', desc: 'Track applications with AI. Build a system that helps you follow up and analyze patterns.', tag: 'Organization', href: '/guides/ai-job-tracker' },
  { title: 'AI Freelance Portfolio', desc: 'Create impressive portfolio projects without client work. Generate ideas and write case studies.', tag: 'Portfolio', href: '/guides/ai-freelance-portfolio' },
  { title: 'Build a Portfolio with AI', desc: 'Use AI to build portfolio projects fast. Generate ideas, scaffold projects, create case studies.', tag: 'Portfolio', href: '/guides/ai-portfolio-building' },
  { title: 'AI Interview Follow-Ups', desc: 'Write memorable thank you emails that actually get responses. Templates for panel interviews.', tag: 'Interview', href: '/guides/ai-interview-followup' },
  { title: 'AI Company Research', desc: '20 minutes of AI research beats 90% of candidates. Prompts for company deep dives.', tag: 'Interview', href: '/guides/ai-company-research' },
  { title: 'AI Personal Branding', desc: 'Use AI to build a standout professional brand. Optimize LinkedIn and create content.', tag: 'Personal Brand', href: '/guides/ai-personal-branding' },
  { title: 'AI Career Pivot Guide', desc: 'Use AI to identify transferable skills, fill knowledge gaps, and rewrite your narrative.', tag: 'Career', href: '/guides/ai-career-pivot' },
  { title: 'Finding Remote Jobs with AI', desc: 'Find hidden remote jobs, tailor applications at scale, and prove your remote readiness.', tag: 'Remote', href: '/guides/remote-job-search-ai' },
  { title: 'AI Skills Gap Analysis', desc: 'Identify exactly what skills you need for your target job and close gaps quickly.', tag: 'Skills', href: '/guides/ai-skills-gap-analysis' },
  { title: 'Land a Remote Job with AI', desc: 'Beat the competition for remote jobs with AI tools. Smart job search and tailored applications.', tag: 'Remote', href: '/guides/remote-job-ai-guide' },
  { title: 'ChatGPT Resume Prompts', desc: 'Copy-paste prompts to improve your resume with AI. Tested and refined prompts for real results.', tag: 'Resume', href: '/guides/chatgpt-resume-prompts' },
  { title: 'ATS Resume Optimization', desc: '75% of resumes get filtered by ATS. Learn how to optimize keywords and formatting.', tag: 'Resume', href: '/guides/ats-resume-optimization' },
  { title: 'AI Cover Letter Generator', desc: 'Generate personalized cover letters in minutes, not hours. Best tools and prompts.', tag: 'Cover Letter', href: '/guides/ai-cover-letter-generator' },
  { title: 'AI Interview Prep', desc: 'Practice with AI before your real interview. Generate questions, build STAR answers.', tag: 'Interview', href: '/guides/ai-interview-prep' },
  { title: 'AI Salary Negotiation', desc: 'Research market rates, generate negotiation scripts, prepare for objections.', tag: 'Salary', href: '/guides/ai-salary-negotiation' },
  { title: 'AI Networking Emails', desc: 'Templates and prompts for cold outreach, follow-ups, and intro requests.', tag: 'Networking', href: '/guides/ai-networking-emails' },
  { title: 'Best AI Resume Builders 2026', desc: 'Honest reviews of every major AI resume builder. Teal for free, Rezi if you pay.', tag: 'Tools', href: '/guides/best-ai-resume-builders-2026' },
  { title: 'LinkedIn AI Optimization', desc: 'Use AI to optimize your LinkedIn profile and get found by recruiters.', tag: 'LinkedIn', href: '/guides/linkedin-ai-optimization' },
  { title: 'AI Networking Tips', desc: 'Build your professional network with AI-powered outreach and relationship management.', tag: 'Networking', href: '/guides/ai-networking-tips' },
  { title: 'Executive Job Search with AI', desc: 'AI strategies for senior and executive-level job searches. Board positioning and C-suite networking.', tag: 'Career', href: '/guides/ai-executive-job-search' },
  { title: 'AI Job Alerts Setup', desc: 'Set up smart job alerts that actually find relevant opportunities using AI filtering.', tag: 'Tools', href: '/guides/ai-job-alerts' },
  { title: 'AI Mock Interview Guide', desc: 'Practice interviews with AI. Get feedback on your answers and improve your delivery.', tag: 'Interview', href: '/guides/ai-mock-interview' },
  { title: 'GitHub Profile Optimization', desc: 'Use AI to optimize your GitHub profile for recruiters and hiring managers.', tag: 'Portfolio', href: '/guides/ai-github-profile-optimization' },
]

const categories = ['All', 'Resume', 'Interview', 'LinkedIn', 'Tools', 'Career', 'Networking', 'Cover Letter', 'Remote', 'Portfolio', 'Organization']

export default function GuidesPage() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filteredGuides = useMemo(() => {
    return guides.filter(guide => {
      const matchesSearch = search === '' || 
        guide.title.toLowerCase().includes(search.toLowerCase()) ||
        guide.desc.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || guide.tag === category
      return matchesSearch && matchesCategory
    })
  }, [search, category])

  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <div className="max-w-2xl mb-12">
        <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
          {guides.length} Guides
        </p>
        <h1 className="text-4xl font-bold mb-6">
          AI Job Search Guides
        </h1>
        <p className="text-xl text-white/60 leading-relaxed">
          Practical guides with copy-paste prompts and real examples.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search guides..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-emerald-500/50 transition-colors"
        />
      </div>

      {/* Category filters */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${
              category === cat
                ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                : 'border-white/20 text-white/60 hover:border-white/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results count */}
      {(search || category !== 'All') && (
        <p className="text-white/40 text-sm mb-6">
          {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} found
        </p>
      )}

      {/* Guides grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGuides.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="border border-white/10 rounded-lg p-5 hover:border-emerald-500/50 hover:bg-white/[0.02] transition-colors group"
          >
            <span className="text-xs font-mono text-emerald-400 uppercase">
              {guide.tag}
            </span>
            <h2 className="font-medium text-lg mt-2 mb-2 group-hover:text-emerald-400 transition-colors">
              {guide.title}
            </h2>
            <p className="text-white/50 text-sm line-clamp-2">{guide.desc}</p>
          </Link>
        ))}
      </div>

      {filteredGuides.length === 0 && (
        <div className="text-center py-16 text-white/40">
          <p className="text-lg mb-2">No guides found</p>
          <p className="text-sm">Try a different search or category</p>
        </div>
      )}
    </main>
  )
}

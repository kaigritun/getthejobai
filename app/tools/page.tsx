'use client'

import Link from 'next/link'
import { useState } from 'react'

const tools = {
  'Resume Builders': [
    {
      name: 'Rezi',
      rating: 4.7,
      pricing: { free: 'Limited', pro: '$29/mo' },
      features: ['AI writing assistant', 'ATS optimization', '25+ templates', 'Keyword targeting', 'Cover letter builder'],
      limits: 'Free: 1 resume, 3 downloads',
      pros: ['Best ATS optimization', 'AI bullet point generator', 'Keyword analysis'],
      cons: ['Expensive monthly plan', 'Templates less modern'],
      bestFor: 'Job seekers applying to large companies with strict ATS systems',
      url: 'https://www.rezi.ai/',
      recommended: true,
    },
    {
      name: 'Teal',
      rating: 4.6,
      pricing: { free: 'Generous', pro: '$29/mo' },
      features: ['Resume builder', 'Job tracker', 'AI matching', 'Chrome extension', 'Skill analysis'],
      limits: 'Free: Unlimited resumes, watermarks on export',
      pros: ['Excellent free tier', 'Job tracking built-in', 'Easy to use'],
      cons: ['AI features require premium', 'Fewer templates'],
      bestFor: 'Budget-conscious job seekers who want resume + job tracking',
      url: 'https://www.tealhq.com/',
      recommended: true,
    },
    {
      name: 'Resume.io',
      rating: 4.4,
      pricing: { free: 'Trial only', pro: '$25/mo' },
      features: ['30+ templates', 'AI suggestions', 'Cover letters', 'Multiple formats', 'ATS-friendly'],
      limits: 'Free trial: 7 days, then paid',
      pros: ['Beautiful templates', 'Easy interface', 'Multiple export formats'],
      cons: ['No real free tier', 'AI features basic'],
      bestFor: 'Those wanting polished, designer-quality resume templates',
      url: 'https://resume.io/',
      recommended: false,
    },
    {
      name: 'Kickresume',
      rating: 4.3,
      pricing: { free: 'Limited', pro: '$19/mo' },
      features: ['AI writer', '40+ templates', 'Website builder', 'Cover letters', 'Resume checker'],
      limits: 'Free: 1 resume, basic templates',
      pros: ['Most affordable premium', 'Portfolio website included', 'Modern designs'],
      cons: ['AI less sophisticated', 'Limited free features'],
      bestFor: 'Creatives who want resume + portfolio site combo',
      url: 'https://www.kickresume.com/',
      recommended: false,
    },
    {
      name: 'Zety',
      rating: 4.2,
      pricing: { free: 'Build only', pro: '$24/mo' },
      features: ['20+ templates', 'Content suggestions', 'Expert tips', 'Cover letters', 'ATS-tested'],
      limits: 'Free: Build resume, pay to download',
      pros: ['Professional templates', 'Guided builder', 'Lots of examples'],
      cons: ['Must pay to download', 'Pushy upsells'],
      bestFor: 'First-time resume writers who need step-by-step guidance',
      url: 'https://zety.com/',
      recommended: false,
    },
  ],
  'Interview Prep': [
    {
      name: 'Interview Warmup',
      rating: 4.8,
      pricing: { free: 'Completely free', pro: 'N/A' },
      features: ['Voice practice', 'AI feedback', 'Industry-specific', 'Talking points analysis', 'Job-related questions'],
      limits: 'None - fully free by Google',
      pros: ['100% free', 'Real-time feedback', 'Google-backed quality'],
      cons: ['Limited customization', 'No video practice'],
      bestFor: 'Anyone wanting free, quality interview practice',
      url: 'https://grow.google/certificates/interview-warmup/',
      recommended: true,
    },
    {
      name: 'Yoodli AI',
      rating: 4.5,
      pricing: { free: 'Limited', pro: '$15/mo' },
      features: ['Video practice', 'Filler word detection', 'Pace analysis', 'Eye contact tracking', 'Custom questions'],
      limits: 'Free: 3 sessions/month',
      pros: ['Video analysis', 'Detailed metrics', 'Speech coaching'],
      cons: ['Limited free sessions', 'Camera required'],
      bestFor: 'Those wanting to improve speaking delivery and confidence',
      url: 'https://yoodli.ai/',
      recommended: true,
    },
    {
      name: 'Big Interview',
      rating: 4.3,
      pricing: { free: 'Trial only', pro: '$79/mo' },
      features: ['Mock interviews', 'Video recording', 'Expert feedback', 'Industry questions', 'STAR method training'],
      limits: 'Free trial: Limited access',
      pros: ['Comprehensive training', 'Expert-designed curriculum', 'Company-specific prep'],
      cons: ['Expensive', 'No free tier'],
      bestFor: 'Serious candidates preparing for high-stakes interviews',
      url: 'https://biginterview.com/',
      recommended: false,
    },
  ],
  'ATS Optimization': [
    {
      name: 'Jobscan',
      rating: 4.6,
      pricing: { free: 'Limited scans', pro: '$50/mo' },
      features: ['Resume scanning', 'ATS match rate', 'LinkedIn optimization', 'Cover letter scan', 'Keyword analysis'],
      limits: 'Free: 5 scans/month',
      pros: ['Industry standard', 'Detailed reports', 'LinkedIn integration'],
      cons: ['Limited free scans', 'Expensive premium'],
      bestFor: 'Heavy applicants targeting ATS-heavy companies',
      url: 'https://www.jobscan.co/',
      recommended: true,
    },
    {
      name: 'Resume Worded',
      rating: 4.5,
      pricing: { free: 'Basic score', pro: '$19/mo' },
      features: ['Resume scoring', 'Line-by-line feedback', 'LinkedIn review', 'Sample bullets', 'Targeted feedback'],
      limits: 'Free: Basic score only',
      pros: ['Affordable premium', 'Actionable feedback', 'LinkedIn tools'],
      cons: ['Full features need premium', 'Scores can be discouraging'],
      bestFor: 'Job seekers wanting detailed resume feedback on a budget',
      url: 'https://resumeworded.com/',
      recommended: true,
    },
    {
      name: 'SkillSyncer',
      rating: 4.2,
      pricing: { free: 'Limited', pro: '$30/mo' },
      features: ['ATS comparison', 'Skill matching', 'Resume builder', 'Cover letter AI', 'Job matching'],
      limits: 'Free: 2 comparisons/month',
      pros: ['Resume builder included', 'Good skill matching', 'Clean interface'],
      cons: ['Less established', 'Fewer integrations'],
      bestFor: 'Career changers who need skill gap analysis',
      url: 'https://skillsyncer.com/',
      recommended: false,
    },
  ],
  'Job Boards': [
    {
      name: 'LinkedIn Premium',
      rating: 4.4,
      pricing: { free: 'Basic features', pro: '$30/mo' },
      features: ['InMail credits', 'Profile views', 'Applicant insights', 'AI writing tools', 'Learning courses'],
      limits: 'Free: Basic job search, no InMails',
      pros: ['Largest professional network', 'AI writing assistance', 'See who viewed you'],
      cons: ['Expensive', 'Many features underused'],
      bestFor: 'Professionals wanting to leverage their network',
      url: 'https://www.linkedin.com/premium/',
      recommended: true,
    },
    {
      name: 'Indeed',
      rating: 4.3,
      pricing: { free: 'Full access', pro: 'N/A' },
      features: ['Largest job database', 'Easy apply', 'Resume upload', 'Salary insights', 'Company reviews'],
      limits: 'None - free for job seekers',
      pros: ['Completely free', 'Most job listings', 'Mobile app'],
      cons: ['Lots of spam postings', 'Basic AI features'],
      bestFor: 'Volume applicants wanting maximum job exposure',
      url: 'https://www.indeed.com/',
      recommended: true,
    },
    {
      name: 'ZipRecruiter',
      rating: 4.1,
      pricing: { free: 'Full access', pro: 'N/A' },
      features: ['AI job matching', 'One-click apply', 'Recruiter outreach', 'Salary estimates', 'Job alerts'],
      limits: 'None - free for job seekers',
      pros: ['Great AI matching', 'Recruiters reach out to you', 'Good mobile app'],
      cons: ['Fewer listings than Indeed', 'Some low-quality matches'],
      bestFor: 'Passive job seekers who want recruiters to find them',
      url: 'https://www.ziprecruiter.com/',
      recommended: false,
    },
  ],
}

const categories = ['All', ...Object.keys(tools)]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.floor(rating) ? 'text-yellow-400' : star - 0.5 <= rating ? 'text-yellow-400/50' : 'text-white/20'}
        >
          ★
        </span>
      ))}
      <span className="text-sm text-white/60 ml-1">{rating}</span>
    </div>
  )
}

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedTool, setExpandedTool] = useState<string | null>(null)

  const filteredCategories = activeCategory === 'All' 
    ? Object.entries(tools) 
    : Object.entries(tools).filter(([cat]) => cat === activeCategory)

  return (
    <>
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-16">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Tools Comparison
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Best AI Tools for Job Seekers 2026
          </h1>
          <p className="text-xl text-white/60 leading-relaxed">
            Comprehensive comparison of AI job search tools. Pricing, features, 
            pros & cons — everything you need to make the right choice.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 flex-wrap mb-12 sticky top-0 bg-[#0c0c0c] py-4 z-10">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-mono px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                  : 'border-white/20 text-white/60 hover:border-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools by Category */}
        {filteredCategories.map(([category, categoryTools]) => (
          <section key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-2">{category}</h2>
            <p className="text-white/50 mb-8">
              {category === 'Resume Builders' && 'AI-powered tools to create professional, ATS-optimized resumes'}
              {category === 'Interview Prep' && 'Practice and prepare for interviews with AI coaching'}
              {category === 'ATS Optimization' && 'Scan and optimize your resume for applicant tracking systems'}
              {category === 'Job Boards' && 'Find opportunities with AI-powered job matching'}
            </p>

            {/* Comparison Table - Desktop */}
            <div className="hidden lg:block overflow-x-auto mb-8">
              <table className="w-full border border-white/10 rounded-lg overflow-hidden">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 font-medium">Tool</th>
                    <th className="text-left p-4 font-medium">Rating</th>
                    <th className="text-left p-4 font-medium">Free Tier</th>
                    <th className="text-left p-4 font-medium">Pro Price</th>
                    <th className="text-left p-4 font-medium">Best For</th>
                    <th className="text-center p-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryTools.map((tool) => (
                    <tr key={tool.name} className={`border-t border-white/10 ${tool.recommended ? 'bg-emerald-500/5' : ''}`}>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{tool.name}</span>
                          {tool.recommended && (
                            <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">
                              Recommended
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="p-4"><StarRating rating={tool.rating} /></td>
                      <td className="p-4 text-sm text-white/70">{tool.pricing.free}</td>
                      <td className="p-4 text-sm font-mono text-emerald-400">{tool.pricing.pro}</td>
                      <td className="p-4 text-sm text-white/60 max-w-xs">{tool.bestFor}</td>
                      <td className="p-4 text-center">
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-black text-sm font-medium px-4 py-2 rounded transition-colors"
                        >
                          Try Free →
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards - All Screens */}
            <div className="grid gap-4">
              {categoryTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`border rounded-xl overflow-hidden transition-all ${
                    tool.recommended 
                      ? 'border-emerald-500/30 bg-emerald-500/5' 
                      : 'border-white/10'
                  }`}
                >
                  {/* Card Header */}
                  <div 
                    className="p-5 cursor-pointer hover:bg-white/5 transition-colors"
                    onClick={() => setExpandedTool(expandedTool === tool.name ? null : tool.name)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          {tool.recommended && (
                            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/20 px-2 py-1 rounded-full uppercase">
                              ★ Recommended
                            </span>
                          )}
                          <StarRating rating={tool.rating} />
                        </div>
                        <h3 className="font-semibold text-xl mb-1">{tool.name}</h3>
                        <p className="text-white/50 text-sm">{tool.bestFor}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-emerald-400 font-mono font-medium">{tool.pricing.pro}</div>
                        <div className="text-xs text-white/40">Free: {tool.pricing.free}</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-white/40">
                        {expandedTool === tool.name ? 'Click to collapse' : 'Click for details'}
                      </span>
                      <span className={`transition-transform ${expandedTool === tool.name ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedTool === tool.name && (
                    <div className="border-t border-white/10 p-5 bg-black/20">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Features */}
                        <div>
                          <h4 className="font-medium text-emerald-400 mb-3 text-sm uppercase tracking-wider">Key Features</h4>
                          <ul className="space-y-2">
                            {tool.features.map((feature) => (
                              <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-emerald-400">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Limits */}
                        <div>
                          <h4 className="font-medium text-emerald-400 mb-3 text-sm uppercase tracking-wider">Free Tier Limits</h4>
                          <p className="text-sm text-white/70 mb-4">{tool.limits}</p>
                          
                          <h4 className="font-medium text-emerald-400 mb-3 text-sm uppercase tracking-wider">Pricing</h4>
                          <div className="flex gap-4 text-sm">
                            <div className="bg-white/5 rounded px-3 py-2">
                              <span className="text-white/50">Free:</span> <span className="text-white">{tool.pricing.free}</span>
                            </div>
                            <div className="bg-emerald-500/10 rounded px-3 py-2">
                              <span className="text-white/50">Pro:</span> <span className="text-emerald-400 font-mono">{tool.pricing.pro}</span>
                            </div>
                          </div>
                        </div>

                        {/* Pros */}
                        <div>
                          <h4 className="font-medium text-green-400 mb-3 text-sm uppercase tracking-wider">Pros</h4>
                          <ul className="space-y-2">
                            {tool.pros.map((pro) => (
                              <li key={pro} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-green-400">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4 className="font-medium text-red-400 mb-3 text-sm uppercase tracking-wider">Cons</h4>
                          <ul className="space-y-2">
                            {tool.cons.map((con) => (
                              <li key={con} className="flex items-center gap-2 text-sm text-white/70">
                                <span className="text-red-400">−</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-white/50">
                          <strong className="text-white">Best for:</strong> {tool.bestFor}
                        </p>
                        <a
                          href={tool.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto text-center bg-emerald-500 hover:bg-emerald-400 text-black font-medium px-6 py-3 rounded-lg transition-colors"
                        >
                          Try {tool.name} Free →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Quick Recommendations */}
        <section className="mt-16 border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold mb-8">Quick Recommendations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-emerald-400">🎯 Best Free Combo</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Teal</strong> (resume + tracking) + 
                <strong className="text-white"> Interview Warmup</strong> (practice) + 
                <strong className="text-white"> Indeed</strong> (job search)
              </p>
              <p className="text-xs text-white/40">Total cost: $0</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-emerald-400">💼 Best Premium Stack</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Rezi</strong> ($29) + 
                <strong className="text-white"> Jobscan</strong> ($50) + 
                <strong className="text-white"> LinkedIn Premium</strong> ($30)
              </p>
              <p className="text-xs text-white/40">Total cost: ~$109/month (cancel after landing job)</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-emerald-400">🚀 Career Changers</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Resume Worded</strong> (feedback) + 
                <strong className="text-white"> Teal</strong> (multiple resume versions) + 
                <strong className="text-white"> Yoodli</strong> (confidence building)
              </p>
              <p className="text-xs text-white/40">Focus on transferable skills</p>
            </div>
            <div className="border border-white/10 rounded-lg p-6">
              <h3 className="font-semibold mb-3 text-emerald-400">⏰ Last-Minute Prep</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                <strong className="text-white">Interview Warmup</strong> (free, instant) + 
                our <Link href="/prompts" className="text-emerald-400 hover:underline">ChatGPT prompts</Link> (free)
              </p>
              <p className="text-xs text-white/40">Get ready in under an hour</p>
            </div>
          </div>
        </section>

        {/* How to Choose */}
        <section className="mt-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-6">
          <h3 className="font-semibold mb-2">💡 Pro Tip: Start Free</h3>
          <p className="text-white/70">
            Don&apos;t pay until you&apos;ve tried free versions. Most tools have generous free tiers 
            that work for 80% of users. Only upgrade if you&apos;re applying to 20+ jobs per week 
            or targeting competitive roles. Check our{' '}
            <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:text-emerald-300 underline">
              free ChatGPT prompts
            </Link>{' '}
            — they&apos;re often better than paid tools.
          </p>
        </section>
      </main>
    </>
  )
}
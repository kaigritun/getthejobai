import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://getthejobai.com'
  
  const pages = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/guides', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/tools', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/prompts', priority: 0.9, changeFrequency: 'weekly' as const },
    // Guides
    { path: '/guides/chatgpt-resume-prompts', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/best-ai-resume-builders-2026', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ats-resume-optimization', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-cover-letter-generator', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/linkedin-ai-optimization', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/chatgpt-linkedin-outreach', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-interview-prep', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-interview-followup', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-salary-negotiation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-career-pivot', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-skills-gap-analysis', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/job-search-automation', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-job-application-tracking', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-job-tracker', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-networking-emails', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-personal-branding', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-portfolio-building', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-freelance-portfolio', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-company-research', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-job-market-research', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/ai-executive-job-search', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/remote-job-search-ai', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/guides/remote-job-ai-guide', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}

import Link from 'next/link'

export const metadata = {
  title: 'AI Job Search Toolkit | Free Tools & Resources | GetTheJobAI',
  description: 'Free AI tools and resources for job seekers. Resume builders, interview prep, job search automation, and career planning tools.',
}

const toolCategories = [
  {
    title: 'Resume & Cover Letters',
    tools: [
      { name: 'ChatGPT Resume Prompts', href: '/guides/chatgpt-resume-prompts', description: 'Our collection of 50+ prompts to optimize your resume with AI.' },
      { name: 'AI Cover Letter Guide', href: '/guides/ai-cover-letter', description: 'Write compelling cover letters with AI assistance.' },
    ],
  },
  {
    title: 'Interview Preparation',
    tools: [
      { name: 'AI Interview Prep Guide', href: '/guides/ai-interview-preparation', description: 'Complete guide to using AI for interview practice.' },
      { name: 'Common Questions Prep', href: '/guides/ai-interview-questions', description: 'Prepare for common interview questions with AI.' },
    ],
  },
  {
    title: 'Job Search',
    tools: [
      { name: 'AI Job Search Tools Guide', href: '/guides/ai-job-search-tools', description: 'Overview of the best AI tools for finding jobs.' },
      { name: 'LinkedIn AI Features', href: '/guides/linkedin-ai-features', description: "How to use LinkedIn's AI tools effectively." },
    ],
  },
  {
    title: 'Career Planning',
    tools: [
      { name: 'Career Change Guide', href: '/guides/ai-career-change', description: 'Using AI to plan and execute a career transition.' },
      { name: 'Salary Negotiation', href: '/guides/ai-salary-negotiation', description: 'AI strategies for negotiating better compensation.' },
    ],
  },
]

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">← Back to Home</Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Job Search Toolkit</h1>
        <p className="text-xl text-gray-600 mb-12">Everything you need to land your next job with AI. Free tools, guides, and resources.</p>
        {toolCategories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
            <div className="grid gap-4">
              {category.tools.map((tool) => (
                <Link key={tool.name} href={tool.href} className="bg-white rounded-lg border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all block">
                  <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                  <p className="text-gray-600 text-sm">{tool.description}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}
        <section className="bg-blue-100 rounded-xl p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Resume Prompts PDF</h2>
          <p className="text-gray-700 mb-6">Get 50 ChatGPT prompts to transform your resume, plus weekly job search tips.</p>
          <Link href="/prompts" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block">View All Prompts</Link>
        </section>
      </div>
    </div>
  )
}

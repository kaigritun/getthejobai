import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Optimize Your LinkedIn Profile with ChatGPT | GetTheJobAI',
  description: 'Use ChatGPT to optimize your LinkedIn profile. Get prompts for headlines, About sections, experience bullets, and engagement strategies.',
  keywords: ['linkedin optimization', 'linkedin profile chatgpt', 'linkedin headline prompts', 'linkedin about section', 'ai linkedin profile'],
}

export default function LinkedInProfileOptimizationPage() {
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
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            LinkedIn Strategy
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Optimize Your LinkedIn Profile with ChatGPT
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is your digital resume that works 24/7. Use AI to make every section count.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Headline Formula</h2>
              <p className="text-white/70 mb-4">
                Your headline appears everywhere—search results, connection requests, comments. Make it count:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [your role] with [X years] experience in [industry]. I want to attract [recruiters/clients] for [target role] positions. Write 5 LinkedIn headlines that:
- Include relevant keywords for ATS
- Show my value proposition
- Fit under 120 characters`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">Why It Works</p>
                <p className="text-white/80 text-sm">LinkedIn&apos;s search algorithm weighs headlines heavily. Keywords here directly affect who finds you.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Optimize Your About Section</h2>
              <p className="text-white/70 mb-4">
                The About section is prime real estate. Most people waste it with generic statements.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [your role] that:
- Opens with a hook (not "I am a...")
- Includes keywords: [list your target keywords]
- Shows specific achievements with numbers
- Ends with a clear call-to-action
- Uses first person, conversational tone
- Is under 2600 characters`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience Section That Gets Results</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t just list duties. Show impact with achievement-focused bullets:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Transform this job description into achievement-focused bullet points:
[paste your job description]

Use the STAR format (Situation, Task, Action, Result). Include metrics where possible. Start each bullet with an action verb.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Skills Section Strategy</h2>
              <p className="text-white/70 mb-4">
                LinkedIn&apos;s skills section affects your search ranking. Here&apos;s how to optimize it:
              </p>
              <div className="space-y-3 text-white/70">
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold">1.</span>
                  <span>Research job postings for your target role</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold">2.</span>
                  <span>List the top 15 skills that appear most frequently</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold">3.</span>
                  <span>Ask ChatGPT: &quot;Rank these skills by demand for [role]: [list skills]&quot;</span>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="text-emerald-400 font-bold">4.</span>
                  <span>Reorder your skills to match demand</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Featured Section</h2>
              <p className="text-white/70 mb-4">
                Use this for social proof. Add:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Published articles or posts with high engagement
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Presentations or speaking clips
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Project portfolios
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Testimonials (screenshot DMs with permission)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Get More Profile Views</h2>
              <p className="text-white/70 mb-4">
                Weekly routine for visibility:
              </p>
              <div className="space-y-3 text-white/70 mb-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Comment on 5 posts from target companies</span>
                  <span className="text-emerald-400 font-semibold">Daily</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span>Publish 1 original post sharing an insight</span>
                  <span className="text-emerald-400 font-semibold">Weekly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Update headline with trending keywords</span>
                  <span className="text-emerald-400 font-semibold">Monthly</span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT FOR ENGAGEMENT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to comment on LinkedIn posts about [topic] to get noticed by [target audience]. Write 3 thoughtful comments (2-3 sentences each) that add value and invite further discussion.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-networking-emails" className="text-emerald-400 hover:underline">Write networking messages that get responses</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:underline">Optimize your resume with AI prompts</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get more LinkedIn optimization tips" />

        <RelatedGuides 
          guides={[
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Write cold outreach that actually gets responses' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Optimize your resume with AI' },
            { slug: 'ai-interview-preparation', title: 'AI Interview Preparation', description: 'Ace your next interview with AI coaching' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-12">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          <p>© 2026 GetTheJobAI. Land your dream job with AI.</p>
        </div>
      </footer>
    </div>
  )
}

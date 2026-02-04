import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI LinkedIn Optimization: Get Recruiters to Find You | GetTheJobAI',
  description: 'Use AI to optimize your LinkedIn profile for recruiter searches. Keyword research, headline formulas, and About section templates.',
  keywords: ['ai linkedin optimization', 'chatgpt linkedin', 'linkedin profile ai', 'linkedin seo', 'recruiter search optimization'],
}

export default function AILinkedInOptimizationPage() {
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
            Networking
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI LinkedIn Optimization: Get Recruiters to Actually Find You
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is a search engine. If it doesn&apos;t have the right keywords 
            in the right places, you&apos;re invisible to recruiters.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Keyword Research</h2>
              <p className="text-white/70 mb-4">
                Before touching your profile, figure out what recruiters search:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [YOUR ROLE] looking for [TARGET ROLE] jobs.
List the top 20 keywords recruiters search when hiring for this role.
Include:
- Job titles and variations
- Technical skills
- Soft skills that appear in job descriptions
- Industry-specific terms`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Headline Optimization</h2>
              <p className="text-white/70 mb-4">
                Your headline shows up everywhere. Default headline = wasted space.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headlines for a [YOUR ROLE] that:
1. Include primary keyword [TARGET ROLE]
2. Show specific value (metric if possible)
3. Are under 120 characters
4. Don't use buzzwords like "passionate" or "driven"

Current headline: [YOUR CURRENT HEADLINE]`}</p>
              </div>
              <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4 my-4">
                <p className="text-emerald-400 font-semibold mb-2">✓ Good Example</p>
                <p className="text-white/80">&quot;Product Manager | Shipped 3 apps to 1M+ users | B2B SaaS&quot;</p>
              </div>
              <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
                <p className="text-red-400 font-semibold mb-2">✗ Bad Example</p>
                <p className="text-white/80">&quot;Passionate professional seeking opportunities&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: About Section</h2>
              <p className="text-white/70 mb-4">
                This is your sales pitch. Most people waste it.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [YOUR ROLE] targeting [TARGET ROLE] jobs.

Include:
- Hook in first 2 lines (this shows before "see more")
- 3 key achievements with metrics
- Keywords naturally woven in
- Clear statement of what I'm looking for
- Call to action

My background: [BRIEF BACKGROUND]
Key achievements: [LIST 3-5]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Experience Bullets</h2>
              <p className="text-white/70 mb-4">
                Transform boring job descriptions into achievement stories:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these job responsibilities as achievement-focused bullets:
[PASTE YOUR CURRENT BULLETS]

Rules:
1. Start with action verb
2. Include metric or result
3. Keep under 2 lines each
4. Use keywords: [YOUR TARGET KEYWORDS]`}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                <div className="bg-red-400/10 border border-red-400/30 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2 text-sm">Before</p>
                  <p className="text-white/80 text-sm">&quot;Responsible for managing social media accounts&quot;</p>
                </div>
                <div className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2 text-sm">After</p>
                  <p className="text-white/80 text-sm">&quot;Grew Instagram engagement 340% in 6 months through data-driven content strategy&quot;</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Skills Audit</h2>
              <p className="text-white/70 mb-4">
                Clean up your skills section:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm targeting [ROLE] positions.
Review this skills list and:
1. Remove outdated/irrelevant skills
2. Suggest 10 skills I should add
3. Rank top 3 skills to pin (most searched by recruiters)

Current skills: [LIST YOUR SKILLS]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 6: Weekly Content</h2>
              <p className="text-white/70 mb-4">
                LinkedIn&apos;s algorithm favors active profiles:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 5 LinkedIn post ideas for a [YOUR ROLE] that:
1. Show expertise without bragging
2. Could start conversations
3. Are under 150 words
4. Don't include cringe engagement bait`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">AI-Assisted Networking</h2>
              <p className="text-white/70 mb-4">
                Connection requests that actually get accepted:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request to [PERSON'S ROLE] at [COMPANY].
Context: [Why you want to connect]
Keep it under 200 characters.
No "I'd love to pick your brain" or "I came across your profile."`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Algorithm Cheat Sheet</h2>
              <p className="text-white/70 mb-4">
                What helps LinkedIn show your profile:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Complete profile</strong> (100%)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Keywords</strong> in headline, about, experience</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Weekly activity</strong> (posts, comments)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Profile views</strong> (engage with others = they view you back)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong>Skill endorsements</strong></span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:underline">Optimize your resume next</Link>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <Link href="/guides/ai-networking-emails" className="text-emerald-400 hover:underline">AI Networking Email Templates</Link>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Optimize your resume with AI-powered prompts' },
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Write networking emails that get responses' },
            { slug: 'chatgpt-cover-letter-prompts', title: 'Cover Letter Prompts', description: 'Generate cover letters that get interviews' },
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

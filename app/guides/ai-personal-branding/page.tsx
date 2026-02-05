import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Build Your Personal Brand with AI in 2026 | GetTheJobAI',
  description: 'Use AI to build a standout professional brand. Optimize LinkedIn, create content, and get found by recruiters.',
  keywords: ['personal branding AI', 'linkedin optimization chatgpt', 'ai personal brand', 'professional brand AI'],
}

export default function AIPersonalBrandingPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose-custom">
          <p className="text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            Personal Branding
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Build Your Personal Brand with AI: Stand Out in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your resume is not enough. Recruiters Google you before they read your application. 
            AI makes building your brand 10x faster.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Personal Branding Matters</h2>
              <p className="text-white/70 mb-4">
                Studies show 70% of recruiters check candidates&apos; online presence. No presence = red flag. 
                Weak presence = forgettable. Strong presence = callbacks.
              </p>
              <p className="text-white/70">
                Personal branding isn&apos;t about being famous. It&apos;s about being findable and credible 
                when the right person searches for you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Define Your Professional Identity</h2>
              <p className="text-white/70 mb-4">
                Before posting anything, clarify: What problems do you solve? Who do you help? 
                What makes your approach unique?
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [your role] with experience in [your skills]. I've worked on [key achievements]. 

Help me articulate my unique professional value proposition in 2-3 sentences that would resonate with [target employer type].`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Optimize Your LinkedIn Headline and About</h2>
              <p className="text-white/70 mb-4">
                Your headline is prime real estate. Don&apos;t waste it on just your job title.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT - HEADLINE</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headline options for a [your role] who specializes in [your specialty] and wants to attract [recruiters/hiring managers] in the [industry] space. Keep each under 120 characters.`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT - ABOUT SECTION</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [role] with [X years] experience. Include:
- Hook in first 2 lines (they show above the fold)
- Key achievements with numbers
- What I'm looking for
- Call to action
Tone: professional but personable, not corporate robot`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Create Consistent Content</h2>
              <p className="text-white/70 mb-4">
                You don&apos;t need to post daily. 2-3 posts per week builds momentum.
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Lessons from recent projects</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Industry trends and your take</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Tips that helped you succeed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Questions that spark discussion</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Generate 10 LinkedIn post ideas for a [your role] who wants to demonstrate expertise in [topic]. Mix formats: some personal stories, some tips, some opinions on trends. Nothing generic.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Engage Strategically</h2>
              <p className="text-white/70 mb-4">
                Commenting on others&apos; posts is underrated. <strong className="text-white">3 thoughtful comments per day beats 1 mediocre post.</strong>
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to comment on this LinkedIn post about [topic]. The post says [brief summary]. 

Write a thoughtful comment that adds value (not just "great post!") and positions me as someone knowledgeable in [my area].`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Build a Simple Portfolio Site</h2>
              <p className="text-white/70 mb-4">
                Even a one-page site sets you apart. Use Notion, Carrd, or any simple builder.
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Brief bio</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Key projects/achievements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Links to LinkedIn and GitHub (if relevant)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Contact info</span>
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write concise copy for a portfolio website for a [role]. Include: hero section tagline, brief bio (100 words), 3 project descriptions (50 words each). Tone: confident, clear, no fluff.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools to Speed Up Your Brand Building</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">ChatGPT/Claude</strong> - Content ideation and editing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Canva AI</strong> - Graphics and banners</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Headshot Pro</strong> - Professional AI headshots</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Taplio</strong> - LinkedIn scheduling and analytics</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span><strong className="text-white">Copy.ai</strong> - Quick copy variations</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Being too generic</strong> - &ldquo;Passionate professional seeking opportunities&rdquo; says nothing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Inconsistent presence</strong> - Posting once then disappearing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">All about you</strong> - Share value, not just achievements</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Ignoring engagement</strong> - Post and ghost doesn&apos;t work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Waiting until desperate</strong> - Build your brand while employed</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The 30-Day Brand Building Sprint</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">Week 1</span>
                  <span>Profile optimization (headline, about, photo)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">Week 2</span>
                  <span>First 3 posts, start commenting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">Week 3</span>
                  <span>Expand network, join relevant conversations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">Week 4</span>
                  <span>Evaluate what resonated, double down</span>
                </li>
              </ul>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Start Now, Not Later</h2>
              <p className="text-white/70 mb-4">
                The best time to build your brand was before you needed a job. The second best time is now.
              </p>
              <p className="text-white/70">
                AI handles the grunt work—drafting, ideation, editing. You provide the authentic experiences 
                and insights that make your brand yours.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Start with the professional identity prompt. Once you can articulate your value, 
                everything else becomes easier.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/linkedin-ai-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn Optimization →
                </Link>
                <Link 
                  href="/guides/ai-networking-emails"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Networking Emails →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'linkedin-ai-optimization',
                              title: 'LinkedIn Optimization',
                              description: 'Your LinkedIn is central to your brand.'
                    },
                    {
                              slug: 'ai-portfolio-building',
                              title: 'AI Portfolio Building',
                              description: 'Showcase your work professionally.'
                    },
                    {
                              slug: 'ai-github-profile-optimization',
                              title: 'GitHub Profile Optimization',
                              description: 'Developers: optimize your GitHub presence.'
                    }
          ]} />
        </article>
    </div>
  )
}

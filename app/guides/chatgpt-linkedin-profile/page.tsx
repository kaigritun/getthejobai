import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Prompts for LinkedIn Profile Optimization | GetTheJobAI',
  description: 'Use ChatGPT to create a LinkedIn profile that gets recruiter attention. Copy-paste prompts for headlines, about sections, and more.',
  keywords: ['chatgpt linkedin profile', 'linkedin optimization', 'linkedin headline prompts', 'linkedin about section'],
}

export default function ChatGPTLinkedInProfilePage() {
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
            LinkedIn
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Prompts for LinkedIn Profile Optimization
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is a 24/7 salesperson. But most profiles read like boring resumes. 
            Here&apos;s how to use ChatGPT to create a profile that actually gets recruiters messaging you.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">The LinkedIn Profile Formula</h2>
              <p className="text-white/70 mb-4">A great LinkedIn profile needs:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  A headline that hooks (not just your job title)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  An &quot;About&quot; section that tells a story
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Experience bullets that show impact
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Skills that match what recruiters search for
                </li>
              </ul>
              <p className="text-white/70 mt-4">ChatGPT can help with all of these.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Headline Optimization</h2>
              <p className="text-white/70 mb-4">
                Your headline is prime real estate—120 characters that show up everywhere.
              </p>
              <div className="mb-4">
                <p className="text-red-400 text-sm mb-1">❌ Bad:</p>
                <p className="text-white/50">&quot;Marketing Manager at TechCorp&quot;</p>
              </div>
              <div className="mb-6">
                <p className="text-emerald-400 text-sm mb-1">✓ Good:</p>
                <p className="text-white/80">&quot;Marketing Manager | Grew B2B SaaS Revenue 3x | Demand Gen & Content Strategy&quot;</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headline options for a [YOUR ROLE] with experience in [KEY SKILLS]. Include results/numbers where possible. Keep each under 120 characters.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The &quot;About&quot; Section</h2>
              <p className="text-white/70 mb-4">
                This is where most profiles die. People either write nothing or paste their resume.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [ROLE] with [X] years of experience. My key achievements are:
- [Achievement 1]
- [Achievement 2]
- [Achievement 3]

Write in first person. Make it conversational but professional. Include what I'm looking for (open to [type of opportunities]). Keep it under 200 words.`}</p>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">About Section Framework</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">¶1:</span>
                  The hook (what you&apos;re known for)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">¶2:</span>
                  Your journey (brief)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">¶3:</span>
                  What drives you
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">¶4:</span>
                  What you&apos;re looking for
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience Bullets</h2>
              <p className="text-white/70 mb-4">
                Transform boring job descriptions into achievement statements.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these job responsibilities as LinkedIn achievement bullets with metrics:

Current: "Managed social media accounts"
Current: "Worked on email marketing campaigns"
Current: "Collaborated with sales team"

Make each bullet start with an action verb and include numbers/impact where possible.`}</p>
              </div>
              
              <div className="mb-4">
                <p className="text-red-400 text-sm mb-1">❌ Before:</p>
                <p className="text-white/50">&quot;Managed social media accounts&quot;</p>
              </div>
              <div>
                <p className="text-emerald-400 text-sm mb-1">✓ After:</p>
                <p className="text-white/80">&quot;Grew company LinkedIn following from 2K to 15K in 12 months through consistent thought leadership content, generating 50+ inbound leads monthly&quot;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Skills Section Optimization</h2>
              <p className="text-white/70 mb-4">
                LinkedIn&apos;s algorithm matches your skills to recruiter searches. The right skills = more visibility.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [YOUR ROLE]. What are the top 15 skills I should add to LinkedIn that recruiters search for? Order by search volume/importance.`}</p>
              </div>
              <p className="text-white/70">
                Then add all 50 skills LinkedIn allows. Yes, all 50. It increases discoverability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Section</h2>
              <p className="text-white/70 mb-4">
                Most people ignore this. Don&apos;t.
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  Your best LinkedIn post (shows thought leadership)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  A portfolio piece or case study
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  A link to your website
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  A presentation or video
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What should a [YOUR ROLE] include in their LinkedIn Featured section to attract [TARGET - recruiters/clients/etc]? Give me 5 specific ideas.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Outreach Test</h2>
              <p className="text-white/70 mb-4">
                After optimizing your profile, ask ChatGPT:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review this LinkedIn profile summary. If you were a recruiter looking for a [TARGET ROLE], would you reach out? What's missing? What's weak?

[Paste your About section]`}</p>
              </div>
              <p className="text-white/70 mt-4">
                The feedback is often brutally honest—exactly what you need.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Wins</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Custom URL</p>
                  <p className="text-white/60 text-sm">Change linkedin.com/in/random-numbers to linkedin.com/in/yourname</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Creator Mode</p>
                  <p className="text-white/60 text-sm">Turn it on if you post content (boosts visibility)</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Open to Work</p>
                  <p className="text-white/60 text-sm">Use the green banner if actively looking (yes, it works)</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <p className="text-emerald-400 font-semibold mb-2">Recommendations</p>
                  <p className="text-white/60 text-sm">Ask 3-5 colleagues. Social proof matters.</p>
                </div>
              </div>
            </section>

            <section className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                An optimized LinkedIn profile won&apos;t get you a job by itself. But it will:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Get you found in recruiter searches
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Make a strong first impression
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Support your applications with social proof
                </li>
              </ul>
              <p className="text-white/70">
                Spend 2 hours optimizing it once. Benefit for years. 
                ChatGPT gets you there in 30 minutes instead of 2 hours.
              </p>
            </section>

            <section className="bg-emerald-400/10 border border-emerald-400/30 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-emerald-400">Want More Prompts?</h2>
              <p className="text-white/70 mb-4">
                Get 50+ tested ChatGPT prompts for your entire job search — resumes, cover letters, 
                interviews, networking, and salary negotiation.
              </p>
              <Link 
                href="/prompts"
                className="inline-block bg-emerald-400 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-300 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-linkedin-outreach', title: 'ChatGPT LinkedIn Outreach', description: 'Connect with professionals using AI-crafted messages' },
            { slug: 'chatgpt-cover-letter', title: 'ChatGPT Cover Letters', description: 'Write compelling cover letters with AI' },
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Optimize your resume with AI assistance' },
          ]}
        />
    </div>
  )
}

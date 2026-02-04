import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Prompts for LinkedIn Profile Optimization (2026 Guide) | GetTheJobAI',
  description: 'Use ChatGPT to optimize your LinkedIn headline, about section, and experience bullets. Get found by recruiters with an AI-optimized profile.',
  keywords: ['chatgpt linkedin profile', 'linkedin optimization ai', 'chatgpt linkedin headline', 'ai linkedin profile', 'linkedin profile prompts'],
}

export default function ChatGPTLinkedInProfilePage() {
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
              <p className="text-white/70 mb-4">
                A great LinkedIn profile needs:
              </p>
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
              <p className="text-white/70 mt-4">
                ChatGPT can help with all of these.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Headline Optimization</h2>
              <p className="text-white/70 mb-4">
                Your headline is prime real estate—120 characters that show up everywhere.
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Bad:</strong> &quot;Marketing Manager at TechCorp&quot;</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Good:</strong> &quot;Marketing Manager | Grew B2B SaaS Revenue 3x | Demand Gen & Content Strategy&quot;</span>
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headline options for a [YOUR ROLE] with experience in [KEY SKILLS]. Include results/numbers where possible. Keep each under 120 characters.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The &quot;About&quot; Section</h2>
              <p className="text-white/70 mb-4">
                This is where most profiles die. People either write nothing or paste their resume.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [ROLE] with [X] years of experience. My key achievements are:
- [Achievement 1]
- [Achievement 2]
- [Achievement 3]

Write in first person. Make it conversational but professional. Include what I'm looking for (open to [type of opportunities]). Keep it under 200 words.`}</p>
              </div>
              <h3 className="text-xl font-semibold mb-3 mt-6">About Section Framework</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  The hook (what you&apos;re known for)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Your journey (brief)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  What drives you
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  What you&apos;re looking for
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Experience Bullets</h2>
              <p className="text-white/70 mb-4">
                Transform boring job descriptions into achievement statements.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these job responsibilities as LinkedIn achievement bullets with metrics:

Current: "Managed social media accounts"
Current: "Worked on email marketing campaigns"
Current: "Collaborated with sales team"

Make each bullet start with an action verb and include numbers/impact where possible.`}</p>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Before:</strong> &quot;Managed social media accounts&quot;</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">After:</strong> &quot;Grew company LinkedIn following from 2K to 15K in 12 months through consistent thought leadership content, generating 50+ inbound leads monthly&quot;</span>
                </div>
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
              <p className="text-white/50 text-sm">
                Then add all 50 skills LinkedIn allows. Yes, all 50. It increases discoverability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Featured Section</h2>
              <p className="text-white/70 mb-4">
                Most people ignore this. Don&apos;t.
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Your best LinkedIn post (shows thought leadership)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  A portfolio piece or case study
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  A link to your website
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  A presentation or video
                </li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What should a [YOUR ROLE] include in their LinkedIn Featured section to attract [TARGET - recruiters/clients/etc]? Give me 5 specific ideas.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Profile Photo and Banner</h2>
              <p className="text-white/70 mb-4">
                ChatGPT can&apos;t create images, but it can tell you what works:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What makes a good LinkedIn profile photo for a [YOUR INDUSTRY] professional? What should I avoid?`}</p>
              </div>
              <p className="text-white/70 mb-2">General rules:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Professional but approachable
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Face takes up 60%+ of frame
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Solid or simple background
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Good lighting (natural is best)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Outreach Test</h2>
              <p className="text-white/70 mb-4">
                After optimizing your profile, ask ChatGPT:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review this LinkedIn profile summary. If you were a recruiter looking for a [TARGET ROLE], would you reach out? What's missing? What's weak?

[Paste your About section]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                The feedback is often brutally honest—exactly what you need.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quick Wins</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">Custom URL:</strong> Change linkedin.com/in/random-numbers to linkedin.com/in/yourname</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Creator mode:</strong> Turn it on if you post content (boosts visibility)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Open to Work:</strong> Use the green banner if actively looking (yes, it works)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">Recommendations:</strong> Ask 3-5 colleagues. Social proof matters.</span>
                </li>
              </ul>
            </section>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold mb-3">LinkedIn Optimization Prompts Pack</h3>
              <p className="text-white/70 mb-4">
                Get 50+ prompts for every section of your LinkedIn profile—plus templates for 
                connection requests, InMails, and posts that get engagement.
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-emerald-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Bottom Line</h2>
              <p className="text-white/70 mb-4">
                An optimized LinkedIn profile won&apos;t get you a job by itself. But it will:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Get you found in recruiter searches
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Make a strong first impression
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Support your applications with social proof
                </li>
              </ul>
              <p className="text-white/70">
                Spend 2 hours optimizing it once. Benefit for years. ChatGPT gets you there in 30 minutes instead of 2 hours.
              </p>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get weekly AI job search tips" />

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume' },
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Write better networking outreach' },
            { slug: 'linkedin-ai-optimization', title: 'LinkedIn AI Optimization', description: 'Full LinkedIn optimization guide' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/40 text-sm">
        <p>© 2025 GetTheJobAI. All rights reserved.</p>
      </footer>
    </div>
  )
}

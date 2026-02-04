import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Write a Cover Letter with ChatGPT (2026 Guide) | GetTheJobAI',
  description: 'Use ChatGPT to write compelling cover letters in minutes. Free prompts, templates, and step-by-step guide to stand out from other applicants.',
  keywords: ['chatgpt cover letter', 'ai cover letter', 'cover letter prompts', 'chatgpt job application', 'write cover letter with ai'],
}

export default function ChatGPTCoverLetterPage() {
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
            Cover Letters
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Write a Cover Letter with ChatGPT
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your cover letter is often the first thing a hiring manager reads. Make it count—with AI assistance.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Use ChatGPT for Cover Letters?</h2>
              <p className="text-white/70 mb-4">
                A good cover letter needs to hit all four marks:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Hook the reader in the first sentence
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Connect your experience to the specific role
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Show personality without being unprofessional
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Be concise (under 300 words)
                </li>
              </ul>
              <p className="text-white/70 mt-4">
                Most people struggle with all four. ChatGPT excels at all four.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Best ChatGPT Prompt for Cover Letters</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s the prompt I use to generate high-quality cover letters:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a cover letter for [JOB TITLE] at [COMPANY]. 

My relevant experience:
- [Achievement 1 with numbers]
- [Achievement 2 with numbers]
- [Skill that matches job description]

The job description mentions: [paste key requirements]

Write in a confident but conversational tone. Keep it under 250 words. Start with a hook that shows I understand their business challenge.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step-by-Step Process</h2>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">1. Extract Key Requirements</h3>
              <p className="text-white/70 mb-4">
                Before prompting ChatGPT, highlight 3-5 must-have skills from the job description. These become your talking points.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">2. Quantify Your Achievements</h3>
              <p className="text-white/70 mb-4">
                &quot;Managed social media&quot; is weak. &quot;Grew Instagram following from 5K to 50K in 8 months&quot; is strong. ChatGPT can only work with what you give it.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">3. Research the Company</h3>
              <p className="text-white/70 mb-4">
                Mention something specific: a recent product launch, their mission statement, or a challenge in their industry. This proves you&apos;re not mass-applying.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">4. Generate and Edit</h3>
              <p className="text-white/70 mb-4">
                Never send the first draft. ChatGPT gives you a foundation—you add the human touch.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Too generic:</strong> &quot;I&apos;m excited about this opportunity&quot; tells them nothing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Too long:</strong> Three paragraphs maximum. Hiring managers skim.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">No customization:</strong> If you could send the same letter to 10 companies, it&apos;s too generic.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Ignoring the job posting:</strong> Match their language. If they say &quot;fast-paced environment,&quot; you say &quot;I thrive in fast-paced environments.&quot;</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Advanced Tip: Use ChatGPT to Critique</h2>
              <p className="text-white/70 mb-4">
                After writing your cover letter, paste it back with this prompt:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Critique this cover letter for a [JOB TITLE] role. Be harsh. What's weak? What's cliché? How can I make it more memorable?`}</p>
              </div>
              <p className="text-white/50 text-sm">
                The feedback is often better than the original draft.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Sample Cover Letter (Generated + Edited)</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s what a final product looks like:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4 italic text-white/80">
                <p className="mb-3">
                  The hardest part of marketing isn&apos;t creating content—it&apos;s creating content that converts. That&apos;s why I spent the last two years obsessing over conversion copywriting at [Previous Company], where I increased email click-through rates by 47% and helped launch three products that exceeded revenue targets.
                </p>
                <p className="mb-3">
                  [Company]&apos;s approach to [specific thing they do] caught my attention because [genuine reason]. I&apos;d love to bring my conversion-focused mindset to your team.
                </p>
                <p className="mb-3">
                  My resume has the details, but the short version: I write copy that sells, I test everything, and I hit deadlines.
                </p>
                <p>
                  Looking forward to connecting.
                </p>
              </div>
              <p className="text-white/50 text-sm">
                Notice: specific numbers, company research, personality, under 150 words.
              </p>
            </section>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold mb-3">50+ Cover Letter & Job Search Prompts</h3>
              <p className="text-white/70 mb-4">
                Get every prompt you need—cover letters, resumes, interview prep, 
                salary negotiation, and follow-up emails.
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
                ChatGPT won&apos;t write your cover letter for you—but it will get you 80% of the way there in 5 minutes instead of 45. Use that time to customize and add your voice.
              </p>
              <p className="text-white/70">
                The job market is competitive. Use every advantage you have.
              </p>
            </section>
          </div>
        </article>

        <EmailSignup headline="Get weekly AI job search tips" />

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume' },
            { slug: 'chatgpt-mock-interview', title: 'ChatGPT Mock Interview', description: 'Practice interviews with AI feedback' },
            { slug: 'ai-job-search-tools', title: 'AI Job Search Tools', description: 'Best AI tools for job seekers' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/40 text-sm">
        <p>© 2025 GetTheJobAI. All rights reserved.</p>
      </footer>
    </div>
  )
}

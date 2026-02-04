import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Optimize Your LinkedIn Profile with ChatGPT (2026 Guide) | GetTheJobAI',
  description: 'Use AI to optimize your LinkedIn profile for recruiters. ChatGPT prompts for headlines, about sections, experience bullets, and keyword optimization.',
  keywords: ['linkedin optimization', 'chatgpt linkedin', 'ai linkedin profile', 'linkedin headline generator', 'linkedin about section ai'],
}

export default function LinkedInOptimizationPage() {
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
            How to Optimize Your LinkedIn Profile with ChatGPT
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is often the first impression recruiters get. Here&apos;s how to use AI to make it count.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why LinkedIn Matters for Job Seekers</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>87% of recruiters use LinkedIn to find candidates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>Profiles with complete information get 40x more opportunities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <span>The right keywords can put you in front of hiring managers</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Optimize Your Headline</h2>
              <p className="text-white/70 mb-4">
                Your headline appears everywhere - in search results, connection requests, and comments. Make it count.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [your role] with [X years] experience in [industry]. I'm looking for [target role] positions. Write 5 LinkedIn headlines that:
- Include keywords recruiters search for
- Show my value proposition
- Are under 120 characters
- Don't use clichés like "passionate" or "driven"`}</p>
              </div>
              <p className="text-white/50 text-sm mb-4">
                <strong className="text-white/70">Example outputs:</strong>
              </p>
              <ul className="space-y-1 text-white/60 text-sm">
                <li>• Senior Product Manager | B2B SaaS | Shipped $10M+ Features</li>
                <li>• Full Stack Developer | React & Node.js | Building Scalable Web Apps</li>
                <li>• Marketing Manager | Growth & Acquisition | 3x Pipeline in 18 Months</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Write Your About Section</h2>
              <p className="text-white/70 mb-4">
                This is your elevator pitch. Use AI to make it compelling.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [role] with this background:
- [Key achievement 1]
- [Key achievement 2]
- [Key skill areas]

Make it:
- First person, conversational tone
- Under 300 words
- Include a call to action
- Focus on value I bring, not just experience`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: Transform Your Experience Section</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t just list job duties. Show impact.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Transform this job description into 4 achievement-focused bullet points:

[Paste your current description]

For each bullet:
- Start with a strong action verb
- Include a specific metric or outcome
- Show the impact on the business
- Keep under 200 characters`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Optimize for Search</h2>
              <p className="text-white/70 mb-4">
                LinkedIn is a search engine. Use the right keywords.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm targeting [job title] roles. What are the top 15 keywords I should include in my LinkedIn profile to appear in recruiter searches? Consider:
- Job titles and variations
- Skills (both technical and soft)
- Industry terms
- Tools and technologies`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Generate Recommendations</h2>
              <p className="text-white/70 mb-4">
                Strong recommendations build credibility.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I need to ask [colleague name] for a LinkedIn recommendation. They worked with me on [project] where I [contribution]. Draft a message asking for a recommendation that:
- Is brief and respectful of their time
- Reminds them of our work together
- Suggests specific points they could mention`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Quick Wins</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  <span><strong className="text-white">Profile photo:</strong> Use a professional headshot (LinkedIn says profiles with photos get 21x more views)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  <span><strong className="text-white">Background image:</strong> Add a relevant banner (your industry, a project, or personal brand)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  <span><strong className="text-white">Skills section:</strong> Add 50 skills, with your top 3 pinned</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  <span><strong className="text-white">Activity:</strong> Post or engage weekly to stay visible in feeds</span>
                </li>
              </ul>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">What&apos;s Next?</h2>
              <p className="text-white/70 mb-4">
                Once your profile is optimized:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  Turn on &ldquo;Open to Work&rdquo; (visible to recruiters only)
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  Connect with recruiters in your target companies
                </li>
                <li className="flex gap-2">
                  <span className="text-emerald-400">→</span>
                  Engage with content from hiring managers
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
                </Link>
                <Link 
                  href="/guides/interview-questions"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  Interview Question Prep →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve your resume with AI.'
            },
            {
              slug: 'interview-questions',
              title: '30 Interview Questions + Prompts',
              description: 'Prepare authentic answers that highlight your experience.'
            },
            {
              slug: 'ai-networking-emails',
              title: 'AI Networking Emails',
              description: 'Write connection requests that actually get responses.'
            }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2026 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

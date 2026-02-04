import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use ChatGPT to Optimize Your LinkedIn Profile (2026 Guide) | GetTheJobAI',
  description: 'Use ChatGPT prompts to optimize your LinkedIn headline, about section, and experience. Get found by recruiters with an AI-optimized profile.',
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
            How to Use ChatGPT to Optimize Your LinkedIn Profile
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn profile is your digital first impression. Here&apos;s how to use ChatGPT 
            to make it stand out and get found by recruiters.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Craft a Compelling Headline</h2>
              <p className="text-white/70 mb-4">
                Your headline appears everywhere—search results, connection requests, comments. 
                Most people waste it with just a job title.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write 5 LinkedIn headlines for a [your role] that highlight value, not just title. Include keywords recruiters search for. Keep under 120 characters.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Why it works:</strong> Headlines with keywords get 40% more profile views. 
                Value-focused headlines show what you do, not just what you are.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Write an About Section That Converts</h2>
              <p className="text-white/70 mb-4">
                The About section is your pitch. It should hook in the first two lines 
                (that&apos;s all people see before &ldquo;see more&rdquo;).
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [role] with [X years] experience in [industry]. Start with a hook that creates curiosity. Include: key achievements, skills, and a call to action. Write in first person, conversational tone. 2000 characters max.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Pro tip:</strong> Your first two lines should make people want to click &ldquo;see more.&rdquo; 
                Lead with your most impressive stat or a bold statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Optimize Your Experience Bullets</h2>
              <p className="text-white/70 mb-4">
                Recruiters scan, they don&apos;t read. Each bullet should start with an action verb and include metrics.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite these job responsibilities as achievement-focused bullets with metrics:
[paste your current bullets]

Use format: [Action verb] + [what you did] + [measurable result]`}</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2">BEFORE</p>
                <p className="text-white/50 text-sm mb-4">&ldquo;Responsible for managing the company social media accounts&rdquo;</p>
                <p className="text-sm text-white/40 mb-2">AFTER</p>
                <p className="text-white/90 text-sm">&ldquo;Grew company Instagram from 2K to 15K followers in 8 months, driving 40% increase in website traffic from social channels&rdquo;</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Generate Skill Endorsement Strategy</h2>
              <p className="text-white/70 mb-4">
                LinkedIn shows your top 3 skills prominently. Make sure they&apos;re the right ones.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [role]. What are the top 10 skills I should have on my LinkedIn profile that recruiters actually search for? Rank by search volume and relevance.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Action step:</strong> Pin your most searchable skills to the top. 
                Remove generic skills like &ldquo;Microsoft Office&rdquo; unless required.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Create a Featured Section</h2>
              <p className="text-white/70 mb-4">
                The Featured section is prime real estate that most people ignore.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`What should a [role] include in their LinkedIn Featured section to stand out? Give me 5 specific content ideas with descriptions.`}</p>
              </div>
              <p className="text-white/50 text-sm">
                <strong className="text-white/70">Ideas:</strong> Portfolio pieces, published articles, presentation slides, 
                project case studies, media mentions, certifications.
              </p>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Pro Tips for LinkedIn Visibility</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Update during business hours</strong> — More visibility when recruiters are active</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Set &ldquo;Open to Work&rdquo; to recruiters only</strong> — If employed, keep it private</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Post content 2-3x per week</strong> — Boosts profile visibility in search</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Connect with recruiters</strong> — Target companies you want to work for</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Customize your URL</strong> — linkedin.com/in/yourname looks more professional</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Get 50 More LinkedIn Prompts</h2>
              <p className="text-white/70 mb-4">
                Want prompts for connection requests, LinkedIn posts, recruiter messages, 
                and more? Get the complete prompt pack.
              </p>
              <Link 
                href="/prompts"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get 50 ChatGPT Prompts — $19 →
              </Link>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Next Steps</h2>
              <p className="text-white/70 mb-4">
                Profile optimized? Now work on the rest of your job search:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/chatgpt-linkedin-outreach"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn Outreach Prompts →
                </Link>
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
                </Link>
                <Link 
                  href="/guides/ai-cover-letter-generator"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Cover Letter Guide →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-linkedin-optimization',
              title: 'AI LinkedIn Optimization',
              description: 'Complete guide to LinkedIn optimization with AI tools and strategies.'
            },
            {
              slug: 'chatgpt-linkedin-outreach',
              title: 'LinkedIn Outreach Prompts',
              description: 'Connection requests and messages that get responses.'
            },
            {
              slug: 'ai-personal-branding',
              title: 'Personal Branding with AI',
              description: 'Build your professional brand across platforms.'
            }
          ]} />
        </article>
      </main>

      <footer className="border-t border-white/10 mt-24">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-sm text-white/40">
            © 2025 GetTheJobAI. Helping job seekers use AI effectively.
          </p>
        </div>
      </footer>
    </div>
  )
}

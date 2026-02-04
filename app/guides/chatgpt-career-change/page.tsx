import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT for Career Change: Prompts & Strategy (2025) | GetTheJobAI',
  description: 'Use ChatGPT to pivot your career. Prompts to identify transferable skills, rewrite your resume for a new industry, and land interviews in your target field.',
  keywords: ['chatgpt career change', 'career pivot ai', 'chatgpt new career', 'ai career transition', 'switch careers with chatgpt'],
}

export default function ChatGPTCareerChangePage() {
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
            Career Pivot
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT for Career Change: The Complete Playbook
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Thinking of switching industries? ChatGPT can help you identify transferable skills, 
            reposition your experience, and craft a narrative that gets you interviews.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Makes Career Changes Easier</h2>
              <p className="text-white/70 mb-4">
                The hardest part of a career change isn&apos;t finding jobs—it&apos;s translating your 
                existing experience into language that resonates with a new industry. ChatGPT excels at this.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Identify skills you didn&apos;t know were valuable
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Reframe your experience for new audiences
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Research industries without starting from scratch
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Discover Your Transferable Skills</h2>
              <p className="text-white/70 mb-4">
                Most people underestimate how many skills transfer between industries.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [CURRENT ROLE] with [X] years of experience looking to transition into [TARGET INDUSTRY/ROLE].

My main responsibilities and achievements:
- [List 3-5 key things you do/did]

Analyze my background and identify:
1. Transferable hard skills
2. Transferable soft skills  
3. Industry-agnostic achievements
4. Gaps I should address
5. How to position my experience for [TARGET ROLE]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Research Your Target Industry</h2>
              <p className="text-white/70 mb-4">
                Get up to speed on industry terminology and expectations fast.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning from [CURRENT INDUSTRY] to [TARGET INDUSTRY].

Give me a crash course covering:
1. Key terminology I need to know
2. Industry trends and challenges in 2025
3. Common career paths and titles
4. Skills that are highly valued
5. Red flags or gaps that would concern hiring managers
6. How people in [MY CURRENT ROLE] typically make this transition successfully`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Rewrite Your Resume for New Industry</h2>
              <p className="text-white/70 mb-4">
                Transform industry-specific language into universal value statements.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Rewrite this resume bullet point for someone transitioning from [CURRENT INDUSTRY] to [TARGET INDUSTRY]:

Original: "[YOUR BULLET POINT]"

Requirements:
- Remove industry-specific jargon
- Emphasize transferable skills
- Quantify impact where possible
- Use terminology that resonates in [TARGET INDUSTRY]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Craft Your Career Change Narrative</h2>
              <p className="text-white/70 mb-4">
                The &quot;why are you switching?&quot; question kills most career changers. Prepare your answer.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Help me craft a compelling career change narrative.

Background:
- Currently: [CURRENT ROLE/INDUSTRY]
- Target: [TARGET ROLE/INDUSTRY]
- Why I want to switch: [YOUR REAL REASONS]
- Connection to new field: [ANY RELEVANT EXPERIENCE, PROJECTS, OR INTERESTS]

Create:
1. A 30-second elevator pitch
2. A longer "tell me about yourself" answer (1-2 minutes)
3. An answer for "why are you leaving your current field?"
4. How to address the "you don't have direct experience" concern`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Network Into Your New Industry</h2>
              <p className="text-white/70 mb-4">
                Career changers get hired through connections more than applications.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn message to someone in [TARGET INDUSTRY] asking for an informational interview.

My background: [BRIEF BACKGROUND]
Their role: [THEIR TITLE AT COMPANY]
What I want to learn: [SPECIFIC QUESTIONS]

The message should:
- Be under 150 words
- Show I've done my research
- Have a specific, easy ask
- Not feel desperate or salesy`}</p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold mb-3">Want All 50+ Career Prompts?</h3>
              <p className="text-white/70 mb-4">
                Get the complete ChatGPT Job Search Prompt Pack—including career change prompts, 
                interview prep, networking templates, and more.
              </p>
              <Link 
                href="/prompts" 
                className="inline-block bg-emerald-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-emerald-400 transition-colors"
              >
                Get the Prompt Pack — $19
              </Link>
            </div>

            <section>
              <h2 className="text-2xl font-bold mb-4">Common Career Change Mistakes</h2>
              <ul className="space-y-4 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <div>
                    <strong className="text-white">Starting from scratch.</strong> Don&apos;t apply to entry-level roles. 
                    Your experience has value—position yourself for mid-level roles.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <div>
                    <strong className="text-white">Generic applications.</strong> Career changers must customize 
                    every application to show fit. Use ChatGPT to tailor each one.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <div>
                    <strong className="text-white">No bridge experience.</strong> Do a project, volunteer, or 
                    freelance in your target field before applying full-time.
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-resume-prompts', title: 'ChatGPT Resume Prompts', description: 'Copy-paste prompts to improve your resume' },
            { slug: 'ai-skills-gap-analysis', title: 'AI Skills Gap Analysis', description: 'Identify skill gaps and close them' },
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Templates for professional outreach' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-white/40 text-sm">
        <p>© 2025 GetTheJobAI. All rights reserved.</p>
      </footer>
    </div>
  )
}

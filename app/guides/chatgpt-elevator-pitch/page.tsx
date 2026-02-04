import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Elevator Pitch Generator: Craft Your 30-Second Pitch | GetTheJobAI',
  description: 'Use ChatGPT to create a compelling elevator pitch. Copy-paste prompts for networking events, interviews, and career fairs.',
  keywords: ['chatgpt elevator pitch', 'ai elevator pitch', 'elevator pitch generator', '30 second pitch'],
}

export default function ChatGPTElevatorPitchPage() {
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
            ChatGPT Elevator Pitch Generator: Craft Your 30-Second Pitch
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your elevator pitch is your career in 30 seconds. Use these ChatGPT prompts 
            to craft one that makes people want to know more.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">What Makes a Great Elevator Pitch</h2>
              <p className="text-white/70 mb-4">
                A good elevator pitch isn&apos;t about cramming your entire resume into 30 seconds. 
                It&apos;s about sparking interest.
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Hook:</strong> Start with what makes you interesting
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Value:</strong> What problem do you solve?
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Proof:</strong> One concrete achievement
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">→</span>
                  <strong>Ask:</strong> What you&apos;re looking for
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. The Basic Elevator Pitch Prompt</h2>
              <p className="text-white/70 mb-4">
                Start here. This prompt generates a solid foundation you can customize.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a 30-second elevator pitch for me. Make it conversational, not robotic.

About me:
- Current/target role: [Your role]
- Industry: [Your industry]
- Top achievement: [One impressive thing you've done]
- What I'm looking for: [Job, connections, advice, etc.]

Give me 3 versions:
1. Casual (networking event)
2. Professional (interview)
3. Bold (standing out in a crowded room)`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Industry-Specific Pitches</h2>
              <p className="text-white/70 mb-4">
                Different industries have different norms. Use these prompts to match expectations.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Tech & Software</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a tech-focused elevator pitch. Lead with impact, not job titles.

My background:
- Role: [Software Engineer, PM, etc.]
- Tech stack: [Languages, tools]
- Impact: [What you built, users served, revenue generated]
- Looking for: [Type of role/company]

Keep it under 30 seconds. No buzzwords like "passionate" or "synergy."`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Sales & Marketing</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a sales-style elevator pitch that demonstrates I can sell myself.

My background:
- Current role: [Your role]
- Key metric: [Revenue, growth, conversions]
- Best win: [A specific deal or campaign]
- Target: [What I want next]

Make it confident but not arrogant. Show, don't tell.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Healthcare</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a healthcare professional elevator pitch that balances competence with compassion.

My background:
- Role: [Nurse, physician, administrator, etc.]
- Specialty: [Your area]
- Impact: [Patient outcomes, process improvements]
- Goal: [Next career step]

Professional but warm. Lead with patient impact.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Situation-Specific Pitches</h2>
              
              <h3 className="text-xl font-semibold mb-3 text-emerald-400">Career Fair (High Volume)</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a memorable career fair pitch. I have 15 seconds max before they move on.

About me: [Your background]
Target companies: [Types of companies you want]

Make it stick. What's the one thing they'll remember about me?`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-emerald-400">LinkedIn Connection Request</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request that's essentially a written elevator pitch.

Who I am: [Your background]
Who I'm reaching out to: [Their role/company]
Why connecting: [Genuine reason]

300 characters max. No generic "I'd love to connect" energy.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Polish Your Pitch</h2>
              <p className="text-white/70 mb-4">
                Got a draft? Use this prompt to make it better.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Improve this elevator pitch. Make it:
- More conversational (remove corporate speak)
- More specific (replace vague claims with proof)
- More memorable (add a hook)

Current pitch:
"[Paste your current pitch]"

Give me the improved version plus 3 specific changes you made and why.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Practice Mode</h2>
              <p className="text-white/70 mb-4">
                Use ChatGPT to practice delivering your pitch and get feedback.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm going to practice my elevator pitch. Act as a [recruiter/hiring manager/networking contact] at [type of event].

After I deliver my pitch, give me feedback on:
1. Clarity - Did you understand what I do?
2. Interest - Would you want to learn more?
3. Memorability - What will you remember?
4. Length - Was it too long/short?

My pitch: "[Your pitch]"

Then ask me a follow-up question like you would in real life.`}</p>
              </div>
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
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Write effective networking emails with AI assistance' },
            { slug: 'chatgpt-linkedin-outreach', title: 'ChatGPT LinkedIn Outreach', description: 'Connect with professionals using AI-crafted messages' },
            { slug: 'ai-mock-interview', title: 'AI Mock Interview Practice', description: 'Practice interviews with ChatGPT and Claude' },
          ]}
        />
      </main>

      <footer className="border-t border-white/10 mt-24 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center text-white/40 text-sm">
          © 2026 GetTheJobAI. Land your next role with AI.
        </div>
      </footer>
    </div>
  )
}

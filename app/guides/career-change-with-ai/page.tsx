import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Career Change with AI: Your Complete Guide to Switching Fields | GetTheJobAI',
  description: 'Use AI to successfully change careers. Skills translation, gap analysis, bridge resumes, and networking strategies for career switchers.',
  keywords: ['career change with ai', 'switch careers ai', 'career pivot', 'change careers chatgpt'],
}

export default function CareerChangeWithAIPage() {
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
            Career Change
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Career Change with AI: Your Complete Guide to Switching Fields
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Thinking about a career change? AI just made career pivots 10x easier—not because it does the work for you, but because it helps you see what you already have and translate it for your new path.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Career Changes Fail (And How AI Fixes It)</h2>
              <p className="text-white/70 mb-4">Most career changers fail because they:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">1.</span>
                  Can&apos;t articulate how their skills transfer
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">2.</span>
                  Don&apos;t know what skills they&apos;re missing
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">3.</span>
                  Network in the wrong places
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">4.</span>
                  Apply like beginners instead of experienced professionals
                </li>
              </ul>
              <p className="text-white/70">AI helps you solve all four.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 1: Skills Translation</h2>
              <p className="text-white/70 mb-4">
                Your skills transfer. You just don&apos;t know how to describe them yet.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm changing careers from [current role/industry] to [target role/industry].

My current skills and experience:
[list your main skills, responsibilities, achievements]

Help me:
1. Identify which skills directly transfer
2. Translate my experience into language the new industry uses
3. Find hidden transferable skills I might be overlooking
4. Highlight what makes my background an advantage, not a liability`}</p>
              </div>
              <p className="text-white/50 text-sm">
                A project manager becomes a &quot;cross-functional coordinator.&quot; A teacher becomes someone who &quot;develops and delivers training programs at scale.&quot;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 2: Gap Analysis</h2>
              <p className="text-white/70 mb-4">
                What skills do you actually need? Not what job postings say (they&apos;re wish lists), but what the job actually requires.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to transition from [current role] to [target role].

Analyze the real skill gap:
1. What are the must-have skills (dealbreakers if missing)?
2. What are nice-to-have skills (can learn on the job)?
3. What skills do I already have that count?
4. What's the fastest path to closing the must-have gaps?
5. Any certifications that would accelerate my transition?

My background: [brief summary]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This saves you from spending 6 months on a degree you don&apos;t need or ignoring a certification that would open doors immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 3: The Bridge Resume</h2>
              <p className="text-white/70 mb-4">
                Don&apos;t use your old resume. Don&apos;t start from scratch. Build a bridge.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a bridge resume that positions my [current industry] experience for [target industry].

Guidelines:
- Lead with transferable achievements, not job titles
- Use target industry language for my existing experience  
- Include a summary that addresses the career change directly
- Structure to emphasize relevant experience over chronology

My experience:
[paste current resume or list experience]

Target role: [job title]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                A bridge resume doesn&apos;t hide your past—it reframes it as your advantage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 4: Network Smarter</h2>
              <p className="text-white/70 mb-4">
                Cold networking is exhausting. AI helps you warm it up.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm transitioning from [current field] to [target field].

Create a networking strategy:
1. What types of people should I connect with first?
2. What groups, events, or communities should I join?
3. Draft a LinkedIn message template for reaching out
4. What can I offer these connections (not just ask)?
5. How do I leverage my current network for warm intros?`}</p>
              </div>
              <p className="text-white/70 mb-4">Then for specific outreach:</p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request for someone who works as [target role] at [company type].

Context: I'm transitioning from [current role]. I want to learn about their path, not ask for a job.

Make it genuine, brief, and give them a reason to respond.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Step 5: Interview Preparation</h2>
              <p className="text-white/70 mb-4">
                Career changers get asked: &quot;Why should we hire you over someone with direct experience?&quot;
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm interviewing for [target role] as a career changer from [current field].

Prepare me for these questions:
1. "Why are you making this change?"
2. "What makes you qualified without direct experience?"
3. "How quickly can you get up to speed?"
4. "Where do you see yourself in 5 years?"

My genuine reasons for changing: [your reasons]
My relevant transferable experience: [key points]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Career Change Timeline (Realistic)</h2>
              <div className="space-y-4 mb-4">
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Months 1-2</h3>
                  <p className="text-white/70 text-sm">Skills analysis, gap identification, start learning must-haves</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Months 2-3</h3>
                  <p className="text-white/70 text-sm">Bridge resume, LinkedIn optimization, start networking</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Months 3-4</h3>
                  <p className="text-white/70 text-sm">Targeted applications, informational interviews</p>
                </div>
                <div className="border border-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-emerald-400 mb-2">Months 4-6</h3>
                  <p className="text-white/70 text-sm">Interviews, offers, transition</p>
                </div>
              </div>
              <p className="text-white/70">
                This isn&apos;t a 2-week project. But it&apos;s also not a 2-year journey. Six months of focused effort beats two years of scattered hoping.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Age Is Not the Barrier You Think</h2>
              <ul className="space-y-2 text-white/70 mb-4">
                <li><strong className="text-emerald-400">At 30:</strong> You have experience to translate.</li>
                <li><strong className="text-emerald-400">At 40:</strong> You have judgment and perspective.</li>
                <li><strong className="text-emerald-400">At 50:</strong> You have a network and wisdom.</li>
              </ul>
              <p className="text-white/70">
                Younger candidates have energy. You have everything else. AI helps you articulate what &quot;everything else&quot; actually means.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Uncomfortable Truth</h2>
              <p className="text-white/70 mb-4">Career change requires:</p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Temporary pay cut (sometimes)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Ego adjustment (often)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Real skill-building (always)
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Persistence (guaranteed)
                </li>
              </ul>
              <p className="text-white/70">
                AI doesn&apos;t remove these requirements. It just makes the path clearer and the work more efficient.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Start Now</h2>
              <p className="text-white/70 mb-4">Copy this prompt and run it today:</p>
              <div className="bg-black/30 rounded p-4 text-sm text-white/90 font-mono whitespace-pre-wrap">{`I currently work as [your role] in [your industry].
I want to transition to [target role] in [target industry].

Give me:
1. Reality check: Is this transition reasonable?
2. My top 3 transferable strengths
3. The 2-3 skills I need to develop
4. First three actions I should take this week`}</div>
              <p className="text-white/70 mt-4">
                Your career change starts with clarity. AI gives you that in 5 minutes.
              </p>
            </section>

            <EmailSignup 
              headline="Get career change strategies weekly"
              buttonText="Subscribe"
            />

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/tools"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Job Search Tools →
                </Link>
                <Link 
                  href="/guides/chatgpt-resume-prompts"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  ChatGPT Resume Prompts →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-career-pivot',
              title: 'AI Career Pivot',
              description: 'How to pivot careers using AI tools strategically.'
            },
            {
              slug: 'ai-skills-gap-analysis',
              title: 'Skills Gap Analysis',
              description: 'Find and fill the gaps in your skillset.'
            },
            {
              slug: 'chatgpt-resume-prompts',
              title: 'Resume Prompts',
              description: 'ChatGPT prompts to improve your resume.'
            }
          ]} />
        </article>
    </div>
  )
}

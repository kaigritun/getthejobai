import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Use ChatGPT for Career Advice (Better Than a $200/hr Coach) | GetTheJobAI',
  description: 'Get personalized career guidance from ChatGPT. Prompts for career pivots, salary negotiation, skill development, and finding your path.',
  keywords: ['chatgpt career advice', 'ai career coach', 'chatgpt career planning', 'ai career guidance'],
}

export default function ChatGPTCareerAdvicePage() {
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
            Career
          </p>
          <h1 className="text-4xl font-bold mb-6">
            How to Use ChatGPT for Career Advice
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Career coaches charge $150-300/hour. ChatGPT is free. And for most career questions, it&apos;s 
            just as good — sometimes better, because it has no agenda to keep you as a client.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Set Up Your Career Context</h2>
              <p className="text-white/70 mb-4">
                Before asking career questions, give ChatGPT context about your situation. Save this as a 
                &ldquo;Project&rdquo; or paste it at the start of each conversation:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">CAREER CONTEXT TEMPLATE</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Career Context:
- Current role: [Your job title]
- Years of experience: [X years]
- Industry: [Your industry]
- Salary: [Current compensation]
- Location: [City/Remote]
- Education: [Degree/certifications]
- Career goal: [What you want to achieve]
- Timeline: [When you want to achieve it]
- Constraints: [Family, location, finances, etc.]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This context transforms generic advice into personalized guidance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. &ldquo;Should I Stay or Go?&rdquo;</h2>
              <p className="text-white/70 mb-4">
                The most common career question.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I've been at my current company for [X years] as a [role]. Here's my situation:
- What I like: [list 3-4 things]
- What I don't like: [list 3-4 things]
- Growth opportunities: [describe or "limited"]
- Market rate for my role: [$X-Y]
- My current salary: [$Z]

Help me think through whether I should stay, ask for changes, or start looking elsewhere. What questions should I be asking myself?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. &ldquo;What Should I Do With My Career?&rdquo;</h2>
              <p className="text-white/70 mb-4">
                When you feel stuck or unfulfilled.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I feel stuck/unfulfilled in my career. Here's my background:
[Your career context]

I'm good at: [skills]
I enjoy: [activities]
I don't enjoy: [activities]
I value: [what matters to you — money, impact, flexibility, etc.]

Based on this, suggest 5 career paths I might not have considered. For each one, explain why it might fit me and what the path to get there looks like.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. &ldquo;How Do I Make a Career Pivot?&rdquo;</h2>
              <p className="text-white/70 mb-4">
                Planning a transition to a new field.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to transition from [current field] to [target field].

My relevant experience:
[List transferable skills and experiences]

My gaps:
[What you're missing]

Create a 6-month plan to make this transition, including:
- Skills to develop (prioritized)
- Projects to build
- People to network with
- How to position my background
- Realistic timeline`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. &ldquo;Am I Being Paid Fairly?&rdquo;</h2>
              <p className="text-white/70 mb-4">
                Research your market value.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [job title] with [X years] experience in [city/region].
My current compensation: [$X base + $Y bonus + benefits]
My responsibilities: [key duties]
My results: [notable achievements]

Research current market rates for this role and tell me:
1. Am I underpaid, at market, or overpaid?
2. What would justify higher pay?
3. How should I approach asking for a raise?`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. &ldquo;What Skills Should I Learn?&rdquo;</h2>
              <p className="text-white/70 mb-4">
                Prioritize your professional development.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [job title] who wants to [advance/pivot/stay relevant].

My current skills:
[List your skills]

The job market trends I'm seeing:
[What you've noticed in job postings]

What skills should I prioritize learning in the next 12 months? Be specific — not "learn AI" but "learn to use Claude for [specific use case]".`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Getting Better Advice</h2>
              <p className="text-white/70 mb-4">
                These techniques get you past generic platitudes:
              </p>
              
              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-2">Technique 1: Ask for Counterarguments</h3>
                  <div className="bg-black/30 rounded p-3 mb-2">
                    <p className="text-white/90 font-mono text-sm">{`You just suggested I should [advice]. Now argue the opposite position. What are the strongest reasons NOT to do this?`}</p>
                  </div>
                  <p className="text-white/50 text-sm">
                    This forces nuanced thinking instead of cheerleading.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-2">Technique 2: Request Specific Scenarios</h3>
                  <div className="bg-black/30 rounded p-3 mb-2">
                    <p className="text-white/90 font-mono text-sm">{`Walk me through exactly how I would [action] step by step. What would I say/do on day 1? Week 1? Month 1?`}</p>
                  </div>
                  <p className="text-white/50 text-sm">
                    Vague advice is useless. Make it concrete.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-2">Technique 3: Use the &ldquo;Harsh Friend&rdquo; Prompt</h3>
                  <div className="bg-black/30 rounded p-3 mb-2">
                    <p className="text-white/90 font-mono text-sm">{`I need honest career advice, not feel-good platitudes. Be direct, even if it's uncomfortable. What am I not seeing about my situation?`}</p>
                  </div>
                  <p className="text-white/50 text-sm">
                    Sometimes you need tough love.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h3 className="font-bold text-lg mb-2">Technique 4: Get Multiple Perspectives</h3>
                  <div className="bg-black/30 rounded p-3 mb-2">
                    <p className="text-white/90 font-mono text-sm">{`Give me advice on [situation] from three perspectives:
1. A risk-tolerant startup founder
2. A risk-averse corporate career advisor
3. Someone who prioritizes work-life balance above all

Then tell me which perspective best fits my stated values.`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">What ChatGPT Can&apos;t Do</h2>
              <p className="text-white/70 mb-4">
                Be realistic about the limits:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                  <p className="text-sm text-emerald-400 mb-2 font-mono">GOOD FOR</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Organizing your thoughts</li>
                    <li>• Exploring options you hadn&apos;t considered</li>
                    <li>• Preparing for conversations</li>
                    <li>• Market research</li>
                    <li>• Practicing difficult conversations</li>
                  </ul>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <p className="text-sm text-red-400 mb-2 font-mono">BAD FOR</p>
                  <ul className="space-y-2 text-white/70 text-sm">
                    <li>• Knowing your specific company politics</li>
                    <li>• Understanding your personal relationships</li>
                    <li>• Predicting exactly what will happen</li>
                    <li>• Replacing real human mentorship</li>
                  </ul>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                Use AI to prepare, but make decisions based on conversations with people who know your specific situation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Build Your Career Board of Advisors</h2>
              <p className="text-white/70 mb-4">
                Instead of one career coach, build a &ldquo;board&rdquo; using different AI tools:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">ChatGPT</strong> — Strategic career planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Claude</strong> — Deep analysis and research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Perplexity</strong> — Real-time market research</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">LinkedIn AI</strong> — Network-specific advice</span>
                </li>
              </ul>
              <p className="text-white/50 text-sm mt-4">
                Each has strengths. Use them together.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">The Action Step</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s what to do right now:
              </p>
              <ol className="space-y-2 text-white/70">
                <li><strong className="text-white">1.</strong> Copy the &ldquo;Career Context&rdquo; template above</li>
                <li><strong className="text-white">2.</strong> Fill it out honestly</li>
                <li><strong className="text-white">3.</strong> Ask ChatGPT: &ldquo;Based on this context, what&apos;s the #1 thing I should focus on in the next 30 days to advance my career?&rdquo;</li>
              </ol>
              <p className="text-white/70 mt-4">
                You&apos;ll get a clear, actionable answer in 30 seconds. That&apos;s the power of AI career advice.
              </p>
            </section>
          </div>
        
          <RelatedGuides guides={[
            {
              slug: 'ai-career-pivot',
              title: 'AI Career Pivot',
              description: 'Use AI to switch industries and rewrite your narrative.'
            },
            {
              slug: 'ai-salary-negotiation',
              title: 'AI Salary Negotiation',
              description: 'Research market rates and generate negotiation scripts.'
            },
            {
              slug: 'ai-skills-gap-analysis',
              title: 'AI Skills Gap Analysis',
              description: 'Identify exactly what skills you need for your target job.'
            }
          ]} />
        </article>
    </div>
  )
}

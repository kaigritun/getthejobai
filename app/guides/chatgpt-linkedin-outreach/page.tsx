import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT Prompts for LinkedIn Outreach | GetTheJobAI',
  description: 'AI-powered LinkedIn outreach that actually gets responses. Prompts and templates for connecting with hiring managers, recruiters, and industry contacts.',
  keywords: ['linkedin outreach', 'chatgpt linkedin', 'linkedin messages', 'networking ai', 'cold outreach linkedin'],
}

export default function ChatGPTLinkedInOutreachPage() {
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
            Networking
          </p>
          <h1 className="text-4xl font-bold mb-6">
            ChatGPT Prompts for LinkedIn Outreach
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Cold outreach on LinkedIn has abysmal response rates—unless you do it right. 
            AI helps you write personalized, human messages that actually get replies.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Most LinkedIn Outreach Fails</h2>
              <p className="text-white/70 mb-4">
                Generic messages get ignored:
              </p>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>❌ &ldquo;Hi, I saw your profile and wanted to connect&rdquo;</li>
                  <li>❌ &ldquo;I&apos;m looking for opportunities and thought you might help&rdquo;</li>
                  <li>❌ &ldquo;Can I pick your brain?&rdquo;</li>
                </ul>
              </div>
              <p className="text-white/50 text-sm">
                These say &ldquo;I want something from you&rdquo; without offering anything.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Effective Outreach Formula</h2>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-lg font-bold text-emerald-400 mb-2">
                  Personalization + Value + Soft Ask
                </p>
                <ol className="space-y-1 text-white/70">
                  <li>1. Show you actually looked at their profile</li>
                  <li>2. Offer something useful</li>
                  <li>3. Make it easy to say yes</li>
                </ol>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">ChatGPT Prompts for Each Scenario</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Connecting with Hiring Managers</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to connect with a hiring manager at [company] for the [role] position. Their background is [paste LinkedIn summary]. Write a connection request (300 char max) that:
1. References something specific from their background
2. Shows genuine interest in the company
3. Doesn't ask for anything directly`}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">EXAMPLE OUTPUT</p>
                    <p className="text-white/70 text-sm italic">
                      &ldquo;Hi Sarah—loved your post about building remote-first culture at Acme. I&apos;ve been following 
                      Acme&apos;s growth since the Series B and the product direction is exciting. Would love to connect 
                      and follow your leadership journey.&rdquo;
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Reaching Out to Recruiters</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn message to a recruiter who specializes in [industry]. I'm looking for [role type]. My key selling points are: [list 3]. The message should be professional but warm, under 100 words.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Informational Interview Requests</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to request an informational interview with someone who is a [their role] at [their company]. I'm interested in [what you want to learn]. Write a message that:
1. Explains why I'm reaching out to them specifically
2. Shows I've done research
3. Asks for just 15-20 minutes
4. Makes saying yes easy`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Following Up After Events</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I met [name] briefly at [event]. We talked about [topic]. Write a connection request that references our conversation and suggests continuing the discussion.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Reconnecting with Old Contacts</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to reconnect with a former colleague/classmate I haven't talked to in [X years]. Last time we connected was [context]. Write a message that doesn't feel awkward or transactional.`}</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Message Templates by Goal</h2>

              <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">Template 1: The Value-First Approach</h3>
                  <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

I came across your post on [topic] and it made me think of [relevant resource/article]. Thought you might find it interesting.

I'm currently exploring [your area]—your work at [company] on [specific thing] is exactly the kind of impact I'm hoping to make.

Would love to connect and learn from your journey.

[Your name]`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">Template 2: The Mutual Connection Approach</h3>
                  <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

[Mutual connection] mentioned you're doing great work in [area]. I've been following [company's] growth and particularly liked [specific thing].

I'm currently focused on [your area]—would love to connect and hear your perspective on [relevant topic] sometime.

No pressure—I know you're busy!

[Your name]`}</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-3 text-emerald-400">Template 3: The Thoughtful Question</h3>
                  <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

I read your article on [topic] and have been thinking about your point on [specific insight]. I'm curious—have you seen [related question]?

I ask because I'm working on [relevant thing] and trying to learn from people who've navigated this space.

[Your name]`}</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Follow-Up Sequence</h2>

              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">After Connection Accepted (Wait 1-2 days)</h3>
                  <p className="text-white/70 text-sm">
                    &ldquo;Thanks for connecting, [Name]! I meant what I said about [reference original message]. 
                    If you ever want to chat about [relevant topic], I&apos;d love to hear your thoughts. 
                    No pressure either way—happy to just stay connected.&rdquo;
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">If No Response to Initial Message (Wait 1 week)</h3>
                  <p className="text-white/70 text-sm">
                    &ldquo;Hi [Name]—wanted to bump this in case it got buried. Totally understand if you&apos;re swamped. 
                    If there&apos;s a better time to chat, just let me know. Either way, appreciate you connecting.&rdquo;
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-white/80">After Informational Interview (Same day)</h3>
                  <p className="text-white/70 text-sm">
                    &ldquo;[Name]—thank you again for the conversation today. Your insight on [specific thing they said] 
                    really shifted my thinking. I&apos;m going to [action you&apos;ll take based on advice]. I&apos;ll keep you posted 
                    on how it goes. Grateful for your time.&rdquo;
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Pro Tips for Better Responses</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Research Deep, Reference Light</h3>
                  <p className="text-white/70 text-sm">
                    Spend 10 minutes researching, but only reference 1-2 things. Shows effort without being creepy.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Match Their Energy</h3>
                  <p className="text-white/70 text-sm">
                    Look at how they communicate in posts. Formal person? Match it. Casual person? Loosen up.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Time Your Messages</h3>
                  <p className="text-white/70 text-sm">
                    Best: Tuesday-Thursday, 8-9 AM or 5-6 PM their timezone. Not Monday morning or Friday afternoon.
                  </p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h3 className="font-bold mb-2 text-emerald-400">Make the Ask Tiny</h3>
                  <p className="text-white/70 text-sm">
                    &ldquo;15-minute call&rdquo; &gt; &ldquo;pick your brain&rdquo;<br/>
                    &ldquo;Quick question&rdquo; &gt; &ldquo;want to learn everything&rdquo;
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Do</h2>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <ul className="space-y-2 text-white/70">
                  <li>❌ Wall of text about yourself</li>
                  <li>❌ Immediately pitch your services</li>
                  <li>❌ Generic compliments (&ldquo;great profile!&rdquo;)</li>
                  <li>❌ Ask for a job directly</li>
                  <li>❌ Send identical messages to 100 people</li>
                  <li>❌ Follow up aggressively</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Measuring Success</h2>
              <p className="text-white/70 mb-4">
                Track your outreach:
              </p>
              <ul className="space-y-2 text-white/70 mb-4">
                <li>• Messages sent</li>
                <li>• Connection acceptance rate (aim for 30%+)</li>
                <li>• Response rate (aim for 20%+)</li>
                <li>• Conversations that lead to something</li>
              </ul>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-white/40 mb-2 font-mono">ITERATION PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`This message got 5% response rate: [paste message]. How can I make it more compelling while keeping it short?`}</p>
              </div>
            </section>

            <section className="border-t border-white/10 pt-8">
              <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
              <ol className="space-y-2 text-white/70">
                <li><span className="text-emerald-400 font-mono">1.</span> Identify 10 people you want to connect with</li>
                <li><span className="text-emerald-400 font-mono">2.</span> Research each for 5-10 minutes</li>
                <li><span className="text-emerald-400 font-mono">3.</span> Use ChatGPT to draft personalized messages</li>
                <li><span className="text-emerald-400 font-mono">4.</span> Send 2-3 per day (don&apos;t spam)</li>
                <li><span className="text-emerald-400 font-mono">5.</span> Track responses and iterate</li>
              </ol>
              <p className="text-emerald-400 mt-6 font-medium">
                Quality beats quantity. Five thoughtful messages outperform fifty generic ones.
              </p>
            </section>

            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-3">Related Guides</h2>
              <p className="text-white/70 mb-4">
                Build your complete networking strategy:
              </p>
              <div className="flex flex-wrap gap-3">
                <Link 
                  href="/guides/ai-networking-emails"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  AI Networking Emails →
                </Link>
                <Link 
                  href="/guides/linkedin-ai-optimization"
                  className="text-emerald-400 hover:text-emerald-300 text-sm"
                >
                  LinkedIn Profile Optimization →
                </Link>
              </div>
            </section>
          </div>
        
          <RelatedGuides guides={[
                    {
                              slug: 'linkedin-ai-optimization',
                              title: 'LinkedIn Optimization',
                              description: 'Optimize your profile for maximum visibility.'
                    },
                    {
                              slug: 'ai-networking-emails',
                              title: 'AI Networking Emails',
                              description: 'Extend conversations beyond LinkedIn.'
                    },
                    {
                              slug: 'ai-personal-branding',
                              title: 'AI Personal Branding',
                              description: 'Build a brand that attracts opportunities.'
                    }
          ]} />
        </article>
    </div>
  )
}

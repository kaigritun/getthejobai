import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Networking Tips: Use ChatGPT to Expand Your Network (2026) | GetTheJobAI',
  description: 'Learn how to use AI tools like ChatGPT to build your professional network. Craft personalized outreach, prepare for events, and maintain relationships effectively.',
  keywords: ['ai networking tips', 'chatgpt networking', 'professional networking ai', 'linkedin outreach ai', 'networking with chatgpt'],
}

export default function AINetworkingTipsPage() {
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
            AI Networking Tips: How to Use ChatGPT to Expand Your Professional Network
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Building a professional network is one of the most valuable things you can do for your career. 
            But networking doesn&apos;t come naturally to everyone. Here&apos;s how AI tools can help you network more effectively in 2026.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why AI Makes Networking Easier</h2>
              <p className="text-white/70 mb-4">
                Traditional networking advice tells you to &quot;just put yourself out there.&quot; That&apos;s not helpful 
                if you don&apos;t know what to say.
              </p>
              <p className="text-white/70 mb-4">AI tools like ChatGPT can help you:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Craft personalized outreach messages
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Prepare talking points before meetings
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Follow up professionally after events
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  Research people and companies before connecting
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">1. Research Before You Connect</h2>
              <p className="text-white/70 mb-4">
                Before reaching out to anyone, use AI to gather context:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to connect with [Name], [Title] at [Company]. Based on their likely priorities, what would be a good reason to reach out that provides value to them?`}</p>
              </div>
              <p className="text-white/50 text-sm">
                This gives you a genuine reason to connect—not just &quot;I&apos;d love to pick your brain.&quot;
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Craft Personalized LinkedIn Messages</h2>
              <p className="text-white/70 mb-4">
                Generic connection requests get ignored. Personalized ones get accepted.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request to a [role] at [company]. I noticed [specific thing about their work]. Keep it under 300 characters and make it genuine, not salesy.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Prepare for Networking Events</h2>
              <p className="text-white/70 mb-4">
                Going to a conference or meetup? Use AI to prepare:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm attending [event name] focused on [topic]. Give me 5 conversation starters that would be interesting to [type of attendee] without being boring small talk.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Follow Up That Actually Gets Replies</h2>
              <p className="text-white/70 mb-4">
                Most people never follow up. Those who do usually send boring &quot;nice meeting you&quot; messages.
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a follow-up email to [Name] who I met at [event]. We talked about [topic]. I want to continue the relationship without asking for anything yet.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Maintain Relationships Over Time</h2>
              <p className="text-white/70 mb-4">
                Staying in touch is the hard part. AI can help you do it consistently:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`It's been 3 months since I spoke with [Name] who works in [industry]. Suggest a natural reason to reach out that adds value.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What AI Can&apos;t Do</h2>
              <p className="text-white/70 mb-4">
                AI won&apos;t build relationships for you. It helps with the words, not the genuine interest in other people.
              </p>
              <p className="text-white/70">
                The best networkers are curious about others. Use AI to express that curiosity more effectively—not to fake it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Tools to Try</h2>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">ChatGPT:</strong> Best for crafting messages and preparing talking points</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">LinkedIn + AI:</strong> Use ChatGPT to optimize your profile and messages</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">•</span>
                  <span><strong className="text-white">Crystal:</strong> AI personality insights before meetings</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-500/30 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-3">Start Small</h3>
              <p className="text-white/70 mb-4">
                Pick one networking task this week. Maybe it&apos;s reaching out to someone you admire, 
                or following up with someone you met recently.
              </p>
              <p className="text-white/70">
                Use the prompts above to craft your message. Notice how much easier it is when you have a starting point.
              </p>
            </section>

            <p className="text-white/50 italic border-t border-white/10 pt-8">
              Building your network is a long game. AI just makes each interaction a little bit better.
            </p>
          </div>
        </article>

        <RelatedGuides 
          guides={[
            { slug: 'ai-networking-emails', title: 'AI Networking Emails', description: 'Templates that actually get responses' },
            { slug: 'chatgpt-linkedin-outreach', title: 'ChatGPT LinkedIn Outreach', description: 'Network on LinkedIn with AI assistance' },
            { slug: 'ai-personal-branding', title: 'AI Personal Branding', description: 'Build your professional brand with AI' },
          ]}
        />
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

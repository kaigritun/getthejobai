import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ChatGPT LinkedIn Message Templates for Job Seekers (2025) | GetTheJobAI',
  description: 'Stop sending connection requests that get ignored. ChatGPT prompts for LinkedIn messages that hiring managers actually respond to.',
  keywords: ['linkedin message template', 'chatgpt linkedin', 'how to message hiring manager linkedin', 'linkedin connection request'],
}

export default function ChatGPTLinkedInMessagePage() {
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
            ChatGPT LinkedIn Messages That Get Responses
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Your LinkedIn messages are getting ignored because they sound like everyone else&apos;s. 
            Here&apos;s how to stand out with AI-powered personalization.
          </p>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-4">Why Most LinkedIn Messages Fail</h2>
              <p className="text-white/70 mb-4">
                People get dozens of connection requests daily. Here&apos;s what gets auto-rejected:
              </p>
              <ul className="space-y-2 text-white/70 mb-6">
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;I&apos;d like to add you to my professional network&quot; (the default)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;Hi, I came across your profile...&quot; (vague, impersonal)
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400">✗</span>
                  &quot;I&apos;m looking for opportunities and thought you might help&quot; (asking before giving)
                </li>
              </ul>
              <p className="text-white/70 mb-4">What actually works:</p>
              <ul className="space-y-2 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Reference something specific they posted or did
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Give value before asking for anything
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400">✓</span>
                  Make the ask tiny (easy yes)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Connection Request Messages (300 char limit)</h2>
              <p className="text-white/70 mb-4">
                LinkedIn connection requests have a 300-character limit. Every word counts.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-white/90">To a Hiring Manager</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request (under 300 characters) to a hiring manager at [company]. 

I want to express interest in [role type] roles. Reference something specific: [their recent post/company news/something from their profile].

Don't ask for a job directly. Just ask to connect.`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Hiring Manager</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm">{`Hi [Name]—saw your post about [topic]. Really resonated with [specific point]. I'm a [your role] exploring [area]—would love to connect and follow your work.`}</p>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-white/90">To Someone at Your Target Company</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request (under 300 characters) to an employee at [company] who does similar work to what I do.

I want to learn about their experience there. Not asking for a referral—just a genuine connection.

Their role: [their title]
My background: [brief]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Peer Connection</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm">{`Hi [Name]—fellow [role type] here. Noticed you've been at [Company] for [X years]. I'm curious about the [team/product] work you do. Would love to connect.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Follow-Up Messages (After Connected)</h2>
              <p className="text-white/70 mb-4">
                They accepted. Now what? Don&apos;t immediately pitch. Build the relationship first.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-white/90">The &quot;Genuine Interest&quot; Follow-Up</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Someone at [company] accepted my LinkedIn request. I want to start a conversation without immediately asking about jobs.

Write a follow-up message that:
- Thanks them for connecting
- Asks one thoughtful question about their work or company
- Is under 100 words
- Feels like the start of a real conversation, not a pitch`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Post-Connection</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Thanks for connecting, [Name]. 

I've been following [Company]'s work on [specific thing]—curious what it's actually like on the inside. How long have you been there, and what keeps you excited about it?

No agenda, just genuinely curious.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Job Inquiry Message</h2>
              <p className="text-white/70 mb-4">
                When you&apos;re ready to ask about opportunities (after building some rapport):
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I've been connected with [Name] at [Company] for a while. We've exchanged a few messages. Now I want to ask about [role type] opportunities.

Write a message that:
- References our previous conversations naturally
- Asks if they know of openings or the right person to talk to
- Makes it easy to say no (no pressure)
- Offers to send a resume if they're open to it`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Job Inquiry</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hey [Name]—hope things are going well on your end.

I wanted to ask: I'm exploring [role type] roles and have been interested in [Company] for a while. Any chance there are openings on your radar, or someone you'd recommend I reach out to?

Totally understand if not—just thought I'd ask since we've been chatting. Happy to send my resume if helpful.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Messaging Strangers Cold</h2>
              <p className="text-white/70 mb-4">
                Sometimes you need to skip the connection request and InMail directly:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn InMail to a [their title] at [company] about [role/topic]. I have no connection to them.

The message should:
- Hook them in the first line (why I'm reaching out to THEM)
- Establish credibility fast (1 sentence)
- Ask one specific thing
- Be under 150 words

My background: [brief]
What I want: [specific ask]`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Cold InMail</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hi [Name],

I saw [Company] is [doing something specific]. As someone who's spent [X years] in [relevant field], I'd love to learn more about the challenges you're tackling.

Would you have 15 minutes for a quick call? I'm exploring opportunities in this space and think my background in [specific skill] could be relevant.

Either way, appreciate you reading this.

[Your name]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Commenting Strategy (The Underrated Move)</h2>
              <p className="text-white/70 mb-4">
                Before you message, comment on their posts. It warms up the relationship so your message doesn&apos;t feel random.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`A [title] at [target company] posted about [topic]. I want to leave a thoughtful comment that:
- Shows I actually read and understood their post
- Adds value (insight, question, or relevant experience)
- Isn't sycophantic ("Great post!")
- Gets them to notice me

Their post summary: [brief description]`}</p>
              </div>
              <p className="text-white/50 text-sm">
                Comment on 3-4 posts before reaching out. They&apos;ll recognize your name.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">The Referral Ask</h2>
              <p className="text-white/70 mb-4">
                Asking for a referral is high-stakes. Here&apos;s how to do it right:
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to ask [Name] at [Company] for a referral to a specific job posting. We're [connected but not close / former colleagues / friends].

Write a message that:
- Acknowledges the ask is a favor
- Explains why I'm a fit in 1-2 sentences
- Links to the specific job
- Makes it easy to say no
- Offers to make their life easier (send resume, talking points, etc.)`}</p>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-emerald-400">Template: Referral Request</h3>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-white/70 text-sm whitespace-pre-wrap">{`Hey [Name],

Big ask incoming—feel free to say no.

I saw [Company] has a [role title] opening and I think I'd be a strong fit (I've spent [X years] doing exactly this kind of work at [relevant experience]).

Would you be comfortable submitting a referral? I can send my resume + a quick summary of why I'm a fit so it takes you minimal time.

Totally understand if it's not something you can do. Appreciate you either way.

[Link to job]`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Batching with ChatGPT</h2>
              <p className="text-white/70 mb-4">
                Personalizing messages at scale:
              </p>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-6">
                <p className="text-sm text-white/40 mb-2 font-mono">BATCH PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm reaching out to 10 people at different companies today. For each one, I'll give you:
- Their name and company
- Their role
- Something specific about them (post, background, shared connection)

Write personalized LinkedIn messages using this framework:
[Hook specific to them] + [Brief credibility] + [Specific ask]

Keep each under 100 words. Make each feel individually written.`}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">What NOT to Do</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t pitch in the connection request.</strong> Connect first, build rapport, then ask.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t send the same message to everyone.</strong> Personalization is the whole point.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t apologize for reaching out.</strong> &quot;Sorry to bother you&quot; makes you seem low-status.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-400 font-bold">✗</span>
                  <span><strong className="text-white">Don&apos;t write novels.</strong> Short messages get read. Long ones don&apos;t.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Takeaways</h2>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">1.</span>
                  <span>Personalize every message (reference their content, background, or news)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">2.</span>
                  <span>Build rapport before asking for favors</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">3.</span>
                  <span>Keep it short—respect their time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">4.</span>
                  <span>Make the ask easy to say yes to</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono">5.</span>
                  <span>Comment on posts before messaging (warm up the relationship)</span>
                </li>
              </ul>
            </section>
          </div>
        </article>

        <div className="mt-16">
          <EmailSignup />
        </div>

        <RelatedGuides 
          guides={[
            { slug: 'chatgpt-linkedin-profile', title: 'Optimize LinkedIn Profile', description: 'Get your profile ready before reaching out.' },
            { slug: 'chatgpt-cold-email-recruiter', title: 'Cold Email Recruiters', description: 'When LinkedIn isn\'t enough, try email.' },
            { slug: 'ai-networking-emails', title: 'Networking Email Templates', description: 'Expand beyond LinkedIn outreach.' },
          ]}
        />
    </div>
  )
}

import Link from 'next/link'
import EmailSignup from '@/components/EmailSignup'
import RelatedGuides from '@/components/RelatedGuides'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI LinkedIn Optimization: Get Noticed by Recruiters in 2026 | GetTheJobAI',
  description: 'Use AI to optimize your LinkedIn profile and get noticed by recruiters. Complete guide with prompts for headlines, summaries, posts, networking, and job search.',
  keywords: ['ai linkedin optimization', 'linkedin ai tools', 'linkedin recruiter', 'linkedin profile optimization', 'chatgpt linkedin', 'linkedin job search 2026'],
}

export default function AILinkedInOptimizationPage() {
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
            LinkedIn Optimization
          </p>
          <h1 className="text-4xl font-bold mb-6">
            AI LinkedIn Optimization: Get Noticed by Recruiters in 2026
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed">
            Recruiters spend 6 seconds scanning your LinkedIn profile. In 2026, with AI-powered recruiter tools 
            filtering thousands of candidates daily, those 6 seconds matter more than ever. This guide shows you 
            how to use AI to optimize every element of your LinkedIn presence—from headline to posts to networking.
          </p>

          <div className="space-y-12">
            
            {/* Section 1: Why LinkedIn Matters */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Why LinkedIn Matters for Job Search in 2026</h2>
              <p className="text-white/70 mb-4">
                LinkedIn isn&apos;t just a digital resume anymore—it&apos;s where hiring happens. In 2026, the platform 
                has become the primary channel for professional recruitment, with 95% of recruiters actively using 
                LinkedIn to find and vet candidates before any other platform.
              </p>
              <p className="text-white/70 mb-4">
                Here&apos;s what&apos;s changed: Recruiters now use AI-powered search tools that scan profiles at scale. 
                They&apos;re not reading your profile word-by-word anymore. They&apos;re using filters, keyword searches, 
                and AI-generated candidate rankings. If your profile isn&apos;t optimized for these systems, you&apos;re 
                invisible—no matter how qualified you are.
              </p>
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4">
                <p className="text-emerald-400 font-semibold mb-2">The 2026 Reality:</p>
                <ul className="text-white/70 space-y-1">
                  <li>• 87% of recruiters use LinkedIn as their primary sourcing tool</li>
                  <li>• Profiles with optimized headlines get 40% more InMails</li>
                  <li>• Active posters are 3x more likely to be contacted by recruiters</li>
                  <li>• AI recruiter tools filter out 70% of profiles before a human sees them</li>
                </ul>
              </div>
              <p className="text-white/70">
                The good news? AI can help you beat AI. The same technology recruiters use to filter candidates 
                can help you craft a profile that passes every filter and stands out to humans.
              </p>
            </section>

            {/* Section 2: AI Tools for LinkedIn Optimization */}
            <section>
              <h2 className="text-2xl font-bold mb-6">AI Tools for LinkedIn Optimization</h2>
              <p className="text-white/70 mb-6">
                You don&apos;t need expensive software. ChatGPT, Claude, and free AI tools can transform your 
                LinkedIn presence. Here&apos;s how to use them for each profile element.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Profile Headline Generators</h3>
                  <p className="text-white/70 mb-4">
                    Your headline is prime real estate—120 characters that appear everywhere: search results, 
                    comments, messages, and connection requests. Most people waste it with just their job title.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Before (Generic):</p>
                      <p className="text-white/70 text-sm">&ldquo;Software Engineer at Tech Company&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">After (AI-Optimized):</p>
                      <p className="text-white/70 text-sm">&ldquo;Full-Stack Engineer | React & Node.js | Building scalable SaaS products | Open to Senior roles&rdquo;</p>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">HEADLINE GENERATOR PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm a [current role] with [X years] experience in [key skills]. I'm targeting [target role] positions at [type of company: startup/enterprise/agency].

Write 5 LinkedIn headlines that:
1. Include keywords recruiters search for
2. Show my specialty and value proposition
3. Are under 120 characters each
4. Don't use buzzwords like "passionate" or "driven"

Include one headline that signals I'm open to opportunities.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Summary/About Section Writers</h3>
                  <p className="text-white/70 mb-4">
                    Your About section is where you tell your story. But most people either leave it blank or 
                    write boring corporate-speak. AI can help you write something that&apos;s both keyword-rich 
                    and genuinely engaging.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">ABOUT SECTION PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn About section for a [role] with this background:
- Experience: [your background]
- Key achievements: [2-3 highlights]
- Target role: [what you're looking for]
- Industry keywords to include: [list 5-7 keywords]

Requirements:
- First person, conversational tone
- Start with a hook that makes recruiters want to keep reading
- 250-300 words
- Include a clear call to action at the end
- Naturally incorporate all keywords without stuffing`}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Before:</p>
                      <p className="text-white/70 text-sm">&ldquo;Experienced marketing professional with a track record of success. Passionate about digital marketing and brand strategy.&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">After:</p>
                      <p className="text-white/70 text-sm">&ldquo;I turned a $50K ad budget into $2.3M in pipeline revenue last year. Here&apos;s how I approach B2B marketing...&rdquo;</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Skills Recommendations</h3>
                  <p className="text-white/70 mb-4">
                    LinkedIn&apos;s Skills section directly affects search rankings. The right skills = more visibility. 
                    AI can analyze job postings to find exactly which skills you should add.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">SKILLS ANALYSIS PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Analyze these 5 job postings for [target role]:

[Paste job postings]

Extract:
1. Top 15 skills mentioned across all postings
2. Skills that appear in ALL postings (must-haves)
3. Skills that differentiate top candidates
4. Any skills I should add to LinkedIn that I might have overlooked

My current skills: [list your skills]
Flag any gaps.`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Photo Optimization</h3>
                  <p className="text-white/70 mb-4">
                    Profiles with professional photos get 14x more views. AI tools can now help you evaluate 
                    and improve your LinkedIn photo.
                  </p>
                  <ul className="text-white/70 space-y-2">
                    <li>• <strong className="text-white">Photofeeler</strong> — AI rates your photo&apos;s competence, likability, and influence</li>
                    <li>• <strong className="text-white">Remini</strong> — Enhance photo quality and lighting</li>
                    <li>• <strong className="text-white">Remove.bg</strong> — Clean up distracting backgrounds</li>
                    <li>• <strong className="text-white">Canva Magic Edit</strong> — Adjust lighting and minor imperfections</li>
                  </ul>
                  <p className="text-white/50 text-sm mt-4">
                    Tip: Use a headshot with your face taking up 60% of the frame, solid background, and natural lighting.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3: Using AI for LinkedIn Activity */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Using AI for LinkedIn Activity</h2>
              <p className="text-white/70 mb-6">
                A great profile is table stakes. In 2026, recruiters actively look for candidates who engage 
                on the platform. Here&apos;s how AI can help you build visibility without spending hours daily.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Writing Engaging Posts</h3>
                  <p className="text-white/70 mb-4">
                    LinkedIn posts that get engagement follow predictable patterns. AI can help you hit those 
                    patterns while keeping your authentic voice.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">POST GENERATOR PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Create a LinkedIn post about [topic] for a [your role].

Requirements:
- Start with a hook (question, bold statement, or surprising stat)
- Use short paragraphs (1-2 sentences max)
- Include line breaks for readability
- 150-200 words
- End with a question to drive comments
- Don't use hashtags in the middle—only 3-5 at the end
- Sound like a human, not a robot

My voice: [describe your tone: direct, thoughtful, casual, etc.]`}</p>
                  </div>
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-semibold text-sm mb-2">Example AI-Generated Post:</p>
                    <p className="text-white/70 text-sm whitespace-pre-wrap">{`I got rejected from 47 jobs before landing my dream role.

Here's what finally changed:

I stopped applying to everything.
I started researching companies like I was preparing for an interview.
I reached out to 3 people at each company before applying.

The 48th application? I knew the team, the challenges, and exactly how I could help.

Got the offer in 2 weeks.

Sometimes fewer applications = faster results.

What's the biggest shift that helped your job search?`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Commenting Strategically</h3>
                  <p className="text-white/70 mb-4">
                    Thoughtful comments get your profile in front of thousands of people. AI can help you 
                    craft comments that add value and get noticed.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">STRATEGIC COMMENT PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I want to comment on this LinkedIn post: [paste post]

Write 3 comment options that:
1. Add a new perspective or insight (not just "Great post!")
2. Share a brief relevant experience
3. Are 2-4 sentences max
4. End with a thought that might continue the conversation

I'm a [your role] trying to be seen by [target audience].`}</p>
                  </div>
                  <p className="text-white/50 text-sm mt-4">
                    Pro tip: Comment on posts from recruiters and hiring managers at your target companies within 
                    the first hour of posting. Early comments get the most visibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Crafting Connection Messages</h3>
                  <p className="text-white/70 mb-4">
                    Blank connection requests get ignored. AI-crafted personalized messages get accepted.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4 mb-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">CONNECTION REQUEST PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Write a LinkedIn connection request to [Name], who is a [their role] at [company].

Context:
- Why I want to connect: [reason]
- Something specific about them: [detail from their profile]
- My background: [brief context]

Requirements:
- Under 200 characters (LinkedIn limit for connection notes)
- Reference something specific about them
- Clear but not pushy
- Don't ask for anything in the first message`}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      <p className="text-red-400 font-semibold text-sm mb-2">Bad:</p>
                      <p className="text-white/70 text-sm">&ldquo;Hi, I&apos;d like to add you to my professional network.&rdquo;</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-400 font-semibold text-sm mb-2">Good:</p>
                      <p className="text-white/70 text-sm">&ldquo;Hi Sarah—your post on product-led growth metrics was spot-on. I&apos;m working on similar challenges at my SaaS startup. Would love to connect.&rdquo;</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Preparing for Networking</h3>
                  <p className="text-white/70 mb-4">
                    Before messaging someone or meeting at an event, AI can help you research and prepare talking points.
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">NETWORKING PREP PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm about to network with [Name], [their role] at [company].

From their LinkedIn profile:
[Paste their About, recent posts, experience highlights]

Help me prepare:
1. 3 thoughtful questions to ask them
2. 2 areas where our experiences might overlap
3. 1 way I might be able to help them (give before you ask)
4. Any icebreakers based on their recent activity`}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Step-by-Step Optimization with ChatGPT */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Step-by-Step LinkedIn Profile Optimization with ChatGPT</h2>
              <p className="text-white/70 mb-4">
                Here&apos;s a complete workflow to optimize your entire profile in one session.
              </p>

              <div className="space-y-6">
                <div className="border-l-2 border-emerald-500/50 pl-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Step 1: Audit (10 minutes)</p>
                  <p className="text-white/70 mb-2">
                    Export or copy your entire LinkedIn profile. Paste it into ChatGPT with this prompt:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm">{`Review my LinkedIn profile for a [target role] job search. Score each section 1-10 and identify the top 5 improvements that would make the biggest impact.`}</p>
                  </div>
                </div>

                <div className="border-l-2 border-emerald-500/50 pl-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Step 2: Keyword Research (15 minutes)</p>
                  <p className="text-white/70 mb-2">
                    Find 5 job postings for your target role. Use the skills analysis prompt from above to extract 
                    must-have keywords. Create a master keyword list to weave throughout your profile.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500/50 pl-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Step 3: Rewrite Headline & About (20 minutes)</p>
                  <p className="text-white/70 mb-2">
                    Use the prompts above to generate options. Pick the best, then edit to sound like you. 
                    Read it out loud—if it sounds robotic, revise.
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500/50 pl-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Step 4: Transform Experience Bullets (30 minutes)</p>
                  <p className="text-white/70 mb-2">
                    For each role, paste your current bullets and use this prompt:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm">{`Rewrite these experience bullets with:
- Specific metrics and outcomes (add [estimate] if I don't have exact numbers)
- Action verbs that match [target role]
- Keywords: [your keyword list]

Keep each bullet under 2 lines.`}</p>
                  </div>
                </div>

                <div className="border-l-2 border-emerald-500/50 pl-4">
                  <p className="text-emerald-400 font-mono text-sm mb-2">Step 5: Optimize Settings (5 minutes)</p>
                  <p className="text-white/70">
                    Turn on &ldquo;Open to Work&rdquo; (recruiters only if you&apos;re employed). Enable Creator Mode if you 
                    plan to post regularly. Add a custom URL (linkedin.com/in/yourname).
                  </p>
                </div>
              </div>
            </section>

            <EmailSignup 
              headline="Get our LinkedIn template pack"
              buttonText="Send Templates"
            />

            {/* Section 5: AI-Powered Job Search */}
            <section>
              <h2 className="text-2xl font-bold mb-4">AI-Powered Job Search on LinkedIn</h2>
              <p className="text-white/70 mb-4">
                Once your profile is optimized, AI can help you search smarter, not harder.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Finding Hidden Opportunities</h3>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-sm text-white/40 mb-2 font-mono">JOB SEARCH STRATEGY PROMPT</p>
                    <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`I'm looking for [target role] positions.

Help me create a LinkedIn job search strategy:
1. Search strings that find jobs before they're widely posted
2. Companies to follow based on my target role
3. Hashtags to monitor for job postings
4. People to follow who frequently share opportunities
5. LinkedIn groups where jobs get posted first`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Identifying Decision Makers</h3>
                  <p className="text-white/70 mb-4">
                    For each interesting job, use AI to figure out who to connect with:
                  </p>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                    <p className="text-white/90 font-mono text-sm">{`This job posting is for [role] at [company]. Who should I connect with on LinkedIn—the hiring manager, team lead, or HR? What titles should I search for?`}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Crafting Application Messages</h3>
                  <p className="text-white/70 mb-4">
                    When you apply through Easy Apply, stand out by also messaging someone at the company. 
                    Check out our <Link href="/guides/chatgpt-resume-prompts" className="text-emerald-400 hover:text-emerald-300">ChatGPT Resume Prompts guide</Link> for 
                    tailoring your resume to match, and our <Link href="/guides/ai-interview-preparation" className="text-emerald-400 hover:text-emerald-300">AI Interview Preparation guide</Link> when 
                    you land the interview.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Avoid AI Detection */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Avoid AI Detection: Keep It Authentic</h2>
              <p className="text-white/70 mb-4">
                Recruiters can spot AI-generated content. Profiles that sound robotic get skipped. Here&apos;s how 
                to use AI without losing your human voice.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Use AI for structure, not final copy.</strong> Let AI generate options, then rewrite in your voice.</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Add specific details AI can&apos;t know.</strong> Real project names, specific numbers, unique stories.</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Include imperfections.</strong> One-sentence paragraphs. Informal language. The occasional fragment.</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-emerald-400">✓</span>
                  <span><strong className="text-white">Read it out loud.</strong> If it sounds like a press release, it&apos;s wrong.</span>
                </div>
                <div className="flex gap-3 text-white/70">
                  <span className="text-red-400">✗</span>
                  <span><strong className="text-white">Avoid these AI tells:</strong> &ldquo;I&apos;m passionate about...&rdquo;, &ldquo;leveraging&rdquo;, &ldquo;synergy&rdquo;, &ldquo;seasoned professional&rdquo;, lists of generic adjectives.</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-4 mt-6">
                <p className="text-sm text-white/40 mb-2 font-mono">HUMANIZATION PROMPT</p>
                <p className="text-white/90 font-mono text-sm whitespace-pre-wrap">{`Review this LinkedIn content and make it sound more human:

[paste AI-generated content]

- Remove corporate buzzwords
- Add conversational phrases I might actually say
- Vary sentence length
- Keep the key messages but make it sound like a real person wrote it over coffee, not a marketing team`}</p>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Your LinkedIn Optimization Checklist</h2>
              <div className="space-y-2 text-white/70">
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Audit current profile with AI</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Research keywords from 5 target job postings</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Generate and refine new headline</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Rewrite About section with hook + keywords</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Transform experience bullets with metrics</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Update skills section based on analysis</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Upgrade profile photo</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Schedule first week of posts</span>
                </label>
                <label className="flex items-center gap-3">
                  <input type="checkbox" className="accent-emerald-500" />
                  <span>Enable Open to Work for recruiters</span>
                </label>
              </div>
              <p className="text-emerald-400 mt-4 font-medium">
                Complete this in one afternoon and you&apos;ll have a better profile than 95% of job seekers.
              </p>
            </section>

            {/* Tools Link */}
            <section>
              <h2 className="text-xl font-bold mb-3">Recommended Tools</h2>
              <p className="text-white/70 mb-4">
                See our full list of <Link href="/tools" className="text-emerald-400 hover:text-emerald-300">AI job search tools</Link> for 
                more resources to supercharge your job hunt.
              </p>
            </section>

          </div>

          <RelatedGuides guides={[
            {
              slug: 'chatgpt-resume-prompts',
              title: 'ChatGPT Resume Prompts',
              description: 'Copy-paste prompts to improve your resume fast.'
            },
            {
              slug: 'ai-interview-preparation',
              title: 'AI Interview Preparation',
              description: 'Prepare for interviews with AI mock sessions.'
            },
            {
              slug: 'ai-networking-emails',
              title: 'AI Networking Emails',
              description: 'Templates for cold outreach that gets responses.'
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

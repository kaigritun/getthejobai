import Link from 'next/link'
import RelatedGuides from '@/components/RelatedGuides'
import EmailSignup from '@/components/EmailSignup'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '50 ChatGPT Interview Prompts: Practice Questions & Answers | GetTheJobAI',
  description: 'Practice interview answers with 50 ChatGPT prompts. Behavioral questions, salary negotiation, and mock interview scripts. Copy-paste and customize.',
  keywords: ['chatgpt interview prompts', 'interview practice prompts', 'chatgpt interview questions', 'ai interview prep'],
}

export default function ChatGPTInterviewPromptsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link 
          href="/guides" 
          className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
        >
          ← Back to Guides
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4">50 ChatGPT Interview Prompts</h1>
          <p className="text-xl text-white/70 mb-8">
            Copy-paste prompts to practice interview answers. Behavioral questions, salary negotiation, and mock interview scripts.
          </p>

          <h2>How to Use These Prompts</h2>
          <p>
            Don't just read AI answers—practice saying them out loud. Paste the job description first for tailored responses.
          </p>

          <h2>Behavioral Questions (STAR Method)</h2>
          
          <h3>Leadership & Teamwork (1-10)</h3>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>1.</strong> "Help me answer: 'Tell me about a time you led a team through a difficult project.' Use STAR method. My context: [YOUR EXPERIENCE]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>2.</strong> "Generate an answer for: 'Describe a time you worked with a difficult colleague.' My situation: [BRIEF CONTEXT]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>3.</strong> "How should I answer: 'Tell me about a time you disagreed with your manager'?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>4.</strong> "Help me craft an answer for: 'Describe your leadership style.' My background: [ROLE/TEAM SIZE]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>5.</strong> "Write a STAR response for: 'Tell me about a time you motivated a struggling team member.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>6.</strong> "How do I answer: 'Give an example of when you had to delegate effectively'?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>7.</strong> "Help me respond to: 'Tell me about a cross-functional project you led.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>8.</strong> "Generate an answer for: 'How do you handle conflict on your team?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>9.</strong> "Write a response for: 'Describe a time you had to give difficult feedback.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>10.</strong> "How should I answer: 'Tell me about a time you helped someone else succeed'?"
            </p>
          </div>

          <h3>Problem Solving (11-20)</h3>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>11.</strong> "Help me answer: 'Tell me about a time you solved a complex problem.' My example: [PROBLEM]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>12.</strong> "Generate a STAR response for: 'Describe a time you made a decision with incomplete information.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>13.</strong> "How do I answer: 'Tell me about a time you failed'? My failure: [DESCRIPTION]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>14.</strong> "Write an answer for: 'Describe a time you made an unpopular decision.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>15.</strong> "Help me respond to: 'Tell me about a time you had to pivot mid-project.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>16.</strong> "Generate an answer for: 'How do you prioritize when everything is urgent?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>17.</strong> "How should I answer: 'Describe a time you identified a problem before anyone else'?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>18.</strong> "Write a response for: 'Tell me about a time you had to learn something quickly.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>19.</strong> "Help me answer: 'Describe a time you improved a process or system.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>20.</strong> "Generate an answer for: 'Tell me about your biggest professional mistake.'"
            </p>
          </div>

          <h3>Pressure & Adaptability (21-30)</h3>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>21.</strong> "Help me answer: 'Tell me about a time you worked under tight deadlines.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>22.</strong> "Generate a response for: 'Describe how you handle stress.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>23.</strong> "How do I answer: 'Tell me about a time you adapted to unexpected changes'?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>24.</strong> "Write an answer for: 'Describe managing multiple competing priorities.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>25.</strong> "Help me respond to: 'Tell me about receiving criticism. How did you respond?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>26.</strong> "Generate an answer for: 'Describe working outside your comfort zone.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>27.</strong> "How should I answer: 'Tell me about a project that didn't go as planned'?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>28.</strong> "Write a response for: 'Describe how you handle ambiguity.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>29.</strong> "Help me answer: 'Tell me about pushing back against unrealistic expectations.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>30.</strong> "Generate an answer for: 'Describe a time you went above and beyond.'"
            </p>
          </div>

          <h2>Classic Questions (31-40)</h2>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>31.</strong> "Help me craft a 60-second 'Tell me about yourself' for [JOB TITLE]."
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>32.</strong> "How should I answer: 'Why do you want this job?' for [COMPANY]?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>33.</strong> "Generate an answer for: 'Why are you leaving your current job?' My real reason: [REASON]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>34.</strong> "Help me answer: 'What's your greatest strength?' for [JOB TITLE]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>35.</strong> "Write an answer for: 'What's your greatest weakness?' My weakness: [WEAKNESS]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>36.</strong> "How do I answer: 'Where do you see yourself in 5 years?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>37.</strong> "Generate an answer for: 'Why should we hire you?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>38.</strong> "Help me respond to: 'What do you know about our company?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>39.</strong> "Write an answer for: 'What are you looking for in your next role?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>40.</strong> "How should I answer: 'What makes you unique?'"
            </p>
          </div>

          <h2>Salary Negotiation (41-45)</h2>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>41.</strong> "How do I answer: 'What are your salary expectations?' Target: [RANGE]"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>42.</strong> "Generate a counter-offer script. They offered [AMOUNT], I want [AMOUNT]."
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>43.</strong> "Help me respond to: 'What's your current salary?'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>44.</strong> "Write a response for when they say: 'That's outside our budget.'"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>45.</strong> "How do I negotiate non-salary benefits? I want: [LIST]"
            </p>
          </div>

          <h2>Questions to Ask Them (46-50)</h2>
          <div className="bg-white/5 border border-white/10 p-4 rounded-lg my-4 space-y-3">
            <p className="text-emerald-400 text-sm">
              <strong>46.</strong> "Generate 5 thoughtful questions to ask at the end of an interview for [JOB TITLE]."
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>47.</strong> "What questions assess work-life balance without asking directly?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>48.</strong> "Generate questions about growth opportunities at [COMPANY TYPE]."
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>49.</strong> "What questions reveal red flags about company culture?"
            </p>
            <p className="text-emerald-400 text-sm">
              <strong>50.</strong> "Write 3 questions showing I've researched [COMPANY]."
            </p>
          </div>

          <h2>Mock Interview Prompt</h2>
          <div className="bg-white/5 border border-white/10 p-6 rounded-lg my-6">
            <p className="text-emerald-400 whitespace-pre-wrap text-sm">
{`Act as an interviewer for [COMPANY] hiring a [JOB TITLE].

Job description: [PASTE]

Conduct a 30-minute mock interview:
1. Start with "Tell me about yourself"
2. Ask 4-5 behavioral questions
3. Ask 2-3 technical questions
4. Leave time for my questions

After each answer, give feedback:
- What worked
- What could be stronger
- Suggested improvement`}
            </p>
          </div>

          <h2>Night-Before Checklist</h2>
          <ol>
            <li>Practice "Tell me about yourself" out loud (3x)</li>
            <li>Prepare 3 STAR stories that flex to multiple questions</li>
            <li>Research the company (recent news, products, mission)</li>
            <li>Prepare 5 questions to ask them</li>
            <li>Know your salary range and negotiation floor</li>
          </ol>
        </article>

        <div className="mt-12">
          <EmailSignup />
        </div>

        <RelatedGuides guides={[
          { slug: 'chatgpt-interview-preparation', title: 'ChatGPT Interview Preparation Guide', description: 'Comprehensive interview prep with ChatGPT.' },
          { slug: 'ai-mock-interview', title: 'AI Mock Interview Practice', description: 'Practice with AI interview simulators.' },
          { slug: 'ai-salary-negotiation', title: 'AI Salary Negotiation Guide', description: 'Negotiate better offers with AI assistance.' },
        ]} />
    </div>
  )
}

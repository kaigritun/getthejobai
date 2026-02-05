// Tool configurations for dynamic tool generation
// Add tools here, pages auto-generate from config

export type ToolType = 'score' | 'quiz' | 'generator'

export interface ScoreCriteria {
  name: string
  weight: number
  keywords: string[]
  description: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: { value: string; label: string; points: Record<string, number> }[]
}

export interface QuizResult {
  id: string
  title: string
  description: string
  recommendations: string[]
}

export interface GeneratorField {
  id: string
  label: string
  type: 'text' | 'textarea' | 'select'
  placeholder?: string
  options?: { value: string; label: string }[]
  required?: boolean
}

export interface BaseTool {
  slug: string
  name: string
  description: string
  category: string
  type: ToolType
  seo: {
    title: string
    description: string
  }
}

export interface ScoreTool extends BaseTool {
  type: 'score'
  inputLabel: string
  inputPlaceholder: string
  criteria: ScoreCriteria[]
  tips: string[]
}

export interface QuizTool extends BaseTool {
  type: 'quiz'
  questions: QuizQuestion[]
  results: QuizResult[]
}

export interface GeneratorTool extends BaseTool {
  type: 'generator'
  fields: GeneratorField[]
  template: string // Template with {{field_id}} placeholders
  outputLabel: string
}

export type Tool = ScoreTool | QuizTool | GeneratorTool

// ============ RESUME TOOLS ============

export const resumeScoreCalculator: ScoreTool = {
  slug: 'resume-score-calculator',
  name: 'Resume Score Calculator',
  description: 'Get instant feedback on your resume with our AI-powered scoring system',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'Free Resume Score Calculator | Rate Your Resume Instantly',
    description: 'Paste your resume and get an instant ATS score with actionable feedback. Free AI-powered resume analysis tool.',
  },
  inputLabel: 'Paste Your Resume',
  inputPlaceholder: 'Paste the full text of your resume here...',
  criteria: [
    {
      name: 'Contact Info',
      weight: 10,
      keywords: ['email', '@', 'phone', 'linkedin', 'github', 'portfolio'],
      description: 'Complete contact information including email and professional links',
    },
    {
      name: 'Quantified Achievements',
      weight: 20,
      keywords: ['%', 'increased', 'decreased', 'reduced', 'improved', 'grew', 'saved', '$', 'million', 'thousand', '10x', '2x', '3x'],
      description: 'Measurable results with numbers, percentages, or dollar amounts',
    },
    {
      name: 'Action Verbs',
      weight: 15,
      keywords: ['led', 'managed', 'developed', 'created', 'built', 'designed', 'implemented', 'launched', 'drove', 'achieved', 'delivered', 'optimized', 'automated', 'scaled'],
      description: 'Strong action verbs that demonstrate impact',
    },
    {
      name: 'Technical Skills',
      weight: 15,
      keywords: ['python', 'javascript', 'react', 'node', 'sql', 'aws', 'docker', 'kubernetes', 'api', 'database', 'machine learning', 'ai', 'typescript', 'java', 'c++', 'excel', 'tableau', 'figma', 'jira'],
      description: 'Relevant technical skills and tools',
    },
    {
      name: 'Experience Section',
      weight: 20,
      keywords: ['experience', 'work', 'company', 'role', 'position', 'responsibilities', '2024', '2023', '2022', '2021', 'present', 'current'],
      description: 'Clear work experience with dates and company names',
    },
    {
      name: 'Education',
      weight: 10,
      keywords: ['bachelor', 'master', 'phd', 'degree', 'university', 'college', 'certification', 'certified', 'course', 'bootcamp'],
      description: 'Education background and relevant certifications',
    },
    {
      name: 'Length & Format',
      weight: 10,
      keywords: [], // Special: check word count
      description: 'Appropriate length (400-800 words for most roles)',
    },
  ],
  tips: [
    'Add specific numbers to your achievements (e.g., "Increased sales by 25%")',
    'Start bullet points with strong action verbs',
    'Include relevant keywords from the job description',
    'Keep it to 1-2 pages max',
    'Add a LinkedIn profile URL',
  ],
}

export const coverLetterScoreCalculator: ScoreTool = {
  slug: 'cover-letter-score-calculator',
  name: 'Cover Letter Score Calculator',
  description: 'Analyze your cover letter for impact, personalization, and ATS compatibility',
  category: 'Cover Letter',
  type: 'score',
  seo: {
    title: 'Free Cover Letter Score Calculator | Instant Cover Letter Analysis',
    description: 'Get instant feedback on your cover letter with AI-powered analysis. Check tone, personalization, and hiring manager appeal.',
  },
  inputLabel: 'Paste Your Cover Letter',
  inputPlaceholder: 'Paste your cover letter here...',
  criteria: [
    {
      name: 'Personalization',
      weight: 25,
      keywords: ['dear', 'hiring manager', 'team', 'company', 'role', 'position', 'excited', 'passionate', 'interested'],
      description: 'Shows you researched the company and role',
    },
    {
      name: 'Value Proposition',
      weight: 25,
      keywords: ['experience', 'skills', 'achieved', 'delivered', 'contributed', 'helped', 'can bring', 'will add', 'unique', 'standout'],
      description: 'Clearly states what you can offer the company',
    },
    {
      name: 'Specific Examples',
      weight: 20,
      keywords: ['%', '$', 'increased', 'led', 'managed', 'project', 'initiative', 'example', 'specifically', 'instance'],
      description: 'Concrete examples backing up your claims',
    },
    {
      name: 'Call to Action',
      weight: 15,
      keywords: ['interview', 'discuss', 'call', 'meet', 'opportunity', 'look forward', 'eager', 'available', 'contact'],
      description: 'Clear next steps and enthusiasm for moving forward',
    },
    {
      name: 'Professional Tone',
      weight: 15,
      keywords: ['sincerely', 'regards', 'thank you', 'appreciate', 'opportunity', 'contribute'],
      description: 'Professional but personable tone throughout',
    },
  ],
  tips: [
    'Address a specific person if possible (check LinkedIn)',
    'Open with a hook, not "I am writing to apply"',
    'Include 1-2 specific achievements with numbers',
    'Keep it under 400 words',
    'End with a clear call to action',
  ],
}

export const linkedinScoreCalculator: ScoreTool = {
  slug: 'linkedin-profile-score',
  name: 'LinkedIn Profile Score',
  description: 'Rate your LinkedIn profile for recruiter visibility and professional impact',
  category: 'LinkedIn',
  type: 'score',
  seo: {
    title: 'Free LinkedIn Profile Score Calculator | Optimize for Recruiters',
    description: 'Paste your LinkedIn profile and get instant feedback on recruiter visibility, keyword optimization, and professional impact.',
  },
  inputLabel: 'Paste Your LinkedIn Summary & Experience',
  inputPlaceholder: 'Copy and paste your LinkedIn headline, summary, and experience sections...',
  criteria: [
    {
      name: 'Headline Impact',
      weight: 20,
      keywords: ['|', 'helping', 'specialist', 'expert', 'leader', 'manager', 'developer', 'designer', 'consultant', 'at'],
      description: 'Compelling headline beyond just job title',
    },
    {
      name: 'Keyword Rich',
      weight: 25,
      keywords: [], // Dynamic based on industry
      description: 'Industry-relevant keywords for search visibility',
    },
    {
      name: 'Story/Summary',
      weight: 20,
      keywords: ['passionate', 'driven', 'experience', 'years', 'helped', 'love', 'mission', 'impact', 'journey'],
      description: 'Engaging personal summary that tells your story',
    },
    {
      name: 'Achievements',
      weight: 20,
      keywords: ['%', 'increased', 'grew', 'led', 'achieved', '$', 'million', 'team of', 'launched', 'built'],
      description: 'Quantified accomplishments throughout',
    },
    {
      name: 'Contact & CTA',
      weight: 15,
      keywords: ['reach out', 'connect', 'email', 'let\'s', 'open to', 'available', 'contact', 'dm'],
      description: 'Clear way to contact you',
    },
  ],
  tips: [
    'Use all 220 characters in your headline',
    'Include industry keywords naturally in your summary',
    'Add accomplishments with numbers to each role',
    'Enable "Open to Work" for recruiters',
    'Ask for recommendations from colleagues',
  ],
}

// ============ QUIZ TOOLS ============

export const careerPathQuiz: QuizTool = {
  slug: 'career-path-quiz',
  name: 'AI Career Path Quiz',
  description: 'Discover which AI-enhanced career paths match your skills and interests',
  category: 'Career',
  type: 'quiz',
  seo: {
    title: 'AI Career Path Quiz | Find Your Ideal AI-Enhanced Career',
    description: 'Take our free quiz to discover which AI-powered career paths match your skills, interests, and goals. Get personalized recommendations.',
  },
  questions: [
    {
      id: 'work_style',
      question: 'How do you prefer to work?',
      options: [
        { value: 'independent', label: 'Independently on focused tasks', points: { creative: 2, technical: 2, strategic: 0 } },
        { value: 'collaborative', label: 'Collaborating with a team', points: { creative: 1, technical: 0, strategic: 2 } },
        { value: 'leading', label: 'Leading and directing others', points: { creative: 0, technical: 0, strategic: 3 } },
        { value: 'mixed', label: 'A mix of all three', points: { creative: 1, technical: 1, strategic: 1 } },
      ],
    },
    {
      id: 'skills',
      question: 'Which skill set resonates most with you?',
      options: [
        { value: 'writing', label: 'Writing & Communication', points: { creative: 3, technical: 0, strategic: 1 } },
        { value: 'analysis', label: 'Data & Analysis', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'design', label: 'Design & Visual', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'strategy', label: 'Planning & Strategy', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'ai_interest',
      question: 'What interests you most about AI?',
      options: [
        { value: 'create', label: 'Creating content faster', points: { creative: 3, technical: 0, strategic: 0 } },
        { value: 'automate', label: 'Automating repetitive tasks', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'insights', label: 'Getting better insights', points: { creative: 1, technical: 2, strategic: 2 } },
        { value: 'scale', label: 'Scaling my impact', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'learning',
      question: 'How do you prefer to learn new tools?',
      options: [
        { value: 'experiment', label: 'Experimenting and playing around', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'structured', label: 'Following structured courses', points: { creative: 0, technical: 3, strategic: 1 } },
        { value: 'practical', label: 'Learning by doing real projects', points: { creative: 2, technical: 2, strategic: 1 } },
        { value: 'teaching', label: 'Teaching others what I learn', points: { creative: 1, technical: 1, strategic: 3 } },
      ],
    },
    {
      id: 'goal',
      question: 'What\'s your primary career goal?',
      options: [
        { value: 'freelance', label: 'Freelance flexibility', points: { creative: 3, technical: 1, strategic: 0 } },
        { value: 'promotion', label: 'Get promoted faster', points: { creative: 0, technical: 2, strategic: 3 } },
        { value: 'switch', label: 'Switch to a new field', points: { creative: 2, technical: 2, strategic: 1 } },
        { value: 'side', label: 'Build a side income', points: { creative: 2, technical: 1, strategic: 2 } },
      ],
    },
  ],
  results: [
    {
      id: 'creative',
      title: 'AI Content Creator',
      description: 'You\'re a natural creator who can leverage AI for writing, design, and multimedia content. Consider roles in content marketing, copywriting, or creative direction with AI tools.',
      recommendations: [
        'Learn prompt engineering for content creation',
        'Explore AI writing tools (Claude, ChatGPT, Jasper)',
        'Build a portfolio of AI-assisted content',
        'Consider freelance content creation',
      ],
    },
    {
      id: 'technical',
      title: 'AI-Augmented Analyst',
      description: 'Your analytical mind pairs perfectly with AI for data analysis, automation, and technical problem-solving. Look into data science, business intelligence, or technical roles.',
      recommendations: [
        'Learn AI-powered data analysis tools',
        'Explore automation with AI (Zapier, Make)',
        'Build Python + AI skills',
        'Consider data analyst or BI roles',
      ],
    },
    {
      id: 'strategic',
      title: 'AI Strategy Leader',
      description: 'You think big picture and can lead AI adoption in organizations. Consider roles in product management, consulting, or AI strategy.',
      recommendations: [
        'Understand AI capabilities and limitations',
        'Learn change management for AI adoption',
        'Build case studies of AI implementation',
        'Consider PM, consulting, or leadership roles',
      ],
    },
  ],
}

// ============ GENERATOR TOOLS ============

export const elevatorPitchGenerator: GeneratorTool = {
  slug: 'elevator-pitch-generator',
  name: 'Elevator Pitch Generator',
  description: 'Create a compelling 30-second pitch for networking and interviews',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Elevator Pitch Generator | Create Your 30-Second Pitch',
    description: 'Generate a professional elevator pitch in seconds. Perfect for networking events, job interviews, and LinkedIn summaries.',
  },
  fields: [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'John Smith', required: true },
    { id: 'role', label: 'Current/Target Role', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'experience', label: 'Years of Experience', type: 'select', options: [
      { value: 'entry', label: 'Entry Level (0-2 years)' },
      { value: 'mid', label: 'Mid Level (3-5 years)' },
      { value: 'senior', label: 'Senior (6-10 years)' },
      { value: 'executive', label: 'Executive (10+ years)' },
    ], required: true },
    { id: 'specialty', label: 'Key Specialty/Skill', type: 'text', placeholder: 'React development, Machine Learning, etc.', required: true },
    { id: 'achievement', label: 'Top Achievement', type: 'textarea', placeholder: 'Led a team that increased revenue by 40%...', required: true },
    { id: 'goal', label: 'What You\'re Looking For', type: 'text', placeholder: 'Senior role at a growth-stage startup', required: true },
  ],
  template: `Hi, I'm {{name}}. I'm a {{role}} with {{experience}} of experience specializing in {{specialty}}.

Most recently, {{achievement}}

I'm currently looking for {{goal}}.

I'd love to connect and learn more about opportunities at your company.`,
  outputLabel: 'Your Elevator Pitch',
}

export const linkedinHeadlineGenerator: GeneratorTool = {
  slug: 'linkedin-headline-generator',
  name: 'LinkedIn Headline Generator',
  description: 'Create an attention-grabbing LinkedIn headline that gets noticed by recruiters',
  category: 'LinkedIn',
  type: 'generator',
  seo: {
    title: 'Free LinkedIn Headline Generator | Stand Out to Recruiters',
    description: 'Generate a compelling LinkedIn headline that attracts recruiters. Multiple formats including formula-based and creative options.',
  },
  fields: [
    { id: 'role', label: 'Current/Target Role', type: 'text', placeholder: 'Product Manager', required: true },
    { id: 'industry', label: 'Industry', type: 'text', placeholder: 'SaaS, Healthcare, Finance, etc.', required: true },
    { id: 'specialty', label: 'Key Specialty', type: 'text', placeholder: 'Growth strategy, AI/ML, etc.', required: true },
    { id: 'achievement', label: 'Impressive Stat or Achievement', type: 'text', placeholder: '10x revenue growth, $50M managed, etc.' },
    { id: 'company', label: 'Current Company (optional)', type: 'text', placeholder: 'Google, Startup, etc.' },
  ],
  template: `🎯 Classic: {{role}} | {{specialty}} | {{industry}}

💼 Achievement-Led: {{role}} who {{achievement}} | {{specialty}} Expert

🚀 Results-Focused: {{specialty}} {{role}} → {{achievement}}

🏢 Company + Value: {{role}} at {{company}} | Helping teams {{specialty}}

✨ Personal Brand: {{role}} | Passionate about {{specialty}} in {{industry}}`,
  outputLabel: 'LinkedIn Headline Options',
}

export const thankYouEmailGenerator: GeneratorTool = {
  slug: 'thank-you-email-generator',
  name: 'Interview Thank You Email Generator',
  description: 'Write a professional thank you email after your job interview',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Thank You Email Generator | Post-Interview Follow Up',
    description: 'Generate a professional thank you email after your job interview. Stand out from other candidates with a personalized follow-up.',
  },
  fields: [
    { id: 'interviewer', label: 'Interviewer Name', type: 'text', placeholder: 'Sarah Johnson', required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'role', label: 'Role You Applied For', type: 'text', placeholder: 'Senior Software Engineer', required: true },
    { id: 'topic', label: 'Interesting Topic Discussed', type: 'text', placeholder: 'The new AI initiative...', required: true },
    { id: 'strength', label: 'Key Strength You Want to Reinforce', type: 'text', placeholder: 'My experience leading cross-functional teams...', required: true },
  ],
  template: `Subject: Thank you for the {{role}} interview

Hi {{interviewer}},

Thank you so much for taking the time to meet with me today about the {{role}} position at {{company}}.

I especially enjoyed our conversation about {{topic}}. It reinforced my excitement about the opportunity to contribute to your team.

I wanted to reiterate {{strength}}, which I believe would help me make an immediate impact in this role.

Please don't hesitate to reach out if you have any additional questions. I'm very excited about the possibility of joining {{company}} and look forward to hearing from you.

Best regards,
[Your name]`,
  outputLabel: 'Your Thank You Email',
}

// ============ INTERVIEW TOOLS ============

export const interviewAnswerGenerator: GeneratorTool = {
  slug: 'interview-answer-generator',
  name: 'Interview Answer Generator',
  description: 'Generate compelling STAR-method answers for common interview questions',
  category: 'Interview',
  type: 'generator',
  seo: {
    title: 'Free Interview Answer Generator | STAR Method Responses',
    description: 'Create powerful interview answers using the STAR method. Get tailored responses for behavioral questions.',
  },
  fields: [
    {
      id: 'question',
      label: 'Interview Question',
      type: 'select',
      options: [
        { value: 'tell-me-about-yourself', label: 'Tell me about yourself' },
        { value: 'greatest-strength', label: 'What is your greatest strength?' },
        { value: 'greatest-weakness', label: 'What is your greatest weakness?' },
        { value: 'challenge-overcome', label: 'Tell me about a challenge you overcame' },
        { value: 'conflict-resolution', label: 'Describe a time you resolved a conflict' },
        { value: 'leadership', label: 'Tell me about a time you showed leadership' },
        { value: 'failure', label: 'Tell me about a time you failed' },
        { value: 'why-this-company', label: 'Why do you want to work here?' },
      ],
      required: true,
    },
    { id: 'role', label: 'Target Role', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'situation', label: 'Brief Situation/Context', type: 'textarea', placeholder: 'At my previous company, we had a critical deadline...', required: true },
    { id: 'action', label: 'Actions You Took', type: 'textarea', placeholder: 'I organized daily standups and prioritized tasks...', required: true },
    { id: 'result', label: 'Results Achieved', type: 'text', placeholder: 'Delivered project 2 weeks early, saved $50K', required: true },
  ],
  template: `**STAR Method Answer**

**Situation:**
{{situation}}

**Task:**
As the {{role}}, I needed to address this challenge and deliver results.

**Action:**
{{action}}

**Result:**
{{result}}

---

**Polished Response:**

"{{situation}} As part of my role, {{action}} The outcome was significant: {{result}}. This experience taught me the importance of taking initiative and focusing on measurable outcomes."`,
  outputLabel: 'Your STAR Method Answer',
}

export const salaryNegotiationGenerator: GeneratorTool = {
  slug: 'salary-negotiation-script',
  name: 'Salary Negotiation Script Generator',
  description: 'Get a personalized script to negotiate your salary confidently',
  category: 'Negotiation',
  type: 'generator',
  seo: {
    title: 'Free Salary Negotiation Script | Negotiate Your Offer',
    description: 'Generate a professional salary negotiation script. Get the compensation you deserve with proven negotiation tactics.',
  },
  fields: [
    { id: 'currentOffer', label: 'Current Offer', type: 'text', placeholder: '$85,000', required: true },
    { id: 'targetSalary', label: 'Target Salary', type: 'text', placeholder: '$95,000', required: true },
    { id: 'role', label: 'Job Title', type: 'text', placeholder: 'Senior Product Manager', required: true },
    { id: 'company', label: 'Company', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'experience', label: 'Years of Experience', type: 'text', placeholder: '7 years', required: true },
    { id: 'uniqueValue', label: 'Your Unique Value', type: 'textarea', placeholder: 'I have direct experience scaling products from 0 to 1M users...', required: true },
  ],
  template: `**Salary Negotiation Script**

---

**Opening (Express Enthusiasm First):**

"Thank you so much for the offer. I'm genuinely excited about the {{role}} position at {{company}} and the opportunity to contribute to the team."

---

**The Ask:**

"I've done research on market rates for {{role}} positions with {{experience}} experience, and I was hoping we could discuss the compensation. Based on my background and {{uniqueValue}}, I was targeting something closer to {{targetSalary}}."

---

**If They Push Back:**

"I understand there may be budget constraints. Are there other components we could discuss, such as a signing bonus, additional equity, flexible work arrangements, or an accelerated review timeline?"

---

**Closing:**

"I'm confident we can find something that works for both of us. I'm committed to bringing value to {{company}} and excited to get started."

---

**Key Tips:**
• Never give a number first if you can help it
• Always negotiate - 70% of employers expect it
• Get the offer in writing before accepting
• Consider total compensation, not just base salary`,
  outputLabel: 'Your Negotiation Script',
}

export const jobSearchTrackerScore: ScoreTool = {
  slug: 'job-search-tracker-score',
  name: 'Job Search Organization Score',
  description: 'Rate how organized your job search is and get tips to improve',
  category: 'Job Search',
  type: 'score',
  seo: {
    title: 'Job Search Organization Score | Track Your Progress',
    description: 'Find out if your job search is organized for success. Get personalized tips to improve your job hunting strategy.',
  },
  inputLabel: 'Describe Your Current Job Search Process',
  inputPlaceholder: 'Describe how you are tracking applications, following up, networking, etc...',
  criteria: [
    {
      name: 'Application Tracking',
      weight: 20,
      keywords: ['spreadsheet', 'tracker', 'notion', 'airtable', 'list', 'database', 'log', 'record', 'tracking', 'organized'],
      description: 'Using a system to track all applications and their status',
    },
    {
      name: 'Follow-Up System',
      weight: 20,
      keywords: ['follow up', 'followup', 'reminder', 'calendar', 'schedule', 'check in', 'reach out', 'email again', 'weekly'],
      description: 'Systematic follow-up process for applications',
    },
    {
      name: 'Networking Activity',
      weight: 20,
      keywords: ['linkedin', 'network', 'connect', 'reach out', 'coffee chat', 'informational', 'referral', 'introduction', 'event', 'meetup'],
      description: 'Active networking and relationship building',
    },
    {
      name: 'Target Companies',
      weight: 15,
      keywords: ['target', 'wishlist', 'dream companies', 'research', 'priority', 'top choice', 'tier', 'focus', 'specific'],
      description: 'Defined list of target companies to pursue',
    },
    {
      name: 'Daily/Weekly Goals',
      weight: 15,
      keywords: ['daily', 'weekly', 'goal', 'applications per', 'per day', 'per week', 'routine', 'schedule', 'consistent'],
      description: 'Clear goals for application volume and activity',
    },
    {
      name: 'Interview Prep',
      weight: 10,
      keywords: ['practice', 'mock', 'prepare', 'research company', 'questions', 'star method', 'behavioral', 'prep'],
      description: 'Systematic interview preparation process',
    },
  ],
  tips: [
    'Use a spreadsheet or tool like Notion/Airtable to track every application',
    'Set calendar reminders to follow up 1 week after applying',
    'Aim to send 5-10 quality applications per day, not 50 spray-and-pray',
    'Spend 30% of job search time networking, not just applying',
    'Research every company before you apply - customize each application',
    'Practice STAR method answers for common behavioral questions',
  ],
}

// ============ NETWORKING TOOLS ============

export const networkingMessageGenerator: GeneratorTool = {
  slug: 'networking-message-generator',
  name: 'Networking Message Generator',
  description: 'Create personalized LinkedIn connection requests and follow-up messages',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Free LinkedIn Networking Message Generator | Connection Templates',
    description: 'Generate personalized LinkedIn connection requests that get accepted. Templates for cold outreach, informational interviews, and follow-ups.',
  },
  fields: [
    { id: 'name', label: 'Their Name', type: 'text', placeholder: 'Sarah Chen', required: true },
    { id: 'role', label: 'Their Role/Title', type: 'text', placeholder: 'VP of Engineering at Stripe', required: true },
    { id: 'connection_reason', label: 'How You Found Them / Connection Point', type: 'text', placeholder: 'Saw your talk at ReactConf, read your blog post...', required: true },
    { id: 'your_role', label: 'Your Role/Background', type: 'text', placeholder: 'Software engineer transitioning to tech leadership', required: true },
    { id: 'ask', label: 'What You Want', type: 'select', options: [
      { value: 'connect', label: 'Just connect / stay in touch' },
      { value: 'advice', label: 'Career advice / informational interview' },
      { value: 'referral', label: 'Job referral / introduction' },
      { value: 'mentor', label: 'Mentorship relationship' },
    ], required: true },
  ],
  template: `📨 CONNECTION REQUEST (under 300 chars)

Hi {{name}}, {{connection_reason}}. As a {{your_role}}, I'd love to connect and learn more about your journey. No ask — just admire your work!

---

📧 FOLLOW-UP MESSAGE (after connected)

Hi {{name}},

Thanks for connecting! I've been following your work as {{role}} and really appreciated [specific thing].

I'm currently a {{your_role}}, and I'm curious about [topic related to their expertise].

Would you have 15-20 minutes for a quick call in the next few weeks? I'd love to hear your perspective.

Totally understand if you're too busy — appreciate the connection either way!

Best,
[Your name]

---

💡 TIPS
• Keep connection requests SHORT (LinkedIn cuts at 300 chars)
• Reference something SPECIFIC (not "I admire your work")
• Make it easy to say yes (15 min, flexible timing)
• Have a clear but soft ask — don't demand, invite`,
  outputLabel: 'Your Networking Messages',
}

export const followUpEmailGenerator: GeneratorTool = {
  slug: 'follow-up-email-generator',
  name: 'Job Application Follow-Up Generator',
  description: 'Create professional follow-up emails for job applications',
  category: 'Job Search',
  type: 'generator',
  seo: {
    title: 'Free Job Application Follow-Up Email Generator | Stand Out',
    description: 'Generate professional follow-up emails after applying or interviewing. Templates for 1-week, 2-week, and final follow-ups.',
  },
  fields: [
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Google', required: true },
    { id: 'role', label: 'Position Applied For', type: 'text', placeholder: 'Senior Product Manager', required: true },
    { id: 'contact', label: 'Contact Name (if known)', type: 'text', placeholder: 'Sarah / Hiring Manager' },
    { id: 'days_since', label: 'Days Since Application/Interview', type: 'select', options: [
      { value: '7', label: '1 week' },
      { value: '14', label: '2 weeks' },
      { value: '21', label: '3+ weeks' },
    ], required: true },
    { id: 'stage', label: 'Application Stage', type: 'select', options: [
      { value: 'applied', label: 'Applied, no response' },
      { value: 'screened', label: 'Had recruiter screen' },
      { value: 'interviewed', label: 'Had interview, awaiting decision' },
    ], required: true },
  ],
  template: `📧 FOLLOW-UP EMAIL

Subject: Following up on {{role}} application - {{company}}

Hi {{contact}},

I hope this finds you well. I wanted to follow up on my application for the {{role}} position at {{company}}.

I'm very excited about this opportunity and believe my background in [relevant skill] would allow me to make an immediate impact on your team.

I understand you're likely reviewing many candidates, but I wanted to reiterate my strong interest. If there's any additional information I can provide, please don't hesitate to reach out.

Thank you for your time and consideration.

Best regards,
[Your name]
[Your phone]
[Your LinkedIn]

---

💡 FOLLOW-UP BEST PRACTICES

Timing:
• First follow-up: 1 week after applying
• Second follow-up: 2 weeks after first
• Final follow-up: 3-4 weeks (then move on)

Tips:
• Keep it SHORT (under 100 words)
• Add value if possible (relevant article, new achievement)
• Reference the specific role and date applied
• Make it easy to respond (one simple question)
• Know when to stop (after 2-3 follow-ups)`,
  outputLabel: 'Your Follow-Up Email',
}

export const techResumeScore: ScoreTool = {
  slug: 'tech-resume-score',
  name: 'Tech Resume Score Calculator',
  description: 'Specialized resume analysis for software engineering and tech roles',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'Tech Resume Score Calculator | Software Engineer Resume Analysis',
    description: 'Get specialized feedback on your tech resume. Optimized for software engineering, data science, and technical roles.',
  },
  inputLabel: 'Paste Your Tech Resume',
  inputPlaceholder: 'Paste your software engineering, data science, or technical resume...',
  criteria: [
    {
      name: 'Technical Skills Section',
      weight: 20,
      keywords: ['python', 'javascript', 'typescript', 'react', 'node', 'java', 'go', 'rust', 'sql', 'nosql', 'aws', 'gcp', 'azure', 'docker', 'kubernetes', 'terraform', 'git', 'ci/cd', 'graphql', 'rest', 'microservices'],
      description: 'Clear technical skills section with relevant technologies',
    },
    {
      name: 'Quantified Impact',
      weight: 25,
      keywords: ['%', 'reduced', 'improved', 'increased', 'scaled', 'x', '10x', '2x', 'latency', 'performance', 'users', 'requests', 'uptime', 'million', 'thousand', 'ms', 'seconds'],
      description: 'Measurable technical achievements (performance, scale, impact)',
    },
    {
      name: 'System Design',
      weight: 15,
      keywords: ['architected', 'designed', 'built', 'scalable', 'distributed', 'system', 'infrastructure', 'api', 'database', 'cache', 'queue', 'event-driven', 'microservice'],
      description: 'Evidence of system design and architecture work',
    },
    {
      name: 'Leadership & Collaboration',
      weight: 15,
      keywords: ['led', 'mentored', 'team', 'collaborated', 'cross-functional', 'code review', 'pair programming', 'onboarded', 'interviewed'],
      description: 'Team collaboration and technical leadership',
    },
    {
      name: 'Projects & Open Source',
      weight: 10,
      keywords: ['github', 'open source', 'side project', 'portfolio', 'personal project', 'contribution', 'maintainer', 'stars'],
      description: 'Personal projects or open source contributions',
    },
    {
      name: 'Education & Continuous Learning',
      weight: 15,
      keywords: ['degree', 'computer science', 'bootcamp', 'certification', 'course', 'aws certified', 'google cloud', 'learning', 'coursera', 'udemy'],
      description: 'Relevant education and continuous learning',
    },
  ],
  tips: [
    'Lead with your tech stack in the first bullet of each role',
    'Quantify EVERYTHING: latency improvements, scale numbers, team sizes',
    'Include GitHub link with active contributions',
    'Mention specific technologies used in each project',
    'Add a "Projects" section for side projects and open source',
    'Keep it to 1 page if <5 years experience, 2 max otherwise',
  ],
}

export const executiveResumeScore: ScoreTool = {
  slug: 'executive-resume-score',
  name: 'Executive Resume Score Calculator',
  description: 'Resume analysis for senior leadership and executive positions',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'Executive Resume Score | Leadership Resume Analysis',
    description: 'Get executive-level resume feedback. Optimized for VP, C-suite, and senior leadership positions.',
  },
  inputLabel: 'Paste Your Executive Resume',
  inputPlaceholder: 'Paste your executive or senior leadership resume...',
  criteria: [
    {
      name: 'Executive Summary',
      weight: 20,
      keywords: ['executive', 'leader', 'ceo', 'cto', 'cfo', 'vp', 'director', 'president', 'chief', 'head of', 'general manager', 'years leadership'],
      description: 'Strong executive summary with leadership positioning',
    },
    {
      name: 'Business Impact',
      weight: 25,
      keywords: ['revenue', 'profit', 'growth', '$', 'million', 'billion', 'market share', 'valuation', 'roi', 'p&l', 'budget', 'cost reduction', 'ebitda'],
      description: 'Quantified business and financial impact',
    },
    {
      name: 'Team Building',
      weight: 15,
      keywords: ['built team', 'hired', 'scaled', 'organization', 'direct reports', 'headcount', 'restructured', 'turnaround', 'culture', 'retention'],
      description: 'Team building and organizational leadership',
    },
    {
      name: 'Strategic Initiatives',
      weight: 20,
      keywords: ['strategy', 'transformation', 'initiative', 'vision', 'roadmap', 'm&a', 'acquisition', 'partnership', 'expansion', 'launch', 'pivot'],
      description: 'Strategic planning and major initiatives',
    },
    {
      name: 'Board & Stakeholder',
      weight: 10,
      keywords: ['board', 'investor', 'stakeholder', 'shareholder', 'fundraising', 'series', 'ipo', 'presentation', 'c-suite', 'executive team'],
      description: 'Board and stakeholder engagement',
    },
    {
      name: 'Industry Recognition',
      weight: 10,
      keywords: ['award', 'recognition', 'speaker', 'thought leader', 'publication', 'forbes', 'fortune', 'advisory', 'board member'],
      description: 'Industry recognition and thought leadership',
    },
  ],
  tips: [
    'Lead with an executive summary (3-4 sentences positioning you)',
    'Include P&L responsibility and revenue/budget numbers',
    'Show progression: teams you built, organizations you scaled',
    'Highlight strategic wins: M&A, market expansion, turnarounds',
    'Add board memberships, advisory roles, speaking engagements',
    '2 pages max — executives read fast',
  ],
}

export const careerChangeQuiz: QuizTool = {
  slug: 'career-change-quiz',
  name: 'Career Change Readiness Quiz',
  description: 'Find out if you\'re ready to make a career change and what path fits you',
  category: 'Career',
  type: 'quiz',
  seo: {
    title: 'Career Change Quiz | Are You Ready to Switch Careers?',
    description: 'Take our free quiz to assess your readiness for a career change. Get personalized advice on timing, approach, and next steps.',
  },
  questions: [
    {
      id: 'motivation',
      question: 'Why do you want to change careers?',
      options: [
        { value: 'unhappy', label: 'I\'m unhappy in my current role', points: { ready: 2, research: 1, stay: 0 } },
        { value: 'growth', label: 'I want more growth opportunities', points: { ready: 3, research: 2, stay: 1 } },
        { value: 'passion', label: 'I want to pursue my passion', points: { ready: 2, research: 3, stay: 0 } },
        { value: 'money', label: 'I want to earn more money', points: { ready: 1, research: 2, stay: 2 } },
      ],
    },
    {
      id: 'research',
      question: 'How much do you know about your target field?',
      options: [
        { value: 'none', label: 'Very little — just interested', points: { ready: 0, research: 3, stay: 1 } },
        { value: 'some', label: 'Some research, talked to a few people', points: { ready: 2, research: 2, stay: 0 } },
        { value: 'deep', label: 'Deep research, have a clear path', points: { ready: 3, research: 0, stay: 0 } },
        { value: 'experience', label: 'Already doing it as a side project', points: { ready: 3, research: 0, stay: 0 } },
      ],
    },
    {
      id: 'finances',
      question: 'What\'s your financial situation?',
      options: [
        { value: 'tight', label: 'Paycheck to paycheck, can\'t afford risk', points: { ready: 0, research: 2, stay: 3 } },
        { value: 'some', label: '3-6 months savings', points: { ready: 2, research: 2, stay: 1 } },
        { value: 'comfortable', label: '6-12 months runway', points: { ready: 3, research: 1, stay: 0 } },
        { value: 'secure', label: '12+ months or partner income', points: { ready: 3, research: 0, stay: 0 } },
      ],
    },
    {
      id: 'skills',
      question: 'How transferable are your current skills?',
      options: [
        { value: 'none', label: 'Very different field, need new skills', points: { ready: 1, research: 3, stay: 1 } },
        { value: 'some', label: 'Some overlap, need upskilling', points: { ready: 2, research: 2, stay: 0 } },
        { value: 'most', label: 'Most skills transfer, minor gaps', points: { ready: 3, research: 1, stay: 0 } },
        { value: 'all', label: 'Highly transferable, just new context', points: { ready: 3, research: 0, stay: 0 } },
      ],
    },
    {
      id: 'timing',
      question: 'What\'s your timeline?',
      options: [
        { value: 'asap', label: 'As soon as possible', points: { ready: 2, research: 2, stay: 1 } },
        { value: 'months', label: '3-6 months', points: { ready: 3, research: 1, stay: 0 } },
        { value: 'year', label: '6-12 months', points: { ready: 2, research: 2, stay: 0 } },
        { value: 'exploring', label: 'Just exploring, no rush', points: { ready: 0, research: 3, stay: 1 } },
      ],
    },
  ],
  results: [
    {
      id: 'ready',
      title: 'Ready to Make the Leap!',
      description: 'You\'re well-positioned for a career change. You have clear motivation, financial stability, and transferable skills. Time to execute.',
      recommendations: [
        'Update your resume with transferable skills framing',
        'Start applying to roles while still employed',
        'Network heavily in your target industry',
        'Consider a bridge role if big jump seems risky',
      ],
    },
    {
      id: 'research',
      title: 'More Research Needed',
      description: 'You have good instincts but need more information before jumping. Take 2-3 months to validate your target path.',
      recommendations: [
        'Conduct 5-10 informational interviews in your target field',
        'Take a course or start a side project in the new area',
        'Build your financial runway to 6+ months',
        'Identify which skills you need and start building them',
      ],
    },
    {
      id: 'stay',
      title: 'Optimize Before You Exit',
      description: 'The grass might not be greener. Consider improving your current situation before a dramatic change.',
      recommendations: [
        'Try to fix what\'s broken in your current role first',
        'Ask for new projects, lateral moves, or promotions',
        'Build savings to create more future optionality',
        'Keep exploring but don\'t make hasty decisions',
      ],
    },
  ],
}

export const referenceRequestGenerator: GeneratorTool = {
  slug: 'reference-request-generator',
  name: 'Reference Request Generator',
  description: 'Ask former colleagues for references and recommendations professionally',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Free Reference Request Generator | Ask for Recommendations',
    description: 'Generate professional messages to ask for job references and LinkedIn recommendations. Templates that make it easy to say yes.',
  },
  fields: [
    { id: 'name', label: 'Reference\'s Name', type: 'text', placeholder: 'John Smith', required: true },
    { id: 'relationship', label: 'Your Relationship', type: 'select', options: [
      { value: 'manager', label: 'Former Manager' },
      { value: 'colleague', label: 'Former Colleague' },
      { value: 'report', label: 'Former Direct Report' },
      { value: 'client', label: 'Former Client' },
      { value: 'professor', label: 'Professor / Teacher' },
    ], required: true },
    { id: 'company', label: 'Company Where You Worked Together', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'project', label: 'Key Project You Worked On Together', type: 'text', placeholder: 'The Q3 product launch', required: true },
    { id: 'target_role', label: 'Role You\'re Applying For', type: 'text', placeholder: 'Senior Product Manager at Google' },
  ],
  template: `📧 REFERENCE REQUEST EMAIL

Subject: Quick favor — would you be a reference?

Hi {{name}},

I hope you're doing well! I'm reaching out because I'm currently exploring new opportunities, including a {{target_role}} position.

I always valued working with you at {{company}}, especially on {{project}}. Your perspective on my work would mean a lot.

Would you be comfortable serving as a reference? I'd be happy to:
• Provide context on the roles I'm applying for
• Share my updated resume
• Prep you on key points to highlight

No pressure at all if you're too busy — I completely understand.

Thanks so much,
[Your name]

---

💼 LINKEDIN RECOMMENDATION REQUEST

Hi {{name}}, I hope you're doing well! I'm updating my LinkedIn and would really appreciate a recommendation from you. Our work together at {{company}} on {{project}} was some of my best work, and your perspective would carry a lot of weight. If you have 5 minutes, I'd be grateful. Happy to return the favor!

---

💡 TIPS
• Give them an out ("no pressure if you're busy")
• Make it easy (offer to provide talking points)
• Be specific about what to highlight
• Offer to reciprocate
• Ask 2+ weeks before you need them`,
  outputLabel: 'Your Reference Request',
}

// ============ ALL TOOLS ============

export const allTools: Tool[] = [
  resumeScoreCalculator,
  coverLetterScoreCalculator,
  linkedinScoreCalculator,
  careerPathQuiz,
  elevatorPitchGenerator,
  linkedinHeadlineGenerator,
  thankYouEmailGenerator,
  interviewAnswerGenerator,
  salaryNegotiationGenerator,
  jobSearchTrackerScore,
  networkingMessageGenerator,
  followUpEmailGenerator,
  techResumeScore,
  executiveResumeScore,
  careerChangeQuiz,
  referenceRequestGenerator,
]

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find(t => t.slug === slug)
}

export function getToolsByCategory(category: string): Tool[] {
  return allTools.filter(t => t.category === category)
}

export function getToolsByType(type: ToolType): Tool[] {
  return allTools.filter(t => t.type === type)
}

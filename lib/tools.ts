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

export const companyResearchGenerator: GeneratorTool = {
  slug: 'company-research-generator',
  name: 'Company Research Generator',
  description: 'Get a structured company research brief for interview prep',
  category: 'Interview Prep',
  type: 'generator',
  seo: {
    title: 'Free Company Research Generator | Interview Prep Tool',
    description: 'Generate a structured company research checklist for your job interview. Know what to research and what questions to ask.',
  },
  fields: [
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Google', required: true },
    { id: 'role', label: 'Role Title', type: 'text', placeholder: 'Senior Software Engineer', required: true },
    { id: 'industry', label: 'Industry', type: 'select', options: [
      { value: 'tech', label: 'Technology' },
      { value: 'finance', label: 'Finance' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'retail', label: 'Retail' },
      { value: 'consulting', label: 'Consulting' },
      { value: 'other', label: 'Other' },
    ], required: true },
  ],
  template: `🔍 COMPANY RESEARCH BRIEF: {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 BUSINESS FUNDAMENTALS
□ What does {{company}} do? (1-sentence)
□ Business model (B2B, B2C, marketplace?)
□ Key products/services
□ Main competitors
□ Recent funding/financials

🎯 STRATEGIC CONTEXT
□ Company mission statement
□ Recent news (last 90 days)
□ Current challenges in {{industry}}
□ Growth trajectory/recent wins

👥 TEAM & CULTURE
□ CEO and leadership background
□ Glassdoor reviews (patterns)
□ Company values (actual vs stated)
□ Interview process reviews

💼 ROLE-SPECIFIC ({{role}})
□ Team this role reports to
□ Key projects this team owns
□ Tools/tech stack mentioned
□ Success metrics likely expected

❓ QUESTIONS TO ASK
1. "What does success look like for this role in the first 90 days?"
2. "What's the biggest challenge {{company}} is facing right now?"
3. "How does this team collaborate with [related team]?"
4. "What's the career growth path for this role?"

📝 WHERE TO RESEARCH
• LinkedIn (company page + employees)
• Crunchbase/PitchBook (funding)
• Glassdoor (reviews)
• News (TechCrunch, industry pubs)
• Company blog/careers page`,
  outputLabel: 'Your Research Brief',
}

export const jobOfferComparison: ScoreTool = {
  slug: 'job-offer-comparison',
  name: 'Job Offer Comparison Calculator',
  description: 'Compare multiple job offers with weighted scoring across compensation, growth, and lifestyle factors',
  category: 'Career Decisions',
  type: 'score',
  seo: {
    title: 'Free Job Offer Comparison Calculator | Compare Multiple Offers',
    description: 'Compare job offers side-by-side with weighted scoring for salary, benefits, growth, culture, and work-life balance.',
  },
  inputLabel: 'Describe your job offers (separate with ---)',
  inputPlaceholder: `Offer 1: Google, $180k base, $50k RSU, remote 2 days, great benefits
---
Offer 2: Startup, $150k base, 0.5% equity, fully remote, unlimited PTO`,
  criteria: [
    { name: 'Compensation', weight: 30, keywords: ['salary', 'base', 'bonus', 'equity', 'rsu', 'stock', 'pay', '401k', 'benefits'], description: 'Total compensation including base, bonus, equity' },
    { name: 'Growth Potential', weight: 25, keywords: ['growth', 'promotion', 'learning', 'career', 'mentor', 'opportunity', 'advance', 'develop'], description: 'Career development and advancement opportunities' },
    { name: 'Work-Life Balance', weight: 20, keywords: ['remote', 'flexible', 'pto', 'vacation', 'hours', 'balance', 'wfh', 'hybrid'], description: 'Flexibility, time off, and work expectations' },
    { name: 'Company Stability', weight: 15, keywords: ['profitable', 'funded', 'established', 'stable', 'growing', 'revenue', 'series'], description: 'Financial health and job security' },
    { name: 'Culture Fit', weight: 10, keywords: ['culture', 'team', 'values', 'mission', 'people', 'vibe', 'environment'], description: 'Team dynamics and company values alignment' },
  ],
  tips: [
    'Calculate total compensation (base + bonus + equity value)',
    'Consider the 5-year trajectory, not just year 1',
    'Factor in commute/remote flexibility as real dollars',
    'Talk to current employees about actual culture',
  ],
}

export const interviewPrepChecklist: GeneratorTool = {
  slug: 'interview-prep-checklist',
  name: 'Interview Prep Checklist Generator',
  description: 'Get a personalized interview preparation plan based on your role and timeline',
  category: 'Interview Prep',
  type: 'generator',
  seo: {
    title: 'Free Interview Prep Checklist | Personalized Study Plan',
    description: 'Generate a customized interview preparation checklist based on your role, company, and timeline.',
  },
  fields: [
    { id: 'role_type', label: 'Role Type', type: 'select', options: [
      { value: 'engineering', label: 'Software Engineering' },
      { value: 'product', label: 'Product Management' },
      { value: 'design', label: 'Design / UX' },
      { value: 'data', label: 'Data Science / Analytics' },
      { value: 'marketing', label: 'Marketing' },
      { value: 'sales', label: 'Sales' },
      { value: 'general', label: 'Other / General' },
    ], required: true },
    { id: 'days', label: 'Days Until Interview', type: 'select', options: [
      { value: '3', label: '1-3 days' },
      { value: '7', label: '1 week' },
      { value: '14', label: '2 weeks' },
      { value: '30', label: '1 month' },
    ], required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Google', required: true },
  ],
  template: `📋 INTERVIEW PREP CHECKLIST

Role: {{role_type}} at {{company}}
Timeline: {{days}} days

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔴 PRIORITY 1: Do First (Days 1-2)
□ Research {{company}} (business, products, news)
□ Review job description line by line
□ Prepare 3-5 STAR stories from your experience
□ Practice your "tell me about yourself" (2 min)

🟡 PRIORITY 2: Core Prep (Days 3-5)
□ Review common {{role_type}} interview questions
□ Prepare questions to ask the interviewer (5+)
□ Practice technical/case questions for {{role_type}}
□ Mock interview with a friend or record yourself

🟢 PRIORITY 3: Polish (Remaining Time)
□ Review your resume - be ready to discuss any line
□ Prepare salary negotiation talking points
□ Research your interviewer(s) on LinkedIn
□ Plan your interview day logistics

📝 NIGHT BEFORE
□ Confirm interview time/location/link
□ Prepare outfit
□ Get 7-8 hours of sleep
□ Review your STAR stories once

☀️ DAY OF
□ Eat a good breakfast
□ Review company notes (10 min)
□ Arrive/log in 5-10 min early
□ Take deep breaths, you're prepared!

💡 {{role_type}} SPECIFIC TIPS
Engineering: LeetCode medium problems, system design basics
Product: Framework practice (CIRCLES, prioritization)
Design: Portfolio walkthrough, design critique
Data: SQL, case studies, metrics definition
Marketing: Campaign case studies, metrics
Sales: Role plays, objection handling`,
  outputLabel: 'Your Prep Checklist',
}

// ============ NETWORKING SCORE TOOLS ============

export const linkedinConnectionScore: ScoreTool = {
  slug: 'linkedin-connection-score',
  name: 'LinkedIn Connection Request Score',
  description: 'Score your LinkedIn connection request messages for response likelihood',
  category: 'Networking',
  type: 'score',
  seo: {
    title: 'LinkedIn Connection Request Score | Message Analyzer',
    description: 'Score your LinkedIn connection request messages. Get feedback on personalization, value proposition, and response likelihood.',
  },
  inputLabel: 'Paste Your Connection Request',
  inputPlaceholder: `Hi Sarah,

I saw your post about AI in recruiting - really insightful point about candidate experience. I'm working on similar challenges at my startup and would love to connect and exchange ideas.

Best,
Alex`,
  criteria: [
    {
      name: 'Personalization',
      weight: 25,
      keywords: ['saw', 'noticed', 'read', 'loved', 'enjoyed', 'your post', 'your article', 'your talk', 'your work', 'your project'],
      description: 'References something specific about the person',
    },
    {
      name: 'Not Generic',
      weight: 20,
      keywords: ['specifically', 'because', 'impressed by', 'resonated', 'curious about', 'your perspective'],
      description: 'Avoids copy-paste template feel',
    },
    {
      name: 'Value Proposition',
      weight: 25,
      keywords: ['share', 'exchange', 'discuss', 'learn', 'connect about', 'similar', 'common', 'mutual', 'both'],
      description: 'Explains why connecting benefits them',
    },
    {
      name: 'Brevity',
      weight: 15,
      keywords: [],
      description: 'Keeps it short and scannable (under 300 chars)',
    },
    {
      name: 'Soft CTA',
      weight: 15,
      keywords: ['would love', 'happy to', 'hope to', 'looking forward', 'let me know'],
      description: 'Ends with a natural, not aggressive, call to action',
    },
  ],
  tips: [
    'Keep it under 300 characters (LinkedIn cuts it off)',
    'Reference something SPECIFIC about their work',
    'Lead with them, not yourself',
    'Don\'t ask for anything in the connection request',
    'Save bigger asks for after they accept',
  ],
}

export const jobDescriptionDecoder: ScoreTool = {
  slug: 'job-description-decoder',
  name: 'Job Description Decoder',
  description: 'Decode job descriptions to understand real requirements vs nice-to-haves and identify red flags',
  category: 'Job Search',
  type: 'score',
  seo: {
    title: 'Job Description Decoder | Red Flag Analyzer',
    description: 'Decode job descriptions to understand real requirements vs nice-to-haves. Identify red flags and hidden expectations.',
  },
  inputLabel: 'Paste the Job Description',
  inputPlaceholder: `Senior Software Engineer

Join our fast-paced, dynamic team! We're looking for a self-starter who can wear many hats.

Requirements:
- 3+ years experience with React, Node, Python, Go
- Experience building end-to-end products
- Ability to work independently

Competitive salary and great benefits. We're like a family here!`,
  criteria: [
    {
      name: 'Role Clarity',
      weight: 20,
      keywords: ['will', 'responsible for', 'own', 'build', 'develop', 'manage', 'lead', 'create', 'design', 'implement'],
      description: 'How clearly the job responsibilities are defined',
    },
    {
      name: 'Reasonable Requirements',
      weight: 20,
      keywords: ['1-3 years', '2-4 years', '3-5 years', 'preferred', 'nice to have', 'bonus', 'or equivalent'],
      description: 'Whether requirements are realistic and flexible',
    },
    {
      name: 'Compensation Transparency',
      weight: 25,
      keywords: ['$', 'salary', 'compensation', 'pay range', 'equity', 'stock', 'options', 'benefits', '401k', 'health', 'PTO'],
      description: 'Whether salary and benefits are disclosed',
    },
    {
      name: 'Growth Signals',
      weight: 15,
      keywords: ['growth', 'career', 'promotion', 'development', 'learning', 'mentorship', 'report to'],
      description: 'Evidence of career growth opportunities',
    },
    {
      name: 'Culture Signals',
      weight: 20,
      keywords: ['work-life', 'flexible', 'remote', 'hybrid', 'async', 'mental health', 'wellness'],
      description: 'Positive work-life balance indicators',
    },
  ],
  tips: [
    'Watch for "wear many hats" = you\'ll do multiple jobs',
    '"Fast-paced" often means long hours expected',
    '"Like a family" may mean boundary issues',
    '"Competitive salary" without numbers = they\'ll lowball',
    '"Self-starter" + "minimal supervision" = sink or swim',
    'Always ask about salary range in first conversation',
  ],
}

export const referenceRequestScore: ScoreTool = {
  slug: 'reference-request-score',
  name: 'Reference Request Email Score',
  description: 'Score your reference request emails for professionalism and likelihood of getting a strong reference',
  category: 'Job Search',
  type: 'score',
  seo: {
    title: 'Reference Request Email Score | Get Strong References',
    description: 'Score your reference request emails. Get feedback on professionalism, context, and likelihood of getting a strong reference.',
  },
  inputLabel: 'Paste Your Reference Request Email',
  inputPlaceholder: `Hi Michael,

I hope you're doing well! I'm reaching out because I'm applying for a Senior PM role at Stripe, and I was hoping you might be willing to serve as a reference.

We worked together at Acme Corp from 2020-2022 when you led the platform team. I think you could speak well to my cross-functional collaboration.

The deadline is next Friday. Happy to send you my resume and talking points.

Thank you so much!

Best,
Sarah`,
  criteria: [
    {
      name: 'Context Provided',
      weight: 25,
      keywords: ['worked together', 'reported to', 'collaborated', 'team', 'project', 'when', 'at', 'from', 'during', '2020', '2021', '2022', '2023', '2024'],
      description: 'Reminds them of your relationship and work together',
    },
    {
      name: 'Role Details',
      weight: 20,
      keywords: ['applying', 'position', 'role', 'opportunity', 'company', 'job', 'skills', 'experience', 'strengths'],
      description: 'Explains the job and why they are a good reference',
    },
    {
      name: 'Easy Decline Option',
      weight: 15,
      keywords: ['no pressure', 'understand if', 'completely fine', 'no worries', 'feel free to decline', 'too busy'],
      description: 'Gives them a graceful way to say no',
    },
    {
      name: 'Timeline Given',
      weight: 15,
      keywords: ['by', 'before', 'deadline', 'within', 'next week', 'this week', 'end of', 'friday', 'monday'],
      description: 'Mentions when you need the reference',
    },
    {
      name: 'Makes It Easy',
      weight: 15,
      keywords: ['resume', 'talking points', 'bullet points', 'key points', 'summary', 'happy to provide', 'send you'],
      description: 'Offers to provide materials or talking points',
    },
    {
      name: 'Gratitude',
      weight: 10,
      keywords: ['thank', 'grateful', 'appreciate', 'means a lot', 'thanks'],
      description: 'Thanks them genuinely',
    },
  ],
  tips: [
    'Remind them specifically who you are (project, dates)',
    'Explain why they\'re the RIGHT person for this reference',
    'Offer to make it easy (resume, bullet points)',
    'Give them an out - they\'ll appreciate it',
    'Follow up with your resume and talking points',
    'Thank them again after they agree',
  ],
}

// ============ REMOTE & ATS TOOLS ============

export const remoteJobApplicationScore: ScoreTool = {
  slug: 'remote-job-application-score',
  name: 'Remote Job Application Score',
  description: 'Optimize your application for remote-first companies and distributed teams',
  category: 'Remote Work',
  type: 'score',
  seo: {
    title: 'Remote Job Application Score | Land Remote Work Faster',
    description: 'Score your application for remote positions. Get feedback on async communication signals, home office setup, and remote work experience.',
  },
  inputLabel: 'Paste Your Resume or Application',
  inputPlaceholder: 'Paste your resume or cover letter for a remote position...',
  criteria: [
    {
      name: 'Remote Experience',
      weight: 25,
      keywords: ['remote', 'distributed', 'virtual', 'work from home', 'wfh', 'async', 'timezone', 'remote-first'],
      description: 'Evidence of successful remote work experience',
    },
    {
      name: 'Async Communication',
      weight: 20,
      keywords: ['written', 'documentation', 'async', 'slack', 'notion', 'confluence', 'loom', 'recorded', 'clear communication'],
      description: 'Strong written and asynchronous communication skills',
    },
    {
      name: 'Self-Management',
      weight: 20,
      keywords: ['self-motivated', 'independent', 'proactive', 'self-starter', 'autonomous', 'initiative', 'organized'],
      description: 'Ability to work independently without supervision',
    },
    {
      name: 'Tools & Tech',
      weight: 15,
      keywords: ['zoom', 'slack', 'notion', 'linear', 'github', 'figma', 'google workspace', 'microsoft teams', 'asana', 'jira'],
      description: 'Familiarity with remote collaboration tools',
    },
    {
      name: 'Results Focus',
      weight: 20,
      keywords: ['delivered', 'achieved', 'completed', 'shipped', 'launched', 'results', 'outcome', 'impact', 'metric'],
      description: 'Output-focused language showing results over presence',
    },
  ],
  tips: [
    'Mention specific remote tools you use daily',
    'Highlight async communication wins (documentation, written updates)',
    'Show timezone flexibility or overlap with target company',
    'Include results you achieved while working remotely',
    'Mention your home office setup if relevant',
  ],
}

export const atsKeywordScore: ScoreTool = {
  slug: 'ats-keyword-score',
  name: 'ATS Keyword Optimizer',
  description: 'Check if your resume has the keywords to pass Applicant Tracking Systems',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'ATS Keyword Optimizer | Beat Applicant Tracking Systems',
    description: 'Check if your resume will pass ATS filters. Get keyword optimization tips to increase your chances of reaching human reviewers.',
  },
  inputLabel: 'Paste Your Resume + Job Description',
  inputPlaceholder: `MY RESUME:
[Paste your resume here]

---

JOB DESCRIPTION:
[Paste the target job description here]`,
  criteria: [
    {
      name: 'Job Title Match',
      weight: 20,
      keywords: ['engineer', 'manager', 'analyst', 'developer', 'designer', 'specialist', 'coordinator', 'director', 'lead', 'senior'],
      description: 'Resume includes variations of target job title',
    },
    {
      name: 'Hard Skills',
      weight: 30,
      keywords: ['python', 'javascript', 'sql', 'excel', 'salesforce', 'tableau', 'aws', 'react', 'node', 'java', 'figma', 'adobe', 'sap'],
      description: 'Technical skills mentioned in job description appear in resume',
    },
    {
      name: 'Soft Skills',
      weight: 15,
      keywords: ['leadership', 'communication', 'collaboration', 'problem-solving', 'analytical', 'strategic', 'team player', 'detail-oriented'],
      description: 'Soft skills from job description are represented',
    },
    {
      name: 'Industry Terms',
      weight: 20,
      keywords: ['b2b', 'saas', 'enterprise', 'startup', 'healthcare', 'fintech', 'e-commerce', 'agile', 'scrum', 'lean'],
      description: 'Industry-specific terminology matches',
    },
    {
      name: 'ATS-Friendly Format',
      weight: 15,
      keywords: ['experience', 'education', 'skills', 'summary', 'work history', 'professional'],
      description: 'Uses standard section headers ATS can parse',
    },
  ],
  tips: [
    'Copy exact phrases from job description into your resume',
    'Use standard section headers (Experience, Education, Skills)',
    'Avoid tables, graphics, or fancy formatting',
    'Include both spelled-out and acronym versions (Search Engine Optimization, SEO)',
    'Match the job title or close variations in your headline',
  ],
}

export const recruiterEmailScore: ScoreTool = {
  slug: 'recruiter-email-score',
  name: 'Recruiter Outreach Email Score',
  description: 'Score your cold emails to recruiters for response likelihood',
  category: 'Networking',
  type: 'score',
  seo: {
    title: 'Recruiter Email Score | Get Responses from Recruiters',
    description: 'Score your cold emails to recruiters. Get feedback on subject lines, personalization, and response likelihood.',
  },
  inputLabel: 'Paste Your Recruiter Email',
  inputPlaceholder: `Subject: Senior Engineer interested in opportunities at [Company]

Hi Sarah,

I noticed you recruit for engineering roles at Stripe. I'm a senior backend engineer with 6 years of experience in payments systems - very aligned with what you're building.

Most recently, I led the team that processed $2B in transactions at my current company.

Would love to chat if you have any relevant openings. I've attached my resume for reference.

Best,
Alex`,
  criteria: [
    {
      name: 'Subject Line',
      weight: 15,
      keywords: ['subject:', 're:', 'senior', 'engineer', 'interested', 'referral', 'introduction', 'opportunity'],
      description: 'Clear, specific subject line that gets opened',
    },
    {
      name: 'Personalization',
      weight: 25,
      keywords: ['noticed', 'saw', 'your', 'you recruit', 'your company', 'your team', 'at', 'for'],
      description: 'Shows you researched them specifically',
    },
    {
      name: 'Value Upfront',
      weight: 25,
      keywords: ['years', 'experience', 'led', 'built', 'managed', 'specialized', 'expert', '$', '%', 'increased', 'achieved'],
      description: 'Leads with relevant experience and achievements',
    },
    {
      name: 'Brevity',
      weight: 15,
      keywords: [],
      description: 'Short and scannable (under 150 words ideal)',
    },
    {
      name: 'Clear Ask',
      weight: 20,
      keywords: ['chat', 'call', 'discuss', 'openings', 'opportunities', 'connect', 'available', 'interested'],
      description: 'Specific, easy-to-action request',
    },
  ],
  tips: [
    'Keep it under 150 words - recruiters skim',
    'Lead with your most impressive achievement',
    'Reference their company/team specifically',
    'Include a specific ask (15-min call, not "let me know")',
    'Avoid attachments in first email - share resume if they respond',
  ],
}

// ============ NETWORKING & NEGOTIATION TOOLS ============

export const informationalInterviewGenerator: GeneratorTool = {
  slug: 'informational-interview-generator',
  name: 'Informational Interview Script Generator',
  description: 'Prepare for informational interviews with thoughtful questions',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Free Informational Interview Script | Networking Questions',
    description: 'Generate professional questions for informational interviews. Build relationships and learn about careers.',
  },
  fields: [
    { id: 'person_name', label: 'Person\'s Name', type: 'text', placeholder: 'Sarah Chen', required: true },
    { id: 'role', label: 'Their Role', type: 'text', placeholder: 'VP of Product at Stripe', required: true },
    { id: 'your_interest', label: 'Why You\'re Interested', type: 'text', placeholder: 'Transitioning to product management', required: true },
    { id: 'your_background', label: 'Your Background', type: 'text', placeholder: '5 years as software engineer', required: true },
  ],
  template: `📋 INFORMATIONAL INTERVIEW SCRIPT

Meeting with: {{person_name}} ({{role}})

🎯 OPENING
"Thank you for taking the time to meet with me. A bit about me: {{your_background}}. I'm interested in {{your_interest}}."

❓ CAREER PATH QUESTIONS
1. "How did you get to your current role? What was your path?"
2. "What skills were most important in getting you here?"
3. "If starting over today, what would you do differently?"

❓ ROLE-SPECIFIC QUESTIONS
4. "What does a typical day or week look like for you?"
5. "What's most rewarding? Most challenging?"

❓ ADVICE QUESTIONS
6. "Given my background, what advice would you have?"
7. "Any resources or people you'd recommend I connect with?"

🎯 CLOSING
"This has been incredibly helpful. Would it be okay if I kept you updated on my progress?"

📧 FOLLOW-UP (send within 24 hours)
Subject: Thank you — great conversation!

Hi {{person_name}}, thank you again for your time today. Your insights on [topic] were valuable. I'll follow up on your advice to [action]. Best, [Name]`,
  outputLabel: 'Your Interview Script',
}

export const counterOfferGenerator: GeneratorTool = {
  slug: 'counter-offer-generator',
  name: 'Counter Offer Email Generator',
  description: 'Professionally counter a job offer to negotiate better compensation',
  category: 'Negotiation',
  type: 'generator',
  seo: {
    title: 'Free Counter Offer Email Generator | Salary Negotiation',
    description: 'Generate a professional counter offer email to negotiate your job offer.',
  },
  fields: [
    { id: 'hiring_manager', label: 'Hiring Manager Name', type: 'text', placeholder: 'Jennifer Smith', required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'role', label: 'Position Title', type: 'text', placeholder: 'Senior Software Engineer', required: true },
    { id: 'offered_salary', label: 'Offered Salary', type: 'text', placeholder: '$120,000', required: true },
    { id: 'target_salary', label: 'Your Counter', type: 'text', placeholder: '$140,000', required: true },
    { id: 'justification', label: 'Key Justification', type: 'textarea', placeholder: 'Market research, competing offers, specific value...', required: true },
  ],
  template: `📧 COUNTER OFFER EMAIL

Subject: {{role}} Offer — Follow-up Discussion

Dear {{hiring_manager}},

Thank you for the offer for the {{role}} position at {{company}}. I'm excited about the opportunity.

After careful consideration, I'd like to discuss the compensation. While I'm enthusiastic about the role, I was hoping we could explore a base salary closer to {{target_salary}}.

My reasoning:
{{justification}}

I'm flexible on specifics and happy to explore creative solutions like signing bonus, equity, or performance-based adjustments.

Thank you for your understanding.

Best regards,
[Your name]

💡 TIPS:
• Express enthusiasm first
• Provide specific justification
• Be collaborative, not adversarial
• Show flexibility on HOW to get there`,
  outputLabel: 'Your Counter Offer',
}

export const rejectionResponseGenerator: GeneratorTool = {
  slug: 'rejection-response-generator',
  name: 'Job Rejection Response Generator',
  description: 'Respond professionally to job rejections and maintain relationships',
  category: 'Job Search',
  type: 'generator',
  seo: {
    title: 'Free Job Rejection Response Generator | Professional Thank You',
    description: 'Generate a professional response to job rejections. Maintain relationships for future opportunities.',
  },
  fields: [
    { id: 'contact_name', label: 'Contact Name', type: 'text', placeholder: 'Jennifer Smith', required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'role', label: 'Position Applied For', type: 'text', placeholder: 'Senior Product Manager', required: true },
    { id: 'ask_feedback', label: 'Ask for Feedback?', type: 'select', options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ], required: true },
  ],
  template: `📧 REJECTION RESPONSE

Subject: Thank you — {{role}} position

Hi {{contact_name}},

Thank you for letting me know about the {{role}} decision. While I'm disappointed, I appreciate you taking the time to update me.

I enjoyed learning about {{company}} and the team. I hope our paths cross again.

[If asking for feedback:]
If you have a moment, I'd welcome any feedback on my application or interviews.

I'd love to stay in touch. Please keep me in mind if other opportunities come up.

Thank you again!

Best,
[Your name]
[LinkedIn URL]

💡 WHY RESPOND:
• 40% of jobs filled by past applicants
• Recruiters move companies
• Most people don't respond gracefully
• The selected candidate might not work out`,
  outputLabel: 'Your Response',
}

// ============ SKILLS & BEHAVIORAL TOOLS ============

export const skillsGapAnalyzer: ScoreTool = {
  slug: 'skills-gap-analyzer',
  name: 'Skills Gap Analyzer',
  description: 'Identify missing skills between your experience and target role requirements',
  category: 'Career Development',
  type: 'score',
  seo: {
    title: 'Free Skills Gap Analyzer | Career Development Tool',
    description: 'Identify skills gaps between your current experience and target role. Get actionable upskilling recommendations.',
  },
  inputLabel: 'Paste Your Resume + Target Job Description',
  inputPlaceholder: `MY CURRENT SKILLS:
[Paste your resume or list your skills]

---

TARGET JOB REQUIREMENTS:
[Paste the job description for your target role]`,
  criteria: [
    {
      name: 'Technical Skills Match',
      weight: 30,
      keywords: ['python', 'javascript', 'sql', 'excel', 'tableau', 'figma', 'aws', 'react', 'node', 'data analysis', 'machine learning'],
      description: 'Hard skills from job description present in your experience',
    },
    {
      name: 'Experience Level',
      weight: 25,
      keywords: ['years', 'experience', 'senior', 'junior', 'mid', 'lead', 'managed', 'led', 'built', 'scaled'],
      description: 'Experience level matches requirements',
    },
    {
      name: 'Industry Knowledge',
      weight: 20,
      keywords: ['saas', 'b2b', 'enterprise', 'fintech', 'healthcare', 'e-commerce', 'marketplace', 'startup'],
      description: 'Industry experience alignment',
    },
    {
      name: 'Soft Skills',
      weight: 15,
      keywords: ['leadership', 'communication', 'collaboration', 'problem-solving', 'stakeholder', 'cross-functional'],
      description: 'Soft skills and leadership capabilities',
    },
    {
      name: 'Certifications',
      weight: 10,
      keywords: ['certified', 'certification', 'degree', 'mba', 'pmp', 'scrum', 'aws certified', 'google certified'],
      description: 'Required certifications or education',
    },
  ],
  tips: [
    'Focus on the 2-3 most critical missing skills first',
    'Online courses can close most skills gaps in 2-4 weeks',
    'Side projects demonstrate skills better than certificates',
    'Frame adjacent experience as transferable',
    'Don\'t wait for perfection - apply at 70% match',
  ],
}

export const behavioralInterviewScore: ScoreTool = {
  slug: 'behavioral-interview-score',
  name: 'Behavioral Interview Answer Score',
  description: 'Rate your STAR method behavioral interview answers for impact',
  category: 'Interview',
  type: 'score',
  seo: {
    title: 'Behavioral Interview Score | STAR Method Analyzer',
    description: 'Score your behavioral interview answers. Get feedback on STAR structure and impact to ace your interviews.',
  },
  inputLabel: 'Paste Your Behavioral Answer',
  inputPlaceholder: `Question: Tell me about a time you dealt with a difficult stakeholder.

My answer: At my previous company, our VP of Sales wanted features that conflicted with our product roadmap. I scheduled a 1-on-1 to understand his concerns, mapped his requests to our existing priorities, and found a compromise. He became one of our biggest advocates, and we shipped features that increased sales 20%.`,
  criteria: [
    {
      name: 'Situation Clarity',
      weight: 20,
      keywords: ['at', 'when', 'while', 'during', 'previous', 'company', 'team', 'project', 'was working'],
      description: 'Sets clear context for the story',
    },
    {
      name: 'Task Definition',
      weight: 15,
      keywords: ['needed to', 'responsible for', 'my role', 'I had to', 'goal was', 'challenge was', 'problem was'],
      description: 'Clearly defines your responsibility',
    },
    {
      name: 'Action Detail',
      weight: 30,
      keywords: ['I', 'decided', 'created', 'led', 'built', 'organized', 'reached out', 'scheduled', 'implemented', 'developed'],
      description: 'Specific actions YOU took (not "we")',
    },
    {
      name: 'Quantified Results',
      weight: 25,
      keywords: ['%', 'increased', 'decreased', 'reduced', 'saved', '$', 'x', 'resulted', 'achieved', 'delivered', 'improved'],
      description: 'Measurable outcomes with numbers',
    },
    {
      name: 'Learning/Growth',
      weight: 10,
      keywords: ['learned', 'realized', 'now I', 'going forward', 'taught me', 'changed how', 'since then'],
      description: 'Shows reflection and growth',
    },
  ],
  tips: [
    'Use "I" not "we" - they want YOUR actions',
    'Add specific numbers: "20% increase" not "significant growth"',
    'Keep it under 2 minutes when spoken',
    'End with results AND what you learned',
    'Prepare 5-7 stories that cover common themes',
  ],
}

export const salaryResearchGenerator: GeneratorTool = {
  slug: 'salary-research-generator',
  name: 'Salary Research Checklist Generator',
  description: 'Generate a comprehensive salary research plan for your target role',
  category: 'Negotiation',
  type: 'generator',
  seo: {
    title: 'Free Salary Research Generator | Know Your Worth',
    description: 'Generate a salary research checklist to confidently negotiate your compensation. Know market rates before your interview.',
  },
  fields: [
    { id: 'role', label: 'Target Role', type: 'text', placeholder: 'Senior Software Engineer', required: true },
    { id: 'company', label: 'Target Company', type: 'text', placeholder: 'Google', required: true },
    { id: 'location', label: 'Location', type: 'text', placeholder: 'San Francisco / Remote', required: true },
    { id: 'experience', label: 'Years of Experience', type: 'select', options: [
      { value: '0-2', label: '0-2 years' },
      { value: '3-5', label: '3-5 years' },
      { value: '6-10', label: '6-10 years' },
      { value: '10+', label: '10+ years' },
    ], required: true },
  ],
  template: `💰 SALARY RESEARCH CHECKLIST

Role: {{role}} at {{company}}
Location: {{location}}
Experience: {{experience}} years

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 DATA SOURCES TO CHECK

□ **Levels.fyi** — Best for tech, shows total comp
  Search: {{role}} at {{company}}

□ **Glassdoor** — Broad coverage, check recent entries
  Filter by: {{location}}, {{experience}}

□ **LinkedIn Salary** — Good for comparing companies
  Compare: {{company}} vs. similar companies

□ **Blind** — Anonymous real salaries, tech focus
  Search: "{{role}} {{company}} TC"

□ **Payscale** — Good for non-tech roles

□ **H1B Salary Database** — Public visa salary data
  h1bdata.info - search {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 RESEARCH TEMPLATE

Fill this out:
• Market range: $___k - $___k
• {{company}} range: $___k - $___k
• My target: $___k (aim for 75th percentile)
• My minimum: $___k (walk-away number)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 TOTAL COMP COMPONENTS

Don't forget to research:
□ Base salary
□ Annual bonus (% of base)
□ Equity/RSU (vesting schedule)
□ Sign-on bonus
□ 401k match
□ Benefits value (~$10-20k)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🗣️ TALKING POINTS

When asked about salary expectations:
"Based on my research for {{role}} positions in {{location}} with {{experience}} experience, I'm targeting a total compensation in the range of [your range]. But I'm flexible and want to learn more about the full package."`,
  outputLabel: 'Your Research Checklist',
}

// ============ BACKGROUND CHECK & CAREER FAIR TOOLS ============

export const backgroundCheckPrepScore: ScoreTool = {
  slug: 'background-check-prep-score',
  name: 'Background Check Prep Score',
  description: 'Prepare for employment background checks and identify potential red flags',
  category: 'Job Search',
  type: 'score',
  seo: {
    title: 'Background Check Prep Score | Employment Screening Guide',
    description: 'Prepare for employment background checks. Identify potential issues and know what employers see before they do.',
  },
  inputLabel: 'Describe Your Background Situation',
  inputPlaceholder: 'Include: work history gaps, education, any legal history, credit concerns, previous employer situations, etc.',
  criteria: [
    { name: 'Employment History Consistency', weight: 25, keywords: ['consistent', 'accurate', 'dates', 'titles', 'employer', 'verified', 'references', 'match', 'resume'], description: 'Employment dates and titles match across documents' },
    { name: 'Education Verification', weight: 15, keywords: ['degree', 'graduated', 'university', 'college', 'diploma', 'transcript', 'certification', 'verified'], description: 'Education credentials are accurate and verifiable' },
    { name: 'Gap Explanations', weight: 20, keywords: ['gap', 'break', 'sabbatical', 'freelance', 'family', 'travel', 'education', 'transition', 'explained'], description: 'Employment gaps have reasonable explanations' },
    { name: 'Reference Preparation', weight: 20, keywords: ['reference', 'manager', 'supervisor', 'colleague', 'contacted', 'heads up', 'prepared', 'positive'], description: 'References are prepped and will speak positively' },
    { name: 'Clean Records', weight: 20, keywords: ['clean', 'clear', 'no issues', 'good standing', 'credit', 'criminal', 'driving', 'verified'], description: 'No concerning criminal, credit, or driving records' },
  ],
  tips: [
    'Run your own background check first (Checkr, GoodHire)',
    'Ensure resume dates match LinkedIn and applications exactly',
    'Contact references BEFORE applying to give them heads up',
    'Prepare honest explanations for any gaps or issues',
    'Be truthful — lies are worse than the truth in background checks',
  ],
}

export const careerFairPitchGenerator: GeneratorTool = {
  slug: 'career-fair-pitch-generator',
  name: 'Career Fair Pitch Generator',
  description: 'Create compelling 60-second pitches for career fairs and networking events',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Career Fair Pitch Generator | Networking Event Intro',
    description: 'Generate a memorable career fair pitch. Stand out at job fairs and networking events with a polished introduction.',
  },
  fields: [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Alex Chen', required: true },
    { id: 'background', label: 'Your Background/Major', type: 'text', placeholder: 'Computer Science, 3rd year', required: true },
    { id: 'experience', label: 'Relevant Experience', type: 'textarea', placeholder: 'Internship at startup, hackathon wins...', required: true },
    { id: 'target_role', label: 'Role You\'re Seeking', type: 'text', placeholder: 'Software Engineering Intern', required: true },
    { id: 'why_company', label: 'Why This Company', type: 'text', placeholder: 'Mission, products, culture...', required: true },
  ],
  template: `🎯 YOUR CAREER FAIR PITCH (60 seconds)

**OPENING (10 sec)**
"Hi! I'm {{name}}, {{background}}. I'm excited to talk about {{target_role}} opportunities."

**EXPERIENCE (20 sec)**
"I've {{experience}}."

**CONNECTION (15 sec)**
"I'm particularly interested because {{why_company}}."

**CLOSE (15 sec)**
"I'd love to learn more about what you're looking for. Could I get your contact info to follow up?"

💡 TIPS: Research companies, print 20+ resumes, send thank-you within 24h.`,
  outputLabel: 'Your Career Fair Pitch',
}

export const workStyleQuiz: QuizTool = {
  slug: 'work-style-quiz',
  name: 'Work Environment Quiz',
  description: 'Discover your ideal work environment — startup, corporate, remote, or hybrid',
  category: 'Career',
  type: 'quiz',
  seo: {
    title: 'Work Style Quiz | Find Your Ideal Work Environment',
    description: 'Discover whether you thrive at startups, corporations, or remote work. Get matched to your ideal work environment.',
  },
  questions: [
    { id: 'structure', question: 'How do you prefer your workday structured?', options: [
      { value: 'flexible', label: 'Completely flexible', points: { startup: 2, corporate: 0, remote: 3 } },
      { value: 'some', label: 'Some structure with core hours', points: { startup: 2, corporate: 2, remote: 2 } },
      { value: 'clear', label: 'Clear 9-5 with predictability', points: { startup: 0, corporate: 3, remote: 1 } },
    ]},
    { id: 'risk', question: 'How do you feel about job security vs growth?', options: [
      { value: 'security', label: 'Stability is my priority', points: { startup: 0, corporate: 3, remote: 1 } },
      { value: 'growth', label: 'Will trade security for rapid growth', points: { startup: 3, corporate: 0, remote: 2 } },
      { value: 'equity', label: 'Want ownership/equity potential', points: { startup: 3, corporate: 0, remote: 1 } },
    ]},
    { id: 'collaboration', question: 'How do you prefer to collaborate?', options: [
      { value: 'inperson', label: 'In-person, spontaneous', points: { startup: 2, corporate: 3, remote: 0 } },
      { value: 'async', label: 'Async communication (Slack, docs)', points: { startup: 1, corporate: 0, remote: 3 } },
      { value: 'scheduled', label: 'Scheduled meetings, clear agendas', points: { startup: 0, corporate: 3, remote: 2 } },
    ]},
    { id: 'scope', question: 'What work scope energizes you?', options: [
      { value: 'specialist', label: 'Deep expertise in one area', points: { startup: 0, corporate: 3, remote: 2 } },
      { value: 'generalist', label: 'Wearing many hats, variety', points: { startup: 3, corporate: 0, remote: 2 } },
      { value: 'impact', label: 'Direct impact on company direction', points: { startup: 3, corporate: 0, remote: 1 } },
    ]},
  ],
  results: [
    { id: 'startup', title: 'Startup Environment', description: 'You thrive in fast-paced, ambiguous environments with ownership and rapid growth.', recommendations: ['Target Series A-C startups', 'Look for equity packages', 'Ask about runway in interviews'] },
    { id: 'corporate', title: 'Corporate Environment', description: 'You value stability, clear processes, and deep specialization.', recommendations: ['Target Fortune 500 companies', 'Ask about career pathing', 'Look for mentorship programs'] },
    { id: 'remote', title: 'Remote-First Environment', description: 'You value autonomy, flexibility, and async work.', recommendations: ['Target remote-first companies', 'Look for async cultures', 'Build work-life routines'] },
  ],
}

// ============ NEW TOOLS FEB 6 ============

export const portfolioReviewScore: ScoreTool = {
  slug: 'portfolio-review-score',
  name: 'Portfolio Review Score',
  description: 'Rate your online portfolio for job application success',
  category: 'Portfolio',
  type: 'score',
  seo: {
    title: 'Portfolio Review Score | Rate Your Work Portfolio',
    description: 'Get instant feedback on your portfolio. Optimize for recruiters and hiring managers.',
  },
  inputLabel: 'Describe Your Portfolio',
  inputPlaceholder: 'Describe your portfolio: projects included, case studies, technologies shown, testimonials, contact info...',
  criteria: [
    { name: 'Project Variety', weight: 20, keywords: ['project', 'case study', 'built', 'designed', 'developed', 'created', 'shipped', 'launched'], description: 'Shows diverse, relevant work samples' },
    { name: 'Results & Impact', weight: 25, keywords: ['increased', 'improved', 'reduced', 'generated', 'saved', '%', 'revenue', 'users', 'traffic', 'conversion'], description: 'Demonstrates measurable outcomes' },
    { name: 'Technical Depth', weight: 20, keywords: ['stack', 'technology', 'framework', 'api', 'database', 'architecture', 'code', 'github', 'documentation'], description: 'Shows technical skills and decisions' },
    { name: 'Visual Presentation', weight: 15, keywords: ['screenshot', 'demo', 'video', 'mockup', 'design', 'clean', 'responsive', 'mobile'], description: 'Professional, visually appealing presentation' },
    { name: 'Contact & CTAs', weight: 20, keywords: ['contact', 'email', 'linkedin', 'hire', 'available', 'resume', 'calendar', 'schedule'], description: 'Easy to contact and clear next steps' },
  ],
  tips: [
    'Feature 3-5 best projects rather than everything',
    'Include case studies with problem → solution → results',
    'Add context: your role, team size, timeline',
    'Keep portfolio updated with recent work',
    'Make it easy to contact you (multiple channels)',
  ],
}

export const interviewReadinessQuiz: QuizTool = {
  slug: 'interview-readiness-quiz',
  name: 'Interview Readiness Quiz',
  description: 'Test how prepared you are for your next job interview',
  category: 'Interview',
  type: 'quiz',
  seo: {
    title: 'Interview Readiness Quiz | Are You Prepared?',
    description: 'Test your interview readiness. Find gaps in your preparation and get targeted tips.',
  },
  questions: [
    { id: 'company', question: 'How well do you know the company?', options: [
      { value: 'deep', label: 'Read annual report, recent news, know competitors', points: { ready: 3, moderate: 0, unprepared: 0 } },
      { value: 'basic', label: 'Know what they do and checked their website', points: { ready: 1, moderate: 2, unprepared: 0 } },
      { value: 'minimal', label: 'Just the job description', points: { ready: 0, moderate: 0, unprepared: 3 } },
    ]},
    { id: 'stories', question: 'Do you have STAR stories ready?', options: [
      { value: 'prepared', label: 'Yes, 5+ stories practiced out loud', points: { ready: 3, moderate: 0, unprepared: 0 } },
      { value: 'some', label: 'Have a few examples in mind', points: { ready: 1, moderate: 2, unprepared: 0 } },
      { value: 'none', label: 'Will figure it out in the moment', points: { ready: 0, moderate: 0, unprepared: 3 } },
    ]},
    { id: 'questions', question: 'Have questions prepared for the interviewer?', options: [
      { value: 'researched', label: 'Role-specific questions from research', points: { ready: 3, moderate: 0, unprepared: 0 } },
      { value: 'generic', label: 'Standard questions like "what does success look like?"', points: { ready: 1, moderate: 2, unprepared: 0 } },
      { value: 'none', label: 'Not really', points: { ready: 0, moderate: 0, unprepared: 3 } },
    ]},
    { id: 'salary', question: 'Know your salary expectations?', options: [
      { value: 'researched', label: 'Researched market rate, have a range', points: { ready: 3, moderate: 0, unprepared: 0 } },
      { value: 'rough', label: 'Have a rough idea', points: { ready: 1, moderate: 2, unprepared: 0 } },
      { value: 'none', label: 'Will see what they offer', points: { ready: 0, moderate: 0, unprepared: 3 } },
    ]},
  ],
  results: [
    { id: 'ready', title: 'Interview Ready', description: 'You are well prepared. Focus on getting good sleep and staying calm.', recommendations: ['Review your notes morning-of', 'Arrive 10min early', 'Send thank-you within 24h'] },
    { id: 'moderate', title: 'Almost There', description: 'Good foundation but some gaps. Spend 1-2 hours on final prep.', recommendations: ['Research the company deeper', 'Practice STAR stories out loud', 'Prepare 3+ specific questions'] },
    { id: 'unprepared', title: 'More Prep Needed', description: 'You need more preparation to make a strong impression.', recommendations: ['Block 4+ hours for serious prep', 'Use our Interview Answer Generator', 'Consider rescheduling if possible'] },
  ],
}

export const recommendationRequestGenerator: GeneratorTool = {
  slug: 'recommendation-request-generator',
  name: 'LinkedIn Recommendation Request',
  description: 'Generate personalized requests for LinkedIn recommendations',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'LinkedIn Recommendation Request Generator | Get More Recommendations',
    description: 'Create personalized recommendation requests that get responses. Grow your LinkedIn credibility.',
  },
  fields: [
    { id: 'name', label: 'Their Name', type: 'text', placeholder: 'Sarah Chen', required: true },
    { id: 'relationship', label: 'How You Worked Together', type: 'select', options: [
      { value: 'manager', label: 'They were my manager' },
      { value: 'peer', label: 'We were peers/teammates' },
      { value: 'report', label: 'They reported to me' },
      { value: 'client', label: 'They were a client' },
      { value: 'mentor', label: 'They mentored me' },
    ], required: true },
    { id: 'project', label: 'Key Project/Achievement Together', type: 'text', placeholder: 'Led the product launch for...' },
    { id: 'skills', label: 'Skills You Want Highlighted', type: 'text', placeholder: 'leadership, technical problem-solving, collaboration' },
  ],
  template: `📝 LINKEDIN RECOMMENDATION REQUEST

Hi {{name}},

I hope you're doing well! I'm updating my LinkedIn profile and reaching out to colleagues whose opinions I really value.

We worked together when {{project}}, and I was hoping you might be willing to write a brief recommendation highlighting our collaboration.

No pressure at all — I know everyone's busy. If you're open to it, it would be especially helpful if you could speak to {{skills}} since those are skills I'm hoping to emphasize for my next role.

I'm happy to return the favor anytime — just let me know!

Thanks so much,
[Your name]

💡 TIMING: Best to ask within 6 months of working together. Follow up once after 1 week if no response.`,
  outputLabel: 'Your Recommendation Request',
}

// ============ JOB SEARCH TOOLS ============

export const coldEmailGeneratorHiring: GeneratorTool = {
  slug: 'cold-email-generator-hiring-manager',
  name: 'Cold Email to Hiring Manager',
  description: 'Generate personalized cold emails to reach hiring managers directly',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Cold Email Generator for Hiring Managers | Bypass HR',
    description: 'Create compelling cold emails that get responses from hiring managers. Stand out from applicants.',
  },
  fields: [
    { id: 'name', label: 'Hiring Manager Name', type: 'text', placeholder: 'Alex Thompson', required: true },
    { id: 'company', label: 'Company Name', type: 'text', placeholder: 'Acme Corp', required: true },
    { id: 'role', label: 'Target Role', type: 'text', placeholder: 'Senior Product Manager', required: true },
    { id: 'hook', label: 'Why This Company?', type: 'textarea', placeholder: 'What specifically interests you about them (product, mission, growth)' },
    { id: 'value', label: 'Key Value You Bring', type: 'text', placeholder: 'Scaled B2B SaaS product from $1M to $10M ARR' },
  ],
  template: `📧 COLD EMAIL TO HIRING MANAGER

Subject: Quick note about {{role}} — not a generic pitch

Hi {{name}},

{{hook}}

I noticed you're hiring for {{role}} at {{company}}. Rather than just applying through the portal, I wanted to reach out directly because {{value}}.

I'd love to share a few ideas on how I could contribute — happy to keep it to 15 minutes if you're open to a quick call.

Either way, excited to see what you're building at {{company}}.

Best,
[Your name]

💡 TIPS:
• Send Tue-Thu, 8-10 AM their time
• Follow up once after 1 week
• Find their email via Hunter.io or LinkedIn Sales Navigator`,
  outputLabel: 'Your Cold Email',
}

export const jobSearchStrategyQuiz: QuizTool = {
  slug: 'job-search-strategy-quiz',
  name: 'Job Search Strategy Quiz',
  description: 'Discover your optimal job search strategy based on your situation',
  category: 'Job Search',
  type: 'quiz',
  seo: {
    title: 'Job Search Strategy Quiz | Find Your Best Approach',
    description: 'Take this quiz to discover the most effective job search strategy for your situation, industry, and goals.',
  },
  questions: [
    { id: 'urgency', question: 'How urgent is your job search?', options: [
      { value: 'asap', label: 'Need a job ASAP (within 30 days)', points: { volume: 3, targeted: 0, network: 0 } },
      { value: 'moderate', label: 'Actively looking (2-3 months)', points: { volume: 1, targeted: 2, network: 0 } },
      { value: 'passive', label: 'Exploring options, no rush', points: { volume: 0, targeted: 1, network: 2 } },
    ]},
    { id: 'network', question: 'How strong is your professional network?', options: [
      { value: 'strong', label: 'Know people at target companies', points: { volume: 0, targeted: 1, network: 3 } },
      { value: 'moderate', label: 'Some connections, could reach out', points: { volume: 1, targeted: 2, network: 1 } },
      { value: 'weak', label: 'Starting fresh in this industry', points: { volume: 2, targeted: 1, network: 0 } },
    ]},
    { id: 'specificity', question: 'How specific is your target role?', options: [
      { value: 'specific', label: 'Exact role and company list', points: { volume: 0, targeted: 3, network: 1 } },
      { value: 'flexible', label: 'Open to similar roles', points: { volume: 2, targeted: 1, network: 1 } },
      { value: 'exploring', label: 'Figuring out what I want', points: { volume: 1, targeted: 0, network: 2 } },
    ]},
  ],
  results: [
    { id: 'volume', title: 'Volume Strategy', description: 'Apply to many positions quickly while maintaining quality.', recommendations: ['Apply to 10-20 jobs per week', 'Use quick-apply on LinkedIn/Indeed', 'Track everything in a spreadsheet', 'Optimize resume for ATS'] },
    { id: 'targeted', title: 'Targeted Strategy', description: 'Focus on fewer, highly-customized applications.', recommendations: ['Research each company deeply', 'Customize resume and cover letter', 'Connect with employees before applying', 'Apply to 5-10 carefully selected roles per week'] },
    { id: 'network', title: 'Network Strategy', description: 'Leverage relationships to find hidden opportunities.', recommendations: ['Schedule 5+ coffee chats per week', 'Reach out to former colleagues', 'Attend industry events', 'Ask for warm introductions'] },
  ],
}

export const careerNarrativeScore: ScoreTool = {
  slug: 'career-narrative-score',
  name: 'Career Narrative Score',
  description: 'Rate how well you tell your career story in interviews and networking',
  category: 'Interview',
  type: 'score',
  seo: {
    title: 'Career Narrative Score | Tell Your Story Better',
    description: 'Get feedback on your career story. Learn to articulate your journey in interviews and networking.',
  },
  inputLabel: 'Describe Your Career Journey',
  inputPlaceholder: 'Write your "tell me about yourself" answer or career summary...',
  criteria: [
    { name: 'Clear Progression', weight: 25, keywords: ['then', 'next', 'led to', 'transitioned', 'grew', 'promoted', 'moved', 'joined', 'started'], description: 'Shows logical career progression' },
    { name: 'Consistent Theme', weight: 20, keywords: ['passionate about', 'focused on', 'always', 'throughout', 'core', 'driven by', 'mission'], description: 'Thread connecting your experiences' },
    { name: 'Key Achievements', weight: 25, keywords: ['achieved', 'built', 'led', 'created', 'increased', 'reduced', 'launched', '%', '$', 'million'], description: 'Highlights major accomplishments' },
    { name: 'Future Vision', weight: 15, keywords: ['looking for', 'excited about', 'want to', 'goal', 'next', 'future', 'grow'], description: 'Clear direction for next role' },
    { name: 'Appropriate Length', weight: 15, keywords: [], description: '60-90 seconds when spoken (~150-200 words)' },
  ],
  tips: [
    'Structure: Past → Present → Future',
    'Keep it under 2 minutes when spoken',
    'Highlight 2-3 key achievements, not everything',
    'Connect your story to the target role',
    'Practice until it sounds natural, not rehearsed',
  ],
}

// ============ EXIT & PERFORMANCE TOOLS ============

export const exitInterviewScore: ScoreTool = {
  slug: 'exit-interview-score',
  name: 'Exit Interview Response Score',
  description: 'Prepare professional exit interview answers that maintain relationships',
  category: 'Career Transitions',
  type: 'score',
  seo: {
    title: 'Exit Interview Score | Leave Jobs Professionally',
    description: 'Score your exit interview responses. Maintain relationships and leave gracefully while giving honest feedback.',
  },
  inputLabel: 'Paste Your Exit Interview Answers',
  inputPlaceholder: `Q: Why are you leaving?
A: I've enjoyed my time here and learned a lot, but I received an opportunity that aligns better with my long-term career goals in product management.

Q: What could we improve?
A: I think the team would benefit from clearer career progression paths. I sometimes felt uncertain about growth opportunities.`,
  criteria: [
    { name: 'Professional Tone', weight: 25, keywords: ['appreciate', 'grateful', 'learned', 'enjoyed', 'opportunity', 'growth', 'thankful', 'valued'], description: 'Maintains positive, professional language throughout' },
    { name: 'Constructive Feedback', weight: 25, keywords: ['suggest', 'improve', 'opportunity', 'could', 'might', 'consider', 'helpful', 'benefit'], description: 'Provides actionable suggestions without being bitter' },
    { name: 'Forward-Looking', weight: 20, keywords: ['career', 'goals', 'growth', 'opportunity', 'next step', 'future', 'direction', 'path'], description: 'Focuses on future rather than dwelling on negatives' },
    { name: 'Balanced', weight: 15, keywords: ['both', 'while', 'however', 'also', 'and', 'at the same time', 'that said'], description: 'Balances positives with areas for improvement' },
    { name: 'Specific Examples', weight: 15, keywords: ['example', 'instance', 'specifically', 'when', 'project', 'situation', 'time'], description: 'Uses specific examples rather than vague complaints' },
  ],
  tips: [
    'Never burn bridges - you may need references later',
    'Focus on "I" statements, not blame',
    'Be honest but diplomatic about issues',
    'Highlight what you learned and appreciated',
    'Offer constructive suggestions, not complaints',
  ],
}

export const workplaceConflictScore: ScoreTool = {
  slug: 'workplace-conflict-score',
  name: 'Workplace Conflict Resolution Score',
  description: 'Rate your conflict resolution stories for interview impact',
  category: 'Interview',
  type: 'score',
  seo: {
    title: 'Workplace Conflict Score | Interview Answer Analyzer',
    description: 'Score your conflict resolution examples for behavioral interviews. Show maturity and leadership in difficult situations.',
  },
  inputLabel: 'Paste Your Conflict Resolution Story',
  inputPlaceholder: `Situation: My colleague and I disagreed about the technical approach for a critical feature.

What I did: I scheduled a 1-on-1 to understand their perspective. I discovered they had concerns about scalability that I hadn't considered. We whiteboarded together and found a hybrid solution.

Result: We shipped on time, the solution scaled to 10x our initial projections, and we became better collaborators.`,
  criteria: [
    { name: 'Empathy Shown', weight: 25, keywords: ['understood', 'perspective', 'their view', 'listened', 'heard', 'concerns', 'feelings', 'point of view'], description: 'Shows you tried to understand the other side' },
    { name: 'Initiative Taken', weight: 20, keywords: ['I scheduled', 'I reached out', 'I initiated', 'I suggested', 'I proposed', 'took the lead', 'proactively'], description: 'You took action to resolve, didn\'t wait' },
    { name: 'Collaborative Solution', weight: 25, keywords: ['together', 'compromise', 'middle ground', 'hybrid', 'combined', 'both', 'win-win', 'collaborated'], description: 'Found a solution that worked for everyone' },
    { name: 'Professional Throughout', weight: 15, keywords: ['respectful', 'professional', 'calm', 'constructive', 'focused on', 'objective', 'facts'], description: 'Maintained professionalism, no drama' },
    { name: 'Positive Outcome', weight: 15, keywords: ['resulted', 'outcome', 'now', 'since then', 'improved', 'better', 'successful', 'relationship'], description: 'Clear positive results from the resolution' },
  ],
  tips: [
    'Never badmouth the other person',
    'Show you tried to understand their perspective first',
    'Focus on the issue, not personalities',
    'Highlight the collaborative solution, not "winning"',
    'Include the improved relationship as an outcome',
  ],
}

export const performanceReviewSelfScore: ScoreTool = {
  slug: 'performance-review-self-score',
  name: 'Performance Review Self-Assessment Score',
  description: 'Rate your self-review for impact before submitting',
  category: 'Career Development',
  type: 'score',
  seo: {
    title: 'Performance Review Score | Self-Assessment Analyzer',
    description: 'Score your performance review self-assessment. Advocate for yourself effectively and set up promotion conversations.',
  },
  inputLabel: 'Paste Your Self-Assessment',
  inputPlaceholder: `This quarter I led the migration of our payment system to the new platform. Key achievements:

- Completed migration 2 weeks ahead of schedule
- Zero downtime during cutover (processed $5M during transition)
- Created documentation that reduced onboarding time by 40%
- Mentored 2 junior engineers on the new system

Areas for growth: I want to develop more cross-functional leadership skills.`,
  criteria: [
    { name: 'Quantified Achievements', weight: 30, keywords: ['%', 'increased', 'decreased', 'reduced', 'saved', '$', 'x', 'weeks', 'days', 'hours', 'team of', 'million'], description: 'Specific numbers and metrics for accomplishments' },
    { name: 'Business Impact', weight: 25, keywords: ['revenue', 'customers', 'users', 'efficiency', 'saved', 'enabled', 'unblocked', 'delivered', 'launched'], description: 'Connects work to business outcomes' },
    { name: 'Leadership Signals', weight: 20, keywords: ['led', 'mentored', 'coached', 'initiated', 'proposed', 'drove', 'coordinated', 'organized', 'influenced'], description: 'Shows leadership beyond individual contribution' },
    { name: 'Growth Mindset', weight: 15, keywords: ['learn', 'grow', 'improve', 'develop', 'next', 'goal', 'aspire', 'working on', 'opportunity'], description: 'Shows self-awareness and desire to grow' },
    { name: 'Specific Examples', weight: 10, keywords: ['project', 'initiative', 'specifically', 'example', 'instance', 'case', 'when'], description: 'Uses concrete examples, not vague claims' },
  ],
  tips: [
    'Lead with your biggest wins and quantify them',
    'Connect your work to team/company goals',
    'Include leadership moments (mentoring, initiatives)',
    'Show growth areas as aspirations, not weaknesses',
    'Keep a "brag doc" throughout the year',
  ],
}

export const referralRequestScore: ScoreTool = {
  slug: 'referral-request-score',
  name: 'Referral Request Score',
  description: 'Rate your referral request message for maximum success',
  category: 'Networking',
  type: 'score',
  seo: {
    title: 'Referral Request Score | Get More Job Referrals',
    description: 'Score your referral request message. Learn what makes people say yes to referring you.',
  },
  inputLabel: 'Paste Your Referral Request Message',
  inputPlaceholder: `Hi Sarah,

I hope you're doing well! I saw that Acme Corp is hiring for a Senior Engineer role, and I know you've been there for a few years now.

I've been following the company's work on distributed systems, and my experience scaling payment infrastructure at my current role feels like a strong fit.

Would you be open to a quick chat about what the team is like? And if you think I'd be a good fit, I'd really appreciate a referral.

Happy to share my resume or any other materials that would help.

Thanks so much!`,
  criteria: [
    { name: 'Personal Connection', weight: 25, keywords: ['remember', 'we', 'together', 'met', 'worked', 'know', 'your', 'you'], description: 'References shared history or connection' },
    { name: 'Specific Role', weight: 20, keywords: ['role', 'position', 'job', 'opportunity', 'opening', 'team', 'hiring'], description: 'Names the specific job or team' },
    { name: 'Value Proposition', weight: 25, keywords: ['experience', 'skills', 'background', 'fit', 'qualified', 'achieved', 'led', 'built'], description: 'Explains why you are a good fit' },
    { name: 'Easy Ask', weight: 15, keywords: ['resume', 'materials', 'link', 'linkedin', 'help', 'easy', 'quick'], description: 'Makes it easy for them to help' },
    { name: 'Professional Tone', weight: 15, keywords: ['appreciate', 'thank', 'grateful', 'understand', 'no pressure', 'either way'], description: 'Respectful and not pushy' },
  ],
  tips: [
    'Lead with your relationship, not the ask',
    'Be specific about the role and why you want it',
    'Make their job easy - include resume/LinkedIn',
    'Give them an out - no pressure is more effective',
    'Follow up with thanks regardless of outcome',
  ],
}

export const interviewQuestionBankGenerator: GeneratorTool = {
  slug: 'interview-question-bank-generator',
  name: 'Interview Question Bank Generator',
  description: 'Get role-specific interview questions to practice',
  category: 'Interview Prep',
  type: 'generator',
  seo: {
    title: 'Interview Question Bank Generator | Practice Questions by Role',
    description: 'Generate a personalized bank of interview questions for your target role. Practice the questions that matter most.',
  },
  fields: [
    { id: 'role', label: 'Target Role', type: 'text', placeholder: 'e.g., Product Manager, Software Engineer', required: true },
    { id: 'level', label: 'Level', type: 'select', options: [
      { value: 'entry', label: 'Entry Level' },
      { value: 'mid', label: 'Mid Level' },
      { value: 'senior', label: 'Senior' },
      { value: 'lead', label: 'Lead/Staff' },
      { value: 'director', label: 'Director+' },
    ], required: true },
    { id: 'company_type', label: 'Company Type', type: 'select', options: [
      { value: 'startup', label: 'Startup' },
      { value: 'growth', label: 'Growth Stage' },
      { value: 'enterprise', label: 'Enterprise' },
      { value: 'faang', label: 'FAANG/Big Tech' },
    ], required: true },
  ],
  template: `# Interview Question Bank: {{role}} ({{level}})
Company Type: {{company_type}}

## Behavioral Questions (prepare 2-3 STAR stories each)
1. Tell me about a time you faced a major setback. How did you handle it?
2. Describe a situation where you had to influence without authority.
3. Give an example of when you had to make a decision with incomplete information.
4. Tell me about your biggest professional failure and what you learned.
5. Describe a time you disagreed with your manager. What happened?

## Role-Specific Questions
1. What's your approach to [key responsibility for {{role}}]?
2. How do you prioritize when everything is urgent?
3. Walk me through how you'd handle [common scenario for {{role}}].
4. What metrics do you use to measure success in your work?
5. How do you stay current in your field?

## Culture Fit Questions
1. Why are you interested in a {{company_type}} environment?
2. How do you handle ambiguity and changing priorities?
3. What kind of team dynamic brings out your best work?
4. Where do you see yourself in 3-5 years?

## Questions to Ask Them
1. What does success look like in the first 90 days?
2. What's the biggest challenge the team is facing right now?
3. How does the team give and receive feedback?
4. What's something you wish you knew before joining?`,
  outputLabel: 'Your Interview Question Bank',
}

export const networkingFollowUpScore: ScoreTool = {
  slug: 'networking-follow-up-score',
  name: 'Networking Follow-Up Score',
  description: 'Rate your post-meeting follow-up message',
  category: 'Networking',
  type: 'score',
  seo: {
    title: 'Networking Follow-Up Score | Turn Meetings Into Relationships',
    description: 'Score your networking follow-up email. Learn what makes people want to stay in touch.',
  },
  inputLabel: 'Paste Your Follow-Up Message',
  inputPlaceholder: `Hi Alex,

Great meeting you at the product meetup last night! I really enjoyed our conversation about building PLG motions at enterprise companies.

Your point about starting with a wedge use case really resonated - I've been thinking about how to apply that at my current company.

I'd love to continue the conversation. Happy to share some resources on the usage-based pricing models we discussed if you're interested.

Let me know if you'd ever want to grab coffee - I'm usually free Friday mornings.

Best,
[Name]`,
  criteria: [
    { name: 'Specific Reference', weight: 30, keywords: ['discussed', 'mentioned', 'point', 'conversation', 'talked', 'said', 'shared', 'your'], description: 'References something specific from your conversation' },
    { name: 'Timely Send', weight: 15, keywords: ['yesterday', 'last night', 'today', 'this morning', 'earlier'], description: 'Sent within 24-48 hours (inferred from content)' },
    { name: 'Value Add', weight: 25, keywords: ['resource', 'article', 'share', 'thought', 'idea', 'helpful', 'intro', 'connect'], description: 'Offers something valuable to them' },
    { name: 'Clear Next Step', weight: 20, keywords: ['coffee', 'call', 'chat', 'meet', 'catch up', 'continue', 'follow up'], description: 'Suggests a concrete next action' },
    { name: 'Warm Tone', weight: 10, keywords: ['enjoyed', 'great', 'pleasure', 'glad', 'looking forward', 'appreciate'], description: 'Genuine and warm, not transactional' },
  ],
  tips: [
    'Send within 24 hours while memory is fresh',
    'Reference a specific moment or topic from your chat',
    'Offer value before asking for anything',
    'Make the next step low-friction (coffee vs. "pick your brain")',
    'Connect on LinkedIn with a personalized note',
  ],
}

// ============ PROMOTION & GROWTH TOOLS ============

export const promotionRequestScore: ScoreTool = {
  slug: 'promotion-request-score',
  name: 'Promotion Request Score',
  description: 'Rate your promotion or raise request before sending to your manager',
  category: 'Career Growth',
  type: 'score',
  seo: {
    title: 'Promotion Request Score | Get That Raise',
    description: 'Score your promotion request. Learn what makes managers say yes to raises and title bumps.',
  },
  inputLabel: 'Paste Your Promotion Request',
  inputPlaceholder: `Hi [Manager],

I'd like to discuss my career progression and potential promotion to Senior Engineer.

Over the past 18 months, I've:
- Led the migration to TypeScript, reducing bugs by 40%
- Mentored 3 junior developers
- Delivered the payments integration 2 weeks early

I've researched market rates and believe a title change and 15% salary increase reflects my contributions.

I'd love to discuss this when you have time.`,
  criteria: [
    { name: 'Quantified Achievements', weight: 30, keywords: ['%', 'increased', 'reduced', 'delivered', 'saved', 'led', 'grew', '$', 'revenue', 'customers'], description: 'Concrete metrics showing your impact' },
    { name: 'Business Alignment', weight: 25, keywords: ['company', 'team', 'goals', 'OKR', 'initiative', 'strategy', 'roadmap', 'priority'], description: 'Shows how your work supports business goals' },
    { name: 'Market Research', weight: 15, keywords: ['market', 'research', 'rate', 'benchmark', 'industry', 'competitive', 'data'], description: 'References external data or market rates' },
    { name: 'Clear Ask', weight: 20, keywords: ['promotion', 'raise', 'title', 'increase', 'salary', 'senior', 'level', 'compensation'], description: 'States exactly what you want' },
    { name: 'Professional Tone', weight: 10, keywords: ['discuss', 'appreciate', 'value', 'opportunity', 'contribute'], description: 'Confident but not demanding' },
  ],
  tips: [
    'Document wins throughout the year, not just at review time',
    'Tie your achievements to company metrics and goals',
    'Research market rates for your role and location',
    'Ask for a specific title and compensation number',
    'Schedule the conversation - don\'t ambush your manager',
  ],
}

export const jobApplicationTrackerGenerator: GeneratorTool = {
  slug: 'job-application-tracker-generator',
  name: 'Job Application Tracker Generator',
  description: 'Create a personalized job search tracking system',
  category: 'Job Search',
  type: 'generator',
  seo: {
    title: 'Job Application Tracker Generator | Organize Your Search',
    description: 'Generate a customized job application tracking template. Stay organized and never lose track of where you applied.',
  },
  fields: [
    { id: 'target_role', label: 'Target Role', type: 'text', placeholder: 'e.g., Senior Product Manager', required: true },
    { id: 'industry', label: 'Target Industry', type: 'select', options: [
      { value: 'tech', label: 'Technology' },
      { value: 'finance', label: 'Finance' },
      { value: 'healthcare', label: 'Healthcare' },
      { value: 'consulting', label: 'Consulting' },
      { value: 'other', label: 'Other' },
    ], required: true },
    { id: 'weekly_target', label: 'Applications Per Week', type: 'select', options: [
      { value: '5', label: '5 (Quality Focus)' },
      { value: '10', label: '10 (Balanced)' },
      { value: '20', label: '20+ (Volume Focus)' },
    ], required: true },
  ],
  template: `# {{target_role}} Job Search Tracker

## Weekly Target: {{weekly_target}} applications

### Application Pipeline

| Company | Role | Applied | Status | Next Step | Follow-up Date |
|---------|------|---------|--------|-----------|----------------|
| [Company] | {{target_role}} | [Date] | Applied | Wait 1 week | [Date] |

### Status Key
- 📝 Applied - Waiting for response
- 📞 Phone Screen - Initial call scheduled
- 💻 Technical - Technical interview stage
- 🎯 Onsite - Final rounds
- ✅ Offer - Received offer
- ❌ Rejected - Didn't move forward

### {{industry}} Target Companies
1. [Research top companies in {{industry}}]
2. [Add dream companies here]
3. [Include realistic targets]

### Weekly Review Questions
- How many applications did I submit? (Target: {{weekly_target}})
- What response rate am I seeing?
- Which applications got callbacks?
- What patterns do I notice in rejections?

### Key Dates
- Week 1 Start: [Date]
- 30-day check-in: [Date]
- 90-day reassess: [Date]`,
  outputLabel: 'Your Job Search Tracker',
}

export const accomplishmentsScore: ScoreTool = {
  slug: 'accomplishments-score',
  name: 'Accomplishments Statement Score',
  description: 'Rate your resume achievement bullets for impact and clarity',
  category: 'Resume',
  type: 'score',
  seo: {
    title: 'Accomplishments Statement Score | Rate Your Achievement Bullets',
    description: 'Score your resume accomplishments for impact, metrics, and action verbs. Turn job duties into compelling achievements.',
  },
  inputLabel: 'Your Accomplishment Statement',
  inputPlaceholder: 'Paste a resume bullet point, e.g., "Led team to increase revenue by 40% through new customer acquisition strategy"',
  criteria: [
    { name: 'Action Verb', weight: 20, keywords: ['led', 'developed', 'created', 'increased', 'reduced', 'managed', 'built', 'launched', 'implemented', 'designed', 'achieved', 'delivered', 'drove', 'spearheaded', 'orchestrated'], description: 'Strong action verb at the start' },
    { name: 'Quantified Impact', weight: 30, keywords: ['%', 'percent', '$', 'million', 'thousand', 'doubled', 'tripled', '2x', '3x', '10x', 'increased by', 'reduced by', 'saved', 'generated'], description: 'Includes specific numbers or metrics' },
    { name: 'Business Impact', weight: 25, keywords: ['revenue', 'profit', 'cost', 'efficiency', 'productivity', 'customer', 'user', 'retention', 'growth', 'conversion', 'satisfaction', 'NPS'], description: 'Shows business value' },
    { name: 'Specificity', weight: 15, keywords: ['by implementing', 'through', 'resulting in', 'which led to', 'by creating', 'using', 'via'], description: 'Explains how the result was achieved' },
    { name: 'Clarity', weight: 10, keywords: [], description: 'Clear, concise, and easy to understand' },
  ],
  tips: [
    'Start every bullet with a strong action verb (Led, Built, Drove)',
    'Include numbers whenever possible (%, $, time saved)',
    'Show business impact: revenue, users, efficiency',
    'Explain HOW you achieved results, not just what you did',
    'Keep each bullet to 1-2 lines max',
  ],
}

export const jobBoardStrategyQuiz: QuizTool = {
  slug: 'job-board-strategy-quiz',
  name: 'Job Board Strategy Quiz',
  description: 'Discover which job boards match your career goals and industry',
  category: 'Job Search',
  type: 'quiz',
  seo: {
    title: 'Job Board Strategy Quiz | Find the Best Job Boards for You',
    description: 'Stop wasting time on the wrong job boards. Take this quiz to find where your dream jobs are actually posted.',
  },
  questions: [
    { id: 'industry', question: 'What industry are you targeting?', options: [
      { value: 'tech', label: 'Tech / Software', points: { linkedin: 2, wellfound: 3, levels: 3 } },
      { value: 'finance', label: 'Finance / Banking', points: { linkedin: 3, indeed: 2, glassdoor: 2 } },
      { value: 'healthcare', label: 'Healthcare', points: { indeed: 3, linkedin: 2, healthcarejobs: 3 } },
      { value: 'creative', label: 'Creative / Design', points: { behance: 3, dribbble: 3, linkedin: 2 } },
      { value: 'general', label: 'Multiple / Not Sure', points: { linkedin: 3, indeed: 3, glassdoor: 2 } },
    ]},
    { id: 'experience', question: 'What\'s your experience level?', options: [
      { value: 'entry', label: 'Entry Level (0-2 years)', points: { linkedin: 2, handshake: 3, indeed: 2 } },
      { value: 'mid', label: 'Mid Level (3-7 years)', points: { linkedin: 3, glassdoor: 2, levels: 2 } },
      { value: 'senior', label: 'Senior (8+ years)', points: { linkedin: 3, levels: 3, exec: 2 } },
      { value: 'executive', label: 'Executive', points: { linkedin: 2, exec: 3, network: 3 } },
    ]},
    { id: 'company_size', question: 'What size company interests you?', options: [
      { value: 'startup', label: 'Startups', points: { wellfound: 3, ycombinator: 3, linkedin: 1 } },
      { value: 'midsize', label: 'Mid-size (100-1000)', points: { linkedin: 3, glassdoor: 2, indeed: 2 } },
      { value: 'enterprise', label: 'Large Enterprise', points: { linkedin: 3, company_careers: 3, glassdoor: 2 } },
      { value: 'any', label: 'Open to All', points: { linkedin: 3, indeed: 2, glassdoor: 2 } },
    ]},
    { id: 'priority', question: 'What matters most in your search?', options: [
      { value: 'salary', label: 'Salary Transparency', points: { levels: 3, glassdoor: 3, linkedin: 1 } },
      { value: 'culture', label: 'Company Culture', points: { glassdoor: 3, linkedin: 2, blind: 2 } },
      { value: 'remote', label: 'Remote Work', points: { weworkremotely: 3, remoteok: 3, flexjobs: 3 } },
      { value: 'growth', label: 'Career Growth', points: { linkedin: 3, levels: 2, glassdoor: 2 } },
    ]},
  ],
  results: [
    { id: 'linkedin', title: 'LinkedIn First', description: 'LinkedIn should be your primary platform. Most roles in your category are posted here, and recruiters actively source candidates.', recommendations: ['Optimize your LinkedIn profile', 'Set job alerts for target roles', 'Connect with recruiters in your industry', 'Apply to jobs within first 24 hours'] },
    { id: 'wellfound', title: 'Startup Job Boards', description: 'Wellfound (formerly AngelList) and Y Combinator\'s Work at a Startup are your best bets for finding startup opportunities.', recommendations: ['Create a detailed Wellfound profile', 'Browse YC companies hiring', 'Follow startup newsletters', 'Network at startup events'] },
    { id: 'levels', title: 'Levels.fyi + Blind', description: 'For competitive tech salaries and insider info, Levels.fyi and Blind are essential. Great for understanding compensation.', recommendations: ['Research salary ranges on Levels', 'Read Blind for company insights', 'Use salary data in negotiations', 'Target companies with strong comp'] },
    { id: 'remote', title: 'Remote-First Boards', description: 'WeWorkRemotely, Remote OK, and FlexJobs specialize in distributed work. Perfect for location-independent roles.', recommendations: ['Apply on WeWorkRemotely', 'Check Remote OK daily', 'Consider FlexJobs premium', 'Highlight remote experience'] },
    { id: 'glassdoor', title: 'Glassdoor + Indeed', description: 'For comprehensive job listings and company reviews, Glassdoor and Indeed cover the broadest range of opportunities.', recommendations: ['Set up Glassdoor alerts', 'Research company reviews', 'Use Indeed\'s easy apply wisely', 'Read interview experiences'] },
  ],
}

export const linkedinProfileOptimizer: GeneratorTool = {
  slug: 'linkedin-profile-optimizer',
  name: 'LinkedIn Profile Section Generator',
  description: 'Generate optimized LinkedIn About and Experience sections',
  category: 'LinkedIn',
  type: 'generator',
  seo: {
    title: 'LinkedIn Profile Section Generator | Optimize Your Profile',
    description: 'Generate compelling LinkedIn About and Experience sections that attract recruiters and opportunities.',
  },
  fields: [
    { id: 'current_title', label: 'Current/Target Title', type: 'text', placeholder: 'e.g., Senior Product Manager', required: true },
    { id: 'years_experience', label: 'Years of Experience', type: 'select', options: [
      { value: '0-2', label: '0-2 years' },
      { value: '3-5', label: '3-5 years' },
      { value: '6-10', label: '6-10 years' },
      { value: '10+', label: '10+ years' },
    ], required: true },
    { id: 'key_skills', label: 'Top 3 Skills', type: 'text', placeholder: 'e.g., Product Strategy, User Research, Agile', required: true },
    { id: 'achievement', label: 'Biggest Achievement', type: 'textarea', placeholder: 'e.g., Launched product that grew to 1M users', required: true },
    { id: 'looking_for', label: 'What You\'re Looking For', type: 'text', placeholder: 'e.g., Senior PM roles at B2B SaaS companies', required: true },
  ],
  template: `# LinkedIn Profile Optimization

## About Section (Copy This)

{{current_title}} with {{years_experience}} years turning complex problems into products users love.

**What I do:**
I specialize in {{key_skills}}, with a track record of {{achievement}}.

**What drives me:**
Building products that make a real difference. I thrive at the intersection of user needs and business goals.

**What I'm looking for:**
{{looking_for}}. Let's connect if you're building something interesting.

📬 Open to conversations: [your email]

---

## Experience Section Tips

**Headline Formula:**
{{current_title}} | {{key_skills}} | {{achievement}}

**Experience Bullets:**
- Lead with impact: "Drove..." "Launched..." "Grew..."
- Include numbers: "Increased X by Y%"
- Show scope: "Managed team of X" or "Served X users"

**Example bullet for your achievement:**
• {{achievement}}

---

## Profile Optimization Checklist

- [ ] Professional headshot (face takes up 60% of frame)
- [ ] Background image relevant to your industry
- [ ] Headline uses target keywords: {{current_title}}
- [ ] About section tells your story (copy above)
- [ ] Featured section showcases best work
- [ ] Experience has 3-5 bullets per role
- [ ] Skills section has top 3: {{key_skills}}
- [ ] Open to Work badge (if applicable)

---

## Keywords to Include (For Search)

Based on your profile, include these keywords throughout:
- {{current_title}}
- {{key_skills}}
- Related: strategy, leadership, growth, innovation`,
  outputLabel: 'Your Optimized LinkedIn Profile',
}

export const careerVisionGenerator: GeneratorTool = {
  slug: 'career-vision-generator',
  name: 'Career Vision Statement Generator',
  description: 'Create a compelling 5-year career vision statement',
  category: 'Career Growth',
  type: 'generator',
  seo: {
    title: 'Career Vision Statement Generator | Define Your Future',
    description: 'Generate a clear, motivating career vision statement. Know where you\'re going and how to get there.',
  },
  fields: [
    { id: 'current_role', label: 'Current Role', type: 'text', placeholder: 'e.g., Product Manager at a startup', required: true },
    { id: 'target_role', label: '5-Year Target Role', type: 'text', placeholder: 'e.g., VP of Product at a growth-stage company', required: true },
    { id: 'core_strength', label: 'Core Strength', type: 'select', options: [
      { value: 'technical', label: 'Technical Excellence' },
      { value: 'leadership', label: 'People Leadership' },
      { value: 'strategy', label: 'Strategic Thinking' },
      { value: 'execution', label: 'Execution & Delivery' },
      { value: 'innovation', label: 'Innovation & Creativity' },
    ], required: true },
    { id: 'impact_area', label: 'Desired Impact', type: 'textarea', placeholder: 'What change do you want to create? e.g., Make AI accessible to small businesses', required: true },
  ],
  template: `# Career Vision Statement

## Where I Am Today
**Current Role:** {{current_role}}
**Core Strength:** {{core_strength}}

## Where I'm Going
**5-Year Target:** {{target_role}}

## My Purpose
I want to {{impact_area}}

## Vision Statement
In 5 years, I will be a {{target_role}}, leveraging my {{core_strength}} to {{impact_area}}. I will be known for turning complex challenges into elegant solutions and building teams that ship products users love.

## Key Milestones

### Year 1: Foundation
- [ ] Master current role fundamentals
- [ ] Build expertise in {{core_strength}}
- [ ] Identify mentor in target field

### Year 2-3: Growth
- [ ] Take on stretch assignments
- [ ] Lead a significant initiative
- [ ] Expand network in target industry

### Year 4-5: Transition
- [ ] Position for target role
- [ ] Build reputation as {{core_strength}} expert
- [ ] Achieve {{target_role}} or equivalent

## Daily Actions That Support This Vision
1. Spend 30 min/day on skill development
2. Connect with 2 new people weekly
3. Document wins and learnings
4. Seek feedback proactively

## Review Schedule
- Monthly: Check progress against milestones
- Quarterly: Adjust goals based on learnings
- Annually: Revisit and update full vision`,
  outputLabel: 'Your Career Vision Statement',
}

// ============ CULTURE & TRANSITION TOOLS ============

export const companyCultureFitScore: ScoreTool = {
  slug: 'company-culture-fit-score',
  name: 'Company Culture Fit Score',
  description: 'Evaluate how well a company\'s culture matches your work style and values',
  category: 'Career Decisions',
  type: 'score',
  seo: {
    title: 'Company Culture Fit Score | Find Your Ideal Workplace',
    description: 'Analyze job postings and company descriptions to see if the culture matches your preferences. Stop taking jobs at places you\'ll hate.',
  },
  inputLabel: 'Paste job posting, company about page, or Glassdoor reviews',
  inputPlaceholder: `We're a fast-paced startup that values ownership and autonomy. Our team works hard and plays hard. We have unlimited PTO and expect everyone to be available for urgent issues. We move fast and break things...`,
  criteria: [
    { name: 'Work-Life Balance', weight: 25, keywords: ['flexible', 'balance', 'remote', 'wfh', 'hybrid', 'async', '40 hours', 'no overtime', 'boundaries', 'sustainable'], description: 'Respect for personal time and boundaries' },
    { name: 'Growth & Learning', weight: 20, keywords: ['development', 'learning', 'training', 'mentorship', 'growth', 'career path', 'promotion', 'education budget', 'conferences'], description: 'Investment in employee development' },
    { name: 'Collaboration Style', weight: 20, keywords: ['collaborative', 'team', 'cross-functional', 'inclusive', 'diverse', 'support', 'psychological safety'], description: 'How teams work together' },
    { name: 'Transparency', weight: 15, keywords: ['transparent', 'open', 'honest', 'feedback', 'communication', 'all-hands', 'share', 'information'], description: 'Openness and honest communication' },
    { name: 'Autonomy', weight: 10, keywords: ['autonomy', 'ownership', 'independent', 'trust', 'self-directed', 'empowered', 'decision-making'], description: 'Freedom to make decisions' },
    { name: 'Red Flags', weight: 10, keywords: [], description: 'Watch for: "fast-paced" (chaos), "like a family" (boundaries), "rockstar" (overwork)' },
  ],
  tips: [
    'Watch for coded language: "fast-paced" often means chaotic',
    '"Like a family" can mean poor boundaries',
    '"Unlimited PTO" often results in less vacation taken',
    'Check Glassdoor/Blind for employee perspectives',
    'Ask culture questions in interviews: "How do you handle work-life balance?"',
  ],
}

export const networkingEventPrepGenerator: GeneratorTool = {
  slug: 'networking-event-prep-generator',
  name: 'Networking Event Prep Generator',
  description: 'Get a personalized prep checklist for career fairs, conferences, and networking events',
  category: 'Networking',
  type: 'generator',
  seo: {
    title: 'Networking Event Prep Generator | Career Fair Success',
    description: 'Generate a personalized prep checklist for networking events, career fairs, and conferences. Know exactly what to say and do.',
  },
  fields: [
    { id: 'event_type', label: 'Event Type', type: 'select', options: [
      { value: 'career_fair', label: 'Career Fair' },
      { value: 'conference', label: 'Industry Conference' },
      { value: 'meetup', label: 'Meetup / Casual Networking' },
      { value: 'alumni', label: 'Alumni Event' },
    ], required: true },
    { id: 'goal', label: 'Your Main Goal', type: 'select', options: [
      { value: 'job', label: 'Find a job' },
      { value: 'learn', label: 'Learn and grow network' },
      { value: 'clients', label: 'Find clients/business' },
      { value: 'mentor', label: 'Find mentors' },
    ], required: true },
    { id: 'role', label: 'Your Role/Industry', type: 'text', placeholder: 'Software Engineer', required: true },
    { id: 'target_companies', label: 'Target Companies (optional)', type: 'text', placeholder: 'Google, Microsoft, startups' },
  ],
  template: `📋 NETWORKING EVENT PREP CHECKLIST

Event: {{event_type}} | Goal: {{goal}} | Role: {{role}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 1 WEEK BEFORE
□ Research {{target_companies}} attending
□ Update LinkedIn profile
□ Prepare 30-second elevator pitch
□ Print 20+ business cards or set up digital card
□ Prepare 3-5 questions to ask

🎯 YOUR ELEVATOR PITCH
"Hi, I'm [Name]. I'm a {{role}} with experience in [key skill]. I'm particularly interested in [topic] and looking to [goal]. What brings you here today?"

❓ QUESTIONS TO ASK
1. "What's the most exciting project your team is working on?"
2. "What skills are most valuable in your role?"
3. "How did you get into this field?"
4. "What's the culture like at your company?"
5. "Would you be open to connecting on LinkedIn?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 DAY OF EVENT
□ Dress code: business casual minimum
□ Bring: Resume copies, business cards, phone charged
□ Arrive 15 min early for less crowded conversations
□ Set goal: Talk to at least 10 people

💬 CONVERSATION FLOW
1. Approach with a smile and handshake
2. Deliver your elevator pitch
3. Ask about THEM (people love talking about themselves)
4. Find common ground
5. Exchange contact info
6. "Great meeting you, I'll follow up on LinkedIn!"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📅 WITHIN 24 HOURS AFTER
□ Connect on LinkedIn with personalized note
□ Send follow-up emails to key contacts
□ Add notes about each person while fresh
□ Thank event organizers

📧 FOLLOW-UP TEMPLATE
"Hi [Name], Great meeting you at [event]. I enjoyed our conversation about [topic]. Would love to stay in touch and [specific next step]. Best, [Your name]"`,
  outputLabel: 'Your Networking Prep Checklist',
}

export const layoffRecoveryScore: ScoreTool = {
  slug: 'layoff-recovery-score',
  name: 'Layoff Recovery Score',
  description: 'Assess your readiness to bounce back after being laid off',
  category: 'Career Transition',
  type: 'score',
  seo: {
    title: 'Layoff Recovery Score | Bounce Back Stronger',
    description: 'Assess your readiness after a layoff. Get personalized action steps to land your next role faster.',
  },
  inputLabel: 'Describe your current situation after the layoff',
  inputPlaceholder: `I was laid off 2 weeks ago from a senior PM role after 3 years. I have 4 months of savings. My resume is updated and I've started applying to a few roles. I've told my network but haven't been actively networking. I'm feeling discouraged but trying to stay positive...`,
  criteria: [
    { name: 'Financial Runway', weight: 25, keywords: ['savings', 'months', 'severance', 'runway', 'emergency fund', 'covered', 'budget', 'expenses'], description: 'Financial stability during job search' },
    { name: 'Job Search Activity', weight: 25, keywords: ['applying', 'applications', 'interviews', 'reached out', 'networking', 'daily', 'weekly', 'proactive'], description: 'Active job search efforts' },
    { name: 'Materials Ready', weight: 20, keywords: ['resume', 'updated', 'linkedin', 'portfolio', 'cover letter', 'ready', 'prepared', 'optimized'], description: 'Resume, LinkedIn, and materials updated' },
    { name: 'Network Activation', weight: 15, keywords: ['network', 'connections', 'reached out', 'coffee', 'informational', 'referral', 'contacts', 'told'], description: 'Leverage of professional network' },
    { name: 'Mental Health', weight: 15, keywords: ['positive', 'routine', 'exercise', 'support', 'healthy', 'processing', 'therapy', 'self-care'], description: 'Emotional well-being and self-care' },
  ],
  tips: [
    'Take 1-2 weeks to process before full job search mode',
    'File for unemployment immediately — it\'s your right',
    'Update LinkedIn headline to "Open to Work" (recruiter setting)',
    'Reach out to your network BEFORE you start applying',
    'Aim for 5-10 quality applications per day, not 50 spray-and-pray',
    'Treat job searching like a job: set hours, take breaks',
    'Consider contract/freelance work for income while searching',
  ],
}

// ============ JOB HOPPING & CAREER GAPS ============

export const jobHoppingExplanationScore: ScoreTool = {
  slug: 'job-hopping-explanation-score',
  name: 'Job Hopping Explanation Score',
  description: 'Learn how to explain frequent job changes in a positive light',
  category: 'Career Challenges',
  type: 'score',
  seo: {
    title: 'Job Hopping Explanation Score | Turn Frequent Moves into Strengths',
    description: 'Score your job hopping narrative. Learn how to explain multiple job changes as strategic career moves.',
  },
  inputLabel: 'Describe your job history and reasons for each change',
  inputPlaceholder: `I've had 4 jobs in 5 years. Left first job after 8 months for better pay. Second company had layoffs after 14 months. Third job was a startup that ran out of funding after 10 months. Current role is a contract position I've been at for 6 months...`,
  criteria: [
    { name: 'Clear Narrative', weight: 25, keywords: ['growth', 'opportunity', 'challenge', 'promoted', 'recruited', 'strategic', 'deliberate', 'sought'], description: 'Coherent story connecting the moves' },
    { name: 'External Factors', weight: 20, keywords: ['layoff', 'acquisition', 'funding', 'restructure', 'relocation', 'company closed', 'downsized'], description: 'Moves due to circumstances beyond control' },
    { name: 'Skill Growth', weight: 20, keywords: ['learned', 'skills', 'experience', 'expertise', 'developed', 'mastered', 'expanded'], description: 'Skills gained at each position' },
    { name: 'Progression', weight: 20, keywords: ['promotion', 'responsibility', 'leadership', 'senior', 'manager', 'bigger', 'scope'], description: 'Upward trajectory despite moves' },
    { name: 'Stability Intent', weight: 15, keywords: ['long-term', 'stability', 'committed', 'stay', 'grow with', 'looking for', 'settle'], description: 'Showing interest in staying longer now' },
  ],
  tips: [
    'Frame moves as intentional growth, not restlessness',
    'Group short stints: "During a period of exploration..."',
    'Quantify achievements at EACH role to show impact',
    'Emphasize what you learned, not why you left',
    'Show commitment to next role: "I\'m looking for a place to grow for 3-5+ years"',
    'Be honest about layoffs/closures — they\'re understandable',
    'Highlight relationships: "I\'ve maintained contact with former managers"',
  ],
}

export const technicalInterviewPrepScore: ScoreTool = {
  slug: 'technical-interview-prep-score',
  name: 'Technical Interview Prep Score',
  description: 'Assess your readiness for technical and coding interviews',
  category: 'Interview Prep',
  type: 'score',
  seo: {
    title: 'Technical Interview Prep Score | Coding Interview Readiness',
    description: 'Score your technical interview preparation. Get personalized recommendations for algorithms, system design, and behavioral questions.',
  },
  inputLabel: 'Describe your current preparation status',
  inputPlaceholder: `I have an interview with Google in 3 weeks. I've done about 50 LeetCode problems (mostly easy, some medium). Haven't practiced system design yet. I know Python well but rusty on algorithms. Did mock interviews with friends twice...`,
  criteria: [
    { name: 'Data Structures & Algorithms', weight: 30, keywords: ['leetcode', 'algorithms', 'data structures', 'arrays', 'trees', 'graphs', 'dynamic programming', 'sorting', 'searching', 'problems'], description: 'Core DSA preparation' },
    { name: 'System Design', weight: 25, keywords: ['system design', 'architecture', 'scalability', 'distributed', 'database', 'caching', 'load balancer', 'design patterns'], description: 'High-level design knowledge' },
    { name: 'Language Proficiency', weight: 15, keywords: ['python', 'java', 'javascript', 'c++', 'fluent', 'comfortable', 'syntax', 'standard library'], description: 'Coding language mastery' },
    { name: 'Mock Practice', weight: 15, keywords: ['mock', 'practice', 'whiteboard', 'pramp', 'interviewing.io', 'timed', 'under pressure'], description: 'Realistic interview practice' },
    { name: 'Behavioral Prep', weight: 15, keywords: ['behavioral', 'star', 'stories', 'leadership', 'conflict', 'failure', 'success', 'examples'], description: 'Soft skills and stories' },
  ],
  tips: [
    'Focus on medium difficulty problems — most interviews are there',
    'Practice explaining your thought process OUT LOUD',
    'Time yourself: 20-25 min per coding problem',
    'Learn the patterns (sliding window, two pointers, BFS/DFS)',
    'System design: know your tradeoffs (SQL vs NoSQL, etc.)',
    'Do at least 3-5 mock interviews with strangers',
    'Prepare 5-7 STAR stories that can answer multiple questions',
    'Review your resume — be ready to discuss any project',
  ],
}

export const remoteWorkReadinessQuiz: QuizTool = {
  slug: 'remote-work-readiness-quiz',
  name: 'Remote Work Readiness Quiz',
  description: 'Find out if remote work is right for you',
  category: 'Career Decisions',
  type: 'quiz',
  seo: {
    title: 'Remote Work Readiness Quiz | Are You Ready for WFH?',
    description: 'Take this quiz to see if you\'re suited for remote work. Assess your self-discipline, communication style, and home setup.',
  },
  questions: [
    {
      id: 'self_discipline',
      question: 'How do you typically stay productive without supervision?',
      options: [
        { value: 'thrive', label: 'I thrive independently — I set my own deadlines and exceed them', points: { remote: 3, hybrid: 1, office: 0 } },
        { value: 'structure', label: 'I do well with some structure but can self-manage', points: { remote: 2, hybrid: 2, office: 1 } },
        { value: 'checkins', label: 'I need regular check-ins to stay on track', points: { remote: 1, hybrid: 2, office: 2 } },
        { value: 'oversight', label: 'I struggle without oversight and external accountability', points: { remote: 0, hybrid: 1, office: 3 } },
      ],
    },
    {
      id: 'communication',
      question: 'How comfortable are you with async communication (Slack, email)?',
      options: [
        { value: 'prefer_written', label: 'Very comfortable — I prefer written communication', points: { remote: 3, hybrid: 1, office: 0 } },
        { value: 'mixed', label: 'Comfortable with a mix of written and video calls', points: { remote: 2, hybrid: 3, office: 1 } },
        { value: 'video', label: 'I prefer video calls over text-based communication', points: { remote: 1, hybrid: 2, office: 2 } },
        { value: 'inperson', label: 'I strongly prefer in-person conversation', points: { remote: 0, hybrid: 1, office: 3 } },
      ],
    },
    {
      id: 'workspace',
      question: 'What\'s your home workspace like?',
      options: [
        { value: 'dedicated', label: 'Dedicated office with good equipment and no distractions', points: { remote: 3, hybrid: 2, office: 0 } },
        { value: 'quiet', label: 'Quiet space I can use consistently', points: { remote: 2, hybrid: 2, office: 1 } },
        { value: 'shared', label: 'Shared space with some distractions', points: { remote: 1, hybrid: 2, office: 2 } },
        { value: 'none', label: 'No dedicated workspace — I\'d work from couch/bed', points: { remote: 0, hybrid: 1, office: 3 } },
      ],
    },
    {
      id: 'social_needs',
      question: 'How important is daily social interaction with coworkers?',
      options: [
        { value: 'solo', label: 'Not important — I prefer focused solo work', points: { remote: 3, hybrid: 1, office: 0 } },
        { value: 'virtual_ok', label: 'Somewhat — virtual socializing is enough', points: { remote: 2, hybrid: 2, office: 1 } },
        { value: 'miss_inperson', label: 'Important — I miss in-person connection', points: { remote: 1, hybrid: 2, office: 2 } },
        { value: 'critical', label: 'Critical — I feel isolated working alone', points: { remote: 0, hybrid: 1, office: 3 } },
      ],
    },
    {
      id: 'time_management',
      question: 'How do you handle flexible schedules?',
      options: [
        { value: 'strict', label: 'I set strict hours and stick to them', points: { remote: 3, hybrid: 2, office: 1 } },
        { value: 'flexible', label: 'I\'m flexible but maintain work-life boundaries', points: { remote: 2, hybrid: 3, office: 1 } },
        { value: 'bleed', label: 'Work tends to bleed into personal time', points: { remote: 1, hybrid: 2, office: 2 } },
        { value: 'struggle', label: 'I struggle to stop working or get started', points: { remote: 0, hybrid: 1, office: 3 } },
      ],
    },
  ],
  results: [
    { id: 'remote', title: 'Remote Work Natural', description: 'You\'re built for remote work. You have the discipline, workspace, and communication style to thrive.', recommendations: ['Target fully remote roles', 'Highlight self-management skills in applications', 'Emphasize async communication experience', 'Showcase your home office setup in interviews'] },
    { id: 'hybrid', title: 'Hybrid Ready', description: 'You can succeed remotely but might benefit from occasional in-person collaboration.', recommendations: ['Target hybrid roles (2-3 days office)', 'Look for companies with flexible policies', 'Prepare for both remote and in-office interviews', 'Ask about team collaboration patterns'] },
    { id: 'office', title: 'Office-Preferred', description: 'Remote work may not be the best fit right now. Consider building remote-work skills before transitioning.', recommendations: ['Consider in-office or hybrid roles first', 'Work on self-discipline and time management', 'Create a dedicated home workspace', 'Practice async communication skills'] },
  ],
}

// ============ INTERVIEW STORYTELLING ============

export const interviewStorytellingScore: ScoreTool = {
  slug: 'interview-storytelling-score',
  name: 'Interview Storytelling Score',
  description: 'Rate your STAR method interview stories for impact',
  category: 'Interview Prep',
  type: 'score',
  seo: {
    title: 'Interview Storytelling Score | Tell Better STAR Stories',
    description: 'Score your interview stories using the STAR method. Make your behavioral answers memorable and impactful.',
  },
  inputLabel: 'Paste Your STAR Story',
  inputPlaceholder: `Question: Tell me about a time you dealt with conflict at work.

Situation: Two senior engineers on my team had fundamentally different approaches to our database architecture migration.

Task: As the tech lead, I needed to resolve the conflict and keep the project on track without damaging relationships.

Action: I scheduled individual 1:1s to understand each perspective. Then I organized a technical design review where both presented their approaches with data. I created evaluation criteria tied to our project goals and facilitated a decision-making session.

Result: We chose a hybrid approach that incorporated strengths from both proposals. The migration completed 10% under budget, and both engineers later told me they appreciated the fair process.`,
  criteria: [
    { name: 'Clear Situation', weight: 20, keywords: ['situation', 'context', 'team', 'company', 'project', 'challenge', 'problem', 'when'], description: 'Sets clear context (who, what, when, where)' },
    { name: 'Specific Task', weight: 15, keywords: ['responsible', 'task', 'role', 'needed to', 'my job', 'assigned', 'goal'], description: 'Your specific responsibility is clear' },
    { name: 'Detailed Actions', weight: 30, keywords: ['I', 'organized', 'created', 'scheduled', 'built', 'led', 'developed', 'implemented', 'designed', 'facilitated'], description: 'Shows YOUR specific actions (not "we")' },
    { name: 'Quantified Results', weight: 25, keywords: ['%', '$', 'increased', 'decreased', 'improved', 'saved', 'resulted', 'outcome', 'impact', 'success'], description: 'Measurable outcome or clear success' },
    { name: 'Concise Length', weight: 10, keywords: [], description: '60-90 seconds when spoken (200-300 words)' },
  ],
  tips: [
    'Keep situation/task brief (20%), focus on action/result (80%)',
    'Use "I" not "we" — show YOUR contribution',
    'Include at least one number in your result',
    'End on the positive outcome, not the challenge',
    'Practice out loud — aim for 60-90 seconds',
    'Have 5-7 stories ready that can answer multiple questions',
  ],
}

export const linkedinPostScore: ScoreTool = {
  slug: 'linkedin-post-score',
  name: 'LinkedIn Post Score',
  description: 'Rate your LinkedIn posts for engagement and professional impact',
  category: 'Personal Brand',
  type: 'score',
  seo: {
    title: 'LinkedIn Post Score | Get More Engagement',
    description: 'Score your LinkedIn post before publishing. Optimize for engagement, credibility, and professional visibility.',
  },
  inputLabel: 'Paste Your LinkedIn Post',
  inputPlaceholder: `I got rejected from 47 jobs before landing my dream role at Google.

Here's what I learned:

1. Personalize every application (templates are obvious)
2. Follow up — 3 of my interviews came from follow-up emails
3. Track everything in a spreadsheet
4. Treat each rejection as data, not failure
5. Your network matters more than your resume

The job that hired me? A LinkedIn connection referred me.

Stop applying into the void. Start building relationships.

What's your biggest job search lesson? 👇`,
  criteria: [
    { name: 'Hook', weight: 25, keywords: ['I', 'got', 'learned', 'made', 'discovered', 'realized', 'truth', 'secret', 'mistake', 'rejected', 'hired', 'promoted'], description: 'First 2 lines grab attention' },
    { name: 'Value/Insight', weight: 25, keywords: ['learned', 'lesson', 'tip', 'advice', 'how', 'why', 'because', 'strategy', 'mistake', 'insight'], description: 'Provides genuine value to readers' },
    { name: 'Readability', weight: 20, keywords: [], description: 'Short paragraphs, white space, easy to skim' },
    { name: 'Personal Story', weight: 15, keywords: ['I', 'my', 'me', 'experience', 'story', 'when I', 'personally'], description: 'Includes personal experience or perspective' },
    { name: 'Engagement CTA', weight: 15, keywords: ['?', 'what', 'how', 'your', 'comment', 'share', 'thoughts', 'agree', 'disagree'], description: 'Invites discussion or shares' },
  ],
  tips: [
    'First 2 lines appear in feed — make them count',
    'Use white space — one thought per line',
    'Share failures and learnings, not just wins',
    'End with a question to boost comments',
    'Best times: Tuesday-Thursday, 7-9 AM or 12-2 PM',
    'No external links in main post (kills reach)',
  ],
}

export const internshipApplicationScore: ScoreTool = {
  slug: 'internship-application-score',
  name: 'Internship Application Score',
  description: 'Rate your internship application materials as a student',
  category: 'Students',
  type: 'score',
  seo: {
    title: 'Internship Application Score | Student Resume & Cover Letter',
    description: 'Score your internship application. Get feedback on how to highlight projects, coursework, and potential when you lack work experience.',
  },
  inputLabel: 'Paste Your Application Materials',
  inputPlaceholder: `Resume Summary:
Computer Science student at UC Berkeley (GPA: 3.7) seeking Summer 2026 SWE internship. Built full-stack projects using React, Node.js, and PostgreSQL. Led 4-person team in hackathon winning project...

Cover Letter excerpt:
I'm excited to apply for the Software Engineering Internship at [Company]. Your work on [specific product] aligns with my interest in [relevant area]. In my coursework and projects, I've developed skills in [relevant tech]...`,
  criteria: [
    { name: 'Projects Highlighted', weight: 30, keywords: ['built', 'created', 'developed', 'project', 'hackathon', 'portfolio', 'github', 'deployed', 'users', 'app'], description: 'Showcases hands-on project work' },
    { name: 'Relevant Skills', weight: 25, keywords: ['python', 'java', 'react', 'node', 'sql', 'aws', 'git', 'api', 'machine learning', 'data'], description: 'Lists relevant technical skills' },
    { name: 'Company Research', weight: 20, keywords: ['your', 'company', 'product', 'mission', 'team', 'interested', 'excited', 'specific'], description: 'Shows knowledge of the specific company' },
    { name: 'Transferable Experience', weight: 15, keywords: ['leadership', 'team', 'club', 'volunteer', 'research', 'ta', 'teaching', 'organized'], description: 'Highlights non-work experiences' },
    { name: 'Enthusiasm', weight: 10, keywords: ['excited', 'passionate', 'eager', 'interested', 'motivated', 'curious', 'love'], description: 'Shows genuine enthusiasm for the role' },
  ],
  tips: [
    'Projects > GPA — show what you\'ve built',
    'Include GitHub links to your best work',
    'Quantify everything: "4-person team", "500 users", "3 weeks"',
    'Leadership in clubs/orgs counts as experience',
    'Research the company\'s tech stack and mention it',
    'Tailor each cover letter — generic = rejected',
  ],
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
  companyResearchGenerator,
  jobOfferComparison,
  interviewPrepChecklist,
  linkedinConnectionScore,
  jobDescriptionDecoder,
  referenceRequestScore,
  remoteJobApplicationScore,
  atsKeywordScore,
  recruiterEmailScore,
  informationalInterviewGenerator,
  counterOfferGenerator,
  rejectionResponseGenerator,
  skillsGapAnalyzer,
  behavioralInterviewScore,
  salaryResearchGenerator,
  backgroundCheckPrepScore,
  careerFairPitchGenerator,
  workStyleQuiz,
  portfolioReviewScore,
  interviewReadinessQuiz,
  recommendationRequestGenerator,
  coldEmailGeneratorHiring,
  jobSearchStrategyQuiz,
  careerNarrativeScore,
  exitInterviewScore,
  workplaceConflictScore,
  performanceReviewSelfScore,
  referralRequestScore,
  interviewQuestionBankGenerator,
  networkingFollowUpScore,
  promotionRequestScore,
  jobApplicationTrackerGenerator,
  careerVisionGenerator,
  accomplishmentsScore,
  jobBoardStrategyQuiz,
  linkedinProfileOptimizer,
  companyCultureFitScore,
  networkingEventPrepGenerator,
  layoffRecoveryScore,
  jobHoppingExplanationScore,
  technicalInterviewPrepScore,
  remoteWorkReadinessQuiz,
  interviewStorytellingScore,
  linkedinPostScore,
  internshipApplicationScore,
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

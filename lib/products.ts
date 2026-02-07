// Digital product configurations
// Products auto-generate pages from this config

export interface Product {
  slug: string
  name: string
  description: string
  longDescription: string
  price: number // in cents
  category: 'prompt-pack' | 'cheat-sheet' | 'template-bundle'
  features: string[]
  includes: string[]
  seo: {
    title: string
    description: string
  }
  // Stripe price ID - create in Stripe dashboard
  stripePriceId?: string
}

export const products: Product[] = [
  // PROMPT PACKS
  {
    slug: 'job-search-prompt-pack',
    name: 'AI Job Search Prompt Pack',
    description: '50 copy-paste prompts to land your dream job faster',
    longDescription: 'Stop staring at blank screens. This pack gives you 50 battle-tested prompts for every stage of your job search - from resume optimization to salary negotiation.',
    price: 900,
    category: 'prompt-pack',
    features: [
      '50 ready-to-use prompts',
      'Resume & cover letter optimization',
      'Interview prep & follow-up',
      'Salary negotiation scripts',
      'LinkedIn optimization'
    ],
    includes: [
      '10 Resume prompts',
      '10 Cover letter prompts', 
      '10 Interview prep prompts',
      '10 Networking prompts',
      '10 Negotiation prompts'
    ],
    seo: {
      title: 'AI Job Search Prompt Pack - 50 Prompts for $9',
      description: 'Get 50 proven AI prompts for job searching. Resume writing, cover letters, interview prep, and salary negotiation.'
    }
  },
  {
    slug: 'resume-writing-prompts',
    name: 'Resume Writing Prompt Pack',
    description: '50 prompts for ATS-optimized, interview-landing resumes',
    longDescription: 'Transform your resume with AI. These prompts help you craft bullet points that pass ATS, highlight achievements, and get callbacks.',
    price: 900,
    category: 'prompt-pack',
    features: [
      'ATS keyword optimization',
      'Achievement quantification',
      'Industry-specific tailoring',
      'Format and structure guides',
      'Common mistakes to avoid'
    ],
    includes: [
      '15 Bullet point generators',
      '10 Summary/headline prompts',
      '10 Skills section prompts',
      '10 Tailoring prompts',
      '5 Review/feedback prompts'
    ],
    seo: {
      title: 'Resume Writing AI Prompts - ATS-Optimized Templates',
      description: '50 AI prompts to write ATS-friendly resumes that get interviews. Bullet points, summaries, and tailoring templates.'
    }
  },
  {
    slug: 'career-transition-prompts',
    name: 'Career Transition Prompt Pack',
    description: '50 prompts for changing careers without starting over',
    longDescription: 'Switching industries? These prompts help you reframe your experience, identify transferable skills, and position yourself for your new field.',
    price: 1200,
    category: 'prompt-pack',
    features: [
      'Transferable skills identification',
      'Story reframing techniques',
      'Industry research prompts',
      'Networking for career changers',
      'Interview positioning'
    ],
    includes: [
      '10 Skills translation prompts',
      '10 Resume reframing prompts',
      '10 Cover letter pivots',
      '10 Interview answer rewrites',
      '10 Research & networking prompts'
    ],
    seo: {
      title: 'Career Change AI Prompts - Switch Industries Successfully',
      description: 'AI prompts for career changers. Reframe experience, identify transferable skills, and land jobs in new industries.'
    }
  },
  {
    slug: 'linkedin-optimization-prompts',
    name: 'LinkedIn Optimization Prompt Pack',
    description: '50 prompts to make recruiters come to you',
    longDescription: 'Turn your LinkedIn into a recruiter magnet. These prompts optimize every section of your profile for visibility and engagement.',
    price: 900,
    category: 'prompt-pack',
    features: [
      'Headline optimization',
      'About section that converts',
      'Experience bullet points',
      'Skills & endorsement strategy',
      'Content creation templates'
    ],
    includes: [
      '10 Headline variations',
      '10 About section prompts',
      '15 Experience bullet prompts',
      '10 Post/content prompts',
      '5 Connection message templates'
    ],
    seo: {
      title: 'LinkedIn AI Prompts - Get Found by Recruiters',
      description: 'Optimize your LinkedIn profile with AI. Headline, about, experience, and content prompts that attract recruiters.'
    }
  },
  // CHEAT SHEETS
  {
    slug: 'tech-interview-cheat-sheet',
    name: 'Tech Interview Cheat Sheet',
    description: 'Everything you need to ace technical interviews',
    longDescription: 'From data structures to system design, this cheat sheet covers everything asked in FAANG and startup interviews.',
    price: 1200,
    category: 'cheat-sheet',
    features: [
      'Data structures & algorithms',
      'System design fundamentals',
      'Behavioral question frameworks',
      'Coding pattern recognition',
      'Common gotchas to avoid'
    ],
    includes: [
      'Big O complexity chart',
      '20 most common patterns',
      'System design template',
      '50 behavioral Q&As (STAR format)',
      'Salary negotiation scripts'
    ],
    seo: {
      title: 'Tech Interview Cheat Sheet - FAANG Prep Guide',
      description: 'Complete tech interview prep: algorithms, system design, behavioral questions, and negotiation. FAANG-tested.'
    }
  },
  {
    slug: 'faang-interview-cheat-sheet',
    name: 'FAANG Interview Cheat Sheet',
    description: 'Insider guide to big tech interviews',
    longDescription: 'Company-specific prep for Google, Meta, Amazon, Apple, Netflix, and Microsoft. What they actually ask and how to answer.',
    price: 1500,
    category: 'cheat-sheet',
    features: [
      'Company-specific question banks',
      'Leadership principle deep-dives',
      'Recruiter insider tips',
      'Timeline and process guides',
      'Offer negotiation playbooks'
    ],
    includes: [
      'Google interview breakdown',
      'Amazon LP question guide',
      'Meta system design prep',
      'Apple & Microsoft specifics',
      'Netflix culture fit guide'
    ],
    seo: {
      title: 'FAANG Interview Guide - Google, Meta, Amazon, Apple Prep',
      description: 'Company-specific interview prep for big tech. Leadership principles, system design, and insider tips.'
    }
  },
  {
    slug: 'salary-negotiation-cheat-sheet',
    name: 'Salary Negotiation Cheat Sheet',
    description: 'Scripts and tactics to get paid what you deserve',
    longDescription: 'Word-for-word scripts for every negotiation scenario. From initial offer to competing offers to annual raises.',
    price: 900,
    category: 'cheat-sheet',
    features: [
      'Word-for-word scripts',
      'Counter-offer tactics',
      'Competing offer leverage',
      'Benefits negotiation',
      'Raise request templates'
    ],
    includes: [
      '10 initial response scripts',
      '5 counter-offer templates',
      '5 competing offer scripts',
      'Benefits negotiation guide',
      'Annual raise request framework'
    ],
    seo: {
      title: 'Salary Negotiation Scripts - Get Paid More',
      description: 'Word-for-word salary negotiation scripts. Counter offers, competing offers, and raise requests that work.'
    }
  },
  {
    slug: 'remote-interview-cheat-sheet',
    name: 'Remote Interview Cheat Sheet',
    description: 'Ace video interviews with confidence',
    longDescription: 'Technical setup, background optimization, and video-specific body language tips for remote interviews.',
    price: 700,
    category: 'cheat-sheet',
    features: [
      'Technical setup checklist',
      'Background & lighting guide',
      'Video body language tips',
      'Connection issue recovery',
      'Platform-specific tips'
    ],
    includes: [
      'Equipment checklist',
      'Lighting diagram',
      'Camera angle guide',
      'Backup plans for tech issues',
      'Zoom/Teams/Meet specifics'
    ],
    seo: {
      title: 'Remote Interview Tips - Video Call Success Guide',
      description: 'Master video interviews. Setup, lighting, body language, and tech troubleshooting for remote job seekers.'
    }
  },
  {
    slug: 'executive-job-search-prompts',
    name: 'Executive Job Search Prompt Pack',
    description: '50 prompts for C-suite and VP-level job searches',
    longDescription: 'High-stakes job searching requires high-quality messaging. Prompts tailored for executive positioning, board-level communication, and strategic career moves.',
    price: 1500,
    category: 'prompt-pack',
    features: [
      'Executive resume positioning',
      'Board-level communication',
      'Executive recruiter outreach',
      'Strategic narrative building',
      'Compensation package optimization'
    ],
    includes: [
      '10 Executive summary prompts',
      '10 Board presentation prompts',
      '10 Recruiter outreach scripts',
      '10 Strategic positioning prompts',
      '10 Executive negotiation templates'
    ],
    seo: {
      title: 'Executive Job Search AI Prompts - C-Suite Career Tools',
      description: 'AI prompts for executive job seekers. C-suite positioning, board communication, and executive recruiter outreach.'
    }
  },
  {
    slug: 'networking-outreach-prompts',
    name: 'Networking & Cold Outreach Prompts',
    description: '50 prompts that get responses from strangers',
    longDescription: 'Turn cold connections into warm leads. Proven templates for LinkedIn outreach, email intros, and follow-ups that actually get replies.',
    price: 900,
    category: 'prompt-pack',
    features: [
      'Cold LinkedIn messages',
      'Email introduction templates',
      'Follow-up sequences',
      'Informational interview requests',
      'Referral ask scripts'
    ],
    includes: [
      '15 LinkedIn connection messages',
      '10 Cold email templates',
      '10 Follow-up message prompts',
      '10 Informational interview asks',
      '5 Referral request scripts'
    ],
    seo: {
      title: 'Networking AI Prompts - Cold Outreach That Gets Replies',
      description: 'AI prompts for networking and cold outreach. LinkedIn messages, emails, and follow-ups that convert strangers to connections.'
    }
  },
  {
    slug: 'behavioral-interview-cheat-sheet',
    name: 'Behavioral Interview Cheat Sheet',
    description: '100 STAR-format answers to common questions',
    longDescription: 'Never blank on behavioral questions again. Complete STAR-format answers for the 100 most asked questions, plus frameworks to build your own.',
    price: 1200,
    category: 'cheat-sheet',
    features: [
      '100 STAR-format answers',
      'Question pattern recognition',
      'Story banking template',
      'Red flag answers to avoid',
      'Follow-up question prep'
    ],
    includes: [
      '25 Leadership questions',
      '25 Teamwork questions',
      '25 Problem-solving questions',
      '15 Conflict resolution questions',
      '10 Career motivation questions'
    ],
    seo: {
      title: 'Behavioral Interview Questions - 100 STAR Answers',
      description: 'Complete behavioral interview prep with 100 STAR-format answers. Leadership, teamwork, and problem-solving questions.'
    }
  },
  {
    slug: 'management-interview-cheat-sheet',
    name: 'Management Interview Cheat Sheet',
    description: 'Answers that prove you can lead',
    longDescription: 'Transitioning to management or leveling up? This guide covers team building, conflict resolution, and strategic thinking questions hiring managers actually ask.',
    price: 1200,
    category: 'cheat-sheet',
    features: [
      'Team building scenarios',
      'Conflict resolution frameworks',
      'Performance management questions',
      'Strategic planning examples',
      'Budget and resource discussions'
    ],
    includes: [
      '20 Team building Q&As',
      '20 Conflict resolution scripts',
      '15 Performance management examples',
      '15 Strategic thinking answers',
      '10 Resource management scenarios'
    ],
    seo: {
      title: 'Management Interview Questions - Leadership Answers',
      description: 'Interview prep for management roles. Team building, conflict resolution, and strategic thinking questions with proven answers.'
    }
  },
  {
    slug: 'resume-template-bundle',
    name: 'ATS-Optimized Resume Templates',
    description: '10 proven resume formats that pass ATS',
    longDescription: 'Stop guessing what works. These templates are tested against major ATS systems and optimized for human reviewers. Includes industry-specific variations.',
    price: 1500,
    category: 'template-bundle',
    features: [
      'ATS-tested formats',
      'Industry variations',
      'Both Word and Google Docs',
      'Formatting best practices',
      'Before/after examples'
    ],
    includes: [
      '3 Classic professional templates',
      '3 Modern creative templates',
      '2 Technical role templates',
      '2 Executive templates',
      'Formatting guide PDF'
    ],
    seo: {
      title: 'ATS Resume Templates - Formats That Get Interviews',
      description: 'Resume templates that pass ATS screening. 10 proven formats for every industry, tested against major applicant tracking systems.'
    }
  },
  {
    slug: 'cover-letter-template-bundle',
    name: 'Cover Letter Template Bundle',
    description: '15 templates for every job application scenario',
    longDescription: 'Cover letters that get read. Templates for cold applications, referrals, career changes, and internal moves - all customizable and proven to convert.',
    price: 900,
    category: 'template-bundle',
    features: [
      'Multiple application types',
      'Industry customizations',
      'Tone variations',
      'Opening line formulas',
      'CTA best practices'
    ],
    includes: [
      '5 Standard application templates',
      '3 Referral-based templates',
      '3 Career change templates',
      '2 Internal move templates',
      '2 Executive application templates'
    ],
    seo: {
      title: 'Cover Letter Templates - Get Your Applications Read',
      description: 'Cover letter templates that convert. 15 formats for cold applications, referrals, career changes, and executive roles.'
    }
  },
  {
    slug: 'job-search-tracker',
    name: 'Job Search Tracker Spreadsheet',
    description: 'Organize your search and never miss a follow-up',
    longDescription: 'Track applications, contacts, interviews, and follow-ups in one place. Includes automation tips and pipeline analytics to optimize your search.',
    price: 500,
    category: 'template-bundle',
    features: [
      'Application pipeline view',
      'Contact relationship tracking',
      'Interview scheduling',
      'Follow-up reminders',
      'Analytics dashboard'
    ],
    includes: [
      'Google Sheets template',
      'Notion template',
      'Setup video tutorial',
      'Automation guide',
      'Weekly review checklist'
    ],
    seo: {
      title: 'Job Search Tracker Template - Organize Your Applications',
      description: 'Job search tracker spreadsheet to organize applications, contacts, and interviews. Never miss a follow-up again.'
    }
  }
]

export function getProduct(slug: string): Product | undefined {
  return products.find(p => p.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter(p => p.category === category)
}

import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  ArticleCard,
  FeatureCard,
} from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'ghost', 'interactive'],
    },
    padding: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// =============================================================================
// BASE CARD
// =============================================================================

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This is the main content area of the card.
        </p>
      </CardContent>
      <CardFooter>
        <Button size="sm">Learn More</Button>
      </CardFooter>
    </Card>
  ),
};

export const Elevated: Story = {
  render: () => (
    <Card variant="elevated" className="w-80">
      <CardHeader>
        <CardTitle>Elevated Card</CardTitle>
        <CardDescription>With shadow for depth.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This card has additional shadow for visual hierarchy.
        </p>
      </CardContent>
    </Card>
  ),
};

export const Interactive: Story = {
  render: () => (
    <Card variant="interactive" className="w-80">
      <CardHeader>
        <CardTitle>Interactive Card</CardTitle>
        <CardDescription>Hover to see the effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-zinc-400">
          This card responds to hover interactions.
        </p>
      </CardContent>
    </Card>
  ),
};

// =============================================================================
// ARTICLE CARD
// =============================================================================

export const Article: Story = {
  render: () => (
    <ArticleCard
      href="#"
      title="10 ChatGPT Prompts to Supercharge Your Job Search"
      description="Discover the exact prompts that helped hundreds of job seekers land interviews at top companies."
      category="AI Tips"
      readingTime="5 min read"
      date="Feb 4, 2026"
      className="w-80"
    />
  ),
};

export const ArticleWithImage: Story = {
  render: () => (
    <ArticleCard
      href="#"
      title="How AI is Changing the Way We Apply for Jobs"
      description="From resume optimization to interview prep, AI tools are revolutionizing job hunting."
      category="Guide"
      readingTime="8 min read"
      date="Feb 3, 2026"
      image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=225&fit=crop"
      className="w-80"
    />
  ),
};

export const ArticleGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ArticleCard
        href="#"
        title="Resume Optimization with AI"
        description="Learn how to use AI to tailor your resume for any job posting."
        category="Resume"
        readingTime="6 min"
      />
      <ArticleCard
        href="#"
        title="AI Interview Preparation"
        description="Practice with AI-powered mock interviews and get instant feedback."
        category="Interview"
        readingTime="8 min"
      />
      <ArticleCard
        href="#"
        title="Cover Letter Templates"
        description="Generate personalized cover letters in seconds with ChatGPT."
        category="Templates"
        readingTime="4 min"
      />
    </div>
  ),
};

// =============================================================================
// FEATURE CARD
// =============================================================================

const SparklesIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export const Feature: Story = {
  render: () => (
    <FeatureCard
      icon={<SparklesIcon />}
      title="AI-Powered Resume Analysis"
      description="Get instant feedback on your resume with AI that understands what recruiters look for."
      className="w-80"
    />
  ),
};

export const FeatureGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-3">
      <FeatureCard
        icon={<SparklesIcon />}
        title="Smart Job Matching"
        description="AI analyzes your skills and preferences to find the perfect job opportunities."
      />
      <FeatureCard
        icon={<RocketIcon />}
        title="Instant Applications"
        description="Apply to multiple jobs with one click using your optimized resume and cover letter."
      />
      <FeatureCard
        icon={<ChartIcon />}
        title="Track Your Progress"
        description="Monitor your applications and see analytics on your job search performance."
      />
    </div>
  ),
};

// =============================================================================
// COMPLEX EXAMPLES
// =============================================================================

export const JobListingCard: Story = {
  render: () => (
    <Card variant="interactive" className="w-96">
      <CardContent>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-zinc-100">Senior Software Engineer</h3>
            <p className="text-sm text-zinc-400">Acme Corp • San Francisco, CA</p>
          </div>
          <Badge variant="primary">New</Badge>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" size="sm">Python</Badge>
          <Badge variant="secondary" size="sm">React</Badge>
          <Badge variant="secondary" size="sm">AWS</Badge>
        </div>
        <div className="mt-4 flex items-center justify-between text-sm">
          <span className="text-zinc-500">$180k - $250k</span>
          <span className="text-zinc-500">Posted 2 days ago</span>
        </div>
      </CardContent>
    </Card>
  ),
};

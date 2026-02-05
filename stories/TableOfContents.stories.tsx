import type { Meta, StoryObj } from '@storybook/react'
import TableOfContents from '../components/TableOfContents'

const meta: Meta<typeof TableOfContents> = {
  title: 'Components/TableOfContents',
  component: TableOfContents,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    collapsible: {
      control: 'boolean',
    },
    defaultCollapsed: {
      control: 'boolean',
    },
    highlightActive: {
      control: 'boolean',
    },
    title: {
      control: 'text',
    },
  },
}

export default meta
type Story = StoryObj<typeof TableOfContents>

const sampleItems = [
  { id: 'intro', text: 'Introduction', level: 2 },
  { id: 'why-use-chatgpt', text: 'Why Use ChatGPT?', level: 2 },
  { id: 'getting-started', text: 'Getting Started', level: 2 },
  { id: 'setting-up', text: 'Setting Up Your Prompt', level: 3 },
  { id: 'best-practices', text: 'Best Practices', level: 3 },
  { id: 'examples', text: 'Real Examples', level: 2 },
  { id: 'cover-letter', text: 'Cover Letter Example', level: 3 },
  { id: 'resume-example', text: 'Resume Example', level: 3 },
  { id: 'linkedin-example', text: 'LinkedIn Example', level: 3 },
  { id: 'advanced', text: 'Advanced Techniques', level: 2 },
  { id: 'conclusion', text: 'Conclusion', level: 2 },
]

// Default with sample items
export const Default: Story = {
  args: {
    items: sampleItems,
    title: 'On this page',
  },
}

// Short TOC
export const ShortToc: Story = {
  args: {
    items: [
      { id: 'intro', text: 'Introduction', level: 2 },
      { id: 'how-it-works', text: 'How It Works', level: 2 },
      { id: 'conclusion', text: 'Conclusion', level: 2 },
    ],
  },
}

// Flat structure (no nesting)
export const FlatStructure: Story = {
  args: {
    items: [
      { id: 'step-1', text: 'Step 1: Create Account', level: 2 },
      { id: 'step-2', text: 'Step 2: Enter Job Details', level: 2 },
      { id: 'step-3', text: 'Step 3: Generate Content', level: 2 },
      { id: 'step-4', text: 'Step 4: Review and Edit', level: 2 },
      { id: 'step-5', text: 'Step 5: Submit Application', level: 2 },
    ],
  },
}

// Deep nesting
export const DeepNesting: Story = {
  args: {
    items: [
      { id: 'main-topic', text: 'Main Topic', level: 2 },
      { id: 'subtopic-1', text: 'Subtopic 1', level: 3 },
      { id: 'detail-1-1', text: 'Detail 1.1', level: 4 },
      { id: 'detail-1-2', text: 'Detail 1.2', level: 4 },
      { id: 'subtopic-2', text: 'Subtopic 2', level: 3 },
      { id: 'another-topic', text: 'Another Topic', level: 2 },
    ],
    headingLevels: ['h2', 'h3', 'h4'],
  },
}

// With custom title
export const CustomTitle: Story = {
  args: {
    items: sampleItems,
    title: 'Quick Navigation',
  },
}

// Not collapsible
export const NotCollapsible: Story = {
  args: {
    items: sampleItems,
    collapsible: false,
  },
}

// Expanded by default
export const ExpandedByDefault: Story = {
  args: {
    items: sampleItems,
    defaultCollapsed: false,
  },
}

// Without active highlight
export const NoActiveHighlight: Story = {
  args: {
    items: sampleItems,
    highlightActive: false,
  },
}

// Long text items (truncated)
export const LongTextItems: Story = {
  args: {
    items: [
      { id: 'intro', text: 'Introduction to Using ChatGPT for Job Applications', level: 2 },
      { id: 'why', text: 'Why You Should Use AI Tools in Your Job Search Strategy', level: 2 },
      { id: 'how', text: 'Step-by-Step Guide: How to Write the Perfect Cover Letter', level: 2 },
      { id: 'tips', text: 'Pro Tips from Hiring Managers Who Review 1000s of Applications', level: 2 },
    ],
  },
}

// Guide page context
export const GuidePageExample: Story = {
  args: {
    items: [
      { id: 'why-chatgpt', text: 'Why Use ChatGPT for Cover Letters?', level: 2 },
      { id: 'step-1', text: 'Step 1: Gather Information', level: 2 },
      { id: 'job-description', text: 'Analyze the Job Description', level: 3 },
      { id: 'your-experience', text: 'List Your Relevant Experience', level: 3 },
      { id: 'step-2', text: 'Step 2: Craft Your Prompt', level: 2 },
      { id: 'prompt-structure', text: 'Prompt Structure', level: 3 },
      { id: 'prompt-examples', text: 'Example Prompts', level: 3 },
      { id: 'step-3', text: 'Step 3: Review & Personalize', level: 2 },
      { id: 'common-mistakes', text: 'Common Mistakes to Avoid', level: 2 },
      { id: 'final-tips', text: 'Final Tips', level: 2 },
    ],
    title: 'In this guide',
  },
}

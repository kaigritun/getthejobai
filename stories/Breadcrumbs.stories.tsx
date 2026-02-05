import type { Meta, StoryObj } from '@storybook/react'
import Breadcrumbs from '../components/Breadcrumbs'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    separator: {
      control: 'select',
      options: ['chevron', 'slash', 'arrow'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showHome: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

// Default guide page breadcrumb
export const Default: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'ChatGPT Cover Letter' },
    ],
  },
}

// With multiple levels
export const DeepNavigation: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Resume', href: '/guides/resume' },
      { label: 'Software Engineer Resume' },
    ],
  },
}

// Different separators
export const SlashSeparator: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Interview Tips' },
    ],
    separator: 'slash',
  },
}

export const ArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Interview Tips' },
    ],
    separator: 'arrow',
  },
}

// Different sizes
export const Small: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'ChatGPT Cover Letter' },
    ],
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'ChatGPT Cover Letter' },
    ],
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'ChatGPT Cover Letter' },
    ],
    size: 'lg',
  },
}

// Without home icon
export const NoHomeIcon: Story = {
  args: {
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'ChatGPT Cover Letter' },
    ],
    showHome: false,
  },
}

// Long breadcrumb text (truncated)
export const LongText: Story = {
  args: {
    items: [
      { label: 'Career Development Guides', href: '/guides' },
      { label: 'How to Write a Professional Cover Letter with ChatGPT and AI Tools in 2026' },
    ],
  },
}

// Tools section
export const ToolsSection: Story = {
  args: {
    items: [
      { label: 'Tools', href: '/tools' },
      { label: 'Resume Builder' },
    ],
  },
}

// Blog post
export const BlogPost: Story = {
  args: {
    items: [
      { label: 'Blog', href: '/blog' },
      { label: 'AI Job Search Trends 2026' },
    ],
  },
}

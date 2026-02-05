import type { Meta, StoryObj } from '@storybook/react'
import ShareButtons, { ShareButtonsInline, ShareButtonsFloating } from '../components/ShareButtons'

const meta: Meta<typeof ShareButtons> = {
  title: 'Components/ShareButtons',
  component: ShareButtons,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'dark' },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    showLabels: {
      control: 'boolean',
    },
    platforms: {
      control: 'check',
      options: ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
    },
  },
}

export default meta
type Story = StoryObj<typeof ShareButtons>

// Default
export const Default: Story = {
  args: {
    title: 'How to Write a Cover Letter with ChatGPT',
    description: 'Learn to write compelling cover letters in minutes using AI.',
    url: 'https://getthejobai.com/guides/chatgpt-cover-letter',
  },
}

// Horizontal layout (default)
export const Horizontal: Story = {
  args: {
    title: 'AI Resume Guide',
    direction: 'horizontal',
  },
}

// Vertical layout
export const Vertical: Story = {
  args: {
    title: 'AI Resume Guide',
    direction: 'vertical',
  },
}

// With labels
export const WithLabels: Story = {
  args: {
    title: 'ChatGPT Job Search Tips',
    showLabels: true,
  },
}

// Small size
export const Small: Story = {
  args: {
    title: 'Quick Share',
    size: 'sm',
  },
}

// Large size
export const Large: Story = {
  args: {
    title: 'Big Share Buttons',
    size: 'lg',
  },
}

// Limited platforms
export const LimitedPlatforms: Story = {
  args: {
    title: 'LinkedIn and Copy only',
    platforms: ['linkedin', 'copy'],
  },
}

// Twitter and LinkedIn only
export const SocialOnly: Story = {
  args: {
    title: 'Social Media Only',
    platforms: ['twitter', 'linkedin', 'facebook'],
  },
}

// Just copy button
export const CopyOnly: Story = {
  args: {
    title: 'Copy Link Example',
    platforms: ['copy'],
    showLabels: true,
  },
}

// Inline variant with label
export const Inline: StoryObj<typeof ShareButtonsInline> = {
  render: (args) => <ShareButtonsInline {...args} />,
  args: {
    title: 'How to Use AI for Job Applications',
    label: 'Share this guide',
  },
}

// Inline with custom label
export const InlineCustomLabel: StoryObj<typeof ShareButtonsInline> = {
  render: (args) => <ShareButtonsInline {...args} />,
  args: {
    title: 'Resume Tips 2026',
    label: 'Found this helpful? Share it!',
  },
}

// Vertical with labels
export const VerticalWithLabels: Story = {
  args: {
    title: 'Full Featured Share',
    direction: 'vertical',
    showLabels: true,
    size: 'md',
  },
}

// All platforms small
export const CompactAll: Story = {
  args: {
    title: 'Compact Share Bar',
    size: 'sm',
    platforms: ['twitter', 'linkedin', 'facebook', 'email', 'copy'],
  },
}

// Guide page example
export const GuidePageContext: Story = {
  args: {
    title: 'How to Write a Cover Letter with ChatGPT (2026 Guide)',
    description: 'Use ChatGPT to write compelling cover letters in minutes. Copy-paste prompts, step-by-step process, and real examples.',
    url: 'https://getthejobai.com/guides/chatgpt-cover-letter',
    platforms: ['twitter', 'linkedin', 'copy'],
  },
}

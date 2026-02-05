import type { Meta, StoryObj } from '@storybook/react';
import RelatedGuides from '../components/RelatedGuides';

const meta: Meta<typeof RelatedGuides> = {
  title: 'Components/RelatedGuides',
  component: RelatedGuides,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleGuides = [
  {
    slug: 'chatgpt-resume-prompts',
    title: 'ChatGPT Resume Prompts',
    description: '50+ prompts to improve your resume with AI assistance.',
  },
  {
    slug: 'ai-cover-letter-generator',
    title: 'AI Cover Letter Generator',
    description: 'Create personalized cover letters in seconds.',
  },
  {
    slug: 'ai-interview-prep',
    title: 'AI Interview Prep',
    description: 'Prepare for interviews with AI-powered practice sessions.',
  },
];

export const Default: Story = {
  args: {
    guides: sampleGuides,
  },
};

export const TwoGuides: Story = {
  args: {
    guides: sampleGuides.slice(0, 2),
  },
};

export const SingleGuide: Story = {
  args: {
    guides: [sampleGuides[0]],
  },
};

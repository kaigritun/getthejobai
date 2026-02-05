import type { Meta, StoryObj } from '@storybook/react';
import EmailSignup from '../components/EmailSignup';

const meta: Meta<typeof EmailSignup> = {
  title: 'Components/EmailSignup',
  component: EmailSignup,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    accentColor: {
      control: 'select',
      options: ['emerald', 'violet', 'blue'],
    },
    compact: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'Get weekly tips',
    description: 'Free weekly tips delivered to your inbox.',
    buttonText: 'Subscribe',
    accentColor: 'emerald',
    compact: false,
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    compact: true,
  },
};

export const VioletTheme: Story = {
  args: {
    ...Default.args,
    headline: 'Join AI hustlers',
    description: 'Weekly tips on making money with AI.',
    accentColor: 'violet',
  },
};

export const BlueTheme: Story = {
  args: {
    ...Default.args,
    headline: 'Learn MCP',
    description: 'Tutorials and guides for MCP development.',
    accentColor: 'blue',
  },
};

export const CompactViolet: Story = {
  args: {
    ...VioletTheme.args,
    compact: true,
  },
};

export const CustomCopy: Story = {
  args: {
    headline: 'Never miss an opportunity',
    description: 'Get AI-powered job search tips every Friday.',
    buttonText: 'Get Free Tips',
    accentColor: 'emerald',
    compact: false,
  },
};

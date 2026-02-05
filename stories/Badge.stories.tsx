import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'error', 'info', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    dot: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

// =============================================================================
// VARIANTS
// =============================================================================

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'New',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Featured',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Completed',
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    children: 'Pending',
    variant: 'warning',
  },
};

export const Error: Story = {
  args: {
    children: 'Failed',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    children: 'Beta',
    variant: 'info',
  },
};

export const Outline: Story = {
  args: {
    children: 'Draft',
    variant: 'outline',
  },
};

// =============================================================================
// SIZES
// =============================================================================

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'primary',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
    variant: 'primary',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: 'primary',
  },
};

// =============================================================================
// WITH DOT
// =============================================================================

export const WithDot: Story = {
  args: {
    children: 'Active',
    dot: true,
    variant: 'success',
  },
};

export const StatusDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge variant="success" dot>Online</Badge>
      <Badge variant="warning" dot>Away</Badge>
      <Badge variant="error" dot>Offline</Badge>
      <Badge variant="primary" dot>New</Badge>
    </div>
  ),
};

// =============================================================================
// USE CASES
// =============================================================================

export const JobCategories: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary">AI/ML</Badge>
      <Badge variant="default">Remote</Badge>
      <Badge variant="secondary">Full-time</Badge>
      <Badge variant="info">New</Badge>
    </div>
  ),
};

export const ApplicationStatus: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-24">Applied:</span>
        <Badge variant="info" dot>In Review</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-24">Interview:</span>
        <Badge variant="warning" dot>Scheduled</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400 w-24">Offer:</span>
        <Badge variant="success" dot>Accepted</Badge>
      </div>
    </div>
  ),
};

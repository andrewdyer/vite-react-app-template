import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Counter from './Counter';

const meta = {
  title: 'Demo/Components/Counter',
  component: Counter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onIncrement: fn(), onDecrement: fn() },
} satisfies Meta<typeof Counter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    count: 0,
  },
};

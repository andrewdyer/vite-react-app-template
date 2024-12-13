import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import HomePage from './HomePage';

const meta = {
  title: 'Demo/Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithUserInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const someButton = canvas.getByRole('button', { name: /Some Action/i });
    await expect(someButton).toBeInTheDocument();
    await userEvent.click(someButton);
    await expect(someButton).not.toBeInTheDocument();

    const anotherElement = canvas.getByRole('button', {
      name: /Another Action/i,
    });
    await expect(anotherElement).toBeInTheDocument();
  },
};

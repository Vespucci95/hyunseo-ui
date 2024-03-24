import type { Meta, StoryObj } from '@storybook/react';
import { default as Flex } from './Flex';

const meta = {
  title: 'Components/Flex',
  component: Flex,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { gap: '10px' },
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Flex',
  },
};

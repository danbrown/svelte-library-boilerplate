import type { Meta, StoryObj } from "@storybook/svelte";

import Card from "../components/Card.svelte";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/svelte/writing-stories/introduction
const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    slot: { control: "text" },
  },
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/svelte/writing-stories/args
export const Primary: Story = {
  args: {},
};

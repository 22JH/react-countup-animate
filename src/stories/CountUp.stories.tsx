import CountUpComponent from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CountUpComponent> = {
  title: "CountUp",
  component: CountUpComponent,
  argTypes: {
    number: { control: "number" },
    startDelay: { control: "number" },
    endDelay: { control: "number" },
    reverse: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof CountUpComponent>;

export const a: Story = {
  args: {
    number: 1234,
  },
};

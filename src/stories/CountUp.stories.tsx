import CountUpComponent from "..";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CountUpComponent> = {
  title: "CountUp",
  component: CountUpComponent,
  argTypes: {
    number: { control: "number" },
    startDelay: {},
    endDelay: {},
    easeStartDuration: { control: "number" },
    easeEndDuration: { control: "number" },
    reverse: { control: "boolean" },
  },
};
export default meta;

type Story = StoryObj<typeof CountUpComponent>;

export const TypeA: Story = {
  args: {
    number: "1,000,000,000,000",
    startDelay: "ease-out",
    endDelay: "ease-out",
  },
};

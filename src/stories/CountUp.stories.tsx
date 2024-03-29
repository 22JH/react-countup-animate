import CountUpComponent from "..";
import React from "react";

export default {
  title: "CountUp",
  component: CountUpComponent,
  argTypes: {
    number: { control: "number" }, // 'number' 타입의 컨트롤을 추가합니다.
    startDelay: { control: "number" }, // 'number' 타입의 컨트롤을 추가합니다.
    endDelay: { control: "number" }, // 'number' 타입의 컨트롤을 추가합니다.
    reverse: { control: "boolean" }, // 'number' 타입의 컨트롤을 추가합니다.
  },
};

const Template = (args) => <CountUpComponent {...args} />;

export const CountUpComp = Template.bind({});
CountUpComp.args = {
  number: 1234, // 기본값 설정
};

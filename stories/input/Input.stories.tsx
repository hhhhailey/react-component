import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input } from "../../components";

export default {
  title: "FormInputs/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "레이블",
  disabled: true,
  w: 150,
};

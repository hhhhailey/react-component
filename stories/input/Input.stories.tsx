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

const PasswordTemplate: ComponentStory<typeof Input.Password> = (args) => {
  return <Input.Password {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "레이블",
  disabled: false,
  w: 150,
};

export const Password = PasswordTemplate.bind({});
Password.args = {
  label: "비밀번호",
};

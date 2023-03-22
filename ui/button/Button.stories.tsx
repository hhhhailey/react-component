import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import Button from "./Button";
import ButtonIcon from "./widget/Icon/Icon";

export default {
  title: "Form/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);
const ButtonIconTemplate: ComponentStory<typeof ButtonIcon> = (args) => {
  return <ButtonIcon {...args}>{args.children}</ButtonIcon>;
};

export const Default = ButtonTemplate.bind({});
export const ButtonIconDefault = ButtonIconTemplate.bind({});
Default.args = {};

ButtonIconDefault.args = {
  icon: { registered: "back", alt: "뒤로가기" },
};

import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "../../ui";

export default {
  title: "FormInputs/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [isChecked, hasIsChecked] = React.useState(false);
  return (
    <Checkbox
      {...args}
      checked={isChecked}
      onChange={() => hasIsChecked((prev) => !prev)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "circle",
  disabled: true,
};

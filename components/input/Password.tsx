import React from "react";
import Input, { InputProps } from "./Input";

export interface PasswordProps extends InputProps {
  iconRender?: (visible: boolean) => React.ReactNode;
}

const Password = ({ ...props }: PasswordProps) => {
  return <Input {...props} />;
};

export default Password;

import type * as React from "react";
import InternalInput from "./Input";
import type { InputProps } from "./Input";
import Password from "./Password";

export type { PasswordProps } from "./Password";

type CompoundedComponent = React.ForwardRefExoticComponent<InputProps> & {
  Password: typeof Password;
};

const Input = InternalInput as CompoundedComponent;

Input.Password = Password;

export default Input;

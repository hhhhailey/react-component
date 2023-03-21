import React from "react";
import styled from "styled-components";
import Icon from "./widget/Icon/Icon";

/**
 * Button
 * Button.Icon
 * Button.Link
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  w?: number | string;
  h?: number | string;
  size?: ButtonSizeUnion;
  block?: boolean;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledWrap {...props}>{children}</StyledWrap>;
}

Button.Icon = Icon;

export default Button;
const StyledWrap = styled.button<{
  w?: number | string;
  h?: number | string;
  block?: boolean;
}>`
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};

  ${(p) => p.block && "width: 100% !important"};

  background-color: var(--brand-color-300);
`;

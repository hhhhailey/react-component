import React from "react";
import styled, { css } from "styled-components";
import Icon from "./widget/Icon/Icon";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "variant"> {
  w?: number | string;
  h?: number | string;
  block?: boolean;

  size?: ButtonSizeUnion;
  variant?: ButtonVariantUnion;
}

function Button({ ...props }: ButtonProps) {
  const { children, ...rest }: ButtonProps = {
    variant: "primary",
    block: true,
    ...props,
  };
  return <StyledWrap {...rest}>{children}</StyledWrap>;
}

Button.Icon = Icon;
export default Button;

const PrimaryCSS = css`
  background: ${(p) => p.theme.brand["300"]};
  color: #fff;
  height: 50px;
`;

const StyledWrap = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};
  border-radius: 4px;
  ${(p) => p.block && "width: 100% !important"};
  ${(p) => p.variant === "primary" && PrimaryCSS};
`;

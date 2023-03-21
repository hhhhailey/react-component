import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import { inputMessageIconMapping } from "./constans";
import Group from "./Group";
import Card from "./Card";
import Password from "./Password";
import useInput from "./useInput";

export type InputVariantUnion = "primary" | "secondary";
export type InputMessageTypeUnion = "info" | "pass" | "error" | null;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  ref?: any;
  block?: boolean;
  view?: boolean;
  w?: string | number;
  h?: string | number;

  label?: React.ReactNode;
  variant?: InputVariantUnion;
  prefix?: any;
  suffix?: any;
  value?: string;

  // 메세지 상태
  msg?: {
    type: InputMessageTypeUnion;
    title: string;
    desc?: React.ReactNode;
  };
}

const Input = ({ ...props }: InputProps) => {
  const { messageText, messageType } = useInput(props);
  const Icon = inputMessageIconMapping[props.msg?.type!];

  return (
    <StyledWrap
      ref={props.ref}
      view={props.view}
      block={props.block}
      w={props.w}
      h={props.h}
    >
      {props.label && (
        <StyledLabel required={props.required}>{props.label}</StyledLabel>
      )}
      <StyledInputContainer variant={props.variant}>
        <StyledInput {...props} />
      </StyledInputContainer>
      <StyledMessage type={messageType}>
        {props.msg && inputMessageIconMapping[props.msg?.type!] && <Icon />}
        {messageText}
      </StyledMessage>
      {props.msg?.desc}
    </StyledWrap>
  );
};

Input.Group = Group;
Input.Card = Card;
Input.Password = Password;

export default Input;
Input.defaultProps = {
  variant: "primary",
  view: true,
  block: false,
  w: "100%",
};

const StyledWrap = styled.div<{
  view?: boolean;
  block?: boolean;
  w?: number | string;
  h?: number | string;
}>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};

  ${(p) => p.block && "width: 100% !important"};
  ${(p) => (p.view ? "display: flex" : "display: none")};
`;

const StyledLabel = styled.label<{ required?: boolean }>`
  font-size: 12px;
  font-weight: 800;
  color: #888;

  ${(p) =>
    p.required &&
    css`
      &::before {
        content: " *";
      }
    `}
`;

// Input Fake Style Container
const StyledInputContainer = styled.div<{ variant?: InputVariantUnion }>`
  height: 32px;
  border-bottom-width: 2px;
  border-bottom-style: solid;

  &:focus-within {
    border-color: #3f1294;
  }

  ${(p) => variantInputStyles(p.variant)};
`;

// Input
const StyledInput = styled.input`
  width: 100% !important;
  height: 100% !important;
  background-color: transparent !important;
  border: none !important;
  font-size: 14px;
  outline: none !important;
  color: #222;

  &[type="password"]:focus {
    outline: 0;
    background-color: transparent !important;
  }
`;

const StyledMessage = styled.div<{ type?: InputMessageTypeUnion }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;

  ${(p) =>
    p.type === "error" &&
    css`
      color: red;
    `}

  ${(p) =>
    p.type === "info" &&
    css`
      color: #979797;
    `}
`;

/* Function */
const variantInputStyles = (variant = "primary") =>
  ({
    primary: css`
      border-color: #888;
    `,
    secondary: css``,
  }[variant]);

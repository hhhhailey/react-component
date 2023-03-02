import React, { forwardRef } from "react";
import styled, { css } from "styled-components";
import Password from "./Password";
import useInput from "./useInput";

export type InputVariantUnion = "primary" | "secondary";
export type InputMessageTypeUnion = "info" | "pass" | "error" | null;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  block?: boolean;
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
  return (
    <StyledWrap block={props.block} w={props.w} h={props.h}>
      {props.label && (
        <StyledLabel required={props.required}>{props.label}</StyledLabel>
      )}
      <StyledInputContainer variant={props.variant}>
        <StyledInput {...props} />
      </StyledInputContainer>
      <StyledMessage type={messageType}>{messageText}</StyledMessage>
      <div>{props.msg?.desc}</div>
    </StyledWrap>
  );
};

Input.displayName = "Input";
Input.Password = Password;

export default Input;
Input.defaultProps = {
  variant: "primary",
  block: false,
  w: "100%",
};

const StyledWrap = styled.div<{
  block?: boolean;
  w?: number | string;
  h?: number | string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};
  ${(p) => p.block && "width: 100% !important"};
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
`;

const StyledMessage = styled.div<{ type?: InputMessageTypeUnion }>`
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

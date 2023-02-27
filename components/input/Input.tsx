import React from "react";
import styled, { css } from "styled-components";

export type InputVariantUnion = "primary" | "secondary";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  prefix?: any;
  variant?: InputVariantUnion;
  // 메세지 상태
  info?: string;
  pass?: string;
  error?: string;
}
const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <StyledWrap>
      {props.label && (
        <StyledLabel required={props.required}>{props.label}</StyledLabel>
      )}
      <StyledInputContainer variant={props.variant}>
        <StyledInput {...props} />
      </StyledInputContainer>
    </StyledWrap>
  );
};

export default Input;

Input.defaultProps = {
  variant: "primary",
};

const StyledWrap = styled.div``;
const StyledLabel = styled.label<{ required?: boolean }>`
  font-size: 12px;
  color: #888;

  ${(p) =>
    p.required &&
    css`
      &::before {
        content: " *";
      }
    `}
`;
const StyledInputContainer = styled.div<{ variant?: InputVariantUnion }>`
  ${(p) => printedInputStyle(p.variant)};
`;
const StyledInput = styled.input`
  width: 100% !important;
  height: 100% !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
`;

/* Function */

const printedInputStyle = (variant = "primary") =>
  ({
    primary: css`
      border-bottom: 1px solid #888;
    `,
    secondary: css``,
  }[variant]);

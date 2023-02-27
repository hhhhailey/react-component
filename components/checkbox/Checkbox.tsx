import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import CheckArrowSvg from "../../assets/icons/arrow-check.svg";

export type CheckboxVariantUnion = "circle" | "single";
interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: CheckboxVariantUnion;
}

export const Checkbox: React.FC<CheckboxProps> = ({ variant, ...props }) => {
  return (
    <StyledCheckbox checked={props.checked} variant={variant}>
      <input {...props} type="checkbox" hidden />
      <CheckArrowSvg />
    </StyledCheckbox>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  variant: "circle",
};

const CIRCLE_STYLE = css<{ checked?: boolean }>`
  background-color: ${(p) => (p.checked ? "#3f1294" : "#CBCEDC")};
  svg {
    path {
      fill: #fff;
    }
  }
`;

const SINGLE_STYLE = css<{ checked?: boolean }>`
  background-color: transparent;
  svg {
    path {
      fill: ${(p) => (p.checked ? "#3f1294" : "#CBCEDC")};
    }
  }
`;

const StyledCheckbox = styled.label<{
  checked?: boolean;
  variant?: CheckboxVariantUnion;
}>`
  ${(p) => p.variant === "circle" && CIRCLE_STYLE};
  ${(p) => p.variant === "single" && SINGLE_STYLE};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  cursor: pointer;

  &:disabled {
    background-color: #cbcedc;
    opacity: 0.5;
  }
`;

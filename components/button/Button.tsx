import React from "react";
import styled from "styled-components";

/**
 * Button
 * Button.Icon
 * Button.Link
 *
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <StyledButtonContainer>
      <StyledButton>{children}</StyledButton>
    </StyledButtonContainer>
  );
};

export default Button;
const StyledButtonContainer = styled.div``;
const StyledButton = styled.button``;

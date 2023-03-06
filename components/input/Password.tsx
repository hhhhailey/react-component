import React from "react";
import styled from "styled-components";
import Input, { InputProps } from "./Input";
import VisibleIcon from "../../assets/icons/eye-outlined.svg";
import useInput from "./useInput";
export interface PasswordProps extends InputProps {
  iconRender?: (visible: boolean) => React.ReactNode;
  visiblePassword?: boolean;
}

const Password = ({ ...props }: PasswordProps) => {
  const { visibleInput, togglePasswordView } = useInput(props);
  return <div>Password</div>;
  return (
    <StyledWrap>
      <Input type={visibleInput ? "text" : "password"} {...props} />
      <VisibleIcon className="icon-visible" onClick={togglePasswordView} />
    </StyledWrap>
  );
};

export default Password;

const StyledWrap = styled.div`
  position: relative;

  .icon-visible {
    position: absolute;
    top: 25px;
    right: 0;
    cursor: pointer;
    user-select: none;
  }
`;

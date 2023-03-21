import React from "react";
import styled from "styled-components";
import { Input } from "@/ui";

const Form: React.FC<any> = ({ children }) => {
  return (
    <StyledWrap>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        return children;
      })}
    </StyledWrap>
  );
};

export default Form;

const StyledWrap = styled.div``;

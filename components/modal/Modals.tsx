import React from "react";
import styled from "styled-components";
import { ModalsDispatchContext, ModalsOpenedContext } from "./context";

export default function Modals() {
  const openedModals = React.useContext(ModalsOpenedContext);
  const { close } = React.useContext(ModalsDispatchContext);

  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const onClose = () => {
          close(Component);
        };

        return (
          <StyledWrap key={index}>
            <StyledOverlay onClick={onClose} />

            <StyledModal w={props.w} h={props.h}>
              <Component {...props} onClose={onClose} />
            </StyledModal>
          </StyledWrap>
        );
      })}
    </>
  );
}

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;
const StyledModal = styled.div<{ w?: string | number; h?: string | number }>`
  width: 90%;
  height: 340px;
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};
  background: white;
  border-radius: 16px;
  padding: 24px;
`;

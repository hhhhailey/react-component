import React, { ComponentProps, FunctionComponent } from "react";
import loadable from "@loadable/component";
import styled, { css, keyframes } from "styled-components";
import { ModalVariantUnion } from "../@types/modal";
import { ModalsDispatchContext, ModalsOpenedContext } from "./context";

export default function Modals() {
  const openedModals = React.useContext(ModalsOpenedContext);
  const { close } = React.useContext(ModalsDispatchContext);
  const [unmount, setUnmount] = React.useState(false);

  return (
    <>
      {openedModals.map((modal, index) => {
        const { Component, props } = modal;
        const { onSubmit, variant = "modal", ...rest } = props;

        const closeModal = () => {
          setUnmount(true);
          setTimeout(() => {
            setUnmount(false);
            close(Component);
          }, 300);
        };

        const handleSubmit = async () => {
          if (typeof onSubmit === "function") {
            await onSubmit();
          }
          closeModal();
        };

        return (
          <StyledWrap key={index}>
            <StyledOverlay onClick={closeModal} unmount={unmount} />
            <StyledModal
              w={props.w}
              h={props.h}
              variant={variant}
              unmount={unmount}
            >
              <StyledScroll>
                <Component
                  {...rest}
                  onClose={closeModal}
                  onSubmit={handleSubmit}
                />
              </StyledScroll>
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
const StyledOverlay = styled.div<{ unmount?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  ${(p) => (p.unmount ? activeFadeIn : activeFadeOut)}
`;
const StyledModal = styled.div<{
  w?: string | number;
  h?: string | number;
  variant?: ModalVariantUnion;
  unmount?: boolean;
}>`
  width: 90%;
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};
  background: white;
  border-radius: 16px;
  padding: 24px;

  ${(p) => variantModalStyles(p.variant)};
  ${(p) => {
    if (p.variant === "sheet")
      return !p.unmount ? activeSheetOpen : activeSheetClose;
  }};
  ${(p) => {
    if (p.variant === "modal")
      return !p.unmount ? activeModalOpen : activeModalClose;
  }};
`;

const StyledScroll = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`;

const StyledFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const variantModalWrapperStyles = (variant = "modal") =>
  ({
    sheet: css``,
  }[variant]);

const variantModalStyles = (variant = "modal") =>
  ({
    modal: css``,
    sheet: css`
      position: absolute;
      bottom: 0%;
      width: 100%;
      height: auto;

      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    `,
  }[variant]);
const AnimUp = keyframes`
  0% { transform: translateY(100%) } 100% { transform:translateY(0px) }
`;
const AnimDown = keyframes`
  0%{ transform:translateY(0px) } 100%{ transform: translateY(100%) }
`;
const AnimFadeIn = keyframes`
  0% { opacity:1 } 100% { opacity:0 }
`;
const AnimFadeOut = keyframes`
  0% { opacity:0 } 100% { opacity:1 }
`;
const ModalUp = keyframes`
 0% {
  visibility: hidden;
        opacity: 0;
    transform:translateY(100%);
  }
  90% {
       visibility: visible;
    transform: translateY(10%);
  }
  100% {
    transform:translateY(0);
  }
`;
const ModalDown = keyframes`
 0% {
            opacity: 1;
    transform:translateY(0);
  }
  100% {
    visibility: hidden;
        opacity: 0;
    transform:translateY(100%);
  }
`;

const activeSheetOpen = css`
  animation: ${AnimUp} 0.25s forwards ease-out;
`;
const activeSheetClose = css`
  animation: ${AnimDown} 0.15s forwards ease-out;
`;
const activeModalOpen = css`
  animation: ${ModalUp} 0.25s forwards ease-out;
`;
const activeModalClose = css`
  animation: ${ModalDown} 0.15s forwards ease-out;
`;
const activeFadeIn = css`
  animation: ${AnimFadeIn} 0.15s forwards ease-out;
`;
const activeFadeOut = css`
  animation: ${AnimFadeOut} 0.15s forwards ease-out;
`;

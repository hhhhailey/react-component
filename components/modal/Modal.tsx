import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useModal } from "./useModal";
import CloseIcon from "../../assets/icons/close.svg";

export interface ModalProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;

  open?: boolean;
  onDismiss?: VoidFunction;
  closeable?: boolean;

  h?: string | number;
}

export interface ModalContextProps {
  closeModal: VoidFunction;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

const Modal: React.FC<ModalProps> = ({ children, ...props }) => {
  const headerRef = React.useRef<any>(null);
  const footerRef = React.useRef<any>(null);
  const {
    unmount,
    toggleOverlay,
    closeModal,
    footerHeight,
    headerHeight,
    size,
  } = useModal({
    ...props,
    headerRef,
    footerRef,
  });

  return (
    <ModalContext.Provider value={{ closeModal }}>
      {props.open && (
        <StyledWrap>
          <StyledOverlay onClick={toggleOverlay} unmount={unmount} />
          <StyledModalContainer h={props.h}>
            <StyledModal unmount={unmount}>
              {props.header && (
                <StyledHeader ref={headerRef}>{props.header}</StyledHeader>
              )}
              {props.closeable && (
                <CloseIcon onClick={closeModal} className="icon-close" />
              )}
              <StyledScroll
                maxHeight={size.height!}
                headerHeight={headerHeight}
                footerHeight={footerHeight}
              >
                <StyledContent>{children}</StyledContent>
              </StyledScroll>
              {props.footer && (
                <StyledFooter ref={footerRef}> {props.footer}</StyledFooter>
              )}
            </StyledModal>
          </StyledModalContainer>
        </StyledWrap>
      )}
    </ModalContext.Provider>
  );
};

export default Modal;

Modal.defaultProps = {
  open: false,
  closeable: true,
};

const StyledWrap = styled.div`
  .icon-close {
    position: absolute;
    top: 24px;
    right: 24px;
  }
`;

const StyledOverlay = styled.div<{ unmount?: boolean }>`
  opacity: 1;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(64, 74, 101, 0.6);
  ${(p) => (p.unmount ? activeFadeIn : activeFadeOut)}
`;

const StyledModalContainer = styled.div<{ h?: string | number }>`
  z-index: 150;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};
`;

const StyledModal = styled.div<{ unmount?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: white;

  transform-origin: bottom;
  ${(p) => (p.unmount ? activeClose : activeOpen)}
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  font-size: 20px;
  font-weight: 700;
  padding: 0 16px;
`;

const StyledScroll = styled.div<{
  maxHeight: number;
  headerHeight: number;
  footerHeight: number;
}>`
  padding: 0 16px;
  flex: 1;
  max-height: ${(p) => p.maxHeight - p.headerHeight - p.footerHeight}px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledFooter = styled.div`
  padding: 16px;
`;

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
const activeOpen = css`
  animation: ${AnimUp} 0.25s forwards ease-out;
`;
const activeClose = css`
  animation: ${AnimDown} 0.15s forwards ease-out;
`;
const activeFadeIn = css`
  animation: ${AnimFadeIn} 0.15s forwards ease-out;
`;
const activeFadeOut = css`
  animation: ${AnimFadeOut} 0.15s forwards ease-out;
`;

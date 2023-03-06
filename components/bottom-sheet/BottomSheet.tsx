import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useBottomSheet } from "./useBottomSheet";

export interface BottomSheetProps {
  children: React.ReactNode;
  open?: boolean;
  onDismiss?: VoidFunction;

  w?: string | number;
  h?: string | number;
}

export interface BottomSheetContextProps {
  closeModal: VoidFunction;
}

export const BottomSheetContext =
  React.createContext<BottomSheetContextProps | null>(null);

const BottomSheet: React.FC<BottomSheetProps> = ({ children, ...props }) => {
  const { unmount, toggleOverlay } = useBottomSheet(props);
  return (
    <StyledWrap>
      {props.open && (
        <>
          <StyledOverlay onClick={toggleOverlay} unmount={unmount} />
          <StyledBottomSheetContainer>
            <StyledBottomSheet unmount={unmount}>{children}</StyledBottomSheet>
          </StyledBottomSheetContainer>
        </>
      )}
    </StyledWrap>
  );
};

export default BottomSheet;

BottomSheet.defaultProps = {
  open: false,
};

const StyledWrap = styled.div<{ open?: boolean }>``;

const StyledOverlay = styled.div<{ unmount?: boolean }>`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(64, 74, 101, 0.6);
  opacity: 1;
  ${(p) => (p.unmount ? activeFadeIn : activeFadeOut)}
`;
const StyledBottomSheetContainer = styled.div`
  z-index: 150;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const StyledBottomSheet = styled.div<{ unmount?: boolean }>`
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

import React from "react";
import styled, { css, keyframes } from "styled-components";
import { useModal } from "./useModal";
import CloseIcon from "../../assets/icons/close.svg";
import { debounce } from "lodash";

export interface ModalProps {
  header?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;

  open?: boolean;
  onDismiss?: VoidFunction;
  closeable?: boolean;

  w?: string | number;
  h?: string | number;
}

export interface ModalContextProps {
  closeModal: VoidFunction;
}

export const ModalContext = React.createContext<ModalContextProps | null>(null);

const BottomSheet = ({ children, ...props }: ModalProps) => {
  const [screenSize, setScreenSize] = React.useState(() => ({
    width: typeof window !== "undefined" ? window.innerHeight : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  }));
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(0);

  const rootRef = React.useRef(null);
  const overlayRef = React.useRef(null);
  const containerRef = React.useRef(null);
  const scrollRef = React.useRef(null);
  const headerRef = React.useRef<any>(null);
  const contentRef = React.useRef(null);
  const footerRef = React.useRef<any>(null);

  const handleResize = debounce(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  React.useLayoutEffect(() => {
    if (props.open) {
      setScreenSize({ ...screenSize, height: window.innerHeight });
      setHeaderHeight(headerRef.current?.clientHeight ?? 0);
      setFooterHeight(footerRef.current?.clientHeight ?? 0);
    }

    window.addEventListener("resize", handleResize);
    return () => window.addEventListener("resize", handleResize);
  }, [props.open, screenSize.width]);

  const { unmount, toggleOverlay, closeModal } = useModal(props);

  return (
    props.open && (
      <StyledWrap ref={rootRef}>
        <StyledOverlay
          ref={overlayRef}
          onClick={toggleOverlay}
          unmount={unmount}
        />
        <StyledBottomSheetContainer ref={containerRef}>
          <StyledBottomSheet unmount={unmount}>
            {props.header && (
              <StyledHeader ref={headerRef}>{props.header}</StyledHeader>
            )}
            {props.closeable && (
              <CloseIcon onClick={closeModal} className="icon-close" />
            )}
            <StyledScroll
              ref={scrollRef}
              maxHeight={screenSize.height}
              headerHeight={headerHeight}
              footerHeight={footerHeight}
            >
              <StyledContent ref={contentRef}>{children}</StyledContent>
            </StyledScroll>
            {props.footer && (
              <StyledFooter ref={footerRef}> {props.footer}</StyledFooter>
            )}
          </StyledBottomSheet>
        </StyledBottomSheetContainer>
      </StyledWrap>
    )
  );
};

export default BottomSheet;

BottomSheet.defaultProps = {
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
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(64, 74, 101, 0.6);
  opacity: 1;
  overscroll-behavior: none;
  touch-action: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  will-change: height;
  ${(p) => (p.unmount ? activeFadeIn : activeFadeOut)}
`;

const StyledBottomSheetContainer = styled.div`
  z-index: 150;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  height: 64px;
  font-size: 20px;
  font-weight: 700;
`;

const StyledScroll = styled.div<{
  maxHeight: number;
  headerHeight: number;
  footerHeight: number;
}>`
  max-height: ${(p) => p.maxHeight - p.headerHeight - p.footerHeight}px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: auto;
`;

const StyledContent = styled.div``;

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

const StyledFooter = styled.div``;

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

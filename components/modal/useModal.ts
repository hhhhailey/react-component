import React, { RefObject } from "react";
import { Size, useWindowSize } from "@/hooks/useWindowSize";
import { debounce } from "lodash";

export interface UseModalProps {
  open?: boolean; // 모달 활성화, 비활성화 여부
  onDismiss?: VoidFunction; // 모달 닫기 기능 함수
  headerRef?: any;
  footerRef?: any;
}

export const useModal = ({
  open,
  onDismiss,
  headerRef,
  footerRef,
}: UseModalProps) => {
  const size: Size = useWindowSize();
  const [headerHeight, setHeaderHeight] = React.useState(0);
  const [footerHeight, setFooterHeight] = React.useState(0);
  const [unmount, setUnmount] = React.useState(false);

  React.useLayoutEffect(() => {
    if (open) {
      setHeaderHeight(headerRef.current?.clientHeight ?? 0);
      setFooterHeight(footerRef.current?.clientHeight ?? 0);
    }
  }, [open, size.width]);
  const toggleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setUnmount(true);
    setTimeout(() => {
      setUnmount(false);
      onDismiss && onDismiss();
    }, 300);
  };

  const closeModal = () => {
    setUnmount(true);
    setTimeout(() => {
      setUnmount(false);
      onDismiss && onDismiss();
    }, 300);
  };

  return {
    unmount,
    toggleOverlay,
    closeModal,
    headerHeight,
    footerHeight,
    size,
  };
};

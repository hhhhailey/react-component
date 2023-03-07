import React, { RefObject } from "react";
import { Size, useWindowSize } from "@/hooks/useWindowSize";
import { debounce } from "lodash";

export interface UseBottomSheetProps {
  open?: boolean; // 모달 활성화, 비활성화 여부
  onDismiss?: VoidFunction; // 모달 닫기 기능 함수
  headerRef?: any;
  footerRef?: any;
}

export const useBottomSheet = ({
  open,
  onDismiss,
  headerRef,
  footerRef,
}: UseBottomSheetProps) => {
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

  const closeBottomSheet = () => {
    setUnmount(true);
    setTimeout(() => {
      setUnmount(false);
      onDismiss && onDismiss();
    }, 300);
  };

  return {
    unmount,
    toggleOverlay,
    closeBottomSheet,
    headerHeight,
    footerHeight,
    size,
  };
};

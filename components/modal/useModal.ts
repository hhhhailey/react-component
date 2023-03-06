import React from "react";

export interface UseModalProps {
  open?: boolean; // 모달 활성화, 비활성화 여부
  onDismiss?: VoidFunction; // 모달 닫기 기능 함수
}

export const useModal = ({ open, onDismiss }: UseModalProps) => {
  const [unmount, setUnmount] = React.useState(false);

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

  return { unmount, toggleOverlay, closeModal };
};

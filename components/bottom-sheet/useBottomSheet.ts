import React from "react";

export interface UseBottomSheetProps {
  open?: boolean;
  onDismiss?: VoidFunction;
}

export const useBottomSheet = ({ open, onDismiss }: UseBottomSheetProps) => {
  const [unmount, setUnmount] = React.useState(false);

  const toggleOverlay = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setUnmount(true);
    setTimeout(() => {
      setUnmount(false);
      onDismiss && onDismiss();
    }, 300);
  };

  const closeModal = React.useCallback(() => {
    // setIsUnmount(true);
    // setTimeout(() => {
    //   setIsUnmount(false);
    //   onCloseModal && onCloseModal();
    // }, 150);
  }, []);
  return { unmount, toggleOverlay };
};

import React, { ComponentProps, FunctionComponent } from "react";
import { ModalProps } from "../@types/modal";
import {
  ModalsOpenedContext,
  ModalsStateContext,
  ModalsDispatchContext,
} from "./context";

export interface ModalProviderProps {
  children?: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  // 열린 모달 상태 관리
  const [openedModals, setOpenedModals] = React.useState<any[]>([]);
  const [pageIndex, setPageIndex] = React.useState<number>(0);

  const open = React.useCallback(
    <T extends FunctionComponent<ModalProps>>(
      Component: T,
      props: ComponentProps<T>
    ) => {
      setOpenedModals((modals) => {
        return [...modals, { Component, props: { ...props, open: true } }];
      });
    },
    [setOpenedModals]
  );

  const close = React.useCallback(
    <T extends FunctionComponent>(Component: T) => {
      setOpenedModals((modals: any) => {
        return modals.filter((modal: any) => modal.Component !== Component);
      });

      // 모달 닫을 때 pageIndex 초기화
      updatePageIndex(0);
    },
    [setOpenedModals]
  );

  const updatePageIndex = React.useCallback(
    (page: number) => {
      setPageIndex(page || 0);
    },
    [pageIndex, setPageIndex]
  );

  // React Context API 성능 최적화
  const dispatch: any = React.useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsOpenedContext.Provider value={openedModals}>
        <ModalsStateContext.Provider value={{ pageIndex, updatePageIndex }}>
          {children}
        </ModalsStateContext.Provider>
      </ModalsOpenedContext.Provider>
    </ModalsDispatchContext.Provider>
  );
}

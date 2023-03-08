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
  const [curPage, setCurPage] = React.useState<number>(0);

  React.useEffect(() => {
    setCurPage(curPage || 0);
  }, [curPage]);

  const changePage = (page: number) => {
    setCurPage(page);
  };

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
    },
    [setOpenedModals]
  );

  const dispatch: any = React.useMemo(() => ({ open, close }), [open, close]);

  return (
    <ModalsDispatchContext.Provider value={dispatch}>
      <ModalsOpenedContext.Provider value={openedModals}>
        <ModalsStateContext.Provider value={{ curPage, changePage }}>
          {children}
        </ModalsStateContext.Provider>
      </ModalsOpenedContext.Provider>
    </ModalsDispatchContext.Provider>
  );
}

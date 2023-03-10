import React, { ComponentProps, FunctionComponent } from "react";
import { ModalDispatchProps, ModalProps } from "../../@types/modal";
import {
  ModalOpenedContext,
  ModalStateContext,
  ModalDispatchContext,
} from "./context";

interface ModalProviderProps {
  children?: React.ReactNode;
}

export default function ModalProvider({ children }: ModalProviderProps) {
  // 열린 모달 상태 관리
  const [openedModals, setOpenedModals] = React.useState<any[]>([]);
  const [pageIndex, setPageIndex] = React.useState<number>(0);

  /**
   * 페이지모델에서 pageIndex값 업데이트 함수
   * @param {*} page 업데이트할 페이지 인덱스
   */
  const updatePageIndex = React.useCallback(
    (page: number) => {
      setPageIndex(page || 0);
    },
    [setPageIndex]
  );

  /**
   * 모달 활성화 함수
   * @param {*} Component 모달 컴포넌트
   * @param {*} props 모달 컴포넌트에 전달될 props 옵션
   */
  const open = React.useCallback(
    <T extends FunctionComponent<ModalProps>>(
      Component: T,
      props: ComponentProps<T>
    ) => {
      setOpenedModals((modals) => {
        return [...modals, { Component, props }];
      });
    },
    [setOpenedModals]
  );

  /**
   * 모달 비활성화 함수
   * @param {*} Component 닫을 컴포넌트
   */
  const close = React.useCallback(
    <T extends FunctionComponent>(Component: T) => {
      setOpenedModals((modals: any) => {
        return modals.filter((modal: any) => modal.Component !== Component);
      });

      // 모달 닫을 때 pageIndex 초기화
      updatePageIndex(0);
    },
    [updatePageIndex, setOpenedModals]
  );

  const dispatch: ModalDispatchProps = React.useMemo(
    () => ({ open, close }),
    [open, close]
  );

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <ModalOpenedContext.Provider value={openedModals}>
        <ModalStateContext.Provider value={{ pageIndex, updatePageIndex }}>
          {children}
        </ModalStateContext.Provider>
      </ModalOpenedContext.Provider>
    </ModalDispatchContext.Provider>
  );
}

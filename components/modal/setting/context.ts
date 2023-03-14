import { createContext } from "react";
import { ModalOpenedContextProps } from "../../@types/modal";

/**
 * 열린 모달 상태 관리 컨텍스트
 */
export const ModalOpenedContext = createContext<ModalOpenedContextProps<any>[]>(
  []
);

/**
 * 모달 액티브 함수 관리 컨텍스트
 */
export const ModalDispatchContext = createContext({
  open: (Component: any, props: any) => {},
  close: (Component: any) => {},
});

/**
 * 모달 상태 관리 컨텍스트
 */
export const ModalStateContext = createContext({
  pageIndex: 0,
  updatePageIndex: (pageIndex: number) => {},
  mounted: false,
  updateMounted: (mounted: boolean) => {},
});

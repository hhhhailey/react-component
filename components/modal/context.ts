import { createContext, FunctionComponent } from "react";
import {
  ModalProps,
  ModalsStateContextProps,
  OpenedModalProps,
} from "../@types/modal";

// 현재 open된 modal들을 나타냄.
export const ModalsOpenedContext = createContext<OpenedModalProps[]>([]);

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: (Component: any, props: any) => {},
  close: (Component: any) => {},
});

// modal state 다루는 컨텍스트
export const ModalsStateContext = createContext({
  pageIndex: 0,
  updatePageIndex: (pageIndex: number) => {},
});

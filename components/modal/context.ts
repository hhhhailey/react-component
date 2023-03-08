import { ComponentProps, createContext, FunctionComponent } from "react";
import { ModalProps } from "../@types/modal";
import { UseModalsProps } from "./useModals";

interface OpenedModalProps {
  Component: FunctionComponent<ModalProps>;
  props: any;
}

interface ModalContextProps {
  curPage?: number;
}

// 현재 open된 modal들을 나타냄.
export const ModalsStateContext = createContext<OpenedModalProps[]>([]);

// modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: (Component: any, props: any) => {},
  close: (Component: any) => {},
});

// modal context props
export const ModalContext = createContext<ModalContextProps | null>(null);

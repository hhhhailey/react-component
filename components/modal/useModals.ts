import React, { ComponentProps, FunctionComponent } from "react";
import { ModalProps } from "../@types/modal";
import { ModalsDispatchContext, ModalsStateContext } from "./context";

export interface UseModalsProps {
  Component: any;
  props: any;
}

export default function useModals() {
  const { open, close } = React.useContext(ModalsDispatchContext);
  const { pageIndex, updatePageIndex } = React.useContext(ModalsStateContext);

  const openModal = <T extends FunctionComponent>(
    Component: T,
    props: ComponentProps<T>
  ) => {
    open(Component, props);
  };

  const closeModal = () => {};

  const setPageIndex = (pageIndex: number) => {
    updatePageIndex(pageIndex);
  };

  return { openModal, closeModal, pageIndex, setPageIndex };
}

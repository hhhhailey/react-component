import React, { ComponentProps, FunctionComponent } from "react";
import { ModalProps } from "../@types/modal";
import { ModalDispatchContext, ModalStateContext } from "./setting/context";

export interface useModalProps {
  Component: any;
  props: any;
}

export default function useModal() {
  const { open, close } = React.useContext(ModalDispatchContext);
  const { pageIndex, updatePageIndex } = React.useContext(ModalStateContext);

  const openModal = <T extends FunctionComponent>(
    Component: T,
    props: ComponentProps<T>
  ) => {
    open(Component, props);
  };

  const closeModal = () => {};

  const setPageIndex = (page: number) => {
    updatePageIndex(page);
  };

  return { openModal, closeModal, pageIndex, setPageIndex };
}

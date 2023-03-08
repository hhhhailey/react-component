import React from "react";
import { ModalsDispatchContext, ModalsStateContext } from "./context";

export interface UseModalsProps {
  Component: any;
  props: any;
}

export default function useModals() {
  const { open, close } = React.useContext(ModalsDispatchContext);
  const { updatePageIndex } = React.useContext(ModalsStateContext);

  const openModal = (Component: any, props: any) => {
    open(Component, props);
  };

  const closeModal = () => {};

  const setPageIndex = (pageIndex: number) => {
    updatePageIndex(pageIndex);
  };
  return { openModal, closeModal, setPageIndex };
}

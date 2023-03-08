import React from "react";
import { ModalsDispatchContext } from "./context";

export interface UseModalsProps {
  Component: any;
  props: any;
}

export default function useModals() {
  const { open, close } = React.useContext(ModalsDispatchContext);

  const openModal = (Component: any, props: any) => {
    open(Component, props);
  };

  const closeModal = () => {};
  return { openModal, closeModal };
}

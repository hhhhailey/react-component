export type ModalVariantUnion = "modal" | "sheet";

export interface ModalProps {
  open?: boolean;
  variant?: ModalVariantUnion;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  closeable?: boolean;

  w?: string | number;
  h?: string | number;

  title?: string;
  desc?: string;
  content?: React.ReactNode;

  onClose?: VoidFunction;
  onSubmit?: VoidFunction;
  onConfirm?: VoidFunction;

  hasBtnCancel?: boolean;
  hasBtnSubmit?: boolean;
  hasBtnConfirm?: boolean;
}

export interface ModalDispatchProps {
  open: <T extends React.FunctionComponent<ModalProps>>(
    Component: T,
    props: React.ComponentProps<T>
  ) => void;
  close: <T extends React.FunctionComponent<{}>>(Component: T) => void;
}

export interface ModalStateContextProps {
  curPage?: number;
  changePage?: any;
}

export interface ModalOpenedContextProps<
  T extends React.FunctionComponent<ModalProps>
> {
  Component: T;
  props: React.ComponentProps<T>;
}

export type ModalVariantUnion = "modal" | "sheet";
export interface ModalProps {
  variant?: ModalVariantUnion;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  closeable?: boolean;

  w?: string | number;
  h?: string | number;

  title?: string;
  desc?: string;

  onClose?: VoidFunction;
  onSubmit?: VoidFunction;
  onConfirm?: VoidFunction;

  hasBtnCancel?: boolean;
  hasBtnSubmit?: boolean;
  hasBtnConfirm?: boolean;
}

export interface ModalsStateContextProps {
  curPage?: number;
  changePage?: any;
}

export interface OpenedModalProps {
  Component: FunctionComponent<ModalProps>;
  props: ModalProps;
}

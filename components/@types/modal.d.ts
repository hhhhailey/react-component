export interface ModalProps {
  open?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;

  w?: string | number;
  h?: string | number;

  onClose?: VoidFunction;
  onCancel?: VoidFunction;
  onSuccess?: VoidFunction;
  onConfirm?: VoidFunction;
}

export interface ModalsStateContextProps {
  curPage?: number;
  changePage?: any;
}

export interface OpenedModalProps {
  Component: FunctionComponent<ModalProps>;
  props: any;
}

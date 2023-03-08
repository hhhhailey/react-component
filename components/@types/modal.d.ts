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

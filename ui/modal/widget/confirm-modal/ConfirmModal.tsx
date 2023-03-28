import { ModalProps } from "@/ui/@types/modal";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@/assets/icons/closed.svg";
import Button from "@/ui/button/Button";

const ConfirmModal: React.FC<ModalProps> = React.forwardRef(
  ({ ...props }, ref) => {
    const hasFooter = React.useMemo(
      () =>
        props.hasBtnCancel || props.hasBtnConfirm || props.hasBtnSubmit
          ? true
          : false,
      [props.hasBtnCancel, props.hasBtnConfirm, props.hasBtnSubmit]
    );
    console.log(props.hasBtnCancel, "cancel");
    console.log(hasFooter, "hasFooter");

    const closeModal = () => {
      props.onClose && props.onClose();
    };
    const submit = () => {
      props.onSubmit && props.onSubmit();
    };

    React.useImperativeHandle(ref, () => ({
      headerHeight: 50,
      footerHeight: 50,
    }));

    return (
      <StyledConfirmModal>
        <StyledHeader>
          {props.header && props.header}
          {props.closeable && (
            <CloseIcon className={"icon-close"} onClick={closeModal} />
          )}
        </StyledHeader>
        {props.title && <StyledTitle>{props.title}</StyledTitle>}
        {props.desc && <StyledDesc>{props.desc}</StyledDesc>}
        {props.content && props.content}
        <StyledFooter show={hasFooter}>
          {props.onClose && props.hasBtnCancel && (
            <Button block onClick={closeModal}>
              취소
            </Button>
          )}
          {props.onConfirm && props.hasBtnConfirm && (
            <Button block onClick={submit}>
              확인
            </Button>
          )}
          {props.onSubmit && props.hasBtnSubmit && (
            <Button block onClick={submit}>
              등록
            </Button>
          )}
          {props.footer && props.footer}
        </StyledFooter>
      </StyledConfirmModal>
    );
  }
);

export default ConfirmModal;
ConfirmModal.displayName = "ConfirmModal";
ConfirmModal.defaultProps = {
  closeable: true,
  hasBtnCancel: true,
  hasBtnConfirm: false,
  hasBtnSubmit: false,
};

const StyledConfirmModal = styled.div`
  .icon-close {
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
`;
const StyledHeader = styled.div``;
const StyledFooter = styled.div<{ show?: boolean }>`
  /* position: absolute;
  left: 0;
  bottom: 0; */
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex: 1;
  gap: 8px;
  height: ${(p) => (p.show ? 52 : 0)}px;
`;

const StyledTitle = styled.div``;
const StyledDesc = styled.div``;

import { ModalProps } from "@/components/@types/modal";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import CloseIcon from "@/assets/icons/close.svg";

const ConfirmModal: React.FC<ModalProps> = ({ ...props }) => {
  const closeModal = () => {
    props.onClose && props.onClose();
  };
  const submit = () => {
    props.onSubmit && props.onSubmit();
  };

  return (
    <StyledConfirmModal>
      <StyledHeader>{props.header}</StyledHeader>
      {props.closeable && (
        <CloseIcon className={"icon-close"} onClick={closeModal} />
      )}
      <div>this is confirm modal</div>
      <StyledFooter>
        {props.onClose && props.hasBtnCancel && (
          <Button onClick={closeModal}>취소</Button>
        )}
        {props.onConfirm && props.hasBtnConfirm && (
          <Button onClick={submit}>확인</Button>
        )}
        {props.onSubmit && props.hasBtnSubmit && (
          <Button onClick={submit}>등록</Button>
        )}
        {props.footer && <StyledFooter>{props.footer}</StyledFooter>}
      </StyledFooter>
    </StyledConfirmModal>
  );
};

export default ConfirmModal;

ConfirmModal.defaultProps = {
  closeable: true,
  hasBtnCancel: true,
  hasBtnConfirm: true,
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
const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 52px;
  background-color: white;
`;

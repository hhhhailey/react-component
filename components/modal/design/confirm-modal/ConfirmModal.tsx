import { ModalProps } from "@/components/@types/modal";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";

export default function ConfirmModal({ ...props }: ModalProps) {
  const cancel = () => {
    props.onClose && props.onClose();
  };
  const confirm = () => {
    props.onConfirm && props.onConfirm();
  };

  return (
    props.open && (
      <StyledConfirmModal>
        <StyledHeader>{props.header}</StyledHeader>
        <div>this is confirm modal</div>
        <StyledFooter>
          {props.onCancel && <Button onClick={cancel}>취소</Button>}
          {props.onConfirm && <Button onClick={confirm}>확인</Button>}
          {props.footer && <StyledFooter>{props.footer}</StyledFooter>}
        </StyledFooter>
      </StyledConfirmModal>
    )
  );
}

const StyledConfirmModal = styled.div``;
const StyledHeader = styled.div``;
const StyledFooter = styled.div``;

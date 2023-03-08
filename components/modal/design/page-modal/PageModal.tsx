import { ModalProps } from "@/components/@types/modal";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { ModalContext, ModalsStateContext } from "../../context";

export interface PageModalProps extends ModalProps {
  active?: boolean;
}

export default function PageModal({ ...props }: PageModalProps) {
  const [active, setActive] = React.useState(false);
  const state = React.useContext(ModalContext);
  const cancel = () => {
    props.onClose && props.onClose();
  };
  const confirm = () => {
    props.onConfirm && props.onConfirm();
  };

  React.useLayoutEffect(() => {}, [state]);

  return (
    props.open && (
      <StyledPageModal>
        {active && (
          <>
            <StyledHeader>{props.header}</StyledHeader>
            <div>this is page modal</div>
            <StyledFooter>
              {props.onCancel && <Button onClick={cancel}>취소</Button>}
              {props.onConfirm && <Button onClick={confirm}>확인</Button>}
              {props.footer && <StyledFooter>{props.footer}</StyledFooter>}
            </StyledFooter>
          </>
        )}
      </StyledPageModal>
    )
  );
}

const StyledPageModal = styled.div``;
const StyledHeader = styled.div``;
const StyledFooter = styled.div``;

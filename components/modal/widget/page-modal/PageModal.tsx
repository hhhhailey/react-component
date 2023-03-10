import { ModalProps } from "@/components/@types/modal";
import React from "react";
import styled from "styled-components";
import { ModalStateContext } from "../../setting/context";
import BackIcon from "@/assets/icons/arrow-back.svg";
import ClosedIcon from "@/assets/icons/close.svg";

export interface PageModalProps extends ModalProps {
  pages?: any[];
  pageHeaderBtns?: React.ReactNode[];
  pageFooterBtns?: React.ReactNode[];
}

export default function PageModal({ ...props }: PageModalProps) {
  const { pageIndex, updatePageIndex } = React.useContext(ModalStateContext);

  const moveToBack = () => {
    if (pageIndex === 0) return false;
    else updatePageIndex(pageIndex - 1);
  };

  return (
    <StyledPageModal>
      <StyledHeader>
        {props.pageHeaderBtns ? (
          props.pageHeaderBtns?.map((btn, index) => {
            return pageIndex === index && btn;
          })
        ) : (
          <>
            {pageIndex !== 0 && <BackIcon onClick={moveToBack} />}
            <ClosedIcon className={"icon-closed"} onClick={props.onClose} />
          </>
        )}
      </StyledHeader>
      {props.pages![pageIndex]}
      <StyledFooter>
        {props.pageFooterBtns?.map((btn, index) => {
          return pageIndex === index && btn;
        })}
      </StyledFooter>
    </StyledPageModal>
  );
}

const StyledPageModal = styled.div`
  padding-bottom: 52px;
`;
const StyledHeader = styled.div`
  padding-bottom: 16px;
  .icon-closed {
    position: absolute;
    top: 0;
    right: 0;
  }
  & svg {
    cursor: pointer;
  }
`;
const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex: 1;
  gap: 8px;
  height: 52px;
`;

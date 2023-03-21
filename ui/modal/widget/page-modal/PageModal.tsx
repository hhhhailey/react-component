import { ModalProps } from "@/ui/@types/modal";
import React from "react";
import styled from "styled-components";
import { ModalStateContext } from "../../setting/context";
import BackIcon from "@/assets/icons/arrow-back.svg";
import ClosedIcon from "@/assets/icons/closed.svg";

export interface PageModalProps extends ModalProps {
  pages?: any[];
  pageHeaderBtns?: React.ReactNode[];
  pageFooterBtns?: React.ReactNode[];
}

const PageModal = React.forwardRef(({ ...props }: PageModalProps, ref) => {
  const { pageIndex, updatePageIndex, mounted, updateMounted } =
    React.useContext(ModalStateContext);
  const headerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;
  const footerRef = React.useRef() as React.MutableRefObject<HTMLDivElement>;

  // 헤더 뒤로가기
  const moveToBack = () => {
    if (pageIndex === 0) return false;
    else updatePageIndex(pageIndex - 1);
  };

  /**
   * Modals 부모컴포넌트에서 호출할 리스트
   */
  React.useImperativeHandle(ref, () => ({
    getHeaderHeight: headerRef.current?.clientHeight,
    getFooterHeight: footerRef.current?.clientHeight,
  }));

  /**
   * modalRef 리렌딩 마운트
   */
  React.useEffect(() => {
    setTimeout(() => {
      !mounted && updateMounted(mounted);
    }, 0);
  }, [props.pages]);

  return (
    <StyledPageModal>
      <StyledHeader ref={headerRef}>
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
      <StyledFooter ref={footerRef}>
        {props.pageFooterBtns?.map((btn, index) => {
          return pageIndex === index && btn;
        })}
      </StyledFooter>
    </StyledPageModal>
  );
});

export default PageModal;
PageModal.displayName = "PageModal";

const StyledPageModal = styled.div`
  padding-bottom: 52px;
`;
const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  background-color: white;
`;

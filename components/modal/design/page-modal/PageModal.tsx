import { ModalProps } from "@/components/@types/modal";
import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { ModalsStateContext } from "../../context";

export interface PageModalProps extends ModalProps {
  pages?: any;
}

export default function PageModal({ ...props }: PageModalProps) {
  const { pageIndex } = React.useContext(ModalsStateContext);

  return <StyledPageModal>{props.pages[pageIndex]}</StyledPageModal>;
}

const StyledPageModal = styled.div``;
const StyledHeader = styled.div``;
const StyledFooter = styled.div``;

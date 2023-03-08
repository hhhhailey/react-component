import Head from "next/head";
import Image from "next/image";
import { Inter, Ultra } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import { Checkbox, Input, Modal, View } from "@/components";
import React from "react";
import styled from "styled-components";
import BottomSheet from "@/components/bottom-sheet/BottomSheet";
import useModals from "@/components/modal/useModals";
import MyModal from "@/components/modal/design/confirm-modal/ConfirmModal";
import PageModal from "@/components/modal/design/page-modal/PageModal";
import { ModalsStateContext } from "@/components/modal/context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChecked, hasIsChecked] = React.useState(true);
  const [openBottomSheet, setOpenBottomSheet] = React.useState(false);

  const closeBottomSheet = () => {};
  const { openModal, setPageIndex } = useModals();
  const renderPageModal1 = (
    <div>
      page modal 1
      <Button
        onClick={() => {
          setPageIndex(1);
        }}
      >
        next
      </Button>
    </div>
  );
  const renderPageModal2 = (
    <div>
      page modal 2{" "}
      <Button
        onClick={() => {
          setPageIndex(2);
        }}
      >
        next
      </Button>
    </div>
  );
  const renderPageModal3 = (
    <div>
      page modal 3
      <Button
        onClick={() => {
          setPageIndex(1);
        }}
      >
        back
      </Button>
      <Button
        onClick={() => {
          setPageIndex(0);
        }}
      >
        first
      </Button>
    </div>
  );

  const openMainModal = () => {
    openModal(MyModal, {
      header: "header",
      w: "40%",
      h: 200,
      closeable: true,
      footer: <div>footer</div>,
      hasBtnSubmit: true,
      onSubmit: () => {
        console.log("onSubmit 비지니스 로직");
      },
    });
  };

  const openPageModal = () => {
    openModal(PageModal, {
      header: <Button>Back</Button>,
      pages: [renderPageModal1, renderPageModal2, renderPageModal3],
    });
  };
  return (
    <View direction={"column"} padding={["p-4"]} block>
      <Button type={"primary"}>Button</Button>
      <Button onClick={() => setOpenBottomSheet(true)}>바텀시트</Button>
      <Button onClick={openMainModal}>모달</Button>
      <Button onClick={openPageModal}>페이지 모달</Button>
      <Checkbox
        checked={isChecked}
        onChange={() => hasIsChecked((prev) => !prev)}
      />
      <View direction={"column"} spacing={30}>
        <Input label={"아이디"} />
        <Input
          label={"아이디"}
          msg={{ type: "error", title: "아이디가 올바르지 않습니다요." }}
        />
        <Input.Password
          label={"비밀번호"}
          msg={{
            type: "info",
            title: "비밀번호를 아래와 같이 입력해주세요.",
            desc: (
              <StyledMessageDetail>
                <li>영문 + 숫자 + 특수문자 9자리~20자리</li>
                <li>연속된 문자열 3번 이상 연속해서 사용할 수 없어요</li>
              </StyledMessageDetail>
            ),
          }}
        />
      </View>
      <BottomSheet
        open={openBottomSheet}
        onDismiss={() => setOpenBottomSheet(false)}
        header={"약관동의"}
        h={300}
        footer={<Button>확인</Button>}
      >
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
        <div>안녕하시요</div>
      </BottomSheet>
    </View>
  );
}

const StyledMessageDetail = styled.div`
  color: #888;

  & > li {
    font-size: 12px;
  }
`;

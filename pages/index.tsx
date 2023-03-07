import Head from "next/head";
import Image from "next/image";
import { Inter, Ultra } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import { Checkbox, Input, View } from "@/components";
import React from "react";
import styled from "styled-components";
import BottomSheet from "@/components/bottom-sheet/BottomSheet";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChecked, hasIsChecked] = React.useState(true);
  const [openBottomSheet, setOpenBottomSheet] = React.useState(false);
  const closeBottomSheet = () => {};
  return (
    <View direction={"column"} padding={["p-4"]} block>
      <Button type={"primary"}>Button</Button>
      <Button onClick={() => setOpenBottomSheet(true)}>바텀시트</Button>
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

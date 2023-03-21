import Head from "next/head";
import Image from "next/image";
import { Inter, Ultra } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";
import { Checkbox, Input, Switch, View } from "@/ui";
import React from "react";
import styled from "styled-components";
import BottomSheet from "@/ui/bottom-sheet/BottomSheet";
import useModal from "@/ui/modal/useModal";
import { modals } from "@/ui/modal/setting/Modals";
import useToggle, { toggleReducer } from "@/ui/switch/useSwitch";
import icon_avatar from "@/assets/bg/avatar_man.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isChecked, hasIsChecked] = React.useState(true);
  const [openBottomSheet, setOpenBottomSheet] = React.useState(false);

  const closeBottomSheet = () => {};
  const { openModal, setPageIndex, pageIndex } = useModal();
  const renderPageModal1 = <div>page modal 1</div>;
  const renderPageModal2 = <div>page modal 2 </div>;
  const renderPageModal3 = (
    <div>
      page modal3
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
      <p>page pagepagepagepagepagepagepage </p>
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
    openModal(modals.confirm, {
      header: "header",
      w: "80%",
      h: 240,
      title: "dkdkdkd",
      hasBtnSubmit: true,
      onSubmit: () => {
        console.log("onSubmit 비지니스 로직");
      },
    });
  };

  const openPageModal = () => {
    openModal(modals.pages, {
      pages: [renderPageModal1, renderPageModal2, renderPageModal3],
      pageHeaderBtns: [
        <div key={0}>header1</div>,
        <div key={1}>header2</div>,
        <div key={2}>header3</div>,
      ],
      pageFooterBtns: [
        <Button block key={0} onClick={() => setPageIndex(1)}>
          다음
        </Button>,
        <Button block key={1} onClick={() => setPageIndex(2)}>
          다음
        </Button>,
        <>
          <Button block onClick={() => setPageIndex(0)}>
            처음으로
          </Button>
          <Button block onClick={() => setPageIndex(1)}>
            이전으로
          </Button>
        </>,
      ],
    });
  };

  const openBottomSheetModal = () => {
    openModal(modals.pages, {
      variant: "sheet",
      pages: [renderPageModal1, renderPageModal2, renderPageModal3],
      pageFooterBtns: [
        <Button block key={0} onClick={() => setPageIndex(1)}>
          다음
        </Button>,
        <Button block key={1} onClick={() => setPageIndex(2)}>
          다음
        </Button>,
        <>
          <Button block onClick={() => setPageIndex(0)}>
            처음으로
          </Button>
          <Button block onClick={() => setPageIndex(1)}>
            이전으로
          </Button>
        </>,
      ],
    });
  };

  const [clickCount, setClickCount] = React.useState(0);
  const tooManyClick = clickCount > 4;

  const { on, toggle, setOn, setOff } = useToggle({
    reducer(currentState, action) {
      const changes = toggleReducer(currentState, action);
      if (tooManyClick && action.type === "TOGGLE") {
        console.log(currentState, tooManyClick, "1");
        return { ...changes, on: currentState.on };
      } else {
        console.log(currentState, "?22");
        return changes;
      }
    },
  });

  const openAgreeSheetModal = () => {
    openModal(modals.confirm, {
      variant: "sheet",
      onConfirm: () => console.log("first"),
      hasBtnCancel: false,
      closeable: true,
      content: (
        <View align="center" spacing={12} padding={["p-4"]}>
          <Image width={60} height={76} src={icon_avatar} alt="아바타 남자" />
          <span>약관을 동의해주세요</span>
        </View>
      ),
    });
  };

  return (
    <View direction={"column"} padding={["p-4"]} block>
      <Switch
        on={on}
        onClick={() => {
          toggle();
          setClickCount((c) => c + 1);
        }}
      />
      {tooManyClick ? (
        <button onClick={() => setClickCount(0)}>reset</button>
      ) : null}
      <Button type={"primary"}>Button</Button>
      <Button onClick={() => setOpenBottomSheet(true)}>바텀시트</Button>
      <Button onClick={openMainModal}>모달</Button>
      <Button onClick={openPageModal}>페이지 모달</Button>
      <Button onClick={openBottomSheetModal}>바텀시트 모달</Button>
      <Button onClick={openAgreeSheetModal}>확인</Button>
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

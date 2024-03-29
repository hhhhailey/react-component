import Button from "@/ui/button/Button";
import React from "react";
import ArrowBack from "@/assets/icons/arrow-back.svg";
import avatar_man from "@/assets/bg/avatar_man.png";
import { View } from "@/ui";
import Text from "@/ui/text/Text";
import useModal from "@/ui/modal/useModal";
import { modals } from "@/ui/modal/setting/Modals";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Home() {
  const { openModal } = useModal();
  return (
    <View direction={"column"} padding={["p-4"]} block>
      <View spacing={16} direction={"column"} block>
        <Button
          onClick={() =>
            openModal(modals.confirm, {
              hasBtnCancel: false,
              content: <Calendar />,
            })
          }
        >
          달력 바텀시트
        </Button>

        <Button
          onClick={() =>
            openModal(modals.pages, {
              pages: [<div>dkdk</div>, <div>d2kdk</div>, <div>dk2dk</div>],
              hasBtnCancel: true,
              pageFooterBtns: [
                <Button>다음</Button>,
                <Button>다음</Button>,
                <Button>다음</Button>,
              ],
            })
          }
        >
          모달 바텀시트 (page)
        </Button>
        <Text size="xl">일반 텍스트입니다. XL</Text>
        <Text size="lg">일반 텍스트입니다. LG</Text>
        <Text dot>교보라이프플래닛에서 보험정보를 확인해요</Text>
        <Text dot>
          주민등록번호는 암호화하여 관리하고 목적 달성 후 삭제해요
          주민등록번호는 암호화하여 관리하고 목적 달성 후 삭제해요
          주민등록번호는 암호화하여 관리하고 목적 달성 후 삭제해요
        </Text>
        <Text.Icon
          spacing={8}
          size={"md"}
          align={"flex-start"}
          icon={{ alt: "느낌표마크", registered: "exclamation" }}
          block
        >
          Icon이 있는 Text 입니다. 자동차보험 비교견적서비스는 회원님의 최소
          정보로 보험사별 가견적 보험료를 간편하게 비교해요
        </Text.Icon>
        <Button variant="primary">확인</Button>
        <Button variant="primary">종료</Button>
        <Button variant="primary">부족한 보장채우기</Button>
      </View>
      <Button.Icon
        block
        spacing={8}
        ratio={{ icon: 1, text: 3 }}
        icon={{ w: 60, image: avatar_man, alt: "남자 아바타" }}
      >
        <div>아이콘 버튼입니다.</div>
      </Button.Icon>
      <Button.Icon
        spacing={8}
        icon={{ svg: <ArrowBack />, alt: "뒤로가기", pos: "prefix" }}
      >
        <div>받을 수 있는 보험금</div>
      </Button.Icon>

      <Button.Icon icon={{ registered: "back", alt: "뒤로가기" }} />
      <Button.Icon icon={{ registered: "closed", alt: "닫기" }} />

      <View align="center" justify="space-between" bgColor="brand-color-300">
        <div>닫아주세요</div>
        <Button.Icon icon={{ registered: "closed", alt: "닫기" }} />
      </View>
    </View>
  );
}

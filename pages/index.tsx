import Button from "@/ui/button/Button";
import React from "react";
import ArrowBack from "@/assets/icons/arrow-back.svg";
import avatar_man from "@/assets/bg/avatar_man.png";
import { View } from "@/ui";

export default function Home() {
  return (
    <div>
      <Button.Icon
        block
        spacing={8}
        iconW={95}
        ratio={{ icon: 1, text: 3 }}
        icon={{ image: avatar_man }}
      >
        <div>아이콘 버튼입니다.</div>
      </Button.Icon>
      <Button.Icon block spacing={8} icon={{ svg: <ArrowBack /> }}>
        <div>받을 수 있는 보험금</div>
      </Button.Icon>

      <Button.Icon icon={{ registered: "back" }} />
      <Button.Icon icon={{ registered: "closed" }} />

      <View align="center" justify="space-between" bgColor="brand-color-300">
        <div>닫아주세요</div>
        <Button.Icon icon={{ registered: "closed" }} />
      </View>
    </div>
  );
}

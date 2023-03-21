import Button from "@/ui/button/Button";
import React from "react";
import ArrowBack from "@/assets/icons/arrow-back.svg";
import avatar_man from "@/assets/bg/avatar_man.png";

export default function Home() {
  return (
    <div>
      <Button.Icon w={95} icon={{ image: avatar_man }}>
        아이콘 버튼입니다.
      </Button.Icon>
      <Button.Icon spacing={8} icon={{ svg: <ArrowBack /> }}>
        <div>받을 수 있는 보험금</div>
      </Button.Icon>

      <Button.Icon icon={{ registered: "back" }} />
      <Button.Icon icon={{ registered: "closed" }} />
    </div>
  );
}

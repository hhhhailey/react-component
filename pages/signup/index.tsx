import { Form, Input } from "@/components";
import React from "react";
import styled from "styled-components";

const SignUpPage = () => {
  const inputRef = React.useRef<HTMLInputElement[]>([]);
  return (
    <StyledWrap>
      <Input.Group>
        <Input
          ref={(elem: React.RefObject<HTMLElement>) =>
            (inputRef.current[0] = elem as HTMLHtmlElement)
          }
          name="아이디"
          label={"아이디"}
        />
        <Input name="비밀번호" label={"비밀번호"} />
        <Input name="아이디" label={"비밀번호"} />
        <Input name="계좌번호" label={"계좌번호"} />
        <Input.Password name="비밀번호" label={"비밀번호"} />
      </Input.Group>
    </StyledWrap>
  );
};

export default SignUpPage;

const StyledWrap = styled.div`
  padding: 16px;
`;

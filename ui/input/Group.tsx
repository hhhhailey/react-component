import React from "react";
import styled, { css, keyframes } from "styled-components";
import Input from "./Input";
// 인풋을 파악하고
// 각 개별 아이디 부여
// focus가 index 따라 이동
// 마지막 체크해서 넥스트 아이템이 없다면 종료
const Group: React.FC<any> = ({ children }) => {
  const [inputs, setInputs] = React.useState<React.ReactNode[]>([]);
  const [focusedIndex, setFocusedIndex] = React.useState<number>(0);
  const [hasShow, setHasShow] = React.useState(false);
  const childInputRefs = React.useRef<HTMLInputElement[]>(null);

  const handleFocus = (index: number) => {
    setFocusedIndex(index);
  };

  const handleBlur = (index: number) => {
    if (index === focusedIndex) {
      console.log("같다");
      setFocusedIndex((prev) => prev + 1);
      console.log(focusedIndex);
      inputs[index]?.classList.add("animated");
    }
  };

  React.useEffect(() => {
    console.log(childInputRefs.current, "childInputRefs");
    const inputElements = childInputRefs.current?.map(
      (ref) => ref.parentElement as React.ReactNode
    );
    setInputs(inputElements!);
  }, [children]);

  return (
    <StyledWrap>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;
        return (
          <Input
            label={child.props.label}
            onFocus={handleFocus}
            onBlur={handleBlur}
            ref={(el) =>
              (childInputRefs.current[index] = el as HTMLInputElement)
            }
          />
        );
      })}
    </StyledWrap>
  );
};

export default Group;

const StyledWrap = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

import styled from "styled-components";

interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  on: boolean;
}

function Switch({ onClick, ...props }: SwitchProps) {
  return (
    <StyledSwitchContainer>
      <StyledSwitchInput
        type={"checkbox"}
        checked={props.on}
        onClick={onClick}
        onChange={() => {}}
        {...props}
      />
      <StyledSwitchButton active={props.on} />
    </StyledSwitchContainer>
  );
}

export default Switch;

const StyledSwitchContainer = styled.label`
  display: block;
`;

const StyledSwitchInput = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`;

const StyledSwitchButton = styled.span<{ active?: boolean }>`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 15px;
  background: #fbfbfb;
  border: 2px solid #e8eae9;
  border-radius: 15px;
  box-sizing: initial;
  transition: all 0.4s ease;
  outline: 0;
  user-select: none;

  &:active::after {
    content: "";
    padding-right: 1em;
  }

  ${(p) =>
    p.active &&
    `
      background: #86d993;

      &:active::after {
        margin-left: -1em;
      }

  `}

  /* 동그라미 버튼 */
  &::after {
    content: "";
    display: block;
    position: relative;
    left: 0;
    width: 50%;
    height: 100%;
    border-radius: 100%;
    background: #fbfbfb;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1), 0 4px 0 rgba(0, 0, 0, 0.1);

    ${(p) =>
      p.active &&
      `
      left: 50%;
    `}
  }
`;

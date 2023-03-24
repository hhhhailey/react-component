import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { ButtonProps } from "../../Button";
import { mappingRegisteredIcon } from "../../constants";

export interface ButtonIconProps extends ButtonProps {
  icon: {
    w?: number | string;
    h?: number | string;
    image?: any;
    svg?: React.ReactNode;
    registered?: ButtonIconRegisterUnion;
    alt: string;
    pos?: ButtonIconPositionUnion;
  };
  ratio?: {
    icon?: number;
    text?: number;
  };
  spacing?: number;
}

function Icon({ icon, ratio, children, ...props }: ButtonIconProps) {
  /**
   * image: png, jpg...
   * svg: svg
   * registered: 미리 등록한 아이콘
   */
  const printedIcon: React.ReactNode = React.useMemo(() => {
    if (!icon) return null;
    if (icon.image) {
      return <Image src={icon.image} alt={icon.alt} placeholder="blur" />;
    } else if (icon.svg) {
      return icon.svg;
    } else {
      if (!icon.registered) return null;
      const RegisteredIcon = mappingRegisteredIcon[icon.registered];
      return <RegisteredIcon />;
    }
  }, [icon]);

  return (
    <StyledWrap {...props}>
      <StyledIcon w={icon.w} h={icon.h} flex={ratio?.icon}>
        {printedIcon}
      </StyledIcon>
      {children && <StyledText flex={ratio?.text}>{children}</StyledText>}
    </StyledWrap>
  );
}

export default Icon;

const StyledWrap = styled.button<{
  spacing?: number;
  w?: number | string;
  h?: number | string;
  block?: boolean;
  pos?: ButtonIconPositionUnion;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.spacing}px;

  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;

  ${(p) => p.block && "width: 100% !important"};
  ${(p) => p.pos === "suffix" && "flex-direction: row-reverse"};
`;
const StyledIcon = styled.div<{
  w?: number | string;
  h?: number | string;
  flex?: number;
}>`
  ${(p) => p.flex && `flex: ${p.flex}`};
  max-width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};

  & > img {
    object-fit: contain;
  }
`;
const StyledText = styled.div<{ flex?: number }>`
  ${(p) => p.flex && `flex: ${p.flex}`};
  text-align: left;
`;

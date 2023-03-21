import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { ButtonProps } from "../../Button";
import icon_avatar from "@/assets/bg/avatar_man.png";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg";
import ClosedIcon from "@/assets/icons/closed.svg";

export interface ButtonIconProps extends ButtonProps {
  iconW?: number | string;
  iconH?: number | string;

  icon: {
    image?: any;
    svg?: React.ReactNode;
    registered?: ButtonRegisterUnion;
  };
  ratio?: {
    icon?: number;
    text?: number;
  };
  spacing?: number;
}

function Icon({
  iconW,
  iconH,
  icon,
  ratio,
  children,
  ...props
}: ButtonIconProps) {
  const mappingRegisteredIcon: any = {
    back: <ArrowBackIcon />,
    closed: <ClosedIcon />,
  };

  /**
   * image: png, jpg...
   * svg: svg
   * registered: 미리 등록한 아이콘
   */
  const printedIcon: React.ReactElement = React.useMemo(() => {
    if (!icon) return null;
    if (icon.image) {
      return <Image src={icon.image} alt={"test"} placeholder="blur" />;
    } else if (icon.svg) {
      return icon.svg;
    } else {
      if (!icon.registered) return null;
      return mappingRegisteredIcon[icon.registered];
    }
  }, [icon]);

  return (
    <StyledButtonIcon {...props}>
      <StyledIcon w={iconW} h={iconH} flex={ratio?.icon}>
        {printedIcon}
      </StyledIcon>
      {children && <StyledText flex={ratio?.text}>{children}</StyledText>}
    </StyledButtonIcon>
  );
}

export default Icon;

const StyledButtonIcon = styled.button<{
  spacing?: number;
  w?: number | string;
  h?: number | string;
  block?: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(p) => p.spacing}px;

  ${(p) => p.block && "width: 100% !important"};
`;
const StyledIcon = styled.div<{
  w?: number | string;
  h?: number | string;
  flex?: number;
}>`
  ${(p) => p.flex && `flex: ${p.flex}`};
  width: ${(p) => (typeof p.w === "number" ? p.w + "px" : p.w)};
  height: ${(p) => (typeof p.h === "number" ? p.h + "px" : p.h)};

  & > img {
    object-fit: contain;
  }
`;
const StyledText = styled.div<{ flex?: number }>`
  ${(p) => p.flex && `flex: ${p.flex}`};
  text-align: left;
`;

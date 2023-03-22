import icon_avatar from "@/assets/bg/avatar_man.png";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg";
import ClosedIcon from "@/assets/icons/closed.svg";
import React from "react";

/**
 * <Button.Icon /> 컴포넌트에 미리 등록시킨 아이콘 매핑 객체
 */
export const mappingRegisteredIcon: {
  [type in ButtonRegisterUnion]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
} = {
  back: ArrowBackIcon,
  closed: ClosedIcon,
};

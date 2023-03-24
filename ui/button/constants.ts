import React from "react";
import ArrowBackIcon from "@/assets/icons/arrow-back.svg";
import ClosedIcon from "@/assets/icons/closed.svg";

/**
 * <Button.Icon /> 컴포넌트에 미리 등록시킨 아이콘 매핑 객체
 */
export const mappingRegisteredIcon: {
  [type in ButtonIconRegisterUnion]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
} = {
  back: ArrowBackIcon,
  closed: ClosedIcon,
};

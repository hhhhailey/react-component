import React from "react";
import ExclamationIcon from "@/assets/icons/exclamation.svg";
import { TextIconRegisteredUnion } from "../@types/text";

/**
 * <Text.Icon icon={{...}} /> 컴포넌트에 미리 등록시킨 아이콘 매핑 객체
 */
export const mappingRegisteredIcon: {
  [type in TextIconRegisteredUnion]: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
} = {
  exclamation: ExclamationIcon,
};

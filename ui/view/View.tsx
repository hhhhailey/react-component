import { result } from "lodash";
import React from "react";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { BorderProps, BorderUnion } from "../@types/border";
import {
  FlexAlignUnion,
  FlexDirection,
  FlexJustifyUnion,
} from "../@types/common";
import { CursorUnion } from "../@types/cursor";
import { RadiusProps, RadiusUnion } from "../@types/radius";
import {
  MarginSpacingUnion,
  PaddingSpacingUnion,
  SpacingProps,
} from "../@types/spacing";

export interface ViewProps
  extends HTMLAttributes<HTMLDivElement>,
    SpacingProps,
    BorderProps,
    RadiusProps {
  flex?: number;
  flexBasis?: number;
  direction?: FlexDirection;
  justify?: FlexJustifyUnion;
  align?: FlexAlignUnion;
  spacing?: number;
  cursor?: CursorUnion;
  w?: number | string;
  h?: number | string;
  minW?: number | string;
  bgColor?: string;
  block?: boolean;
  children?: React.ReactNode;
  isWrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "unset";
  shadow?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  borderType?: string;
  borderColor?: string;
}

// eslint-disable-next-line react/display-name
export const View = React.forwardRef<HTMLDivElement, ViewProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledView ref={ref} {...props}>
        {children}
      </StyledView>
    );
  }
);

export default View;

View.defaultProps = {
  flex: 1,
  direction: "row",
  justify: "flex-start",
  align: "flex-start",
  cursor: "default",
  spacing: 0,
  bgColor: "transparent",
  block: false,
  isWrap: "nowrap",
  borderType: "solid",
  borderColor: "line-color-100",
};

const StyledView = styled.div<ViewProps>`
  position: relative;
  display: flex !important;
  flex-direction: ${(p) => p.direction} !important;
  justify-content: ${(p) => p.justify} !important;
  align-items: ${(p) => p.align} !important;
  gap: ${(p) => p.spacing}px !important;
  cursor: ${(p) => p.cursor} !important;
  background: ${(p) => p.bgColor && `var(--${p.bgColor}) !important`};
  background: transparent;
  color: inherit;
  flex-wrap: ${(p) => p.isWrap};

  ${(p) => p.flex && p.flex > 0 && `flex: ${p.flex} !important`};
  ${(p) => p.w && `max-width: ${p.w}px !important`};
  ${(p) => p.h && `height: ${p.h}px !important`};
  ${(p) => p.h === "auto" && `height: auto !important`};
  ${(p) => p.minW && `min-width: ${p.minW}px !important`};
  ${(p) => p.flexBasis && `flex-basis: ${p.flexBasis}px !important`};
  ${(p) => p.block && `width: 100% !important; max-width: 100% !important`};

  ${(p) => p.shadow === "xs" && "box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.16);"};
  ${(p) =>
    p.shadow === "sm" && "box-shadow: 0px 2px 6px rgba(212, 223, 255, 0.5);"};
  ${(p) =>
    p.shadow === "md" && "box-shadow: 0px 6px 10px rgba(212, 223, 255, 0.5)"};
  ${(p) =>
    p.shadow === "lg" && "box-shadow: 0px 8px 16px rgba(212, 223, 255, 0.5)"};
  ${(p) =>
    p.shadow === "xl" && "box-shadow: 0px 12px 20px rgba(212, 223, 255, 0.5)"};
  ${(p) =>
    p.shadow === "2xl" && "box-shadow: 0px 22px 34px rgba(61, 70, 102, 0.3)"};

  ${(p) => {
    const setRadius = (text: RadiusUnion): string => {
      const radius = text.replace(/(r|rtl|rtr|rt|rbl|rbr|rb)-.*/, "$1");
      const hasRadiusPx = /-px/.test(text);
      const radiusRegex = /(r|rtl|rtr|rt|rbl|rbr|rb)+-(\d+)/;
      let value;
      let result = "";

      if (hasRadiusPx) value = "1px";
      else value = Number(text.replace(radiusRegex, "$2")) + "px";

      if (radius === "r")
        result += `border-radius: ${value} !important; overflow: hidden !important;`;
      else if (radius === "rtl")
        result += `border-top-left-radius: ${value} !important; overflow: hidden !important;`;
      else if (radius === "rtr")
        result += `border-top-right-radius: ${value} !important; overflow: hidden !important;`;
      else if (radius === "rbl")
        result += `border-bottom-left-radius:  ${value} !important; overflow: hidden !important;`;
      else if (radius === "rbr")
        result += `border-bottom-right-radius: ${value} !important; overflow: hidden !important;`;
      return result;
    };

    if (p.radius) {
      if (typeof p.radius === "string") {
        return setRadius(p.radius);
      } else {
        return (p.radius as RadiusUnion[]).reduce((acc, curr: RadiusUnion) => {
          acc += setRadius(curr);
          acc += ";";
          return acc;
        }, "");
      }
    } else return undefined;
  }}

  ${(p) => {
    const setBorder = (text: BorderUnion): string => {
      const border = text.replace(/(b|bx|by|bt|bb|bl|br)-.*/, "$1");
      const hasBorderPx = /-px/.test(text);
      const borderRegex = /(b|bx|by|bt|bb|bl|br)+-(\d+)/;
      let value;
      let result = "";

      if (hasBorderPx) value = `1px ${p.borderType} ${p.borderColor}`;
      else value = Number(text.replace(borderRegex, "$2")) + "px";

      if (border === "b")
        result += `border: ${value} ${p.borderType} var(--${p.borderColor}) !important`;
      else if (border === "bx")
        result += `border-left: ${value} ${p.borderType} var(--${p.borderColor}) !important; border-right: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else if (border === "by")
        result += `border-top: ${value} ${p.borderType} var(--${p.borderColor}) !important; border-bottom: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else if (border === "bt")
        result += `border-top: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else if (border === "bb")
        result += `border-bottom: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else if (border === "br")
        result += `border-right: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else if (border === "bl")
        result += `border-left: ${value} ${p.borderType} var(--${p.borderColor}) !important;`;
      else result += ";";
      return result;
    };

    if (p.border) {
      if (typeof p.border === "string") {
        return setBorder(p.border);
      } else {
        return (p.border as BorderUnion[]).reduce((acc, curr: BorderUnion) => {
          acc += setBorder(curr);
          acc += ";";
          return acc;
        }, "");
      }
    } else return undefined;
  }}

  ${(p) => {
    const setMargin = (text: MarginSpacingUnion): string => {
      const margin = text.replace(/(m|mx|my|mt|mb|ml|mr)-.*/, "$1");
      const hasMarginPx = /-px/.test(text);
      const marginRegex = /(m|mx|my|mt|mb|ml|mr)+-(\d+)/;
      let value;
      let result = "";

      if (hasMarginPx) value = "1px";
      else value = 16 * (Number(text.replace(marginRegex, "$2")) / 4) + "px";

      if (margin === "m") result += `margin: ${value} !important`;
      else if (margin === "mx")
        result += `margin-left: ${value} !important; margin-right: ${value} !important;`;
      else if (margin === "my")
        result += `margin-top: ${value} !important; margin-bottom: ${value} !important;`;
      else if (margin === "mt") result += `margin-top: ${value} !important;`;
      else if (margin === "mb") result += `margin-bottom: ${value} !important;`;
      else if (margin === "ml") result += `margin-left: ${value} !important;`;
      else if (margin === "mr") result += `margin-right: ${value} !important;`;
      else result += ";";
      return result;
    };

    if (p.margin) {
      if (typeof p.margin === "string") {
        return setMargin(p.margin);
      } else {
        return (p.margin as MarginSpacingUnion[]).reduce(
          (acc, curr: MarginSpacingUnion) => {
            acc += setMargin(curr);
            acc += ";";
            return acc;
          },
          ""
        );
      }
    } else return undefined;
  }}

  ${(p) => {
    const setPadding = (text: PaddingSpacingUnion): string => {
      const padding = text.replace(/(p|px|py|pt|pb|pl|pr)-.*/, "$1");
      const hasPaddingPx = /-px/.test(text);
      const paddingRegex = /(p|px|py|pt|pb|pl|pr)+-(\d+)/;
      let value;
      let result = "";

      if (hasPaddingPx) value = "1px";
      else value = 16 * (Number(text.replace(paddingRegex, "$2")) / 4) + "px";

      if (padding === "p") result += `padding: ${value} !important`;
      else if (padding === "px")
        result += `padding-left: ${value} !important; padding-right: ${value} !important;`;
      else if (padding === "py")
        result += `padding-top: ${value} !important; padding-bottom: ${value} !important;`;
      else if (padding === "pt") result += `padding-top: ${value} !important`;
      else if (padding === "pb")
        result += `padding-bottom: ${value} !important`;
      else if (padding === "pl") result += `padding-left: ${value} !important`;
      else if (padding === "pr") result += `padding-right: ${value} !important`;
      else result += "";
      return result;
    };

    if (p.padding) {
      if (typeof p.padding === "string") {
        return setPadding(p.padding);
      } else {
        return p.padding.reduce((acc, curr: PaddingSpacingUnion) => {
          acc += setPadding(curr);
          acc += ";";
          return acc;
        }, "");
      }
    } else return undefined;
  }}
`;

import styled, { css } from "styled-components";
import { AllColorUnion } from "../@types/colors";
import {
  MarginSpacingUnion,
  PaddingSpacingUnion,
  SpacingProps,
} from "../@types/spacing";
import { TextAlignUnion, TextSizeUnion, TextWeightUnion } from "../@types/text";

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    SpacingProps {
  flex?: number;
  basis?: number;
  color?: AllColorUnion;
  size?: TextSizeUnion;
  w?: number;
  h?: number;
  weight?: TextWeightUnion;
  align?: TextAlignUnion;
  block?: boolean;
  eclipse?: number;
  isWrap?: boolean;
  cursor?: string;
  underline?: boolean;
  children?: React.ReactNode;
  letterSpacing?: number;
}

export const Text: React.FC<TextProps> = ({ children, ...props }) => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;

Text.defaultProps = {
  size: "md",
  weight: "regular",
  align: "left",
};

const FONT_SIZE_XL = css({
  fontSize: "16px !important",
  lineHeight: "24px !important",
});
const FONT_SIZE_LG = css({
  fontSize: "14px !important",
  lineHeight: "20px !important",
});
const FONT_SIZE_MD = css({
  fontSize: "12px !important",
  lineHeight: "20px !important",
});
const FONT_SIZE_SM = css({
  fontSize: "10px !important",
  lineHeight: "16px !important",
});

const FONT_WEIGHT_REGULAR = css({ fontWeight: 400 });
const FONT_WEIGHT_MEDIUM = css({ fontWeight: 500 });
const FONT_WEIGHT_BOLD = css({ fontWeight: 700 });

const StyledText = styled.div<TextProps>`
  display: ${(p) => (p.block ? "block" : "inline-block")};
  ${(p) => p.flex && `flex: ${p.flex}`};
  ${(p) => p.basis && `flex-basis: ${p.basis}px`};
  ${(p) => p.w && `width: ${p.w}px`};
  ${(p) => p.block && `width: 100%`};
  text-align: ${(p) => p.align} !important;
  ${(p) => p.color && `color: var(--${p.color})`};
  ${(p) => p.cursor && `cursor: ${p.cursor}`};
  ${(p) => p.underline && "text-decoration: underline"};
  ${(p) => p.letterSpacing && `letter-spacing: ${p.letterSpacing}px`};

  ${(p) => {
    if (p.size === "xl") return FONT_SIZE_XL;
    else if (p.size === "lg") return FONT_SIZE_LG;
    else if (p.size === "sm") return FONT_SIZE_SM;
    else return FONT_SIZE_MD;
  }}

  ${(p) => {
    if (p.weight === "bold") return FONT_WEIGHT_BOLD;
    else if (p.weight === "medium") return FONT_WEIGHT_MEDIUM;
    else return FONT_WEIGHT_REGULAR;
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
      else result += "";
      return result;
    };

    if (p.margin) {
      if (typeof p.margin === "string") {
        return setMargin(p.margin);
      } else {
        return (p.margin as MarginSpacingUnion[]).reduce(
          (acc, curr: MarginSpacingUnion) => {
            acc += setMargin(curr);
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
      else if (padding === "pt") result += `padding-top: ${value} !important;`;
      else if (padding === "pb")
        result += `padding-bottom: ${value} !important;`;
      else if (padding === "pl") result += `padding-left: ${value} !important;`;
      else if (padding === "pr")
        result += `padding-right: ${value} !important;`;
      else result += "";
      return result;
    };

    if (p.padding) {
      if (typeof p.padding === "string") {
        return setPadding(p.padding);
      } else {
        return p.padding.reduce((acc, curr: PaddingSpacingUnion) => {
          acc += setPadding(curr);
          return acc;
        }, "");
      }
    } else return undefined;
  }};

  ${(p) =>
    p.eclipse &&
    `
      display: -webkit-box !important;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: ${p.eclipse};
      -webkit-box-orient: vertical;
    `}
  ${(p) => p.isWrap && `word-break: break-word;`}
`;

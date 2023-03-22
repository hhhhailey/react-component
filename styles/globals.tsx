import { createGlobalStyle } from "styled-components";

export const theme = {
  brand: {
    100: "#69548f",
    200: "#61498c",
    300: "#3F1294",
    400: "#2c017d",
    500: "#1d034f",
  },
  error: {
    100: "#ff5242",
    200: "#f03524",
    300: "#f51905",
  },
  white: "#fff",
  black: "#222",
};

export type ThemeProps = {
  theme: typeof theme;
};

const GlobalStyle = createGlobalStyle<ThemeProps>`
* {
    box-sizing: border-box;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    color: ${({ theme }) => theme.black};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    color: inherit;
    cursor: pointer;
  }
  img {
    max-width: 100%;
    height: 100%;
    vertical-align: top;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  
  
`;

export default GlobalStyle;

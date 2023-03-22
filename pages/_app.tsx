import Modals from "@/ui/modal/setting/Modals";
import ModalProvider from "@/ui/modal/setting/Provider";
import type { AppProps } from "next/app";
import { ThemeProvider, DefaultTheme } from "styled-components";
import GlobalStyle, { theme } from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalProvider>
          <Component {...pageProps} />
          <Modals />
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}

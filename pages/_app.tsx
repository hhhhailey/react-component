import Modals from "@/components/modal/Modals";
import ModalProvider from "@/components/modal/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// require("../styles/variables.less");

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
      <Modals />
    </ModalProvider>
  );
}

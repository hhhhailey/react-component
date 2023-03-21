import Modals from "@/ui/modal/setting/Modals";
import ModalProvider from "@/ui/modal/setting/Provider";
import "@/styles/globals.scss";
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

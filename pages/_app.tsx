import "@/styles/globals.css";
import type { AppProps } from "next/app";
// require("../styles/variables.less");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

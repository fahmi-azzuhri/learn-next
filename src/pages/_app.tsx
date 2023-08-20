import type { AppProps } from "next/app";
import "@/styles/style.css";
import Frame from "@/components/layout/Frame";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Frame>
      <Component {...pageProps} />
    </Frame>
  );
}

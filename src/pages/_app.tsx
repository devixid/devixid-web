import type { AppProps } from "next/app";

import { NavigationBar } from "@/components";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />

      <Component {...pageProps} />
    </>
  );
}

import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

import { NavigationBar } from "@/components";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Devix.id - your best website development partner"
        description="Devix.id is a team of young website developers based in Indonesia since 2020. We are ready to work with you to build your dream website. Contact us for more information and feel free to talk to us about your ideas."
        openGraph={{
          title: "Devix.id - your best website development partner",
          description:
            "Devix.id is a team of young website developers based in Indonesia since 2020. We are ready to work with you to build your dream website. Contact us for more information and feel free to talk to us about your ideas."
        }}
      />

      <NavigationBar />
      <Component {...pageProps} />
    </>
  );
}

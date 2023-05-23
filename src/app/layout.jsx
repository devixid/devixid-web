import { Inter } from "next/font/google";
import { node } from "prop-types";

import { NavigationBar } from "@/components";
import clsx from "clsx";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devix.id - your best website development partner",
  description:
    "Devix.id is a team of young website developers based in Indonesia since 2020. We are ready to work with you to build your dream website. Contact us for more information and feel free to talk to us about your ideas."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />

        <main className={clsx("p-0 lg:pt-24", "min-h-screen")}>{children}</main>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: node
};

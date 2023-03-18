import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MouseEvent } from "react";
import { useState } from "react";

import DevixLogo from "@/assets/devix-logo.svg";
import Line from "@/icons/ic-line.svg";

import { Button } from "./atoms";

export default function NavigationBar() {
  const [openNavigationMenu, setOpenNavigationMenu] = useState<boolean>(false);

  const router = useRouter();

  const baseNavMenuTogglerIcon = clsx(
    "h-0.5 w-8",
    "bg-headline",
    "absolute",
    "transition-all duration-300 ease-in-out"
  );

  const navigations = [
    {
      path: "/",
      label: "Home"
    },
    {
      path: "/portfolio",
      label: "Portfolio"
    },
    {
      path: "/about",
      label: "About Us"
    },
    {
      path: "/services",
      label: "Services"
    },
    {
      path: "/contact",
      label: "Contact"
    }
  ];

  /**
   * Function to handle the onClick menu
   * @param event HTML Anchor Event
   */
  const handleOnClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => {
    const { href } = event.currentTarget;

    setOpenNavigationMenu(false);
    router.push(href);
  };

  return (
    <div className={clsx("min-h-[80px] w-full", "fixed top-0 left-0 z-40", "bg-white")}>
      <div
        className={clsx(
          "container mx-auto md:h-[90px] lg:h-[100px]",
          "p-4",
          "flex flex-row items-center justify-between"
        )}
      >
        {/* Logo */}
        <div className="md:w-28">
          <DevixLogo className={clsx("h-12 w-12", "text-headline")} />
        </div>

        {/* Navigation menu */}
        <div
          className={clsx(
            "transition-[height] duration-500 ease-in-out",
            "w-full overflow-hidden bg-slate-50 md:w-fit md:overflow-auto md:bg-transparent",
            "fixed top-0 left-0 -z-[5] md:static md:z-0",
            openNavigationMenu ? clsx("h-[100vh] delay-300 md:h-auto") : "h-0 md:h-auto"
          )}
        >
          <nav
            className={clsx(
              "container mx-auto h-screen p-4 md:h-auto md:w-auto",
              "flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-6",
              "flex items-center justify-center"
            )}
          >
            {navigations.map(({ path, label }, index) => {
              const key = index.toString();
              const isSelected = router.pathname === path;

              return (
                <Link
                  href={path}
                  title={label}
                  key={key}
                  className={clsx("text-lg font-semibold", "relative inline-block", isSelected && "text-headline")}
                  onClick={handleOnClick}
                >
                  {label}
                  {isSelected && (
                    <Line
                      className={clsx("h-auto w-full max-w-[44px]", "absolute -bottom-1 right-0 z-10 ", "text-body")}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Buttons */}
        <div className="flex flex-row gap-4 md:w-28 md:justify-end">
          <Button variant="outline-default">Let&rsquo;s talk!</Button>

          <button
            type="button"
            title="Navigation Menu Toggler"
            className={clsx("relative h-11 w-11 md:invisible md:hidden", "flex flex-col items-center justify-center")}
            onClick={() => setOpenNavigationMenu((state) => !state)}
          >
            <div
              id="icon"
              className={clsx(
                baseNavMenuTogglerIcon,
                openNavigationMenu ? "translate-y-0 rotate-45 delay-300" : "translate-y-2.5"
              )}
            />
            <div id="icon" className={clsx(baseNavMenuTogglerIcon, openNavigationMenu ? "w-0" : "delay-150")} />
            <div
              id="icon"
              className={clsx(
                baseNavMenuTogglerIcon,
                openNavigationMenu ? "translate-y-0 -rotate-45 delay-300" : "-translate-y-2.5"
              )}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

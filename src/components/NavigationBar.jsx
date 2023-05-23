"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { NAVIGATION_BAR_LINKS } from "@/constants/navigation";
import { useWindow } from "@/hooks";

const navbarTogglerIcon = clsx("w-8 h-[1px] absolute", "border-0", "bg-black");

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [navContainerHeight, setNavContainerHeight] = useState(0);

  const navContainerRef = useRef(null);
  const { paneSize } = useWindow();

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  useEffect(() => {
    if (navContainerRef.current) {
      setNavContainerHeight(navContainerRef.current.scrollHeight || 0);
    }
  }, []);

  useEffect(() => {
    if (navContainerRef.current) {
      setNavContainerHeight(navContainerRef.current.scrollHeight || 0);
    }
  }, [paneSize]);

  return (
    <div
      className={clsx(
        "static z-40 lg:fixed",
        "w-full",
        "border-b border-b-gray-200",
        "bg-white lg:bg-opacity-50 lg:backdrop-blur-md"
      )}
    >
      <div className={clsx("container p-4 lg:py-5", "flex flex-row flex-wrap items-center justify-between")}>
        <Link href="/" className={clsx("h-12 w-12 lg:w-32", "flex items-center")}>
          <Image
            src="/logo.svg"
            alt="Logo"
            title="Logo"
            height={45}
            width={45}
            className={clsx("h-12 w-12 lg:h-14 lg:w-14")}
          />
        </Link>

        <button
          type="button"
          className={clsx("relative h-11 w-11", "flex flex-col items-center justify-center", "lg:hidden")}
          onClick={handleToggle}
          title="Open Navigation Menu"
        >
          <div
            className={clsx(
              navbarTogglerIcon,
              "transition-all duration-300",
              isOpen ? "translate-y-0 rotate-[135deg]" : "translate-y-1.5"
            )}
          ></div>
          <div
            className={clsx(
              navbarTogglerIcon,
              "transition-all duration-300",
              isOpen ? "translate-y-0 rotate-[225deg]" : "-translate-y-1.5"
            )}
          ></div>
        </button>

        <nav
          className={clsx(
            "relative w-full overflow-hidden lg:w-auto",
            "h-0 lg:h-auto",
            "transition-[height] duration-300"
          )}
          style={{
            height: isOpen ? `${navContainerHeight}px` : undefined
          }}
          aria-hidden={!isOpen}
        >
          <ul
            className={clsx(
              "flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-6",
              "py-2",
              "font-medium lg:whitespace-nowrap"
            )}
            ref={navContainerRef}
          >
            {NAVIGATION_BAR_LINKS.map(({ title, href, disabled }, index) => {
              const key = index.toString();

              return (
                <li key={key}>
                  {disabled ? (
                    <span className="cursor-not-allowed text-gray-300" title="disabled">
                      {title}
                    </span>
                  ) : (
                    <Link className={clsx("hover:text-black focus:text-black")} href={href} title={`go to "${title}"`}>
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}

            <li className="w-full lg:hidden">
              <button type="button" className={clsx("btn btn-full btn-black")}>
                Let&rsquo;s talk
              </button>
            </li>
          </ul>
        </nav>

        <button type="button" className={clsx("btn btn-black", "hidden w-32 lg:block")}>
          Let&rsquo;s talk
        </button>
      </div>
    </div>
  );
}

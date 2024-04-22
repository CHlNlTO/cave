"use client";

import Link from "next/link";
import { CaveLogo } from "@/assets/cave-logo";
import ThemeSwitch from "@/components/themeSwitch";

export function Navbar() {

  return (
    <header className="z-50 fixed top-0 w-full border-b-[0.5px] backdrop-blur-sm dark:backdrop-blur-sm dark:text-white bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
      <section className="container flex h-16 items-center max-w-[88rem] mx-auto justify-center border-b-[.1px] border-gray-900 border-opacity-5 ">
          <Link className="text-sm font-extrabold flex items-center justify-center ml-6 gap-2" href="/">
            <CaveLogo className="w-12 h-12"/>
            <span className="hidden sm:block text-2xl text-gray-800 dark:text-white">Cave</span>
            <span className="sr-only">Cave</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 mr-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="#">
              Portfolio
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-gray-800 dark:text-white" href="#">
              Contact
            </Link>
            <div className="flex items-center justify-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <ThemeSwitch />
            </div>
          </nav>
        </section>
    </header>
  )
}
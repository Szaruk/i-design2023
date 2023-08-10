"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Strona główna", href: "/" },
  { name: "Konferencja", href: "/" },
  { name: "Partnerzy", href: "/" },
  { name: "Poprzednia edycja", href: "/" },
  { name: "Strefa wiedzy", href: "/" },
  { name: "O nas", href: "/about_us" },
  { name: "Kontakt", href: "/contact" },
  { name: "Kup bilet", href: "/" },
];

export default function Nav() {
  let [isChecked, setChecked] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const mainPage = document.querySelector("#main-page");
    pathname !== "/"
      ? mainPage?.classList.replace("hidden", "flex")
      : mainPage?.classList.replace("flex", "hidden");
    const nav = document.querySelector("nav");
    const hamburgerElement = document.querySelector("#Hamburger");
    const mobileNav = document.querySelector("#mobile-nav");
    hamburgerElement?.addEventListener("click", () => {
      if (isChecked == false) {
        nav?.classList.replace("z-40", "z-50");
        mobileNav?.classList.remove("-translate-x-full");
        //Element up
        hamburgerElement.children[0].classList.replace(
          "translate-y-0",
          "translate-y-2"
        );
        hamburgerElement.children[0].classList.replace("rotate-0", "rotate-45");
        //Element middle
        hamburgerElement.children[1].classList.replace(
          "opacity-1",
          "opacity-0"
        );
        //Element down
        hamburgerElement.children[2].classList.replace(
          "-translate-y-0",
          "-translate-y-2"
        );
        hamburgerElement.children[2].classList.replace(
          "-rotate-0",
          "-rotate-45"
        );
      } else {
        nav?.classList.replace("z-50", "z-40");
        //Element up
        mobileNav?.classList.add("-translate-x-full");
        hamburgerElement.children[0].classList.replace(
          "translate-y-2",
          "translate-y-0"
        );
        hamburgerElement.children[0].classList.replace("rotate-45", "rotate-0");
        //Element middle
        hamburgerElement.children[1].classList.replace(
          "opacity-0",
          "opacity-1"
        );
        //Element down
        hamburgerElement.children[2].classList.replace(
          "-translate-y-2",
          "-translate-y-0"
        );
        hamburgerElement.children[2].classList.replace(
          "-rotate-45",
          "-rotate-0"
        );
      }
    });
  });
  return (
    <nav className=" xl:px-14 xl:py-8 flex justify-between items-center  fixed w-full sm:px-6 sm:py-8 bg-NavBg z-40">
      <Image src="/logo.svg" width={106} height={18} alt="I-design logo" />
      <ul className="screen1346:flex items-center font-normal space-x-1 text-base sm:hidden">
        <li className="group/link flex" id="main-page">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10 font-semibold hover:text-Button">
            Strona Główna
          </Link>
        </li>
        <li className="group/link flex">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10 hover:text-Button">
            Konferencja
          </Link>
        </li>
        <li className="group/link flex">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Poprzednie edycje
          </Link>
        </li>
        <li className="group/link flex">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Strefa wiedzy
          </Link>
        </li>
        <li className="group/link flex">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/about_us" className="mr-10  hover:text-Button">
            O nas
          </Link>
        </li>
        <li className="group/link flex">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/contact" className="mr-10  hover:text-Button">
            Kontakt
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="bg-Button text-white py-4 px-8 rounded-full"
          >
            Kup bilet
          </Link>
        </li>
      </ul>
      <ul
        id="mobile-nav"
        className="xl:hidden sm:flex fixed left-0 top-24 mt-1 flex-col w-full h-full font-semibold text-xl pl-3 -translate-x-full duration-300 ease-in-out bg-NavBg"
      >
        <li className="group/link flex w-max mb-14 mt-20">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="hover:text-Button">
            Konferencja
          </Link>
        </li>
        <li className="group/link flex w-max mb-14">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Partnerzy
          </Link>
        </li>
        <li className="group/link flex w-max mb-14">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Poprzednie edycje
          </Link>
        </li>
        <li className="group/link flex w-max mb-14">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Strefa wiedzy
          </Link>
        </li>
        <li className="group/link flex w-max mb-14">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            O nas
          </Link>
        </li>
        <li className="group/link flex w-max mb-12">
          <Image
            src="/dot.svg"
            width={6}
            height={6}
            alt="dot"
            className="mr-2 invisible group-hover/link:visible "
          />
          <Link href="/" className="mr-10  hover:text-Button">
            Kontakt
          </Link>
        </li>
        <li className="mb-10 w-full flex justify-center">
          <Link
            href="/"
            className="bg-Button text-white py-4 px-8 rounded-full w-full text-center mx-4"
          >
            Kup bilet
          </Link>
        </li>
      </ul>
      <span
        id="Hamburger"
        className="screen1346:hidden sm:flex flex-col justify-center p-2 hover:cursor-pointer"
        onClick={() => {
          setChecked(!isChecked);
        }}
      >
        <span className="w-10 h-1 bg-Button mb-1 rounded-full translate-y-0 rotate-0 ease-in duration-300"></span>
        <span className="w-10 h-1 bg-Button mb-1 rounded-full opacity-1 ease-in duration-300"></span>
        <span className="w-10 h-1 bg-Button rounded-full -translate-y-0 -rotate-0 ease-in duration-300"></span>
      </span>
    </nav>
  );
}

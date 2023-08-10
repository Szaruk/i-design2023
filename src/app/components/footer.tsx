"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
const footerNav = [
  { id: 0, name: "Partnerzy", href: "#" },
  { id: 1, name: "Strefa wiedzy", href: "#" },
  { id: 2, name: "Poprzednia edycja", href: "#" },
  { id: 3, name: "O nas", href: "#" },
  { id: 4, name: "Kontakt", href: "#" },
];

const docsNav = [
  {
    id: 0,
    name: "Regulamin",
    href: "./docs/zostan_wolontariuszem/zostan_wolontariuszem.png",
  },
  {
    id: 1,
    name: "Polityka prywatności",
    href: "./docs/polityka_prywatnosci/POLITYKA_PRYWATNOSCI_OMH.pdf",
  },
  { id: 3, name: "Statut", href: "./docs/statut/statut_idesign.pdf" },
];

const socialIcon = [
  { id: 0, name: "./linkedin-icon.svg", href: "#", alt: "linkedin social" },
  { id: 1, name: "./instagram-icon.svg", href: "#", alt: "instagram social" },
  { id: 2, name: "./facebook-icon.svg", href: "#", alt: "facebook social" },
  { id: 3, name: "./discord-icon.svg", href: "#", alt: "discord social" },
  { id: 4, name: "./youtube-icon.svg", href: "#", alt: "youtube social" },
];

const Footer = () => {
  const GetCurrentYear = () => {
    const date = new Date();
    let dateYear = date.getFullYear();
    return dateYear;
  };

  useEffect(() => {
    const arrowUp = document.querySelector("#arrow-up");
    arrowUp?.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <footer className="bg-FooterBg xl:pt-16 pb-10 z-40 relative flex flex-col sm:pt-24">
      <div className="flex justify-between xl:flex-row sm:flex-col">
        <div className="flex flex-col xl:px-14 sm:px-4">
          <Image
            src="./footer-logo.svg"
            width={134}
            height={22}
            alt="I-design logo footer"
          />
          <ul className="text-FooterColor font-normal text-xl mt-8 leading-8">
            <li>Stowarzyszenie I Design</li>
            <li>NIP: 894-316-75-68</li>
            <li>ul. Drzewieckiego 10/1, 54-129</li>
            <li>Wrocław</li>
          </ul>
        </div>
        <div className="flex justify-between xl:px-14 xl:flex-row xl:mt-0 sm:flex-col sm:border-b xl:border-b-0 sm:mt-24 sm:px-4">
          <ul className="mr-28 text">
            <li className="text-FooterColor mb-8 font-normal w-max pl-4 xl:-ml-0 sm:-ml-1 ">
              Menu
            </li>
            {footerNav.map((item) => (
              <li
                key={item.id}
                className="text-FooterColor mb-8 font-semibold flex  w-max group/footerLink "
              >
                <Image
                  src="/footer_dot.svg"
                  width={6}
                  height={6}
                  alt="dot"
                  className="mr-2 invisible group-hover/footerLink:visible "
                />
                <Link className="hover:underline" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            <ul>
              <li className="text-FooterColor mb-8 font-normal xl:mt-0 xl:pl-0 sm:mt-16 sm:pl-4">
                Dokumenty
              </li>
              {docsNav.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex group/docLink items-center mb-8"
                >
                  <Image
                    src="/footer_dot.svg"
                    width={6}
                    height={6}
                    alt="dot"
                    className="mr-2 invisible group-hover/docLink:visible "
                  />
                  <li className="text-FooterColor font-semibold  xl:pl-0 sm:pl-4 hover:underline">
                    {item.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <Image
            className="self-start ml-20 hover:cursor-pointer xl:relative sm:absolute sl:right-0 xl:-top-0 sm:right-4 sm:-top-0 xl:mt-0 sm:mt-4"
            src="./footer-arrow.svg"
            width={50}
            height={50}
            alt="footer arrow"
            id="arrow-up"
          />
        </div>
      </div>
      <div className="flex mt-24 xl:pl-14 xl:pb-28 xl:border-b xl:relative sm:absolute sm:top-52 xl:top-0 sm:border-b-0 xl:px-0 sm:px-4">
        {socialIcon.map((item) => (
          <Link key={item.id} href={item.href}>
            <Image
              className="mr-6"
              src={item.name}
              width={44}
              height={44}
              alt={item.alt}
            />
          </Link>
        ))}
      </div>

      <div className="xl:flex justify-between">
        <h3 className="text-FooterColor font-normal text-base leading-6 mt-10 px-14 sm:px-8">
          Implemented by BrainForge IT Software & Consulting
        </h3>
        <h3 className="text-FooterColor font-normal text-base leading-6 mt-10 px-14 sm:px-8 uppercase">
          &copy; {GetCurrentYear()} i design
        </h3>
      </div>
    </footer>
  );
};

export default Footer;

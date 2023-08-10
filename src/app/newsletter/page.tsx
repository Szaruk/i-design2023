"use client";
import Image from "next/image";

import { FormEvent, useState } from "react";

import PostNewsletter from "./directusNewsletter";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isChecked, setCheck] = useState(false);
  const submitFormData = async (e: FormEvent<HTMLFormElement>) => {
    const nameInput = document.querySelector("#name-input");
    const textError = document.querySelector("#text-error");
    const emailError = document.querySelector("#email-error");
    const emailInput = document.querySelector("#email-input");
    const successInfo = document.querySelector("#success-info");
    const checkBox = document.querySelector("#accept-check");
    const isGood = {
      name: false,
      email: false,
    };
    e.preventDefault();
    nameInput?.addEventListener("focus", () => {
      nameInput?.classList.replace("border-red-600", "border-gray/400");
      textError?.classList.replace("block", "hidden");
    });
    emailInput?.addEventListener("focus", () => {
      emailError?.classList.replace("block", "hidden");
      emailInput?.classList.replace("border-red-600", "border-gray/400");
    });
    checkBox?.addEventListener("click", () => {
      checkBox?.classList.replace("border-red-600", "border-gray/400");
    });
    if (name.length < 3 || /^[A-Za-z]*$/.test(name) !== true) {
      nameInput?.classList.replace("border-gray/400", "border-red-600");
      textError?.classList.replace("hidden", "block");
    } else {
      isGood.name = true;
    }
    if (email.length <= 0) {
      emailError?.classList.replace("hidden", "block");
      emailInput?.classList.replace("border-gray/400", "border-red-600");
    } else {
      isGood.email = true;
    }
    if (isChecked === false) {
      checkBox?.classList.replace("border-gray/400", "border-red-600");
    }
    if (isGood.name === true && isGood.email === true && isChecked === true) {
      PostNewsletter(name, email, isChecked)
        .then((response) => {
          successInfo?.classList.replace("translate-y-16", "translate-y-0");
          setName("");
          setEmail("");
          if (checkBox instanceof HTMLInputElement) {
            checkBox.checked = false;
          }
          setCheck(false);
        })
        .catch((error) => {
          alert(
            "Przepraszamy, coś poszło nie tak, skontaktuj się z nami na kontakt@i-design.com.pl"
          );
        });
    }
  };

  return (
    <div className="pt-44 screen603:pl-0">
      <div className="screen603:ml-32 sm:ml-4 mb-56 sm:mr-6 screen740:mr-0">
        <h1 className="uppercase text-base text-gray/600">#newsletter</h1>
        <h2 className="font-semibold text-size-34 text-formTitleColor mt-1">
          Raz w miesiącu będziemy wysyłać Ci dawkę wiedzy!
        </h2>
        <h3 className="font-semibold text-gray/900 mt-2 screen822:w-w676 sm:w-full text-xl">
          W newsletterze będziemy dzielić się wiedzą, nadchodzącymi
          wydarzeniami, które organizujemy oraz poleceniami z sieci.
        </h3>
      </div>
      <div className="bg-blue/800 flex screen1309:flex-row sm:flex-col-reverse justify-around screen1309:items-start sm:items-center screen740:px-p-60 sm:px-4 screen808:before:w-w744 before:h-h744 screen740:before:-top-28 sm:before:-top-36 before:blur-3xl before:-z-10 before:bg-blue/100 screen525:before:-mt-0 before:absolute relative pb-20 sm:mt-m-608 screen1309:mt-0 sm:before:w-full">
        <form
          onSubmit={submitFormData}
          className="screen1309:mr-16 sm:pl-4 sm:pr-p-34 screen740:pl-16 screen740:pr-16 sm:mr-0 sm:px-0 pt-16 pb-74 bg-gray/100 screen740:w-w664 sm:w-full screen1309:-mt-36 sm:mt-6 rounded-lg flex flex-col relative overflow-hidden"
        >
          <p
            id="success-info"
            className="absolute left-0 bottom-0 p-5 text-center w-full bg-green-400 text-white font-semibold duration-300 ease-in translate-y-16"
          >
            Zostałeś zapisany do newslettera!
          </p>
          <p className="text-base font-semibold text-black">
            Podaj swoje imię oraz e-mail, na który otrzymasz od nas prezent -
            webinar Piotra Wojciechowskiego o Mapowaniu podróży klienta w
            wielokanałowym świecie.
          </p>
          <label className="mt-m-20 mb-2 text-base/black100 font-medium text-base">
            Twoje imię
          </label>
          <input
            id="name-input"
            type="text"
            className=" bg-White border-gray/400 border px-6 py-4 rounded-lg"
            placeholder="Sławomir"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p className="py-1 text-red-600 text-sm hidden" id="text-error">
            *Pole imię wymagane i musi posiadać conajmniej 3 znaki
          </p>
          <label className="mt-8 mb-2 text-base/black100 font-medium text-base">
            Twój e-mail
          </label>
          <input
            type="email"
            placeholder="sławomir@gmail.com"
            id="email-input"
            className=" border-gray/400 border px-6 py-4 rounded-lg"
            name="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="py-1 text-red-600 text-sm hidden " id="email-error">
            *Pole email jest wymagane
          </p>
          <div className="flex items-start mt-m-38">
            <input
              type="checkbox"
              name="accesCheck"
              id="accept-check"
              onChange={() => setCheck(!isChecked)}
              className="mt-1 appearance-none p-2 border hover:cursor-pointer h-5 w-5 border-gray/400 rounded-sm bg-gray/200 before:bg-amaranth/500 before:w-2 before:h-1 before:left-0 before:top-2 before:rotate-45 before:absolute after:bg-amaranth/500 after:w-3 after:h-1 after:left-1 after:top-2 after:-rotate-45 after:absolute relative before:invisible checked:before:visible after:invisible checked:after:visible "
            />
            <p className="ml-3 mb-m-26">
              Wyrażam zgodę na otrzymywanie na podany adres e-mail informacji
              handlowych, w tym szczególności informacji o organizowanych przez
              Stowarzyszenie I DESIGN wydarzeniach czy usługach i artykułach
              blogowych. Wiem, że w każdej chwili mogę bez podawania przyczyny
              zrezygnować z subskrypcji newslettera. Administratorem danych
              osobowych jest Stowarzyszenie I DESIGN, z siedzibą przy ulicy
              Stefana Drzewieckiego 10/1, 54-129 Wrocław, numer NIP: 8943167568;
              numer Regon 388876728. Dane osobowe przetwarzane są w celu wysyłki
              newslettera na podstawie uzasadnionego interesu administratora
              (zgodnie z art. 6 ust. 1 lit. F RODO) na zasadach określonych w
              Regulaminie i Polityce Prywatności.
            </p>
          </div>
          <button
            type="submit"
            className="mb-m-74 sm:self-center screen740:self-start bg-amaranth/500 px-8 py-4 text-white font-semibold text-base rounded-full w-w273 test"
          >
            Zapisuję się do newslettera
          </button>
          <span className="invisible test:visible">sdsdsd</span>
        </form>
        <picture className="px-10 py-6 bg-blue/600 rounded-lg screen1309:-mt-36 sm:mt-m-400 relative">
          <Image
            src="/newsletter-circle.svg"
            width={150}
            height={150}
            alt="newsletter-circle"
            className="absolute right-3 -top-16 sm:hidden screen740:block"
          ></Image>
          <Image
            src="/newsletter-circle.svg"
            width={90}
            height={90}
            alt="newsletter-circle"
            className="absolute right-4 -top-10 sm:block screen740:hidden"
          ></Image>
          <Image
            src="/newsletter-photo.svg"
            width={508}
            height={292}
            alt="newsletter-photo"
            className="rounded-lg"
          ></Image>
        </picture>
      </div>
    </div>
  );
}

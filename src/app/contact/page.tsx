"use client";
import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";

import PostContactForm from "./directusContact";
import ContactPerson from "./directusContactPerson";

export default function Contact() {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactAgreement, setContactAgreement] = useState(false);
  const [contactPerson, setcontactPerson] = useState<any[]>([]);

  useEffect(() => {
    ContactPerson()
      .then((res) => {
        setcontactPerson(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitContactForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const contactCheckbox = document.querySelector("#contact-checkbox");
    const contactNameInput = document.querySelector("#contact-name");
    const contactEmailInput = document.querySelector("#contact-email");
    const successInfo = document.querySelector("#success-info");
    const contactMessageInput = document.querySelector("#contact-message");
    const contactNameError = document.querySelector("#contact-name-error");
    const contactEmailError = document.querySelector("#contact-email-error");
    const contactMessageError = document.querySelector(
      "#contact-message-error"
    );

    contactNameInput?.addEventListener("focus", () => {
      contactNameInput.classList.replace("border-red-600", "border-gray/400");
      contactNameError?.classList.replace("block", "hidden");
    });
    contactEmailInput?.addEventListener("focus", () => {
      contactEmailError?.classList.replace("block", "hidden");
      contactEmailInput.classList.replace("border-red-600", "border-gray/400");
    });
    contactMessageInput?.addEventListener("focus", () => {
      contactMessageError?.classList.replace("block", "hidden");
      contactMessageInput.classList.replace(
        "border-red-600",
        "border-gray/400"
      );
    });
    contactCheckbox?.addEventListener("click", () => {
      contactCheckbox.classList.replace("border-red-600", "border-gray/400");
    });

    if (contactName.length < 3 || /^[A-Za-z]*$/.test(contactName) !== true) {
      contactNameInput?.classList.replace("border-gray/400", "border-red-600");
      contactNameError?.classList.replace("hidden", "block");
    }
    if (contactEmail.length <= 0) {
      contactEmailInput?.classList.replace("border-gray/400", "border-red-600");
      contactEmailError?.classList.replace("hidden", "block");
    }
    if (!contactMessage) {
      contactMessageError?.classList.replace("hidden", "block");
      contactMessageInput?.classList.replace(
        "border-gray/400",
        "border-red-600"
      );
    }
    if (contactAgreement !== true) {
      contactCheckbox?.classList.replace("border-gray/400", "border-red-600");
    } else {
      PostContactForm(
        contactName,
        contactEmail,
        contactMessage,
        contactAgreement
      )
        .then((response) => {
          successInfo?.classList.replace("translate-y-16", "translate-y-0");
          setContactName("");
          setContactEmail("");
          setContactMessage("");
          if (contactCheckbox instanceof HTMLInputElement) {
            contactCheckbox.checked = false;
          }
        })
        .catch((error) => {
          alert(
            "Przepraszamy, coś poszło nie tak, skontaktuj się z nami na kontakt@i-design.com.pl"
          );
        });
    }
  };

  return (
    <section className="flex flex-col pt-44">
      <div className="flex container mx-auto contactSection:justify-between contactSection:flex-row sm:flex-col sm:items-center contactSection:items-start contactSection:pl-16 sm:pl-4 contactSection:pr-20 sm:pr-1 mb-32">
        <span className="pl-4 mr-10 self-start border-l-4 border-BorderColor max-w-lg  flex flex-col justify-between">
          <h1 className="text-Button text-5xl font-semibold">
            Jesteś o jeden krok od kontaktu z nami.
          </h1>
          <p className="text-paragraphContactColot tracking-wide mt-4 font-normal leading-8 text-xl">
            Możesz skontaktować się bezpośrednio z Moniką lub Kasią albo użyć
            formularza poniżej. Wybór należy do Ciebie.
          </p>
        </span>
        {contactPerson.map((item) =>
          item.person_name == "Monika Drabczyńska" ? (
            <div className="flex flex-col items-start" key={item.id}>
              <picture className="sm:mt-12 contactSection:mt-0 pr-12 relative before:content-['Cześć!'] before:text-base before:font-semibold before:rounded-full before:absolute before:bg-formTitleColor before:text-white before:px-8 before:py-4 before:top-9 contactSection:before:-left-8 sm:before:left-44">
                <Image
                  className="rounded-full"
                  src={
                    "https://admin.i-design.com.pl/assets/" + item.person_photo
                  }
                  width={302}
                  height={302}
                  alt={item.person_name}
                ></Image>
              </picture>
              <ul className="flex flex-col items-left mt-8 ">
                <li className="text-BorderColor leading-7 font-semibold text-2xl ">
                  {item.person_name}
                </li>
                <li className="text-positionColor leading-6 text-lg italic font-normal mb-4">
                  {item.person_position}
                </li>
                <li className="text-contactInfoColor font-semibold leading-6 text-xl">
                  {item.person_phone_number}
                </li>
                <li className="text-contactInfoColor font-semibold leading-6 text-size-19">
                  {item.person_mail}
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex flex-col items-start" key={item.id}>
              <picture className="pr-12">
                <Image
                  className="rounded-full"
                  src={
                    "https://admin.i-design.com.pl/assets/" + item.person_photo
                  }
                  width={302}
                  height={302}
                  alt={item.person_name}
                ></Image>
              </picture>
              <ul className="flex flex-col items-left mt-8 ">
                <li className="text-BorderColor leading-7 font-semibold text-2xl ">
                  {item.person_name}
                </li>
                <li className="text-positionColor leading-6 text-lg italic font-normal mb-4">
                  {item.person_position}
                </li>
                <li className="text-contactInfoColor font-semibold leading-6 text-xl">
                  {item.person_phone_number}
                </li>
                <li className="text-contactInfoColor font-semibold leading-6 text-size-19">
                  {item.person_mail}
                </li>
              </ul>
            </div>
          )
        )}
      </div>
      <div className="border-t-4 border-Button pt-24 screen525:pl-16 screen525:pr-28 sm:pl-4 sm:pr-4 pb-20 bg-formBg mb-28">
        <div className="container mx-auto flex justify-between screenSM:flex-col screenXL:flex-row ">
          <div className="flex flex-col">
            <h2 className="text-blueSecond font-semibold leading-10 text-4xl max-w-xl">
              Nie znalazł*ś odpowiedzi na swoje pytanie?
            </h2>
            <p className="text-blackSecond font-normal text-xl mt-3 leading-8 tracking-wide max-w-2xl">
              Każdy z Teamu I DESIGN prócz wspierania działań I DESIGN wykonuje
              pracę na pełny etat, a weekendy stara się wykorzystać na
              naładowanie baterii i organizację kolejnej konferencji oraz
              wydarzeń towarzyszących na które tak czekasz. Prosimy więc o
              cierpliwość. Odpowiedź nadejdzie!
            </p>
          </div>
          <div className="screenSM:ml-4 screenXL:ml-0 screenSM:mt-28 screenXL:mt-0">
            <h2 className="font-semibold text-2xl text-formTitleColor leading-7 mb-8">
              Wyślij nam wiadomość za pomocą formularza
            </h2>
            <form
              className="flex flex-col relative overflow-hidden pb-20"
              onSubmit={submitContactForm}
            >
              <p
                id="success-info"
                className="absolute left-0 bottom-0 p-5 text-center w-full bg-green-400 text-white font-semibold duration-300 ease-in translate-y-16"
              >
                Wiadomość została wysłana!
              </p>
              <label className="font-medium text-base mb-2 text-labelColor">
                Twoje imię
              </label>
              <input
                type="text"
                name="name"
                id="contact-name"
                value={contactName}
                className="border rounded-lg px-6 py-4  border-gray/400 text-inputPlaceholder"
                placeholder="Sławomir"
                onChange={(e) => {
                  setContactName(e.target.value);
                }}
              />
              <p
                className="py-1 text-red-600 text-sm hidden"
                id="contact-name-error"
              >
                *Pole imię wymagane i musi posiadać conajmniej 3 znaki
              </p>
              <label className="font-medium text-base mb-2 mt-8 text-labelColor">
                Twój email
              </label>
              <input
                type="text"
                name="email"
                id="contact-email"
                value={contactEmail}
                className="border rounded-lg px-6 py-4 text-inputPlaceholder border-gray/400"
                placeholder="slawomir@gmail.com"
                onChange={(e) => setContactEmail(e.target.value)}
              />
              <p
                className="py-1 text-red-600 text-sm hidden"
                id="contact-email-error"
              >
                *Pole email jest wymagane
              </p>
              <label className="font-medium text-base mb-2 mt-8 text-labelColor">
                Co chcesz się dowiedzieć?
              </label>
              <textarea
                name="message"
                id="contact-message"
                value={contactMessage}
                placeholder="Cześć, czy mogę poprosić o dodatkowe informacje..."
                className="border-gray/400 text-inputPlaceholder px-6 py-4 h-52 border rounded-lg resize-none"
                maxLength={1000}
                onChange={(e) => setContactMessage(e.target.value)}
              ></textarea>
              <p
                className="py-1 text-red-600 text-sm  hidden"
                id="contact-message-error"
              >
                *Zapomniałeś o wiadomości
              </p>
              <div className="flex max-w-lg mb-6 mt-9">
                <input
                  type="checkbox"
                  id="contact-checkbox"
                  className="mr-3 border border-gray/400 rounde d-sm appearance-none w-5 h-5 p-2 bg-white hover:cursor-pointer before:bg-amaranth/500 before:w-2 before:h-1 before:left-0 before:top-2 before:rotate-45 before:absolute after:bg-amaranth/500 after:w-3 after:h-1 after:left-1 after:top-2 after:-rotate-45 after:absolute relative before:invisible checked:before:visible after:invisible checked:after:visible"
                  onChange={() => {
                    setContactAgreement(!contactAgreement);
                  }}
                />
                <p className="text-radioInfoColor font-normal text-base">
                  Wyrażam zgodę na podanie danych w formularzu w celu
                  przygotowania i przedstawienia oferty. Dane zawarte w treści
                  korespondencji przetwarzane są na zasadach opisanych w
                  Polityce Prywatności.
                </p>
              </div>
              <input
                type="submit"
                value="Wyślij wiadomość"
                className="bg-Button text-white px-8 py-4 w-52 rounded-full hover:cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex py-28 px-14 justify-center sm:items-center screenXL:items-stretch flex-wrap-reverse screenXL:flex-row screenXL:px-0 sm:px-4">
        <picture className="bg-BorderColor w-w769 screenXL:mr-4 sm:mr-0 rounded-3xl flex item-center justify-center py-44">
          <span className="font-semibold text-materialInfoColor">
            tutaj będzie grafika
          </span>
        </picture>
        <div className="bg-BorderColor w-w536 rounded-3xl flex flex-col justify-between screenXL:mb-0 sm:mb-4">
          <h3 className="text-materialInfoColor font-semibold text-3xl pt-14 screenXL:pl-14 sm:pl-7 screenXL:pr-36 screen406:pr-6 mb-36">
            Szukasz materiałów medialnych?
          </h3>
          <button className="border border-materialInfoColor rounded-full py-7 px-14 text-materialInfoColor text-xl text-center w-w282 h-h68 flex items-center justify-center screenXL:ml-14 sm:ml-5 mb-12">
            Pobierz materiały
          </button>
        </div>
      </div>
    </section>
  );
}

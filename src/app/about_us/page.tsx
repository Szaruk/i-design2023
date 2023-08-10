"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

import SocialResponsibility from "./socialResponsibilityDirectus";
import OurValues from "./ourValuesDirectus";
import { error } from "console";

export default function AboutUs() {
  const [socialResponsibilityData, setsocialResponsibilityData] = useState<
    any[]
  >([]);
  const [ourValuesData, setOurValuesData] = useState<any[]>([]);

  useEffect(() => {
    SocialResponsibility()
      .then((res) => {
        setsocialResponsibilityData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    OurValues()
      .then((res) => {
        setOurValuesData(res.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className="pb-p-71 pt-p-89.6 flex flex-col items-center container mx-auto">
      <div className=" screen1068:mx-m-60 mb-m-71 sm:mx-4 bg-blue/600 screen1068:pt-p-183 screen1068:pb-p-169 sm:pt-p-46 sm:pb-p-74 screen800:pl-p-244 screen800:pr-p-230 sm:pl-p-33 sm:pr-p-27  rounded-2xl relative after:absolute screen1068:after:w-20 screen1068:after:h-20 sm:after:w-w60 sm:after:h-h60 after:-bottom-9 after:left-1/2 screen1068:after:-ml-14 sm:after:-ml-9 after:bg-amaranth/500 after:rounded-full screen1068:after:bg-[url('/arrow-down.svg')] sm:after:bg-[url('/arrow-down-mobile.svg')] after:bg-no-repeat after:bg-center">
        <h1 className="text-gray/100 font-semibold text-center screen1068:text-5xl sm:text-2xl  leading-leading-1.10">
          Mamy wspólny cel -
          <span className="bg-amaranth/500 rounded-2xl px-1">pomagać</span>,
          stawać się ekspertami, nieustannie podnosić poziom wiedzy i dzielić
          się tym z innymi.
        </h1>
      </div>
      <div className="flex justify-between screen768:px-p-60 sm:px-4 screen950:flex-row sm:flex-col screen950:mb-40 sm:mb-m-82">
        <div className="flex flex-col mr-m-37 screen950:w-w858 sm:w-full screen950:mb-0 sm:mb-m-37">
          <h2 className="font-semibold text-blue/600 screen338:text-size-42 mt-m-60 mb-10 sm:text-size-38.4">
            Nasze wartości
          </h2>
          <div className="flex screen950:flex-row sm:flex-col">
            {ourValuesData.map((item) =>
              item.Our_values_category === "Misja" ? (
                <div
                  className="flex-1 flex-col screen950:mr-m-74 screen950:mb-0 sm:mb-6 sm:mr-0 relative before:absolute before:left-0 before:top-4 before:w-7 before:h-7 before:bg-[url('/arrow-right.svg')] before:bg-no-repeat before:screen768:block before:sm:hidden"
                  key={item.id}
                >
                  <h3 className="text-amaranth/500 pb-2 text-size-34 font-semibold border-b-4 border-amaranth/500 screen768:pl-10 sm:pl-0">
                    {item.Our_values_category}
                  </h3>
                  <p className="mt-m-25 text-gray/900 text-xl font-normal">
                    {item.Our_values_info}
                  </p>
                </div>
              ) : (
                <div
                  className="flex-1 flex-col relative before:absolute before:left-0 before:top-4 before:w-7 before:h-7 before:bg-[url('/arrow-right.svg')] before:bg-no-repeat before:screen768:block before:sm:hidden"
                  key={item.id}
                >
                  <h3 className="text-amaranth/500 pb-2 text-size-34 font-semibold border-b-4 border-amaranth/500 screen768:pl-10 sm:pl-0">
                    {item.Our_values_category}
                  </h3>
                  <p className="mt-m-25 text-gray/900 text-xl font-normal">
                    {item.Our_values_info}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <picture className="self-center">
          <Image
            src="/our-values-img.jpg"
            className="rounded-xl"
            width={424}
            height={312}
            alt="our-values-img.svg"
          ></Image>
        </picture>
      </div>
      <div className="flex justify-between screen950:px-p-60 sm:px-4 screen950:flex-row sm:flex-col-reverse">
        {socialResponsibilityData.map((item) => (
          <div className="flex justify-between" key={item.id}>
            <picture className="screen950:mr-m-88 sm:mr-0 self-center sm:mb-24 screen950:mb-0">
              <Image
                className="rounded-sm"
                src={
                  "https://admin.i-design.com.pl/assets/" +
                  item.social_responsibility_photo
                }
                width={672}
                height={495}
                alt="social-img.svg"
              ></Image>
            </picture>
            <div className="flex flex-col screen950:w-w560 sm:w-full pt-p-65 screen950:mb-0 sm:mb-10">
              <h3 className="mb-4 font-semibold text-size-34 text-blue/600">
                Społeczna
                <span className="text-amaranth/500"> odpowiedzialność</span> w
                biznesie to nasz główny cel.
              </h3>
              <p
                className="text-xl text-gray/900 font-normal"
                dangerouslySetInnerHTML={{
                  __html: item.social_responsibility_info,
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex container mx-auto screen950:pl-p-60 screen950:pr-p-60 sm:pl-6 sm:pr-6 my-40 flex-wrap justify-center">
        <div className="screen950:w-w575 sm:w-full screen950:mr-m-114.5 sm:mr-0 mb-6">
          <h3 className="text-size-42 font-semibold text-blue/600 mb-m-2">
            Poznaj lepiej nasz zespół
          </h3>
          <p className="font-semibold text-base text-gray/900 sm:pr-0">
            Poznaj nas - kim jesteśmy w I DESIGN, co robimy w życiu, czym się
            interesujemy i jakie słowo nas określa.
          </p>
        </div>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 w-w312 h-h177  bg-white  text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Buisness Development
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 bg-white w-w312 h-h177 text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Social Media Team
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 bg-white w-w312 h-h177 text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Web Development
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 bg-white w-w312 h-h177 text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Newsletter Team
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 bg-white w-w312 h-h177 text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Photo&Video Team
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
        <div className="sm:sticky screen736:static sm:top-24 sm:z-10 screen736:z-0 bg-white w-w312 h-h177 text-size-19 mr-8 text-black font-semibold flex justify-center items-center px-3 py-4">
          Miejsce na Twoje zdjęcie!
        </div>
        <picture className="mr-8 mb-6 relative">
          <Image
            src="/monika_o_nas.jpg"
            width={312}
            height={177}
            alt="monika_o_nas"
            className="rounded-xl"
          ></Image>
          <p className="absolute pl-4 pb-3 left-0 bottom-0 w-full h-32 flex items-end text-left rounded-xl text-white font-semibold text-size-19 bg-membersGradient">
            Monika Drabczyńska
          </p>
        </picture>
      </div>
      <div className="flex flex-col items-center justify-center screen768:mx-m-60 sm:mx-m-0 pt-p-67 pb-p-88 screen1112:px-p-220 sm:px-p-13 mt-40 bg-gray/200 rounded-3xl overflow-hidden relative before:absolute before:w-w744 before:h-h744 before:bg-amaranth/100 before:blur-3xl before:-top-96 before:-left-52 after:absolute after:w-w744 after:h-h744 after:bg-blue/100 after:top-80 after:-right-80 after:blur-3xl before:rounded-full after:rounded-full">
        <picture className="mb-6 relative z-10">
          <Image
            src="/circles-img.svg"
            width={320}
            height={80}
            alt="circles-img"
          ></Image>
        </picture>
        <div className="flex relative z-10 ">
          <picture className="w-20 h-20 rounded-full border-4 border-gray/200 bg-black z-10 overflow-hidden">
            <Image
              src="/monika-circle.png"
              width={90}
              height={90}
              alt="circles-img"
            ></Image>
          </picture>
          <picture className="-ml-5 w-20 h-20 rounded-full border-4 border-gray/200 bg-red-500 -z-10"></picture>
          <picture className="-ml-5 w-20 h-20 rounded-full border-4 border-gray/200 bg-slate-800 -z-20"></picture>
        </div>
        <h3 className="font-semibold text-center screen1112:text-5xl sm:text-size-34 text-blue/600 mb-6 relative z-10">
          👋 Dołącz do <span className="text-amaranth/500">I DESIGN</span>!
        </h3>
        <h3 className="font-semibold text-center screen1112:text-5xl sm:text-size-34 text-blue/600 mb-6 relative z-10">
          Bądź częścią stowarzyszenia i działaj.
        </h3>
        <p className="font-normal text-xl mb-9 text-center relative z-10">
          Dołącz do naszego zespołu i rozwijaj swoje umiejętności jednocześnie
          pomagając. Skontaktuj się z nami i powiedz w czym jesteś dobry.
        </p>
        <button className="bg-amaranth/500 text-white font-semibold text-base px-8 py-4 rounded-full relative z-10">
          Dołącz do nas!
        </button>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "@/app/postDetails.css";
import PostDetailsDirectus from "./PostDetailsDirectus";
import AnotherPost from "./AnotherPost";

export default function PostDetails({ params }: { params: { slug: string } }) {
  const [postDetails, setPostDetails] = useState<any[]>([]);
  const [anotherPost, setAnotherPost] = useState<any[]>([]);

  function GetCurrentData(x: any) {
    if (x === "01") {
      return "Stycznia";
    } else if (x === "02") {
      return "Lutego";
    } else if (x === "03") {
      return "Marca";
    } else if (x === "04") {
      return "Kwietnia";
    } else if (x === "05") {
      return "Maja";
    } else if (x === "06") {
      return "Czerwca";
    } else if (x === "07") {
      return "Lipca";
    } else if (x === "08") {
      return "Sierpnia";
    } else if (x === "09") {
      return "Września";
    } else if (x === "10") {
      return "Października";
    } else if (x === "11") {
      return "Listopada";
    } else if (x === "12") {
      return "Grudnia";
    }
  }

  useEffect(() => {
    PostDetailsDirectus(params.slug).then((res) => {
      setPostDetails(res.data.data);
    });
    AnotherPost().then((res) => {
      setAnotherPost(res.data.data);
    });
  }, []);

  return (
    <div className=" pt-24 w-full screen875:container mx-auto flex items-center flex-col px-5">
      {postDetails.map((details) => {
        return (
          <div key={details.id}>
            <div className="flex flex-col">
              <div className="flex max-w-[583px]  font-normal text-base">
                <p className="text-gray/600 text-sm screen875:text-base">
                  Strefa wiedzy
                </p>
                <Image
                  src="/arrow.svg"
                  width={18}
                  height="18"
                  alt="arrow"
                ></Image>
                <p className="text-blue/600 text-sm screen875:text-base">
                  {details.Post_title}
                </p>
              </div>
              <div className="hidden flex-wrap screen875:flex">
                {details.category_type.map((categoryDetail: any) => {
                  return (
                    <ul key={categoryDetail.id} className="mt-4">
                      <li className="px-6 py-2 rounded-full border border-blue/600 mr-4">
                        {categoryDetail.Post_category_id.Category_type}
                      </li>
                    </ul>
                  );
                })}
              </div>
              <div className="flex items-center flex-wrap screen875:hidden mt-2">
                <span className="w-8 h-8 bg-blue/500 rounded-full"></span>
                <span className="mx-1">{details.user_created.first_name}</span>
                <span className="mr-1">{details.user_created.last_name}</span>
                <span className="mx-1">|</span>
                <p>
                  {details.date_created.slice(8, 10)}
                  <span className="mx-1">
                    {GetCurrentData(details.date_created.slice(5, 7))}
                  </span>
                  {details.date_created.slice(0, 4)}
                </p>
              </div>
              <h1 className="screen875:text-5xl text-2xl text-blue/600 font-bold mt-2 mb-6 max-w-[811px]">
                {details.Post_title}
              </h1>
              <Image
                src={
                  "https://admin.i-design.com.pl/assets/" +
                  details.Post_photo.id
                }
                width={811}
                height={400}
                alt={details.Post_photo.id}
                className="rounded-xl"
              ></Image>
              <div
                className="max-w-[811px] mt-6 post-text"
                dangerouslySetInnerHTML={{ __html: details.Text_post }}
              ></div>
            </div>
          </div>
        );
      })}
      <h3 className="w-full hidden screen875:block mt-24 px-1 text-black font-semibold text-size-2.125 mb-6">
        Artykuły, które mogą Cię zainteresować
      </h3>
      <h3 className="w-full mt-24 px-1 text-black font-semibold block screen875:hidden text-2xl mb-6">
        Do przeczytania
      </h3>
      <div className="flex flex-wrap">
        {anotherPost.map((another) => (
          <div key={another.id} className="flex flex-col max-w-[429px]">
            <Image
              src={
                "https://admin.i-design.com.pl/assets/" + another.Post_photo.id
              }
              width={429}
              height={255}
              alt={another.Post_photo.id}
              className="rounded-xl"
            ></Image>
            <p className="mt-5 mb-20 font-semibold text-2xl text/-black">
              {another.Post_title}
            </p>
          </div>
        ))}
      </div>
      <h3 className="w-full mt-24 px-1 text-black font-semibold screen875:text-size-2.125 text-2xl mb-6">
        Brzmi dobrze ?
      </h3>
      <div className="bg-blue/600 w-full max-w-[1320px] mb-10 relative rounded-xl pt-p-55.36 flex screen1224:flex-row flex-col screen1224:justify-between items-center screen620:pl-p-76.96 pl-10 screen620:pr-16 pr-10 text-white screen1224:pb-p-55.36 pb-28">
        <div className="flex flex-col max-w-[527px]">
          <h3 className="text-size-2.125  font-semibold leading-leading-2.55 mb-6 pr-5">
            Zapisz się do newslettera. Bądź na bieżąco ze wszystkim.
          </h3>
          <p className="mb-6 leading-leading-1.875 text-lg font-normal">
            Zaklep sobie u Sławomira ekspresowe info o wydarzeniach, dostęp do
            specjalnych materiałów oraz artykułów i współtwórz z nami I DESIGN.
          </p>
          <button className="rounded-full bg-amaranth/500 screen1224:relative absolute bottom-0 screen1224:self-start self-center  py-4 px-8 text-base font-semibold leading-leading-1.5 max-w-[257px] screen1224:mb-0 mb-8">
            Zapisz się do newslettera
          </button>
        </div>
        <div className="screen1224:self-end self-center relative screen1224:mt-0 mt-8 screen1224:-right-0  -right-10">
          <Image
            src={"/blog_person_vector.svg"}
            width={223}
            height={195}
            alt="blog_person_vector"
          ></Image>
          <Image
            className="absolute -top-10 screen1224:-left-52 -left-20"
            src={"/seagull.svg"}
            width={131}
            height={107}
            alt="seagull"
          ></Image>
        </div>
      </div>
    </div>
  );
}

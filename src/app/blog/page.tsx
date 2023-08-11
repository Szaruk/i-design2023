"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const categoryPosts = [
  { id: 1, name: "Design" },
  { id: 2, name: "Marketing" },
  { id: 3, name: "Management" },
  { id: 4, name: "Inne" },
];

import BlogDirectus from "./BlogDirectus";

export default function Blog() {
  const [blogPost, setBlogPost] = useState<any[]>([]);

  function Test(x: any){
    return "Monika";
  }

  useEffect(() => {
    BlogDirectus()
      .then((res) => {
        console.log(res.data.data);
        const data = res.data.data;
        setBlogPost(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="py-24 flex flex-col screen620:container w-full mx-auto screen620:px-p-60 px-4">
      <div className="flex flex-col max-w-[825.6px]">
        <h3 className="screen620:text-5xl text-size-2.125 font-semibold mb-8 leading-leading-3.3 mt-20 text-/-black">
          Co Cię ciekawi?
        </h3>
        <p className="mb-8 font-normal text-xl text-gray/900 leading-leading-1.875">
          Interesują Cię artykuły pisane przez naszych ekspertów? A może chcesz
          odsłuchać jednego z lajwów, który Cię ominął? Skorzystaj z
          gromadzonych przez nas materiałów w strefie wiedzy, dostępnych do
          użytku w każdym momencie.
        </p>
        <div className="flex w-full flex-wrap">
          {categoryPosts.map((category) => (
            <ul key={category.id}>
              <li className="border screen620:mr-5 mr-3 mb-4 border-blue/600 rounded-full text-lg font-semibold py-4 px-9 cursor-pointer">
                {category.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <h3 className="text-/-black font-semibold text-4xl leading-leading-3.15 mt-16 mb-8">
        Do przeczytania
      </h3>
      <div className="flex flex-wrap justify-center">
        {blogPost.map((post, index) => {
          return (
            <Link key={index} href={"/blog/" + post.post_slug}>
            <div className="max-w-[424px] flex flex-col mx-6">
              <Image src={
                    "https://admin.i-design.com.pl/assets/" + post.Post_photo.id
                  } width={424} height={223} alt={post.Post_photo.id}></Image>
              <div className="px-6 py-4 flex flex-col">
                <div className="flex">
                    {post.category_type.map((category: any) => {
                    return (
                        <ul key={category.id}>
                          <li className="px-6 mr-1 py-2 rounded-full border border-blue/600 font-semibold text-sm">{category.Post_category_id.Category_type}</li>
                        </ul>
                    );
                  })}
                </div>
              <p className="text-2xl font-semibold my-2">{post.Post_title}</p>
              <div className="flex font-normal text-xl">
                <p>{Test(post.post_author)} </p>
                <span className="mx-1">|</span>
                <p> {post.date_created.slice(8,10)}-{post.date_created.slice(5,7)}-{post.date_created.slice(0,4)}</p>
              </div>
              </div>
              
            </div>
            </Link>
          );
          
        })}
      </div>
      <button className="self-center py-4 px-9 text-blue/600 rounded-full border w-[197px] font-semibold border-blue/600 screen620:mt-16 mt-1">
        Zobacz więcej
      </button>
      <h3 className="text-/-black font-semibold text-4xl leading-leading-3.15 mt-16 mb-8">
        Do oglądania
      </h3>
      <div className="flex flex-wrap justify-center">
        <div className="relative mx-5 mb-16">
          <Image
            src={"/blog_video.jpg"}
            width={424}
            height={424}
            alt="test"
            className="rounded-xl "
          ></Image>
          <div className="flex flex-col absolute bottom-0 px-6 py-4 text-white bg-videoGradient rounded-xl">
            <p className="mb-2 screen620:text-size-2.125 text-2xl font-semibold leading-leading-2.55">
              Paula Fogt
            </p>
            <p className="screen620:text-xl text-size-1.1875 leading-leading-1.875">
              Jak budować kompetencje przyszłości odporne na zmiany?
            </p>
          </div>
        </div>
        <div className="relative mx-5 mb-16">
          <Image
            src={"/blog_video.jpg"}
            width={424}
            height={424}
            alt="test"
            className="rounded-xl "
          ></Image>
          <div className="flex flex-col absolute bottom-0 px-6 py-4 text-white bg-videoGradient rounded-xl">
            <p className="mb-2 text-size-2.125 font-semibold leading-leading-2.55">
              Paula Fogt
            </p>
            <p className="text-xl leading-leading-1.875">
              Jak budować kompetencje przyszłości odporne na zmiany?
            </p>
          </div>
        </div>
        <div className="relative mx-5 mb-16">
          <Image
            src={"/blog_video.jpg"}
            width={424}
            height={424}
            alt="test"
            className="rounded-xl "
          ></Image>
          <div className="flex flex-col absolute bottom-0 px-6 py-4 text-white bg-videoGradient rounded-xl">
            <p className="mb-2 text-size-2.125 font-semibold leading-leading-2.55">
              Paula Fogt
            </p>
            <p className="text-xl leading-leading-1.875">
              Jak budować kompetencje przyszłości odporne na zmiany?
            </p>
          </div>
        </div>
      </div>
      <button className="hover:cursor-pointer self-center py-4 px-9 text-blue/600 rounded-full border w-[197px] font-semibold border-blue/600 screen620:mt-16 mt-1 mb-20">
        Zobacz więcej
      </button>
      <div className="bg-blue/600 relative rounded-xl pt-p-55.36 flex screen1224:flex-row flex-col screen1224:justify-between items-center screen620:pl-p-76.96 pl-10 screen620:pr-16 pr-10 text-white screen1224:pb-p-55.36 pb-28">
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

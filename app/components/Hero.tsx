"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <div className="h-screen  mt-80 flex flex-col justify-center items-center text-center px-6">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-5xl font-semibold text-black dark:text-white mb-4">
                Organize Your Life <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Digitally
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={`/yearataglance.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        {/* <h2 className="text-4xl font-bold mb-4">Organize Your Life Digitally</h2>
        <p className="max-w-2xl text-lg text-gray-600">
          A digital bullet journal to plan, track, and organize effortlessly.
        </p> */}
      </div>
    </>
  );
}

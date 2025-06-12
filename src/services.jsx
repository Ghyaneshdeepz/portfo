"use client";
import React from "react";
import { ContainerScroll } from "../src/components/container-scroll-animation";
import dash from "./assets/Dash.jpg"
export function Services() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              What I Offer ? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Beautifull <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text font-bold italic text-4xl md:text-[6rem] drop-shadow-lg">
                  designs
                </span>

              </span>
            </h1>
          </>
        }>
        <img
          src={dash}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-3xl object-cover h-full object-left-top"
          draggable={false} />
      </ContainerScroll>
    </div>
  );
}

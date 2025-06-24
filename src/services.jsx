"use client";
import React from "react";
import { ContainerScroll } from "../src/components/container-scroll-animation";

export function Services() {
  return (
    <div className="flex flex-col sm:block hidden overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              What I Offer? <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Designs & {" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text font-bold italic text-4xl md:text-[6rem] drop-shadow-lg">
                  Analysis
                </span>
              </span>
            </h1>
          </>
        }
      >
        <div className="w-full aspect-video max-w-6xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-xl">
          <iframe
            title="Looker Studio Dashboard"
            width="100%"
            height="100%"
            src="https://lookerstudio.google.com/embed/reporting/5c3c8885-cf54-4d79-a1bc-05ef2f9fe81f/page/rvPOF"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          ></iframe>
        </div>
      </ContainerScroll>
    </div>
  );
}

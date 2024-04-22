"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/component/3d-card";
import Link from "next/link";
import { InfiniteMovingCardsDemo } from "./infinite-moving-cards-demo";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[21rem] sm:w-[30rem] h-[40rem] sm:h-auto rounded-xl p-6 border flex flex-col justify-center gap-4">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Own a web design template, for free.
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            Browse through our collection of free website templates and launch it through our web solutions.
          </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full mt-4">
          <InfiniteMovingCardsDemo />
        </CardItem>
        <div className="flex justify-center flex-col sm:flex-row items-center mt-5 sm:mt-10 gap-6">
          <CardItem
            translateZ={20}
            as={Link}
            href="#"
            taget="__blank"
            className="w-[210px] sm:w-[150px] flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Browse websites
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href="#"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Or try our custom website service →
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

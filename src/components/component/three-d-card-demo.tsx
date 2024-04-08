"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/component/3d-card";
import Link from "next/link";
import { InfiniteMovingCardsDemo } from "./infinite-moving-cards-demo";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] sm:w-[30rem] h-[40rem] sm:h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Own a website, for free.
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Browse through our collection of free website templates and get started with your online presence.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <InfiniteMovingCardsDemo />
          {/* <Image
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          /> */}
        </CardItem>
        <div className="flex justify-between flex-col sm:flex-row items-center mt-13 sm:mt-20 gap-6">
          <CardItem
            translateZ={20}
            as={Link}
            href="#"
            taget="__blank"
            className="w-full flex items-center justify-center px-4 py-2 rounded-xl bg-gray-900 dark:bg-white dark:text-black text-white text-xs font-bold"
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

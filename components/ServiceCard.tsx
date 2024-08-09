"use client"

import React from "react";
import {Button, Card, Skeleton, CardBody, CardFooter, Image} from "@nextui-org/react";

import {list} from "../constants"

export default function ServiceCard() {
  
  return (
    <div className="flex items-center my-20">
      <div className="flex w-[100%] flex-wrap gap-10 items-center justify-center">
      {list.map((item, index) => (
        <Card shadow="sm" className=" to-black dark:border border-gray-500 dark:bg-transparent  sm:w-[350px] w-[350px] h-[600px] " key={index} isPressable onPress={() => console.log("item pressed")} >
          <CardBody className="bg-transparent overflow-visible shadow-none border-0">
            <Image
              radius="lg"
              width="100%"
              alt={item.title}
              src={item.img}
            />
          </CardBody>
          <div className="px-10 mb-8 justify-between">
            <p className="text-center mb-6 font-bold text-3xl">{item.title}</p>
            <p className="text-sm">{item.description}</p>
           
          </div>
        </Card>
      ))}
      </div>
    </div>
  );
}

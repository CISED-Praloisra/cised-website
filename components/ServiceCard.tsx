"use client"

import React from "react";
import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function ServiceCard() {
  const list = [
    {
      title: "Custom web apps",
      img: "/software-19.png",
      description: "Your business is unique and has its own sets of requirements. And so you may need customized web-based applications that help you move forward with your business in a more productive manner.",
    },
    {
      title: "CRM for clients",
      img: "/software-20.png",
      description: "No matter what business you run, customers are always at the heart of it. We help you improve customer relations by creating simple to use CRM solutions to your needs, and your customers.",
    },
    {
      title: "Mobile Apps",
      img: "/software-21.png",
      description: "There are more hand-held electronic devices than human today. take advantage of mobility and multiply your reach with mobile apps that attract users without borders.",
    },
  ];

  return (
    <div className="flex items-center my-20">
      <div className="flex w-[100%] flex-wrap gap-10 items-center justify-center">
      {list.map((item, index) => (
        <Card shadow="sm" className=" to-black  sm:w-[350px] w-[350px] h-[600px] " key={index} isPressable onPress={() => console.log("item pressed")} >
          <CardBody className="overflow-visible shadow-none border-0">
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

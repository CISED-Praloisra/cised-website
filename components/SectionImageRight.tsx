"use client"

import React from "react";

import { Button, Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function SectionImageRight(props: any) {
    const { image, title, description, link } = props
    return (
        <>
            <div className="w-full flex gap-4 justify-center items-center">
                <div className="md:flex gap-8 w-[90%] justify-b items-center align-middle">
                    
                <div className="md:w-[50%] flex md:hidden justify-center items-center mt-12">
                        <Image
                            radius="lg"
                            width="100%"
                            alt={"item.title"}
                            className="h-full"
                            src={image}
                        />
                    </div>
                    <div className="md:w-[50%]">
                        <p className="md:text-6xl text-xl text-black dark:text-white font-bold">{title}</p>
                        <p className="text-justify md:text-left mt-6 text-black dark:text-white leading-loose">{description}</p>
                        <Button radius="full" className="mt-10 border border-indigo-950 bg-transparent dark:text-white py-8 px-10 shadow-lg text-lg">
                            View all components
                        </Button>
                    </div>
                    <div className="md:w-[50%] hidden md:flex justify-center items-center mt-12">
                        <Image
                            radius="lg"
                            width="100%"
                            alt={"item.title"}
                            className="h-full"
                            src={image}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
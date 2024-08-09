"use client"

import React from "react";

import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function SectionImageRight(props: any) {
    const { image, title, description, link } = props
    return (
        <>
            <motion.div initial={{
                opacity:0
            }}
            whileInView={{
                opacity:1
            }}
            viewport={{
                amount:"all"
            }} className="w-full flex gap-4 justify-center items-center">
                <div className="md:flex gap-8 w-[90%] justify-b h-[50vh] items-center align-middle">
                    
                    <div className="md:w-[50%]">
                        <p className="md:text-6xl text-xl text-black dark:text-white font-bold">{title}</p>
                        <p className="text-justify md:text-left mt-6 text-black dark:text-white leading-loose">{description}</p>
                    </div>
                    <div className="md:w-[50%] flex justify-center items-center mt-12">
                        <Image
                            radius="lg"
                            width="100%"
                            alt={"item.title"}
                            className="h-full"
                            src={image}
                        />
                    </div>
                </div>
            </motion.div>
        </>
    )
}
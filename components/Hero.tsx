import { Button } from "@nextui-org/react";
import bgImage from "software-35.png";

export default function Hero() {


    return (
        <>
            <div className="h-[80vh] flex items-center flex-col justify-center bg-white dark:bg-indigo-950 bg-[url('/software-35.png')] bg-no-repeat bg-center bg-cover">


                <div className="bg-indigo-700/75 flex h-full w-full items-center justify-center flex-col">
                    <div className="flex h-full w-full items-center justify-center flex-col ">
                        <h2 className="text-9xl font-bold text-[2rem] md:text-[4rem] lg:text-[4rem]  text-white dark:text-white ">C.I.S.E.D</h2>
                        <p className="w-[80%] text-[16px] text-center font-thin md:text-xl mt-6 md:mt-12 text-white dark:text-white ">"Center for Information System Engineering and Technology"</p>
                        <p className="w-[90%] md:w-[60%] mt-8 md:mt-16 text-center text-lg md:text-xl lg:text-3xl leading-relaxed">Whether you are looking to create an engaging game that draws throngs of users, or a web application
                            that requires a certain expertise in your industry, have a novel mobile app idea to turn into reality or
                            simply need a better CRM system to up your output.</p>
                    </div>
                    <div className=" mx-4">
                        <Button radius="full" className="mb-12 border bg-transparent text-white py-8 px-10 shadow-lg text-2xl">
                            Get Started Now
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}
import { footerLinks } from "@/constants";
import Link from "next/link";
import { Image } from "@nextui-org/react";
export default function () {
    return (<>
        <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
            <div
                className="flex max-md:flex-col flex-wrap
           justify-between gap-5 px-6 py-5 sm:px-16 bg-indigo-950/10"
            >
                <div className="flex flex-col justify-start items-start gap-6">
                    <Image
                        src={"/113096554.jpeg"}
                        alt="logo"
                    />
                    <p className="text-base text-gray-700">
                        CISED 2024 <br /> All rights reserved &copy;
                    </p>
                </div>

                <div className="flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="flex flex-col gap-6 text-base min-w-[170px]">
                            <h3 className="font-bold text-indigo-950 dark:text-white">{link.title}</h3>

                            {link.links.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.url}
                                    className="text-gray-500"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex items-center flex-wrap border-t border-gray-100 justify-between sm:px-16 px-6 py-5 bg-indigo-950">
                <p>@2023 Carhub All rights reserved</p>
                <div className="flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10">
                    <Link href="/" className="text-gray-500">
                        Privacy Policy
                    </Link>
                    <Link href="/home" className="text-gray-500">
                        Terms of use
                    </Link>
                </div>
            </div>
        </footer>
    </>)
}
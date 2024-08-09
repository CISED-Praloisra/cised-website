import { Button, Input, Textarea } from "@nextui-org/react"

export default function Contact() {
    return (
        <>
            <div className="h-screen/2 flex flex-col items-center justify-center">
                <div className="h-[20vh] bg-indigo-950 w-full flex items-center justify-center">
                    <p className="text-[40px]">Talk To Us</p>
                </div>
                <div className="md:flex h-full w-full">
                    <div className="w-full h-full flex-col justify-center items-center flex bg-white dark:bg-gray-800 text-black dark:text-white px-20">
                        <div className="w-full">
                            <div className=" my-12">
                                <p className="text-3xl">Let's build an awesome</p>
                                <p className="text-3xl"> project together</p>
                            </div>

                            <div className="pb-6">
                                <h3 className="text-[18px] py-2 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.225 0-6.287-1.438t-5.425-3.8q-2.363-2.362-3.8-5.425T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.225t.325.575l.65 3.5q.05.35-.013.638T9.4 8.45L6.975 10.9q1.05 1.8 2.638 3.375T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.075.575.338T21 15.9v4.05q0 .45-.3.75t-.75.3ZM6.025 9l1.65-1.65L7.25 5H5.025q.125 1.025.35 2.025T6.025 9ZM19 18.95v-2.2l-2.35-.475l-1.675 1.675q.975.425 1.987.675T19 18.95Zm-4-1.025ZM6.025 9Z" /></svg>Call Us</h3>
                                <p className="text-[14px] text-gray-700 dark:text-gray-300 pb-1">+237 650 863 381</p>
                                <p className="text-[14px] text-gray-700 pb-1 dark:text-gray-300 ">+237 650 863 381</p>
                            </div>

                            <div className="pb-6">
                                <h3 className="text-[18px] py-2 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 11v2q0 .425.288.713T12 14t.713-.288T13 13v-2h2q.425 0 .713-.288T16 10t-.288-.712T15 9h-2V7q0-.425-.288-.712T12 6t-.712.288T11 7v2H9q-.425 0-.712.288T8 10t.288.713T9 11zm1 8.35q3.05-2.8 4.525-5.087T18 10.2q0-2.725-1.737-4.462T12 4T7.738 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35m0 1.975q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762t-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575T16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 10" /></svg>
                                    Find Us</h3>
                                <p className="text-[14px] text-gray-700 pb-1 dark:text-gray-300 ">42249 Parker Rd, New York,</p>
                                <p className="text-[14px] text-gray-700 pb-1 dark:text-gray-300 ">New York 31134</p>
                            </div>

                            <div className="pb-6">
                                <h3 className="text-[18px] py-2 flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21q-1.664 0-3.118-.626T6.34 18.66t-1.714-2.542T4 13t.626-3.118T6.34 7.34t2.542-1.714T12 5t3.118.626T17.66 7.34t1.714 2.542T20 13t-.626 3.118t-1.714 2.543t-2.542 1.713T12 21m3.146-4.146l.708-.708l-3.354-3.354V8h-1v5.208zM5.908 3.427l.707.707l-3.48 3.481l-.708-.707zm12.184 0l3.481 3.48l-.707.709l-3.481-3.481zM12 20q2.906 0 4.953-2.047T19 13t-2.047-4.953T12 6T7.047 8.047T5 13t2.047 4.953T12 20" /></svg>Visit Us</h3>
                                <p className="text-[14px] text-gray-700 pb-1 dark:text-gray-300 ">Monday - friday</p>
                                <p className="text-[14px] text-gray-700 pb-1 dark:text-gray-300 ">9AM - 5PM</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-indigo-950/10 dark:bg-indigo-950 justify-center flex flex-col ">
                        <div className=" flex justify-center my-12 text-white">
                            <p className="w-[70%] text-3xl">Get In Touch</p>
                        </div>
                        <div className="w-full items-center justify-center flex flex-col gap-4 text-white">

                            <div className="w-[70%] md:flex justify-between gap-4">
                                <Input
                                    isRequired
                                    type="text"
                                    label="Your Name"
                                    placeholder="you@example.com"
                                    labelPlacement="outside"
                                    className=" w-full"
                                />


                                <Input
                                    isRequired
                                    type="email"
                                    label="Email"
                                    placeholder="you@example.com"
                                    labelPlacement="outside"
                                    className=" w-full"
                                /></div>

                            <div className="w-[70%] md:flex justify-between gap-4">
                                <Input
                                    type="text"
                                    label="Your Company"
                                    placeholder="companyy name"
                                    labelPlacement="outside"
                                    className=" w-full"
                                />


                                <Input
                                    type="text"
                                    label="Budget Range"
                                    placeholder="In USD"
                                    labelPlacement="outside"
                                    className=" w-full"
                                /></div>
                            <div className="w-[70%] md:flex justify-center">

                                <Textarea
                                    isRequired
                                    label="Description"
                                    labelPlacement="outside"
                                    placeholder="Enter your description"
                                    className=""
                                />
                            </div>

                            <div className="w-[70%] flex justify-end">
                                <Button type="submit" className="bg-indigo-950 text-white dark:border dark:bg-transparent">
                                    Submit
                                </Button>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
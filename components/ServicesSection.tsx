import ServiceCard from "./ServiceCard";


export default function ServicesSection(){

    return(
        <>
            <div className="mt-24 dark:bg-black flex flex-col items-center justify-center">
                <div className="h-full w-full flex flex-col items-center justify-center my-10">
                    <p className="text-red-500 text-2xl text-center mb-20">Our Services</p>
                    <h2 className="md:w-[50%] text-6xl font-extrabold text-center dark:text-white text-indigo-950">Turning your ideas into a digital reality</h2>
                </div>
                <div className="">
                    <ServiceCard/>
                </div>
            </div>
        </>
    )
}
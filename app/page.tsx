import Image from "next/image";
import Navigations from "@/components/Navigations";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import Section from "@/components/Section";
import SectionImageRight from "@/components/SectionImageRight";
export default function Home() {
  return (
    <main className="dark:bg-black bg-white">
        <Navigations/>
        <Hero/>
        <ServicesSection/>
        <Section image="/software-33.png" title="Affordable and efficient mobile and web apps" description="At CISED, we believe in providing our clients with the best value for money that we possibly can. We work tirelessly to create software tools and apps that suit your company’s specific needs and cater to your niche of customers."/>
        <SectionImageRight image="/software-23.png" title="Affordable and efficient mobile and web apps" description="At CISED, we believe in providing our clients with the best value for money that we possibly can. We work tirelessly to create software tools and apps that suit your company’s specific needs and cater to your niche of customers."/>
    </main>
  );
}

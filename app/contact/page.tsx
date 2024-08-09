import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navigations from "@/components/Navigations";


export default function Page() {
  return (
    <>
      <div className="dark:bg-indigo-950  bg-white">
        <Navigations />
        <Contact />
        <div className="bottom-0">
          <Footer />
        </div>
      </div>
    </>
  )
}
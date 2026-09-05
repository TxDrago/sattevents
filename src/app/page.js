import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import RecentWorks from "@/components/portfolio/RecentWorks";
import AboutSatt from "@/sections/home/AboutSatt";
import CTA from "@/sections/home/CTA";
import HeroPanels from "@/sections/home/hero/HeroPanels";
import Testimonials from "@/sections/home/Testimonials";
import WhySatt from "@/sections/home/WhySatt";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroPanels />

        <AboutSatt />

        <WhySatt />

        <RecentWorks />

        <Testimonials />  

        <CTA />

        <Footer />
      </main>
    </>
  );
}
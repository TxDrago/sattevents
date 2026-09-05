import BelieveHero from "@/sections/beliefs/BelieveHero";
import OurEthos from "@/sections/beliefs/OurEthos";
import WhatWeBelieve from "@/sections/beliefs/WhatWeBelieve";
import OurPhilosophy from "@/sections/beliefs/OurPhilosophy";
import WhatWeCreate from "@/sections/beliefs/WhatWeCreate";
import OurApproach from "@/sections/beliefs/OurApproach";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export default function BeliefsPage() {
  return (
    <>
     <Navbar />
    <main >
      <BelieveHero />
      <OurEthos />
      <WhatWeBelieve />
      <OurPhilosophy />
      <WhatWeCreate />
      <OurApproach />
    </main>
    <Footer />
    </>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyProfile from "@/components/CompanyProfile";
import Background from "@/components/Background";
import JamaJapia from "@/components/JamaJapia";
import Pillars from "@/components/Pillars";
import Measures from "@/components/Measures";
import Partners from "@/components/Partners";
import RemoteWfh from "@/components/RemoteWfh";
import DataDev from "@/components/DataDev";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import NavHighlighter from "./NavHighlighter";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ScrollReveal>
        <CompanyProfile />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Background />
      </ScrollReveal>
      <ScrollReveal>
        <JamaJapia />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Pillars />
      </ScrollReveal>
      <ScrollReveal>
        <Measures />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Partners />
      </ScrollReveal>
      <ScrollReveal>
        <RemoteWfh />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <DataDev />
      </ScrollReveal>
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
      <NavHighlighter />
    </>
  );
}

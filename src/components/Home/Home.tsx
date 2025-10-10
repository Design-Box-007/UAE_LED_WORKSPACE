"use client";

import Hero from "./Hero";
import Contact from "./Contact";
import CTA from "../UI/CTA";
import DisplaySolutions from "../UI/DisplaySolutions";
import { tabsData } from "@/data/Display-solution/data";
import AboutSection2 from "./AboutSection2";
import OurWork2 from "./OurWork2";
import Logo from "./Logo";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <AboutSection /> */}
      <AboutSection2 />
      <DisplaySolutions
        title="Services"
        subtitle={"We provide end to end support for all types LED screens"}
        tabsData={tabsData}
      />
      {/* <OurWork /> */}
      <OurWork2 />
      {/* <Testimonial /> */}
      <Logo />
      <CTA
        title="Let’s Light Up Your Next Experience"
        description="From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope."
        primaryButton={{ label: "Request a Quote", href: "/contact" }}
        className="px-5 md:px-10"
      />
      <Contact />
    </main>
  );
};
export default Home;

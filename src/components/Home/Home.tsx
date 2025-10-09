"use client";

import Hero from "./Hero";
import AboutSection from "./AboutSection";
import OurWork from "./OurWork";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import CTA from "../UI/CTA";
import DisplaySolutions from "../UI/DisplaySolutions";
import { tabsData2 } from "@/data/Display-solution/data";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <DisplaySolutions
        title="Services"
        subtitle={"We provide end to end support for all types LED screens"}
        tabsData={tabsData2}
      />
      <OurWork />
      <Testimonial />
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

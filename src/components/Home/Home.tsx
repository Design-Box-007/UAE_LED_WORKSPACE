"use client";

import Hero from "./Hero";
import AboutSection from "./AboutSection";
import OurWork from "./OurWork";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import CTA from "../UI/CTA";
import DisplaySolutions from "../UI/DisplaySolutions";
import { tabsData } from "@/data/Display-solution/data";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <DisplaySolutions
        title="Our Display Solutions"
        subtitle={
          <>
            Versatile LED Products Tailored for Every Space, <br />
            Purpose, and Performance Need
          </>
        }
        tabsData={tabsData}
      />
      <CTA
        title="Still Not Sure Which LED Display is Right for You?"
        description="Talk to our experts for personalized recommendations based on your event, space, and audience needs."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        secondaryButton={{
          label: "Get a Free Consultation",
          href: "/consultation",
        }}
      />
      <OurWork />
      <Testimonial />
      <CTA
        title="Let’s Light Up Your Next Experience"
        description="From idea to installation, our team is ready to bring your LED vision to life — no matter the scale or scope."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        secondaryButton={{
          label: "Get a Free Consultation",
          href: "/consultation",
        }}
      />
      <Contact />
    </main>
  );
};
export default Home;

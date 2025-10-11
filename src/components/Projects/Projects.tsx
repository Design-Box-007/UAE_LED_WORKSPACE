import React from "react";

import Explore from "./Explore";
import CTA from "../UI/CTA";
import { faqs } from "@/data/FAQ/data";
import Hero from "../About/Hero";
import FAQAccordion from "../UI/FAQCard2";

const Projects = () => {
  return (
    <div>
      <Hero
        image={"/images/new-images/Project-Landing Page.jpg"}
        title="Real Results in Every Pixel"
        description="From immersive indoor displays to skyline-spanning billboards, explore how LED Display UAE transforms spaces through cutting-edge LED technology."
        position="top"
        overlay={true}
        titleColor="text-white"
        descColor="text-gray-200"
        bgColor="bg-gradient-blue-white-downward md:px-10 px-5"
      />
      <Explore />
      <CTA
        title="Still Not Sure Which LED Display is Right for You?"
        description="Talk to our experts for personalized recommendations based on your event, space, and audience needs."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        className="md:px-10 px-5"
      />
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default Projects;

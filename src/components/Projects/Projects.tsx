import React from "react";
import Hero from "./Hero";
import Explore from "./Explore";
import CTA from "../UI/CTA";
import FAQCard from "../UI/FAQCard";
import { faqs } from "@/data/FAQ/data";

const Projects = () => {
  return (
    <div>
      <Hero />
      <Explore />
      <CTA
        title="Still Not Sure Which LED Display is Right for You?"
        description="Talk to our experts for personalized recommendations based on your event, space, and audience needs."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        secondaryButton={{
          label: "Get a Free Consultation",
          href: "/consultation",
        }}
      />
       <FAQCard faqs={faqs} title="Frequently Asked Questions" />
    </div>
  );
};

export default Projects;

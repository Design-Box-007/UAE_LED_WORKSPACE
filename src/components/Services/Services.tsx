import React from "react";
import Hero from "./Hero";
import DisplaySolutions from "../UI/DisplaySolutions";
import { tabsData } from "@/data/Display-solution/data";
import CTA from "../UI/CTA";
import FAQCard from "../UI/FAQCard";
import { faqs } from "@/data/FAQ/data";

const Services = () => {
  return (
    <div>
      <Hero />
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
      <FAQCard faqs={faqs} title="Frequently Asked Questions" />
    </div>
  );
};

export default Services;

import React from "react";
import Hero from "./Hero";
import DisplaySolutions from "../UI/DisplaySolutions";
import { tabsData2 } from "@/data/Display-solution/data";
import CTA from "../UI/CTA";
import { faqs } from "@/data/FAQ/data";
import FAQAccordion from "../UI/FAQCard2";

const Services = () => {
  return (
    <div>
      <Hero />
      <DisplaySolutions
        title="Our Display Solutions"
        subtitle={
          <>
            Versatile LED Products Tailored for Every Space, Purpose, and
            Performance Need
          </>
        }
        tabsData={tabsData2}
      />
      <CTA
        title="Still Not Sure Which LED Display is Right for You?"
        description="Talk to our experts for personalized recommendations based on your event, space, and audience needs."
        primaryButton={{ label: "Request a Quote", href: "/quote" }}
        className="px-5 md:px-10"
      />
      {/* <FAQCard faqs={faqs} title="Frequently Asked Questions" /> */}
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default Services;

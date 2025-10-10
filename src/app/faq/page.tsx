import FAQAccordion from "@/components/UI/FAQCard2";
import { faqs } from "@/data/FAQ/data";
import React from "react";

const page = () => {
  return (
    <div className="pt-20">
      {/* <FAQCard faqs={faqs}/> */}
      <FAQAccordion faqs={faqs} />
    </div>
  );
};

export default page;

"use client";

import { tabsData } from "@/data/Display-solution/data";
import { formatToHyphenated } from "@/utils/utils";
import { useParams } from "next/navigation";
import React from "react";
import PageHeader from "./DisplaySolutionDetail/Header";
import FeatureContent from "./DisplaySolutionDetail/Features";
import FooterContent from "./DisplaySolutionDetail/Footer";
import ServingEmirates from "./DisplaySolutionDetail/Services";

const DisplaySolutionDetailPage = () => {
  const params = useParams();
  const data = tabsData.find((d) => formatToHyphenated(d.name) === params.slug);
  if (!data) return <div>Not Found</div>;
  return (
    <div>
      <PageHeader
        title={data.title}
        description={data.description}
        image={data.image}
      />
      <FeatureContent features={data.features} />
      {
        (data.emiratesFoot && (
          <ServingEmirates
            header={data.emiratesHead}
            footer={data.emiratesFoot}
          />
        ))}
      {data.footerContent1 && (
        <FooterContent footerContent={data.footerContent1} />
      )}
      <FooterContent footerContent={data.footerContent} />
    </div>
  );
};

export default DisplaySolutionDetailPage;

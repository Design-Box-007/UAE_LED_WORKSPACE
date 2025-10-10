"use client";

import { tabsData } from "@/data/Display-solution/data";
import { formatToHyphenated } from "@/utils/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const DisplaySolutionDetailPage = () => {
  const params = useParams();
  const data = tabsData.find(
    (d) => formatToHyphenated(d.title) === params.slug
  );

  return (
    <div>
      <h1>{data?.title}</h1>
      <Image
        width={1080}
        height={720}
        alt={data?.title ?? "Display Solution Image"}
        src={data?.image ?? "/placeholder.png"}
      />
      <p>{data?.description}</p>
    </div>
  );
};

export default DisplaySolutionDetailPage;

"use client";

import { tabsData2 } from "@/data/Display-solution/data";
import { formatToHyphenated } from "@/utils/utils";
import { useParams } from "next/navigation";
import Image from "next/image";

export default function DisplaySolutionDetailPage() {
  const params = useParams(); // { slug: "by-pixel-pitch" }
  const { slug } = params;

  // Find the correct solution object from all categories
  const solution = tabsData2
    .flatMap((category) => category.solutions) // combine all solutions into one array
    .find((sol) => formatToHyphenated(sol.title) === slug);

  if (!solution) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2>Solution not found!</h2>
      </div>
    );
  }

  return (
    <section className="p-5 md:p-10">
      <div className="mx-auto text-center mt-20">
        <h1 className="text-4xl font-bold mb-6 font-playfair">{solution.title}</h1>
        <div className="flex justify-center mb-6">
          <Image
            src={solution.image}
            alt={solution.title}
            width={800}
            height={450}
            className="rounded-2xl shadow-md w-full lg:h-[600px] object-cover"
          />
        </div>
        <p className="text-gray-700 text-lg">
          Detailed information about <b>{solution.title}</b> goes here.
        </p>
      </div>
    </section>
  );
}

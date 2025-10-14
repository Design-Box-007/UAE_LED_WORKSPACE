"use client";
import NotFound from "@/components/UI/NotFound";
import { Aboutinsights } from "@/data/Explore/data";
import { formatToHyphenated } from "@/utils/utils";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { FiShare2 } from "react-icons/fi";

const AboutDetail = () => {
  const params = useParams();
  const data = Aboutinsights.find(
    (d) => formatToHyphenated(d.title) === params.slug
  );
  if (!data) return <NotFound />;
  const handleShare = async () => {
    const shareData = {
      title: data.title,
      text: data.desc,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        // ✅ Use Web Share API
        await navigator.share(shareData);
      } else {
        // ❌ Fallback → copy link
        await navigator.clipboard.writeText(window.location.href);
        alert("Link copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
  return (
    <div className="mx-auto px-4 py-8 md:pt-25 pt-20">
      {/* Header with title + share icon */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug">
          {data.title}
        </h2>
        <FiShare2
          title="share"
          onClick={handleShare}
          className="text-gray-500 hover:text-gray-800 cursor-pointer text-xl"
        />
      </div>

      {/* Blog image */}
      <div className="mt-6 rounded-lg overflow-hidden w-full h-full lg:h-[800px]">
        <Image
          src={data.image}
          alt={data.title}
          width={1080}
          height={720}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog description */}
      <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
        {data.desc}
      </p>
    </div>
  );
};

export default AboutDetail;

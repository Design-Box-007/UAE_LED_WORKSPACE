"use client";

import React from "react";
import { FiShare2 } from "react-icons/fi";
import { useParams } from "next/navigation";
import { Aboutinsights } from "@/data/Explore/data";
import { formatToHyphenated } from "@/utils/utils";
import Image from "next/image";

const BlogDetail = () => {
  const params = useParams();
  const slug = params?.slug as string;

  const blog = Aboutinsights.find(
    (blog) => formatToHyphenated(blog.title) === slug
  );

  if (!blog) return <p className="text-center text-gray-500">Not Found</p>;

  const handleShare = async () => {
    const shareData = {
      title: blog.title,
      text: blog.desc,
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
          {blog.title}
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
          src={blog.image}
          alt={blog.title}
          width={1080}
          height={720}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog description */}
      <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
        {blog.desc}
      </p>
    </div>
  );
};

export default BlogDetail;

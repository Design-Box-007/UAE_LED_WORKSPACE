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

  return (
    <div className="mx-auto px-4 py-8   pt-20">
      {/* Header with title + share icon */}
      <div className="flex items-start justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
          {blog.title}
        </h2>
        <FiShare2 className="text-gray-500 hover:text-gray-800 cursor-pointer text-xl" />
      </div>

      {/* Blog image */}
      <div className="mt-6 rounded-lg overflow-hidden w-full h-[800px]">
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

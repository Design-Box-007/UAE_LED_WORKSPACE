"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRef } from "react";

export const MotionFadeIn = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export const MotionSlideUp = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 40,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}) => (
  <motion.div
    initial={{ y: distance, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
export const MotionSlideLeft = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 60,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}) => (
  <motion.div
    initial={{ x: -distance, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
export const MotionSlideRight = ({
  children,
  delay = 0,
  duration = 0.6,
  distance = 60,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  distance?: number;
}) => (
  <motion.div
    initial={{ x: distance, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
export const MotionZoomIn = ({
  children,
  delay = 0,
  duration = 0.6,
  scaleFrom = 0.85,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  scaleFrom?: number;
}) => (
  <motion.div
    initial={{ scale: scaleFrom, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
export const MotionRotateIn = ({
  children,
  angle = 10,
  delay = 0,
  duration = 0.7,
}: {
  children: React.ReactNode;
  angle?: number;
  delay?: number;
  duration?: number;
}) => (
  <motion.div
    initial={{ rotate: angle, opacity: 0, scale: 0.9 }}
    whileInView={{ rotate: 0, opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);
export const MotionImageReveal = ({
  src,
  alt,
  width,
  height,
  classname,
  delay = 0,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay?: number;
  classname?: string;
}) => (
  <motion.div
    // className="overflow-hidden inline-block"
    initial={{ clipPath: "inset(0 100% 0 0)" }}
    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.8, ease: "easeInOut" }}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={classname}
    />
  </motion.div>
);
export const MotionText = ({
  text,
  delay = 0,
  stagger = 0.04,
}: {
  text: string;
  delay?: number;
  stagger?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren: stagger, delayChildren: delay },
      },
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { y: 20, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
        transition={{ ease: "easeOut" }}
      >
        {char}
      </motion.span>
    ))}
  </motion.div>
);
export const MotionStagger = ({
  children,
  delayChildren = 0.3,
  stagger = 0.15,
}: {
  children: React.ReactNode;
  delayChildren?: number;
  stagger?: number;
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: stagger, delayChildren },
      },
    }}
  >
    {React.Children.map(children, (child) => (
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {child}
      </motion.div>
    ))}
  </motion.div>
);
export const MotionParallax = ({
  children,
  offset = 100,
}: {
  children: React.ReactNode;
  offset?: number;
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

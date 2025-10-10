"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type RevealComponentProps = {
  children: ReactNode;
  backgroundClass?: string;
  outerClass?: string;
  direction?: "left" | "right" | "top" | "bottom";
};

const getInitialStyle = (direction: string) => {
  switch (direction) {
    case "left":
      return { width: "100%", left: 0, top: 0, bottom: 0 };
    case "right":
      return { width: "100%", right: 0, top: 0, bottom: 0 };
    case "top":
      return { height: "100%", top: 0, left: 0, right: 0 };
    case "bottom":
      return { height: "100%", bottom: 0, left: 0, right: 0 };
    default:
      return { width: "100%", left: 0, top: 0, bottom: 0 };
  }
};

const getAnimateStyle = (direction: string) => {
  switch (direction) {
    case "left":
    case "right":
      return { width: 0 };
    case "top":
    case "bottom":
      return { height: 0 };
    default:
      return { width: 0 };
  }
};

const RevealComponent: React.FC<RevealComponentProps> = ({
  children,
  backgroundClass = "bg-background",
  outerClass = "",
  direction = "right",
}) => {
  return (
    <div className={`relative overflow-hidden ${outerClass}`}>
      {children}
      <motion.div
        className={`absolute z-[90] ${backgroundClass}`}
        style={getInitialStyle(direction)}
        initial={getInitialStyle(direction)}
        whileInView={getAnimateStyle(direction)}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />
    </div>
  );
};

export default RevealComponent;

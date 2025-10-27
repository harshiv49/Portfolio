"use client";
import { motion } from "framer-motion";
import React from "react";

export const SectionDivider: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};

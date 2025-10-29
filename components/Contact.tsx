"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSessionContext } from "@/context/ActiveSessionContext";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { setActiveSection, setTimeOfLastClick } = useActiveSessionContext();

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me at{" "}
        <a className="underline" href="mailto:harshiv49@gmail.com">
          harshiv49@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
          // Add your form submission logic here
        }}
      >
        <input
          className="h-14 px-4 rounded-lg border border-black/10"
          type="email"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg border border-black/10 p-4"
          placeholder="Your message"
          required
          maxLength={2000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110 active:scale-105 hover:bg-gray-950 focus:scale-110"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </button>
      </form>
    </motion.section>
  );
}

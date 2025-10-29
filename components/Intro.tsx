"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSessionContext } from "@/context/ActiveSessionContext";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSessionContext();
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 text-center sm:mb-0 max-w-[50rem] scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://d27c8oqoqzlxum.cloudfront.net/assets/Harshiv.jpeg"
              alt="Harshiv portrait"
              width={192}
              height={192}
              priority
              className="rounded-full h-24 w-24 border-[0.35rem] shadow-xl border-white object-cover"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                duration: 0.7,
                stiffness: 125,
                delay: 0.1,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Harshiv.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="mt-6 flex flex-col sm:flex-row items-center text-lg font-medium justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 hover:bg-gray-950 active:scale-105 transition "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className=" bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10"
          href="/CV.pdf"
          download
        >
          Download CV <HiDownload />{" "}
        </a>
        {/** Social Links */}
        {/* TODO: Add social links */}
        <div className="flex justify-between gap-4">
          <a
            className="bg-white text-gray-900 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] 
          hover:scale-[1.15]  active:scale-105 transition cursor-pointer border border-black/10"
          >
            <BsLinkedin />{" "}
          </a>
          <a
            className="bg-white text-gray-900 px-5 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] 
          hover:scale-[1.15]  active:scale-105 hover:text-gray-950 transition cursor-pointer border border-black/10"
          >
            <FaGithubSquare />{" "}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

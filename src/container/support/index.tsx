"use client";
import Image from "next/image";
import DiscoverImg from "@/assets/img/mitre.png";
import SearchImg from "@/assets/img/feature_search.png";
import CableImg from "@/assets/img/cable.png";
import DummyVideo from "@/assets/img/dummy-video.png";
import { Button } from "@/components";
import { motion } from "framer-motion";

export const Support = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="support"
      className="bg-no-repeat bg-center p-8"
      style={{
        backgroundImage: `url("/background-support.png")`,
        height: "auto",
      }}
    >
      <div className="m-0 lg:m-10">
        {/* First Section */}
        <motion.div
          className="flex flex-col gap-y-12 md:gap-y-20 items-center justify-center p-4 md:p-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            WashingAI:{" "}
            <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
              A Deep Dive
            </span>
          </h1>
          <p className="w-full text-lg md:text-xl lg:text-2xl text-center">
            Washing AI integrates a WhatsApp bot to provide users with a
            convenient and user-friendly interface for interacting with the
            platform.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-10">
            {/* Individual Features */}
            {[DiscoverImg, SearchImg, CableImg].map((img, index) => (
              <motion.div
                key={index}
                className="flex w-full gap-4"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                variants={fadeInUp}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                <div className="flex w-48 lg:w-44 h-16 p-4 border rounded-lg border-[#1F8BF0]">
                  <Image src={img} alt={`Feature ${index + 1}`} />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    Discover the Future
                  </h5>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates odit earum dolore quidem hic.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 p-4 md:p-20"
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full md:w-1/2">
            <Image src={DummyVideo} alt="Video" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-8">
            <h4 className="font-bold text-3xl md:text-4xl lg:text-5xl">
              Unveil{" "}
              <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
                the Secrets of the{" "}
              </span>
              WhatssBot
            </h4>
            <p className="text-lg md:text-xl lg:text-2xl">
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty
              streets, and cybernetic enhancements.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Button onClick={() => alert("read more")} label="Read More" />
              <Button
                onClick={() => alert("read more")}
                label="Learn More"
                variant="ghost"
              />
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-y-12 md:gap-y-20 items-center justify-center p-4 md:p-20 mt-16"
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            Frequently Asked <br />
            <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="w-full md:w-2/3 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            neque alias praesentium ea ratione nihil illum debitis culpa,
            laboriosam a corrupti. Pariatur dicta cum possimus vero quia
            consequuntur labore magnam.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[1, 2, 3, 4].map((num) => (
              <motion.div
                key={num}
                className="flex items-start gap-4"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                variants={fadeInUp}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: num * 0.2,
                }}
              >
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
                  {num < 10 ? `0${num}` : num}.
                </h1>
                <div className="flex flex-col gap-3 border-b p-4 border-[#1F8BF0]">
                  <h5 className="font-semibold text-xl md:text-2xl lg:text-3xl">
                    Discover the Future
                  </h5>
                  <p className="text-lg md:text-xl lg:text-2xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates odit earum dolore quidem hic.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

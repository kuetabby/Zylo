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

  const features = [
    {
      img: CableImg,
      label: "Privacy-Preserving Transactions",
      desc: "Leveraging zero-knowledge proof technology, Washing AI ensures maximum anonymity for users by obfuscating transaction details.",
    },
    {
      img: CableImg,
      label: "Fiat On-Ramps and Off-Ramps",
      desc: "The platform facilitates seamless conversion between cryptocurrencies and fiat currencies, making it accessible to a broader audience and simplifying the process of entering and exiting the cryptocurrency market.",
    },
    {
      img: CableImg,
      label: "Real-Time Market Analysis",
      desc: "Employing advanced machine learning algorithms, Washing AI provides users with real-time insights into market trends and identifies potential profitable trading opportunities.",
    },
    {
      img: CableImg,
      label: "High-Frequency Trading",
      desc: "The platform offers a sniper bot capable of executing trades with minimal latency.",
    },
  ];

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
          className="flex flex-col gap-y-12 md:gap-y-20 items-center justify-center p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            {/* WashingAI:{" "} */}
            <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
              A Deep Dive
            </span>
          </h1>
          <p className="w-full text-lg md:text-xl lg:text-2xl text-center">
            Washing AI integrates a WhatsApp bot to provide users with a
            convenient and user-friendly interface for interacting with the
            platform.
          </p>

          {/* Individual Features */}
          <div className="flex flex-wrap justify-between gap-6">
            {features.map((data, index) => (
              <motion.div
                key={index}
                className="flex w-full sm:w-[30%] gap-4"
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
                <div className="flex w-48 h-16 p-4 border rounded-lg border-[#1F8BF0]">
                  <Image src={data.img} alt={`Feature ${index + 1}`} />
                </div>
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-md md:text-lg lg:text-xl">
                    {data.label}
                  </h5>
                  <p className="text-sm md:text-md">{data.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-y-12 md:gap-y-20 items-center justify-center p-4 mt-16"
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
              FAQ
            </span>
          </h1>
          {/* <p className="w-full md:w-2/3 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            neque alias praesentium ea ratione nihil illum debitis culpa,
            laboriosam a corrupti. Pariatur dicta cum possimus vero quia
            consequuntur labore magnam.
          </p> */}
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

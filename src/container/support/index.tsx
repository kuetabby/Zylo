"use client";
import Image from "next/image";
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
      img: "/Icon_Aset.svg",
      title: "Data Collection & Contextualization",
      desc: "Upload your raw, unstructured data into Zylo. It could be customer information, market data, or any business-critical data",
    },
    {
      img: "/Icon_Aset2.svg",
      title: "MCP Activation",
      desc: "Zylo applies Model Context Protocol (MCP) to your data, enriching it with context that makes it intelligent and actionable",
    },
    {
      img: "/Icon_Aset3.svg",
      title: "Secure, Decentralized Storage",
      desc: "Your data is securely encrypted and stored across decentralized networks, ensuring both privacy and reliability",
    },
    {
      img: "/Icon_Aset4.svg",
      title: "Real-Time Insights",
      desc: "Access your data instantly. Zylo delivers actionable insights in real-time, giving you the tools to make data-driven decisions faster than ever before",
    },
    {
      img: "/Icon_Aset5.svg",
      title: "Seamless Integration",
      desc: "Easily integrate Zylo with your existing systems and workflows, ensuring a smooth and efficient process with minimal disruption",
    },
  ];

  const faq = [
    {
      id: 1,
      label: "What is Zylo?",
      desc: "Zylo is a cutting-edge AI-driven platform designed to transform raw, unstructured data into actionable, intelligent insights",
    },
    {
      id: 2,
      label: "How does Zylo ensure data security?",
      desc: "Zylo uses decentralized storage with end-to-end encryption to protect your data",
    },
    {
      id: 3,
      label: "Is Zylo compliant with industry regulations?",
      desc: "It is designed to meet the regulatory standards of industries such as finance, healthcare, and legal, ensuring your data management practices are secure and compliant with the latest standards.",
    },
    {
      id: 4,
      label: "How can I get started with Zylo?",
      desc: "Getting started with Zylo is easy. Simply sign up on our website, integrate your data, and let Zylo do the rest.",
    },
  ];

  return (
    <section
      className="bg-no-repeat bg-center p-8 relative"
      style={{
        backgroundImage: `url("/background-support.png")`,
        height: "auto",
      }}
    >
      <div className="absolute top-0 right-0 w-full h-[200px] bg-gradient-to-t from-transparent to-black z-[1000]" />

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
            How
            <span className="bg-gradient-to-r from-[#9800bf] to-[#d46aff] bg-clip-text text-transparent mx-2">
              Zylo
            </span>
            Works
          </h1>
          <p className="w-full text-base md:text-lg lg:text-xl text-center">
            Zylo integrates Model Context Protocol (MCP) with cutting-edge AI to
            turn raw data into valuable, context-aware insights that businesses
            can act on in real time.
          </p>

          {/* Individual Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {/* Individual Features */}
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                variants={fadeInUp}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
                <Image
                  src={item.img}
                  alt={`Feature ${index + 1}`}
                  width={50}
                  height={50}
                  className="w-24 h-auto p-4 border-2 rounded-lg border-[#9800bf] bg-black"
                />
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl lg:text-2xl">
                    {item.title}
                  </h5>
                  <p className="text-sm lg:text-base">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="h-12" id="faq" />
        {/* FAQ Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-y-12 md:gap-y-20 items-center justify-center p-4 mt-10"
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-center">
            FAQ
          </h1>
          {/* <p className="w-full md:w-2/3 lg:w-1/2 text-lg md:text-xl lg:text-2xl text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            neque alias praesentium ea ratione nihil illum debitis culpa,
            laboriosam a corrupti. Pariatur dicta cum possimus vero quia
            consequuntur labore magnam.
          </p> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {faq.map((data) => (
              <motion.div
                key={data.id}
                className="flex items-start gap-4"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                initial="hidden"
                variants={fadeInUp}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: data.id * 0.2,
                }}
              >
                <h1 className="font-semibold text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-[#9800bf] to-[#d46aff] bg-clip-text text-transparent">
                  {data.id < 10 ? `0${data.id}` : data.id}.
                </h1>
                <div className="flex flex-col gap-3 border-b-2 p-4 border-[#9800bf]">
                  <h5 className="font-semibold text-xl lg:text-2xl">
                    {data.label}
                  </h5>
                  <p className="text-sm lg:text-base">{data.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-[1000]" />
    </section>
  );
};

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DummyVideo from "@/assets/img/dummy-video.png";
import DummyImage from "@/assets/img/dummy-image.png";
import "./style.css";
import { ArrowRightOutlined } from "@ant-design/icons";

export const Pages = () => {
  return (
    <motion.section
      id="pages"
      className="mt-8 bg-no-repeat bg-center p-8"
      style={{
        backgroundImage: `url("/background-pages.png")`,
        height: "auto",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="m-0 lg:m-10">
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-40 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full lg:w-1/2">
            <h4 className="font-bold text-[32px] sm:text-[48px] lg:text-[58px]">
              WashingAI{" "}
              <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
                Tokenomics
              </span>
            </h4>
            {/* <p className="mt-4 text-[16px] sm:text-[18px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum cupiditate ipsam recusandae atque necessitatibus
              voluptates ut impedit iure provident iste esse qui, totam corrupti
              vero, doloremque sed praesentium molestias quisquam.
            </p> */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10 mt-8">
              <div>
                <h4 className="font-bold bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent text-[32px] sm:text-[48px] lg:text-[58px]">
                  WASH
                </h4>
                <p>Name</p>
              </div>
              <div>
                <h4 className="font-bold bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent text-[32px] sm:text-[48px] lg:text-[58px]">
                  $WASH
                </h4>
                <p>Ticker</p>
              </div>
              <div>
                <h4 className="font-bold bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent text-[32px] sm:text-[48px] lg:text-[58px]">
                  100M
                </h4>
                <p>Total Supply</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src={DummyVideo}
              alt="Dummy Video"
              className="w-full h-auto max-w-full lg:max-w-screen-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-40 my-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <Image
              src={DummyVideo}
              alt="Dummy Video"
              className="w-full h-auto max-w-full lg:max-w-screen-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="font-bold text-[32px] sm:text-[48px] lg:text-[58px]">
              Unveil
              <span className="bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent">
                {" "}
                the Secrets of the{" "}
              </span>
              WhatssBot
            </h4>
            <p className="mt-4 text-[16px] sm:text-[18px]">
              A realm where advanced technology meets dystopian reality. Our
              website is your gateway to a universe of neon lights, gritty
              streets, and cybernetic enhancements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 border border-[#1F8BF0] rounded-2xl bg-transparent backdrop-blur-md p-8 mt-10">
              <div className="flex-1">
                <Image
                  src={DummyImage}
                  alt="Cubes Img"
                  width={200}
                  height={200}
                  className="w-full h-auto"
                />
              </div>
              <div className="flex-1 mt-4 sm:mt-0">
                <h4 className="font-bold text-[24px] sm:text-[28px]">
                  Join the Revolution
                </h4>
                <p className="text-[14px] sm:text-[16px]">
                  Explore the high-tech, low-life world where the lines between
                  humanity and machinery blur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="h-auto lg:h-screen flex items-center justify-center p-8 lg:p-20 background-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-20 w-full">
            <div className="w-full lg:w-1/2">
              <h1 className="font-bold text-[36px] sm:text-[48px] lg:text-[65px]">
                About WashingAI
              </h1>
              <p className="mt-8 lg:mt-14 text-[16px] sm:text-[18px]">
                Washing AI is a decentralized application (dApp) built on the
                Ethereum blockchain. It harnesses the power of smart contracts
                and artificial intelligence (AI) to provide a comprehensive
                suite of tools aimed at enhancing user privacy and optimizing
                trading efficiency within the cryptocurrency ecosystem.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col gap-4 lg:gap-10 border border-[#1F8BF0] rounded-2xl bg-transparent backdrop-blur-md p-8">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex gap-5 items-center">
                    <span className="w-2 h-2 p-2 bg-[#6DEEDC]"></span>
                    <h4 className="text-[14px] sm:text-[16px]">
                      Privacy-Preserving Transactions
                    </h4>
                  </div>
                  <ArrowRightOutlined />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex gap-5 items-center">
                    <span className="w-2 h-2 p-2 bg-[#1F8BF0]"></span>
                    <h4 className="text-[14px] sm:text-[16px]">
                      Fiat On-Ramps and Off-Ramps
                    </h4>
                  </div>
                  <ArrowRightOutlined />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex gap-5 items-center">
                    <span className="w-2 h-2 p-2 bg-[#6DEEDC]"></span>
                    <h4 className="text-[14px] sm:text-[16px]">
                      Real-Time Market Analysis
                    </h4>
                  </div>
                  <ArrowRightOutlined />
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="flex gap-5 items-center">
                    <span className="w-2 h-2 p-2 bg-[#1F8BF0]"></span>
                    <h4 className="text-[14px] sm:text-[16px]">
                      High-Frequency Trading
                    </h4>
                  </div>
                  <ArrowRightOutlined />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

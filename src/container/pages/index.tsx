"use client";
import { motion } from "framer-motion";
// import Image from "next/image";
// import DummyVideo from "@/assets/img/dummy-video.png";
// import DummyImage from "@/assets/img/dummy-image.png";
import "./style.css";
// import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "@/components";
import { socialsLink, findUsLink } from "@/constant/links";
import Link from "next/link";

export const Pages = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      id="about"
      className="mt-8 bg-no-repeat bg-center p-8 relative" // Add 'relative' here
      style={{
        backgroundImage: `url("/background-pages.png")`,
        height: "100%",
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
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-transparent to-black z-[1000]" />
      <div className="h-12" />
      <div className="m-0 lg:m-10">
        {/* Video Section */}
        <motion.div
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 p-4 mt-20 mb-60"
          initial="hidden"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="block lg:hidden font-bold text-3xl md:text-4xl lg:text-5xl">
            About Zylo
          </h4>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full rounded-lg object-cover"
            >
              <source src="/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <h4 className="hidden lg:block font-bold text-3xl md:text-4xl lg:text-5xl">
              About <span className="text-[#9800bf]">Zylo</span>
            </h4>
            <p className="text-base md:text-lg lg:text-xl">
              Zylo is shaping the future of AI-powered, data-driven solutions.
              As industries around the world continue to generate massive
              amounts of unstructured data, businesses need more than just
              storage—they need intelligent, actionable insights.
            </p>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={socialsLink.bot}
                className="no-underline hover:underline"
              >
                <Button label="DAPP" />
              </Link>

              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={socialsLink.whitepaper}
                className="no-underline hover:underline"
              >
                <Button label="Documentation" variant="ghost" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Black Gradient at the Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent z-[1000]" />
      {/* Gradient overlay */}
    </motion.section>
  );
};

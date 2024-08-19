"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import HeroImage from "@/assets/img/hero.png";
import Cubes from "@/assets/img/cubes.png";
import { Button } from "@/components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section id="hero" className="relative p-8 m-0 lg:m-10">
      <motion.div
        className="relative flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeInDown}
      >
        <Image src={HeroImage} alt="Hero Image" className="-z-10" />
        <h1 className="absolute top-12 font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] text-center">
          WASHING AI
        </h1>
      </motion.div>

      <div className="block lg:hidden">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <motion.div
              className="flex flex-col items-center gap-y-4 w-full max-w-[424px] mx-auto mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[35px] my-4 text-center">
                BUILDING NEW PARADIGM
              </h4>
              <p className="font-medium text-sm sm:text-base md:text-lg lg:text-[18px] text-center">
                By combining cutting-edge technology with a user-centric approach, Washing AI empowers individuals to take control of their financial future while safeguarding their sensitive information.
              </p>
              <div className="mt-4">
                <Button onClick={() => alert("Read More")} label="Read More" />
              </div>
            </motion.div>
          </SwiperSlide>

          {/* Slide 2 */}
          {/* <SwiperSlide>
            <motion.div
              className="flex flex-col items-center gap-y-4 w-full max-w-[424px] mx-auto mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInUp}
            >
              <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[35px] my-4 text-center">
                A REVOLUTIONARY PLATFORM
              </h4>
              <p className="font-medium text-sm sm:text-base md:text-lg lg:text-[18px] text-center">
                a revolutionary platform designed to meet the evolving needs of cryptocurrency users, with a focus on privacy, accessibility, and profitability.
              </p>
              <div className="mt-4">
                <Button onClick={() => alert("Read More")} label="Read More" />
              </div>
            </motion.div>
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className="hidden lg:block relative">
        {/* <motion.div
          className="flex items-start gap-y-4 flex-col absolute w-[424px] left-0 bottom-72"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h4 className="font-semibold text-[35px] my-4">The Idea</h4>
          <p className="font-medium text-[18px]">
            a revolutionary platform designed to meet the evolving needs of
            cryptocurrency users, with a focus on privacy, accessibility, and
            profitability. In an era where digital privacy is paramount, Washing
            AI leverages cutting-edge technologies like zero-knowledge proofs to
            ensure that user transactions remain confidential and secure.
          </p>
        </motion.div> */}

        <motion.div
          className="flex items-end gap-y-4 flex-col absolute w-[424px] right-0 bottom-52"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h4 className="font-semibold text-[35px] text-right my-4">
            BUILDING NEW PARADIGM
          </h4>
          <p className="font-medium text-[18px] text-right">
            By combining cutting-edge technology with a user-centric approach,
            Washing AI empowers individuals to take control of their financial
            future while safeguarding their sensitive information.
          </p>
          <div>
            <Button onClick={() => alert("Read More")} label="Read More" />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="w-full lg:w-3/4 xl:w-1/2 2xl:w-2/5 relative py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={fadeIn}
      >
        <div className="lg:absolute lg:-bottom-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="w-autos flex flex-col lg:flex-row gap-4 border border-[#1F8BF0] rounded-2xl bg-transparent backdrop-blur-md p-8">
            <Image src={Cubes} alt="Cubes Img" className="m-auto" />
            <div className="w-auto">
              {/* <h4 className="font-bold bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[58px]">
                76,286K+
              </h4> */}
              {/* <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-[28px]">
                Lorem Ipsum dolorsin.
              </h4> */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                a revolutionary platform designed to meet the evolving needs of
                cryptocurrency users, with a focus on privacy, accessibility,
                and profitability.
              </p>
            </div>
          </div>
          {/* <div className="">
            <h4 className="font-normal text-[36px]">
              ART AND <span className="font-bold">DESIGN</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Similique doloremque eveniet eius voluptates ab? Velit beatae
              doloribus odio, quae harum ut rem rerum dolor accusantium! Totam
              similique architecto ipsam tempora!
            </p>
          </div> */}
          {/* <div className="border border-[#1F8BF0] rounded-2xl bg-transparent backdrop-blur p-8">
            <h4 className="font-bold bg-gradient-to-r from-[#1F8BF0] to-[#6DEEDC] bg-clip-text text-transparent text-[58px]">
              17+
            </h4>
            <h4 className="font-semibold text-[28px]">Years of Experiences</h4>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
};

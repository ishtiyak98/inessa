import React from "react";
import styles from "./HomeBanner.module.css";
import { motion } from "framer-motion";

const HomeBanner = () => {
  const btnVariant = {
    hide: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: 1,
      },
    },
  };

  return (
    <section
      className={`h-[90vh] bg-slate-500 flex justify-center items-center ${styles.banner_background}`}
    >
      <div className="max-w-[1600px] w-full">
        <div className="px-5 lg:px-28 space-y-4 lg:space-y-8">
          <motion.p
            className="uppercase heading-font text-lg font-bold tracking-[2px]"
            initial={{ x: "-100vw" }}
            animate={{
              x: "0px",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
          >
            member's days
          </motion.p>
          <div className="uppercase heading-font text-5xl lg:text-8xl leading-[60px] lg:leading-[92px]">
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{
                x: "0px",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2,
              }}
            >
              Your
            </motion.h1>
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{
                x: "0px",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.4,
              }}
            >
              Exclusive
            </motion.h1>
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{
                x: "0px",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.6,
              }}
            >
              sitewide
            </motion.h1>
            <motion.h1
              initial={{ x: "-100vw" }}
              animate={{
                x: "0px",
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.8,
              }}
            >
              offer awaits
            </motion.h1>
          </div>
          <motion.div
            className="uppercase body-font font-medium px-6 py-3 bg-black text-white inline-block tracking-[2px] hover:cursor-pointer"
            initial="hide"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={btnVariant}
          >
            signup now
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

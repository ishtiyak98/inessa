import React from "react";
import styles from "./HomeBanner.module.css";

const HomeBanner = () => {
  return (
    <section
      className={`h-[90vh] bg-slate-500 flex justify-center items-center ${styles.banner_background}`}
    >
      <div className="max-w-[1600px] w-full">
        <div className="px-28 space-y-8">
          <p className="uppercase heading-font text-lg font-bold tracking-[2px]">
            member's days
          </p>
          <h1 className="uppercase heading-font text-8xl leading-[82px]">
            Your <br /> exclusive <br /> sitewide <br /> offer awaits
          </h1>
          <div className="uppercase body-font font-medium px-6 py-3 bg-black text-white inline-block tracking-[2px] hover:cursor-pointer">
            signup now
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HomeBanner;

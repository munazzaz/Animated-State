"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ManHangingLine from "@/../public/ManHangingLine.png";
import InYourTownText from "@/../public/InYourTownText.gif";
import CrowdBottom from "@/../public/CrowdBottom.gif";
import ManHangingGif from "@/../public/ManHanging.gif";

const InYourTown = () => {
  const ref = useRef(null);

  // 🌟 Fix: Track scroll relative to this section only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end start"], // Starts animation earlier
  });
  

  // Opacity animation for smooth fade-in/out
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.5, 0.9], [1250, 0, -3200]);
  const translateY = useTransform(scrollYProgress, [0, 0.4], [150, 0]);
  // const bgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 2]);

  // Fix: Adjust horizontal movement of Man Hanging Gif
  const manGifTranslateX = useTransform(scrollYProgress, [0, 0.4, 0.9], [800, 0, -3200]);

  return (
    <div ref={ref} className="relative -mt-[40vh] overflow-clip"
    
    >
      {/* Outer container provides extra scroll space */}
      <div className="relative h-[322vh]">
        {/* Sticky container with background */}
        <div
          className="sticky top-0 h-screen z-[1000] flex items-center justify-center"
          style={{
            backgroundImage: `url(/InYourTownBg.gif)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            // opacity: bgOpacity,
          }}
        >
          {/* Container for the hanging man elements */}
          <div className="absolute flex flex-col bottom-[34.6rem] w-full left-0">
            {/* Man Hanging Line image */}
            <Image src={ManHangingLine} alt="Man Hanging Line" />
            
            {/* Man Hanging Gif with correct positioning */}
            <motion.div className="absolute -top-32 lg:right-[50rem]" style={{ x: manGifTranslateX }}>
              <Image src={ManHangingGif} alt="Man Hanging Gif" className="w-[410px] h-auto" />
            </motion.div>
          </div>

          {/* InYourTown Text */}
          <div>
            <Image src={InYourTownText} alt="In Your Town Text" className="-mb-16" />
          </div>

          {/* Crowd Bottom at bottom */}
          <div className="absolute -bottom-56 left-0 w-full">
            <Image src={CrowdBottom} alt="Crowd Bottom" className="w-full" />
          </div>

          {/* Additional animated block */}
          <motion.div
            className="absolute flex justify-center items-center relative"
            style={{
              opacity,
              x: translateX,
              y: translateY,
            }}
            transition={{ ease: "easeInOut", duration: 1.5 }}
          >
            {/* Add extra animated elements if needed */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InYourTown;

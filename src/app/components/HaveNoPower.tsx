"use client";
import { motion, useScroll, useTransform  } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Eagle from "@/../public/Eagle.gif";
import textleft from "@/../public/left-text.png";
import textright from "@/../public/right-text.png";
import GifText from "@/../public/GifText.gif"


const HaveNoPower = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Opacity (Image fades in)
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0], );

  // Moves from Right to Center and exits fully left
  const translateX = useTransform(scrollYProgress, [0, 0.5, 1], [1250, 0, -3200] );

  // Wrap it in a spring for smoothing


  // Moves Up to Center (Y-axis)
  const translateY = useTransform(scrollYProgress, [0, 0.4], [150, 0]);

  // Background opacity (fades in smoothly)
  const bgOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 2]);

  return (
    <div ref={ref} className="relative  h-[380vh] flex flex-col items-center justify-center overflow-clip">
      {/* Background stays fixed */}
      <motion.div
        className="fixed top-0 left-0 w-full h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('/no-power-bg.gif')",
          opacity: bgOpacity,
        }}
      />

      {/* Sticky Wrapper (Keeps content in view during scroll) */}
      <div className="sticky top-0 h-[100vh] flex items-center sm:-mr-44 justify-center">
      <div className="absolute sm:-ml-44 top-[29.1rem] sm:top-[13.1rem] w-[45rem] sm:w-[90rem] z-20">
          <Image src={GifText} alt="Overlay Text" className="w-[1000px] sm:w-[3000rem] h-auto" />
        </div>


        <motion.div
         className="absolute flex justify-center items-center relative"
         style={{
           opacity,
           x: translateX, // Use the smoothed version
           y: translateY,
         }}
         
        >
          {/* Left Image (Text) */}
          <Image
            src={textleft}
            alt="Text Left"
            className="absolute left-[-50px] -mt-[160px] w-[120px] h-auto"
          />

          {/* Center GIF */}
          <Image src={Eagle} alt="Have No Power" className="w-[450px] h-auto relative z-10" />

          {/* Right Image (Text) */}
          <Image
            src={textright}
            alt="Text Right"
            className="absolute right-[4px] -mb-[160px] w-[170px] h-auto"
          />

        
        </motion.div>
      </div>
    </div>
  );
};

export default HaveNoPower;





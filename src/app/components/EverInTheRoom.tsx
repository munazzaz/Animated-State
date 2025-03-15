"use client";

import { useEffect, useRef } from "react";
import { Castoro_Titling } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MansLaughing from "@/../public/cropped-image.gif";
import hall from "@/../public/hall-96.jpg";
import hall2 from "@/../public/hall.png";
import CenterGif from "@/../public/center-gif-1.gif";
import LeftImage from "@/../public/images-left.png";
import GifLeft from "@/../public/gif-left.gif";
import RightImage from "@/../public/right-images-2.png";
import WithRightImage from "@/../public/with-right-images-2.png";
import NowYouAre from "@/../public/now-you-are-1.png";

const Costoro = Castoro_Titling({
  weight: "400",
  subsets: ["latin"],
});

const EverInYourRoom = () => {
  const containerRef = useRef(null);

  // Increase overall height to create more scroll room
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1) Hall images: finish zoom-out by ~80% scroll
  const hallScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.8],
    [8, 8, 4, 1]
  );

  // 2) Men’s image: fade/scale out by ~75%
  const menScale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.45, 0.75],
    [1, 1, 0.5, 0.2]
  );
  const menOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.7, 0.75],
    [1, 1, 0]
  );

  // 3) Text fade-out
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.55],
    [1, 1, 0]
  );

  // 4) Center GIF: appears ~70–80%
  const centerGifOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    [0, 1]
  );
  const centerGifScale = useTransform(
    scrollYProgress,
    [0.7, 0.8],
    [1.9, 1]
  );

  // 5) Left & right images: slide in from 90% to 92%
  const leftImagesOpacity = useTransform(
    scrollYProgress,
    [0.9, 0.92],
    [0, 1]
  );
  const leftImagesTranslateX = useTransform(
    scrollYProgress,
    [0.9, 0.92],
    [-100, 0]
  );
  const rightImageOpacity = useTransform(
    scrollYProgress,
    [0.9, 0.92],
    [0, 1]
  );
  const rightImageTranslateX = useTransform(
    scrollYProgress,
    [0.9, 0.92],
    [100, 0]
  );

  // 6) "Now You Are" image: fade in from 93% to 95%
  const nowYouAreOpacity = useTransform(
    scrollYProgress,
    [0.93, 0.94],
    [0, 1]
  );
  const nowYouAreScale = useTransform(
    scrollYProgress,
    [0.93, 0.94],
    [1.2, 1]
  );

  // 7) White overlay: now fades in from 98% to 100%
  const whiteOverlayOpacity = useTransform(
    scrollYProgress,
    [0.97, 1],
    [0, 1]
  );

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      console.log("Scroll progress:", latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div
      ref={containerRef}
      className={`${Costoro.className} relative bg-white -mt-[99vh] overflow-clip bg-fixed`}
      style={{
        height: "890vh",
        width: "100%", // Force full viewport width
        backgroundImage: "url(/hall96.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative h-[990vh]">
        {/* Sticky container with background (scaling, etc.) */}
        <div
          className="sticky top-0 h-screen z-[1000] flex items-center justify-center w-full"
          style={{
            backgroundImage: "url(/hall96.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            willChange: "transform",
          }}
        >
          {/* Hall images with zoom-out effect */}
          <motion.div
            className="absolute inset-0 flex pt-4 justify-center items-center"
            style={{
              scale: hallScale,
              transformOrigin: "center",
              willChange: "transform",
            }}
          >
            <Image src={hall} alt="Hall" className="object-cover -ml-6 " fill />
          </motion.div>
          <motion.div
            className="absolute z-[1400] inset-0 pt-4 flex items-center"
            style={{
              scale: hallScale,
              transformOrigin: "center",
              willChange: "transform",
            }}
          >
            <Image src={hall2} alt="Hall" className= "object-cover -ml-6" fill/>
          </motion.div>

          {/* Men's image */}
          <motion.div
            className="absolute  flex flex-col pt-[10rem] items-center z-[1000] w-[132vh] xl:w-[89%]"
            style={{
              scale: menScale,
              opacity: menOpacity,
              transformOrigin: "center",
            }}
          >
            <motion.h2
              className="uppercase text-[28px] sm:text-[34px] relative top-[4.5rem]"
              style={{ opacity: textOpacity }}
            >
              Are you ever in the room
              <br />
              when decisions are made?
            </motion.h2>
            <Image
              src={MansLaughing}
              width={899}
              height={765}
              alt="Mans  Laughing"
             
              className="w-full ml-16 xl:ml-28 object-cover "
              unoptimized
              priority
            />
          </motion.div>

          {/* Center GIF */}
          <motion.div
            className="fixed top-0 w-[100vh] xl:max-w-[1600px] hidden xl:flex items-center justify-center z-[2000]"
            style={{
              opacity: centerGifOpacity,
              scale: centerGifScale,
              width: "100vw",
          maxWidth: "1600px",
          
              height: "100vh",
              transform: "translate(-50%, 0)",
            }}
          >
            <Image
              src={CenterGif}
              alt="Center GIF"
              className="w-full h-auto"
              width={899}
              height={88}
              unoptimized
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="fixed top-0 w-[100vh] xl:max-[1600px] xl:hidden flex items-center justify-center z-[2000]"
            style={{
              opacity: centerGifOpacity,
              scale: centerGifScale,
              width: "130vh",
              
          
              height: "100vh",
              transform: "translate(-50%, 0)",
            }}
          >
            <Image
              src={CenterGif}
              alt="Center GIF"
              className="w-full h-auto"
              width={899}
              height={88}
              unoptimized
              loading="lazy"
            />
          </motion.div>

          {/* "Now You Are" image in the center */}
          <motion.div
            className="fixed -mb-32 ml-16 flex items-center justify-center z-[2100]"
            style={{
              opacity: nowYouAreOpacity,
              scale: nowYouAreScale,
              transform: "translate(-50%, 0)",
              width: "auto",
              height: "auto",
            }}
          >
            <Image
              src={NowYouAre}
              alt="Now You Are"
              className="w-[245px] sm:w-[285px] h-auto"
              unoptimized
              loading="lazy"
            />
          </motion.div>
 {/* LEFT IMAGES CONTAINER: Anchored to right so left side is clipped on small screens */}
 <motion.div
  className="fixed top-0  right-0 justify-between mr-[52%]  z-[1999] overflow-hidden flex items-center"
  style={{
    width: "990px",   // Fixed container width
    height: "100vh",  // Full viewport height
    opacity: leftImagesOpacity,
      x: leftImagesTranslateX,
  }}
>
  <Image
    src={LeftImage}
    alt="Left Image"
    width={830}   // Fixed image width (larger than container)
    height={830}  // Fixed image height
    className="object-cover ml-36"
    style={{ objectPosition: "left" }} // Always show the left side
  />

  <Image
    src={GifLeft}
    alt="Gif Left"
    width={190}   // Fixed image width
    height={190}  // Fixed image height
    className="object-cover mt-[32rem] -ml-48"
    style={{ objectPosition: "left" }} // Always show the left side
  />
</motion.div>

{/* Right images (slide in from right) */}
          <motion.div
            className="fixed top-0  flex ml-[52%] justify-between overflow-hidden items-center left-0 z-[1999]"
            style={{
              opacity: rightImageOpacity,
              x: rightImageTranslateX,
              width: "990px",
              height: "100vh",
            }}
          >
            <Image
              src={WithRightImage}
              alt="With Right Image"
              className="-mr-32 mt-96 object-cover"
              unoptimized
             width={950}   // Fixed image width
              height={950}  // Fixed image height
              loading="lazy"
            />
            <Image
              src={RightImage}
              alt="Right Image"
              className="mr-56 object-cover mt-[17rem]"
               width={700}   // Fixed image width (larger than container)
              height={700} 
              unoptimized
              loading="lazy"
            />
          </motion.div>

          {/* White overlay for fade out */}
          <motion.div
            className="fixed top-0 left-0 w-full h-full z-[3000] pointer-events-none"
            style={{
              background: "white",
              opacity: whiteOverlayOpacity,
            }}
          />
        </div>
      </div>

     
    </div>
  );
};

export default EverInYourRoom;

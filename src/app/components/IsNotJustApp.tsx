"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Example images—replace with your own
import StateNotJustApp from "@/../public/state-not-just-app.png";
import image1 from "@/../public/start-1.png";
import image2 from "@/../public/image-2.png";
import image3 from "@/../public/start-3.png";
import image4 from "@/../public/start-4.png";
import image5 from "@/../public/start-5.png";
import image6 from "@/../public/start-6.png";
import image7 from "@/../public/start-7.png";
import image8 from "@/../public/start-8.png";
import image9 from "@/../public/start-9.png";
import image10 from "@/../public/start-10.png";
import image11 from "@/../public/start-11.png";
import image12 from "@/../public/start-12.png";
import image13 from "@/../public/start-13.png";
import image14 from "@/../public/start-14.png";
import image16 from "@/../public/start-16.png";
import image17 from "@/../public/start-17.png";
import image18 from "@/../public/start-18.png";
import image19 from "@/../public/start-19.png";
import image20 from "@/../public/start-20.png";
import image21 from "@/../public/start-21.png";
import image22 from "@/../public/start-22.png";
import image23 from "@/../public/start-23.png";
import image24 from "@/../public/start-24.png";
import image25 from "@/../public/start-25.png";
import image26 from "@/../public/start-26.png";
import image27 from "@/../public/start-27.png";
import image28 from "@/../public/start-28.png";
import image29 from "@/../public/start-29.png";
import image30 from "@/../public/start-30.png";
import image31 from "@/../public/start-31.png";
import image32 from "@/../public/start-32.png";
import image33 from "@/../public/start-33.png";
import image34 from "@/../public/start-34.png";
import image35 from "@/../public/start-35.png";
import image36 from "@/../public/start-36.png";
import image37 from "@/../public/start-37.png";
import image38 from "@/../public/start-38.png";
import image39 from "@/../public/start-39.png";
import image40 from "@/../public/start-40.png";
import image41 from "@/../public/start-41.jpg";
import image42 from "@/../public/start-42.jpg";
import image43 from "@/../public/start-43.jpg";
import image44 from "@/../public/start-44.png";
import image45 from "@/../public/start-45.jpg";
import image47 from "@/../public/start-47.jpg";
import image48 from "@/../public/start-48.jpg";
import image49 from "@/../public/start-49.jpg";
import image50 from "@/../public/start-50.jpg";
import image51 from "@/../public/start-51.jpg";

const SCROLL_IMAGES = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
  image27,
  image28,
  image29,
  image30,
  image31,
  image32,
  image33,
  image34,
  image35,
  image36,
  image37,
  image38,
  image39,
  image40,
  image41,
  image42,
  image43,
  image44,
  image45,
  image47,
  image48,
  image49,
  image50,
  image51,
];


export default function IsNotJustApp() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress: 0 when container top meets viewport top,
  // 1 when container bottom meets viewport bottom.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // State image: fades in from 0 → 0.3 and fades out by 0.5.
  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.4],
    [0, 1, 0, 0]
  );

  // Map scrolling images:
  // - The first (N-1) images cycle quickly between scroll progress 0.4 and 0.8.
  // - The last image is held from 0.8 to 0.9.
  const imagesStart = 0.4;
  const imagesHold = 0.8;
  const lastImageEnd = 1.1;
  const totalImages = SCROLL_IMAGES.length;

  // White overlay: gradually fades in from 0.9 to 1.
  // Here we use an intermediate value so that at 0.95 the overlay is 50% opaque.
  const whiteFade = useTransform(scrollYProgress, [0.9, 1], [0, 0.5]);


  return (
    // Container height increased to 800vh for extra scrolling after the images.
    <div ref={containerRef} className="relative h-[300vh] bg-white">
      {/* Background */}
      <div className="fixed  left-0 w-full h-screen bg-white z-0" />

      {/* State Image */}
      <div className="fixed top-0  md:mx-0 left-0 w-full h-screen z-10 flex items-center justify-center">
        <motion.div style={{ opacity: textOpacity }}>
          <Image
            src={StateNotJustApp}
            alt="State Not Just App"
            className="w-[320px] sm:w-[600px] sm:mx-3"
            
          />
        </motion.div>
      </div>

      {/* Scrolling Images */}
      <div className="fixed top-0 left-0 w-full h-screen z-20">
        {SCROLL_IMAGES.map((src, index) => {
          let segmentStart, segmentEnd;
          if (index < totalImages - 1) {
            // For the first N-1 images: map uniformly over [imagesStart, imagesHold).
            const segmentSize = (imagesHold - imagesStart) / (totalImages - 1);
            segmentStart = imagesStart + index * segmentSize;
            segmentEnd = imagesStart + (index + 1) * segmentSize;
          } else {
            // For the last image: assign a dedicated range [imagesHold, lastImageEnd).
            segmentStart = imagesHold;
            segmentEnd = lastImageEnd;
          }
 // eslint-disable-next-line react-hooks/rules-of-hooks
          const imageOpacity = useTransform(scrollYProgress, (latest) =>
            latest >= segmentStart && latest < segmentEnd ? 1 : 0
          );

          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 w-full h-screen"
              style={{ opacity: imageOpacity }}
            >
              <Image
                src={src}
                alt={`Scrolling image ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* White overlay that gradually fades in */}
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-white z-30 pointer-events-none"
        style={{ opacity: whiteFade }}
      />
    </div>
  );
}
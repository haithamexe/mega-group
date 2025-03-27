import React from "react";
import { motion } from "motion/react";

function ImageShapesContainer({ image = "gettyimages-616902766-612x612.jpg" }) {
  return (
    <div className="shapes-container">
      {/* First shape */}
      <motion.svg
        width="70"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        animate={{
          // marginRight: "10px",
          marginTop: "10px",
        }}
        transition={{
          delay: 0.4,
          duration: 0.1,
          type: "spring",
          bounce: 0.1,
          damping: 10,
        }}

        // initial={{ marginRight: "5px", marginTop: "0" }}
      >
        <defs>
          <motion.clipPath id="clipPath1">
            <motion.polygon
              points="0,0 70,0 70,250 0,250"
              animate={{
                points: "0,0 70,20 70,250 0,230",
              }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.clipPath>
        </defs>

        {/* The image that will be clipped */}
        <image
          href={"/images/" + image}
          clipPath="url(#clipPath1)"
          x={"-100%"}
          style={{
            height: "100%",
            position: "absolute",
            objectFit: "cover",
            top: 0,
            left: "900px",
          }}
        />

        {/* Optional: Add a border to see the clipping area */}
        {/* <motion.polygon
      points="0,0 70,0 70,250 0,250"
      animate={{
        points: "0,0 70,20 70,250 0,230",
      }}
      transition={{
        delay: 0.4,
        duration: 0.4,
        ease: "easeInOut",
      }}
      fill="none"
      stroke="black"
      strokeWidth="1"
    /> */}
      </motion.svg>

      {/* Second shape */}
      <motion.svg
        width="70"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        animate={{
          marginBottom: "10px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
        transition={{
          delay: 0.4,
          duration: 0.1,
          type: "spring",
          bounce: 0.1,
          damping: 10,
        }}
      >
        <defs>
          <motion.clipPath id="clipPath2">
            <motion.polygon
              points="0,0 70,0 70,250 0,250"
              animate={{
                points: "0,20 70,0 70,230 0,250",
              }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.clipPath>
        </defs>

        {/* The image that will be clipped */}
        <image
          href={"/images/" + image}
          clipPath="url(#clipPath2)"
          x={"-200%"}
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />

        {/* Optional: Add a border to see the clipping area */}
        {/* <motion.polygon
      points="0,0 70,0 70,250 0,250"
      animate={{
        points: "0,20 70,0 70,230 0,250",
      }}
      transition={{
        delay: 0.5,
        duration: 0.4,
        ease: "easeInOut",
      }}
      fill="none"
      stroke="black"
      strokeWidth="1"
    /> */}
      </motion.svg>

      {/* Third shape */}
      <motion.svg
        width="70"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        animate={{
          // marginLeft: "10px",
          marginTop: "10px",
        }}
        transition={{
          delay: 0.4,
          duration: 0.1,
          type: "spring",
          bounce: 0.1,
          damping: 10,
        }}
      >
        <defs>
          <motion.clipPath id="clipPath3">
            <motion.polygon
              points="0,0 70,0 70,250 0,250"
              animate={{
                points: "0,0 70,20 70,250 0,230",
              }}
              transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
              }}
            />
          </motion.clipPath>
        </defs>

        {/* The image that will be clipped */}
        <image
          href={"/images/" + image}
          clipPath="url(#clipPath3)"
          x={"-300%"}
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />

        {/* Optional: Add a border to see the clipping area */}
        {/* <motion.polygon
      points="0,0 70,0 70,250 0,250"
      animate={{
        points: "0,0 70,20 70,250 0,230",
      }}
      transition={{
        delay: 0.6,
        duration: 0.4,
        ease: "easeInOut",
      }}
      fill="none"
      stroke="black"
      strokeWidth="1"
    /> */}
      </motion.svg>
      <motion.img
        style={{
          position: "absolute",
          top: "-5px",
          right: "60px",
          zIndex: "-1",
          width: "30px",
        }}
        initial={{ rotate: 0, opacity: 0, scale: 0.5, top: "50px" }}
        animate={{ opacity: 1, scale: 1, top: "-5px" }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          type: "spring",
          bounce: 0.1,
          damping: 10,
        }}
        src="/images/stars-top.png"
        alt="tech companies"
      />
      <motion.img
        style={{
          position: "absolute",
          bottom: "0",
          left: "85px",
          zIndex: "-1",
          width: "20px",
        }}
        initial={{ rotate: 0, opacity: 0, scale: 0.5, bottom: "50px" }}
        animate={{ rotate: 360, opacity: 1, scale: 1, bottom: "2px" }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          type: "spring",
          damping: 18,
        }}
        src="/images/stars-bottom.png"
        alt="tech companies"
      />
    </div>
  );
}

export default ImageShapesContainer;

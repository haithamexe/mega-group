import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { ReactLenis, useLenis } from "lenis/react";

function Layout() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scroll value:", latest);
  });

  const normalizedY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const lenis = useLenis();

  const forceSmoothScroll = () => {
    if (lenis) {
      lenis.stop();
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (lenis) {
      lenis.start();
    }
  };

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
      }}
    >
      <div className="main">
        <Header scrollYProgress={scrollYProgress} normalizedY={normalizedY} />
        <Outlet context={{ forceSmoothScroll }} />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;

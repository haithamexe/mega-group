import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "motion/react";
import { ReactLenis, useLenis } from "lenis/react";
import ScrollToTopProvider from "../context/ScrollToTopProvider";

function Layout() {
  const { pathname } = useLocation();

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

  const stopLenis = () => {
    lenis.stop();
  };

  const startLenis = () => {
    lenis.start();
  };

  const handleScrollToTop = () => {
    if (lenis) lenis.stop();
    window.scrollTo(0, 0);
    if (lenis) lenis.start();
  };

  useEffect(() => {
    handleScrollToTop();
  }, [pathname]);

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
      }}
    >
      <div className="main">
        <Header scrollYProgress={scrollYProgress} normalizedY={normalizedY} />
        {/* <ScrollToTopProvider /> */}
        <Outlet
          context={{
            forceSmoothScroll,
            stopLenis,
            startLenis,
          }}
        />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;

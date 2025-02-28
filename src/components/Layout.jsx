import React, { useEffect, useRef } from "react";
import { Outlet, useLocation, ScrollRestoration } from "react-router-dom";
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
  const { pathname } = useLocation();
  const lenisRef = useRef();

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

  const handleScrollToBottom = () => {
    if (lenis) lenis.stop();
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    if (lenis) lenis.start();
  };

  const handleScrollToElement = (element) => {
    if (lenis) lenis.stop();
    element.scrollIntoView({ behavior: "immidiate" });
    if (lenis) lenis.start();
  };

  useEffect(() => {
    if (lenis) lenis.stop();
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
    if (lenis) lenis.start();
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
        <Outlet
          context={{
            forceSmoothScroll,
            stopLenis,
            startLenis,
            handleScrollToBottom,
            handleScrollToElement,
          }}
        />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default Layout;

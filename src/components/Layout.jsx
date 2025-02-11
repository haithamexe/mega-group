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

function Layout() {
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("scroll value:", latest);
  });

  const normalizedY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="main">
      <Header scrollYProgress={scrollYProgress} normalizedY={normalizedY} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;

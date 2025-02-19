// import React, { useRef, useEffect } from "react";

// const SlowScrollContainer = ({ children, speedFactor = 0.5 }) => {
//   const containerRef = useRef();

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const handleWheel = (e) => {
//       e.preventDefault();
//       const delta = e.deltaY * speedFactor;
//       container.scrollTop += delta;
//     };

//     container.addEventListener("wheel", handleWheel, { passive: false });

//     return () => container.removeEventListener("wheel", handleWheel);
//   }, [speedFactor]);

//   return (
//     <div ref={containerRef} style={{}}>
//       {children}
//     </div>
//   );
// };

// export default SlowScrollContainer;

// import { useEffect } from "react";

// const SlowScrollContainer = ({ children }) => {
//   useEffect(() => {
//     const handleScroll = (event) => {
//       event.preventDefault();
//       window.scrollBy({
//         top: event.deltaY * 3, // Adjust multiplier to slow down
//         behavior: "smooth",
//       });
//     };

//     window.addEventListener("wheel", handleScroll, { passive: false });

//     return () => {
//       window.removeEventListener("wheel", handleScroll);
//     };
//   }, []);

//   return <>{children}</>;
// };

// export default SlowScrollContainer;

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap";
// import "../index.css";

// gsap.registerPlugin(ScrollSmoother);

// const SlowScrollContainer = ({ children }) => {
//   const containerRef = useRef(null);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     let smoother = ScrollSmoother.create({
//       wrapper: containerRef.current,
//       content: contentRef.current,
//       smooth: 1.5, // Adjust to control smoothness (higher = smoother)
//       effects: true,
//     });

//     return () => {
//       smoother.kill(); // Cleanup on unmount
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="smooth-wrapper">
//       <div ref={contentRef} className="smooth-content">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default SlowScrollContainer;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SlowScrollContainer = ({ children }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.to(contentRef.current, {
      y: 0, // Moves content slightly for a smooth effect
      ease: "power2.out",
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 5, // Allows smooth scrolling effect
      },
    });

    return () => {
      ScrollTrigger.killAll(); // Cleanup on unmount
    };
  }, []);

  return (
    <div className="smooth-wrapper">
      <div ref={contentRef} className="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SlowScrollContainer;

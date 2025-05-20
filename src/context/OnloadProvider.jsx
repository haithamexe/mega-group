import { useContext, createContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useHeaderContext } from "./HeaderProvider";
const OnloadContext = createContext();

export const useOnloadContext = () => {
  return useContext(OnloadContext);
};

export default function OnloadProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { isMobile } = useHeaderContext();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <OnloadContext.Provider value={{}}>
      {/* <AnimatePresence>
        {isLoading && (
          <motion.div
            className="mask-onload"
            initial={{ scale: 1 }}
            animate={{ scale: 20 }}
            exit={{ opacity: 0, display: "none" }}
            transition={{
              duration: 10,
              delay: 2,
              ease: "easeInOut",
            }}
            onAnimationComplete={() => setIsLoading(false)}
          >
            <div className="mask-content">
              <img src="/images/mega-logo-stairs.png" alt="logo" />
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="mask-container"
            initial={{
              scale: 1,
              opacity: 1,
            }}
            animate={{
              scale: 8,
              top: isMobile ? 0 : 200,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1,
              // ease: "easeInOut",
            }}
          >
            <img
              style={
                isMobile ? { objectFit: "contain" } : { objectFit: "cover" }
              }
              src="/images/mega-logo-stairs0.svg"
              alt="stairs logo"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </OnloadContext.Provider>
  );
}

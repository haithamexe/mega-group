import { useContext, createContext, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const OnloadContext = createContext();

export const useOnloadContext = () => {
  return useContext(OnloadContext);
};

export default function OnloadProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

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
      {children}
    </OnloadContext.Provider>
  );
}

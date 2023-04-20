import clsx from "clsx";
import { motion } from "framer-motion";

import { initialAnimation, viewportAnimation, whileInViewAnimation } from "@/constants/framer-motion";

function PortfolioPage() {
  return (
    <div className={clsx("container mx-auto p-4", "flex flex-row items-center justify-center", "h-screen")}>
      <motion.h1 initial={initialAnimation} viewport={viewportAnimation} whileInView={whileInViewAnimation}>
        Portfolio Page
      </motion.h1>
    </div>
  );
}

export default PortfolioPage;

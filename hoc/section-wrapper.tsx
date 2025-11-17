import { motion } from "framer-motion";

import { styles } from "../app/styles";
import { cn } from "../utils/lib";
import { staggerContainer } from "../utils/motion";

type SectionWrapperProps = {
  children: React.ReactNode;
  idName?: string;
};

export const SectionWrapper = ({ children, idName }: SectionWrapperProps) => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={cn(styles.padding, "max-w-8xl mx-auto relative z-0")}
  >
    <span className="hash-span" id={idName}>
      &nbsp;
    </span>
    {children}
  </motion.section>
);

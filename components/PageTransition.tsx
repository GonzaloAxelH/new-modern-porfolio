import { motion, useReducedMotion } from "framer-motion";
import { FC, ReactNode } from "react";
interface Props {
  children: ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
    y: 15,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.61, 1, 0.88, 1],
    },
  },
};

const PageTransition: FC<Props> = ({ children }): JSX.Element => {
  return (
    <motion.div initial="initial" animate="enter" variants={variants}>
      {children}
    </motion.div>
  );
};

export default PageTransition;

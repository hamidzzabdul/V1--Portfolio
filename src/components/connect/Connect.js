import { useEffect } from "react";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { useStyleMediaQuery } from "../../hooks/useStyleMediaQuery";

import classes from "./Connect.module.css";
import Button from "../UI/Button";

const AnimateConnect = ({ children, inView }) => {
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      console.log("inView=", inView);
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [animation, inView]);
  return (
    <motion.div className={classes.animate} animate={animation}>
      {children}
    </motion.div>
  );
};

const Connect = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const { matches: isMobile } = useStyleMediaQuery({
    mixOrMax: "max",
    widthOrHeight: "width",
    value: 700,
  });
  return (
    <AnimateConnect inView={inView}>
      {!isMobile && (
        <div className={classes["lets-connect"]} ref={ref}>
          <span className={classes.subtitle}>04. whats next</span>
          <h2 className={classes.title}>Lets Connect</h2>
          <div className={classes["connect-description"]}>
            <p>
              I'm excited to collaborate and explore new opportunities. If you
              have any questions, project proposals, or just want to say hello,
              feel free to reach out to me.
            </p>
          </div>
          <Button type="button" className={classes.button}>
            Lets Connect
          </Button>
        </div>
      )}
    </AnimateConnect>
  );
};

export default Connect;

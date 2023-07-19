import classes from "./Projects.module.css";
import Project from "./Project";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.5 },
      });
    }

    if (!inView) {
      animation.start({
        y: 55,
        opacity: 0,
        transition: { ease: "easeIn", duration: 0.5 },
      });
    }
  }, [inView, animation]);

  return (
    <div className={classes.project}>
      <motion.div animate={animation} className={classes.title}>
        <h1 ref={ref}>
          <span>03.</span>Somethings i've built
        </h1>
        <div className={classes.line}></div>
      </motion.div>

      <div className={classes["project-containers"]}>
        <Project />
      </div>
    </div>
  );
};

export default Projects;

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import classes from "./Experienc.module.css";
import { useInView } from "react-intersection-observer";

const AnimateExperience = ({ children, inView }) => {
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

const Experience = () => {
  const [expRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [expRef2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [expRef3, inView3] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className={classes["experiences-container"]}>
      <AnimateExperience inView={inView}>
        <h1 className={classes.title} ref={expRef}>
          <span>02.</span>
          Experience
          <div className={classes.line}></div>
        </h1>
      </AnimateExperience>

      <div className={classes["experiences-wrapper"]}>
        <AnimateExperience inView={inView}>
          <div className={classes["experience"]}>
            <div className={classes.title}>
              <p>Umma university</p>
              <span className={classes.date}>January - April 2020</span>
            </div>
            <p className={classes.department}>IT department</p>

            <p className={classes.description}>
              Worked in the IT department in Umma University Kajiado interning
              in the IT department for 3 months.
            </p>
            <ul className={classes["skills-learned"]}>
              <li>Networking</li>
              <li>System Administration</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </AnimateExperience>
        <AnimateExperience inView={inView2}>
          <div className={classes["experience"]} ref={expRef2}>
            <div className={classes.title}>
              <p>Oaknet Business</p>
              <span className={classes.date}>May - August , 2022</span>
            </div>
            <p className={classes.department}>Software intern</p>

            <p className={classes.description}>
              Worked in the software department at Oaknet business as an intern
              for 3 months
            </p>
            <ul className={classes["skills-learned"]}>
              <li>Laravel</li>
              <li>Node js</li>
              <li>Express Js</li>
              <li>React</li>
            </ul>
          </div>
        </AnimateExperience>
        <AnimateExperience inView={inView3}>
          <div className={classes["experience"]} ref={expRef3}>
            <div className={classes.title}>
              <p>Vitol Agency</p>
              <span className={classes.date}>2023 -Present</span>
            </div>
            <p className={classes.department}>IT And Digital Martketer</p>

            <p className={classes.description}>
              Worked in the IT department in Umma University Kajiado interning
              in the IT department for 3 months.
            </p>
            <ul className={classes["skills-learned"]}>
              <li>Networking</li>
              <li>System Administration</li>
              <li>Wordpress</li>
            </ul>
          </div>
        </AnimateExperience>
      </div>
    </div>
  );
};

export default Experience;

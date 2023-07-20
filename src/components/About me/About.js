import List from "../../assets/list.svg";
import AboutImage from "../../assets/about-us.png";
import classes from "./About.module.css";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

export const AnimateAbout = ({ children, inView }) => {
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.5,
        },
      });
    } else {
      animation.start({
        y: 50,
        opacity: 0,
      });
    }
  }, [inView, animation]);
  return (
    <motion.div
      animate={animation}
      className={`${classes.animate} ${
        inView ? classes["about-animation"] : ""
      }`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const [aboutRef, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const imgAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      imgAnimation.start({
        // x: -50,
        opacity: 1,
        transition: {
          ease: "easeIn",
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      imgAnimation.start({
        // x: 0,
        opacity: 0,
      });
    }
  }, [inView, imgAnimation]);

  return (
    <div className={classes["about-us"]} id="about">
      <div className={classes["about-wrapper"]}>
        <AnimateAbout inView={inView}>
          <h3 className={classes.title} ref={aboutRef}>
            <span>01.</span>About me
          </h3>
        </AnimateAbout>

        <AnimateAbout inView={inView}>
          <p>
            I'm constantly driven to create engaging and innovative digital
            experiences. I thrive on challenging projects that push me to
            explore new technologies and find elegant solutions.
          </p>
          <p>
            My goal is to not only write clean and efficient code but also
            ensure seamless user experiences through intuitive interfaces. When
            I'm not coding, you can find me expanding my knowledge, keeping up
            with industry trends, and enjoying a good cup of coffee.
          </p>
        </AnimateAbout>

        <AnimateAbout dela={0.9} inView={inView}>
          <div className={classes.skills}>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul className={classes["skills-list"]}>
              <li>
                <img src={List} alt="" />
                Javascript
              </li>
              <li>
                <img src={List} alt="" />
                React
              </li>
              <li>
                <img src={List} alt="" />
                Node.js
              </li>
              <li>
                <img src={List} alt="" />
                Express-Js
              </li>
              <li>
                <img src={List} alt="" />
                MongoDB
              </li>
            </ul>
          </div>
        </AnimateAbout>
      </div>
      <motion.div className={classes["about-image"]} animate={imgAnimation}>
        <img src={AboutImage} alt="aboutus" />
      </motion.div>
    </div>
  );
};

export default About;

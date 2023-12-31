import Button from "../UI/Button";
import classes from "./Hero.module.css";
import Connect from "../../assets/connect.svg";
import { motion } from "framer-motion";

const AnimateHero = ({ delay, children }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5, delay }}
      className={classes.animate}
    >
      {children}
    </motion.div>
  );
};

const Hero = ({ onNavItemClick }) => {
  return (
    <div className={classes.container}>
      <AnimateHero delay={1}>
        <p className={classes.subheading}>Hy my name is..</p>
      </AnimateHero>
      <AnimateHero delay={1.04}>
        <h1>
          Adulhamid Abdirahim<span>.</span>
        </h1>
      </AnimateHero>
      <AnimateHero delay={1.08}>
        <h3>
          I build things for the Web<span>.</span>
        </h3>
      </AnimateHero>
      <AnimateHero delay={1.1}>
        <p className={classes.intro}>
          I'm Abdulhamid Abdirahim Mohamed, a passionate MERN Stack Developer. I
          specialize in crafting remarkable web applications with a focus on
          user experience, accessibility, and{" "}
          <span>cutting-edge solutions.</span> My goal is to deliver exceptional
          web experiences that make a lasting impact.
        </p>
      </AnimateHero>
      <AnimateHero delay={1.15}>
        <a onClick={() => onNavItemClick("contact")} href="#contact">
          <Button type="button" className={classes.btn}>
            Lets connect
            <img src={Connect} alt="connect" />
          </Button>
        </a>
      </AnimateHero>
    </div>
  );
};

export default Hero;

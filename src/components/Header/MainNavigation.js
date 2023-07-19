import { useState } from "react";
import { motion } from "framer-motion";

import classes from "./MainNavigation.module.css";
import Button from "../UI/Button";

import Logo from "../../assets/logo.png";
import SideBar from "../UI/SideBar";

const AnimatedListItem = ({ delay, children }) => {
  return (
    <motion.li
      initial={{ y: -35, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5, delay }}
      className={classes.list}
    >
      {children}
    </motion.li>
  );
};

const MainNavigation = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSideBar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={classes.nav}>
      <SideBar className={isActive ? "active" : ""} onClose={toggleSideBar} />
      <motion.img
        src={Logo}
        alt="logo.png"
        className={classes.logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeIn", duration: 0.5, delay: 0.2 }}
      />
      <ul className={classes["nav-items"]}>
        <AnimatedListItem delay={0.2} className={classes.list}>
          <span>01.</span>
          <p>About</p>
        </AnimatedListItem>
        <AnimatedListItem delay={0.3} className={classes.list}>
          <span>02.</span>
          <p>Experience</p>
        </AnimatedListItem>
        <AnimatedListItem delay={0.4} className={classes.list}>
          <span>03.</span>
          <p>Work</p>
        </AnimatedListItem>
        <AnimatedListItem delay={0.5} className={classes.list}>
          <span>04.</span>
          <p>Contact</p>
        </AnimatedListItem>
        <AnimatedListItem delay={0.6} className={classes.list}>
          <Button type="button">Resume</Button>
        </AnimatedListItem>
      </ul>
      <svg
        width="100"
        height="62"
        viewBox="0 0 100 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.hamburger}
        onClick={toggleSideBar}
      >
        <rect width="100" height="10" fill="#50FFD5" />
        <rect x="20" y="26" width="80" height="10" fill="#50FFD5" />
        <rect x="40" y="52" width="60" height="10" fill="#50FFD5" />
      </svg>
    </div>
  );
};

export default MainNavigation;

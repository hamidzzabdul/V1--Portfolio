import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import classes from "./MainNavigation.module.css";
import Button from "../UI/Button";

import Logo from "../../assets/logo.png";
import SideBar from "../UI/SideBar";

import Resume from "../../assets/uploads/MyResume.pdf";

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

const MainNavigation = ({ onNavItemClick }) => {
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
          {/* <a onClick={() => onNavItemClick("about")} href="#about">
            About
          </a> */}
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </AnimatedListItem>
        <AnimatedListItem delay={0.3} className={classes.list}>
          <span>02.</span>
          <a onClick={() => onNavItemClick("experience")} href="#experience">
            Experience
          </a>
        </AnimatedListItem>
        <AnimatedListItem delay={0.4} className={classes.list}>
          <span>03.</span>
          <a onClick={() => onNavItemClick("work")} href="#work">
            Work
          </a>
        </AnimatedListItem>
        <AnimatedListItem delay={0.5} className={classes.list}>
          <span>04.</span>
          <a onClick={() => onNavItemClick("contact")} href="#contact">
            Contact
          </a>
        </AnimatedListItem>
        <AnimatedListItem delay={0.6} className={classes.list}>
          <a href={Resume} download="myresume.pdf">
            <Button type="button">Resume</Button>
          </a>
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

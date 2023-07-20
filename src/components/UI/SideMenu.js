import classes from "./SideMenu.module.css";
import { motion } from "framer-motion";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const SideMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeIn", duration: 0.5, delay: 1.15 }}
      className={classes.sidemenu}
    >
      <a
        href="https://github.com/hamidzzabdul"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineGithub className={classes.icon} />
      </a>
      <a
        href="https://github.com/hamidzzabdul"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn className={classes.icon} />
      </a>
      <a
        href="https://github.com/hamidzzabdul"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram className={classes.icon} />
      </a>
      <div className={classes.line}></div>
    </motion.div>
  );
};

export default SideMenu;

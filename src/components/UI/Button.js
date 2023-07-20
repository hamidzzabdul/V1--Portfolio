import classes from "./Button.module.css";

import { motion } from "framer-motion";

const Button = (props) => {
  const buttonClasses = `${classes.button} ${props.className}`;
  return (
    <motion.button
      className={buttonClasses}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;

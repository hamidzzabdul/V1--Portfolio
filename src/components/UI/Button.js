import classes from "./Button.module.css";

import { motion } from "framer-motion";

const Button = (props) => {
  const buttonClasses = `${classes.button} ${props.className}`;
  return (
    <motion.button className={buttonClasses} type={props.type}>
      {props.children}
    </motion.button>
  );
};

export default Button;

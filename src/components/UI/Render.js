import { motion } from "framer-motion";

const Render = (props) => {
  return (
    <div>
      <motion.div>{props.children}</motion.div>
    </div>
  );
};

export default Render;

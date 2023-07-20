import classes from "./Projects.module.css";
import Folder from "../../assets/folder.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";

const AnimateProject = ({ delay, children, inView }) => {
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { ease: "easeIn", duration: 0.5, delay: delay },
      });
    }
    if (!inView) {
      animation.start({
        y: 55,
        opacity: 0,
        // transition: { ease: "easeIn", duration: 0.5, delay: delay },
      });
    }
  }, [inView, animation, delay]);

  return (
    <motion.div animate={animation} delay={delay}>
      {children}
    </motion.div>
  );
};

const Project = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <AnimateProject inView={inView} delay={0.5}>
        <div
          className={classes["project-wrapper"]}
          ref={ref}
          onClick={() => {
            window.open("https://github.com/hamidzzabdul/Jobster", "_blank");
          }}
        >
          <div className={classes.icons}>
            <img src={Folder} alt="" />
            <a
              href="https://github.com/hamidzzabdul/Jobster"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className={classes.svg} />
            </a>
          </div>
          <div className={classes.description}>
            <h2 className={classes.subtitle}>Jobster</h2>
            <p>
              Jobster is a web app that simplifies the job search process. It
              connects recruiters and applicants creating an efficient way to
              sign talent
            </p>
          </div>
          <ul className={classes.languages}>
            <li>Pug</li>
            <li>js</li>
            <li>Node js</li>
            <li>Express-js</li>
          </ul>
        </div>
      </AnimateProject>
      <AnimateProject inView={inView} delay={0.7}>
        <div
          className={classes["project-wrapper"]}
          ref={ref}
          onClick={() => {
            window.open(
              "https://github.com/hamidzzabdul/ecommerce-React-web-app",
              "_blank"
            );
          }}
        >
          <div className={classes.icons}>
            <img src={Folder} alt="" />
            <a
              href="https://github.com/hamidzzabdul/ecommerce-React-web-app"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineGithub className={classes.svg} />
            </a>
          </div>
          <div className={classes.description}>
            <h2 className={classes.subtitle}>Techtreck</h2>
            <p>
              Techtreck TechTreck is an innovative eCommerce store. It offers a
              seamless shopping experience for tech enthusiasts, providing a
              wide range of cutting-edge technology products.
            </p>
          </div>
          <ul className={classes.languages}>
            <li>React-js</li>
            <li>Sanity IO</li>
            <li>CSS</li>
          </ul>
        </div>
      </AnimateProject>
      <AnimateProject inView={inView} delay={0.9}>
        <div
          className={classes["project-wrapper"]}
          ref={ref}
          onClick={() => {
            window.open("/", "_blank");
          }}
        >
          <div className={classes.icons}>
            <img src={Folder} alt="folder svg" />
            <a href="/">
              <AiOutlineGithub className={classes.svg} />
            </a>
          </div>
          <div className={classes.description}>
            <h2 className={classes.subtitle}>V1 portifolio Website</h2>
            <p>
              This is the first iteration of my portfolio website made with the
              React-js library css and framer-motion for seamless animation
            </p>
          </div>
          <ul className={classes.languages}>
            <li>Node js</li>
            <li>Express-js</li>
            <li>Js</li>
            <li>Pug</li>
          </ul>
        </div>
      </AnimateProject>
    </>
  );
};

export default Project;

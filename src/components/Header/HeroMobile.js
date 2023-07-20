import classes from "./HeroMobile.module.css";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin-in.svg";
import Github from "../../assets/git.svg";

const HeroMobile = () => {
  return (
    <div className={classes["hero-mobile"]}>
      <h1>Abdulhamid Abdirahim</h1>
      <h3>I Build things</h3>
      <p>
        I build Accessible, inclusive products and digital experiences for the
        web
      </p>
      <div className={classes.social}>
        <a
          href="https://github.com/hamidzzabdul"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Github} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/script_tags/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Instagram} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/in/abdulhamid-abdirahim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedIn} alt="linked-in" />
        </a>
      </div>
    </div>
  );
};

export default HeroMobile;

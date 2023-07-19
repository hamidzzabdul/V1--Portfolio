import classes from "./Projects.module.css";
import Project from "./Project";

const Projects = () => {
  return (
    <div className={classes.project}>
      <div className={classes.title}>
        <h1>
          <span>03.</span>Somethings i've built
        </h1>
        <div className={classes.line}></div>
      </div>

      <div className={classes["project-containers"]}>
        <Project />
      </div>
    </div>
  );
};

export default Projects;

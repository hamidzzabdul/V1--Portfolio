import classes from "./ProjectMobile.module.css";

const ProjectMobile = () => {
  return (
    <div className={classes.project}>
      <div className={classes["project-container"]}>
        <h1 className={classes.title}>V1 Personal Portfolio</h1>
        <p>
          A portifolio site built with React, css and framer motions for
          animations
        </p>
        <ul className={classes.languages}>
          <li>React</li>
          <li>CSS</li>
          <li>Render</li>
        </ul>
        <img src="" alt="image3" />
      </div>

      <div className={classes["project-container"]}>
        <h1 className={classes.title}>TechTreck</h1>
        <p>
          Techtreck TechTreck is an innovative eCommerce store. It offers a
          seamless shopping experience for tech enthusiasts, providing a wide
          range of cutting-edge technology products.
        </p>
        <ul className={classes.languages}>
          <li>React</li>
          <li>CSS</li>
          <li>Sanity io - CMS</li>
          <li>Render</li>
        </ul>
        <img src="" alt="image2" />
      </div>
      <div className={classes["project-container"]}>
        <h1 className={classes.title}>Jobster</h1>
        <p>
          Jobster is a web app that simplifies the job search process. It
          connects recruiters and applicants creating an efficient way to sign
          talent
        </p>
        <ul className={classes.languages}>
          <li>Node</li>
          <li>Express</li>
          <li>Javascript</li>
          <li>Pug</li>
          <li>CSS</li>
        </ul>
        <img src="" alt="image1" />
      </div>
    </div>
  );
};

export default ProjectMobile;

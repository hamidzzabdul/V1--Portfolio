import { Fragment } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import classes from "./SideBar.module.css";

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const portalElement = document.getElementById("overlay");

const Sidebar = ({ className, onClose }) => {
  return (
    <Fragment>
      {className &&
        ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      <div
        className={`${classes.sidebar} ${
          className === "active" ? classes.active : ""
        }`}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 78 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={classes.close}
          onClick={onClose}
        >
          <rect
            x="0.109131"
            y="70.8198"
            width="100"
            height="10"
            rx="5"
            transform="rotate(-45 0.109131 70.8198)"
            fill="#50FFD5"
          />
          <rect
            x="7.07104"
            width="100"
            height="10"
            rx="5"
            transform="rotate(45 7.07104 0)"
            fill="#50FFD5"
          />
        </svg>

        <ul className={classes["nav-items"]}>
          <li className={classes.list}>
            <span>01.</span>
            <p>About</p>
          </li>
          <li className={classes.list}>
            <span>02.</span>
            <p>Experience</p>
          </li>
          <li className={classes.list}>
            <span>03.</span>
            <p>Work</p>
          </li>
          <li className={classes.list}>
            <span>04.</span>
            <p>Contact</p>
          </li>
          <li className={classes.list}>
            <Button type="button">Resume</Button>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Sidebar;

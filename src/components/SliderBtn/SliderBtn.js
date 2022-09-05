import React, { useState } from "react";
import classes from "./SliderBtn.module.css";

function SliderBtn(props) {
  const [status, setStatus] = useState(true);
  const btnClickHandler = () => {
    setStatus(!status);
    props.status(status);
  };
  return (
    <>
      <div className={classes.container}>
        <a
          href="#"
          className={`${classes.clickable}`}
          onClick={btnClickHandler}
        >
          <span
            className={classes.slider}
            style={{ left: status ? "0px" : "50%" }}
          ></span>
          <span className={classes.text}>
            kayaking
            <span style={{ float: "right" }}>camping</span>
          </span>
        </a>
      </div>
    </>
  );
}

export default SliderBtn;

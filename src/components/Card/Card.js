import React, { useEffect, useState } from "react";
import SliderBtn from "../SliderBtn/SliderBtn";
import classes from "./Card.module.css";
import waterSplash from "../../assets/waterSplash.webp";
import stone from "../../assets/stone.webp";
import kayak from "../../assets/kayak.webp";
import sea from "../../assets/sea.webp";
import grass from "../../assets/grass.webp";
import ivy from "../../assets/ivy.webp";
import ivyRock from "../../assets/ivyRock.webp";
import camp from "../../assets/camp.webp";
import { VscLocation } from "react-icons/vsc";
import BlobBlue from "../Blob/BlobBlue";
import BlobGreen from "../Blob/BlobGreen";

function Card() {
  const [cardStatus, setCardStatus] = useState(false);
  const [cardFlip, setCardFlip] = useState(false);
  const statusHandler = (status) => {
    setCardStatus(status);
    setTimeout(() => {
      setCardFlip(status);
    }, 300);
  };

  return (
    <>
      <SliderBtn status={statusHandler} />
      <div
        className={`${classes.flipCard} ${
          cardFlip ? classes.flip : classes.unflip
        }`}
      >
        <div className={`${classes.cardBody}  ${classes.frontCard}`}>
          <div className={classes.card3d}>
            {" "}
            <img src={sea} alt="" className={classes.sea} />
            <img
              src={kayak}
              alt=""
              className={`${classes.kayak} ${
                cardStatus ? classes.kayakFadeOut : classes.kayakFadeIn
              }`}
            />
            <img
              src={waterSplash}
              alt=""
              className={`${classes.waterSplash} ${
                cardStatus
                  ? classes.waterSplashFadeOut
                  : classes.waterSplashFadeIn
              }`}
            />
            <img
              src={stone}
              alt=""
              className={`${classes.stone} ${
                cardStatus ? classes.stoneFadeOut : classes.stoneFadeIn
              }`}
            />
            <div className={classes.cardContent}>
              <h1 className={classes.title}>Kayaking</h1>
              {!cardFlip && <BlobBlue className={classes.blob} />}

              <h3 className={classes.price}>39 / 4</h3>
              <span>per person</span>

              <div className={classes.location}>
                <VscLocation />
                <span>Drina, Serbia</span>
              </div>

              <button className={classes.frontBtn}>Choose Date</button>
            </div>
          </div>
        </div>
        <div className={`${classes.cardBody} ${classes.backCard}`}>
          <div className={classes.card3d}>
            <img src={grass} alt="" className={classes.grass} />
            <img
              src={camp}
              alt=""
              className={`${classes.camp} ${
                cardStatus ? classes.campFadeIn : classes.campFadeOut
              }`}
            />
            <img
              src={ivy}
              alt=""
              className={`${classes.ivy} ${
                cardStatus ? classes.ivyFadeIn : classes.ivyFadeOut
              }`}
            />
            <img
              src={ivyRock}
              alt=""
              className={`${classes.ivyRock} ${
                cardStatus ? classes.ivyRockFadeIn : classes.ivyRockFadeOut
              }`}
            />
            <div className={classes.cardContent}>
              <h1 className={classes.title}>Camping</h1>
              <BlobGreen className={classes.blob} />
              {cardFlip && <BlobGreen className={classes.blob} />}
              <h3 className={classes.price}>29 / 8</h3>
              <span>per person</span>

              <div className={classes.location}>
                <VscLocation />
                <span>Tara, Serbia</span>
              </div>

              <button className={classes.backBtn}>Choose Date</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;

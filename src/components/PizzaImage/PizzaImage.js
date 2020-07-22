import React from "react";

import classes from "./PizzaImage.css";
import PizzaImage2 from "../../assets/pizza.jpg";
const PizzaImage = () => (
  <div className={classes.PizzaImage}>
    <img src={PizzaImage2} className={classes.PizzaImg}></img>
  </div>
);

export default PizzaImage;

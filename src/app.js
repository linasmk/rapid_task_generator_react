import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import RapidTaskGeneratorApp from "./components/RapidTaskGeneratorApp";

ReactDOM.render(
  <RapidTaskGeneratorApp></RapidTaskGeneratorApp>,
  document.getElementById("app")
);

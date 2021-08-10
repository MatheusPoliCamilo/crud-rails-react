import React from "react";
import { render } from "react-dom";
import App from "../components/index";

document.addEventListener("DOMContentLoaded", () => {
  render(<App />, document.body.appendChild(document.createElement("div")));
});

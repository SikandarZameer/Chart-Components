import React from "react";
import ReactDOM from "react-dom";
import LineStacked from "./Linestacked";
import LineCust from "./LineCust";
import BarGrouped from "./BarGrouped";
import DChart from "./Doughnut";

// import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div>
      <LineStacked />
      <LineCust />
      <BarGrouped />
      <DChart />
    </div>
  </React.StrictMode>,
  rootElement
);

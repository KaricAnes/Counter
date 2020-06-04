import React from "react";

import "./CounterControl.css";

const counterControl = (props) => (
  <div style={{ textAlign: "center" }}>
    <div className="CounterControl" onClick={props.clicked}>
      {props.label}
    </div>
  </div>
);

export default counterControl;

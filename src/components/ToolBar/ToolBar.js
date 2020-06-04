import React from "react";
import "./ToolBar.css";
import NavigationItems from "../Navigation/NavigationItems";

const toolbar = (props) => (
  <header className="ToolBar">
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;

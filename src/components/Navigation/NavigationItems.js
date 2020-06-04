import React from "react";
import "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  return (
    <ul className="NavigationItems">
      <NavigationItem linkk="/">Home</NavigationItem>

      <NavigationItem linkk="/results">Results</NavigationItem>
    </ul>
  );
};

export default navigationItems;

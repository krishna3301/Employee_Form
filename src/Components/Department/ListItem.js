import React from "react";
import "./department.css";

function ListItem(props) {
  const value = props.value;

  return (
    <li
      onClick={props.onClick}
      className="listitem"
      style={{ backgroundColor: props.selected.temp ? "grey" : "beige" }}
    >
      {value}
    </li>
  );
}
export default ListItem;

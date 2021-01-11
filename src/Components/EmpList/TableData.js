import React from "react";
import "./Emptable.css";

function TableData(props) {
  const value = props.value;

  return (
    <td
      onClick={props.onClick}
      className="EmpId"
      style={{ backgroundColor: props.selected.temp ? "grey" : "beige" }}
    >
      {props.value}
    </td>
  );
}
export default TableData;

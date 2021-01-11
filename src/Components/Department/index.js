import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SaveDeptName, UpdateDeptList, DeleteDeptName } from "../Redux/Action";
import DeptDetails from "../DeptDetails";
import EmpDetails from "../ShowEmpDetails";
import Button from "@material-ui/core/Button";
import "./department.css";
import ListItem from "./ListItem";

function Department() {
  const [dept, setDept] = useState("");
  const [display, setDisplay] = useState(false);
  const deptList = useSelector((state) => state.deptList);
  let displayEmp = useSelector((state) => state.empDisplay);
  let displayDept = useSelector((state) => state.displayDept);
  const dispatch = useDispatch();
  const deptName = useSelector((state) => state.deptName);

  const handleDept = (e) => {
    setDept(e.target.value);
  };
  const handleButton = () => {
    if (dept !== "") {
      dispatch(UpdateDeptList(dept));
      setDisplay(true);
      setDept("");
    }
  };

  return (
    <div className="outerdiv">
      <div className="innerdiv1">
        <input
          className="text"
          type="text"
          value={dept}
          onChange={handleDept}
        />{" "}
        &nbsp;
        <Button
          className="addButton"
          variant="contained"
          color="primary"
          onClick={handleButton}
        >
          Add
        </Button>
        {display &&
          deptList.map((name) => (
            <ol className="ul" key={name}>
              <ListItem
                selected={{ temp: name === deptName ? true : false }}
                value={name}
                onClick={() => {
                  dispatch(SaveDeptName(name));
                }}
              />

              <button
                className="button"
                onClick={() => dispatch(DeleteDeptName(name))}
              >
                {" "}
                Delete{" "}
              </button>
            </ol>
          ))}
      </div>
      <div className="innerdiv2">{displayDept && <DeptDetails />}</div>
      <div className="innerdiv3">{displayEmp && <EmpDetails />}</div>
    </div>
  );
}
export default Department;

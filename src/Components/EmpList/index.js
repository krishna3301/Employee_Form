import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SaveEmpId, setEmpDisplay } from "../Redux/Action";
import "./Emptable.css";
import TableData from "./TableData";

function EmpList(props) {
  const user = useSelector((state) => state.details);
  const list = user.filter((dName) => dName.deptName === props.deptName);
  const dispatch = useDispatch();
  const EmpId = useSelector((state) => state.EmpId);

  return (
    <div>
      <div>
        <h3> List of Employee: </h3>
        <table className="content-table">
          <thead>
            <tr>
              <th>EmpId</th>
              <th> Name</th>
            </tr>
          </thead>
          <tbody>
            {list.map((data) => (
              <tr key={data.name}>
                <TableData
                  selected={{ temp: data.id === EmpId ? true : false }}
                  value={data.id}
                  onClick={() => {
                    dispatch(SaveEmpId(data.id));
                    dispatch(setEmpDisplay(true));
                  }}
                />
                <td style={{ backgroundColor: "beige" }}> {data.name} </td>
              </tr>
            ))}
          </tbody>
        </table>{" "}
      </div>
    </div>
  );
}

export default EmpList;

import React from "react";
import Button from "@material-ui/core/Button";
import EditEmpDetails from "../EditEmpDetails";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee, setEditDisplay } from "../Redux/Action";
import "./table.css";

function EmpDetails(props) {
  const user = useSelector((state) => state.details);
  const empId = useSelector((state) => state.EmpId);
  const dispatch = useDispatch();
  const display = useSelector((state) => state.editDisplay);

  const handleClickOpen = () => {
    dispatch(setEditDisplay(true));
  };

  const handleClickDelete = () => {
    dispatch(deleteEmployee(empId));
  };

  return (
    <div>
      <h1> Employee Details: </h1>
      <div>
        {user
          .filter((person) => person.id === empId)
          .map((item) => (
            <table className="usertable" key={item.id}>
              <tbody>
                <tr>
                  <th>Dept Name</th>
                  <td>{item.deptName}</td>
                </tr>
                <tr>
                  <th>Dept Id</th>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <th>User Name</th>
                  <td>{item.name}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{item.email}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{item.gender}</td>
                </tr>
                <tr>
                  <th>Age</th>
                  <td>{item.age}</td>
                </tr>
                <tr>
                  <th>Current Project</th>
                  <td>{item.currentProject}</td>
                </tr>
                <tr>
                  <th>Reporting To</th>
                  <td>{item.reportingTo}</td>
                </tr>
                <tr>
                  <th>Designation</th>
                  <td>{item.designation}</td>
                </tr>
              </tbody>
            </table>
          ))}
      </div>
      <div className="sbutton">
        <Button variant="contained" onClick={handleClickOpen} color="primary">
          Edit
        </Button>
        <Button variant="contained" onClick={handleClickDelete} color="primary">
          Delete
        </Button>
      </div>

      <div>{display && <EditEmpDetails />}</div>
    </div>
  );
}

export default EmpDetails;

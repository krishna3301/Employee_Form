import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import EditEmpDetails from '../EditEmpDetails';
import { useSelector,useDispatch } from "react-redux";
import {deleteEmployee} from '../Redux/Action';
import './table.css';

function EmpDetails(props){

  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(true);
  const user = useSelector((state) => state.details);
  const empId = useSelector((state) => state.EmpId);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setDisplay(!display);
  };

  const handleClickDelete =() => {
    dispatch(deleteEmployee(empId));
  };

  return(
    <div>  
      <div>
  {user.filter(person => person.id === empId).map(item => (
      <table className="usertable">
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
  </table>
  ))}
      </div>

      <div>
          <Button variant="contained" onClick={handleClickOpen} color="primary">
            Edit
          </Button>
     </div>
     <div>
          <Button variant="contained" onClick={handleClickDelete} color="primary">
            Delete
          </Button>
     </div>
      <div>
      {display && 
        <EditEmpDetails open={open}/>
      }
    </div>
</div>

  );
}

export default EmpDetails;
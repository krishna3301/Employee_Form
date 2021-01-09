import React, { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { SaveDeptId, setEmpDisplay } from '../Redux/Action';
//import EditEmpDetails from '../EditEmpDetails';
import EmpDetails from '../ShowEmpDetails';
import './Emptable.css';

function EmpList(props){
  const user = useSelector((state) => state.details);
  const list = user.filter(dName => dName.deptName === props.deptName);
  const dispatch = useDispatch();
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(true);

  return(
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
            <tr>
            <td className="deptId" onClick={() => {dispatch(SaveDeptId(data.id))
                                      setDisplay(true)
                                      dispatch(setEmpDisplay(display))}}> {data.id} </td>
            <td> {data.name} </td>
            </tr>
          ))}
        </tbody>
      </table> </div>
      {/* <div>
      {display && 
        <EmpDetails />
      }
    </div> */}
  </div>
  );
}

export default EmpList;
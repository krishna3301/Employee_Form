import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { SaveDeptName,UpdateDeptList } from '../Redux/Action';
import DeptDetails from '../DeptDetails';
import EmpDetails from '../ShowEmpDetails';
import Button from '@material-ui/core/Button';
import './department.css';

function Department()
{
  const[dept, setDept] = useState("");
 // const[deptName, setDeptName] = useState("");
  const[deptList, setDeptList] = useState([]);
  const[display, setDisplay] = useState(false);
  const[displayDept, setDisplayDept] = useState(false);
  const list = useSelector((state) => state.deptList);
  let displayEmp = useSelector((state) => state.empDisplay);
  const dispatch = useDispatch();
  

  const handleDept = (e) => {
    setDept(e.target.value);
  };
  const handleButton = () => {
    
    if(dept !== "")
    {
      dispatch(UpdateDeptList(dept))
      setDeptList([...deptList, {dept}])  
      setDisplay(true)
      setDept("")
    }
  }

  return(
    <div className="outerdiv">
    <div className="innerdiv1">
    <input className="text" type="text" value={dept} onChange={handleDept} /> &nbsp;
    <Button variant="contained" color="primary" onClick={handleButton}>
      Add 
    </Button>
    {display && (
      deptList.map((name) => (
        <ul className="ul">
        <li className="listitem" onClick= {() => {dispatch(SaveDeptName(name.dept));
                               setDisplayDept(true) }}> {name.dept} </li>
         <button className="button"> Delete </ button>                     
        </ul>
        ))
    )}
    </div>
    <div className="innerdiv2">
    {displayDept && (
        <DeptDetails />
    )}
    </div>
    <div>
      {displayEmp && 
        <EmpDetails />
      }
    </div>
    </div>
  );
}
export default Department;
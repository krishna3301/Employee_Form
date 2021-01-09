import React, { useState,useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmpList from '../EmpList';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {addDetails} from '../Redux/Action';


function DeptDetails(props){
  const deptName = useSelector((state) => state.deptName);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [currentProject, setCurrentProject] = useState("");
  const [reportingTo, setReportingTo] = useState("");
  const [designation, setDesignation] = useState(""); 
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.details);
  const filtered = list.filter(dName => dName.deptName === deptName);

  const empNo = useMemo(() => {
      return filtered.length
  },[filtered])

 /*  useEffect(() => {
    setEmpNo(filtered.length)
     }, [id]);
 */
//const filtered = list.filter(dName => dName.deptName === deptName);
    // setEmpNo(filtered.length)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    const employee = {
      deptName: deptName,
      id: id,
      name: name, 
      email: email,
      gender: gender,
      age: age,
      currentProject: currentProject,
      reportingTo: reportingTo,
      designation: designation
    };
    dispatch(addDetails(employee)); 
    
    setOpen(false);
  };

  return(
    <div>
    <div>
    <h1> Details of {deptName} </h1>
    <h3> Number of Employees: {empNo} </h3>
    </div>

    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Employee
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Employee Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="id"
            label="Employee Id"
            type="text"
            fullWidth
            onChange={(e) => 
              setId(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="name"
            label="Employee Name"
            type="text"
            fullWidth
            onChange={(e) => 
              setName(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="mail"
            label="Email Address"
            type="email"
            fullWidth
            onChange={(e) => 
              setEmail(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="gender"
            label="Gender"
            type="text"
            fullWidth
            onChange={(e) => 
              setGender(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="age"
            label="Age"
            type="text"
            fullWidth
            onChange={(e) => 
              setAge(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="currentProject"
            label="CurrentProject"
            type="text"
            fullWidth
            onChange={(e) => 
              setCurrentProject(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="reportingTo"
            label="ReportingTo"
            type="text"
            fullWidth
            onChange={(e) => 
              setReportingTo(e.target.value)
              }
          />
          <TextField
            margin="dense"
            id="designation"
            label="Designation"
            type="text"
            fullWidth
            onChange={(e) => 
              setDesignation(e.target.value)
              }
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      <div>
    <EmpList deptName={deptName} />
    </div>
    </div>


    {/* <Button variant="contained" color="primary" disableElevation >
      Add New Employee
    </Button>
    </div>
    <div>
    <EmpList /> */}
    </div>
  );
}
export default DeptDetails;
import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";
import { updateEmployee, setEditDisplay } from "../Redux/Action";

function EditEmpDetails(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [currentProject, setCurrentProject] = useState("");
  const [reportingTo, setReportingTo] = useState("");
  const [designation, setDesignation] = useState("");
  const user = useSelector((state) => state.details);
  const [deptName] = useState(useSelector((state) => state.deptName));
  let dName = deptName;
  const EmpId = useSelector((state) => state.EmpId);
  const employee = user.find(
    (item) => item.deptName === dName && item.id === EmpId
  );
  const open = useSelector((state) => state.editDisplay);
  const dispatch = useDispatch();

  useEffect(() => {
    if (employee !== undefined) {
      setName(employee.name);
      setEmail(employee.email);
      setGender(employee.gender);
      setAge(employee.age);
      setCurrentProject(employee.currentProject);
      setReportingTo(employee.reportingTo);
      setDesignation(employee.designation);
    }
  }, [employee]);

  const handleClose = () => {
    dispatch(setEditDisplay(false));
  };

  const handleSave = () => {
    dispatch(setEditDisplay(false));
    const employee = {
      deptName: deptName,
      id: EmpId,
      name: name,
      email: email,
      gender: gender,
      age: age,
      currentProject: currentProject,
      reportingTo: reportingTo,
      designation: designation,
    };
    dispatch(updateEmployee(employee));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit Employee Details</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            id="deptName"
            label="Department Name"
            type="text"
            fullWidth
            value={deptName}
            disabled
          />
          <TextField
            margin="dense"
            id="id"
            label="Employee Id"
            type="text"
            fullWidth
            value={EmpId}
            disabled
          />
          <TextField
            margin="dense"
            id="name"
            label="Employee Name"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="mail"
            label="Email Address"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="gender"
            label="Gender"
            type="text"
            fullWidth
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <TextField
            margin="dense"
            id="age"
            label="Age"
            type="text"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <TextField
            margin="dense"
            id="currentProject"
            label="CurrentProject"
            type="text"
            fullWidth
            value={currentProject}
            onChange={(e) => setCurrentProject(e.target.value)}
          />
          <TextField
            margin="dense"
            id="reportingTo"
            label="ReportingTo"
            type="text"
            fullWidth
            value={reportingTo}
            onChange={(e) => setReportingTo(e.target.value)}
          />
          <TextField
            margin="dense"
            id="designation"
            label="Designation"
            type="text"
            fullWidth
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
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
    </div>
  );
}

export default EditEmpDetails;

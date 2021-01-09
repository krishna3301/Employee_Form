import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import EditEmpDetails from '../EditEmpDetails'

function EmpDetails(props){
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  const [open, setOpen] = useState(true);
  
  const handleClickOpen = () => {
    setDisplay(true);
  };

  return(
    <div>  
      <div>
          <Button onClick={handleClickOpen} color="primary">
            Edit
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
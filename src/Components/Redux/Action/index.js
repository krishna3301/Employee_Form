
export const SaveDeptName = (deptName) => ({
  type: "Save_Dept_Name",
  payload: deptName
});

export const SaveDeptId = (deptId) => ({
  type: "Save_Dept_Id",
  payload: deptId
});

export const UpdateDeptList = (department) => ({
  type: "Update_User_List",
  payload: department
});

export const addDetails = (employee) => ({
  type: "Add_Employee_To_List",
  payload: employee
});

export const updateEmployee = (employee) => ({
  type: "Update_Employee_From_List",
  payload: employee
});

export const setEmpDisplay = (display) => ({
  type: "Update_Employee_Display",
  payload: display
});

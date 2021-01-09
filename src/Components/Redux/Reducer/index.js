
const initialState = {
  empDisplay: false,
  deptName: "",
  deptId: "",
  deptList: [],
  details: [],
  
};

function EmpReducer(state = initialState, action)
{
  switch(action.type)
  {
    case "Update_Employee_Display":
    state.empDisplay = action.payload;
    return {
      ...state,
      empDisplay: state.empDisplay,
    };

    case "Save_Dept_Name":
    state.deptName = action.payload;
    return {
      ...state,
      deptName: state.deptName,
    };

    case "Save_Dept_Id":
    state.deptId = action.payload;
    return {
      ...state,
      deptId: state.deptId,
    };

    case "Update_Dept_List":
    state.deptList.push(action.payload);
    return {
      ...state,
      deptList: [...state.deptList],
    };

    case "Add_Employee_To_List":
    state.details.push(action.payload);
    return {
      ...state,
      details: [...state.details],
    };

    case "Update_Employee_From_List":
    let updateUserIndex = state.details.findIndex(item => item.deptName === state.deptName && item.id === action.payload.id);
    state.details[updateUserIndex] = action.payload
    return {
      ...state,
      details: [...state.details]
    };

    default: 
    return state;
  }
}

export default EmpReducer;

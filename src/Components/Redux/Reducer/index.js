const initialState = {
  empDisplay: false,
  editDisplay: false,
  displayDept: false,
  deptName: "",
  EmpId: "",
  deptList: [],
  details: [],
};

function EmpReducer(state = initialState, action) {
  switch (action.type) {
    case "Update_Employee_Display":
      state.empDisplay = action.payload;
      return {
        ...state,
        empDisplay: state.empDisplay,
      };

    case "Edit_Employee_Display":
      state.editDisplay = action.payload;
      return {
        ...state,
        editDisplay: state.editDisplay,
      };

    case "Save_Dept_Name":
      state.deptName = action.payload;
      state.displayDept = true;
      return {
        ...state,
        deptName: state.deptName,
        EmpId: "",
        empDisplay: false,
        displayDept: true,
      };

    case "Save_Dept_Id":
      state.EmpId = action.payload;
      return {
        ...state,
        EmpId: state.EmpId,
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
      let updateUserIndex = state.details.findIndex(
        (item) =>
          item.deptName === state.deptName && item.id === action.payload.id
      );
      state.details[updateUserIndex] = action.payload;
      return {
        ...state,
        details: [...state.details],
      };

    case "Delete_Employee_from_List":
      let deleteUserIndex = state.details.findIndex(
        (item) => item.id === action.payload
      );
      let array = [...state.details];
      if (deleteUserIndex !== -1) {
        array.splice(deleteUserIndex, 1);
        state.EmpId = "";
      }
      state.empDisplay = false;
      return {
        ...state,
        details: [...array],
        EmpId: "",
        empDisplay: false,
      };

    case "Delete_Department_Record":
      if (state.deptName === action.payload) {
        state.deptName = "";
        state.displayDept = false;
      }
      let index = state.details.findIndex(
        (item) => item.id === state.EmpId && item.deptName === action.payload
      );
      if (index !== -1) {
        state.empDisplay = false;
      }
      let arr = [...state.deptList];
      let deptIndex = state.deptList.findIndex(
        (item) => item === action.payload
      );
      arr.splice(deptIndex, 1);
      let filteredArray = state.details.filter(
        (item) => item.deptName !== action.payload
      );
      return {
        ...state,
        empDisplay: false,
        deptName: state.deptName,
        deptList: [...arr],
        details: [...filteredArray],
        displayDept: state.displayDept,
      };

    default:
      return state;
  }
}

export default EmpReducer;

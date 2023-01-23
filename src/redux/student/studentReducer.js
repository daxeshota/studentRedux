import { ADD_STUDENT, GET_STUDENT, RMV_STUDENT } from "./studentType";

const initialState = [];
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          role: action.payload.role,
        },
      ];
    case RMV_STUDENT:
      return state.filter((state) => state.id !== action.payload);
    case GET_STUDENT:
      const stu = state.filter((state) => state.id === action.payload.id);
      const stuName = stu.map((item) => item.name);
      console.log(stuName);
      return state;

    default:
      return state;
  }
};

export default studentReducer;

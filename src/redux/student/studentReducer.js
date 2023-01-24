import { ADD_STUDENT, RMV_STUDENT } from "./studentType";

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

    default:
      return state;
  }
};

export default studentReducer;

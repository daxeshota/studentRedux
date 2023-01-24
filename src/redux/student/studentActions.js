import { ADD_STUDENT } from "./studentType";
import { RMV_STUDENT } from "./studentType";

export const addStudent = (student) => {
  // console.log(student)
  return {
    type: ADD_STUDENT,
    payload: student,
  };
};
export const rmvStudent = (id) => {
  console.log(id);
  return {
    type: RMV_STUDENT,
    payload: id,
  };
};

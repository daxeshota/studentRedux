import React, { useState } from "react";
import { connect } from "react-redux";

import { addStudent } from "../redux";

const Form = (props) => {
  // const arr = props.student.student;
  const addFunc = props.addStudent;
  const [myName, setMyName] = useState("");
  const [myRole, setMyRole] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (myName === "") {
      window.alert("Please enter your name !!");
    } else if (myRole === "") {
      window.alert("Please enter your role !!");
    } else {
      addFunc({
        id: Math.floor(Math.random() * 1000),
        name: myName,
        role: myRole,
      });
      setMyName("");
      setMyRole("");
    }
  };

  return (
    <form onSubmit={add}>
      <div className="container p-5 d-flex flex-column w-25 ">
        <div className="form-group d-flex mt-3 mb-2 align-items-center justify-content-between">
          <label htmlFor="name">Name :</label>
          <input
            type="text"
            className="form-control w-75"
            id="name"
            value={myName}
            onChange={(e) => setMyName(e.target.value)}
          />
        </div>
        <div className="form-group d-flex mt-3 mb-2 align-items-center justify-content-between">
          <label htmlFor="role">Role : </label>
          <input
            type="text"
            className="form-control w-75"
            id="role"
            value={myRole}
            onChange={(e) => setMyRole(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    student: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addStudent: (obj) => dispatch(addStudent(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
